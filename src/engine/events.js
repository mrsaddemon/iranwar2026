// Event generation system — calibrated to 2026 Iran War context

import { ACTION_LABELS, ACTION_SEVERITY, ACTION_ICONS } from './actors.js';
import { LATEST_SNAPSHOT } from './latestSnapshot.js';
import { formatSimulationDate, formatSimulationTimestamp } from './time.js';

const EVENT_TEMPLATES = {
  airstrike: {
    usa: [
      'US B-2 bombers strike Iranian military command center',
      'USAF F-35s conduct precision strikes on IRGC positions',
      'US air operations target Iranian air defense network',
      'Coalition aircraft engage Iranian military infrastructure',
      'US F-22s strike Iranian drone production facility',
    ],
    israel: [
      'IAF strikes Hezbollah positions in southern Lebanon',
      'Israel conducts coordinated air operation on Iranian proxy targets',
      'Israeli F-35s execute surgical strike on missile launchers',
      'IAF engages targets in Bekaa Valley — Hezbollah arms depot hit',
      'Israel strikes IRGC-linked facility in Syria',
    ],
    iran: [
      'IRIAF scrambles remaining aircraft in defensive sortie',
      'Iranian air assets attempt interception of coalition aircraft',
    ],
  },
  missileStrike: {
    usa: [
      'Tomahawk cruise missiles launched from USS Abraham Lincoln group',
      'US submarine fires cruise missiles at Iranian military targets',
      'US Navy destroyers launch missile barrage at IRGC positions',
      'Precision-guided munitions strike Iranian command infrastructure',
    ],
    israel: [
      'Israel launches Jericho missiles at Iranian military installations',
      'IDF fires Arrow interceptors against incoming Iranian barrage',
      'Israeli missile defense engages multiple inbound threats',
      'Israel retaliates with precision missile strikes on launcher sites',
    ],
    iran: [
      'Iran fires ballistic missiles toward Israeli civilian areas',
      'IRGC launches Shahab-3 barrage at US Al Udeid Air Base',
      'Iranian medium-range ballistic missiles target Saudi oil facilities',
      'Iran fires Fateh-110 missiles at US naval positions in Gulf',
      'IRGC launches coordinated missile salvo at GCC infrastructure',
    ],
  },
  droneOperation: {
    usa: [
      'MQ-9 Reaper conducts ISR mission over Iranian positions',
      'US drone strike eliminates IRGC field commander',
      'US Navy MQ-25 drones support carrier operations in Gulf',
    ],
    israel: [
      'Israeli Hermes 900 drones conduct surveillance over Lebanon',
      'IAI Harop loitering munitions deployed against radar sites',
      'Israel deploys drone swarm against Hezbollah rocket launchers',
    ],
    iran: [
      'Iran launches Shahed-136 suicide drone swarm toward Israel',
      'IRGC deploys armed drones against US carrier group',
      'Iranian drone wave targets Saudi Aramco facilities',
      'Shahed drones launched from proxy positions in Iraq',
      'Iran initiates multi-vector drone attack on Gulf shipping',
    ],
  },
  navalManeuver: {
    usa: [
      'USS Gerald R. Ford carrier group repositions in Arabian Sea',
      'US Navy conducts Hormuz mine-clearing operations',
      'US destroyer intercepts Iranian fast-attack boats near Hormuz',
      'US Coast Guard escorts tanker convoy through Gulf of Oman',
      'US submarine surfaces in show of force near Iranian coast',
    ],
    israel: [
      'Israeli Navy patrols eastern Mediterranean against Hezbollah threats',
      'INS vessel deployed for Red Sea defense coordination',
    ],
    iran: [
      'IRGC Navy deploys additional mines in Strait of Hormuz',
      'Iranian fast-attack boats harass commercial shipping',
      'IRGC declares expanded exclusion zone in Persian Gulf',
      'Iranian submarines detected near international shipping lanes',
      'IRGC Navy conducts GPS jamming operations in Hormuz',
    ],
  },
  cyberDisruption: {
    usa: [
      'US Cyber Command disrupts Iranian military communications',
      'NSA operation targets IRGC command-and-control network',
      'US cyber operation disables Iranian drone guidance systems',
    ],
    israel: [
      'Unit 8200 launches cyberattack on Iranian infrastructure',
      'Israel disrupts Hezbollah communications network',
      'Israeli cyber operation targets Iranian power grid',
    ],
    iran: [
      'Iranian hackers target US military logistics systems',
      'IRGC cyber unit attacks Israeli water infrastructure',
      'Iranian cyber operation targets Gulf state banking systems',
    ],
  },
  defensivePosture: {
    usa: [
      'THAAD and Patriot batteries on high alert at US Gulf bases',
      'US forces reinforce base defenses after Iranian strike attempt',
      'CENTCOM activates integrated air defense shield',
    ],
    israel: [
      'Iron Dome intercepts 90% of incoming Iranian missile barrage',
      "David's Sling system engages medium-range threats",
      'Arrow-3 successfully intercepts exo-atmospheric ballistic missile',
      'Israel activates bomb shelters in northern cities as Hezbollah fires',
    ],
    iran: [
      'Iran disperses remaining military assets to hardened sites',
      'IRGC activates civilian infrastructure as defensive positions',
    ],
  },
  diplomaticOutreach: {
    usa: [
      'US signals willingness for ceasefire through Omani backchannel',
      'Secretary of State briefs UN Security Council on conditions for de-escalation',
      'US engages Swiss intermediary for prisoner exchange discussions',
    ],
    israel: [
      'Israel signals ceasefire conditions through Egyptian mediators',
      'PM addresses Knesset on conditions for ending hostilities',
    ],
    iran: [
      'New Supreme Leader Mojtaba Khamenei issues conditional ceasefire terms',
      'Iranian FM contacts Chinese and Russian counterparts',
      'Iran requests emergency UN General Assembly session',
    ],
  },
  strategicSignaling: {
    usa: [
      'Pentagon confirms additional B-52 bombers en route to theater',
      'USS Boxer ARG expected mid-April — third amphibious group',
      'US demonstrates MOAB capability near Iranian border',
    ],
    israel: [
      'IDF Chief of Staff warns of expanded operations if attacks continue',
      'Israel conducts visible military exercise on northern border',
      'Israel issues evacuation orders for additional Lebanese sectors',
    ],
    iran: [
      'Mojtaba Khamenei vows "no surrender" in first major address',
      'IRGC threatens to expand strikes to European US bases',
      'Iran activates Houthi forces for expanded Red Sea operations',
      'IRGC commander warns of "surprises" for coalition forces',
    ],
  },
};

const SECONDARY_EVENTS = [
  { text: 'Oil prices surge to ${value}/bbl amid Hormuz blockade escalation', severity: 'warning', icon: '📈', condition: (gs) => gs.oilDisruption > 60 && Math.random() < 0.12 },
  { text: 'Strait of Hormuz: only {value}% of normal shipping capacity operating', severity: 'critical', icon: '⚓', condition: (gs) => gs.oilDisruption > 50 && Math.random() < 0.08 },
  { text: 'GCC food supply crisis — {value}% of regional imports disrupted', severity: 'critical', icon: '🚨', condition: (gs) => gs.tradeImpact > 55 && Math.random() < 0.07 },
  { text: 'Global defense stocks surge as conflict intensifies', severity: 'warning', icon: '💹', condition: (gs) => gs.escalationLevel > 60 && Math.random() < 0.06 },
  { text: 'UN Security Council convenes emergency session on Iran conflict', severity: 'info', icon: '🏛', condition: (gs) => gs.escalationLevel > 55 && Math.random() < 0.05 },
  { text: 'Civilian casualties reported — evacuation orders expanded', severity: 'critical', icon: '🚨', condition: (gs) => gs.escalationLevel > 65 && Math.random() < 0.08 },
  { text: 'China and Russia issue joint statement demanding ceasefire', severity: 'info', icon: '🌍', condition: (gs) => gs.globalPressure > 60 && Math.random() < 0.06 },
  { text: 'Iranian protests erupt in {value}+ cities despite crackdown', severity: 'warning', icon: '✊', condition: (gs) => gs.actors?.iran?.metrics?.internalStability < 35 && Math.random() < 0.10 },
  { text: 'Hezbollah fires {value}+ rockets at northern Israel', severity: 'critical', icon: '🔥', condition: (gs) => gs.escalationLevel > 50 && Math.random() < 0.10 },
  { text: 'Houthi forces launch anti-ship missiles in Red Sea', severity: 'warning', icon: '⚔', condition: (gs) => gs.escalationLevel > 45 && Math.random() < 0.07 },
  { text: 'Humanitarian corridor proposed for civilian aid delivery', severity: 'stable', icon: '🏥', condition: (gs) => gs.dayCount > 5 && Math.random() < 0.04 },
  { text: 'European nations recall non-essential embassy staff from region', severity: 'warning', icon: '🏳', condition: (gs) => gs.escalationLevel > 70 && Math.random() < 0.05 },
  { text: 'Iranian rial hits new record low — economy in freefall', severity: 'warning', icon: '📉', condition: (gs) => gs.actors?.iran?.metrics?.economy < 20 && Math.random() < 0.08 },
  { text: 'Pentagon reports {value} Iranian drone/missiles intercepted in 24hrs', severity: 'info', icon: '🛡', condition: (gs) => gs.escalationLevel > 60 && Math.random() < 0.08 },
  { text: 'Saudi Arabia activates emergency oil reserves', severity: 'info', icon: '🛢', condition: (gs) => gs.oilDisruption > 65 && Math.random() < 0.05 },
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateActionEvent(actorName, actorId, action, day, warDay) {
  const actionTemplates = EVENT_TEMPLATES[action];
  let templates;

  if (actionTemplates && typeof actionTemplates === 'object' && !Array.isArray(actionTemplates)) {
    templates = actionTemplates[actorId] || actionTemplates.usa || ['{actor} takes action'];
  } else if (Array.isArray(actionTemplates)) {
    templates = actionTemplates;
  } else {
    templates = ['{actor} takes action'];
  }

  const text = pickRandom(templates).replace('{actor}', actorName);
  const totalWarDay = warDay + day;

  return {
    id: `evt-${day}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    day,
    timestamp: formatSimulationTimestamp(day, warDay, LATEST_SNAPSHOT.lastUpdated),
    text,
    severity: ACTION_SEVERITY[action] || 'info',
    icon: ACTION_ICONS[action] || '\u{2139}',
    action,
    actor: actorName,
  };
}

export function generateSecondaryEvents(globalState, day) {
  const events = [];
  const warDay = (globalState.warDay || 37) + day;

  for (const evt of SECONDARY_EVENTS) {
    if (evt.condition(globalState)) {
      const value = Math.floor(5 + Math.random() * 20);
      events.push({
        id: `sec-${day}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        day,
        timestamp: formatSimulationTimestamp(day, globalState.warDay || 37, LATEST_SNAPSHOT.lastUpdated),
        text: evt.text.replace('{value}', value),
        severity: evt.severity,
        icon: evt.icon,
        action: 'secondary',
        actor: 'Global',
      });
    }
  }
  return events;
}

export function generateEffectDescription(action, outcome) {
  const effects = {
    airstrike: [
      'Strategic target neutralized — military capability degraded',
      'Strike partially intercepted — limited impact achieved',
      'Precision hit confirmed — infrastructure damaged',
    ],
    missileStrike: [
      'Multiple impacts detected — defense systems strained',
      'Missile defense intercepted majority of incoming',
      'Direct hits on military installations confirmed',
    ],
    droneOperation: [
      'Drone swarm engaged targets — situational awareness improved',
      'Armed drones neutralized high-value target',
      'Surveillance mission completed — new targets identified',
    ],
    navalManeuver: [
      'Naval dominance reinforced in contested waters',
      'Mine-clearing operations progressing in Hormuz',
      'Carrier group repositioned for force projection',
    ],
    cyberDisruption: [
      'Communications network partially disrupted',
      'Defense systems experienced brief outage',
      'Infrastructure targeted — damage assessment ongoing',
    ],
    defensivePosture: [
      'Air defense intercepts incoming threats — 90%+ success rate',
      'Base defenses reinforced — perimeter secure',
      'Integrated defense shield activated — deterrence strengthened',
    ],
    diplomaticOutreach: [
      'Backchannel communication re-established',
      'International mediators briefed on ceasefire conditions',
      'Humanitarian corridor discussions initiated',
    ],
    strategicSignaling: [
      'Force demonstration acknowledged by adversary',
      'Additional military assets deployed to theater',
      'Red lines communicated through diplomatic channels',
    ],
  };

  return pickRandom(effects[action] || ['Action completed']);
}

export function getEventDateLabel(simDay) {
  return formatSimulationDate(simDay, LATEST_SNAPSHOT.lastUpdated);
}
