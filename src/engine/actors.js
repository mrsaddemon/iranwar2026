// Last auto-updated: 2026-04-07
// Summary: The Middle East conflict has escalated dramatically on Day 38, with the US striking Iran's Kharg Island and President Trump issuing extreme threats of 'massive attacks' and 'killing a whole civilization' if Iran fails to meet a Strait of Hormuz deadline, while Iran rejects a ceasefire and continues strikes on Israel with its proxies.
// Actor behavior profiles — calibrated to real-world conditions as of April 6, 2026
// Active war: US-Israel vs Iran (began Feb 28, 2026)
// Strait of Hormuz blockaded, Hezbollah re-engaged, Khamenei assassinated

export const ACTOR_IDS = { USA: 'usa', ISRAEL: 'israel', IRAN: 'iran' };

export function createInitialActors() {
  return {
    usa: {
      id: 'usa',
      name: 'United States',
      shortName: 'USA',
      color: '#3b82f6',
      accentColor: '#60a5fa',
      flag: '\u{1F1FA}\u{1F1F8}',
      metrics: {
        // Largest ME deployment since 2003: 2 carriers, 16 warships, 120+ aircraft
        militaryPower: 95,
        airSuperiority: 95, // F-35s, F-22s, F-15s, B-2 bombers deployed
        missileCapacity: 90, // Tomahawk stocks depleted from June 2025 + Feb 2026 strikes
        droneCapability: 90,
        navalControl: 90, // Strong but Hormuz mining is a challenge; sank 16 minelayers
        economy: 75, // Oil shock causing stagflationary drag, but moderate impact
        internalStability: 70, // War fatigue, domestic debate on intervention scope
        morale: 70, // Military confidence high, public opinion divided
      },
      behavior: {
        aggression: 0.95, // Actively at war, escalation-prone posture
        precision: 0.7,
        diplomacyWeight: 0.25, // Diplomatic track collapsed Feb 28
        escalationThreshold: 0.65,
        asymmetricFactor: 0.1,
        nuclearThreshold: 0.95,
      },
      actionWeights: {
        airstrike: 0.22, // Primary action — airstrikes on Iranian targets
        missileStrike: 0.12, // Tomahawk/cruise missile strikes
        droneOperation: 0.12,
        navalManeuver: 0.20, // Hormuz demining, carrier ops critical
        cyberDisruption: 0.08,
        defensivePosture: 0.10, // Base defense vs Iranian retaliation
        diplomaticOutreach: 0.06, // Minimal — diplomacy collapsed
        strategicSignaling: 0.10,
      },
    },
    israel: {
      id: 'israel',
      name: 'Israel',
      shortName: 'ISR',
      color: '#a855f7',
      accentColor: '#c084fc',
      flag: '\u{1F1EE}\u{1F1F1}',
      metrics: {
        militaryPower: 85,
        airSuperiority: 90, // Strong, 200+ jets used in June 2025 strikes
        missileCapacity: 80, // Depleted from sustained ops since June 2025
        droneCapability: 80,
        navalControl: 70, // Limited naval role
        economy: 65, // War economy strain, prolonged multi-front conflict
        internalStability: 60, // Multi-front war fatigue — Gaza, Lebanon, Iran
        morale: 60, // Military success but civilian stress from missile attacks
      },
      behavior: {
        aggression: 0.85, // Very aggressive posture — multi-front ops
        precision: 0.8,
        diplomacyWeight: 0.15, // Minimal diplomacy
        escalationThreshold: 0.45, // Lower threshold — already escalated
        asymmetricFactor: 0.15,
        nuclearThreshold: 0.88,
      },
      actionWeights: {
        airstrike: 0.25, // Primary tool — strikes on Iran + Lebanon
        missileStrike: 0.15,
        droneOperation: 0.18,
        navalManeuver: 0.04,
        cyberDisruption: 0.10,
        defensivePosture: 0.12, // Iron Dome active vs 90+ Iranian strikes
        diplomaticOutreach: 0.04,
        strategicSignaling: 0.12,
      },
    },
    iran: {
      id: 'iran',
      name: 'Iran',
      shortName: 'IRN',
      color: '#ef4444',
      accentColor: '#f87171',
      flag: '\u{1F1EE}\u{1F1F7}',
      metrics: {
        // Rebalanced: ~50% IRGC + missile launchers intact (Apr 2 US intel assessment)
        // Russia provides S-400, satellite intel; China buys 90% of oil exports
        // "Mosaic Defense" decentralized C2 provides resilience
        militaryPower: 75, // ~50% IRGC capability intact per US assessment
        airSuperiority: 15, // S-400 from Russia active near Isfahan; Su-35 deliveries
        missileCapacity: 70, // ~50% launchers intact; tunnel networks protected reserves
        droneCapability: 60, // Thousands of Shahed drones remain; production ongoing
        navalControl: 25, // Navy largely destroyed BUT Hormuz mines + fast boats remain
        economy: 25, // China lifeline: 90% of oil exports, construction-for-oil barter
        internalStability: 35, // Protests ongoing but Mosaic Defense keeps regime functional
        morale: 40, // Defiant under attack; "rally around the flag" effect
      },
      behavior: {
        aggression: 0.9, // Fighting for regime survival
        precision: 0.5, // Improved: Russian satellite intel enables better targeting
        diplomacyWeight: 0.10, // Diplomacy dead after Khamenei assassination
        escalationThreshold: 0.30, // Very low — already in total war mode
        asymmetricFactor: 0.90, // Primary strategy: asymmetric warfare
        nuclearThreshold: 0.80, // Facilities destroyed but desperation factor
      },
      actionWeights: {
        airstrike: 0.02, // Air force nearly destroyed
        missileStrike: 0.28, // Primary weapon — ballistic missiles
        droneOperation: 0.25, // Suicide drone swarms
        navalManeuver: 0.18, // Hormuz mining, boat attacks, IRGC navy
        cyberDisruption: 0.08,
        defensivePosture: 0.05, // Limited defensive capability
        diplomaticOutreach: 0.04, // Minimal
        strategicSignaling: 0.10, // Proxy activation, Hezbollah coordination
      },
    },
  };
}

// Russia/China alliance support for Iran — based on confirmed intelligence
export const ALLIANCE_SUPPORT = {
  russiaIntelSupport: {
    active: true,
    label: 'Russian Satellite Intelligence',
    effect: 'Iran strike precision +10%',
    detail: 'Moscow providing real-time satellite imagery of US warships, aircraft, bases (CNN Mar 6)',
  },
  chinaEconomicSupport: {
    active: true,
    label: 'Chinese Economic Lifeline',
    effect: 'Iran economy degrades 50% slower',
    detail: 'China buys 90% of Iran oil (1.38M bbl/day), 1.2B barrel strategic reserve, construction-for-oil barter',
  },
  s400Active: {
    active: false,
    label: 'S-400 Air Defense (Russian)',
    effect: 'Airstrikes against Iran 20% less effective',
    detail: 'At least one S-400 division deployed near Isfahan; tested July 2025',
  },
  mosaicDefense: {
    active: false,
    label: 'Mosaic Defense Doctrine',
    effect: 'Iran stability degrades 40% slower',
    detail: 'Decentralized C2 structure; tunnel/cave networks protect launchers from targeting',
  },
  unscShield: {
    active: true,
    label: 'UNSC Veto Shield',
    effect: 'Blocks force authorization resolutions',
    detail: 'Russia + China + France vetoed Hormuz force resolution (Apr 2-3)',
  },
};

// Hezbollah + Houthi proxy forces
export const PROXY_FORCES = {
  hezbollah: {
    name: 'Hezbollah',
    sponsor: 'iran',
    target: 'israel',
    active: true,
    strength: 55,
    missileCapacity: 45,
    status: 'Full co-belligerent since March 2, 2026. 1,400+ casualties by April.',
  },
  houthis: {
    name: 'Houthi Forces',
    sponsor: 'iran',
    target: 'usa',
    active: true,
    strength: 35,
    missileCapacity: 30,
    status: 'Entered war March 28 with ballistic missile at Beersheba. Chinese satellite data support.',
  },
};

// Target sub-targets for player command targeting
export const TARGET_OPTIONS = {
  iran: [
    { id: 'military_bases', label: 'Military Bases', icon: '\u{1F3ED}', metricHit: 'militaryPower', damage: 8 },
    { id: 'nuclear_sites', label: 'Nuclear Sites', icon: '\u{2622}', metricHit: 'militaryPower', damage: 5, nuclearDelta: 8 },
    { id: 'oil_infra', label: 'Oil Infrastructure', icon: '\u{1F6E2}', metricHit: 'economy', damage: 10 },
    { id: 'irgc_positions', label: 'IRGC Positions', icon: '\u{1F396}', metricHit: 'militaryPower', damage: 10 },
    { id: 'air_defenses', label: 'Air Defenses (S-400)', icon: '\u{1F6E1}', metricHit: 'airSuperiority', damage: 12 },
    { id: 'leadership', label: 'Leadership Targets', icon: '\u{1F451}', metricHit: 'internalStability', damage: 8, nuclearDelta: 5 },
  ],
  israel: [
    { id: 'military_bases', label: 'Military Bases', icon: '\u{1F3ED}', metricHit: 'militaryPower', damage: 8 },
    { id: 'civilian_areas', label: 'Civilian Areas', icon: '\u{1F3D8}', metricHit: 'morale', damage: 6, globalPressureDelta: 10 },
    { id: 'air_bases', label: 'Air Bases', icon: '\u{2708}', metricHit: 'airSuperiority', damage: 10 },
    { id: 'naval_positions', label: 'Naval Positions', icon: '\u{2693}', metricHit: 'navalControl', damage: 8 },
  ],
  usa: [
    { id: 'gulf_bases', label: 'Gulf Bases (Al Udeid, Bahrain)', icon: '\u{1F3ED}', metricHit: 'militaryPower', damage: 6 },
    { id: 'carrier_groups', label: 'Carrier Strike Groups', icon: '\u{1F6A2}', metricHit: 'navalControl', damage: 10 },
    { id: 'air_bases', label: 'Air Bases', icon: '\u{2708}', metricHit: 'airSuperiority', damage: 8 },
    { id: 'troops', label: 'Ground Forces', icon: '\u{1F396}', metricHit: 'militaryPower', damage: 5, stabilityDelta: -3 },
  ],
};

export const ACTION_TYPES = [
  'airstrike',
  'missileStrike',
  'droneOperation',
  'navalManeuver',
  'cyberDisruption',
  'defensivePosture',
  'diplomaticOutreach',
  'strategicSignaling',
];

export const ACTION_LABELS = {
  airstrike: 'Airstrike',
  missileStrike: 'Missile Strike',
  droneOperation: 'Drone Operation',
  navalManeuver: 'Naval Maneuver',
  cyberDisruption: 'Cyber Disruption',
  defensivePosture: 'Defensive Posture',
  diplomaticOutreach: 'Diplomatic Outreach',
  strategicSignaling: 'Strategic Signaling',
};

export const ACTION_SEVERITY = {
  airstrike: 'critical',
  missileStrike: 'critical',
  droneOperation: 'warning',
  navalManeuver: 'warning',
  cyberDisruption: 'warning',
  defensivePosture: 'stable',
  diplomaticOutreach: 'stable',
  strategicSignaling: 'info',
};

export const ACTION_ICONS = {
  airstrike: '\u{2708}',
  missileStrike: '\u{1F680}',
  droneOperation: '\u{1F6E9}',
  navalManeuver: '\u{1F6A2}',
  cyberDisruption: '\u{1F4BB}',
  defensivePosture: '\u{1F6E1}',
  diplomaticOutreach: '\u{1F91D}',
  strategicSignaling: '\u{1F4E1}',
  // Special actions
  deployMOAB: '\u{1F4A3}',
  carrierStrike: '\u{2693}',
  fullNavalBlockade: '\u{1F6A7}',
  ironDomeSurge: '\u{1F6E1}',
  nuclearAmbiguity: '\u{2622}',
  massEvacuation: '\u{1F6A8}',
  hormuzMineSurge: '\u{1F4A5}',
  activateAllProxies: '\u{1F525}',
  nuclearBreakout: '\u{2622}',
  proposeCeasefire: '\u{1F54A}',
  acceptCeasefire: '\u{2705}',
  nuclearStrike: '\u{2622}',
};

// Special actions per country — stronger effects but with tradeoffs
export const SPECIAL_ACTIONS = {
  usa: [
    { id: 'deployMOAB', label: 'Deploy MOAB', icon: '\u{1F4A3}', severity: 'critical',
      desc: 'Massive Ordnance Air Blast on hardened targets. Devastating but escalatory.',
      effects: { escalation: +12, nuclearIndex: +8, targetMilitary: -15, morale: +5, globalPressure: +10 } },
    { id: 'carrierStrike', label: 'Carrier Strike', icon: '\u{2693}', severity: 'critical',
      desc: 'Full carrier group coordinated strike. Maximum air/naval power projection.',
      effects: { escalation: +8, targetMilitary: -10, targetNaval: -8, oilDisruption: +5 } },
    { id: 'fullNavalBlockade', label: 'Full Naval Blockade', icon: '\u{1F6A7}', severity: 'warning',
      desc: 'Enforce total maritime blockade of Iran. Cuts trade but strains navy.',
      effects: { escalation: +5, targetEconomy: -12, oilDisruption: -10, navalControl: -5 } },
  ],
  israel: [
    { id: 'ironDomeSurge', label: 'Iron Dome Surge', icon: '\u{1F6E1}', severity: 'stable',
      desc: 'Maximize all missile defense layers. High cost but protects civilians.',
      effects: { escalation: -2, morale: +8, missileCapacity: -5, economy: -3 } },
    { id: 'nuclearAmbiguity', label: 'Nuclear Ambiguity Signal', icon: '\u{2622}', severity: 'warning',
      desc: 'Strategic ambiguity — signal nuclear capability without confirmation. Very risky.',
      effects: { escalation: +6, nuclearIndex: +15, globalPressure: +12, targetMorale: -10 } },
    { id: 'massEvacuation', label: 'Mass Evacuation', icon: '\u{1F6A8}', severity: 'info',
      desc: 'Evacuate northern population centers. Protects civilians but signals vulnerability.',
      effects: { escalation: -3, internalStability: -5, morale: -3, globalPressure: -2 } },
  ],
  iran: [
    { id: 'hormuzMineSurge', label: 'Hormuz Mine Surge', icon: '\u{1F4A5}', severity: 'critical',
      desc: 'Deploy massive additional mine fields in Strait. Devastating to global oil.',
      effects: { escalation: +10, oilDisruption: +20, globalPressure: +15, navalControl: +10 } },
    { id: 'activateAllProxies', label: 'Activate All Proxies', icon: '\u{1F525}', severity: 'critical',
      desc: 'Full activation of Hezbollah, Houthis, Iraqi militias. Regional escalation.',
      effects: { escalation: +15, targetStability: -10, globalPressure: +10, morale: +5 } },
    { id: 'nuclearBreakout', label: 'Nuclear Breakout Attempt', icon: '\u{2622}', severity: 'critical',
      desc: 'Attempt to reconstitute nuclear program at hidden sites. Extreme risk.',
      effects: { escalation: +20, nuclearIndex: +25, globalPressure: +20, targetMilitary: 0 } },
  ],
  shared: [
    { id: 'proposeCeasefire', label: 'Propose Ceasefire', icon: '\u{1F54A}', severity: 'stable',
      desc: 'Propose ceasefire terms through international mediators.',
      effects: { escalation: -8, nuclearIndex: -5, globalPressure: -5, morale: -2 } },
    { id: 'acceptCeasefire', label: 'Accept Ceasefire', icon: '\u{2705}', severity: 'stable',
      desc: 'Accept existing ceasefire proposal. Requires opponent to also propose.',
      effects: { escalation: -15, nuclearIndex: -10, globalPressure: -10 } },
    { id: 'nuclearStrike', label: 'NUCLEAR STRIKE', icon: '\u{2622}', severity: 'critical',
      desc: 'Launch nuclear weapons. CATASTROPHIC. Ends civilization as we know it.',
      requiresNuclearIndex: 80,
      requiresConfirmation: true,
      effects: { escalation: +100, nuclearIndex: +100, globalPressure: +100 } },
  ],
};

export const ACTION_SEVERITY_MAP = {
  ...ACTION_SEVERITY,
  deployMOAB: 'critical',
  carrierStrike: 'critical',
  fullNavalBlockade: 'warning',
  ironDomeSurge: 'stable',
  nuclearAmbiguity: 'warning',
  massEvacuation: 'info',
  hormuzMineSurge: 'critical',
  activateAllProxies: 'critical',
  nuclearBreakout: 'critical',
  proposeCeasefire: 'stable',
  acceptCeasefire: 'stable',
  nuclearStrike: 'critical',
};
