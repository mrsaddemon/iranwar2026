export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1512,
  "lastUpdated": "2026-07-29",
  "lastSyncedAt": "2026-07-29T16:35:30.225Z",
  "warDay": 152,
  "summary": "Direct conflict escalated significantly with Iran attacking US forces in Jordan, followed by US and Saudi retaliatory strikes on Iranian proxies in Iraq, while Hezbollah violated a ceasefire with Israel.",
  "lastNarrativeUpdate": "2026-07-29",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.9,
    "durationDays": 39,
    "summary": "The June 19 ceasefire between Israel and Hezbollah has collapsed following a drone attack by Hezbollah on an IDF bulldozer."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "text": "Iran attacked US forces in Jordan, prompting US vows of strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxOTjRULWE0Y1djcEVXdDU2MmYzd2lPUVVhdGJCRU91aGc5QzFzdXZGZ0hLU1ljWXZqQmdoWDdJMWRYeW9LOG5NRERCQTBpT1dFNkxybmM5ZmlZelNBMzF1OW9mdmlET3p3MHFpYnlOMXRBSXItTDk2bWJRd1hmS3h0MHFVZWpCeGFPY2N4MDh2V0ZuenpTd0VRV3BzM3M2MmE3b19mdkZPckNOYlBITXNMQjdCV1JKX0FH0gG-AUFVX3lxTFBESHMxM0xtczZIM3RBNGNWUWpjanhzQjlNb1ljN0Y2ZXZQOG9zN1ViRk8yTGh2UHFlMTluaUJPRHJnbUNINi16WVNlRW1sVXhaVExJRUt6Ql9ONXU3SWluSUMzVW1EWjQ1aWVMU3pDQlR0Q0NwVEhOcVlWbkFTdEJpd09wMzBDVHVqRE5iV2JEUFVXSnd2WjRQVnVUa2NTX2N0VGpPQUxtTDRtb1AxTWR6MGNtRXlKRDBFeWpWS3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1512
    },
    {
      "date": "Jul 28",
      "text": "US intercepted a 'surprise attack' by Iran on US forces in the Middle East.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMib0FVX3lxTE0yaWJHcU9OMnhZRjcxRXVKVEdIX0FwdHEySzFmNWN0RUw5b0hoNU5RNGkzaUUzWHJMTS13bFNWQ3czV0J5YUN2UVdjQzVHNU9WTVNwaEV1WGkwQlU5YU1PZXBxNzVndjhMRlo0V1pQOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1512
    },
    {
      "date": "Jul 28",
      "text": "US and Saudi forces conducted airstrikes on Iranian proxies in Iraq.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxQTHZOSmtoZTBQNGNtZUlocFVfLTNmdFpvWFdoN2ZwVmpZMDNrcXNSdTVUUjJRVWRSTzJGeFQ2TG52cnVYZFllWFlfTTctTllRSExPRDhGNXhieEV0Z2VqRk5CcWtROVF2ZGR1WDhjd0tGQkVZQTExZEFYVGRTenkxdk9YVGZlYkwxY2Zz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1512
    },
    {
      "date": "Jul 28",
      "text": "Hezbollah launched a drone attack on an IDF bulldozer in Southern Lebanon, violating a June 19 ceasefire.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1512
    },
    {
      "date": "Jul 28",
      "text": "Iran rejected an Omani proposal to share the Strait of Hormuz, demanding more control.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1512
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
