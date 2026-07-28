export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1499,
  "lastUpdated": "2026-07-28",
  "lastSyncedAt": "2026-07-28T16:19:35.098Z",
  "warDay": 151,
  "summary": "The US and Iran, as well as Iran and Israel, have announced a pause in strikes amidst ongoing diplomatic efforts regarding the Strait of Hormuz and rising US casualty counts.",
  "lastNarrativeUpdate": "2026-07-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "A pause in strikes between the US and Iran, and Iran and Israel, is in effect, though warnings of retaliation and underlying geopolitical tensions persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 55,
    "tradeImpact": 40,
    "sanctionsPressure": 58,
    "globalPressure": 66,
    "allianceInfluence": 68
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Jul 27",
      "text": "US pauses new strikes, Iran says no current negotiations with the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1XYlk1TXQyaFgzZF92aWM1cHMxWHlIci14VTNUVEVBamN4Rl9qQzNvQVo2VmEwVjBpbEZIU1RXTk1QMFJHay0wbFloVnU5Ui0yLVFFcWdiOXg3cGN1RVo5bW1QMTZSNlR0LU1iN0t3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1499
    },
    {
      "date": "Jul 27",
      "text": "Oman sends Hormuz plan with Gulf nations reportedly onboard.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNeDIyc1dzckZFZ0RzcVF1N0NaUHVDNzBLR3d0VUEwTjhIRHYxQktIZ2hobHlHQkh3cHdkZmJrbDh4Q21NSGcxRUVRM29rQlFkZ3ZfSG9MRWJNbzBJRzJQVXA5Mmp6cXBUZkVEa3BKMmt0WDJ2eEtGOUtSeWxOc2dfdWNMX056M29Zc05JQ1MxV2VrSjJCZFpPVkNaZ3lrTFFSNnlLOE5CZkpTd0M0elNuQmJFUi3SAboBQVVfeXFMTjgxWU81QTR1XzRFbzZ0RHJEenVKUjlwZWNRSnhpRjBXX1JxX1FCMUdldzBUVjc4RUItdnAtTWtLOVBIV1NMLU9fOUVlUXRVSnlLdW9rUmw5ajBZX1BwcnlidmIzNUVsZmVBYVFobG1iRy1yb2tRQmNIMlVqNTQ1dm40UkFSalF4U1JER3E5RGpBR0x2Ukt1cW9NaUFMTEtYdXBVYWVIT3VBRFk1MWc1ajYyenpvWDE0UFJ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1499
    },
    {
      "date": "Jul 27",
      "text": "Iran and Israel Exchange Strikes for First Time Since April Cease-Fire, then agree to pause.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTE4yaFRvZG5JOHJaV2ZsSllxcUx6WG9HSEdWVC1sQlVDZlRIUmxxb18xVWNmOEZCd0xKa3lraG80ZGw4NnVHcE5vODRwZzVNVkV4V3JscldjQUt0dU9zQ2swZjExcG9IR2E2dG5hb29HekFnYV8x?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1499
    },
    {
      "date": "Jul 27",
      "text": "Khamenei ties US-Iran peace deal to Israel ending attacks on Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxOdlZIaGtLT0ItbHVjQ0xEWFoyU2I5anhKZHp2QlZhVW1kWTRuOXRBMy1uQlc3a29vTVRTT21vMXZ3dTQ3UTkyVFZSNElnNzQ2VjZDWERjSEQ2bTFDOUpGMkVsOEozVkN0Nm9TVVphV1U5Yll1UEx1cXRsWFBKLU1xMUl1T2lUX3NqVkI1dXBaY2k3cWJiRmRRdkdQVTRacU5hTExkbndBWHQ0VGfSAbABQVVfeXFMUEVoS2VuR3pBZ1YyVzlYTTIyU0Z4eGFfSEhGd2Y0M3lMQ3ZUUFFndDVZUHh5cGhYRUU5enpINl9ha3FHclJuc3dVSkRFWXdFSXNuZjVoZU9qV0FMYjRYcjZIenBFLWRIczhIeEVIalFqLUNjR0Rscm5wMGlramFQZGJXZWRSVDdtcW9la2xxZEhlSGFvRmlYdTVybDY2MTI4Q2tLTmc4TG12TmtyczlZejM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1499
    },
    {
      "date": "Jul 27",
      "text": "Iran rejects Trump frozen funds plan, warns ships of Hormuz transit ban.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPeUFZZmZfY2liR1dtT3dVa1V4V2ZQSXJfN0dtTWE1eWJsRTgyMEROSTFpVi13TlFHSWwwUXdGVDZmUGVxNjdUNmZOVGFDQXNtYnhDN1NZMXMtaFhmOUJyWUFaZEdGSWtaZ19EMDZWaHZhZzBPR2lFeEQyYVJnWXVlSDVERWxSZlRQUjR5Z1daNThocmNBYXo2eW5PSXNiY0ltVkJ5T1J6Zk5YcTR2cjJlMHVmLWl6MHhaZXdBTG9n0gHDAUFVX3lxTE1uYXBBTjNFa3FMblZNbjNpZmdCT24zOFZOaVhTWmVmbmFmNG5SajdzNUsyd3FrVkk5U1NKS2g4djdTdkd0alRzQ3pUbkZleXNjY19scHJlWkY2ZjZ4VlNVLXBPQmZTX3ZaX2VzUF8xY3NsNmdIR3pBcmRDUU1SRnk3LVZMaW9ENGFzbGY5N3VJMnNmUmxMbExyVkZJZkRXVHFycU1GNEZPUTNhelc3SWJEamx0LUs3ck1McUd2LU5WdjdQYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1499
    },
    {
      "date": "Jul 27",
      "text": "Mojtaba Khamenei's 'Jihad' Message To Hezbollah Against US, Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxPODdjTHB1WGt5Qi1MQ3FfSWlmX0N2Nk41NWR4eDZ4ZmVJbUFjREJtUDkycmpfblRJME9WSk1zR2hXRnJhNEg0dEhGUE9VdFVFSW1oSDhfY25qZ1g5VmVTVVVOYzFTeFd0SV9uU0p3a0lOUHloTVNHZzJoVnY5VS1TZG9vX0ZqYzJDb3htVFVudUJoYmlCOG03OTNKVEJwbklER2V2YWxR0gGuAUFVX3lxTFBRaGFUbmdoZDRpVEl6eEk5dmpRTTEtUWxLN3R2THVwbFdyNUxkek5TTXZkelY4dDVGZVkzS2pUZExNaURoMWlDRktWSTR4S1ZFMTB3ODFCOUk5RHNVOUZ0YzdZVGF6ODhCN0RhNW5VdjdDVVhwaFNCN0dCTHV6enNfZzhDOWJRaElPOEhUR05CbjB2dDBVOFhJcTlhalphT1FfaE9qVHJ0QUNRNjgyUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1499
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
    },
    {
      "source": "GDELT",
      "status": "no recent items"
    },
    {
      "source": "ACLED",
      "status": "skipped (credentials not configured)"
    },
    {
      "source": "World Bank",
      "status": "ok (3 country baselines)"
    },
    {
      "source": "Our World in Data",
      "status": "ok (3 country baselines)"
    },
    {
      "source": "Liveuamap",
      "status": "skipped (not configured)"
    },
    {
      "source": "IEA",
      "status": "skipped (API key or dataset URL not configured)"
    }
  ],
  "narratives": [
    {
      "perspective": "US Diplomacy/Threat",
      "headline": "Trump Pursues Talks Amidst War Pause, Warns of Force",
      "summary": "The Trump administration is engaged in 'very deep talks' with Iran, having paused strikes for a second night. However, Trump warns of 'strong military action' if diplomacy fails, while dismissing concerns over military stockpiles.",
      "tone": "strained",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "Iranian Conditions/Defiance",
      "headline": "Iran Threatens Expansion, Ties Peace to Lebanon, Praises Hezbollah",
      "summary": "Iran threatens to expand the war if U.S. resumes strikes, which it attributes to Israeli pressure. Supreme Leader Khamenei ties any peace deal to Israel ending attacks on Lebanon, with Mojtaba Khamenei praising Hezbollah and calling for continued jihad.",
      "tone": "defiant",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "Israeli Skepticism",
      "headline": "Israel Anticipates US Escalation Despite Pause",
      "summary": "Despite the current pause in U.S. strikes, Israel reportedly believes that the Trump administration will soon be compelled to escalate military action against Iran.",
      "tone": "skeptical",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "US Stockpile Debate",
      "headline": "US Stockpile Levels Under Scrutiny Amidst Conflict",
      "summary": "A debate persists within U.S. political circles regarding the state of military stockpiles. While some officials dismiss concerns, others attribute potential depletion to previous administrations.",
      "tone": "neutral",
      "latestSinceUpdate": 1493
    }
  ]
});

export default LATEST_SNAPSHOT;
