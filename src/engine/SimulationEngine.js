// Core Simulation Engine — tick-based probabilistic model
// Calibrated to real-world conditions: 2026 Iran War (began Feb 28, 2026)
// Simulation Day 0 = April 6, 2026 (Day 37 of the active war)

import { createInitialActors, createAllianceSupport, ACTION_TYPES, PROXY_FORCES, SPECIAL_ACTIONS, TARGET_OPTIONS } from './actors.js';
import { calculateNuclearDelta, generateNuclearEvent, calculateNuclearPredictions, calculateNuclearStrikeOutcome, getNuclearWarheadById } from './nuclear.js';
import { generateActionEvent, generateSecondaryEvents } from './events.js';
import { LATEST_SNAPSHOT } from './latestSnapshot.js';

// Date helper
const SIM_START = new Date(LATEST_SNAPSHOT.lastUpdated || '2026-04-07');
const INITIAL_WAR_DAY = LATEST_SNAPSHOT.warDay || 39;
const INITIAL_GLOBALS = {
  nuclearIndex: LATEST_SNAPSHOT.global?.nuclearIndex ?? 75,
  escalationLevel: LATEST_SNAPSHOT.global?.escalationLevel ?? 90,
  oilDisruption: LATEST_SNAPSHOT.global?.oilDisruption ?? 85,
};
// AUTO-UPDATED RECENT EVENTS START
const AUTO_UPDATED_RECENT_EVENTS = LATEST_SNAPSHOT.recentEvents || [];
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

function normalizeCeasefireStatus(ceasefire) {
  const status = ceasefire?.status || 'none';
  const active = Boolean(ceasefire?.active || status === 'active' || status === 'fragile');
  return {
    active,
    status: active ? (status === 'none' ? 'fragile' : status) : status,
    confidence: Number(ceasefire?.confidence || 0),
    durationDays: Number.isFinite(Number(ceasefire?.durationDays)) ? Number(ceasefire.durationDays) : null,
    summary: ceasefire?.summary || 'No sustained ceasefire is currently modeled.',
  };
}

function softenActionWeightsForCeasefire(weights, ceasefireStatus) {
  if (!ceasefireStatus?.active) return;

  const aggressiveFactor = ceasefireStatus.status === 'active' ? 0.24 : 0.42;
  const diplomaticFactor = ceasefireStatus.status === 'active' ? 2.6 : 1.8;

  weights.airstrike *= aggressiveFactor;
  weights.missileStrike *= aggressiveFactor;
  weights.droneOperation *= aggressiveFactor;
  weights.navalManeuver *= aggressiveFactor * 1.2;
  weights.cyberDisruption *= aggressiveFactor * 1.1;
  weights.diplomaticOutreach *= diplomaticFactor;
  weights.defensivePosture *= 1.5;
  weights.strategicSignaling *= 0.7;
}

function registerCeasefireBreakdown(state, actorName) {
  const current = normalizeCeasefireStatus(state.ceasefireStatus);
  if (!current.active) return;

  if (current.status === 'active') {
    state.ceasefireStatus = {
      ...current,
      status: 'fragile',
      summary: `${actorName} offensive activity has made the ceasefire fragile and raised the risk of renewed escalation.`,
    };
    state.escalationLevel = Math.max(state.escalationLevel, 42);
    return;
  }

  state.ceasefireStatus = {
    ...current,
    active: false,
    status: 'collapsed',
    summary: `${actorName} offensive activity has effectively collapsed the ceasefire framework.`,
  };
  state.escalationLevel = Math.max(state.escalationLevel, 62);
}

export function createSimulationState() {
  return {
    dayCount: 0,
    warDay: INITIAL_WAR_DAY,
    running: false,
    speed: 1,
    actors: createInitialActors(LATEST_SNAPSHOT.actorOverrides),
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
    allianceSupport: createAllianceSupport(LATEST_SNAPSHOT.alliance),
    updateSequence: LATEST_SNAPSHOT.updateSequence || 0,
    lastUpdated: LATEST_SNAPSHOT.lastUpdated,
    lastSyncedAt: LATEST_SNAPSHOT.lastSyncedAt || null,
    snapshotSummary: LATEST_SNAPSHOT.summary,
    ceasefireStatus: normalizeCeasefireStatus(LATEST_SNAPSHOT.ceasefire),
    sourceStatuses: LATEST_SNAPSHOT.sourceStatuses || [],
    narratives: LATEST_SNAPSHOT.narratives || [],
    lastNarrativeUpdate: LATEST_SNAPSHOT.lastNarrativeUpdate || null,
    // Player control
    playerControlledActor: null, // null = auto, 'usa'/'israel'/'iran'
    pendingPlayerAction: null,
    // Ceasefire tracking
    ceasefireProposals: {}, // { actorId: dayProposed }
    // War conclusion
    warConclusion: null, // null = ongoing, object = concluded
    pendingNuclearStrike: null,
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
      text: `SITUATION: ${LATEST_SNAPSHOT.summary}`,
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
      latestSinceUpdate: event.latestSinceUpdate,
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
  softenActionWeightsForCeasefire(weights, globalState.ceasefireStatus);

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
  const coalitionMilitary = (usa.militaryPower + israel.militaryPower) / 2;
  const coalitionMorale = (usa.morale + israel.morale) / 2;
  const coalitionStability = (usa.internalStability + israel.internalStability) / 2;

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
      color: '#ef4444',
      icon: '\u{1F1FA}\u{1F1F8}',
      summary: 'Domestic political pressure forces US withdrawal from the conflict. Israel left to manage alone.',
      casualties: Math.floor(10000 + Math.random() * 50000),
      detail: 'Public opinion turned decisively against the war. Congress invoked War Powers Act. US forces begin withdrawal.',
    };
  }

  // Coalition degrades Iran without total state collapse
  if (iran.militaryPower <= 22 && iran.missileCapacity <= 15 && iran.internalStability <= 25 && coalitionMilitary >= 45) {
    return {
      type: 'coalitionStrategicVictory',
      title: 'COALITION STRATEGIC VICTORY',
      color: '#ef4444',
      icon: '\u2696',
      summary: 'US-Israeli pressure breaks Iran’s warfighting capacity and forces a coercive settlement without full regime collapse.',
      casualties: Math.floor(45000 + Math.random() * 125000),
      detail: 'Iran retains a state structure, but its strike networks, missile forces, and command resilience are too degraded to continue. External powers impose inspections, maritime guarantees, and a forced de-escalation framework.',
    };
  }

  // Israel overextends under prolonged multi-front pressure
  if (israel.internalStability <= 18 && israel.economy <= 20 && usa.internalStability < 45) {
    return {
      type: 'israeliOverextension',
      title: 'ISRAELI OVEREXTENSION',
      color: '#3b82f6',
      icon: '\u26A0',
      summary: 'Israel’s economy, reserves, and internal cohesion are stretched to the breaking point, forcing an abrupt strategic pause.',
      casualties: Math.floor(30000 + Math.random() * 90000),
      detail: 'Multi-front mobilization, missile pressure, and economic attrition leave Israel unable to sustain offensive tempo. Washington pushes for de-escalation as domestic resilience in Israel deteriorates.',
    };
  }

  // Great-power pressure forces a negotiated stop before total collapse
  if (state.globalPressure >= 88 && state.allianceInfluence >= 82 && state.escalationLevel <= 58 && state.dayCount > 20) {
    return {
      type: 'greatPowerSettlement',
      title: 'GREAT-POWER IMPOSED SETTLEMENT',
      color: '#22c55e',
      icon: '\u{1F30D}',
      summary: 'International pressure becomes overwhelming. External powers force both sides into a monitored settlement.',
      casualties: Math.floor(25000 + Math.random() * 85000),
      detail: 'A mix of UN pressure, Gulf panic, Russian-Chinese leverage, and Western diplomatic exhaustion produces a settlement neither side fully wants, but neither can refuse.',
    };
  }

  // Energy shock becomes the main driver of de-escalation
  if (state.oilDisruption >= 90 && state.tradeImpact >= 82 && state.globalPressure >= 84 && state.escalationLevel <= 72) {
    return {
      type: 'hormuzArmistice',
      title: 'HORMUZ CRISIS ARMISTICE',
      color: '#f59e0b',
      icon: '\u26F5',
      summary: 'Global energy shock forces a maritime armistice centered on the Strait of Hormuz and Gulf shipping lanes.',
      casualties: Math.floor(20000 + Math.random() * 70000),
      detail: 'Oil markets, shipping insurers, and Gulf states force emergency diplomacy. The war does not truly end politically, but a maritime ceasefire is imposed to prevent a global economic spiral.',
    };
  }

  // Iran survives because coalition cohesion erodes while allied support persists
  if (state.allianceInfluence >= 88 && coalitionStability <= 30 && coalitionMorale <= 28 && iran.internalStability >= 22) {
    return {
      type: 'iranianSurvival',
      title: 'IRANIAN SURVIVAL UNDER ALLIED SHIELD',
      color: '#22c55e',
      icon: '\u{1F6E1}',
      summary: 'Iran weathers the campaign long enough for coalition resolve to fracture and allied backing to lock in a contested end-state.',
      casualties: Math.floor(40000 + Math.random() * 120000),
      detail: 'Iran does not win decisively, but it survives. External backing, sanctions evasion, and coalition fatigue deny Washington and Jerusalem the clean outcome they sought.',
    };
  }

  // Iran emerges as the main regional strategic beneficiary
  if (
    iran.militaryPower >= 38 &&
    iran.missileCapacity >= 28 &&
    iran.internalStability >= 30 &&
    state.allianceInfluence >= 90 &&
    state.oilDisruption >= 88 &&
    state.tradeImpact >= 86 &&
    usa.internalStability <= 24 &&
    israel.internalStability <= 20
  ) {
    return {
      type: 'iranianRegionalAscendancy',
      title: 'IRANIAN REGIONAL ASCENDANCY',
      color: '#22c55e',
      icon: '\u{1F451}',
      summary: 'The coalition fails to break Iran. The petro-dollar system fractures, global power shifts, and Tehran emerges as the dominant strategic force across the region.',
      casualties: Math.floor(90000 + Math.random() * 180000),
      detail: 'Iran does not literally occupy the Middle East, but it wins the political map. Washington and Jerusalem emerge weakened, Gulf states hedge toward Tehran, proxy networks gain prestige, the petro-dollar era effectively ends under sustained energy shock, and a new fragmented world order takes shape around rival currency blocs and regional power centers.',
    };
  }

  // Everyone is too exhausted to keep pushing
  if (state.dayCount > 90 && usa.morale <= 35 && israel.morale <= 35 && iran.morale <= 35 && state.escalationLevel < 70) {
    return {
      type: 'mutualExhaustion',
      title: 'MUTUAL EXHAUSTION',
      color: '#94a3b8',
      icon: '\u{1FAAB}',
      summary: 'None of the core actors can convert pain into victory. The war burns out into exhaustion and partial disengagement.',
      casualties: Math.floor(60000 + Math.random() * 140000),
      detail: 'Military fatigue, public strain, reserve burnout, and economic damage leave all sides with enough capacity to hurt each other but not enough legitimacy to continue at the same intensity.',
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

function generateMapAnimation(actorId, action, day, options = {}) {
  const origins = {
    usa: { lon: 51.32, lat: 25.12 },
    israel: { lon: 34.78, lat: 32.08 },
    iran: { lon: 51.39, lat: 35.68 },
  };
  const targets = {
    usa: { lon: 50.58, lat: 26.22 },
    israel: { lon: 34.78, lat: 32.08 },
    iran: { lon: 51.39, lat: 35.68 },
  };

  const origin = origins[actorId];
  const resolvedTargetActorId = options.targetActorId || (
    actorId === 'iran'
      ? (Math.random() < 0.6 ? 'israel' : 'usa')
      : 'iran'
  );
  let target = targets[resolvedTargetActorId] || targets.iran;

  target = {
    lon: target.lon + ((Math.random() - 0.5) * 2.2),
    lat: target.lat + ((Math.random() - 0.5) * 1.8),
  };

  const typeMap = {
    missileStrike: 'missile', droneOperation: 'drone', airstrike: 'airstrike',
    navalManeuver: 'naval', cyberDisruption: 'cyber', diplomaticOutreach: 'diplomacy',
    defensivePosture: 'shield', strategicSignaling: 'signal',
    deployMOAB: 'airstrike', carrierStrike: 'missile', fullNavalBlockade: 'naval',
    ironDomeSurge: 'shield', nuclearAmbiguity: 'signal', massEvacuation: 'shield',
    hormuzMineSurge: 'naval', activateAllProxies: 'drone', nuclearBreakout: 'signal',
    proposeCeasefire: 'diplomacy', acceptCeasefire: 'diplomacy', nuclearStrike: 'nuclearStrike',
  };

  return {
    id: `anim-${day}-${Math.random().toString(36).slice(2, 7)}`,
    type: typeMap[action] || 'pulse',
    origin, target, actorId,
    startTime: Date.now(),
    duration: action === 'nuclearStrike' ? 6000 : 2500,
    day,
    intercepted: options.intercepted ?? false,
    targetActorId: resolvedTargetActorId,
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

  if (state.ceasefireStatus?.active) {
    const ceasefireStrength = state.ceasefireStatus.status === 'active' ? 1.7 : 1.3;
    predictions.deescalation *= ceasefireStrength;
    predictions.prolongedConflict *= 0.85;
    predictions.regionalExpansion *= 0.55;
    predictions.strategicBrinkmanship *= 0.7;
    predictions.internalInstability *= 0.85;
  }

  const total = Object.values(predictions).reduce((a, b) => a + b, 0);
  for (const key of Object.keys(predictions)) predictions[key] = predictions[key] / total;

  state.predictions = predictions;
  state.warDurationRange = { min: 14 + Math.floor(escalationLevel * 0.5), max: Math.min(365, 60 + Math.floor(escalationLevel * 1.2)) };
  state.escalationProbability = Math.min(0.95, 0.1 + norm * 0.7 + nucNorm * 0.15);
  state.nuclearPredictions = calculateNuclearPredictions(nuclearIndex);
}

// ==================== PLAYER ACTION ====================

// target = { countryId, subTargetId } or null for non-offensive actions
export function applyPlayerAction(state, actionId, target, options = {}) {
  if (state.pendingNuclearStrike || state.warConclusion) return state;

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
    newState.ceasefireStatus = {
      ...normalizeCeasefireStatus(newState.ceasefireStatus),
      active: true,
      status: 'fragile',
      summary: `${actor.name} has proposed a ceasefire. Negotiations are active, but the pause is not yet fully stabilized.`,
    };
    newState.escalationLevel = Math.max(0, newState.escalationLevel - 8);
  }
  if (actionId === 'acceptCeasefire') {
    if (!newState.ceasefireProposals) newState.ceasefireProposals = {};
    newState.ceasefireProposals[actorId] = newState.dayCount;
    newState.ceasefireStatus = {
      ...normalizeCeasefireStatus(newState.ceasefireStatus),
      active: true,
      status: 'active',
      summary: `${actor.name} has accepted ceasefire terms. A monitored pause is now the modeled base state unless renewed strikes break it.`,
    };
    newState.escalationLevel = Math.max(0, newState.escalationLevel - 14);
  }

  // Handle nuclear strike
  if (actionId === 'nuclearStrike') {
    const selectedWarhead = getNuclearWarheadById(actorId, options.warheadId, true);
    const targetActorId = target?.countryId || (actorId === 'iran' ? 'israel' : 'iran');
    const targetName = newState.actors[targetActorId]?.name || targetActorId;
    const outcome = calculateNuclearStrikeOutcome(actorId, newState, options.warheadId, target);
    newState.nuclearIndex = 100;
    newState.escalationLevel = 100;

    newState.events = [{
      id: `nuke-${Date.now()}`, day: newState.dayCount, timestamp: ts,
      text: `\u2622 NUCLEAR STRIKE: ${actor.name} has launched ${selectedWarhead?.shortLabel || 'nuclear weapons'} at ${targetName}`,
      severity: 'critical', icon: '\u2622', action: 'nuclearStrike', actor: actor.name,
    }, ...newState.events].slice(0, 100);

    newState.pendingNuclearStrike = {
      actorId,
      warheadId: options.warheadId || selectedWarhead?.id || null,
      target,
      createdAt: Date.now(),
      resolveAt: Date.now() + 6000,
      outcome,
    };
    newState.mapAnimations.push(generateMapAnimation(actorId, 'nuclearStrike', newState.dayCount, {
      intercepted: outcome.intercepted ?? false,
      targetActorId,
    }));
    return newState;
  }

  if (['airstrike', 'missileStrike', 'droneOperation', 'navalManeuver', 'cyberDisruption', 'nuclearStrike'].includes(actionId)) {
    registerCeasefireBreakdown(newState, actor.name);
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
  if (state.warConclusion || state.pendingNuclearStrike) return state; // War is over or nuclear resolution pending

  const newState = JSON.parse(JSON.stringify(state));
  newState.dayCount += 1;

  const newEvents = [];
  const newAnimations = [];
  const actorIds = ['usa', 'israel', 'iran'];

  for (const actorId of actorIds) {
    // Skip player-controlled actor (they act via applyPlayerAction)
    if (actorId === newState.playerControlledActor) continue;

    const ceasefireActModifier = newState.ceasefireStatus?.active
      ? (newState.ceasefireStatus.status === 'active' ? 0.12 : 0.2)
      : 0.4;
    const actProbability = ceasefireActModifier + newState.escalationLevel * (newState.ceasefireStatus?.active ? 0.002 : 0.004);
    if (Math.random() > actProbability) continue;

    const actor = newState.actors[actorId];
    const action = selectAction(actor, newState);

    // Handle AI ceasefire proposals
    if (action === 'proposeCeasefire') {
      if (!newState.ceasefireProposals) newState.ceasefireProposals = {};
      newState.ceasefireProposals[actorId] = newState.dayCount;
      newState.ceasefireStatus = {
        ...normalizeCeasefireStatus(newState.ceasefireStatus),
        active: true,
        status: 'fragile',
        summary: `${actor.name} is pushing a ceasefire through mediators. The situation is calmer, but still reversible.`,
      };
      newEvents.push({
        id: `cf-${newState.dayCount}-${Math.random().toString(36).slice(2, 7)}`,
        day: newState.dayCount,
        timestamp: makeTimestamp(newState.dayCount, newState.warDay || 37),
        text: `${actor.name} proposes ceasefire through international mediators`,
        severity: 'stable', icon: '\u{1F54A}', action: 'proposeCeasefire', actor: actor.name,
      });
      // Also reduce escalation
      newState.escalationLevel = Math.max(0, newState.escalationLevel - 8);
      continue;
    }

    const outcome = calculateOutcome(actor, action, newState);
    applyEffects(newState, actorId, outcome.effects);

    if (['airstrike', 'missileStrike', 'droneOperation', 'navalManeuver', 'cyberDisruption'].includes(action)) {
      registerCeasefireBreakdown(newState, actor.name);
    }

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
  const decayBias = newState.ceasefireStatus?.active
    ? (newState.ceasefireStatus.status === 'active' ? -1.35 : -0.75)
    : 0;
  newState.escalationLevel = Math.max(0, Math.min(100, newState.escalationLevel + (Math.random() - 0.52) * 1.5 + decayBias));
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

export function resolvePendingNuclearStrike(state) {
  if (!state.pendingNuclearStrike || state.warConclusion) return state;

  const newState = JSON.parse(JSON.stringify(state));
  const pending = newState.pendingNuclearStrike;
  const warDay = newState.warDay || 37;
  const ts = makeTimestamp(newState.dayCount, warDay);
  const outcome = pending.outcome;
  const outcomeTarget = outcome.initialTargets?.[0]?.city || newState.actors[pending.target?.countryId]?.name || 'target';

  newState._nuclearStrikeOutcome = outcome;
  newState.pendingNuclearStrike = null;
  newState.events = [{
    id: `nuke-resolution-${Date.now()}`,
    day: newState.dayCount,
    timestamp: ts,
    text: outcome.intercepted
      ? `\u26E8 INTERCEPTION: ${outcome.selectedWarhead?.shortLabel || 'Launch'} aimed at ${outcomeTarget} was intercepted, but retaliation sequence has begun`
      : `\u2622 DETONATION: ${outcome.selectedWarhead?.shortLabel || 'Nuclear strike'} detonated at ${outcomeTarget}, triggering full retaliation`,
    severity: 'critical',
    icon: outcome.intercepted ? '\u26E8' : '\u2622',
    action: 'nuclearStrikeOutcome',
    actor: 'System',
  }, ...newState.events].slice(0, 100);

  const conclusion = checkWarConclusion(newState);
  if (conclusion) newState.warConclusion = conclusion;

  return newState;
}
