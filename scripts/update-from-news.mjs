#!/usr/bin/env node
/**
 * News-based simulation updater — uses free APIs + Gemini Flash
 *
 * Flow:
 * 1. Fetch latest Iran war news from free RSS/news APIs
 * 2. Fetch oil price data from Yahoo Finance
 * 3. Send to Gemini to interpret and generate updated simulation parameters
 * 4. Write updated values to actors.js and SimulationEngine.js
 *
 * Environment variables needed:
 *   GEMINI_API_KEY — Gemini API key
 * Optional:
 *   GEMINI_MODEL — defaults to gemini-2.5-flash
 */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('ERROR: GEMINI_API_KEY environment variable not set');
  process.exit(1);
}

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// ==================== NEWS FETCHING ====================

async function fetchNews() {
  const allHeadlines = [];

  // Source 1: Google News RSS
  const topics = ['Iran+war+2026', 'Iran+Israel+strikes', 'Strait+of+Hormuz', 'Hezbollah+Israel', 'US+military+Iran'];
  for (const topic of topics) {
    try {
      const url = `https://news.google.com/rss/search?q=${topic}&hl=en&gl=US&ceid=US:en`;
      const resp = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
        signal: AbortSignal.timeout(8000),
      });
      if (!resp.ok) continue;
      const text = await resp.text();
      const titles = [...text.matchAll(/<title><!CDATA\[(.*?)\]><\/title>/g)].map(m => m[1]);
      const plainTitles = [...text.matchAll(/<title>(.*?)<\/title>/g)]
        .map(m => m[1])
        .filter(t => t !== 'Google News' && !t.includes('search') && t.length > 10);
      allHeadlines.push(...titles.slice(0, 4), ...plainTitles.slice(0, 4));
    } catch (e) {
      console.warn(`RSS fetch failed for ${topic}: ${e.message}`);
    }
  }

  // Source 2: Al Jazeera RSS (reliable, no bot blocking)
  try {
    const resp = await fetch('https://www.aljazeera.com/xml/rss/all.xml', {
      signal: AbortSignal.timeout(8000),
    });
    if (resp.ok) {
      const text = await resp.text();
      const titles = [...text.matchAll(/<title><!CDATA\[(.*?)\]><\/title>/g)].map(m => m[1]);
      const iranRelated = titles.filter(t =>
        /iran|israel|hezbollah|hormuz|tehran|gaza|lebanon|houthi|middle.east|nuclear/i.test(t)
      );
      allHeadlines.push(...iranRelated.slice(0, 10));
    }
  } catch (e) {
    console.warn('Al Jazeera RSS failed:', e.message);
  }

  // Source 3: Reuters RSS
  try {
    const resp = await fetch('https://www.reutersagency.com/feed/?best-topics=war-conflict', {
      signal: AbortSignal.timeout(8000),
    });
    if (resp.ok) {
      const text = await resp.text();
      const titles = [...text.matchAll(/<title>(.*?)<\/title>/g)].map(m => m[1]);
      const relevant = titles.filter(t =>
        /iran|israel|hezbollah|hormuz|gulf|military|strike|nuclear/i.test(t)
      );
      allHeadlines.push(...relevant.slice(0, 8));
    }
  } catch (e) {
    console.warn('Reuters RSS failed:', e.message);
  }

  const unique = [...new Set(allHeadlines)].slice(0, 40);
  console.log(`Fetched ${unique.length} unique headlines`);

  // If all sources failed, provide fallback context so Gemini can still generate params
  if (unique.length === 0) {
    console.warn('All news sources failed. Using fallback context.');
    return [
      'Ongoing US-Israel-Iran war since February 28, 2026',
      'Strait of Hormuz remains blockaded by Iran',
      'Oil prices elevated above $100/bbl due to conflict',
      'Hezbollah engaged against Israel from Lebanon',
      'Iranian protests continue amid economic collapse',
      'US has 2 carrier strike groups deployed in region',
      'Russia providing satellite intelligence to Iran',
      'China continues economic support for Iran',
    ];
  }

  return unique;
}

async function fetchOilPrice() {
  // Try multiple free endpoints
  const endpoints = [
    { url: 'https://query1.finance.yahoo.com/v8/finance/chart/BZ=F?range=1d&interval=1d', parse: (d) => d?.chart?.result?.[0]?.meta?.regularMarketPrice },
    { url: 'https://query1.finance.yahoo.com/v8/finance/chart/CL=F?range=1d&interval=1d', parse: (d) => d?.chart?.result?.[0]?.meta?.regularMarketPrice },
  ];

  for (const ep of endpoints) {
    try {
      const resp = await fetch(ep.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
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

  console.warn('All oil price sources failed. Using estimate.');
  return null;
}

// ==================== GEMINI INTERPRETATION ====================

async function askGemini(prompt) {
  const resp = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 4000,
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

  const prompt = `You are a military analyst calibrating a conflict simulation of the 2026 Iran War (US-Israel vs Iran, began Feb 28, 2026).

Today is ${today} (War Day ${warDay}). Current oil price: ${oilPrice ? '$' + oilPrice + '/bbl' : 'unknown'}.

Here are the latest news headlines:
${headlines.map((h, i) => `${i + 1}. ${h}`).join('\n')}

Based on these headlines and your knowledge, provide UPDATED simulation parameters as a JSON object. Each value should be 0-100 unless noted otherwise.

Return ONLY valid JSON, no markdown, no explanation. Use this exact structure:
{
  "lastUpdated": "${today}",
  "warDay": ${warDay},
  "summary": "Brief 1-2 sentence summary of current situation",
  "recentEvents": [
    {"date": "Mon DD", "text": "Event description", "severity": "critical|warning|stable|info"}
  ],
  "usa": {
    "militaryPower": 0-100,
    "airSuperiority": 0-100,
    "missileCapacity": 0-100,
    "droneCapability": 0-100,
    "navalControl": 0-100,
    "economy": 0-100,
    "internalStability": 0-100,
    "morale": 0-100,
    "precision": 0.0-1.0,
    "aggression": 0.0-1.0
  },
  "israel": {
    "militaryPower": 0-100,
    "airSuperiority": 0-100,
    "missileCapacity": 0-100,
    "droneCapability": 0-100,
    "navalControl": 0-100,
    "economy": 0-100,
    "internalStability": 0-100,
    "morale": 0-100,
    "precision": 0.0-1.0,
    "aggression": 0.0-1.0
  },
  "iran": {
    "militaryPower": 0-100,
    "airSuperiority": 0-100,
    "missileCapacity": 0-100,
    "droneCapability": 0-100,
    "navalControl": 0-100,
    "economy": 0-100,
    "internalStability": 0-100,
    "morale": 0-100,
    "precision": 0.0-1.0,
    "aggression": 0.0-1.0
  },
  "global": {
    "nuclearIndex": 0-100,
    "escalationLevel": 0-100,
    "oilDisruption": 0-100,
    "tradeImpact": 0-100,
    "sanctionsPressure": 0-100,
    "globalPressure": 0-100,
    "allianceInfluence": 0-100
  },
  "alliance": {
    "russiaIntelSupport": true/false,
    "chinaEconomicSupport": true/false,
    "s400Active": true/false,
    "mosaicDefense": true/false
  }
}

Be realistic and conservative. If headlines don't indicate a change, keep values similar to previous known state. Iran started the war degraded but with Russia/China support.`;

  const response = await askGemini(prompt);

  // Extract JSON from response
  const jsonMatch = response.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Gemini did not return valid JSON');

  return JSON.parse(jsonMatch[0]);
}

// ==================== FILE UPDATING ====================

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ACTORS_PATH = join(ROOT, 'src', 'engine', 'actors