// Core Simulation Engine — tick-based probabilistic model
// Calibrated to real-world conditions: 2026 Iran War (began Feb 28, 2026)
// Simulation Day 0 = April 6, 2026 (Day 37 of the active war)

import { createInitialActors, ACTION_TYPES, PROXY_FORCES, SPECIAL_ACTIONS, ALLIANCE_SUPPORT, TARGET_OPTIONS } from './actors.js';
import { calculateNuclearDelta, generateNuclearEvent, calculateNuclearPredictions, calculateNuclearStrikeOutcome } from './nuclear.js';
import { generateActionEvent, generateSecondaryEvents } from './events.js';

// Date helper
const SIM_START = new Date('2026-04-07');
const INITIAL_WAR_DAY = 38;
const INITIAL_GLOBALS = {
  nuclearIndex: 75,
  escalationLevel: 90,
  oilDisruption: 85,
};
// AUTO-UPDATED RECENT EVENTS START
const AUTO_UPDATED_RECENT_EVENTS = [
  {
    "date": "Apr 07",
    "text": "Trump issues ultimatum, threatening 'a whole civilization' if Iran doesn't make a deal by deadline.",
    "severity": "critical"
  },
  {
    "date": "Apr 07",
    "text": "US strikes military targets on Iran's Kharg Island.",
    "severity": "critical"
  },
  {
    "date": "Apr 07",
    "text": "Russia and China veto UN resolution aimed at reopening Strait of Hormuz.",
    "severity": "warning"
  },
  {
    "date": "Apr 07",
    "text": "Iran rejects 45-day ceasefire proposal.",
    "severity": "warning"
  },
  {
    "date": "Apr 07",
    "text": "Iranian missile strike damages cars and street in Israel.",
    "severity": "warning"
  },
  {
    "date": "Apr 07",
    "text": "Lebanon’s Hezbollah and Yemen’s Houthis join Iran in strike on Israel.",
    "severity": "warning"
  }
];
// AUTO-UPDATED RECENT EVENTS END
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function getDateForDay(simDay) {
  const d = new Date(SIM_START);
  d.setDate(d.getDate() + simDay);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

function makeTimestamp(dayCount, warDay) {
  return `${getDateForDay(dayCount)} \u2022 Day ${warDay + dayCount}`;
}

export function createSimulationState() {
  return {
    dayCount: 0,
    warDay: INITIAL_WAR_DAY,
    running: false,
    speed: 1,
    actors: createInitialActors(),
    proxyForces: { ...PROXY_FORCES },
    nuclearIndex: INITIAL_GLOBALS.nuclearIndex,
    escalationLevel: INITIAL_GLOBALS.escalationLevel,
    oilDisruption: INITIAL_GLOBALS.oilDisruption,
    tradeImpact: 75,
    sanctionsPressure: 90,
    globalPressure: 80,
    allianceInfluence: 75,
    events: generateInitialEvents(),
    mapAnimations: [],
    predictions: {
      deescalation: 0.08,
      prolongedConflict: 0.35,
      regionalExpansion: 0.28,
      strategicBrinkmanship: 0.15,
      internalInstability: 0.14,
    },
    warDurationRange: { min: 60, max: 240 },
    escalationProbability: 0.82,
    nuclearPredictions: calculateNuclearPredictions(INITIAL_GLOBALS.nuclearIndex),
    // Alliance support (Russia/China backing Iran)
    allianceSupport: { ...ALLIANCE_SUPPORT },
    // Player control
    playerControlledActor: null, // null = auto, 'usa'/'israel'/'iran'
    pendingPlayerAction: null,
    // Ceasefire tracking
    ceasefireProposals: {}, // { actorId: dayProposed }
    // War conclusion
    warConclusion: null, // null = ongoing, object = concluded
  };
}

function generateInitialEvents() {
  const severityIconMap = {
    critical: '\u2694',
    warning: '\u26A0',
    stable: '\u{1F54A}',
    info: '\u{1F4F0}',
  };

  return [
    {
      id: 'init-summary',
      day: 0,
      timestamp: `Day ${INITIAL_WAR_DAY} of War`,
      text: 'SITUATION: Active multi-front war \u2014 US-Israel vs Iran (since Feb 28)',
      severity: 'critical',
      icon: '\u2694',
      action: 'context',
      actor: 'System',
    },
    ...AUTO_UPDATED_RECENT_EVENTS.map((event, index) => ({
      id: `init-news-${index + 1}`,
      day: 0,
      timestamp: event.date,
      text: event.text,
      severity: event.severity,
      icon: severityIconMap[event.severity] || severityIconMap.info,
      action: 'context',
      actor: 'System',
    })),
  ];
}

// ==================== ACTION SELECTION ====================

function selectAction(actor, globalState) {
  const weights = { ...actor.actionWeights };
  const { escalationLevel } = globalState;

  if (escalationLevel > 60) {
    weights.defensivePosture *= 1.5;
    weights.airstrike *= 1.3;
    weights.missileStrike *= 1.4;
    weights.diplomaticOutreach *= 0.6;
  } else if (escalationLevel < 25) {
    weights.diplomaticOutreach *= 1.8;
    weights.strategicSignaling *= 1.5;
    weights.airstrike *= 0.5;
    weights.missileStrike *= 0.4;
  }

  if (actor.behavior.aggression > 0.5) {
    weights.airstrike *= 1.2;
    weights.missileStrike *= 1.2;
    weights.droneOperation *= 1.1;
  }

  if (actor.behavior.asymmetricFactor > 0.5) {
    weights.droneOperation *= 1.4;
    weights.missileStrike *= 1.3;
    weights.cyberDisruption *= 1.3;
    weights.navalManeuver *= 1.2;
  }

  // AI actors may also propose ceasefire when losing badly
  const actorMetrics = actor.metrics;
  if (actorMetrics.militaryPower < 25 || actorMetrics.internalStability < 15) {
    weights.diplomaticOutreach *= 3;
    // Small chance AI proposes ceasefire
    if (Math.random() < 0.08) return 'proposeCeasefire';
  }

  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
  let roll = Math.random() * totalWeight;

  for (const action of ACTION_TYPES) {
    roll -= weights[action] || 0;
    if (roll <= 0) return action;
  }
  return ACTION_TYPES[Math.floor(Math.random() * ACTION_TYPES.length)];
}

// ==================== OUTCOME CALCULATION ====================

function calculateOutcome(actor, action, globalState) {
  const precision = actor.behavior.precision;
  const success = Math.random() < precision;
  const effects = { metricDeltas: {}, globalDeltas: {}, actorDeltas: {} };

  // Standard actions
  if (['airstrike', 'missileStrike', 'droneOperation'].includes(action)) {
    const intensity = success ? 0.5 + Math.random() * 0.5 : 0.1 + Math.random() * 0.3;
    effects.metricDeltas.missileCapacity = -intensity * 2;
    effects.metricDeltas.morale = success ? 3 : -2;
    effects.globalDeltas.escalationLevel = 2 + Math.random() * 4;
    effects.globalDeltas.oilDisruption = Math.random() * 3;
    effects.globalDeltas.globalPressure = 1 + Math.random() * 2;
    effects.actorDeltas = {
      missileCapacity: action === 'missileStrike' ? -1.5 : 0,
      droneCapability: action === 'droneOperation' ? -1 : 0,
    };
  } else if (action === 'navalManeuver') {
    effects.metricDeltas.navalControl = success ? 3 : -1;
    effects.globalDeltas.oilDisruption = actor.id === 'iran' ? 3 + Math.random() * 5 : -1;
    effects.globalDeltas.escalationLevel = 1 + Math.random() * 2;
  } else if (action === 'cyberDisruption') {
    effects.globalDeltas.escalationLevel = 1.5 + Math.random() * 2;
    effects.metricDeltas.internalStability = success ? 0 : -2;
    effects.globalDeltas.tradeImpact = Math.random() * 3;
  } else if (action === 'defensivePosture') {
    effects.metricDeltas.militaryPower = 1;
    effects.metricDeltas.morale = 2;
    effects.globalDeltas.escalationLevel = -1 - Math.random() * 2;
  } else if (action === 'diplomaticOutreach') {
    if (success) {
      effects.globalDeltas.escalationLevel = -3 - Math.random() * 5;
      effects.globalDeltas.globalPressure = -2;
      effects.globalDeltas.allianceInfluence = 2;
      effects.metricDeltas.internalStability = 2;
    } else {
      effects.globalDeltas.escalationLevel = 1;
    }
  } else if (action === 'strategicSignaling') {
    effects.globalDeltas.escalationLevel = Math.random() < 0.5 ? -1 : 2;
    effects.globalDeltas.globalPressure = 1;
    effects.metricDeltas.morale = 1;
  }

  return { success, effects };
}

// Calculate effects for special actions
function calculateSpecialOutcome(actorId, actionId, globalState) {
  const allSpecials = [...(SPECIAL_ACTIONS[actorId] || []), ...SPECIAL_ACTIONS.shared];
  const actionDef = allSpecials.find(a => a.id === actionId);
  if (!actionDef) return calculateOutcome(globalState.actors[actorId], 'strategicSignaling', globalState);

  const effects = { metricDeltas: {}, globalDeltas: {}, actorDeltas: {} };
  const e = actionDef.effects;

  if (e.escalation) effects.globalDeltas.escalationLevel = e.escalation;
  if (e.nuclearIndex) effects.globalDeltas.nuclearIndex = e.nuclearIndex;
  if (e.oilDisruption) effects.globalDeltas.oilDisruption = e.oilDisruption;
  if (e.globalPressure) effects.globalDeltas.globalPressure = e.globalPressure;
  if (e.morale) effects.metricDeltas.morale = e.morale;
  if (e.missileCapacity) effects.actorDeltas.missileCapacity = e.missileCapacity;
  if (e.navalControl) effects.metricDeltas.navalControl = e.navalControl;
  if (e.economy) effects.metricDeltas.economy = e.economy;
  if (e.internalStability) effects.metricDeltas.internalStability = e.internalStability;

  // Apply effects to opponents
  const opponents = ['usa', 'israel', 'iran'].filter(id => id !== actorId);
  if (e.targetMilitary) {
    for (const opp of opponents) {
      const a = globalState.actors[opp];
      if (a) a.metrics.militaryPower = Math.max(0, a.metrics.militaryPower + e.targetMilitary);
    }
  }
  if (e.targetNaval) {
    for (const opp of opponents) {
      const a = globalState.actors[opp];
      if (a) a.metrics.navalControl = Math.max(0, a.metrics.navalControl + e.targetNaval);
    }
  }
  if (e.targetEconomy) {
    for (const opp of opponents) {
      const a = globalState.actors[opp];
      if (a) a.metrics.economy = Math.max(0, a.metrics.economy + e.targetEconomy);
    }
  }
  if (e.targetMorale) {
    for (const opp of opponents) {
      const a = globalState.actors[opp];
      if (a) a.metrics.morale = Math.max(0, a.metrics.morale + e.targetMorale);
    }
  }
  if (e.targetStability) {
    for (const opp of opponents) {
      const a = globalState.actors[opp];
      if (a) a.metrics.internalStability = Math.max(0, a.metrics.internalStability + e.targetStability);
    }
  }

  return { success: true, effects };
}

// ==================== APPLY EFFECTS ====================

function applyEffects(state, actorId, effects) {
  const actor = state.actors[actorId];

  if (effects.metricDeltas) {
    for (const [key, delta] of Object.entries(effects.metricDeltas)) {
      if (actor.metrics[key] !== undefined) {
        actor.metrics[key] = Math.max(0, Math.min(100, actor.metrics[key] + delta));
      }
    }
  }
  if (effects.actorDeltas) {
    for (const [key, delta] of Object.entries(effects.actorDeltas)) {
      if (actor.metrics[key] !== undefined) {
        actor.metrics[key] = Math.max(0, Math.min(100, actor.metrics[key] + delta));
      }
    }
  }
  if (effects.globalDeltas) {
    for (const [key, delta] of Object.entries(effects.globalDeltas)) {
      if (key === 'nuclearIndex') {
        state.nuclearIndex = Math.max(0, Math.min(100, state.nuclearIndex + delta));
      } else if (state[key] !== undefined) {
        state[key] = Math.max(0, Math.min(100, state[key] + delta));
      }
    }
  }
}

// ==================== WAR CONCLUSION ====================

export function checkWarConclusion(state) {
  const iran = state.actors.iran.metrics;
  const usa = state.actors.usa.metrics;
  const israel = state.actors.israel.metrics;

  // Nuclear exchange — set externally via nuclearStrike action
  if (state._nuclearStrikeOutcome) {
    return {
      type: 'nuclearExchange',
      title: 'NUCLEAR EXCHANGE',
      color: '#dc2626',
      icon: '\u2622',
      summary: state._nuclearStrikeOutcome.description,
      casualties: state._nuclearStrikeOutcome.totalCasualties?.immediate || 0,
      detail: 'Nuclear weapons were used. This is the worst possible outcome.',
      _nuclearOutcome: state._nuclearStrikeOutcome, // Full detailed outcome for multi-page display
    };
  }

  // Iranian regime collapse
  if (iran.internalStability <= 10 && iran.economy <= 5) {
    return {
      type: 'regimeCollapse',
      title: 'IRANIAN REGIME COLLAPSE',
      color: '#f97316',
      icon: '\u{1F3DB}',
      summary: 'The Islamic Republic has fallen. Internal protests, economic collapse, and military defeats triggered regime change.',
      casualties: Math.floor(50000 + Math.random() * 150000),
      detail: 'With economy destroyed and stability at zero, the regime could no longer maintain control. Mass defections and civil uprising ended the Islamic Republic.',
    };
  }

  // Iranian military surrender
  if (iran.militaryPower <= 10 && iran.missileCapacity <= 5 && iran.droneCapability <= 5) {
    return {
      type: 'iranSurrender',
      title: 'IRANIAN MILITARY CAPITULATION',
      color: '#eab308',
      icon: '\u{1F3F3}',
      summary: 'Iran\u2019s military capability has been destroyed. Remaining forces surrender under international mediation.',
      casualties: Math.floor(30000 + Math.random() * 100000),
      detail: 'Iran\'s conventional military has been systematically dismantled. No missile capacity, no drones, no ability to project power.',
    };
  }

  // Coalition withdrawal (US domestic pressure)
  if (usa.internalStability <= 15 && usa.morale <= 20) {
    return {
      type: 'coalitionWithdrawal',
      title: 'US COALITION WITHDRAWAL',
      color: '#3b82f6',
      icon: '\u{1F1FA}\u{1F1F8}',
      summary: 'Domestic political pressure forces US withdrawal from the conflict. Israel left to manage alone.',
      casualties: Math.floor(10000 + Math.random() * 50000),
      detail: 'Public opinion turned decisively against the war. Congress invoked War Powers Act. US forces begin withdrawal.',
    };
  }

  // Ceasefire achieved
  const proposals = state.ceasefireProposals || {};
  const proposers = Object.keys(proposals);
  const hasCoalitionProposal = proposers.includes('usa') || proposers.includes('israel');
  const hasIranProposal = proposers.includes('iran');
  if (hasCoalitionProposal && hasIranProposal && state.escalationLevel < 45) {
    return {
      type: 'ceasefire',
      title: 'CEASEFIRE ACHIEVED',
      color: '#22c55e',
      icon: '\u{1F54A}',
      summary: 'Both sides have accepted ceasefire terms. International mediators oversee the cessation of hostilities.',
      casualties: Math.floor(20000 + Math.random() * 80000),
      detail: 'Diplomatic efforts succeeded. With escalation below critical threshold and both sides proposing terms, a ceasefire framework was agreed.',
    };
  }

  // Stalemate / frozen conflict
  if (state.dayCount > 365 && state.escalationLevel >= 25 && state.escalationLevel <= 55) {
    return {
      type: 'stalemate',
      title: 'FROZEN CONFLICT',
      color: '#94a3b8',
      icon: '\u{2744}',
      summary: 'After one year, neither side can achieve decisive victory. The conflict becomes a frozen stalemate.',
      casualties: Math.floor(100000 + Math.random() * 200000),
      detail: 'The war has ground to a halt. No ceasefire, but no active offensives. A new normal of low-intensity conflict and diplomatic limbo.',
    };
  }

  // Regional conflagration
  if (state.oilDisruption > 96 && state.tradeImpact > 92 && state.globalPressure > 90) {
    return {
      type: 'regionalConflagration',
      title: 'REGIONAL CONFLAGRATION',
      color: '#dc2626',
      icon: '\u{1F525}',
      summary: 'The conflict has engulfed the entire Middle East. Global economic crisis. Multiple states destabilized.',
      casualties: Math.floor(200000 + Math.random() * 500000),
      detail: 'Oil disruption, trade collapse, and cascading state failures have turned a bilateral war into a regional catastrophe.',
    };
  }

  return null; // War continues
}

// ==================== MAP ANIMATION ====================

function generateMapAnimation(actorId, action, day) {
  const origins = { usa: { x: 0.18, y: 0.36 }, israel: { x: 0.35, y: 0.31 }, iran: { x: 0.73, y: 0.30 } };
  const targets = { usa: { x: 0.18, y: 0.36 }, israel: { x: 0.35, y: 0.31 }, iran: { x: 0.73, y: 0.30 } };

  const origin = origins[actorId];
  let target = actorId === 'iran'
    ? (Math.random() < 0.6 ? targets.israel : targets.usa)
    : targets.iran;

  target = { x: target.x + (Math.random() - 0.5) * 0.08, y: target.y + (Math.random() - 0.5) * 0.08 };

  const typeMap = {
    missileStrike: 'missile', droneOperation: 'drone', airstrike: 'airstrike',
    navalManeuver: 'naval', cyberDisruption: 'cyber', diplomaticOutreach: 'diplomacy',
    defensivePosture: 'shield', strategicSignaling: 'signal',
    deployMOAB: 'airstrike', carrierStrike: 'missile', fullNavalBlockade: 'naval',
    ironDomeSurge: 'shield', nuclearAmbiguity: 'signal', massEvacuation: 'shield',
    hormuzMineSurge: 'naval', activateAllProxies: 'drone', nuclearBreakout: 'signal',
    proposeCeasefire: 'diplomacy', acceptCeasefire: 'diplomacy', nuclearStrike: 'missile',
  };

  return {
    id: `anim-${day}-${Math.random().toString(36).slice(2, 7)}`,
    type: typeMap[action] || 'pulse',
    origin, target, actorId,
    startTime: Date.now(),
    duration: action === 'nuclearStrike' ? 5000 : 2500,
    day,
  };
}

// ==================== PREDICTIONS ====================

function updatePredictions(state) {
  const { escalationLevel, nuclearIndex, oilDisruption } = state;
  const norm = escalationLevel / 100;
  const nucNorm = nuclearIndex / 100;

  const runs = 200;
  const outcomes = { deesc: 0, prolonged: 0, regional: 0, brink: 0, internal: 0 };

  for (let i = 0; i < runs; i++) {
    const escFuture = norm + (Math.random() - 0.45) * 0.3;
    if (escFuture < 0.25) outcomes.deesc++;
    else if (escFuture < 0.50) outcomes.prolonged++;
    else if (escFuture < 0.70) outcomes.brink++;
    else if (escFuture < 0.85) outcomes.regional++;
    else outcomes.internal++;
  }

  let predictions = {
    deescalation: outcomes.deesc / runs,
    prolongedConflict: outcomes.prolonged / runs,
    regionalExpansion: outcomes.regional / runs,
    strategicBrinkmanship: outcomes.brink / runs,
    internalInstability: outcomes.internal / runs,
  };

  const total = Object.values(predictions).reduce((a, b) => a + b, 0);
  for (const key of Object.keys(predictions)) predictions[key] = predictions[key] / total;

  state.predictions = predictions;
  state.warDurationRange = { min: 14 + Math.floor(escalationLevel * 0.5), max: Math.min(365, 60 + Math.floor(escalationLevel * 1.2)) };
  state.escalationProbability = Math.min(0.95, 0.1 + norm * 0.7 + nucNorm * 0.15);
  state.nuclearPredictions = calculateNuclearPredictions(nuclearIndex);
}

// ==================== PLAYER ACTION ====================

// target = { countryId, subTargetId } or null for non-offensive actions
export function applyPlayerAction(state, actionId, target) {
  const newState = JSON.parse(JSON.stringify(state));
  const actorId = newState.playerControlledActor;
  if (!actorId) return newState;

  const actor = newState.actors[actorId];
  const warDay = newState.warDay || 37;
  const ts = makeTimestamp(newState.dayCount, warDay);

  // Handle ceasefire proposals
  if (actionId === 'proposeCeasefire') {
    if (!newState.ceasefireProposals) newState.ceasefireProposals = {};
    newState.ceasefireProposals[actorId] = newState.dayCount;
  }
  if (actionId === 'acceptCeasefire') {
    if (!newState.ceasefireProposals) newState.ceasefireProposals = {};
    newState.ceasefireProposals[actorId] = newState.dayCount;
  }

  // Handle nuclear strike
  if (actionId === 'nuclearStrike') {
    const outcome = calculateNuclearStrikeOutcome(actorId, newState);
    newState._nuclearStrikeOutcome = outcome;
    newState.nuclearIndex = 100;
    newState.escalationLevel = 100;

    newState.events = [{
      id: `nuke-${Date.now()}`, day: newState.dayCount, timestamp: ts,
      text: `\u2622 NUCLEAR STRIKE: ${actor.name} has launched nuclear weapons`,
      severity: 'critical', icon: '\u2622', action: 'nuclearStrike', actor: actor.name,
    }, ...newState.events].slice(0, 100);

    newState.mapAnimations.push(generateMapAnimation(actorId, 'nuclearStrike', newState.dayCount));
    const conclusion = checkWarConclusion(newState);
    if (conclusion) newState.warConclusion = conclusion;
    return newState;
  }

  // Special or standard action
  const isSpecial = !ACTION_TYPES.includes(actionId);
  let outcome;

  if (isSpecial) {
    outcome = calculateSpecialOutcome(actorId, actionId, newState);
  } else {
    outcome = calculateOutcome(actor, actionId, newState);
  }

  applyEffects(newState, actorId, outcome.effects);

  // Nuclear delta
  const prevNuc = newState.nuclearIndex;
  if (isSpecial && SPECIAL_ACTIONS.shared.concat(SPECIAL_ACTIONS[actorId] || []).find(a => a.id === actionId)?.effects?.nuclearIndex) {
    // Already applied via globalDeltas
  } else {
    const nucDelta = calculateNuclearDelta(actionId, actorId, newState);
    newState.nuclearIndex = Math.max(0, Math.min(100, newState.nuclearIndex + nucDelta));
  }

  // Apply targeted damage to specific opponent
  if (target && target.countryId && target.subTargetId) {
    const targetActor = newState.actors[target.countryId];
    const subTarget = (TARGET_OPTIONS[target.countryId] || []).find(t => t.id === target.subTargetId);
    if (targetActor && subTarget) {
      let dmg = subTarget.damage;

      // Alliance modifiers: S-400 reduces airstrike damage to Iran
      if (target.countryId === 'iran' && newState.allianceSupport?.s400Active?.active) {
        if (['airstrike', 'deployMOAB', 'carrierStrike'].includes(actionId)) {
          dmg = Math.round(dmg * 0.8); // 20% reduction
        }
      }
      // Russian intel boost for Iran's attacks
      if (actorId === 'iran' && newState.allianceSupport?.russiaIntelSupport?.active) {
        dmg = Math.round(dmg * 1.15); // 15% more damage with sat intel
      }

      const metric = subTarget.metricHit;
      if (targetActor.metrics[metric] !== undefined) {
        targetActor.metrics[metric] = Math.max(0, targetActor.metrics[metric] - dmg);
      }
      if (subTarget.nuclearDelta) {
        newState.nuclearIndex = Math.min(100, newState.nuclearIndex + subTarget.nuclearDelta);
      }
      if (subTarget.globalPressureDelta) {
        newState.globalPressure = Math.min(100, newState.globalPressure + subTarget.globalPressureDelta);
      }
      if (subTarget.stabilityDelta) {
        // Hitting troops damages attacker's own stability (domestic backlash on target country)
        targetActor.metrics.internalStability = Math.max(0, targetActor.metrics.internalStability + subTarget.stabilityDelta);
      }
    }
  }

  // Generate events
  const actionLabel = isSpecial
    ? (SPECIAL_ACTIONS[actorId]?.find(a => a.id === actionId) || SPECIAL_ACTIONS.shared.find(a => a.id === actionId))?.label || actionId
    : actionId;

  const targetLabel = target?.countryId
    ? ` \u2192 ${newState.actors[target.countryId]?.name || target.countryId}${target.subTargetId ? ': ' + ((TARGET_OPTIONS[target.countryId] || []).find(t => t.id === target.subTargetId)?.label || '') : ''}`
    : '';

  newState.events = [{
    id: `player-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    day: newState.dayCount, timestamp: ts,
    text: `[PLAYER] ${actor.name}: ${actionLabel}${targetLabel}`,
    severity: isSpecial ? 'critical' : 'warning',
    icon: '\u{1F3AE}',
    action: actionId, actor: actor.name,
  }, ...newState.events].slice(0, 100);

  newState.mapAnimations.push(generateMapAnimation(actorId, actionId, newState.dayCount));

  // Check nuclear event
  const nucEvt = generateNuclearEvent(newState.nuclearIndex, prevNuc);
  if (nucEvt) {
    newState.events = [{
      id: `nuc-p-${Date.now()}`, day: newState.dayCount, timestamp: ts,
      text: `NUCLEAR: ${nucEvt.label}`, severity: nucEvt.severity,
      icon: nucEvt.icon, action: 'nuclear', actor: 'System',
    }, ...newState.events].slice(0, 100);
  }

  // Check war conclusion
  const conclusion = checkWarConclusion(newState);
  if (conclusion) newState.warConclusion = conclusion;

  return newState;
}

// ==================== MAIN TICK ====================

export function simulateTick(state) {
  if (state.warConclusion) return state; // War is over

  const newState = JSON.parse(JSON.stringify(state));
  newState.dayCount += 1;

  const newEvents = [];
  const newAnimations = [];
  const actorIds = ['usa', 'israel', 'iran'];

  for (const actorId of actorIds) {
    // Skip player-controlled actor (they act via applyPlayerAction)
    if (actorId === newState.playerControlledActor) continue;

    const actProbability = 0.4 + newState.escalationLevel * 0.004;
    if (Math.random() > actProbability) continue;

    const actor = newState.actors[actorId];
    const action = selectAction(actor, newState);

    // Handle AI ceasefire proposals
    if (action === 'proposeCeasefire') {
      if (!newState.ceasefireProposals) newState.ceasefireProposals = {};
      newState.ceasefireProposals[actorId] = newState.dayCount;
      newEvents.push({
        id: `cf-${newState.dayCount}-${Math.random().toString(36).slice(2, 7)}`,
        day: newState.dayCount,
        timestamp: makeTimestamp(newState.dayCount, newState.warDay || 37),
        text: `${actor.name} proposes ceasefire through international mediators`,
        severity: 'stable', icon: '\u{1F54A}', action: 'proposeCeasefire', actor: actor.name,
      });
      // Also reduce escalation
      newState.escalationLevel = Math.max(0, newState.escalationLevel - 5);
      continue;
    }

    const outcome = calculateOutcome(actor, action, newState);
    applyEffects(newState, actorId, outcome.effects);

    const prevNuclear = newState.nuclearIndex;
    const nucDelta = calculateNuclearDelta(action, actorId, newState);
    newState.nuclearIndex = Math.max(0, Math.min(100, newState.nuclearIndex + nucDelta));

    const nuclearEvent = generateNuclearEvent(newState.nuclearIndex, prevNuclear);
    if (nuclearEvent) {
      newEvents.push({
        id: `nuc-${newState.dayCount}-${Math.random().toString(36).slice(2, 7)}`,
        day: newState.dayCount,
        timestamp: makeTimestamp(newState.dayCount, newState.warDay || 37),
        text: `NUCLEAR: ${nuclearEvent.label}`,
        severity: nuclearEvent.severity, icon: nuclearEvent.icon,
        action: 'nuclear', actor: 'System',
      });
    }

    newEvents.push(generateActionEvent(actor.name, actorId, action, newState.dayCount, newState.warDay || 37));
    newAnimations.push(generateMapAnimation(actorId, action, newState.dayCount));
  }

  // Secondary events
  newEvents.push(...generateSecondaryEvents(newState, newState.dayCount));

  // Natural decay
  newState.escalationLevel = Math.max(0, Math.min(100, newState.escalationLevel + (Math.random() - 0.52) * 1.5));
  newState.oilDisruption = Math.max(0, Math.min(100, newState.oilDisruption + (Math.random() - 0.5) * 2));

  for (const actorId of actorIds) {
    const actor = newState.actors[actorId];
    for (const key of Object.keys(actor.metrics)) {
      actor.metrics[key] = Math.max(0, Math.min(100, actor.metrics[key] + (Math.random() - 0.5) * 0.5));
    }
    actor.metrics.economy = Math.max(0, Math.min(100, actor.metrics.economy - newState.oilDisruption * 0.02));

    // War attrition — weaker actors degrade faster under sustained conflict
    if (newState.escalationLevel > 60) {
      const m = actor.metrics;
      const isIran = actorId === 'iran';
      const alliance = newState.allianceSupport || {};

      // Iran-specific: alliance support slows degradation
      const econRate = (isIran && alliance.chinaEconomicSupport?.active) ? 0.15 : 0.3;
      const stabilityRate = (isIran && alliance.mosaicDefense?.active) ? 0.3 : 0.5;

      // Economy degrades under war conditions
      if (m.economy < 30) m.economy = Math.max(0, m.economy - econRate);
      // Internal stability degrades when economy is collapsed
      if (m.economy < 10) m.internalStability = Math.max(0, m.internalStability - stabilityRate);
      // Military degrades when stability is low (desertion, morale collapse)
      if (m.internalStability < 20) {
        m.militaryPower = Math.max(0, m.militaryPower - 0.3);
        m.morale = Math.max(0, m.morale - 0.4);
      }
      // Missiles and drones deplete from sustained use
      if (m.missileCapacity > 0) m.missileCapacity = Math.max(0, m.missileCapacity - 0.15);
      if (m.droneCapability > 0) m.droneCapability = Math.max(0, m.droneCapability - 0.1);

      // S-400 degrades over time (ammo depletion, battle damage)
      if (isIran && alliance.s400Active?.active && Math.random() < 0.005) {
        alliance.s400Active.active = false; // S-400 knocked out
      }
    }
  }

  // Expire old ceasefire proposals (> 10 ticks old)
  if (newState.ceasefireProposals) {
    for (const [k, v] of Object.entries(newState.ceasefireProposals)) {
      if (newState.dayCount - v > 10) delete newState.ceasefireProposals[k];
    }
  }

  updatePredictions(newState);

  newState.events = [...newEvents, ...state.events].slice(0, 100);
  newState.mapAnimations = [
    ...newAnimations,
    ...state.mapAnimations.filter(a => Date.now() - a.startTime < a.duration),
  ];

  // Check war conclusion
  const conclusion = checkWarConclusion(newState);
  if (conclusion) newState.warConclusion = conclusion;

  return newState;
}
