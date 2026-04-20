import React, { useMemo } from 'react';

function escapeXml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function clampText(value, maxLength = 28, maxLines = 3) {
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

  const usedWords = lines.join(' ').split(/\s+/).filter(Boolean).length;
  if (usedWords < words.length && lines.length) {
    lines[lines.length - 1] = `${lines[lines.length - 1].replace(/[. ]+$/, '')}...`;
  }

  return lines;
}

function makeTextBlock({ x, y, lines, fontSize, lineHeight, fill, weight = 500 }) {
  return `
    <text x="${x}" y="${y}" fill="${fill}" font-size="${fontSize}" font-family="Inter, Arial, sans-serif" font-weight="${weight}">
      ${lines.map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`).join('')}
    </text>
  `;
}

function buildSvg(report, conclusion, artDirection) {
  const headlineLines = clampText(report.shareTitle, 24, 3);
  const debriefLines = clampText(report.debrief, 34, 4);
  const summaryLines = clampText(report.shareSummary, 34, 3);
  const accent = report.verdict.color;
  const artTitle = artDirection?.title || 'ENDING VISUAL';
  const artTone = artDirection?.framing || 'strategic ending tableau';
  const artHotspots = (artDirection?.locations || ['Hormuz', 'Tehran', 'Beirut']).slice(0, 3);

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#04101c" />
          <stop offset="60%" stop-color="#081527" />
          <stop offset="100%" stop-color="#030812" />
        </linearGradient>
        <radialGradient id="glow" cx="72%" cy="18%" r="50%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="1500" fill="url(#bg)" />
      <rect width="1200" height="1500" fill="url(#glow)" />
      <g opacity="0.14">
        <path d="M0 180 H1200" stroke="#2563eb" />
        <path d="M0 360 H1200" stroke="#2563eb" />
        <path d="M0 540 H1200" stroke="#2563eb" />
        <path d="M0 720 H1200" stroke="#2563eb" />
        <path d="M0 900 H1200" stroke="#2563eb" />
        <path d="M0 1080 H1200" stroke="#2563eb" />
        <path d="M0 1260 H1200" stroke="#2563eb" />
        <path d="M200 0 V1500" stroke="#2563eb" />
        <path d="M400 0 V1500" stroke="#2563eb" />
        <path d="M600 0 V1500" stroke="#2563eb" />
        <path d="M800 0 V1500" stroke="#2563eb" />
        <path d="M1000 0 V1500" stroke="#2563eb" />
      </g>

      <rect x="54" y="54" width="1092" height="1392" rx="42" fill="rgba(4, 8, 18, 0.82)" stroke="rgba(148, 163, 184, 0.14)" />

      <rect x="90" y="96" width="240" height="40" rx="20" fill="rgba(8, 13, 25, 0.86)" stroke="rgba(148, 163, 184, 0.18)" />
      <text x="116" y="122" fill="${accent}" font-size="16" font-family="JetBrains Mono, monospace" letter-spacing="2">FINAL OUTCOME CARD</text>

      <text x="90" y="188" fill="#9fb3d9" font-size="18" font-family="JetBrains Mono, monospace" letter-spacing="3">COMMANDER PROFILE</text>
      <text x="90" y="238" fill="#f8fafc" font-size="42" font-family="Inter, Arial, sans-serif" font-weight="760">${escapeXml(report.commanderName)}</text>
      <text x="90" y="282" fill="#93c5fd" font-size="24" font-family="Inter, Arial, sans-serif" font-weight="600">${escapeXml(report.commandLabel.toUpperCase())}</text>

      <rect x="90" y="334" width="1020" height="300" rx="30" fill="rgba(8, 13, 25, 0.84)" stroke="rgba(148, 163, 184, 0.12)" />
      <circle cx="918" cy="470" r="110" fill="${accent}" opacity="0.12" />
      <circle cx="918" cy="470" r="74" fill="none" stroke="${accent}" stroke-width="3" opacity="0.52" />
      <circle cx="918" cy="470" r="42" fill="none" stroke="${accent}" stroke-width="3" opacity="0.82" />
      <circle cx="918" cy="470" r="16" fill="${accent}" />
      <path d="M250 518 C400 410, 540 400, 684 450 S 866 478, 980 438" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" opacity="0.88" />
      <path d="M250 560 C400 640, 560 626, 730 548" fill="none" stroke="#60a5fa" stroke-width="4" stroke-dasharray="10 10" opacity="0.7" />
      <circle cx="402" cy="448" r="10" fill="${accent}" />
      <circle cx="682" cy="450" r="10" fill="#f8fafc" />
      <circle cx="824" cy="468" r="10" fill="${accent}" />
      <text x="118" y="386" fill="#9fb3d9" font-size="16" font-family="JetBrains Mono, monospace" letter-spacing="2">VERDICT</text>
      <text x="118" y="450" fill="${accent}" font-size="72" font-family="Inter, Arial, sans-serif" font-weight="800">${escapeXml(report.verdict.label.toUpperCase())}</text>
      <text x="118" y="498" fill="#e2e8f0" font-size="28" font-family="Inter, Arial, sans-serif" font-weight="600">${escapeXml(conclusion.title)}</text>
      <text x="118" y="546" fill="#94a3b8" font-size="20" font-family="JetBrains Mono, monospace">${escapeXml(report.subtitle)}</text>
      <text x="118" y="594" fill="#9fb3d9" font-size="16" font-family="JetBrains Mono, monospace" letter-spacing="2">ENDING ART DIRECTION</text>
      <text x="118" y="620" fill="${accent}" font-size="22" font-family="Inter, Arial, sans-serif" font-weight="700">${escapeXml(artTitle)}</text>
      <text x="118" y="650" fill="#cbd5e1" font-size="18" font-family="Inter, Arial, sans-serif">${escapeXml(artTone)}</text>
      <text x="760" y="392" fill="#9fb3d9" font-size="14" font-family="JetBrains Mono, monospace" letter-spacing="2">HOTSPOTS</text>
      <text x="760" y="422" fill="#f8fafc" font-size="20" font-family="Inter, Arial, sans-serif" font-weight="700">${escapeXml(artHotspots.join(' • '))}</text>

      ${makeTextBlock({ x: 90, y: 730, lines: headlineLines, fontSize: 62, lineHeight: 70, fill: '#f8fafc', weight: 760 })}

      <rect x="90" y="930" width="620" height="238" rx="28" fill="rgba(10, 15, 26, 0.82)" stroke="rgba(148, 163, 184, 0.12)" />
      <text x="124" y="982" fill="#9fb3d9" font-size="16" font-family="JetBrains Mono, monospace" letter-spacing="2">AFTER-ACTION NOTE</text>
      ${makeTextBlock({ x: 124, y: 1036, lines: debriefLines, fontSize: 28, lineHeight: 38, fill: '#e2e8f0', weight: 600 })}

      <rect x="742" y="930" width="368" height="238" rx="28" fill="rgba(10, 15, 26, 0.82)" stroke="rgba(148, 163, 184, 0.12)" />
      <text x="776" y="982" fill="#9fb3d9" font-size="16" font-family="JetBrains Mono, monospace" letter-spacing="2">MISSION SNAPSHOT</text>
      <text x="776" y="1042" fill="#f8fafc" font-size="28" font-family="Inter, Arial, sans-serif" font-weight="700">Commands issued</text>
      <text x="1040" y="1042" fill="${accent}" font-size="34" font-family="JetBrains Mono, monospace" text-anchor="end">${escapeXml(report.reportStats[0].value)}</text>
      <text x="776" y="1094" fill="#f8fafc" font-size="28" font-family="Inter, Arial, sans-serif" font-weight="700">War day</text>
      <text x="1040" y="1094" fill="${accent}" font-size="34" font-family="JetBrains Mono, monospace" text-anchor="end">${escapeXml(report.reportStats[1].value)}</text>
      <text x="776" y="1146" fill="#f8fafc" font-size="28" font-family="Inter, Arial, sans-serif" font-weight="700">Oil disruption</text>
      <text x="1040" y="1146" fill="${accent}" font-size="34" font-family="JetBrains Mono, monospace" text-anchor="end">${escapeXml(report.reportStats[2].value)}</text>

      <rect x="90" y="1198" width="1020" height="172" rx="28" fill="rgba(10, 15, 26, 0.74)" stroke="rgba(148, 163, 184, 0.12)" />
      <text x="124" y="1250" fill="#9fb3d9" font-size="16" font-family="JetBrains Mono, monospace" letter-spacing="2">OUTCOME SUMMARY</text>
      ${makeTextBlock({ x: 124, y: 1304, lines: summaryLines, fontSize: 28, lineHeight: 38, fill: '#e2e8f0', weight: 600 })}

      <text x="90" y="1410" fill="#64748b" font-size="18" font-family="JetBrains Mono, monospace">war.limboidtech.com</text>
      <text x="1110" y="1410" fill="${accent}" font-size="18" font-family="JetBrains Mono, monospace" text-anchor="end">2026 IRAN WAR SIMULATION</text>
    </svg>
  `;
}

export default function ConclusionShareModal({ open, onClose, report, conclusion, artDirection }) {
  const [svgMarkup, dataUrl, shareText] = useMemo(() => {
    if (!open || !report || !conclusion) return [null, null, null];
    const svg = buildSvg(report, conclusion, artDirection);
    const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    const text = `${report.shareTitle}\n${report.shareSummary}\n\n${report.debrief}\n\nwar.limboidtech.com`;
    return [svg, url, text];
  }, [artDirection, open, report, conclusion]);

  if (!open || !report || !conclusion || !svgMarkup) return null;

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
    } catch {
      // Ignore clipboard failures.
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `iran-war-sim-${report.commanderName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-conclusion-card.svg`;
    link.click();
  };

  const handleShare = async () => {
    if (!navigator.share) {
      handleCopyText();
      return;
    }
    try {
      await navigator.share({
        title: report.shareTitle,
        text: shareText,
      });
    } catch {
      // Ignore share cancellation.
    }
  };

  return (
    <div className="snapshot-share-overlay" onClick={onClose}>
      <div className="snapshot-share-modal conclusion-share-modal" onClick={(event) => event.stopPropagation()}>
        <div className="snapshot-share-header">
          <div>
            <div className="snapshot-share-title">Share conclusion card</div>
            <div className="snapshot-share-subtitle">
              Personalized from your final outcome, side, and command record.
            </div>
          </div>
          <button className="snapshot-share-close" onClick={onClose}>×</button>
        </div>

        <div className="snapshot-share-grid">
          <div className="snapshot-share-preview conclusion-share-preview">
            <img src={dataUrl} alt="Personalized conclusion card preview" className="snapshot-preview-image" />
          </div>

          <div className="snapshot-share-side">
            <div className="snapshot-mode-card">
              <div className="snapshot-mode-label">Commander</div>
              <div className="snapshot-mode-value">{report.commanderName}</div>
            </div>
            <div className="snapshot-mode-card">
              <div className="snapshot-mode-label">Side</div>
              <div className="snapshot-mode-value">{report.factionLabel}</div>
            </div>
            <div className="snapshot-mode-card">
              <div className="snapshot-mode-label">Verdict</div>
              <div className="snapshot-mode-value" style={{ color: report.verdict.color }}>{report.verdict.label}</div>
            </div>
            <div className="snapshot-mode-card">
              <div className="snapshot-mode-label">Share angle</div>
              <div className="snapshot-mode-text">{report.debrief}</div>
            </div>

            <div className="snapshot-share-actions">
              <button className="snapshot-action-btn primary" onClick={handleDownload}>Download card</button>
              <button className="snapshot-action-btn" onClick={handleCopyText}>Copy caption</button>
              <button className="snapshot-action-btn" onClick={handleShare}>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
