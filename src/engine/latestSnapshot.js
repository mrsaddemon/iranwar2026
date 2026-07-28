export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1496,
  "lastUpdated": "2026-07-28",
  "lastSyncedAt": "2026-07-28T09:58:14.173Z",
  "warDay": 151,
  "summary": "The US has paused new strikes against Iran, while Iran denies current negotiations and threatens escalation if strikes resume, amidst ongoing regional tensions and diplomatic efforts regarding the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.5,
    "durationDays": 3,
    "summary": "An operational pause in US strikes against Iran is active, but its stability is uncertain amidst threats and ongoing regional tensions, including recent Iran-Israel exchanges."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.78
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
    "allianceInfluence": 51
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": false,
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
      "sourceName": "CNN",
      "latestSinceUpdate": 1496
    },
    {
      "date": "Jul 27",
      "text": "Iran threatens to expand war if US resumes strikes, which it says Israel is pushing for.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNTEU1blJ0ZjFodmdqYXM3MzdXeU9PbXcwUlNEUWx5aktWY29NRXRHOC1XS2F3QTFpMWhKMnVhX0dUMkh4TmNYVEl0cDN6ZGtHb0dOMzk0SlE3SkdOT1JzVmZJQjFHYUYyUzZjUkFKNU5tZ3JmbDZTRXVYdUNDZXVFWjg4cG5QQmZKcFhKZnd1a2tMMENKS05LNFZMUC1henZCRERMcUVTaXRoRGYyV0Z4UmRSdmgxNUR30gG-AUFVX3lxTFA1UEhCVnJkWDRyNHRNYUItcVpsWDRfVXgyR0xUX3VyVXdacXZKMWgxSmtmWFFpVjlFVW12NHplMDFhXzZpYVFmbTdQRmFJajFGenhOdWtDZzNraEV5NEZXMkFCeElTQUVDbW9FaFUzS1lWam81NG5QMnpQRkcxclpUd2dGTTNsa05IeTRwd1BTclM2Q0RoMmtxM0FsZ2NvQWdLd2lfNWwyQ3BwcnV1d3NNanFrQVBBY3lxSXVtNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1496
    },
    {
      "date": "Jul 27",
      "text": "Iran and Israel Exchange Strikes for First Time Since April Cease-Fire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTE4yaFRvZG5JOHJaV2ZsSllxcUx6WG9HSEdWVC1sQlVDZlRIUmxxb18xVWNmOEZCd0xKa3lraG80ZGw4NnVHcE5vODRwZzVNVkV4V3JscldjQUt0dU9zQ2swZjExcG9IR2E2dG5hb29HekFnYV8x?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1496
    },
    {
      "date": "Jul 27",
      "text": "Oman sends Hormuz plan with Gulf nations reportedly onboard, Iran hosts Hormuz calls with Saudi Arabia, Oman.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNeDIyc1dzckZFZ0RzcVF1N0NaUHVDNzBLR3d0VUEwTjhIRHYxQktIZ2hobHlHQkh3cHdkZmJrbDh4Q21NSGcxRUVRM29rQlFkZ3ZfSG9MRWJNbzBJRzJQVXA5Mmp6cXBUZkVEa3BKMmt0WDJ2eEtGOUtSeWxOc2dfdWNMX056M29Zc05JQ1MxV2VrSjJCZFpPVkNaZ3lrTFFSNnlLOE5CZkpTd0M0elNuQmJFUi3SAboBQVVfeXFMTjgxWU81QTR1XzRFbzZ0RHJEenVKUjlwZWNRSnhpRjBXX1JxX1FCMUdldzBUVjc4RUItdnAtTWtLOVBIV1NMLU9fOUVlUXRVSnlLdW9rUmw5ajBZX1BwcnlidmIzNUVsZmVBYVFobG1iRy1yb2tRQmNIMlVqNTQ1dm40UkFSalF4U1JER3E5RGpBR0x2Ukt1cW9NaUFMTEtYdXBVYWVIT3VBRFk1MWc1ajYyenpvWDE0UFJ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1496
    },
    {
      "date": "Jul 27",
      "text": "U.S. air defense supply shrinks during Iran war, leaving experts concerned over depleted U.S. weapons stockpile.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxOc015RHdtekJjT2VrZ0VhNnlLM2UzQTVfWXJMWEpfM3lRU3R2Z1lsbndRZU90eXNNcTFMNVpCTGpfdFA5a2Fibm53SEZTMmozT0d1clZDRTY1Ym5YbVVKdEtYeGM3cEt6MWVSX3VHdmN4eE9iVFotazNhSWxEQjVodVhXT0VJZjZKODgtc0k1ZDhSb256ZjMxS2xNQ08tVWVxVHRDN1Z3U2d4Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1496
    },
    {
      "date": "Jul 27",
      "text": "Mojtaba Khamenei's 'Jihad' Message To Hezbollah Against US, Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxPODdjTHB1WGt5Qi1MQ3FfSWlmX0N2Nk41NWR4eDZ4ZmVJbUFjREJtUDkycmpfblRJME9WSk1zR2hXRnJhNEg0dEhGUE9VdFVFSW1oSDhfY25qZ1g5VmVTVVVOYzFTeFd0SV9uU0p3a0lOUHloTVNHZzJoVnY5VS1TZG9vX0ZqYzJDb3htVFVudUJoYmlCOG03OTNKVEJwbklER2V2YWxR0gGuAUFVX3lxTFBRaGFUbmdoZDRpVEl6eEk5dmpRTTEtUWxLN3R2THVwbFdyNUxkek5TTXZkelY4dDVGZVkzS2pUZExNaURoMWlDRktWSTR4S1ZFMTB3ODFCOUk5RHNVOUZ0YzdZVGF6ODhCN0RhNW5VdjdDVVhwaFNCN0dCTHV6enNfZzhDOWJRaElPOEhUR05CbjB2dDBVOFhJcTlhalphT1FfaE9qVHJ0QUNRNjgyUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NDTV",
      "latestSinceUpdate": 1496
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (19 headlines)"
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
