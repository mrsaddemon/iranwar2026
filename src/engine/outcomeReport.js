const FACTION_META = {
  usa: { label: 'United States', commandLabel: 'US command', alignment: 'coalition' },
  israel: { label: 'Israel', commandLabel: 'Israeli command', alignment: 'coalition' },
  iran: { label: 'Iran', commandLabel: 'Iranian command', alignment: 'iran' },
};

const COALITION_WIN_TYPES = new Set([
  'regimeCollapse',
  'iranSurrender',
  'coalitionStrategicVictory',
]);

const IRAN_WIN_TYPES = new Set([
  'coalitionWithdrawal',
  'israeliOverextension',
  'iranianSurvival',
  'iranianRegionalAscendancy',
]);

const DRAW_TYPES = new Set([
  'greatPowerSettlement',
  'hormuzArmistice',
  'mutualExhaustion',
  'ceasefire',
  'stalemate',
]);

function getFactionMeta(actorId) {
  return FACTION_META[actorId] || null;
}

function getVerdictForConclusion(conclusionType, actorId) {
  const faction = getFactionMeta(actorId);
  if (!faction) {
    return {
      key: 'observer',
      label: 'Observer',
      icon: '◎',
      color: '#94a3b8',
    };
  }

  if (conclusionType === 'nuclearExchange' || conclusionType === 'regionalConflagration') {
    return {
      key: 'catastrophic',
      label: 'Catastrophic ending',
      icon: '☢',
      color: '#ef4444',
    };
  }

  if (DRAW_TYPES.has(conclusionType)) {
    return {
      key: 'draw',
      label: 'Contested finish',
      icon: '◌',
      color: '#f59e0b',
    };
  }

  const alignmentWon = COALITION_WIN_TYPES.has(conclusionType)
    ? 'coalition'
    : IRAN_WIN_TYPES.has(conclusionType)
      ? 'iran'
      : null;

  if (!alignmentWon) {
    return {
      key: 'draw',
      label: 'Unclear outcome',
      icon: '◌',
      color: '#94a3b8',
    };
  }

  return alignmentWon === faction.alignment
    ? {
        key: 'win',
        label: 'Victory',
        icon: '▲',
        color: '#22c55e',
      }
    : {
        key: 'loss',
        label: 'Defeat',
        icon: '▼',
        color: '#ef4444',
      };
}

function buildDebrief(verdictKey, commanderName, factionLabel, conclusionTitle) {
  if (verdictKey === 'win') {
    return `${commanderName} led ${factionLabel} to a favorable end-state under severe regional pressure. ${conclusionTitle} is recorded as your final result.`;
  }
  if (verdictKey === 'loss') {
    return `${commanderName} fought through the campaign, but ${factionLabel} finished on the losing side of the final outcome. ${conclusionTitle} defines the closing result of your run.`;
  }
  if (verdictKey === 'catastrophic') {
    return `${commanderName} reached an ending where the war consumed every side. The final state was catastrophic rather than strategic.`;
  }
  return `${commanderName} brought ${factionLabel} to an inconclusive or negotiated finish. The war stopped without a clean winner.`;
}

export function buildPersonalOutcomeReport({
  conclusion,
  actorId,
  playerName,
  commandIssuedCount,
  dayCount,
  warDay,
  oilDisruption,
  nuclearIndex,
}) {
  if (!conclusion || !actorId || !playerName || commandIssuedCount <= 0) {
    return null;
  }

  const commanderName = String(playerName).trim();
  if (!commanderName) return null;

  const faction = getFactionMeta(actorId);
  if (!faction) return null;

  const verdict = getVerdictForConclusion(conclusion.type, actorId);
  const totalWarDays = (warDay || 39) + (dayCount || 0);

  return {
    actorId,
    commanderName,
    factionLabel: faction.label,
    factionKey: actorId,
    commandLabel: faction.commandLabel,
    verdict,
    outcomeKey: verdict.key,
    title: `${commanderName}'s After-Action Report`,
    subtitle: `${verdict.label} as ${faction.label}`,
    debrief: buildDebrief(verdict.key, commanderName, faction.label, conclusion.title),
    outcomeHeadline:
      verdict.key === 'win'
        ? `${commanderName} secured a ${verdict.label.toLowerCase()} for ${faction.label}`
        : verdict.key === 'loss'
          ? `${commanderName} could not hold the line for ${faction.label}`
          : verdict.key === 'catastrophic'
            ? `${commanderName}'s campaign ended in catastrophe`
            : `${commanderName} brought the war to a contested finish`,
    reportStats: [
      { label: 'Commands issued', value: String(commandIssuedCount) },
      { label: 'War day at ending', value: String(totalWarDays) },
      { label: 'Oil disruption', value: `${Math.round(oilDisruption || 0)}%` },
      { label: 'Nuclear index', value: `${Math.round(nuclearIndex || 0)}` },
    ],
    shareTitle:
      verdict.key === 'win'
        ? `${commanderName} led ${faction.label} to victory`
        : verdict.key === 'loss'
          ? `${commanderName}'s ${faction.label} run ended in defeat`
          : verdict.key === 'catastrophic'
            ? `${commanderName}'s war game ended in catastrophe`
            : `${commanderName}'s run ended in a contested finish`,
    shareSummary: conclusion.summary,
  };
}
