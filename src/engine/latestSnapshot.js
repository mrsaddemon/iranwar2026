export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1511,
  "lastUpdated": "2026-07-29",
  "lastSyncedAt": "2026-07-29T14:53:57.983Z",
  "warDay": 152,
  "summary": "US and Saudi forces have conducted joint strikes against Iran-backed militias in Iraq following an intercepted Iranian missile attack, while Hezbollah has violated a truce with Israel.",
  "lastNarrativeUpdate": "2026-07-29",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "A US-brokered truce between Israel and Hezbollah has collapsed following a blatant drone attack by Hezbollah on an IDF vehicle."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Jul 28",
      "text": "US intercepts Iranian 'surprise attack' on US forces in the Middle East",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMib0FVX3lxTE0yaWJHcU9OMnhZRjcxRXVKVEdIX0FwdHEySzFmNWN0RUw5b0hoNU5RNGkzaUUzWHJMTS13bFNWQ3czV0J5YUN2UVdjQzVHNU9WTVNwaEV1WGkwQlU5YU1PZXBxNzVndjhMRlo0V1pQOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1511
    },
    {
      "date": "Jul 28",
      "text": "US and Saudi forces conduct strikes against Iran-backed militias in Iraq",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1511
    },
    {
      "date": "Jul 29",
      "text": "US-Saudi attack in Iraq kills 20; IRGC reportedly targets Jordan",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxOTjRULWE0Y1djcEVXdDU2MmYzd2lPUVVhdGJCRU91aGc5QzFzdXZGZ0hLU1ljWXZqQmdoWDdJMWRYeW9LOG5NRERCQTBpT1dFNkxybmM5ZmlZelNBMzF1OW9mdmlET3p3MHFpYnlOMXRBSXItTDk2bWJRd1hmS3h0MHFVZWpCeGFPY2N4MDh2V0ZuenpTd0VRV3BzM3M2MmE3b19mdkZPckNOYlBITXNMQjdCV1JKX0FH0gG-AUFVX3lxTFBESHMxM0xtczZIM3RBNGNWUWpjanhzQjlNb1ljN0Y2ZXZQOG9zN1ViRk8yTGh2UHFlMTluaUJPRHJnbUNINi16WVNlRW1sVXhaVExJRUt6Ql9ONXU3SWluSUMzVW1EWjQ1aWVMU3pDQlR0Q0NwVEhOcVlWbkFTdEJpd09wMzBDVHVqRE5iV2JEUFVXSnd2WjRQVnVUa2NTX2N0VGpPQUxtTDRtb1AxTWR6MGNtRXlKRDBFeWpWS3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1511
    },
    {
      "date": "Jul 29",
      "text": "Hezbollah drone strikes IDF vehicle, violating Lebanon truce",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1511
    },
    {
      "date": "Jul 29",
      "text": "Iran vows to control the Strait of Hormuz",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNeDIyc1dzckZFZ0RzcVF1N0NaUHVDNzBLR3d0VUEwTjhIRHYxQktIZ2hobHlHQkh3cHdkZmJrbDh4Q21NSGcxRUVRM29rQlFkZ3ZfSG9MRWJNbzBJRzJQVXA5Mmp6cXBUZkVEa3BKMmt0WDJ2eEtGOUtSeWxOc2dfdWNMX056M29Zc05JQ1MxV2VrSjJCZFpPVkNaZ3lrTFFSNnlLOE5CZkpTd0M0elNuQmJFUi3SAboBQVVfeXFMTjgxWU81QTR1XzRFbzZ0RHJEenVKUjlwZWNRSnhpRjBXX1JxX1FCMUdldzBUVjc4RUItdnAtTWtLOVBIV1NMLU9fOUVlUXRVSnlLdW9rUmw5ajBZX1BwcnlidmIzNUVsZmVBYVFobG1iRy1yb2tRQmNIMlVqNTQ1dm40UkFSalF4U1JER3E5RGpBR0x2Ukt1cW9NaUFMTEtYdXBVYWVIT3VBRFk1MWc1ajYyenpvWDE0UFJ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1511
    },
    {
      "date": "Jul 29",
      "text": "Houthis announce plans for a Red Sea toll on shipping",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1511
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
