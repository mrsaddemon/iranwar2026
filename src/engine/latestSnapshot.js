export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1170,
  "lastUpdated": "2026-07-04",
  "lastSyncedAt": "2026-07-04T21:09:16.226Z",
  "warDay": 127,
  "summary": "US, Iran, and Israel are engaged in active military exchanges, with significant focus on the Strait of Hormuz and regional stability, while diplomatic efforts are also underway.",
  "lastNarrativeUpdate": "2026-07-04",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 6,
    "summary": "No active ceasefire is reported amidst ongoing military exchanges and regional tensions."
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
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
    "allianceInfluence": 46
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
      "date": "July 2",
      "text": "Iran issues fresh warning on Hormuz, Qatar talks make ‘positive progress’.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTFBJdzRnRHV6U1RFbENBREJ0cGh2Tm41dDBIRkh2U3VGb21vaXVQaVFFVnRacW1lX21lR2NsRDJucWJ0dVB2bUlOTTJUVkpuQ1MxMFhNM1NLblBCT2FrVnNLY04tWUZJTTRQZ0FEVFZESWpqZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1170
    },
    {
      "date": "Recent",
      "text": "U.S. Officials Say They Are Closing In on Arrangement to Reopen Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1fcnhwNnhKV0lpWUV1WGdIUkltT1RpQXBKTnk5T05IRmpBcXZoc1dxcjkxVWNmWnVHVGk2LWlVYWMzTmRUS0tydERZRlRtdjFWbGJTa1ktMXcwRTU1MDdRMXFDVzAzb0VHLVhfMXd4STVvRDMyeGRR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1169
    },
    {
      "date": "Recent",
      "text": "Iran Targets Neighbors as U.S. Condemns ‘Aggressive’ Strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxQeERDdWlJbmtObWhLd0JWVG1LNXlzanlYZEpralU4OE5WWm9ZU0pjVmxTVlhvQ1Q2dTBlV0E5UWlGZEt0a3JPMkNRN2ZuLVQ3dUIzQllZNTR3MlFJbWk3azBhMTZRZDVCS0NtYk1XNEgzLWVINTJnQVdxajg4Rm1jLQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1169
    },
    {
      "date": "Recent",
      "text": "Israel conducts strikes in Iran, IDF says.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1169
    },
    {
      "date": "Recent",
      "text": "US hits Iran after Trump threat to respond to Gulf fire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQZUVsYmQzTWUxeEh5YmJHa21UaklQR1JEYUJPU0ZtNXFiZlYtZnpCNXdHMHNRdjFabUpRM1h3UVdkNzJlOFFrSHRWTmxWMTFHSlYwNnoxb21zeEw5NFE2SnB3d1RORE5HSVowV2FWeFVPZ2RqRHNGUDVSUnd5U0M0Ni1KTTdULWVlSVdlUlM4Slo0a0FPSUFIT3lBeS1IRFhONmtiR2o1ZnZya01zQXJQcUs0TU80emZPOE9R0gHAAUFVX3lxTE5oem5QSkhHa2pMODNPazB5VElnT0RmNVZkM1R0d0pFTW1mNjRGTFdtUW0ta1M4eUl6anE1SUxSMWJTWUpiYTNDUElEdmNuSzFRZ2tkUnNMWEJvZHZ6OVdBTnJZODBxQWVCTS1kQzNxRlgyb19kc0lvOXpmemluWjRsWnVudVVnZjgtZG1wSE9GeDRwcWNZWGlWd0pKTlBwaUR2YU1TOWtKNmgyUWR0M3dTMERhTEMxbVljVHBBSnRXNw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1170
    },
    {
      "date": "Recent",
      "text": "US and Iran exchange strikes as Israel intensifies attacks on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1170
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
      "perspective": "Iran's Stance",
      "headline": "Hormuz Sovereignty & Diplomatic Leverage",
      "summary": "Iran asserts its right to control the Strait of Hormuz, issuing warnings against US 'miscalculation' while engaging in diplomatic talks in Qatar and proposing a fee plan for passage. Tehran views US actions as provocative but also seeks negotiated solutions.",
      "tone": "defiant",
      "latestSinceUpdate": 1158
    },
    {
      "perspective": "US Strategy",
      "headline": "De-escalation Efforts Amidst Retaliatory Strikes",
      "summary": "The US seeks arrangements to reopen the Strait of Hormuz and sends envoys for talks, indicating a desire for de-escalation. However, it also conducts retaliatory strikes against Iran and considers moving military assets to Israel, signaling a readiness to respond forcefully.",
      "tone": "strained",
      "latestSinceUpdate": 1158
    },
    {
      "perspective": "Israel's Security",
      "headline": "Pre-emptive Strikes & Regional Deterrence",
      "summary": "Israel is actively conducting strikes in Iran and intensifying attacks on Hezbollah in Lebanon, citing security concerns and a persistent drone threat from the Iran-backed group. This reflects a strategy of pre-emption and deterrence against perceived threats.",
      "tone": "defiant",
      "latestSinceUpdate": 1158
    },
    {
      "perspective": "Global Shipping",
      "headline": "Choke Point Crisis & Stranded Sailors",
      "summary": "The Strait of Hormuz remains a critical choke point with seized ships and stranded tankers, prompting international efforts to rescue sailors and address the ongoing disruption to global shipping. The situation highlights the vulnerability of maritime trade routes.",
      "tone": "anxious",
      "latestSinceUpdate": 1158
    }
  ]
});

export default LATEST_SNAPSHOT;
