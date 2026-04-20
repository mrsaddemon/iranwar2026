const KNOWN_ASSET_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp'];

export function getEndingArtAssetCandidates(factionKey, outcomeKey) {
  if (!factionKey || !outcomeKey) return [];
  return KNOWN_ASSET_EXTENSIONS.flatMap((ext) => ([
    `/ending-cards/${factionKey}-${outcomeKey}.${ext}`,
    `/ending-cards/${factionKey}/${outcomeKey}.${ext}`,
  ]));
}

