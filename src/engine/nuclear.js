// Nuclear Escalation Module — Strategic Risk System (NOT a combat mechanic)

export const NUCLEAR_STATES = [
  { min: 0, max: 20, label: 'Low', color: '#22c55e', glowColor: 'rgba(34,197,94,0.3)' },
  { min: 21, max: 40, label: 'Elevated', color: '#eab308', glowColor: 'rgba(234,179,8,0.3)' },
  { min: 41, max: 60, label: 'Crisis', color: '#f97316', glowColor: 'rgba(249,115,22,0.4)' },
  { min: 61, max: 80, label: 'Brinkmanship', color: '#ef4444', glowColor: 'rgba(239,68,68,0.5)' },
  { min: 81, max: 100, label: 'Extreme Risk', color: '#dc2626', glowColor: 'rgba(220,38,38,0.7)' },
];

export function getNuclearState(index) {
  for (const state of NUCLEAR_STATES) {
    if (index >= state.min && index <= state.max) return state;
  }
  return NUCLEAR_STATES[0];
}

// Risk drivers that increase the nuclear escalation index
const ESCALATION_DRIVERS = {
  facilityProximityStrike: { weight: 8, description: 'Strike near nuclear-related facility' },
  leadershipTargeting: { weight: 10, description: 'Leadership targeting event' },
  diplomaticCollapse: { weight: 6, description: 'Diplomatic channel collapse' },
  regionalEscalation: { weight: 5, description: 'Regional conflict expansion' },
  missileSaturation: { weight: 7, description: 'Missile saturation detected' },
  intelligenceError: { weight: 9, description: 'Early warning / intelligence error' },
};

// Factors that decrease the nuclear escalation index
const DEESCALATION_DRIVERS = {
  diplomacySuccess: { weight: -6, description: 'Diplomatic success' },
  deescalationAction: { weight: -4, description: 'De-escalation measures' },
  stabilizationEvent: { weight: -3, description: 'Stabilization event' },
};

export const NUCLEAR_EVENT_TYPES = [
  { type: 'deterrenceSignaling', label: 'Deterrence Signaling', severity: 'warning', icon: '\u26A0' },
  { type: 'facilityRiskAlert', label: 'Facility Risk Alert', severity: 'critical', icon: '\u2622' },
  { type: 'safeguardsDegradation', label: 'Safeguards Degradation', severity: 'warning', icon: '\u{1F50D}' },
  { type: 'radiologicalRisk', label: 'Radiological Incident Risk', severity: 'critical', icon: '\u2623' },
  { type: 'misinterpretationWarning', label: 'Misinterpretation Warning', severity: 'warning', icon: '\u{26A1}' },
  { type: 'emergencyDiplomacy', label: 'Emergency Diplomacy', severity: 'stable', icon: '\u{1F4DE}' },
];

export function calculateNuclearDelta(action, actorId, globalState) {
  let delta = 0;
  const { escalationLevel, dayCount } = globalState;

  // Offensive actions near high escalation increase risk
  if (['airstrike', 'missileStrike'].includes(action)) {
    delta += 1.5 + Math.random() * 2;
    // Proximity to nuclear facilities (probabilistic)
    if (Math.random() < 0.08 + escalationLevel * 0.001) {
      delta += ESCALATION_DRIVERS.facilityProximityStrike.weight * (0.3 + Math.random() * 0.7);
    }
    // Missile saturation at high strike rates
    if (Math.random() < 0.12) {
      delta += ESCALATION_DRIVERS.missileSaturation.weight * 0.4;
    }
  }

  if (action === 'droneOperation') {
    delta += 0.5 + Math.random() * 1.0;
  }

  if (action === 'strategicSignaling') {
    // Can go either way
    if (escalationLevel > 50) {
      delta += Math.random() < 0.4 ? -2 : 1.5;
    } else {
      delta += Math.random() < 0.6 ? -1 : 0.5;
    }
  }

  // Diplomatic actions reduce risk
  if (action === 'diplomaticOutreach') {
    delta += DEESCALATION_DRIVERS.diplomacySuccess.weight * (0.3 + Math.random() * 0.5);
  }

  if (action === 'defensivePosture') {
    delta += DEESCALATION_DRIVERS.deescalationAction.weight * 0.3;
  }

  // Intelligence errors (rare but impactful)
  if (Math.random() < 0.02 + escalationLevel * 0.0005) {
    delta += ESCALATION_DRIVERS.intelligenceError.weight * (0.2 + Math.random() * 0.5);
  }

  // Time-based natural tension decay
  delta -= 0.15;

  // Higher levels have more volatility
  if (escalationLevel > 60) {
    delta *= 1.2;
  }

  return delta;
}

export function generateNuclearEvent(nuclearIndex, prevIndex) {
  if (nuclearIndex < 15) return null;

  const threshold = Math.random();

  if (nuclearIndex > 70 && threshold < 0.15) {
    return NUCLEAR_EVENT_TYPES[1]; // Facility Risk Alert
  }
  if (nuclearIndex > 55 && threshold < 0.12) {
    return NUCLEAR_EVENT_TYPES[4]; // Misinterpretation Warning
  }
  if (nuclearIndex > 40 && threshold < 0.10) {
    return NUCLEAR_EVENT_TYPES[0]; // Deterrence Signaling
  }
  if (nuclearIndex > 45 && threshold < 0.08) {
    return NUCLEAR_EVENT_TYPES[2]; // Safeguards Degradation
  }
  if (nuclearIndex > 75 && threshold < 0.06) {
    return NUCLEAR_EVENT_TYPES[3]; // Radiological Risk
  }
  if (nuclearIndex > 50 && nuclearIndex < prevIndex && threshold < 0.15) {
    return NUCLEAR_EVENT_TYPES[5]; // Emergency Diplomacy
  }

  return null;
}

// Prediction probabilities for nuclear-related outcomes
export function calculateNuclearPredictions(nuclearIndex) {
  const norm = nuclearIndex / 100;
  return {
    signalingProbability: Math.min(0.95, 0.1 + norm * 0.8),
    miscalculationProbability: Math.min(0.6, norm * norm * 0.6),
    radiologicalIncidentProbability: Math.min(0.3, norm * norm * norm * 0.3),
    extremeUseProbability: Math.min(0.05, norm * norm * norm * norm * 0.05),
  };
}

export const NUCLEAR_WARHEAD_OPTIONS = {
  usa: [
    {
      id: 'b61-12-50',
      label: 'B61-12 Tactical',
      shortLabel: 'B61-12 50kt',
      yieldKt: 50,
      delivery: 'Variable-yield gravity bomb',
      summary: 'Lower-yield US option aimed at hardened facilities with reduced fallout compared to maximum yield.',
    },
    {
      id: 'b61-12-150',
      label: 'B61-12 Maximum Yield',
      shortLabel: 'B61-12 150kt',
      yieldKt: 150,
      delivery: 'Maximum-yield gravity bomb',
      summary: 'Highest-yield US option represented in this simulation, maximizing urban blast and fallout.',
    },
  ],
  israel: [
    {
      id: 'jericho-iii-20',
      label: 'Jericho III Baseline',
      shortLabel: 'Jericho III 20kt',
      yieldKt: 20,
      delivery: 'Jericho III ballistic missile',
      summary: 'Baseline Israeli strategic strike used by the current scenario assumptions.',
    },
    {
      id: 'jericho-iii-80',
      label: 'Jericho III Heavy Yield',
      shortLabel: 'Jericho III 80kt',
      yieldKt: 80,
      delivery: 'Jericho III heavier-yield package',
      summary: 'Higher-yield Israeli strike option with much wider destruction and fallout.',
    },
  ],
  iran: [
    {
      id: 'crude-15',
      label: 'Crude Breakout Device',
      shortLabel: 'Crude 15kt',
      yieldKt: 15,
      delivery: 'Shahab-3 delivery',
      summary: 'Least sophisticated Iranian breakout device reflected in the current sim assumptions.',
    },
    {
      id: 'crude-20',
      label: 'Enhanced Crude Device',
      shortLabel: 'Crude 20kt',
      yieldKt: 20,
      delivery: 'Emad-variant delivery',
      summary: 'A slightly more destructive improvised Iranian device, still crude and interception-prone.',
    },
  ],
};

export function getAvailableNuclearWarheads(actorId, iranHasNuke = false) {
  if (actorId === 'iran' && !iranHasNuke) return [];
  return NUCLEAR_WARHEAD_OPTIONS[actorId] || [];
}

export function getNuclearWarheadById(actorId, warheadId, iranHasNuke = true) {
  const warheads = getAvailableNuclearWarheads(actorId, iranHasNuke);
  return warheads.find((warhead) => warhead.id === warheadId) || warheads[0] || null;
}

function casualtyScaleForWarhead(yieldKt, baselineYieldKt) {
  return Math.pow(yieldKt / baselineYieldKt, 0.72);
}

function roundToOneDecimal(value) {
  return Math.round(value * 10) / 10;
}

function buildImpactRadius(yieldKt, intercepted = false) {
  const scale = Math.cbrt(yieldKt / 15);

  if (intercepted) {
    return {
      intercepted: true,
      debrisScatterKm: roundToOneDecimal(12 * scale),
      contaminationWatchKm: roundToOneDecimal(28 * scale),
    };
  }

  return {
    intercepted: false,
    fireballKm: roundToOneDecimal(0.6 * scale),
    severeBlastKm: roundToOneDecimal(2.2 * scale),
    thermalRadiationKm: roundToOneDecimal(5.8 * scale),
    falloutZoneKm: roundToOneDecimal(38 * scale),
  };
}

function applyWarheadToTargets(targets, warhead, { intercepted = false } = {}) {
  return targets.map((target) => {
    const baselineYieldKt = target.baseYieldKt || warhead.yieldKt;
    const casualtyScale = target.casualties > 0
      ? casualtyScaleForWarhead(warhead.yieldKt, baselineYieldKt)
      : 1;

    return {
      ...target,
      casualties: target.casualties > 0 ? Math.round(target.casualties * casualtyScale) : 0,
      yield: `${warhead.yieldKt}kt (${warhead.shortLabel})`,
      impactRadius: buildImpactRadius(warhead.yieldKt, intercepted && target.casualties === 0),
    };
  });
}

const GENERIC_TARGET_PROFILES = {
  iran: {
    default: [
      { city: 'Tehran', country: 'Iran', baseYieldKt: 50, casualties: 650000, description: 'Capital and central command districts devastated.' },
      { city: 'Isfahan', country: 'Iran', baseYieldKt: 50, casualties: 280000, description: 'Interior industrial and military infrastructure struck.' },
    ],
    bySubTarget: {
      military_bases: [
        { city: 'Kermanshah Military Belt', country: 'Iran', baseYieldKt: 50, casualties: 170000, description: 'Western bases and staging areas destroyed.' },
        { city: 'Tehran Command Belt', country: 'Iran', baseYieldKt: 50, casualties: 240000, description: 'Strategic headquarters and barracks shattered.' },
      ],
      nuclear_sites: [
        { city: 'Isfahan Nuclear Complex', country: 'Iran', baseYieldKt: 50, casualties: 220000, description: 'Nuclear research and fuel-cycle infrastructure obliterated.' },
        { city: 'Bushehr', country: 'Iran', baseYieldKt: 50, casualties: 160000, description: 'Reactor-adjacent infrastructure struck with radiological fallout risk.' },
      ],
      oil_infra: [
        { city: 'Kharg Island', country: 'Iran', baseYieldKt: 50, casualties: 95000, description: 'Export terminals, storage farms, and port systems destroyed.' },
        { city: 'Bushehr Energy Corridor', country: 'Iran', baseYieldKt: 50, casualties: 145000, description: 'Energy logistics and coastal refining network devastated.' },
      ],
      irgc_positions: [
        { city: 'Tehran / IRGC Command', country: 'Iran', baseYieldKt: 50, casualties: 210000, description: 'IRGC leadership and command nodes targeted directly.' },
      ],
      air_defenses: [
        { city: 'Isfahan Air Defense Belt', country: 'Iran', baseYieldKt: 50, casualties: 80000, description: 'Air-defense batteries and nearby garrisons destroyed.' },
      ],
      leadership: [
        { city: 'Tehran Government District', country: 'Iran', baseYieldKt: 50, casualties: 520000, description: 'Leadership compounds and command bunkers struck.' },
      ],
    },
  },
  israel: {
    default: [
      { city: 'Tel Aviv', country: 'Israel', baseYieldKt: 20, casualties: 380000, description: 'Dense urban and command center footprint devastated.' },
      { city: 'Haifa', country: 'Israel', baseYieldKt: 20, casualties: 185000, description: 'Northern industrial port and strategic infrastructure damaged.' },
    ],
    bySubTarget: {
      military_bases: [
        { city: 'Tel Nof Air Base', country: 'Israel', baseYieldKt: 20, casualties: 48000, description: 'Major air base and support facilities destroyed.' },
        { city: 'Kirya / Tel Aviv Command', country: 'Israel', baseYieldKt: 20, casualties: 120000, description: 'Central command district and nearby urban core shattered.' },
      ],
      civilian_areas: [
        { city: 'Tel Aviv Metro', country: 'Israel', baseYieldKt: 20, casualties: 420000, description: 'Urban civilian core suffers catastrophic losses.' },
      ],
      air_bases: [
        { city: 'Nevatim Air Base', country: 'Israel', baseYieldKt: 20, casualties: 32000, description: 'Runways, shelters, and nearby support zones destroyed.' },
        { city: 'Ramat David Air Base', country: 'Israel', baseYieldKt: 20, casualties: 22000, description: 'Northern airpower hub disabled.' },
      ],
      naval_positions: [
        { city: 'Haifa Naval Base', country: 'Israel', baseYieldKt: 20, casualties: 65000, description: 'Naval facilities and port-adjacent districts struck.' },
      ],
    },
  },
  usa: {
    default: [
      { city: 'Al Udeid Regional Hub', country: 'United States', baseYieldKt: 50, casualties: 60000, description: 'Forward US air and command infrastructure in the Gulf devastated.' },
      { city: 'US 5th Fleet / Bahrain', country: 'United States', baseYieldKt: 50, casualties: 26000, description: 'Fleet headquarters, logistics piers, and docked vessels struck.' },
    ],
    bySubTarget: {
      gulf_bases: [
        { city: 'Al Udeid Regional Hub', country: 'United States', baseYieldKt: 50, casualties: 60000, description: 'Forward US air and command infrastructure in the Gulf devastated.' },
        { city: 'US 5th Fleet / Bahrain', country: 'United States', baseYieldKt: 50, casualties: 26000, description: 'Fleet headquarters, logistics piers, and docked vessels struck.' },
      ],
      carrier_groups: [
        { city: 'Carrier Strike Group at Sea', country: 'United States', baseYieldKt: 50, casualties: 14000, description: 'A regional carrier battle group absorbs a direct nuclear hit.' },
      ],
      air_bases: [
        { city: 'Al Udeid Air Base', country: 'United States', baseYieldKt: 50, casualties: 42000, description: 'Aircraft shelters, runways, and command systems are devastated.' },
      ],
      troops: [
        { city: 'Kuwait-Iraq Ground Corridor', country: 'United States', baseYieldKt: 50, casualties: 24000, description: 'Forward troop concentrations and logistics nodes are destroyed.' },
      ],
    },
  },
};

function getDefaultNuclearTarget(attackerId) {
  return attackerId === 'iran' ? 'israel' : 'iran';
}

function getGenericTargets(targetActorId, targetInfo) {
  const profile = GENERIC_TARGET_PROFILES[targetActorId] || GENERIC_TARGET_PROFILES.iran;
  const keyedTargets = targetInfo?.subTargetId && profile.bySubTarget?.[targetInfo.subTargetId];
  const selectedTargets = keyedTargets || profile.default;
  return selectedTargets.map((target) => ({ ...target }));
}

function calculateTargetScale(baseTargets, scaledTargets) {
  return scaledTargets.reduce((sum, target, index) => {
    const base = baseTargets[index]?.casualties || 1;
    return sum + ((target.casualties || 0) / base);
  }, 0) / Math.max(scaledTargets.length, 1);
}

function buildGenericStrikeScenario(attackerId, targetActorId, state, warhead, targetInfo) {
  const attackerName = state.actors[attackerId]?.name || attackerId;
  const targetName = state.actors[targetActorId]?.name || targetActorId;
  const thirdActorId = ['usa', 'israel', 'iran'].find((id) => id !== attackerId && id !== targetActorId);
  const thirdActorName = thirdActorId ? (state.actors[thirdActorId]?.name || thirdActorId) : 'Regional forces';
  const initialTargets = getGenericTargets(targetActorId, targetInfo);
  const scaledTargets = applyWarheadToTargets(initialTargets, warhead);
  const targetScale = calculateTargetScale(initialTargets, scaledTargets);
  const directImmediate = scaledTargets.reduce((sum, target) => sum + (target.casualties || 0), 0);
  const immediate = Math.max(120000, Math.round(directImmediate + (targetScale * 90000)));
  const withinYear = Math.round(immediate * 2.6);
  const longTerm = Math.round(withinYear * 2.15);
  const primaryLabel = scaledTargets.map((target) => target.city).join(' and ');
  const regionalFallout = targetActorId === 'iran'
    ? 'Central Asia, the Gulf littoral, and shipping corridors around Hormuz'
    : targetActorId === 'israel'
      ? 'the Levant, eastern Mediterranean airspace, and neighboring Jordanian corridors'
      : 'the Gulf basing network, Bahrain-Qatar approaches, and nearby shipping lanes';

  return {
    type: 'nuclearExchange',
    attackerId,
    attackerName,
    selectedWarhead: warhead,
    initialTargets: scaledTargets,
    retaliationChain: [
      {
        actor: targetName,
        action: 'Surviving command launches immediate retaliatory conventional strikes',
        targets: [
          {
            city: `${attackerName} regional assets`,
            casualties: targetActorId === 'usa' ? 18000 : 9000,
          },
        ],
        reason: `Even after the detonation, surviving ${targetName} command elements attempt to punish ${attackerName} with whatever missiles, aircraft, or proxy forces remain available.`,
      },
      {
        actor: thirdActorName,
        action: 'Emergency mobilization and missile-defense surge',
        reason: `${thirdActorName} treats the strike as proof the conflict can no longer be contained. Forces disperse, air defenses activate, and leadership prepares for rapid regional spillover.`,
      },
    ],
    otherCountries: [
      { country: 'United Nations', action: 'Emergency Security Council session and global condemnation.', reason: 'Nuclear use immediately eclipses every other diplomatic track. Demand for inspections, ceasefire, and accountability becomes overwhelming.', icon: '\u{1F30D}' },
      { country: 'Global Markets', action: 'Severe shock across energy, shipping, and insurance markets.', reason: `Trade routes around ${regionalFallout} become partially nonviable. Insurance, freight, and energy prices spike within hours.`, icon: '\u{1F4C9}' },
      { country: 'Regional States', action: 'Borders harden, airspace closes, and civil defense plans activate.', reason: `Neighboring states assume fallout, refugee flows, and miscalculation risk will spread well beyond ${targetName}.`, icon: '\u{1F6A8}' },
      { country: thirdActorName, action: 'Raises readiness and begins crisis diplomacy.', reason: `${thirdActorName} was not the direct target, but assumes the conflict could widen rapidly after a nuclear detonation of this scale.`, icon: '\u26A0' },
    ],
    globalEffects: {
      nuclearWinter: `${attackerName}'s strike on ${targetName} does not guarantee civilization-ending nuclear winter, but it injects enough soot and industrial smoke to cause serious regional cooling and agricultural disruption.`,
      falloutZones: `Radioactive contamination threatens ${regionalFallout}. Emergency monitoring and evacuation zones expand for days after the strike.`,
      economicCollapse: `Global GDP contracts sharply as energy traders, shipping firms, and insurers price in the first regional nuclear use of the war. ${targetName}'s economy is functionally broken overnight.`,
      refugeeCrisis: `Civilian flight from ${targetName} accelerates immediately. Border systems and emergency shelters across the wider region are overwhelmed within days.`,
      famine: 'Supply chain rupture, agricultural contamination, and market panic drive a severe food-security crisis across import-dependent states.',
    },
    postWarEarth: {
      description: `${attackerName}'s nuclear strike on ${targetName} shatters every remaining assumption that the war can be contained through conventional escalation alone. The world enters a new era of crisis management centered on fallout, deterrence collapse, and mass displacement.`,
      timelineEvents: [
        { time: 'Hour 0', event: `${warhead.shortLabel} detonates over ${primaryLabel}. Regional air-defense and civil-defense systems immediately fail into crisis mode.` },
        { time: 'Hour 2', event: `${targetName} begins emergency retaliation planning while allied and rival capitals assume follow-on strikes are possible.` },
        { time: 'Day 1', event: 'Commercial aviation and shipping corridors across the region are rerouted or suspended as fallout models spread.' },
        { time: 'Week 1', event: `Refugee flows and medical demand outpace local capacity. ${targetName}'s remaining infrastructure faces cascading failure.` },
        { time: 'Year 1', event: 'The strike becomes a case study in deterrence failure. Multiple states accelerate missile defense and nuclear decision-making reforms.' },
      ],
    },
    totalCasualties: {
      immediate,
      withinYear,
      longTerm,
    },
    economicDamage: targetActorId === 'usa' ? 90 : targetActorId === 'israel' ? 86 : 88,
    description: `${attackerName} used ${warhead.shortLabel} against ${targetName}, with the initial strike centered on ${primaryLabel}. Immediate retaliation and global panic follow.`,
  };
}

// Detailed nuclear strike chain-reaction model
export function calculateNuclearStrikeOutcome(attackerId, state, warheadId = null, targetInfo = null) {
  const warhead = getNuclearWarheadById(attackerId, warheadId, true);
  const targetActorId = targetInfo?.countryId || getDefaultNuclearTarget(attackerId);

  if (attackerId === 'usa' && targetActorId === 'iran') return usaStrikesScenario(state, warhead);
  if (attackerId === 'israel' && targetActorId === 'iran') return israelStrikesScenario(state, warhead);
  if (attackerId === 'iran' && targetActorId === 'israel') return iranStrikesScenario(state, warhead);

  return buildGenericStrikeScenario(attackerId, targetActorId, state, warhead, targetInfo);
}

function usaStrikesScenario(state, warhead) {
  // USA fires nuclear weapons at Iran
  // Iran has NO nuclear weapons to retaliate with
  // Israel likely joins with conventional follow-up
  // Russia/China condemn but do NOT retaliate — no mutual defense treaty with Iran
  // Massive regional fallout, global economic crisis

  const initialTargets = [
    { city: 'Tehran', country: 'Iran', baseYieldKt: 150, casualties: 850000, description: 'Capital and government center obliterated' },
    { city: 'Isfahan', country: 'Iran', baseYieldKt: 150, casualties: 420000, description: 'Nuclear facility and industrial hub destroyed' },
    { city: 'Bushehr', country: 'Iran', baseYieldKt: 50, casualties: 180000, description: 'Nuclear reactor complex targeted — radiological contamination' },
  ];
  const scaledTargets = applyWarheadToTargets(initialTargets, warhead);
  const targetScale = calculateTargetScale(initialTargets, scaledTargets);

  const retaliationChain = [
    {
      actor: 'Iran (Conventional)',
      action: 'Desperate final conventional barrage — everything remaining',
      targets: [
        { city: 'Al Udeid Air Base, Qatar', casualties: 12000 },
        { city: 'US 5th Fleet, Bahrain', casualties: 8000 },
        { city: 'Tel Aviv (missile barrage)', casualties: 45000 },
        { city: 'Haifa (Shahab-3 volley)', casualties: 18000 },
      ],
      reason: 'With nuclear strikes confirmed, IRGC launches every remaining ballistic missile and drone simultaneously. \u201CIf we are to be destroyed, we will take as many with us as possible.\u201D Approximately 200 missiles and 500 drones launched in 90-minute window. Israeli Iron Dome and Arrow systems overwhelmed at ~75% interception rate.',
    },
    {
      actor: 'Hezbollah',
      action: 'Total war — all 40,000+ rockets launched at Israel',
      targets: [
        { city: 'Northern Israel (rocket barrage)', casualties: 25000 },
        { city: 'Haifa petrochemical facilities', casualties: 8000 },
      ],
      reason: 'With Iran\u2019s annihilation underway, Hezbollah\u2019s purpose for restraint evaporates. Secretary-General orders full arsenal deployed. 40,000+ rockets and missiles fired over 48 hours. Israel responds with devastating strikes on Beirut and Bekaa Valley.',
    },
    {
      actor: 'Houthi Forces',
      action: 'Ballistic missiles at Saudi Arabia and Israel',
      targets: [
        { city: 'Riyadh (ballistic missile)', casualties: 3000 },
        { city: 'Beersheba, Israel (Shahab variant)', casualties: 1500 },
      ],
      reason: 'Houthis launch everything in solidarity. Relatively small arsenal but adds to the chaos. Saudi Patriot batteries intercept most but not all.',
    },
    {
      actor: 'Israel',
      action: 'Conventional follow-up strikes on all fronts',
      targets: [
        { city: 'Natanz underground complex', casualties: 5000 },
        { city: 'Fordow enrichment facility', casualties: 3000 },
        { city: 'Beirut (Hezbollah HQ)', casualties: 15000 },
        { city: 'Bekaa Valley weapons depots', casualties: 4000 },
      ],
      reason: 'Israel seizes opportunity to permanently eliminate nuclear infrastructure and destroy Hezbollah\u2019s remaining capacity. Massive air campaign across Lebanon and remaining Iranian sites.',
    },
    {
      actor: 'Iraqi Shia Militias',
      action: 'Rocket attacks on US bases in Iraq',
      targets: [
        { city: 'Ain al-Asad Air Base, Iraq', casualties: 2000 },
      ],
      reason: 'Iran-aligned Popular Mobilization Forces launch rockets at remaining US positions in Iraq. Iraqi government collapses as militia factions turn on each other.',
    },
  ];

  const otherCountries = [
    { country: 'Russia', action: 'DEFCON-equivalent alert raised. Strategic forces on standby. NO nuclear retaliation.', reason: 'Russia has no mutual defense treaty with Iran. Nuclear doctrine only permits use in response to existential threat to Russian territory. Moscow evacuates embassy, condemns at UNSC, but will not trigger MAD over Iran. Putin calls it \u201Can unprecedented crime\u201D but acts to preserve Russia\u2019s strategic position, not avenge Iran.', icon: '\u{1F1F7}\u{1F1FA}' },
    { country: 'China', action: 'Emergency UNSC session. All trade with US suspended. Massive military alert.', reason: 'China loses its primary Middle East oil partner and $400B+ in infrastructure investments. Begins the largest economic retaliation in history: freezes $1.1T in US Treasury holdings, suspends rare earth exports. Does NOT escalate militarily \u2014 no nuclear interest in a war over Iran.', icon: '\u{1F1E8}\u{1F1F3}' },
    { country: 'Pakistan', action: 'Nuclear forces on HIGHEST alert. Borders sealed. Government nearly collapses.', reason: 'As the only Muslim-majority nuclear state, Pakistan faces unprecedented domestic pressure. Military prevents nuclear launch but 3 generals resign. Millions protest. 2-5 million refugees flood across the Iran-Pakistan border within 72 hours.', icon: '\u{1F1F5}\u{1F1F0}' },
    { country: 'India', action: 'Monitors Pakistan nuclear posture. Activates missile defense. Offers humanitarian aid.', reason: 'India\u2019s primary concern is Pakistan\u2019s nuclear posture destabilizing. Activates own deterrent as precaution. Offers humanitarian corridors.', icon: '\u{1F1EE}\u{1F1F3}' },
    { country: 'NATO/Europe', action: 'Article 5 NOT invoked (offensive strike). NATO effectively dissolved.', reason: 'NATO\u2019s defensive charter does not cover US first-use. France, Germany, UK publicly break with Washington. France recalls ambassador. Largest transatlantic crisis since WWII. Multiple European nations announce they will pursue independent defense.', icon: '\u{1F1EA}\u{1F1FA}' },
    { country: 'GCC States', action: 'Emergency evacuations. Coalition dissolved. Saudi Arabia condemns US.', reason: 'Gulf states terrified of fallout. Radioactive contamination from Bushehr threatens water supplies and desalination plants across Qatar, Bahrain, UAE. Saudi crown prince calls US action \u201Ca betrayal of the alliance.\u201D', icon: '\u{1F1F8}\u{1F1E6}' },
  ];

  const immediate = 1450000;
  const withinYear = 3200000;
  const longTerm = 8500000;

  const globalEffects = {
    nuclearWinter: 'Limited nuclear winter scenario — 3 warheads insufficient for full nuclear winter but significant regional cooling. Soot injection into stratosphere reduces Middle East temperatures 2-4\u00B0C for 1-2 years. Agricultural disruption across Iran, Iraq, Pakistan, Afghanistan.',
    falloutZones: 'Radioactive fallout extends 800-1200km downwind (prevailing winds: northwest to southeast). Contamination zones: western Afghanistan, Balochistan (Pakistan), Gulf of Oman, parts of UAE and Oman. Bushehr reactor strike creates Chernobyl-scale contamination of Persian Gulf — desalination plants across GCC compromised.',
    economicCollapse: 'Global GDP contracts 8-12% within 6 months. Oil permanently above $200/bbl. Dollar hegemony questioned as China and Russia accelerate de-dollarization. US defense stocks surge then crash as contracts are cancelled by allied nations.',
    refugeeCrisis: '15-25 million Iranian refugees flee to Turkey, Pakistan, Afghanistan, Iraq. Largest displacement event in human history. Pakistan and Turkey overwhelmed — secondary humanitarian catastrophe.',
    famine: 'Iran\'s agricultural heartland contaminated. 85 million Iranians face food insecurity. Global wheat and grain prices triple. Food riots in Egypt, Lebanon, Yemen. UN declares Level 3 emergency.',
  };

  const postWarEarth = {
    description: 'The United States has used nuclear weapons for the first time since 1945. The moral authority of the global superpower is shattered. The "nuclear taboo" — the 81-year norm against nuclear use — is broken. Every nuclear-armed state recalculates its doctrine. Proliferation accelerates as non-nuclear states conclude they need their own deterrent.',
    timelineEvents: [
      { time: 'Hour 0', event: 'Three nuclear detonations over Iran. Electromagnetic pulse disrupts electronics across 500km radius.' },
      { time: 'Hour 1', event: 'Global stock markets crash. Circuit breakers triggered on every exchange worldwide.' },
      { time: 'Hour 6', event: 'Russia raises nuclear alert to maximum. Putin addresses nation. China recalls ambassador from Washington.' },
      { time: 'Day 1', event: 'Radioactive fallout cloud tracked by satellites moving southeast toward Pakistan and Gulf states.' },
      { time: 'Day 3', event: 'UN General Assembly emergency session. 156 nations condemn US. Largest diplomatic isolation in American history.' },
      { time: 'Week 1', event: 'Pakistan border overwhelmed. 3 million refugees. WHO declares radiological emergency. Gulf desalination plants shut down.' },
      { time: 'Month 1', event: 'Global recession confirmed. Oil at $220/bbl. US faces sanctions from EU member states for first time. NATO effectively dissolved.' },
      { time: 'Month 6', event: 'Iran\'s central government collapsed. Country fragmented into ethnic regions. Cancer cases surge in fallout zones. 2.5M dead from radiation exposure.' },
      { time: 'Year 1', event: 'Nuclear proliferation crisis: Saudi Arabia, Turkey, Egypt, South Korea, and Japan accelerate weapons programs. New nuclear arms race begins.' },
      { time: 'Year 5', event: 'The "Post-Taboo Era" — 12 nations now possess nuclear weapons (up from 9). Global defense spending at highest level in human history. Climate impact from nuclear detonations measurable.' },
    ],
  };

  return {
    type: 'nuclearExchange',
    attackerId: 'usa',
    attackerName: 'United States',
    selectedWarhead: warhead,
    initialTargets: scaledTargets,
    retaliationChain,
    otherCountries,
    globalEffects,
    postWarEarth,
    totalCasualties: {
      immediate: Math.round(immediate * targetScale),
      withinYear: Math.round(withinYear * targetScale),
      longTerm: Math.round(longTerm * targetScale),
    },
    economicDamage: 92,
    description: `The United States launched ${warhead.shortLabel} strikes on Iran. No nuclear retaliation occurred — Iran possesses no nuclear weapons. But the consequences are catastrophic and permanent.`,
  };
}

function israelStrikesScenario(state, warhead) {
  // Israel breaks nuclear ambiguity — first confirmed use
  // Iran cannot retaliate with nukes
  // USA distances itself — was not consulted
  // Arab world unites against Israel
  // Pakistan faces extreme domestic pressure — small probability of involvement

  const initialTargets = [
    { city: 'Tehran', country: 'Iran', baseYieldKt: 20, casualties: 520000, description: 'Strike on government district — regime decapitation attempt' },
    { city: 'Isfahan', country: 'Iran', baseYieldKt: 20, casualties: 310000, description: 'Military-industrial complex destroyed' },
  ];
  const scaledTargets = applyWarheadToTargets(initialTargets, warhead);
  const targetScale = calculateTargetScale(initialTargets, scaledTargets);

  const pakistanRetaliates = Math.random() < 0.12; // 12% chance

  const retaliationChain = [];
  if (pakistanRetaliates) {
    retaliationChain.push({
      actor: 'Pakistan',
      action: 'Nuclear retaliation against Israel',
      targets: [{ city: 'Tel Aviv / Dimona', casualties: 600000 }],
      reason: 'Domestic pressure overwhelms military restraint. Pakistan\'s "Islamic bomb" doctrine invoked under extreme public/military faction pressure. Rogue launch or authorized — analysts will debate for decades.',
    });
    retaliationChain.push({
      actor: 'Israel',
      action: 'Second strike against Pakistan',
      targets: [{ city: 'Islamabad strategic targets', casualties: 400000 }],
      reason: 'Israel\'s Samson Option doctrine activated. Submarine-launched cruise missiles from Dolphin-class submarine in Arabian Sea.',
    });
    retaliationChain.push({
      actor: 'India',
      action: 'Full nuclear alert — strikes on Pakistan preemptively',
      targets: [{ city: 'Pakistani nuclear sites', casualties: 200000 }],
      reason: 'India interprets Pakistan launch as sign of command-and-control failure. Launches preemptive strikes to prevent further Pakistani launches. South Asia nuclear exchange begins.',
    });
  }

  const otherCountries = [
    { country: 'United States', action: 'Publicly condemns Israel. "We were not consulted." Emergency distance from ally.', reason: 'USA cannot be associated with nuclear first-use by a partner. Unprecedented break in US-Israel relations. Military aid frozen.', icon: '\u{1F1FA}\u{1F1F8}' },
    { country: 'Russia', action: 'Emergency UN session. Provides humanitarian corridor proposals. No military action.', reason: 'Russia gains enormous diplomatic leverage. Positions itself as "responsible power" compared to Israel and USA.', icon: '\u{1F1F7}\u{1F1FA}' },
    { country: 'China', action: 'Massive diplomatic offensive. Sanctions Israel. Offers to lead reconstruction.', reason: 'China exploits the crisis to cement Middle East influence. Announces $500B reconstruction fund.', icon: '\u{1F1E8}\u{1F1F3}' },
    { country: 'Pakistan', action: pakistanRetaliates ? 'RETALIATES WITH NUCLEAR WEAPONS' : 'Nuclear forces on highest alert. Massive protests. Government nearly overthrown but military prevents launch.', reason: 'The only Muslim nuclear state faces existential domestic crisis. Military must choose between doctrine and survival.', icon: '\u{1F1F5}\u{1F1F0}' },
    { country: 'Arab League', action: 'All diplomatic relations with Israel severed. Abraham Accords dissolved overnight.', reason: 'Nuclear attack on a Muslim nation is an unforgivable red line. Even moderate states (UAE, Bahrain, Morocco) cut ties immediately.', icon: '\u{1F54C}' },
    { country: 'Turkey', action: 'Invokes NATO Article 5 discussion (denied). Begins nuclear weapons program.', reason: 'Turkey argues the attack threatens its territory via fallout. When NATO refuses, Erdogan announces Turkey will develop its own deterrent.', icon: '\u{1F1F9}\u{1F1F7}' },
  ];

  const immediate = pakistanRetaliates ? 2830000 : 830000;
  const withinYear = pakistanRetaliates ? 12000000 : 2100000;
  const longTerm = pakistanRetaliates ? 45000000 : 5500000;

  const globalEffects = {
    nuclearWinter: pakistanRetaliates
      ? 'Full regional nuclear winter. 5-7 warheads detonated across Middle East and South Asia. Stratospheric soot injection reduces global temperatures 3-5\u00B0C. Global crop yields drop 20-30% for 5-10 years.'
      : 'Limited nuclear exchange — 2 warheads over Iran. Regional cooling 1-2\u00B0C. Agricultural disruption in Iran, Iraq, Afghanistan.',
    falloutZones: 'Fallout from Iranian detonations drifts across Afghanistan and Pakistan. ' + (pakistanRetaliates ? 'South Asian exchange contaminates the Indus River basin — 200 million people affected.' : 'Gulf region contamination affects desalination.'),
    economicCollapse: 'Global GDP contracts ' + (pakistanRetaliates ? '15-20%' : '6-9%') + '. Israel becomes international pariah. BDS movement becomes mainstream global policy. Israeli tech sector collapses as companies relocate.',
    refugeeCrisis: (pakistanRetaliates ? '50-80 million' : '12-18 million') + ' refugees. Iran, Pakistan, and Afghanistan populations displaced. Europe faces migration crisis orders of magnitude beyond 2015.',
    famine: pakistanRetaliates ? 'Nuclear winter triggers global famine. 1-2 billion people face food insecurity within 2 years. Global grain reserves depleted.' : 'Regional famine in Iran. Global food prices spike 80%. Humanitarian catastrophe.',
  };

  const postWarEarth = {
    description: pakistanRetaliates
      ? 'Israel\'s nuclear strike triggered a chain reaction across South Asia. The Israel-Pakistan-India triangle produced the worst nuclear exchange since the technology was invented. The world enters a new dark age.'
      : 'Israel has broken its nuclear ambiguity — and the nuclear taboo — in a single act. The nation that was founded in the aftermath of the Holocaust has used weapons of mass destruction. The geopolitical order is shattered.',
    timelineEvents: [
      { time: 'Hour 0', event: 'Israeli Jericho III missiles detonate over Tehran and Isfahan. Israel\'s nuclear ambiguity is over.' },
      { time: 'Hour 2', event: 'Global shock. Every nuclear power raises alert status. UN emergency session called.' },
      { time: 'Hour 12', event: pakistanRetaliates ? 'Pakistan launches nuclear-armed Shaheen-III missile. South Asian crisis begins.' : 'Pakistan military prevents launch despite massive protests. Generals choose survival over doctrine.' },
      { time: 'Day 1', event: 'Abraham Accords dissolved. Every Arab state severs relations with Israel. US freezes military aid.' },
      { time: 'Week 1', event: 'Israel internationally isolated. Iran\'s government collapsed. ' + (pakistanRetaliates ? 'India-Pakistan exchange ongoing. 8M dead.' : 'Refugee crisis overwhelms neighbors.') },
      { time: 'Month 1', event: 'International Criminal Court issues arrest warrants. Israel faces de facto global sanctions. Economy contracts 40%.' },
      { time: 'Month 6', event: (pakistanRetaliates ? 'Nuclear winter measurable globally. Crop failures across Asia.' : 'Regional stabilization begins. Iran fragmented.') + ' 6 nations announce nuclear weapons programs.' },
      { time: 'Year 1', event: 'The "broken taboo" effect: nuclear weapons normalized. Arms control treaties collapse. New proliferation era.' },
      { time: 'Year 5', event: pakistanRetaliates ? '15+ nuclear states. Global temperature still depressed. Cancer epidemic across South Asia. 30M+ cumulative dead.' : '12 nuclear states. Middle East permanently altered. Israel a pariah state dependent on US protection.' },
    ],
  };

  return {
    type: 'nuclearExchange',
    attackerId: 'israel',
    attackerName: 'Israel',
    pakistanEscalation: pakistanRetaliates,
    selectedWarhead: warhead,
    initialTargets: scaledTargets,
    retaliationChain,
    otherCountries,
    globalEffects,
    postWarEarth,
    totalCasualties: {
      immediate: Math.round(immediate * targetScale),
      withinYear: Math.round(withinYear * targetScale),
      longTerm: Math.round(longTerm * targetScale),
    },
    economicDamage: pakistanRetaliates ? 97 : 88,
    description: pakistanRetaliates
      ? `Israel used ${warhead.shortLabel}. Pakistan retaliated. India intervened. South Asia burns. The world enters nuclear winter.`
      : `Israel used ${warhead.shortLabel} against Iran. No nuclear retaliation, but Israel is now a global pariah. The nuclear taboo is shattered.`,
  };
}

function iranStrikesScenario(state, warhead) {
  // Iran achieved breakout — crude single device (~15-20kt)
  // Likely delivered by missile (Shahab-3 or Emad) — not a sophisticated warhead
  // Interception probability is HIGH (~60-70% with Arrow-3 + David's Sling)
  // If it gets through: devastating. If intercepted: still a world-changing moment.
  // USA + Israel MASSIVE retaliation — Iran effectively destroyed as a state

  const intercepted = Math.random() < 0.65; // 65% chance Israel intercepts

  const initialTargets = [
    {
      city: intercepted ? 'Tel Aviv (INTERCEPTED by Arrow-3)' : 'Tel Aviv',
      country: 'Israel',
      baseYieldKt: 15,
      casualties: intercepted ? 0 : 380000,
      description: intercepted
        ? 'Arrow-3 exo-atmospheric interception at 100km altitude. Warhead destroyed. Nuclear material scattered in upper atmosphere. Minimal ground contamination.'
        : 'Crude nuclear device detonates over metropolitan Tel Aviv. 380,000 immediate casualties. 3.5 million in fallout zone.',
    },
  ];
  const scaledTargets = applyWarheadToTargets(initialTargets, warhead, { intercepted });
  const targetScale = intercepted
    ? casualtyScaleForWarhead(warhead.yieldKt, 15)
    : ((scaledTargets[0].casualties || 0) / 380000);

  const retaliationChain = [
    {
      actor: 'United States',
      action: 'Immediate massive nuclear retaliation',
      targets: [
        { city: 'Tehran', casualties: 900000 },
        { city: 'Isfahan', casualties: 400000 },
        { city: 'Shiraz', casualties: 250000 },
        { city: 'Tabriz', casualties: 200000 },
        { city: 'Mashhad', casualties: 350000 },
      ],
      reason: intercepted
        ? 'Nuclear launch — regardless of interception — crosses the absolute red line. The attempt alone triggers full US retaliation under extended deterrence doctrine.'
        : 'Nuclear attack on a US ally triggers immediate retaliation. B-2 bombers and submarine-launched Trident II missiles obliterate Iran\'s major cities.',
    },
    {
      actor: 'Israel',
      action: 'Full nuclear arsenal deployed (Samson Option)',
      targets: [
        { city: 'Every major Iranian military installation', casualties: 300000 },
      ],
      reason: intercepted
        ? 'Israel activates Samson Option regardless of interception. "Never again" doctrine means the attempt itself is sufficient.'
        : 'Israel deploys its estimated 90+ nuclear warheads. Jericho III missiles and submarine-launched cruise missiles ensure total destruction of Iranian state.',
    },
  ];

  const otherCountries = [
    { country: 'Russia', action: 'Evacuated embassy days earlier (intelligence warning). Condemns all parties. DEFCON raised but no action.', reason: 'Russia had intelligence Iran was attempting breakout. Warned quietly but did not intervene. Now positions itself as mediator for post-war order.', icon: '\u{1F1F7}\u{1F1FA}' },
    { country: 'China', action: 'Strategic forces on alert. Evacuates nationals. Demands immediate ceasefire.', reason: 'China loses its entire Iran investment portfolio ($400B+) and oil supply. Furious at all parties but will not escalate to nuclear war over Iran.', icon: '\u{1F1E8}\u{1F1F3}' },
    { country: 'Pakistan', action: 'Seals borders. Nuclear forces on alert. Massive refugee crisis.', reason: 'Pakistan faces 10-20M Iranian refugees. Fallout contamination threatens Balochistan. Military focused on internal stability, not escalation.', icon: '\u{1F1F5}\u{1F1F0}' },
    { country: 'NATO', action: 'Article 5 NOT invoked. Europeans demand immediate ceasefire. Humanitarian response mobilized.', reason: 'European states horrified but recognize Iran initiated nuclear use. Focus shifts to humanitarian response and preventing further escalation.', icon: '\u{1F1EA}\u{1F1FA}' },
    { country: 'Hezbollah/Proxies', action: 'Massive conventional retaliation against Israel. Then destroyed by Israeli counter-strikes.', reason: 'With Iran destroyed, proxy forces launch everything they have in a final desperate barrage. Israel responds with overwhelming force. Proxy network collapses within weeks.', icon: '\u{1F4A5}' },
    { country: 'Global Public', action: 'Anti-nuclear movement explodes worldwide. Largest protests in human history.', reason: 'Nuclear weapons used in anger for the first time in 81 years — and then used again in retaliation. Global revulsion creates overwhelming pressure for disarmament.', icon: '\u{1F30D}' },
  ];

  const immediate = intercepted ? 2400000 : 2780000;
  const withinYear = intercepted ? 5500000 : 8000000;
  const longTerm = intercepted ? 15000000 : 22000000;

  const globalEffects = {
    nuclearWinter: 'Significant nuclear winter. US and Israeli retaliation involves 8-15 warheads across Iran. Soot injection reduces Northern Hemisphere temperatures 4-6\u00B0C for 3-5 years. Global crop yields drop 25-35%. Famine affects 1.5 billion people.',
    falloutZones: 'Iran becomes the most radioactively contaminated nation on Earth. Fallout extends across Afghanistan, Pakistan, Turkmenistan, Iraq, and the Persian Gulf. Gulf desalination infrastructure destroyed — GCC water crisis. ' + (intercepted ? '' : 'Israeli fallout zone covers 50km radius from Tel Aviv detonation.'),
    economicCollapse: 'Global GDP contracts 15-25%. Oil permanently above $250/bbl as Gulf infrastructure compromised. Iran\'s economy ceases to exist. Global recession worse than 2008 by factor of 5.',
    refugeeCrisis: '30-50 million displaced. Iran effectively depopulated from major cities. Turkey, Pakistan, Iraq, Afghanistan overwhelmed. Europe faces largest migration crisis in history.',
    famine: 'Nuclear winter triggers global agricultural crisis. Grain yields drop 30%. Price of food triples globally. UN estimates 500M-1B people face severe food insecurity within 2 years.',
  };

  const postWarEarth = {
    description: intercepted
      ? 'Iran attempted the unthinkable — and was intercepted. But the attempt itself was enough. The US and Israeli retaliation destroyed Iran as a functioning state. The message to the world: nuclear weapons do not protect you — they guarantee your destruction.'
      : 'Iran detonated a nuclear weapon over Tel Aviv. The retaliation erased Iran from the map of functioning nations. Eighty-five million people\'s homeland has been rendered largely uninhabitable. This is the darkest day in human history since Hiroshima.',
    timelineEvents: [
      { time: 'Hour 0', event: intercepted ? 'Iranian Shahab-3 launched toward Tel Aviv. Arrow-3 intercepts at 100km altitude. Nuclear material scattered.' : 'Iranian crude nuclear device detonates 1.5km above central Tel Aviv. 380,000 killed instantly.' },
      { time: 'Hour 1', event: 'US National Command Authority authorizes full nuclear retaliation. B-2 bombers scramble from Diego Garcia. Ohio-class submarine launches Trident II.' },
      { time: 'Hour 3', event: 'Multiple nuclear detonations across Iran. Tehran, Isfahan, Shiraz, Tabriz, Mashhad struck. Iranian state effectively ceases to exist.' },
      { time: 'Hour 6', event: 'Israel deploys Jericho III missiles and submarine-launched weapons. Every major Iranian military installation destroyed.' },
      { time: 'Day 1', event: 'Mushroom clouds visible from space. Radioactive fallout spreading across Central and South Asia. Global panic.' },
      { time: 'Day 3', event: 'Hezbollah launches everything at Israel in final desperate barrage. Israel responds with overwhelming conventional force. Beirut heavily damaged.' },
      { time: 'Week 1', event: 'Nuclear winter effects measurable. Temperatures dropping across Northern Hemisphere. Crop forecasts collapse.' },
      { time: 'Month 1', event: 'Iran\'s population in crisis: 15M fled, 5M dead, remaining 65M face radiation exposure and no infrastructure. Largest humanitarian catastrophe in history.' },
      { time: 'Month 6', event: 'Global famine begins. Nuclear winter reduces harvests by 30%. Food riots across developing world. 500M face starvation.' },
      { time: 'Year 1', event: 'Cumulative death toll reaches ' + (intercepted ? '12M' : '18M') + '. Nuclear disarmament movement gains unprecedented support. Treaty negotiations begin but trust is shattered.' },
      { time: 'Year 5', event: 'Iran exists as a UN-administered territory. Persian Gulf partially decontaminated but fisheries destroyed. Global temperatures slowly recovering. The nuclear age\'s darkest chapter has reshaped civilization permanently.' },
    ],
  };

  return {
    type: 'nuclearExchange',
    attackerId: 'iran',
    attackerName: 'Iran',
    intercepted,
    selectedWarhead: warhead,
    initialTargets: scaledTargets,
    retaliationChain,
    otherCountries,
    globalEffects,
    postWarEarth,
    totalCasualties: {
      immediate: Math.round(immediate * targetScale),
      withinYear: Math.round(withinYear * targetScale),
      longTerm: Math.round(longTerm * targetScale),
    },
    economicDamage: 96,
    description: intercepted
      ? `Iran launched ${warhead.shortLabel} at Israel — intercepted by Arrow-3. But the attempt triggered massive US-Israeli nuclear retaliation. Iran destroyed as a state.`
      : `Iran detonated ${warhead.shortLabel} over Tel Aviv. US and Israeli retaliation annihilated Iran. The world enters nuclear winter.`,
  };
}
