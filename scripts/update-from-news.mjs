#!/usr/bin/env node
/**
 * News-based simulation updater — uses free APIs + Gemini Flash
 */

import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('ERROR: GEMINI_API_KEY environment variable not set');
  process.exit(1);
}

const GEMINI_API_VERSION = process.env.GEMINI_API_VERSION || 'v1beta';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/${GEMINI_API_VERSION}/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
const SOURCE_TIMEOUT_MS = 10000;
const ACLED_USERNAME = process.env.ACLED_USERNAME;
const ACLED_PASSWORD = process.env.ACLED_PASSWORD;
const LIVEUAMAP_FEED_URL = process.env.LIVEUAMAP_FEED_URL;
const IEA_API_KEY = process.env.IEA_API_KEY;
const IEA_DATA_URL = process.env.IEA_DATA_URL;
const OWID_ENERGY_DATA_URL = process.env.OWID_ENERGY_DATA_URL || 'https://raw.githubusercontent.com/owid/energy-data/master/owid-energy-data.csv';
const WAR_START_DATE = '2026-02-28';
const UPDATE_META_PUBLIC_PATH = ['public', 'update-meta.json'];
const CEASEFIRE_POSITIVE_PATTERNS = [
  /\bceasefire\b/gi,
  /\btruce\b/gi,
  /\barmistice\b/gi,
  /\bcessation of hostilities\b/gi,
  /\bpause in fighting\b/gi,
  /\boperational pause\b/gi,
  /\bde-escalation\b/gi,
  /\bhalt(?:ed)? strikes\b/gi,
  /\bmonitor(?:ed|ing)? ceasefire\b/gi,
];
const CEASEFIRE_NEGATIVE_PATTERNS = [
  /\breject(?:ed|s)? ceasefire\b/gi,
  /\bceasefire (?:collapsed|breakdown|failed|ended)\b/gi,
  /\bviolat(?:ed|ion|ing) the ceasefire\b/gi,
  /\brenewed strikes\b/gi,
  /\bresumed strikes\b/gi,
  /\bultimatum\b/gi,
];

function getUtcDateKey(date = new Date()) {
  return date.toISOString().split('T')[0];
}

function calculateWarDay(dateInput) {
  const targetDate = typeof dateInput === 'string'
    ? new Date(`${dateInput}T00:00:00.000Z`)
    : new Date(dateInput);
  const warStartDate = new Date(`${WAR_START_DATE}T00:00:00.000Z`);
  const diffDays = Math.floor((targetDate.getTime() - warStartDate.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays + 1);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function countPatternHits(text, patterns) {
  return patterns.reduce((count, pattern) => count + ((text.match(pattern) || []).length), 0);
}

function parseCeasefireDurationDays(text) {
  const normalized = text.toLowerCase();
  const numericMatch = normalized.match(/\b(\d+)[-\s]*(day|week)s?\b/);
  if (numericMatch) {
    const amount = Number(numericMatch[1]);
    if (!Number.isFinite(amount)) return null;
    return numericMatch[2].startsWith('week') ? amount * 7 : amount;
  }

  const wordToNumber = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
  };
  const wordMatch = normalized.match(/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen)[-\s]*(day|week)s?\b/);
  if (!wordMatch) return null;

  const amount = wordToNumber[wordMatch[1]];
  if (!amount) return null;
  return wordMatch[2].startsWith('week') ? amount * 7 : amount;
}

function deriveCeasefireSignal(sourceBundle) {
  const combinedText = [
    ...(sourceBundle.headlines || []),
    ...(sourceBundle.promptSections || []),
  ].join('\n');

  const positiveHits = countPatternHits(combinedText, CEASEFIRE_POSITIVE_PATTERNS);
  const negativeHits = countPatternHits(combinedText, CEASEFIRE_NEGATIVE_PATTERNS);
  const durationDays = parseCeasefireDurationDays(combinedText);

  const netSignal = positiveHits - (negativeHits * 1.25);
  const hasCeasefireLanguage = positiveHits > 0;
  const active = netSignal >= 2 || (hasCeasefireLanguage && durationDays >= 7 && negativeHits === 0);
  const fragile = !active && hasCeasefireLanguage && netSignal >= 0;
  const confidence = clamp(
    active
      ? 0.45 + (positiveHits * 0.12) - (negativeHits * 0.08) + (durationDays ? 0.12 : 0)
      : fragile
        ? 0.35 + (positiveHits * 0.08) - (negativeHits * 0.06)
        : 0.08 + (positiveHits * 0.03),
    0.05,
    0.98,
  );

  const status = active ? 'active' : (fragile ? 'fragile' : 'none');
  const summary = active
    ? `Ceasefire language is present across the source mix${durationDays ? ` with a reported duration around ${durationDays} days` : ''}, but the model should still treat it as reversible under renewed violations or proxy attacks.`
    : fragile
      ? 'De-escalation or ceasefire language is present, but it is mixed with warning signs that suggest the pause may be unstable.'
      : 'No durable ceasefire signal was detected across the latest source mix.';

  return {
    active,
    status,
    confidence: Number(confidence.toFixed(2)),
    durationDays: durationDays || null,
    summary,
    positiveHits,
    negativeHits,
  };
}

// ==================== NEWS FETCHING ====================

function uniqueNonEmpty(items, limit = items.length) {
  return [...new Set(items.map((item) => String(item || '').trim()).filter(Boolean))].slice(0, limit);
}

function decodeHtmlEntities(text) {
  return String(text || '')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');
}

function isGoogleRssArticleUrl(url) {
  return /^https?:\/\/news\.google\.com\/rss\/articles\//i.test(String(url || '').trim());
}

function isGoogleOwnedUrl(url) {
  const normalizedUrl = String(url || '').trim();
  if (!/^https?:\/\//i.test(normalizedUrl)) return false;

  try {
    const parsedUrl = new URL(normalizedUrl);
    const hostname = parsedUrl.hostname.toLowerCase();
    return hostname === 'news.google.com'
      || hostname === 'google.com'
      || hostname.endsWith('.google.com')
      || hostname.endsWith('.googleusercontent.com');
  } catch {
    return false;
  }
}

function extractGoogleArticleId(url) {
  const normalizedUrl = String(url || '').trim();
  const match = normalizedUrl.match(/news\.google\.com\/rss\/articles\/([^?/#]+)/i);
  return match?.[1] || null;
}

function buildGoogleArticlePageUrl(articleId) {
  if (!articleId) return null;
  return `https://news.google.com/articles/${articleId}?hl=en-US&gl=US&ceid=US:en`;
}

function isGoogleArticlePageUrl(url) {
  return /^https?:\/\/news\.google\.com\/articles\//i.test(String(url || '').trim());
}

function isValuableSourceUrl(url) {
  const normalizedUrl = String(url || '').trim();
  if (!/^https?:\/\//i.test(normalizedUrl) || isGoogleRssArticleUrl(normalizedUrl) || isGoogleOwnedUrl(normalizedUrl)) {
    return false;
  }

  try {
    const parsedUrl = new URL(normalizedUrl);
    const pathSegments = parsedUrl.pathname.split('/').filter(Boolean);
    if (pathSegments.length === 0) return false;
    if (pathSegments.length === 1 && ['en', 'news', 'world', 'international', 'amp', 'live'].includes(pathSegments[0].toLowerCase())) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

function isUsableEventSourceUrl(url) {
  return isValuableSourceUrl(url) || isGoogleArticlePageUrl(url);
}

function extractCandidateUrlsFromHtml(html) {
  return [...String(html || '').matchAll(/href="(.*?)"/gi)]
    .map((match) => decodeHtmlEntities(match[1] || '').trim())
    .filter(Boolean);
}

function getHost(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return '';
  }
}

function choosePublisherArticleUrl({ primaryUrl, sourceSiteUrl, candidateUrls = [] }) {
  const normalizedPrimary = String(primaryUrl || '').trim();
  const sourceHost = getHost(sourceSiteUrl);
  const directCandidates = uniqueNonEmpty([
    normalizedPrimary,
    ...candidateUrls,
  ]).filter((url) => isValuableSourceUrl(url));

  if (sourceHost) {
    const sameHost = directCandidates.find((url) => {
      const candidateHost = getHost(url);
      return candidateHost === sourceHost || candidateHost.endsWith(`.${sourceHost}`) || sourceHost.endsWith(`.${candidateHost}`);
    });
    if (sameHost) return sameHost;
  }

  return directCandidates[0] || null;
}

function chooseEventSourceUrl({ primaryUrl, sourceSiteUrl, candidateUrls = [] }) {
  const normalizedPrimary = String(primaryUrl || '').trim();
  const directPublisherUrl = choosePublisherArticleUrl({
    primaryUrl: normalizedPrimary,
    sourceSiteUrl,
    candidateUrls,
  });

  if (directPublisherUrl) return directPublisherUrl;

  const googleArticleId = extractGoogleArticleId(normalizedPrimary);
  if (googleArticleId) {
    return buildGoogleArticlePageUrl(googleArticleId);
  }

  return null;
}

function normalizeSourceHeadline(text) {
  return decodeHtmlEntities(text)
    .replace(/\s+/g, ' ')
    .replace(/^[\s"'`]+|[\s"'`]+$/g, '')
    .replace(/\s+-\s+[^-]+$/, '')
    .replace(/\s+\|\s+[^|]+$/, '')
    .replace(/\s+\[[^\]]+\]$/, '')
    .trim();
}

function isUsefulHeadline(text) {
  const normalized = normalizeSourceHeadline(text);
  if (!normalized || normalized.length < 18) return false;

  const lower = normalized.toLowerCase();
  if (
    lower === 'google news'
    || lower === 'iran war 2026'
    || lower === 'iran israel strikes'
    || lower === 'strait of hormuz'
    || lower === 'hezbollah israel'
    || lower === 'us military iran'
    || lower === 'iran war'
    || lower === 'iran israel strikes'
    || lower === 'iran israel war'
  ) {
    return false;
  }

  if (/^[A-Z][a-z]{2}\s+\d{1,2},?\s+\d{4}$/.test(normalized)) return false;
  if (/^(latest|live|video|photos?)$/i.test(lower)) return false;

  return /[A-Za-z]/.test(normalized);
}

function prepareHeadlines(items, limit) {
  const prepared = [];
  const seen = new Set();

  for (const item of items || []) {
    const normalized = normalizeSourceHeadline(item);
    if (!isUsefulHeadline(normalized)) continue;

    const key = normalized.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    prepared.push(normalized);

    if (prepared.length >= limit) break;
  }

  return prepared;
}

function formatCompactNumber(value) {
  if (value === null || value === undefined || value === '') return 'n/a';

  const number = Number(value);
  if (!Number.isFinite(number)) return String(value);

  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(number);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      row.push(field);
      field = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') i += 1;
      row.push(field);
      field = '';
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
      continue;
    }

    field += char;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

async function fetchJson(url, options = {}) {
  const resp = await fetch(url, {
    signal: AbortSignal.timeout(SOURCE_TIMEOUT_MS),
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!resp.ok) {
    throw new Error(`${resp.status} ${resp.statusText}`);
  }

  return resp.json();
}

async function fetchText(url, options = {}) {
  const resp = await fetch(url, {
    signal: AbortSignal.timeout(SOURCE_TIMEOUT_MS),
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!resp.ok) {
    throw new Error(`${resp.status} ${resp.statusText}`);
  }

  return resp.text();
}

async function fetchGoogleNewsHeadlines() {
  const headlines = [];
  const articles = [];
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
      const text = await fetchText(url);
      const items = [...text.matchAll(/<item>([\s\S]*?)<\/item>/g)]
        .map((match) => match[1])
        .map((itemText) => {
          const titleMatch = itemText.match(/<title>(.*?)<\/title>/i);
          const linkMatch = itemText.match(/<link>(.*?)<\/link>/i);
          const descriptionMatch = itemText.match(/<description>([\s\S]*?)<\/description>/i);
          const sourceTagMatch = itemText.match(/<source[^>]*url="(.*?)"[^>]*>(.*?)<\/source>/i);
          const title = normalizeSourceHeadline(titleMatch?.[1] || '');
          const link = decodeHtmlEntities(linkMatch?.[1] || '').trim();
          const descriptionHtml = decodeHtmlEntities(descriptionMatch?.[1] || '');
          const sourceSiteUrl = decodeHtmlEntities(sourceTagMatch?.[1] || '').trim();
          const sourceName = decodeHtmlEntities(sourceTagMatch?.[2] || '').trim() || 'Google News RSS';
          if (!isUsefulHeadline(title)) return null;
          return {
            headline: title,
            url: chooseEventSourceUrl({
              primaryUrl: /^https?:\/\//i.test(link) ? link : null,
              sourceSiteUrl,
              candidateUrls: extractCandidateUrlsFromHtml(descriptionHtml),
            }),
            sourceName,
          };
        })
        .filter(Boolean);
      headlines.push(...items.map((item) => item.headline).slice(0, 4));
      articles.push(...items.slice(0, 8));
    } catch (error) {
      console.warn(`Google News RSS fetch failed for ${topic}: ${error.message}`);
    }
  }

  const unique = prepareHeadlines(headlines, 20);
  const dedupedArticles = [];
  const seenArticles = new Set();
  for (const article of articles) {
    const key = `${article.headline.toLowerCase()}::${article.url || ''}`;
    if (seenArticles.has(key)) continue;
    seenArticles.add(key);
    if (!unique.includes(article.headline)) continue;
    dedupedArticles.push(article);
  }
  console.log(`Google News RSS: ${unique.length} headlines`);
  return {
    source: 'Google News RSS',
    headlines: unique,
    articles: dedupedArticles,
  };
}

async function fetchGdeltNews() {
  try {
    const query = '("Iran" OR "Israel" OR "Strait of Hormuz" OR Hezbollah OR "US military Iran")';
    const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(query)}&mode=artlist&format=json&maxrecords=20&sort=datedesc&timespan=1day`;
    const data = await fetchJson(url);
    const articles = Array.isArray(data?.articles) ? data.articles : [];

    const headlines = prepareHeadlines(
      articles.map((article) => article.title || article.seendate || article.url),
      12,
    );
    const signals = uniqueNonEmpty(
      articles.slice(0, 8).map((article) => {
        const outlet = article.domain || article.sourcecountry || 'GDELT';
        const tone = Number.isFinite(Number(article.tone)) ? ` tone ${Number(article.tone).toFixed(1)}` : '';
        return `${article.title || 'Untitled'} [${outlet}${tone}]`;
      }),
      8,
    );

    console.log(`GDELT: ${headlines.length} articles`);
    const headlineSet = new Set(headlines.map((headline) => headline.toLowerCase()));
    return {
      source: 'GDELT',
      headlines,
      signals,
      articles: articles
        .map((article) => ({
          headline: normalizeSourceHeadline(article.title || article.url || ''),
          url: article.url || null,
          sourceName: article.domain || 'GDELT',
        }))
        .filter((article) => article.headline && headlineSet.has(article.headline.toLowerCase())),
    };
  } catch (error) {
    console.warn(`GDELT fetch failed: ${error.message}`);
    return {
      source: 'GDELT',
      headlines: [],
      signals: [],
      articles: [],
    };
  }
}

async function fetchAcledEvents() {
  if (!ACLED_USERNAME || !ACLED_PASSWORD) {
    return {
      source: 'ACLED',
      signals: [],
      status: 'skipped (credentials not configured)',
    };
  }

  try {
    const tokenResp = await fetch('https://acleddata.com/oauth/token', {
      method: 'POST',
      signal: AbortSignal.timeout(SOURCE_TIMEOUT_MS),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        username: ACLED_USERNAME,
        password: ACLED_PASSWORD,
        grant_type: 'password',
        client_id: 'acled',
      }),
    });

    if (!tokenResp.ok) {
      throw new Error(`token request failed with ${tokenResp.status}`);
    }

    const tokenData = await tokenResp.json();
    const accessToken = tokenData.access_token;
    if (!accessToken) {
      throw new Error('no access token returned');
    }

    const year = new Date().getUTCFullYear();
    const params = new URLSearchParams({
      _format: 'json',
      country: 'Iran:OR:country=Israel:OR:country=Lebanon:OR:country=Iraq:OR:country=Yemen:OR:country=Syria',
      year: String(year),
      limit: '20',
      fields: 'event_date|country|event_type|sub_event_type|actor1|actor2|location|fatalities|notes',
    });
    const data = await fetchJson(`https://acleddata.com/api/acled/read?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const events = Array.isArray(data?.data) ? data.data : [];
    const signals = uniqueNonEmpty(events.slice(0, 8).map((event) => (
      `${event.event_date || 'recent'} ${event.country || ''}: ${event.sub_event_type || event.event_type || 'Event'} at ${event.location || 'unknown location'}`
      + `${event.fatalities ? ` (${event.fatalities} fatalities)` : ''}`
    )), 8);

    console.log(`ACLED: ${signals.length} events`);
    return {
      source: 'ACLED',
      signals,
      status: 'ok',
    };
  } catch (error) {
    console.warn(`ACLED fetch failed: ${error.message}`);
    return {
      source: 'ACLED',
      signals: [],
      status: `failed (${error.message})`,
    };
  }
}

async function fetchWorldBankContext() {
  try {
    const countries = 'IRN;ISR;USA';
    const urls = [
      {
        label: 'GDP',
        key: 'gdp',
        url: `https://api.worldbank.org/v2/country/${countries}/indicator/NY.GDP.MKTP.CD?format=json&per_page=200`,
      },
      {
        label: 'GDP growth',
        key: 'gdpGrowth',
        url: `https://api.worldbank.org/v2/country/${countries}/indicator/NY.GDP.MKTP.KD.ZG?format=json&per_page=200`,
      },
    ];

    const seriesResults = {};

    for (const series of urls) {
      const payload = await fetchJson(series.url);
      const entries = Array.isArray(payload?.[1]) ? payload[1] : [];
      for (const entry of entries) {
        if (entry?.value === null || entry?.value === undefined) continue;
        const country = entry.country?.value;
        if (!country) continue;
        if (!seriesResults[country]) seriesResults[country] = {};
        if (!seriesResults[country][series.key]) {
          seriesResults[country][series.key] = { value: entry.value, year: entry.date };
        }
      }
    }

    const signals = Object.entries(seriesResults).map(([country, values]) => (
      `${country}: GDP ${formatCompactNumber(values.gdp?.value)} (${values.gdp?.year || 'n/a'}), `
      + `growth ${values.gdpGrowth?.value !== undefined ? Number(values.gdpGrowth.value).toFixed(1) : 'n/a'}% (${values.gdpGrowth?.year || 'n/a'})`
    ));

    console.log(`World Bank: ${signals.length} country baselines`);
    return {
      source: 'World Bank',
      signals,
    };
  } catch (error) {
    console.warn(`World Bank fetch failed: ${error.message}`);
    return {
      source: 'World Bank',
      signals: [],
    };
  }
}

async function fetchOwidEnergyContext() {
  try {
    const csvText = await fetchText(OWID_ENERGY_DATA_URL);
    const [headerRow, ...rows] = parseCsv(csvText);
    if (!headerRow || headerRow.length === 0) throw new Error('missing header row');

    const columns = Object.fromEntries(headerRow.map((name, index) => [name, index]));
    const targetCountries = new Set(['Iran', 'Israel', 'United States']);
    const selected = new Map();

    for (const row of rows) {
      const country = row[columns.country];
      if (!targetCountries.has(country)) continue;

      const year = Number(row[columns.year]);
      if (!Number.isFinite(year)) continue;

      const previous = selected.get(country);
      if (!previous || year > previous.year) {
        selected.set(country, {
          year,
          primary_energy_consumption: row[columns.primary_energy_consumption] || '',
          electricity_demand: row[columns.electricity_demand] || '',
          oil_consumption: row[columns.oil_consumption] || '',
          gas_production: row[columns.gas_production] || '',
        });
      }
    }

    const signals = [...selected.entries()].map(([country, row]) => {
      const parts = [];
      if (row.primary_energy_consumption) parts.push(`primary energy ${formatCompactNumber(row.primary_energy_consumption)} TWh`);
      if (row.electricity_demand) parts.push(`electricity demand ${formatCompactNumber(row.electricity_demand)} TWh`);
      if (row.oil_consumption) parts.push(`oil consumption ${formatCompactNumber(row.oil_consumption)} TWh`);
      if (row.gas_production) parts.push(`gas production ${formatCompactNumber(row.gas_production)} TWh`);

      return `${country} (${row.year}): ${parts.join(', ')}`;
    });

    console.log(`OWID Energy: ${signals.length} country baselines`);
    return {
      source: 'Our World in Data',
      signals,
    };
  } catch (error) {
    console.warn(`OWID energy fetch failed: ${error.message}`);
    return {
      source: 'Our World in Data',
      signals: [],
    };
  }
}

async function fetchOptionalFeed(sourceName, url, headers = {}) {
  if (!url) {
    return { source: sourceName, signals: [], status: 'skipped (not configured)' };
  }

  try {
    const body = await fetchText(url, { headers });
    let signals = [];

    if (body.trim().startsWith('{') || body.trim().startsWith('[')) {
      const parsed = JSON.parse(body);
      const items = Array.isArray(parsed) ? parsed : (parsed.items || parsed.events || parsed.results || []);
      signals = uniqueNonEmpty(items.slice(0, 8).map((item) => (
        item.title || item.text || item.headline || item.summary || item.description || ''
      )), 8);
    } else {
      signals = uniqueNonEmpty(
        [...body.matchAll(/<title>(.*?)<\/title>/gi)].map((match) => match[1]).filter((title) => title.length > 10),
        8,
      );
    }

    console.log(`${sourceName}: ${signals.length} items`);
    return {
      source: sourceName,
      signals,
      status: 'ok',
    };
  } catch (error) {
    console.warn(`${sourceName} fetch failed: ${error.message}`);
    return {
      source: sourceName,
      signals: [],
      status: `failed (${error.message})`,
    };
  }
}

async function fetchIeaContext() {
  if (!IEA_API_KEY || !IEA_DATA_URL) {
    return {
      source: 'IEA',
      signals: [],
      status: 'skipped (API key or dataset URL not configured)',
    };
  }

  return fetchOptionalFeed('IEA', IEA_DATA_URL, {
    Authorization: `Bearer ${IEA_API_KEY}`,
  });
}

async function gatherSourceBundle() {
  const [
    googleNews,
    gdelt,
    acled,
    worldBank,
    owid,
    liveuamap,
    iea,
  ] = await Promise.all([
    fetchGoogleNewsHeadlines(),
    fetchGdeltNews(),
    fetchAcledEvents(),
    fetchWorldBankContext(),
    fetchOwidEnergyContext(),
    fetchOptionalFeed('Liveuamap', LIVEUAMAP_FEED_URL),
    fetchIeaContext(),
  ]);

  const sourceStatuses = [
    {
      source: googleNews.source,
      status: googleNews.headlines.length ? `ok (${googleNews.headlines.length} headlines)` : 'no recent items',
    },
    {
      source: gdelt.source,
      status: gdelt.headlines.length ? `ok (${gdelt.headlines.length} articles)` : 'no recent items',
    },
    {
      source: acled.source,
      status: acled.status || (acled.signals.length ? `ok (${acled.signals.length} events)` : 'no recent items'),
    },
    {
      source: worldBank.source,
      status: worldBank.signals.length ? `ok (${worldBank.signals.length} country baselines)` : 'unavailable',
    },
    {
      source: owid.source,
      status: owid.signals.length ? `ok (${owid.signals.length} country baselines)` : 'unavailable',
    },
    {
      source: liveuamap.source,
      status: liveuamap.status || (liveuamap.signals.length ? `ok (${liveuamap.signals.length} items)` : 'no recent items'),
    },
    {
      source: iea.source,
      status: iea.status || (iea.signals.length ? `ok (${iea.signals.length} items)` : 'no recent items'),
    },
  ];

  const headlines = uniqueNonEmpty([
    ...googleNews.headlines,
    ...gdelt.headlines,
    ...liveuamap.signals,
  ], 40);

  const promptSections = [
    `CORE STRUCTURED SIGNALS\n- ACLED: ${acled.signals.length ? acled.signals.join(' | ') : acled.status}\n- GDELT: ${gdelt.signals.length ? gdelt.signals.join(' | ') : 'no recent items'}\n- Google News RSS: ${googleNews.headlines.length ? googleNews.headlines.join(' | ') : 'no recent items'}`,
    `BASELINE ECONOMIC / ENERGY CONTEXT\n- World Bank: ${worldBank.signals.length ? worldBank.signals.join(' | ') : 'unavailable'}\n- Our World in Data: ${owid.signals.length ? owid.signals.join(' | ') : 'unavailable'}\n- Oil price: fetched separately`,
    `OPTIONAL SUPPLEMENTAL SOURCES\n- Liveuamap: ${liveuamap.signals.length ? liveuamap.signals.join(' | ') : liveuamap.status}\n- IEA: ${iea.signals.length ? iea.signals.join(' | ') : iea.status}`,
  ];

  if (headlines.length === 0) {
    headlines.push('Ongoing conflict in the Middle East remains the primary focus of international observers.');
  }

  return {
    headlines,
    articles: [
      ...(googleNews.articles || []),
      ...(gdelt.articles || []),
    ],
    promptSections,
    sourceStatuses,
    sourcesUsed: [
      googleNews.source,
      gdelt.source,
      acled.source,
      worldBank.source,
      owid.source,
      liveuamap.source,
      iea.source,
    ],
  };
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

function readExistingSnapshot() {
  try {
    const content = readFileSync(SNAPSHOT_PATH, 'utf-8');
    const match = content.match(/Object\.freeze\(([\s\S]*?)\);\s*export default/u);
    if (!match) return null;
    return JSON.parse(match[1]);
  } catch {
    return null;
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
        maxOutputTokens: 4096,
      },
    }),
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Gemini API error ${resp.status} using ${GEMINI_API_VERSION}/${GEMINI_MODEL}: ${err}`);
  }

  const data = await resp.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

function buildFallbackNarratives(params) {
  const escalation = params.global?.escalationLevel ?? 50;
  const oilDisruption = params.global?.oilDisruption ?? 50;
  const nuclearIndex = params.global?.nuclearIndex ?? 50;
  const summary = params.summary || 'Regional fighting continues under elevated geopolitical strain.';

  return [
    {
      perspective: 'Western Coalition',
      headline: escalation >= 80 ? 'Containment under severe strain' : 'Pressure with no clean finish',
      summary: `${summary} In Western policy circles, the conflict is framed as a coercive campaign whose costs and spillover are rising faster than its strategic clarity.`,
      tone: escalation >= 80 ? 'strained' : 'neutral',
    },
    {
      perspective: 'Iran and Aligned Networks',
      headline: escalation >= 80 ? 'Endurance as strategic leverage' : 'Survival through persistence',
      summary: 'Iranian and aligned narratives emphasize resilience, deterrence through endurance, and the claim that regional pressure can outlast superior conventional firepower.',
      tone: 'defiant',
    },
    {
      perspective: 'Regional States',
      headline: oilDisruption >= 75 ? 'Trade routes and state stability under pressure' : 'Contain the conflict, preserve the corridor',
      summary: 'Across neighboring states, the dominant lens is practical: prevent wider collapse, protect shipping and energy flows, and avoid being dragged into an open-ended regional war.',
      tone: oilDisruption >= 75 ? 'anxious' : 'neutral',
    },
    {
      perspective: 'Global South / Non-Aligned View',
      headline: nuclearIndex >= 70 ? 'Escalation seen as a system-level warning' : 'Conflict reframed as a test of global order',
      summary: 'Many non-aligned audiences read the war through geopolitics rather than alliance loyalty, focusing on economic shock, uneven enforcement of norms, and the possibility of a more fragmented world order.',
      tone: 'skeptical',
    },
  ];
}

function normalizeHeadlineText(text) {
  return normalizeSourceHeadline(text);
}

const MATCH_STOPWORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'of', 'to', 'for', 'in', 'on', 'at', 'with', 'from',
  'amid', 'after', 'before', 'over', 'under', 'into', 'as', 'by', 'up', 'off', 'says',
  'say', 'said', 'live', 'latest', 'update', 'updates', 'war', 'iran', 'israel',
]);

function tokenizeHeadlineText(text) {
  return normalizeHeadlineText(text)
    .split(/\s+/)
    .map((token) => token.replace(/[^a-z0-9]/g, ''))
    .filter((token) => token.length > 2 && !MATCH_STOPWORDS.has(token));
}

function computeHeadlineSimilarity(normalizedText, normalizedHeadline, textTokens, headlineTokens) {
  if (!normalizedText || !normalizedHeadline) return 0;
  if (normalizedText === normalizedHeadline) return 1;

  if (normalizedText.includes(normalizedHeadline) || normalizedHeadline.includes(normalizedText)) {
    return 0.9;
  }

  if (textTokens.length === 0 || headlineTokens.length === 0) {
    return 0;
  }

  const headlineTokenSet = new Set(headlineTokens);
  const textTokenSet = new Set(textTokens);
  const overlapCount = textTokens.filter((token) => headlineTokenSet.has(token)).length;
  if (overlapCount === 0) return 0;

  const unionSize = new Set([...textTokenSet, ...headlineTokenSet]).size || 1;
  const overlapRatio = overlapCount / Math.min(textTokenSet.size || 1, headlineTokenSet.size || 1);
  const jaccard = overlapCount / unionSize;
  return Math.max(jaccard, (overlapRatio * 0.7) + (jaccard * 0.3));
}

function inferEventSeverity(text) {
  const normalized = String(text || '').toLowerCase();
  if (/\bnuclear\b|\bmissile\b|\bstrike\b|\bairstrike\b|\bexplosion\b|\bultimatum\b|\bblockade\b/.test(normalized)) {
    return 'critical';
  }
  if (/\bceasefire\b|\btruce\b|\bpause\b|\btalks\b|\bmediat(?:e|ion)\b|\bdiplomatic\b/.test(normalized)) {
    return 'info';
  }
  if (/\bwarn(?:ing)?\b|\bproxy\b|\bshipping\b|\bfriction\b|\bthreat\b|\bpressure\b/.test(normalized)) {
    return 'warning';
  }
  return 'info';
}

function formatEventDateLabel(dateKey) {
  const date = new Date(`${dateKey}T00:00:00.000Z`);
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', timeZone: 'UTC' });
}

function buildSourceArticleIndex(sourceBundle) {
  const articles = Array.isArray(sourceBundle?.articles) ? sourceBundle.articles : [];
  const exactByHeadline = new Map();
  const candidates = [];

  for (const article of articles) {
    const normalizedHeadline = normalizeHeadlineText(article.headline);
    const normalizedUrl = isUsableEventSourceUrl(article.url) ? article.url : null;
    if (!normalizedHeadline || !normalizedUrl) continue;

    const indexedArticle = {
      ...article,
      url: normalizedUrl,
      normalizedHeadline,
      tokens: tokenizeHeadlineText(normalizedHeadline),
    };

    if (!exactByHeadline.has(normalizedHeadline)) {
      exactByHeadline.set(normalizedHeadline, indexedArticle);
    }

    candidates.push(indexedArticle);
  }

  return {
    exactByHeadline,
    candidates,
  };
}

function findSourceArticleForText(text, sourceArticleIndex, options = {}) {
  const normalizedText = normalizeHeadlineText(text);
  if (!normalizedText) return null;
  const usedUrls = options.usedUrls || new Set();

  if (sourceArticleIndex.exactByHeadline.has(normalizedText)) {
    return sourceArticleIndex.exactByHeadline.get(normalizedText);
  }

  const textTokens = tokenizeHeadlineText(normalizedText);
  let bestMatch = null;
  let bestScore = 0;

  for (const article of sourceArticleIndex.candidates) {
    if (article.url && usedUrls.has(article.url)) continue;

    const score = computeHeadlineSimilarity(
      normalizedText,
      article.normalizedHeadline,
      textTokens,
      article.tokens,
    );

    if (score > bestScore) {
      bestScore = score;
      bestMatch = article;
    }
  }

  return bestScore >= 0.52 ? bestMatch : null;
}

function buildFallbackRecentEvents(sourceBundle, today, summary) {
  const date = formatEventDateLabel(today);
  const sourceArticleIndex = buildSourceArticleIndex(sourceBundle);
  const usedUrls = new Set();
  const headlines = prepareHeadlines((sourceBundle.headlines || []).map(normalizeHeadlineText), 6);
  const events = headlines.map((headline) => {
    const matchedArticle = findSourceArticleForText(headline, sourceArticleIndex, { usedUrls });
    if (matchedArticle?.url) usedUrls.add(matchedArticle.url);
    return {
      date,
      text: headline,
      severity: inferEventSeverity(headline),
      sourceUrl: isUsableEventSourceUrl(matchedArticle?.url) ? matchedArticle.url : null,
      sourceName: matchedArticle?.sourceName || null,
    };
  });

  if (events.length > 0) return events;

  return [{
    date,
    text: summary,
    severity: 'info',
    sourceUrl: null,
    sourceName: null,
  }];
}

function buildHeuristicFallbackParams(previousSnapshot, sourceBundle, oilPrice, today, warDay, heuristicCeasefire) {
  const fallbackSnapshot = previousSnapshot || {};
  const previousGlobal = fallbackSnapshot.global || {};
  const baseEscalation = Number(previousGlobal.escalationLevel ?? 55);
  const baseNuclear = Number(previousGlobal.nuclearIndex ?? 55);
  const baseOil = Number(previousGlobal.oilDisruption ?? 50);

  let escalationLevel = baseEscalation;
  let nuclearIndex = baseNuclear;
  let oilDisruption = baseOil;

  if (heuristicCeasefire.status === 'active') {
    escalationLevel = Math.min(baseEscalation, 38);
    nuclearIndex = Math.min(baseNuclear, 55);
    oilDisruption = Math.min(Math.max(baseOil, oilPrice >= 95 ? 55 : baseOil), 62);
  } else if (heuristicCeasefire.status === 'fragile') {
    escalationLevel = Math.min(baseEscalation, 48);
    nuclearIndex = Math.min(baseNuclear, 62);
    oilDisruption = Math.min(Math.max(baseOil, oilPrice >= 95 ? 58 : baseOil), 70);
  } else if (heuristicCeasefire.status === 'collapsed') {
    escalationLevel = Math.max(baseEscalation, 62);
    nuclearIndex = Math.max(baseNuclear, 68);
    oilDisruption = Math.max(baseOil, oilPrice >= 95 ? 72 : 65);
  } else {
    oilDisruption = Math.max(baseOil, oilPrice >= 95 ? 60 : oilPrice >= 85 ? 52 : baseOil);
  }

  const summary = heuristicCeasefire.status === 'active'
    ? 'A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.'
    : heuristicCeasefire.status === 'fragile'
      ? 'A ceasefire or operational pause appears to be in effect, but ongoing pressure and proxy activity leave the regional picture unstable.'
      : heuristicCeasefire.status === 'collapsed'
        ? 'Ceasefire signaling appears to have broken down, and the latest reporting points back toward renewed regional escalation.'
        : (fallbackSnapshot.summary || 'Regional military and geopolitical pressure remain elevated across the conflict zone.');

  const recentEvents = buildFallbackRecentEvents(sourceBundle, today, summary);

  return {
    lastUpdated: today,
    lastSyncedAt: new Date().toISOString(),
    warDay,
    summary,
    recentEvents,
    narratives: fallbackSnapshot.narratives || [],
    usa: {
      militaryPower: fallbackSnapshot.actorOverrides?.usa?.metrics?.militaryPower ?? 90,
      precision: fallbackSnapshot.actorOverrides?.usa?.behavior?.precision ?? 0.8,
      aggression: fallbackSnapshot.actorOverrides?.usa?.behavior?.aggression ?? 0.8,
    },
    israel: {
      militaryPower: fallbackSnapshot.actorOverrides?.israel?.metrics?.militaryPower ?? 80,
      precision: fallbackSnapshot.actorOverrides?.israel?.behavior?.precision ?? 0.7,
      aggression: fallbackSnapshot.actorOverrides?.israel?.behavior?.aggression ?? 0.8,
    },
    iran: {
      militaryPower: fallbackSnapshot.actorOverrides?.iran?.metrics?.militaryPower ?? 70,
      precision: fallbackSnapshot.actorOverrides?.iran?.behavior?.precision ?? 0.6,
      aggression: fallbackSnapshot.actorOverrides?.iran?.behavior?.aggression ?? 0.8,
    },
    global: {
      nuclearIndex: Math.round(clamp(nuclearIndex, 0, 100)),
      escalationLevel: Math.round(clamp(escalationLevel, 0, 100)),
      oilDisruption: Math.round(clamp(oilDisruption, 0, 100)),
    },
    ceasefire: {
      active: heuristicCeasefire.active,
      status: heuristicCeasefire.status,
      confidence: heuristicCeasefire.confidence,
      durationDays: heuristicCeasefire.durationDays,
      summary: heuristicCeasefire.summary,
    },
    alliance: {
      russiaIntelSupport: fallbackSnapshot.alliance?.russiaIntelSupport ?? false,
      chinaEconomicSupport: fallbackSnapshot.alliance?.chinaEconomicSupport ?? false,
      s400Active: fallbackSnapshot.alliance?.s400Active ?? false,
      mosaicDefense: fallbackSnapshot.alliance?.mosaicDefense ?? false,
      unscShield: fallbackSnapshot.alliance?.unscShield ?? true,
    },
  };
}

function decorateUpdatedItems(previousItems = [], nextItems = [], currentSequence, getKey) {
  const previousMap = new Map(previousItems.map((item) => [getKey(item), item]));

  return nextItems.map((item) => {
    const key = getKey(item);
    const previous = previousMap.get(key);

    if (previous?.latestSinceUpdate !== undefined && currentSequence - previous.latestSinceUpdate < 4) {
      return { ...item, latestSinceUpdate: previous.latestSinceUpdate };
    }

    if (!previous) {
      return { ...item, latestSinceUpdate: currentSequence };
    }

    return item;
  });
}

function attachEventSources(events = [], sourceBundle) {
  const sourceArticleIndex = buildSourceArticleIndex(sourceBundle);
  const usedUrls = new Set(
    events
      .map((event) => (isUsableEventSourceUrl(event?.sourceUrl) ? event.sourceUrl : null))
      .filter(Boolean),
  );

  return events.map((event) => {
    if (isUsableEventSourceUrl(event?.sourceUrl)) return event;
    const matchedArticle = findSourceArticleForText(event?.text, sourceArticleIndex, { usedUrls });
    if (matchedArticle?.url) usedUrls.add(matchedArticle.url);
    const currentSourceName = String(event?.sourceName || '').trim();
    const shouldReplaceGenericSource = !currentSourceName || /^google news rss$/i.test(currentSourceName);
    return {
      ...event,
      sourceUrl: isUsableEventSourceUrl(matchedArticle?.url) ? matchedArticle.url : null,
      sourceName: shouldReplaceGenericSource ? (matchedArticle?.sourceName || currentSourceName || null) : currentSourceName,
    };
  });
}

function normalizeParams(rawParams, previousSnapshot, today, warDay) {
  const fallbackSnapshot = previousSnapshot || {};
  const syncTimestamp = new Date().toISOString();

  return {
    lastUpdated: rawParams?.lastUpdated || today,
    lastSyncedAt: rawParams?.lastSyncedAt || syncTimestamp,
    warDay: Number.isFinite(Number(rawParams?.warDay)) ? Number(rawParams.warDay) : warDay,
    summary: rawParams?.summary || fallbackSnapshot.summary || 'Regional fighting remains active across the conflict zone.',
    recentEvents: Array.isArray(rawParams?.recentEvents)
      ? rawParams.recentEvents.map((event) => ({
          date: event?.date || formatEventDateLabel(today),
          text: event?.text || '',
          severity: ['info', 'warning', 'critical', 'stable'].includes(event?.severity) ? event.severity : inferEventSeverity(event?.text || ''),
          sourceUrl: isUsableEventSourceUrl(event?.sourceUrl) ? event.sourceUrl : null,
          sourceName: event?.sourceName || null,
        }))
      : (fallbackSnapshot.recentEvents || []),
    narratives: Array.isArray(rawParams?.narratives) ? rawParams.narratives : (fallbackSnapshot.narratives || []),
    usa: {
      militaryPower: rawParams?.usa?.militaryPower ?? fallbackSnapshot.actorOverrides?.usa?.metrics?.militaryPower ?? 90,
      precision: rawParams?.usa?.precision ?? fallbackSnapshot.actorOverrides?.usa?.behavior?.precision ?? 0.8,
      aggression: rawParams?.usa?.aggression ?? fallbackSnapshot.actorOverrides?.usa?.behavior?.aggression ?? 0.9,
    },
    israel: {
      militaryPower: rawParams?.israel?.militaryPower ?? fallbackSnapshot.actorOverrides?.israel?.metrics?.militaryPower ?? 80,
      precision: rawParams?.israel?.precision ?? fallbackSnapshot.actorOverrides?.israel?.behavior?.precision ?? 0.7,
      aggression: rawParams?.israel?.aggression ?? fallbackSnapshot.actorOverrides?.israel?.behavior?.aggression ?? 0.8,
    },
    iran: {
      militaryPower: rawParams?.iran?.militaryPower ?? fallbackSnapshot.actorOverrides?.iran?.metrics?.militaryPower ?? 75,
      precision: rawParams?.iran?.precision ?? fallbackSnapshot.actorOverrides?.iran?.behavior?.precision ?? 0.6,
      aggression: rawParams?.iran?.aggression ?? fallbackSnapshot.actorOverrides?.iran?.behavior?.aggression ?? 0.9,
    },
    global: {
      nuclearIndex: rawParams?.global?.nuclearIndex ?? fallbackSnapshot.global?.nuclearIndex ?? 65,
      escalationLevel: rawParams?.global?.escalationLevel ?? fallbackSnapshot.global?.escalationLevel ?? 95,
      oilDisruption: rawParams?.global?.oilDisruption ?? fallbackSnapshot.global?.oilDisruption ?? 90,
    },
    ceasefire: {
      active: Boolean(rawParams?.ceasefire?.active ?? fallbackSnapshot.ceasefire?.active ?? false),
      status: rawParams?.ceasefire?.status || fallbackSnapshot.ceasefire?.status || 'none',
      confidence: clamp(
        Number(rawParams?.ceasefire?.confidence ?? fallbackSnapshot.ceasefire?.confidence ?? 0),
        0,
        1,
      ),
      durationDays: Number.isFinite(Number(rawParams?.ceasefire?.durationDays))
        ? Number(rawParams.ceasefire.durationDays)
        : (Number.isFinite(Number(fallbackSnapshot.ceasefire?.durationDays)) ? Number(fallbackSnapshot.ceasefire.durationDays) : null),
      summary: rawParams?.ceasefire?.summary || fallbackSnapshot.ceasefire?.summary || 'No sustained ceasefire is currently modeled.',
    },
    alliance: {
      russiaIntelSupport: rawParams?.alliance?.russiaIntelSupport ?? fallbackSnapshot.alliance?.russiaIntelSupport ?? false,
      chinaEconomicSupport: rawParams?.alliance?.chinaEconomicSupport ?? fallbackSnapshot.alliance?.chinaEconomicSupport ?? false,
      s400Active: rawParams?.alliance?.s400Active ?? fallbackSnapshot.alliance?.s400Active ?? false,
      mosaicDefense: rawParams?.alliance?.mosaicDefense ?? fallbackSnapshot.alliance?.mosaicDefense ?? false,
      unscShield: rawParams?.alliance?.unscShield ?? fallbackSnapshot.alliance?.unscShield ?? true,
    },
  };
}

async function interpretNews(sourceBundle, oilPrice, { includeNarratives = true } = {}) {
  const today = getUtcDateKey();
  const warDay = calculateWarDay(today);

const prompt = `You are a simulation data engine. Based on the following data, generate simulation parameters.
  
Today: ${today} (War Day ${warDay})
Oil Price: ${oilPrice ? '$' + oilPrice : 'unavailable'}
Source coverage in use: ${sourceBundle.sourcesUsed.join(', ')}

RECENT SIGNALS / HEADLINES:
${sourceBundle.headlines.join(' | ')}

SOURCE CONTEXT:
${sourceBundle.promptSections.join('\n\n')}

OUTPUT REQUIREMENT: Return ONLY a valid JSON object. No preamble, no explanation, no markdown blocks.

JSON Structure:
{
  "lastUpdated": "${today}",
  "lastSyncedAt": "${new Date().toISOString()}",
  "warDay": ${warDay},
  "summary": "1-sentence neutral factual summary",
  "recentEvents": [{"date": "MMM DD", "text": "description", "severity": "info|warning|critical", "sourceUrl": "https://...", "sourceName": "outlet"}],
  "ceasefire": {"active": false, "status": "none|fragile|active|collapsed", "confidence": 0.0-1.0, "durationDays": 0-60, "summary": "1-sentence neutral ceasefire status"},
  ${includeNarratives ? '"narratives": [{"perspective": "label", "headline": "short headline", "summary": "2-sentence narrative", "tone": "neutral|anxious|defiant|skeptical|strained"}],' : ''}
  "usa": {"militaryPower": 0-100, "precision": 0.0-1.0, "aggression": 0.0-1.0},
  "israel": {"militaryPower": 0-100, "precision": 0.0-1.0, "aggression": 0.0-1.0},
  "iran": {"militaryPower": 0-100, "precision": 0.0-1.0, "aggression": 0.0-1.0},
  "global": {"nuclearIndex": 0-100, "escalationLevel": 0-100, "oilDisruption": 0-100},
  "alliance": {"russiaIntelSupport": true, "chinaEconomicSupport": true}
}
Keep values realistic.
Prioritize structured conflict data in this order when available: ACLED > GDELT > Liveuamap > generic headlines.
Use World Bank / OWID / oil context only as baseline modifiers, not as evidence of breaking events.
Use current signals to shift metrics slightly rather than making extreme jumps.
Bias guardrails:
- Keep wording neutral, factual, and source-grounded.
- Avoid emotionally loaded phrases, propaganda framing, or moral judgments.
- Do not infer motives or declare collapse, victory, or defeat unless the inputs strongly support it.
- If evidence is mixed or thin, prefer smaller metric moves and cautious wording.
- If a ceasefire, truce, operational pause, or monitored de-escalation is clearly in effect, return a lower escalationLevel and populate the ceasefire object explicitly.
- If the ceasefire looks fragile or partially violated, prefer status "fragile" rather than "none".
- When a recent event clearly maps to a cited article, include sourceUrl and sourceName.
${includeNarratives ? '- Narrative items should summarize distinct geopolitical perspectives without endorsing them.' : ''}`;

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
const TOPBAR_PATH = join(ROOT, 'src', 'components', 'TopBar.jsx');
const SNAPSHOT_PATH = join(ROOT, 'src', 'engine', 'latestSnapshot.js');

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

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

  if (params.alliance) {
    for (const [key, val] of Object.entries(params.alliance)) {
      const regex = new RegExp(`(${escapeRegExp(key)}:\\s*{[\\s\\S]*?active:\\s*)(true|false)`);
      content = content.replace(regex, `$1${val}`);
    }
  }

  writeFileSync(ACTORS_PATH, content);
  console.log('Updated actors.js');
}

function updateEngineFile(params) {
  let content = readFileSync(ENGINE_PATH, 'utf-8');

  content = content.replace(/(const SIM_START = new Date\(')([^']+)('\);)/, `$1${params.lastUpdated}$3`);
  content = content.replace(/(const INITIAL_WAR_DAY = )\d+;/, `$1${params.warDay};`);

  for (const [key, val] of Object.entries(params.global)) {
    const regex = new RegExp(`(${key}:\\s*)(\\d+)`);
    content = content.replace(regex, `$1${val}`);
  }

  content = content.replace(
    /(nuclearPredictions:\s*calculateNuclearPredictions\()\d+(\))/,
    `$1${params.global.nuclearIndex}$2`,
  );

  const recentEvents = (params.recentEvents || [])
    .slice(0, 6)
    .map((event) => ({
      date: event.date || params.lastUpdated,
      text: event.text || params.summary,
      severity: ['info', 'warning', 'critical', 'stable'].includes(event.severity) ? event.severity : 'info',
    }));

  if (recentEvents.length === 0) {
    recentEvents.push({
      date: params.lastUpdated,
      text: params.summary,
      severity: 'info',
    });
  }

  const eventsBlock = `// AUTO-UPDATED RECENT EVENTS START\nconst AUTO_UPDATED_RECENT_EVENTS = ${JSON.stringify(recentEvents, null, 2)};\n// AUTO-UPDATED RECENT EVENTS END`;
  content = content.replace(
    /\/\/ AUTO-UPDATED RECENT EVENTS START[\s\S]*?\/\/ AUTO-UPDATED RECENT EVENTS END/,
    eventsBlock,
  );

  writeFileSync(ENGINE_PATH, content);
  console.log('Updated SimulationEngine.js');
}

function updateTopBarFile(params) {
  let content = readFileSync(TOPBAR_PATH, 'utf-8');

  content = content.replace(/(const SIM_START = new Date\(')([^']+)('\);)/, `$1${params.lastUpdated}$3`);
  content = content.replace(/(\(warDay \|\| )\d+(\) \+ dayCount)/, `$1${params.warDay}$2`);

  writeFileSync(TOPBAR_PATH, content);
  console.log('Updated TopBar.jsx');
}

function buildSnapshotModule(params, sourceBundle) {
  const snapshot = {
    updateSequence: params.updateSequence || 1,
    lastUpdated: params.lastUpdated,
    lastSyncedAt: params.lastSyncedAt || new Date().toISOString(),
    warDay: params.warDay,
    summary: params.summary,
    lastNarrativeUpdate: params.lastNarrativeUpdate || null,
    ceasefire: params.ceasefire,
    actorOverrides: {
      usa: {
        metrics: { militaryPower: params.usa?.militaryPower },
        behavior: { precision: params.usa?.precision, aggression: params.usa?.aggression },
      },
      israel: {
        metrics: { militaryPower: params.israel?.militaryPower },
        behavior: { precision: params.israel?.precision, aggression: params.israel?.aggression },
      },
      iran: {
        metrics: { militaryPower: params.iran?.militaryPower },
        behavior: { precision: params.iran?.precision, aggression: params.iran?.aggression },
      },
    },
    global: params.global,
    alliance: params.alliance,
    recentEvents: params.recentEvents,
    sourceStatuses: sourceBundle.sourceStatuses,
    narratives: params.narratives || [],
  };

  return `export const LATEST_SNAPSHOT = Object.freeze(${JSON.stringify(snapshot, null, 2)});\n\nexport default LATEST_SNAPSHOT;\n`;
}

function writeSnapshotFile(params, sourceBundle) {
  writeFileSync(SNAPSHOT_PATH, buildSnapshotModule(params, sourceBundle));
  console.log('Updated latestSnapshot.js');
}

function buildUpdateMeta(params) {
  return {
    updateSequence: params.updateSequence || 1,
    lastUpdated: params.lastUpdated,
    lastSyncedAt: params.lastSyncedAt || new Date().toISOString(),
    warDay: params.warDay,
    ceasefire: params.ceasefire,
  };
}

function writeUpdateMetaFile(params) {
  const metaPath = join(ROOT, ...UPDATE_META_PUBLIC_PATH);
  mkdirSync(dirname(metaPath), { recursive: true });
  writeFileSync(metaPath, `${JSON.stringify(buildUpdateMeta(params), null, 2)}\n`);
  console.log('Updated public/update-meta.json');
}

function applyCeasefireGuardrails(params, heuristicCeasefire, previousSnapshot) {
  const previousCeasefire = previousSnapshot?.ceasefire || {};
  const merged = {
    ...params.ceasefire,
    active: Boolean(params.ceasefire?.active || heuristicCeasefire.active),
    status: params.ceasefire?.status && params.ceasefire.status !== 'none'
      ? params.ceasefire.status
      : (heuristicCeasefire.status || previousCeasefire.status || 'none'),
    confidence: clamp(
      Math.max(
        Number(params.ceasefire?.confidence || 0),
        Number(heuristicCeasefire.confidence || 0),
      ),
      0,
      1,
    ),
    durationDays: params.ceasefire?.durationDays || heuristicCeasefire.durationDays || previousCeasefire.durationDays || null,
    summary: params.ceasefire?.summary && params.ceasefire.summary !== 'No sustained ceasefire is currently modeled.'
      ? params.ceasefire.summary
      : (heuristicCeasefire.summary || previousCeasefire.summary || 'No sustained ceasefire is currently modeled.'),
  };

  if (merged.active) {
    merged.status = merged.status === 'collapsed' ? 'fragile' : (merged.status || 'active');
    const escalationCap = merged.status === 'active' ? 38 : 48;
    const nuclearCap = merged.status === 'active' ? 58 : 68;
    params.global.escalationLevel = Math.min(params.global.escalationLevel, escalationCap);
    params.global.nuclearIndex = Math.min(params.global.nuclearIndex, nuclearCap);
    if (!/ceasefire|truce|pause/i.test(params.summary)) {
      params.summary = `A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.`;
    }
  } else if (merged.status === 'collapsed') {
    params.global.escalationLevel = Math.max(params.global.escalationLevel, 60);
  }

  params.ceasefire = merged;
  return params;
}

// ==================== MAIN ====================

async function main() {
  console.log(`\nSIMULATION NEWS UPDATER — ${new Date().toISOString()}`);
  
  const previousSnapshot = readExistingSnapshot();
  const sourceBundle = await gatherSourceBundle();
  const oilPrice = await fetchOilPrice();
  const heuristicCeasefire = deriveCeasefireSignal(sourceBundle);

  console.log('\nSource status summary:');
  for (const source of sourceBundle.sourceStatuses) {
    console.log(`- ${source.source}: ${source.status}`);
  }
  console.log(`- Oil market: ${oilPrice ? `ok ($${oilPrice})` : 'unavailable'}`);
  console.log(`- Ceasefire heuristic: ${heuristicCeasefire.status} (${heuristicCeasefire.confidence})`);
  
  console.log('Interpreting with Gemini...');
  const today = getUtcDateKey();
  const warDay = calculateWarDay(today);
  let rawParams;
  let usedHeuristicFallback = false;

  try {
    rawParams = await interpretNews(sourceBundle, oilPrice, { includeNarratives: true });
  } catch (error) {
    console.warn(`Primary interpretation failed: ${error.message}`);
    console.warn('Retrying with a smaller response shape...');
    try {
      rawParams = await interpretNews(sourceBundle, oilPrice, { includeNarratives: false });
    } catch (retryError) {
      console.warn(`Secondary interpretation failed: ${retryError.message}`);
      console.warn('Falling back to deterministic source-based snapshot generation...');
      rawParams = buildHeuristicFallbackParams(previousSnapshot, sourceBundle, oilPrice, today, warDay, heuristicCeasefire);
      usedHeuristicFallback = true;
    }
  }

  const params = applyCeasefireGuardrails(
    normalizeParams(rawParams, previousSnapshot, today, warDay),
    heuristicCeasefire,
    previousSnapshot,
  );
  const updateSequence = Number(previousSnapshot?.updateSequence || 0) + 1;

  if (previousSnapshot?.lastNarrativeUpdate === today && Array.isArray(previousSnapshot.narratives)) {
    params.narratives = previousSnapshot.narratives;
    params.lastNarrativeUpdate = previousSnapshot.lastNarrativeUpdate;
    console.log('Narratives reused from existing daily snapshot.');
  } else {
    params.narratives = Array.isArray(params.narratives) && params.narratives.length > 0
      ? params.narratives.slice(0, 4)
      : buildFallbackNarratives(params);
    params.lastNarrativeUpdate = today;
    console.log('Narratives refreshed for the current day.');
  }

  if (usedHeuristicFallback && (!Array.isArray(params.narratives) || params.narratives.length === 0)) {
    params.narratives = buildFallbackNarratives(params);
    params.lastNarrativeUpdate = today;
  }

  params.recentEvents = attachEventSources(params.recentEvents || [], sourceBundle);

  params.recentEvents = decorateUpdatedItems(
    previousSnapshot?.recentEvents || [],
    (params.recentEvents || []).slice(0, 6),
    updateSequence,
    (item) => `${item.date || ''}::${item.text || ''}`,
  );

  params.narratives = decorateUpdatedItems(
    previousSnapshot?.narratives || [],
    (params.narratives || []).slice(0, 4),
    updateSequence,
    (item) => `${item.perspective || ''}::${item.headline || ''}::${item.summary || ''}`,
  );

  params.updateSequence = updateSequence;
  
  console.log(`Summary: ${params.summary}`);
  if (usedHeuristicFallback) {
    console.log('Snapshot mode: heuristic fallback (Gemini unavailable)');
  }
  writeSnapshotFile(params, sourceBundle);
  writeUpdateMetaFile(params);
  
  console.log('\n✅ Successfully updated simulation files!');
}

main().catch((err) => {
  console.error('\nERROR:', err.message);
  process.exit(1);
});
