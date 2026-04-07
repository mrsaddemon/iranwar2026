export const LATEST_SNAPSHOT = Object.freeze({
  lastUpdated: '2026-04-07',
  warDay: 38,
  summary: 'Regional fighting remains active across the US-Israel-Iran conflict, with direct US strikes on Iranian targets, continued missile and proxy activity, and persistent maritime disruption keeping escalation high.',
  lastNarrativeUpdate: '2026-04-07',
  actorOverrides: {
    usa: {
      metrics: { militaryPower: 90 },
      behavior: { precision: 0.8, aggression: 0.9 },
    },
    israel: {
      metrics: { militaryPower: 80 },
      behavior: { precision: 0.7, aggression: 0.8 },
    },
    iran: {
      metrics: { militaryPower: 75 },
      behavior: { precision: 0.6, aggression: 0.9 },
    },
  },
  global: {
    nuclearIndex: 65,
    escalationLevel: 95,
    oilDisruption: 90,
  },
  alliance: {
    russiaIntelSupport: false,
    chinaEconomicSupport: false,
    s400Active: false,
    mosaicDefense: false,
    unscShield: true,
  },
  recentEvents: [
    {
      date: 'Apr 07',
      text: 'US strikes military targets on Iran\'s Kharg Island.',
      severity: 'critical',
    },
    {
      date: 'Apr 07',
      text: 'Iran rejects a 45-day ceasefire proposal amid continued cross-border fighting and a looming Strait of Hormuz deadline.',
      severity: 'warning',
    },
    {
      date: 'Apr 07',
      text: 'Iranian missile strikes continue to affect sites in Israel.',
      severity: 'warning',
    },
    {
      date: 'Apr 07',
      text: 'Hezbollah and Houthi activity continues to widen regional pressure on Israel and Gulf shipping.',
      severity: 'warning',
    },
    {
      date: 'Apr 07',
      text: 'Israeli strikes in Lebanon continue alongside the broader regional escalation.',
      severity: 'warning',
    },
  ],
  sourceStatuses: [
    { source: 'Google News RSS', status: 'configured' },
    { source: 'GDELT', status: 'configured' },
    { source: 'ACLED', status: 'optional' },
    { source: 'World Bank', status: 'configured' },
    { source: 'Our World in Data', status: 'configured' },
    { source: 'Liveuamap', status: 'optional' },
    { source: 'IEA', status: 'optional' },
  ],
  narratives: [
    {
      perspective: 'Western Coalition',
      headline: 'Pressure without decisive closure',
      summary: 'In Washington and allied security circles, the war is framed as a coercive campaign that remains active but costly, with maritime disruption and regional spillover preventing a clean strategic outcome.',
      tone: 'strained',
    },
    {
      perspective: 'Iran and Aligned Networks',
      headline: 'Endurance as deterrence',
      summary: 'Iranian and aligned narratives present continued strikes, proxy activity, and survival under pressure as proof that asymmetry and endurance can offset coalition air and naval superiority.',
      tone: 'defiant',
    },
    {
      perspective: 'Regional States',
      headline: 'Contain the fire, keep trade moving',
      summary: 'Gulf and neighboring states are focused less on ideological victory than on preventing broader state failure, restoring shipping confidence, and limiting the spread of fallout across energy corridors.',
      tone: 'anxious',
    },
    {
      perspective: 'Global South / Non-Aligned View',
      headline: 'A test of world order credibility',
      summary: 'Across many non-aligned audiences, the conflict is viewed as another stress test for the international order, with attention on double standards, economic shock, and whether power is shifting away from older Western-centered arrangements.',
      tone: 'skeptical',
    },
  ],
});

export default LATEST_SNAPSHOT;
