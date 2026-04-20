const SHARED_STYLE_SUFFIX = 'cinematic strategic ending-card illustration, grounded geopolitical realism, dramatic but tasteful lighting, dark war-room palette, readable at thumbnail size, strong focal subject, subtle environmental storytelling, no text, no UI, no watermark, polished concept art, high detail';

const FACTION_ART = {
  usa: {
    label: 'United States',
    motif: 'carrier strike group, command glass, ISR screens, Gulf sea lanes, U.S. naval silhouettes, subtle American insignia',
    locations: ['Eastern Mediterranean', 'Hormuz', 'Red Sea'],
    colors: ['#60a5fa', '#0f172a', '#93c5fd'],
    setting: 'maritime command power with carrier decks, ocean horizon, flight operations, and distant sea-lane control',
  },
  israel: {
    label: 'Israel',
    motif: 'layered missile defense, Tel Aviv skyline, intercept arcs, northern frontier glow, civil-defense atmosphere, subtle Star of David military insignia',
    locations: ['Tel Aviv', 'Beirut', 'Galilee'],
    colors: ['#3b82f6', '#0f172a', '#93c5fd'],
    setting: 'dense urban skyline under missile-defense arcs, rooftop command perspective, and compressed frontline tension',
  },
  iran: {
    label: 'Iran',
    motif: 'Tehran command core, Gulf pressure, missile batteries, strategic endurance, mountainous skyline, Iranian military silhouette cues',
    locations: ['Tehran', 'Isfahan', 'Hormuz'],
    colors: ['#22c55e', '#0b1220', '#86efac'],
    setting: 'land-based strategic command, mountain-backed skyline, missile infrastructure, and Hormuz-linked pressure geometry',
  },
};

const OUTCOME_ART = {
  win: {
    label: 'Strategic Victory',
    scene: 'measured triumph after hard strategic success, strong posture without celebration, conflict still visible at the horizon',
    framing: 'heroic but disciplined ending tableau',
    composition: 'clear focal subject, elevated camera, sharp horizon, confident geometry, strong central subject, cleaner air, restrained glow',
  },
  loss: {
    label: 'Costly Defeat',
    scene: 'fatigued command aftermath, damaged theater, visible cost, no collapse but clear defeat',
    framing: 'somber post-battle tableau',
    composition: 'tilted composition, visible wear, damaged surfaces, fragmented light, aftermath mood, asymmetry, reduced visual control',
  },
  draw: {
    label: 'Fragile Ceasefire',
    scene: 'tense quiet under a brittle ceasefire, forces still mobilized, diplomacy barely holding',
    framing: 'suspended-conflict tableau',
    composition: 'balanced but uneasy composition, divided focal zones, mist or dusk atmosphere, watchfulness, unresolved spacing, suspended motion',
  },
  catastrophic: {
    label: 'Catastrophic Ending',
    scene: 'strategic collapse and regional devastation, emergency lights, smoke, no triumphant framing',
    framing: 'grim disaster tableau',
    composition: 'overwhelming environmental damage, blackout zones, smoke, ash, emergency light streaks, broken silhouettes, oppressive vertical scale',
  },
  observer: {
    label: 'Strategic Overview',
    scene: 'regional war-room overview with unresolved outcome and multiple fronts under pressure',
    framing: 'high-command overview tableau',
    composition: 'broad strategic view, layered information feeling, multiple hotspots, analytic composition',
  },
};

function getFactionArt(factionKey) {
  return FACTION_ART[factionKey] || {
    label: 'Observer',
    motif: 'war-room command screens, regional map, active fronts',
    locations: ['Hormuz', 'Levant', 'Red Sea'],
    colors: ['#94a3b8', '#0f172a', '#cbd5e1'],
  };
}

function getOutcomeArt(outcomeKey) {
  return OUTCOME_ART[outcomeKey] || OUTCOME_ART.observer;
}

export function buildEndingArtDirection(report, conclusion) {
  if (!report || !conclusion) return null;

  const faction = getFactionArt(report.factionKey);
  const outcome = getOutcomeArt(report.outcomeKey);
  const outcomeSummary = conclusion.summary || conclusion.detail || report.debrief;

  const prompt = [
    `${faction.label} ending image for an Iran war simulation`,
    `${outcome.label.toLowerCase()} scene`,
    faction.motif,
    faction.setting,
    outcome.scene,
    `${outcome.framing}, ${outcome.composition}, locations hinted through ${faction.locations.join(', ')}`,
    `inspired by this ending context: ${outcomeSummary}`,
    SHARED_STYLE_SUFFIX,
  ].join(', ');

  return {
    title: `${faction.label} / ${outcome.label}`,
    prompt,
    motif: faction.motif,
    locations: faction.locations,
    colors: faction.colors,
    framing: outcome.framing,
    tone: outcome.scene,
    sharedStyle: SHARED_STYLE_SUFFIX,
  };
}

export function getEndingArtPromptVariantsForFaction(factionKey, commanderName = '') {
  const faction = getFactionArt(factionKey);
  const outcomeOrder = ['win', 'draw', 'loss', 'catastrophic'];
  const commanderPrefix = String(commanderName || '').trim()
    ? `for commander ${String(commanderName).trim()}, `
    : '';

  return outcomeOrder.map((outcomeKey) => {
    const outcome = getOutcomeArt(outcomeKey);
    const prompt = [
      `${faction.label} ending image for an Iran war simulation`,
      commanderPrefix ? commanderPrefix.replace(/,\s*$/u, '') : null,
      `${outcome.label.toLowerCase()} scene`,
      faction.motif,
      faction.setting,
      outcome.scene,
      `${outcome.framing}, ${outcome.composition}, locations hinted through ${faction.locations.join(', ')}`,
      SHARED_STYLE_SUFFIX,
    ].filter(Boolean).join(', ');

    return {
      id: `${factionKey}-${outcomeKey}`,
      outcomeKey,
      title: outcome.label,
      prompt,
      motif: faction.motif,
      locations: faction.locations,
      colors: faction.colors,
      framing: outcome.framing,
      tone: outcome.scene,
    };
  });
}

export function getAllEndingArtPromptVariants() {
  return Object.entries(FACTION_ART).flatMap(([factionKey, faction]) =>
    Object.entries(OUTCOME_ART)
      .filter(([key]) => key !== 'observer')
      .map(([outcomeKey, outcome]) => ({
        id: `${factionKey}-${outcomeKey}`,
        title: `${faction.label} / ${outcome.label}`,
        prompt: [
          `${faction.label} ending image for an Iran war simulation`,
          `${outcome.label.toLowerCase()} scene`,
          faction.motif,
          faction.setting,
          outcome.scene,
          `${outcome.framing}, ${outcome.composition}, locations hinted through ${faction.locations.join(', ')}`,
          SHARED_STYLE_SUFFIX,
        ].join(', '),
      })),
  );
}
