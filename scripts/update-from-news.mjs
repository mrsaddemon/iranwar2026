#!/usr/bin/env node
/**
 * News-based simulation updater — uses free APIs + Gemini Flash
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('ERROR: GEMINI_API_KEY environment variable not set');
  process.exit(1);
}

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash-001'; // Updated to 2.0 Flash
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// ==================== NEWS FETCHING ====================

async function fetchNews() {
  const allHeadlines = [];
  const topics = [
    'Iran+war+2026',
    'Iran+Israel+strikes',
    'Strait+of+Hormuz',
    'Hezbollah+Israel',
    'US+military+Iran',
  ];

  for (const topic of topics) {
    try {
      const url = `https://news.google.com/rss/search?q=${topic}&hl=en&gl=US&ceid=US:en`;
      const resp = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: AbortSignal.timeout(8000),
      });
      if (!resp.ok) continue;
      const text = await resp.text();
      const titles = [...text.matchAll(/<title>(.*?)<\/title>/g)]
        .map((m) => m[1])
        .filter((t) => t !== 'Google News' && t.length > 10);
      allHeadlines.push(...titles.slice(0, 4));
    } catch (e) {
      console.warn(`RSS fetch failed for ${topic}: ${e.message}`);
    }
  }

  const unique = [...new Set(allHeadlines)].slice(0, 40);
  console.log(`Fetched ${unique.length} unique headlines`);

  if (unique.length === 0) {
    return ['Ongoing conflict in the Middle East remains the primary focus of international observers.'];
  }
  return unique;
}

async function fetchOilPrice() {
  const endpoints = [
    {
      url: 'https://query1.finance.yahoo.com/v8/finance/chart/BZ=F?range=1d&interval=1d',
      parse: (d) => d?.chart?.result?.[0]?.meta?.regularMarketPrice,
    },
  ];

  for (const ep of endpoints) {
    try {
      const resp = await fetch(ep.url, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
        signal: AbortSignal.timeout(8000),
      });
      if (!resp.ok) continue;
      const data = await resp.json();
      const price = ep.parse(data);
      if (price) return price;
    } catch (e) {
      console.warn(`Oil price fetch failed: ${e.message}`);
    }
  }
  return null;
}

// ==================== GEMINI & PARSING ====================

function safeParseJSON(text) {
  // Strip potential markdown code fences
  let cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();

  try {
    return JSON.parse(cleaned);
  } catch (e) {
    // Attempt deep cleaning of common AI formatting errors (smart quotes, trailing commas)
    let fixed = cleaned
      .replace(/[\u2018\u2019]/g, "'") 
      .replace(/[\u201C\u201D]/g, '"') 
      .replace(/,\s*}/g, '}')         
      .replace(/,\s*]/g, ']')         
      .replace(/\/\/.*/g, '')         
      .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, ''); 

    try {
      return JSON.parse(fixed);
    } catch (finalError) {
      console.error("JSON Parsing failed at character:", finalError.message);
      throw new Error(`Failed to parse Gemini response: ${finalError.message}`);
    }
  }
}

async function askGemini(prompt) {
  const resp = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.1, // Lower temperature for more consistent JSON
        maxOutputTokens: 2048,
      },
    }),
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Gemini API error ${resp.status}: ${err}`);
  }

  const data = await resp.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

async function interpretNews(headlines, oilPrice) {
  const today = new Date().toISOString().split('T')[0];
  const warStartDate = new Date('2026-02-28');
  const warDay = Math.floor((new Date() - warStartDate) / (1000 * 60 * 60 * 24));

  const prompt = `You are a simulation data engine. Based on the following data, generate simulation parameters.
  
Today: ${today} (War Day ${warDay})
Oil Price: ${oilPrice ? '$' + oilPrice : 'unavailable'}
Headlines: ${headlines.join(' | ')}

OUTPUT REQUIREMENT: Return ONLY a valid JSON object. No preamble, no explanation, no markdown blocks.

JSON Structure:
{
  "lastUpdated": "${today}",
  "warDay": ${warDay},
  "summary": "1-sentence summary",
  "recentEvents": [{"date": "MMM DD", "text": "description", "severity": "info|warning|critical"}],
  "usa": {"militaryPower": 0-100, "precision": 0.0-1.0, "aggression": 0.0-1.0},
  "israel": {"militaryPower": 0-100, "precision": 0.0-1.0, "aggression": 0.0-1.0},
  "iran": {"militaryPower": 0-100, "precision": 0.0-1.0, "aggression": 0.0-1.0},
  "global": {"nuclearIndex": 0-100, "escalationLevel": 0-100, "oilDisruption": 0-100},
  "alliance": {"russiaIntelSupport": true, "chinaEconomicSupport": true}
}
Keep values realistic. Use current headlines to shift metrics slightly.`;

  const response = await askGemini(prompt);
  
  // Find boundaries of the JSON object manually to avoid greedy regex issues
  const start = response.indexOf('{');
  const end = response.lastIndexOf('}');
  
  if (start === -1 || end === -1) {
    throw new Error('Gemini response did not contain a valid JSON object');
  }

  const jsonContent = response.substring(start, end + 1);
  return safeParseJSON(jsonContent);
}

// ==================== FILE UPDATING ====================

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ACTORS_PATH = join(ROOT, 'src', 'engine', 'actors.js');
const ENGINE_PATH = join(ROOT, 'src', 'engine', 'SimulationEngine.js');

function updateActorsFile(params) {
  let content = readFileSync(ACTORS_PATH, 'utf-8');
  const header = `// Last auto-updated: ${params.lastUpdated}\n// Summary: ${params.summary}\n`;
  
  if (content.startsWith('// Last auto-updated:')) {
    content = content.replace(/^\/\/ Last auto-updated:.*\n\/\/ Summary:.*\n/, header);
  } else {
    content = header + content;
  }

  // Update logic for actors
  const actors = ['usa', 'israel', 'iran'];
  actors.forEach(actor => {
    for (const [key, val] of Object.entries(params[actor])) {
      const category = ['precision', 'aggression'].includes(key) ? 'behavior' : 'metrics';
      const regex = new RegExp(`(${actor}:[\\s\\S]*?${category}:[\\s\\S]*?${key}:\\s*)([\\d.]+)`);
      content = content.replace(regex, `$1${val}`);
    }
  });

  writeFileSync(ACTORS_PATH, content);
  console.log('Updated actors.js');
}

function updateEngineFile(params) {
  let content = readFileSync(ENGINE_PATH, 'utf-8');
  
  // Update global metrics
  for (const [key, val] of Object.entries(params.global)) {
    const regex = new RegExp(`(${key}:\\s*)(\\d+)`);
    content = content.replace(regex, `$1${val}`);
  }
  
  content = content.replace(/(warDay:\s*)\d+/, `$1${params.warDay}`);
  writeFileSync(ENGINE_PATH, content);
  console.log('Updated SimulationEngine.js');
}

// ==================== MAIN ====================

async function main() {
  console.log(`\nSIMULATION NEWS UPDATER — ${new Date().toISOString()}`);
  
  const headlines = await fetchNews();
  const oilPrice = await fetchOilPrice();
  
  console.log('Interpreting with Gemini...');
  const params = await interpretNews(headlines, oilPrice);
  
  console.log(`Summary: ${params.summary}`);
  updateActorsFile(params);
  updateEngineFile(params);
  
  console.log('\n✅ Successfully updated simulation files!');
}

main().catch((err) => {
  console.error('\nERROR:', err.message);
  process.exit(1);
});
