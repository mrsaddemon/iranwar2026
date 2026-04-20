
import React, { useMemo, useState } from 'react';

const CARD_VARIANTS = {
  bulletin: {
    label: 'Bulletin',
    accent: '#60a5fa',
    accentSoft: 'rgba(96, 165, 250, 0.22)',
    glow: 'rgba(96, 165, 250, 0.34)',
    eyebrow: 'Situation bulletin',
    palette: ['#60a5fa', '#1d4ed8', '#0f172a'],
  },
  flash: {
    label: 'Breaking',
    accent: '#f97316',
    accentSoft: 'rgba(249, 115, 22, 0.24)',
    glow: 'rgba(249, 115, 22, 0.34)',
    eyebrow: 'Breaking shift',
    palette: ['#fb923c', '#ea580c', '#140c10'],
  },
  analyst: {
    label: 'Analyst',
    accent: '#22c55e',
    accentSoft: 'rgba(34, 197, 94, 0.22)',
    glow: 'rgba(34, 197, 94, 0.3)',
    eyebrow: 'Analyst outlook',
    palette: ['#4ade80', '#15803d', '#071611'],
  },
};

const CAPTION_MODES = {
  digest: 'Digest',
  dramatic: 'Dramatic',
  analyst: 'Analyst',
};

const PLATFORM_PRESETS = {
  x: {
    label: 'X / Threads',
    angle: 'Short, sharp, and dramatic. Best when the headline itself is the hook.',
    nudge: 'Lead with the biggest shift, then let the visual carry the signal density.',
    width: 1200,
    height: 675,
    ratioLabel: '16:9',
    layout: 'landscape',
  },
  reddit: {
    label: 'Reddit / Forums',
    angle: 'Context-first framing. Better for communities that want a reasoned setup.',
    nudge: 'Use the analyst tone and let the visual act like a mini dashboard screenshot.',
    width: 1200,
    height: 1200,
    ratioLabel: '1:1',
    layout: 'square',
  },
  story: {
    label: 'Stories / Reels',
    angle: 'Big visual, fast read, vertical pacing. This should feel like a poster, not a tweet.',
    nudge: 'Use the breaking mode, keep the caption tight, and let the top visual stop the scroll.',
    width: 1080,
    height: 1920,
    ratioLabel: '9:16',
    layout: 'portrait',
  },
};

function getTopScenario(predictions) {
  const entries = Object.entries(predictions || {});
  if (!entries.length) return { key: 'unknown', value: 0 };
  const [key, value] = entries.reduce((best, current) => (current[1] > best[1] ? current : best));
  return { key, value };
}

function formatScenarioLabel(key) {
  const labels = {
    deescalation: 'De-escalation',
    prolongedConflict: 'Prolonged Conflict',
    regionalExpansion: 'Regional Expansion',
    strategicBrinkmanship: 'Strategic Brinkmanship',
    internalInstability: 'Internal Instability',
    unknown: 'Unknown',
  };
  return labels[key] || key;
}

function escapeXml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function clampText(value, maxLength = 48, maxLines = 4) {
  const words = String(value || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLength && current) {
      lines.push(current);
      current = word;
      if (lines.length === maxLines) break;
    } else {
      current = next;
    }
  }

  if (current && lines.length < maxLines) {
    lines.push(current);
  }

  if (words.length && lines.length === maxLines) {
    const consumedWords = lines.join(' ').split(/\s+/).filter(Boolean).length;
    if (consumedWords < words.length) {
      lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[. ]+$/, '')}...`;
    }
  }

  return lines;
}

function getCeasefireLabel(ceasefireStatus) {
  if (ceasefireStatus?.active) {
    return ceasefireStatus.status === 'active' ? 'Holding' : 'Fragile';
  }
  return ceasefireStatus?.status === 'collapsed' ? 'Collapsed' : 'No active pause';
}

function buildHeadline({ topScenario, escalationLevel, ceasefireLabel }) {
  if (ceasefireLabel === 'Holding') {
    return 'Ceasefire Holds, But The Regional Picture Still Looks Fragile';
  }
  if (topScenario === 'Regional Expansion') {
    return 'The Model Now Sees Regional Spillover As The Main Risk';
  }
  if (topScenario === 'Strategic Brinkmanship') {
    return 'Brinkmanship Is Driving The Conflict More Than Breakthrough Diplomacy';
  }
  if (Math.round(escalationLevel) >= 70) {
    return 'Escalation Is Running Hotter Than A Stable Pause Can Contain';
  }
  return `${topScenario} Is The Dominant Path In The Current War Snapshot`;
}

function buildSignalChips({ topScenarioPct, escalationLevel, nuclearIndex, ceasefireLabel }) {
  return [
    `Top scenario ${topScenarioPct}%`,
    `Escalation ${Math.round(escalationLevel)}`,
    `Nuclear ${Math.round(nuclearIndex)}`,
    `Ceasefire ${ceasefireLabel}`,
  ];
}

function getHeatLabel(escalationLevel, nuclearIndex) {
  const combined = (Number(escalationLevel) * 0.72) + (Number(nuclearIndex) * 0.28);
  if (combined >= 78) return 'Critical heat';
  if (combined >= 58) return 'Elevated heat';
  if (combined >= 38) return 'Watch closely';
  return 'Contained for now';
}

function buildStoryHooks({ headline, topScenario, topScenarioPct, ceasefireLabel, escalationLevel }) {
  return [
    headline,
    `${topScenario} now leads the model at ${topScenarioPct}% while escalation sits at ${Math.round(escalationLevel)}.`,
    `Ceasefire status: ${ceasefireLabel}. This is the part most people miss when they only read headlines.`,
  ];
}

function buildCaption({ mode, currentDate, warDay, headline, summary, topScenario, topScenarioPct, escalationLevel, nuclearIndex, ceasefireLabel }) {
  if (mode === 'dramatic') {
    return [
      `${headline}.`,
      `War Day ${warDay} • ${currentDate}`,
      `${topScenario} leads at ${topScenarioPct}% with escalation at ${Math.round(escalationLevel)} and nuclear risk at ${Math.round(nuclearIndex)}.`,
      `Ceasefire status: ${ceasefireLabel}.`,
      'Built from the latest simulation snapshot on war.limboidtech.com',
    ].join('\n');
  }

  if (mode === 'analyst') {
    return [
      'Current Iran War simulation snapshot',
      `${currentDate} • War Day ${warDay}`,
      `Headline: ${headline}`,
      `Lead scenario: ${topScenario} (${topScenarioPct}%)`,
      `Escalation ${Math.round(escalationLevel)} | Nuclear ${Math.round(nuclearIndex)} | Ceasefire ${ceasefireLabel}`,
      `Summary: ${summary}`,
    ].join('\n');
  }

  return [
    '2026 Iran War Simulation',
    `${currentDate} • War Day ${warDay}`,
    `Top scenario: ${topScenario} (${topScenarioPct}%)`,
    `Escalation: ${Math.round(escalationLevel)} • Nuclear index: ${Math.round(nuclearIndex)}`,
    `Ceasefire: ${ceasefireLabel}`,
    summary,
  ].join('\n');
}

function makeTextMarkup({ x, y, lines, lineHeight, fontSize, fill, fontFamily, fontWeight, extra = '' }) {
  const tspans = lines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`)
    .join('');

  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${fontSize}" font-family="${fontFamily}" font-weight="${fontWeight || 400}" ${extra}>${tspans}</text>`;
}

function buildSignalChipMarkup(chips, { x, y, width, gap, accentSoft }) {
  return chips.map((chip, index) => {
    const chipX = x + ((index % 2) * (width + gap));
    const chipY = y + (Math.floor(index / 2) * 54);
    return `
      <g transform="translate(${chipX} ${chipY})">
        <rect width="${width}" height="40" rx="20" fill="rgba(8, 13, 25, 0.74)" stroke="${accentSoft}" />
        <text x="18" y="26" fill="#e2e8f0" font-size="16" font-family="JetBrains Mono, monospace">${escapeXml(chip)}</text>
      </g>
    `;
  }).join('');
}
function buildImagePanel({ x, y, width, height, variant, topScenario, heatLabel }) {
  const [accent, accentDeep] = variant.palette;
  const tehranX = Math.round(width * 0.74);
  const tehranY = Math.round(height * 0.28);
  const beirutX = Math.round(width * 0.28);
  const beirutY = Math.round(height * 0.39);
  const telAvivX = Math.round(width * 0.24);
  const telAvivY = Math.round(height * 0.48);
  const hormuzX = Math.round(width * 0.72);
  const hormuzY = Math.round(height * 0.73);
  const gulfR = Math.round(height * 0.14);
  const labelColor = '#9fb3d9';

  return `
    <g transform="translate(${x} ${y})">
      <rect width="${width}" height="${height}" rx="30" fill="rgba(5, 9, 18, 0.94)" stroke="${variant.accentSoft}" />
      <rect width="${width}" height="${height}" rx="30" fill="url(#panelGlow)" opacity="0.72" />
      <path d="M0 ${Math.round(height * 0.16)} H${width}" stroke="${accent}" opacity="0.08" />
      <path d="M0 ${Math.round(height * 0.5)} H${width}" stroke="${accent}" opacity="0.08" />
      <path d="M0 ${Math.round(height * 0.84)} H${width}" stroke="${accent}" opacity="0.08" />
      <path d="M${Math.round(width * 0.14)} ${Math.round(height * 0.82)}
               L${Math.round(width * 0.18)} ${Math.round(height * 0.66)}
               L${Math.round(width * 0.2)} ${Math.round(height * 0.52)}
               L${Math.round(width * 0.24)} ${Math.round(height * 0.38)}
               L${Math.round(width * 0.31)} ${Math.round(height * 0.26)}
               L${Math.round(width * 0.38)} ${Math.round(height * 0.2)}
               L${Math.round(width * 0.46)} ${Math.round(height * 0.22)}
               L${Math.round(width * 0.52)} ${Math.round(height * 0.28)}
               L${Math.round(width * 0.54)} ${Math.round(height * 0.4)}
               L${Math.round(width * 0.5)} ${Math.round(height * 0.56)}
               L${Math.round(width * 0.44)} ${Math.round(height * 0.7)}
               L${Math.round(width * 0.32)} ${Math.round(height * 0.78)}
               L${Math.round(width * 0.2)} ${Math.round(height * 0.84)} Z"
            fill="rgba(10, 18, 33, 0.92)"
            stroke="rgba(96, 165, 250, 0.18)" />
      <path d="M${Math.round(width * 0.56)} ${Math.round(height * 0.22)}
               L${Math.round(width * 0.68)} ${Math.round(height * 0.16)}
               L${Math.round(width * 0.8)} ${Math.round(height * 0.22)}
               L${Math.round(width * 0.84)} ${Math.round(height * 0.42)}
               L${Math.round(width * 0.8)} ${Math.round(height * 0.62)}
               L${Math.round(width * 0.72)} ${Math.round(height * 0.74)}
               L${Math.round(width * 0.62)} ${Math.round(height * 0.7)}
               L${Math.round(width * 0.56)} ${Math.round(height * 0.56)}
               L${Math.round(width * 0.54)} ${Math.round(height * 0.38)} Z"
            fill="${variant.accentSoft}"
            stroke="${accent}"
            opacity="0.94" />
      <path d="M${Math.round(width * 0.48)} ${Math.round(height * 0.54)}
               L${Math.round(width * 0.56)} ${Math.round(height * 0.58)}
               L${Math.round(width * 0.66)} ${Math.round(height * 0.72)}
               L${Math.round(width * 0.64)} ${Math.round(height * 0.84)}
               L${Math.round(width * 0.52)} ${Math.round(height * 0.86)}
               L${Math.round(width * 0.44)} ${Math.round(height * 0.76)}
               L${Math.round(width * 0.44)} ${Math.round(height * 0.62)} Z"
            fill="rgba(249, 115, 22, 0.08)"
            stroke="rgba(249, 115, 22, 0.24)"
            opacity="0.8" />
      <path d="M${telAvivX} ${telAvivY}
               C${Math.round(width * 0.38)} ${Math.round(height * 0.42)},
                ${Math.round(width * 0.52)} ${Math.round(height * 0.32)},
                ${tehranX} ${tehranY}"
            fill="none"
            stroke="${accent}"
            stroke-width="3"
            stroke-dasharray="10 10"
            stroke-linecap="round"
            opacity="0.88" />
      <path d="M${beirutX} ${beirutY}
               C${Math.round(width * 0.44)} ${Math.round(height * 0.52)},
                ${Math.round(width * 0.58)} ${Math.round(height * 0.66)},
                ${hormuzX} ${hormuzY}"
            fill="none"
            stroke="${accentDeep}"
            stroke-width="3"
            stroke-linecap="round"
            opacity="0.92" />
      <g>
        <circle cx="${tehranX}" cy="${tehranY}" r="${Math.round(height * 0.16)}" fill="${variant.glow}" opacity="0.36" />
        <circle cx="${hormuzX}" cy="${hormuzY}" r="${gulfR}" fill="${variant.glow}" opacity="0.22" />
        <circle cx="${hormuzX}" cy="${hormuzY}" r="${Math.round(gulfR * 0.72)}" fill="none" stroke="${accent}" stroke-width="2" opacity="0.8" />
        <circle cx="${hormuzX}" cy="${hormuzY}" r="${Math.round(gulfR * 0.42)}" fill="none" stroke="${accent}" stroke-width="2" opacity="0.92" />
      </g>
      <g opacity="0.9">
        <circle cx="${tehranX}" cy="${tehranY}" r="8" fill="${accent}" />
        <circle cx="${beirutX}" cy="${beirutY}" r="7" fill="#f8fafc" />
        <circle cx="${telAvivX}" cy="${telAvivY}" r="6" fill="#60a5fa" />
        <circle cx="${hormuzX}" cy="${hormuzY}" r="7" fill="${accent}" />
      </g>
      <g opacity="0.88">
        <rect x="22" y="18" width="132" height="30" rx="15" fill="rgba(8, 13, 25, 0.84)" stroke="${variant.accentSoft}" />
        <text x="36" y="38" fill="${accent}" font-size="13" font-family="JetBrains Mono, monospace">${escapeXml(heatLabel.toUpperCase())}</text>
        <text x="${tehranX + 16}" y="${tehranY - 10}" fill="${labelColor}" font-size="12" font-family="JetBrains Mono, monospace" letter-spacing="1.2">IRAN / TEHRAN</text>
        <text x="${beirutX - 12}" y="${beirutY - 16}" fill="${labelColor}" font-size="12" font-family="JetBrains Mono, monospace" letter-spacing="1.2">BEIRUT</text>
        <text x="${telAvivX - 22}" y="${telAvivY + 26}" fill="${labelColor}" font-size="12" font-family="JetBrains Mono, monospace" letter-spacing="1.2">TEL AVIV</text>
        <text x="${hormuzX - 44}" y="${hormuzY + 28}" fill="${labelColor}" font-size="12" font-family="JetBrains Mono, monospace" letter-spacing="1.2">HORMUZ</text>
        <text x="${Math.round(width * 0.54)}" y="44" fill="${accent}" font-size="14" font-family="JetBrains Mono, monospace" letter-spacing="1.6">${escapeXml(topScenario.toUpperCase())}</text>
      </g>
      <g transform="translate(${Math.round(width * 0.58)} ${Math.round(height * 0.72)})">
        <rect width="${Math.round(width * 0.28)}" height="60" rx="18" fill="rgba(8, 13, 25, 0.78)" stroke="${variant.accentSoft}" />
        <text x="18" y="22" fill="#9fb3d9" font-size="11" font-family="JetBrains Mono, monospace" letter-spacing="1.4">CONFLICT HEAT</text>
        <text x="18" y="44" fill="${accent}" font-size="24" font-family="Inter, Arial, sans-serif" font-weight="700">${escapeXml(heatLabel)}</text>
      </g>
    </g>
  `;
}

function buildLandscapeSvg({ width, height, currentDate, warDay, summary, topScenario, topScenarioPct, escalationLevel, nuclearIndex, ceasefireLabel, headline, signalChips, heatLabel, variant }) {
  const headlineLines = clampText(headline, 24, 3);
  const summaryLines = clampText(summary, 36, 3);
  const headlineY = 154;
  const headlineLineHeight = 44;
  const headlineBottom = headlineY + ((headlineLines.length - 1) * headlineLineHeight);
  const dateY = headlineBottom + 30;
  const chipsY = dateY + 24;
  const chips = buildSignalChipMarkup(signalChips.slice(0, 4), { x: 78, y: chipsY, width: 206, gap: 12, accentSoft: variant.accentSoft });
  const summaryY = chipsY + 98;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06101d" />
          <stop offset="52%" stop-color="#081526" />
          <stop offset="100%" stop-color="#040912" />
        </linearGradient>
        <radialGradient id="panelGlow" cx="76%" cy="18%" r="70%">
          <stop offset="0%" stop-color="${variant.glow}" />
          <stop offset="100%" stop-color="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <g opacity="0.16">
        <path d="M0 132 H${width}" stroke="#2563eb" />
        <path d="M0 266 H${width}" stroke="#2563eb" />
        <path d="M0 400 H${width}" stroke="#2563eb" />
        <path d="M0 534 H${width}" stroke="#2563eb" />
        <path d="M160 0 V${height}" stroke="#2563eb" />
        <path d="M320 0 V${height}" stroke="#2563eb" />
        <path d="M480 0 V${height}" stroke="#2563eb" />
        <path d="M640 0 V${height}" stroke="#2563eb" />
        <path d="M800 0 V${height}" stroke="#2563eb" />
        <path d="M960 0 V${height}" stroke="#2563eb" />
      </g>
      <rect x="42" y="42" width="${width - 84}" height="${height - 84}" rx="34" fill="rgba(4, 8, 18, 0.82)" stroke="${variant.accentSoft}" />
      <text x="78" y="94" fill="${variant.accent}" font-size="22" font-family="JetBrains Mono, monospace" letter-spacing="4">${escapeXml(variant.eyebrow.toUpperCase())}</text>
      <text x="78" y="126" fill="#93c5fd" font-size="18" font-family="JetBrains Mono, monospace" letter-spacing="2">2026 IRAN WAR SIMULATION</text>
      ${makeTextMarkup({ x: 78, y: headlineY, lines: headlineLines, lineHeight: headlineLineHeight, fontSize: 40, fill: '#f8fafc', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 760 })}
      <text x="78" y="${dateY}" fill="#94a3b8" font-size="18" font-family="JetBrains Mono, monospace">${escapeXml(currentDate)} • WAR DAY ${escapeXml(warDay)}</text>
      ${chips}
      <g transform="translate(78 ${summaryY})">
        <rect width="500" height="138" rx="26" fill="rgba(10, 15, 26, 0.78)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="28" y="40" fill="#9fb3d9" font-size="16" font-family="JetBrains Mono, monospace" letter-spacing="2">CURRENT SITUATION</text>
        ${makeTextMarkup({ x: 28, y: 80, lines: summaryLines, lineHeight: 24, fontSize: 17, fill: '#e2e8f0', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600 })}
      </g>
      ${buildImagePanel({ x: 620, y: 102, width: 502, height: 296, variant, topScenario, heatLabel })}
      <g transform="translate(620 428)">
        <rect width="242" height="112" rx="22" fill="rgba(10, 15, 26, 0.8)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="24" y="34" fill="#9fb3d9" font-size="13" font-family="JetBrains Mono, monospace" letter-spacing="1.6">TOP SCENARIO</text>
        ${makeTextMarkup({ x: 24, y: 64, lines: clampText(topScenario, 14, 2), lineHeight: 22, fontSize: 22, fill: '#f8fafc', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700 })}
        <text x="24" y="94" fill="${variant.accent}" font-size="22" font-family="JetBrains Mono, monospace" font-weight="700">${escapeXml(topScenarioPct)}%</text>
      </g>
      <g transform="translate(880 428)">
        <rect width="242" height="112" rx="22" fill="rgba(10, 15, 26, 0.8)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="24" y="34" fill="#9fb3d9" font-size="13" font-family="JetBrains Mono, monospace" letter-spacing="1.6">RISK PANEL</text>
        <text x="24" y="62" fill="#f97316" font-size="20" font-family="JetBrains Mono, monospace" font-weight="700">ESC ${escapeXml(Math.round(escalationLevel))}</text>
        <text x="24" y="86" fill="#ef4444" font-size="18" font-family="JetBrains Mono, monospace" font-weight="700">NUC ${escapeXml(Math.round(nuclearIndex))}</text>
        <text x="24" y="104" fill="${variant.accent}" font-size="16" font-family="Inter, Arial, sans-serif" font-weight="700">${escapeXml(ceasefireLabel)}</text>
      </g>
    </svg>
  `;
}
function buildSquareSvg({ width, height, currentDate, warDay, summary, topScenario, topScenarioPct, escalationLevel, nuclearIndex, ceasefireLabel, headline, signalChips, heatLabel, variant }) {
  const headlineLines = clampText(headline, 22, 3);
  const summaryLines = clampText(summary, 34, 3);
  const headlineY = 540;
  const headlineBottom = headlineY + ((headlineLines.length - 1) * 44);
  const dateY = headlineBottom + 28;
  const summaryY = dateY + 34;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06101d" />
          <stop offset="58%" stop-color="#081526" />
          <stop offset="100%" stop-color="#040912" />
        </linearGradient>
        <radialGradient id="panelGlow" cx="78%" cy="18%" r="72%">
          <stop offset="0%" stop-color="${variant.glow}" />
          <stop offset="100%" stop-color="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <g opacity="0.14">
        <path d="M0 240 H${width}" stroke="#2563eb" />
        <path d="M0 480 H${width}" stroke="#2563eb" />
        <path d="M0 720 H${width}" stroke="#2563eb" />
        <path d="M240 0 V${height}" stroke="#2563eb" />
        <path d="M480 0 V${height}" stroke="#2563eb" />
        <path d="M720 0 V${height}" stroke="#2563eb" />
        <path d="M960 0 V${height}" stroke="#2563eb" />
      </g>
      <rect x="44" y="44" width="${width - 88}" height="${height - 88}" rx="36" fill="rgba(4, 8, 18, 0.84)" stroke="${variant.accentSoft}" />
      ${buildImagePanel({ x: 74, y: 80, width: width - 148, height: 382, variant, topScenario, heatLabel })}
      <text x="74" y="500" fill="${variant.accent}" font-size="20" font-family="JetBrains Mono, monospace" letter-spacing="4">${escapeXml(variant.eyebrow.toUpperCase())}</text>
      ${makeTextMarkup({ x: 74, y: headlineY, lines: headlineLines, lineHeight: 44, fontSize: 40, fill: '#f8fafc', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 760 })}
      <text x="74" y="${dateY}" fill="#94a3b8" font-size="18" font-family="JetBrains Mono, monospace">${escapeXml(currentDate)} • WAR DAY ${escapeXml(warDay)}</text>
      <g transform="translate(74 ${summaryY})">
        <rect width="${width - 148}" height="164" rx="26" fill="rgba(10, 15, 26, 0.78)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="28" y="42" fill="#9fb3d9" font-size="16" font-family="JetBrains Mono, monospace" letter-spacing="2">CURRENT SITUATION</text>
        ${makeTextMarkup({ x: 28, y: 82, lines: summaryLines, lineHeight: 26, fontSize: 18, fill: '#e2e8f0', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600 })}
      </g>
      <g transform="translate(74 ${summaryY + 188})">
        <rect width="318" height="116" rx="22" fill="rgba(10, 15, 26, 0.78)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="22" y="30" fill="#9fb3d9" font-size="13" font-family="JetBrains Mono, monospace" letter-spacing="1.6">TOP SCENARIO</text>
        ${makeTextMarkup({ x: 22, y: 58, lines: clampText(topScenario, 14, 2), lineHeight: 22, fontSize: 24, fill: '#f8fafc', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700 })}
        <text x="22" y="96" fill="${variant.accent}" font-size="24" font-family="JetBrains Mono, monospace" font-weight="700">${escapeXml(topScenarioPct)}%</text>
      </g>
      <g transform="translate(414 ${summaryY + 188})">
        <rect width="324" height="116" rx="22" fill="rgba(10, 15, 26, 0.78)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="22" y="30" fill="#9fb3d9" font-size="13" font-family="JetBrains Mono, monospace" letter-spacing="1.6">RISK PANEL</text>
        <text x="22" y="60" fill="#f97316" font-size="22" font-family="JetBrains Mono, monospace" font-weight="700">ESC ${escapeXml(Math.round(escalationLevel))}</text>
        <text x="22" y="92" fill="#ef4444" font-size="22" font-family="JetBrains Mono, monospace" font-weight="700">NUC ${escapeXml(Math.round(nuclearIndex))}</text>
      </g>
      <g transform="translate(74 ${summaryY + 326})">
        <rect width="${width - 148}" height="94" rx="22" fill="rgba(10, 15, 26, 0.78)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="22" y="34" fill="#9fb3d9" font-size="13" font-family="JetBrains Mono, monospace" letter-spacing="1.6">CEASEFIRE / OUTLOOK</text>
        <text x="22" y="68" fill="${variant.accent}" font-size="28" font-family="Inter, Arial, sans-serif" font-weight="700">${escapeXml(ceasefireLabel)}</text>
      </g>
    </svg>
  `;
}

function buildPortraitSvg({ width, height, currentDate, warDay, summary, topScenario, topScenarioPct, escalationLevel, nuclearIndex, ceasefireLabel, headline, signalChips, heatLabel, variant }) {
  const headlineLines = clampText(headline, 18, 3);
  const summaryLines = clampText(summary, 28, 3);
  const headlineY = 720;
  const headlineBottom = headlineY + ((headlineLines.length - 1) * 54);
  const dateY = headlineBottom + 26;
  const summaryY = dateY + 38;
  const statsY = summaryY + 238;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#050d18" />
          <stop offset="54%" stop-color="#081628" />
          <stop offset="100%" stop-color="#03070f" />
        </linearGradient>
        <radialGradient id="panelGlow" cx="78%" cy="16%" r="80%">
          <stop offset="0%" stop-color="${variant.glow}" />
          <stop offset="100%" stop-color="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <g opacity="0.14">
        <path d="M0 240 H${width}" stroke="#2563eb" />
        <path d="M0 480 H${width}" stroke="#2563eb" />
        <path d="M0 720 H${width}" stroke="#2563eb" />
        <path d="M0 960 H${width}" stroke="#2563eb" />
        <path d="M0 1200 H${width}" stroke="#2563eb" />
        <path d="M0 1440 H${width}" stroke="#2563eb" />
        <path d="M0 1680 H${width}" stroke="#2563eb" />
        <path d="M180 0 V${height}" stroke="#2563eb" />
        <path d="M360 0 V${height}" stroke="#2563eb" />
        <path d="M540 0 V${height}" stroke="#2563eb" />
        <path d="M720 0 V${height}" stroke="#2563eb" />
        <path d="M900 0 V${height}" stroke="#2563eb" />
      </g>
      <rect x="46" y="46" width="${width - 92}" height="${height - 92}" rx="38" fill="rgba(4, 8, 18, 0.84)" stroke="${variant.accentSoft}" />
      ${buildImagePanel({ x: 74, y: 86, width: width - 148, height: 500, variant, topScenario, heatLabel })}
      <text x="74" y="640" fill="${variant.accent}" font-size="22" font-family="JetBrains Mono, monospace" letter-spacing="4">${escapeXml(variant.eyebrow.toUpperCase())}</text>
      ${makeTextMarkup({ x: 74, y: headlineY, lines: headlineLines, lineHeight: 54, fontSize: 50, fill: '#f8fafc', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 780 })}
      <text x="74" y="${dateY}" fill="#94a3b8" font-size="22" font-family="JetBrains Mono, monospace">${escapeXml(currentDate)} • WAR DAY ${escapeXml(warDay)}</text>
      <g transform="translate(74 ${summaryY})">
        <rect width="${width - 148}" height="194" rx="30" fill="rgba(10, 15, 26, 0.8)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="30" y="48" fill="#9fb3d9" font-size="17" font-family="JetBrains Mono, monospace" letter-spacing="2">CURRENT SITUATION</text>
        ${makeTextMarkup({ x: 30, y: 100, lines: summaryLines, lineHeight: 32, fontSize: 20, fill: '#e2e8f0', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600 })}
      </g>
      <g transform="translate(74 ${statsY})">
        <rect width="${width - 148}" height="104" rx="26" fill="rgba(10, 15, 26, 0.78)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="26" y="38" fill="#9fb3d9" font-size="14" font-family="JetBrains Mono, monospace" letter-spacing="1.6">TOP SCENARIO</text>
        <text x="26" y="72" fill="#f8fafc" font-size="30" font-family="Inter, Arial, sans-serif" font-weight="700">${escapeXml(topScenario)}</text>
        <text x="${width - 214}" y="72" fill="${variant.accent}" font-size="30" font-family="JetBrains Mono, monospace" font-weight="700">${escapeXml(topScenarioPct)}%</text>
      </g>
      <g transform="translate(74 ${statsY + 126})">
        <rect width="${Math.round((width - 170) / 2)}" height="138" rx="26" fill="rgba(10, 15, 26, 0.78)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="24" y="38" fill="#9fb3d9" font-size="14" font-family="JetBrains Mono, monospace" letter-spacing="1.6">ESCALATION</text>
        <text x="24" y="88" fill="#f97316" font-size="44" font-family="JetBrains Mono, monospace" font-weight="700">${escapeXml(Math.round(escalationLevel))}</text>
      </g>
      <g transform="translate(${92 + Math.round((width - 170) / 2)} ${statsY + 126})">
        <rect width="${Math.round((width - 170) / 2)}" height="138" rx="26" fill="rgba(10, 15, 26, 0.78)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="24" y="38" fill="#9fb3d9" font-size="14" font-family="JetBrains Mono, monospace" letter-spacing="1.6">NUCLEAR</text>
        <text x="24" y="88" fill="#ef4444" font-size="44" font-family="JetBrains Mono, monospace" font-weight="700">${escapeXml(Math.round(nuclearIndex))}</text>
      </g>
      <g transform="translate(74 ${statsY + 290})">
        <rect width="${width - 148}" height="110" rx="26" fill="rgba(10, 15, 26, 0.78)" stroke="rgba(148, 163, 184, 0.12)" />
        <text x="26" y="38" fill="#9fb3d9" font-size="14" font-family="JetBrains Mono, monospace" letter-spacing="1.6">CEASEFIRE / OUTLOOK</text>
        <text x="26" y="78" fill="${variant.accent}" font-size="36" font-family="Inter, Arial, sans-serif" font-weight="700">${escapeXml(ceasefireLabel)}</text>
      </g>
    </svg>
  `;
}
function buildShareSvg({ platform, variant, currentDate, warDay, summary, topScenario, topScenarioPct, escalationLevel, nuclearIndex, ceasefireLabel, headline, signalChips, heatLabel }) {
  const payload = {
    width: platform.width,
    height: platform.height,
    currentDate,
    warDay,
    summary,
    topScenario,
    topScenarioPct,
    escalationLevel,
    nuclearIndex,
    ceasefireLabel,
    headline,
    signalChips,
    heatLabel,
    variant,
  };

  if (platform.layout === 'portrait') return buildPortraitSvg(payload);
  if (platform.layout === 'square') return buildSquareSvg(payload);
  return buildLandscapeSvg(payload);
}

async function renderSvgToPng(svgMarkup, width, height) {
  const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  try {
    const image = new Image();
    image.decoding = 'async';
    const loadPromise = new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });
    image.src = url;
    await loadPromise;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas unavailable');
    ctx.drawImage(image, 0, 0, width, height);
    const pngUrl = canvas.toDataURL('image/png');
    const pngBlob = await new Promise((resolve, reject) => {
      canvas.toBlob((result) => {
        if (result) resolve(result);
        else reject(new Error('PNG conversion failed'));
      }, 'image/png');
    });
    return { pngUrl, pngBlob };
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function downloadPng(filename, svgMarkup, width, height) {
  const { pngUrl } = await renderSvgToPng(svgMarkup, width, height);
  const anchor = document.createElement('a');
  anchor.href = pngUrl;
  anchor.download = filename;
  anchor.click();
}

async function copyPngToClipboard(svgMarkup, width, height) {
  const { pngBlob } = await renderSvgToPng(svgMarkup, width, height);
  if (!navigator.clipboard?.write || typeof ClipboardItem === 'undefined') {
    throw new Error('Clipboard image copy not supported');
  }
  await navigator.clipboard.write([
    new ClipboardItem({
      'image/png': pngBlob,
    }),
  ]);
}

export default function ShareSnapshotModal({
  open,
  onClose,
  currentDate,
  warDay,
  nuclearIndex,
  escalationLevel,
  ceasefireStatus,
  predictions,
  summary,
}) {
  const [copiedMode, setCopiedMode] = useState(null);
  const [copiedImage, setCopiedImage] = useState(false);
  const [variantKey, setVariantKey] = useState('bulletin');
  const [captionMode, setCaptionMode] = useState('digest');
  const [platformKey, setPlatformKey] = useState('x');
  const variant = CARD_VARIANTS[variantKey];
  const platform = PLATFORM_PRESETS[platformKey];
  const topScenarioData = useMemo(() => getTopScenario(predictions), [predictions]);
  const topScenario = formatScenarioLabel(topScenarioData.key);
  const topScenarioPct = Math.round((topScenarioData.value || 0) * 100);
  const ceasefireLabel = getCeasefireLabel(ceasefireStatus);
  const headline = buildHeadline({ topScenario, escalationLevel, ceasefireLabel });
  const signalChips = buildSignalChips({ topScenarioPct, escalationLevel, nuclearIndex, ceasefireLabel });
  const heatLabel = getHeatLabel(escalationLevel, nuclearIndex);
  const storyHooks = useMemo(() => buildStoryHooks({
    headline,
    topScenario,
    topScenarioPct,
    ceasefireLabel,
    escalationLevel,
  }), [headline, topScenario, topScenarioPct, ceasefireLabel, escalationLevel]);

  const captions = useMemo(() => ({
    digest: buildCaption({
      mode: 'digest',
      currentDate,
      warDay,
      headline,
      summary,
      topScenario,
      topScenarioPct,
      escalationLevel,
      nuclearIndex,
      ceasefireLabel,
    }),
    dramatic: buildCaption({
      mode: 'dramatic',
      currentDate,
      warDay,
      headline,
      summary,
      topScenario,
      topScenarioPct,
      escalationLevel,
      nuclearIndex,
      ceasefireLabel,
    }),
    analyst: buildCaption({
      mode: 'analyst',
      currentDate,
      warDay,
      headline,
      summary,
      topScenario,
      topScenarioPct,
      escalationLevel,
      nuclearIndex,
      ceasefireLabel,
    }),
  }), [currentDate, warDay, headline, summary, topScenario, topScenarioPct, escalationLevel, nuclearIndex, ceasefireLabel]);

  const activeCaption = captions[captionMode];

  const svgMarkup = useMemo(() => buildShareSvg({
    platform,
    variant,
    currentDate,
    warDay,
    summary,
    topScenario,
    topScenarioPct,
    escalationLevel,
    nuclearIndex,
    ceasefireLabel,
    headline,
    signalChips,
    heatLabel,
  }), [platform, variant, currentDate, warDay, summary, topScenario, topScenarioPct, escalationLevel, nuclearIndex, ceasefireLabel, headline, signalChips, heatLabel]);

  if (!open) return null;
  const handleCopy = async (mode) => {
    await navigator.clipboard.writeText(captions[mode]);
    setCopiedMode(mode);
    window.setTimeout(() => setCopiedMode(null), 1600);
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: headline,
        text: activeCaption,
        url: window.location.href,
      });
      return;
    }
    await handleCopy(captionMode);
  };

  const handleDownload = async () => {
    await downloadPng(
      `iran-war-sim-${variantKey}-${platformKey}-${String(currentDate).toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`,
      svgMarkup,
      platform.width,
      platform.height,
    );
  };

  const handleCopyImage = async () => {
    try {
      await copyPngToClipboard(svgMarkup, platform.width, platform.height);
      setCopiedImage(true);
      window.setTimeout(() => setCopiedImage(false), 1600);
    } catch {
      await handleDownload();
    }
  };

  return (
    <div className="share-modal-overlay" onClick={onClose}>
      <div className="share-modal" onClick={(event) => event.stopPropagation()}>
        <div className="share-modal-top">
          <div>
            <div className="share-modal-label">Share snapshot</div>
            <div className="share-modal-title">Current conflict situation card</div>
            <div className="share-modal-subtitle">Now built as a real visual card with platform-specific layouts, wrapped typography, and a stronger image-first composition.</div>
          </div>
          <button className="share-modal-close" onClick={onClose} aria-label="Close share snapshot">
            ×
          </button>
        </div>

        <div className="share-toolbar">
          <div className="share-toolbar-group">
            <span className="share-toolbar-label">Card style</span>
            {Object.entries(CARD_VARIANTS).map(([key, config]) => (
              <button
                key={key}
                className={`share-chip ${variantKey === key ? 'active' : ''}`}
                onClick={() => setVariantKey(key)}
                style={variantKey === key ? { borderColor: config.accent, color: config.accent } : undefined}
              >
                {config.label}
              </button>
            ))}
          </div>
          <div className="share-toolbar-group">
            <span className="share-toolbar-label">Best for</span>
            {Object.entries(PLATFORM_PRESETS).map(([key, config]) => (
              <button
                key={key}
                className={`share-chip ${platformKey === key ? 'active' : ''}`}
                onClick={() => setPlatformKey(key)}
              >
                {config.label}
              </button>
            ))}
          </div>
          <div className="share-toolbar-group">
            <span className="share-toolbar-label">Caption</span>
            {Object.entries(CAPTION_MODES).map(([key, label]) => (
              <button
                key={key}
                className={`share-chip ${captionMode === key ? 'active' : ''}`}
                onClick={() => setCaptionMode(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="share-preview-meta">
          <div className="share-preview-meta-pill">Format {platform.ratioLabel}</div>
          <div className="share-preview-meta-pill">Visual {variant.label}</div>
          <div className="share-preview-meta-pill">Top scenario {topScenarioPct}%</div>
          <div className="share-preview-meta-pill">Heat {heatLabel}</div>
        </div>

        <div className={`share-render-preview share-render-preview-${platform.layout}`}>
          <div className="share-render-frame" dangerouslySetInnerHTML={{ __html: svgMarkup }} />
        </div>

        <div className="share-copy-grid">
          <div className="share-copy-card">
            <div className="share-copy-title">Caption ready to post</div>
            <div className="share-text-preview">{activeCaption}</div>
          </div>
          <div className="share-copy-card">
            <div className="share-copy-title">Posting angle</div>
            <div className="share-ideas-list">
              <div className="share-idea">{platform.angle}</div>
              <div className="share-idea">{platform.nudge}</div>
            </div>
          </div>
          <div className="share-copy-card">
            <div className="share-copy-title">Hook ideas</div>
            <div className="share-ideas-list">
              {storyHooks.map((hook) => (
                <div key={hook} className="share-idea">{hook}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="share-modal-actions">
          <button className="share-action-btn" onClick={() => handleCopy(captionMode)}>
            {copiedMode === captionMode ? 'Copied' : 'Copy caption'}
          </button>
          <button className="share-action-btn" onClick={handleShare}>
            Share
          </button>
          <button className="share-action-btn" onClick={handleCopyImage}>
            {copiedImage ? 'Image copied' : 'Copy image'}
          </button>
          <button className="share-action-btn primary" onClick={handleDownload}>
            Download card
          </button>
        </div>
      </div>
    </div>
  );
}
