export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1154,
  "lastUpdated": "2026-07-03",
  "lastSyncedAt": "2026-07-03T20:46:00.069Z",
  "warDay": 126,
  "summary": "Active military exchanges between the US, Israel, and Iran continue, with heightened tensions around the Strait of Hormuz and ongoing diplomatic efforts in Qatar and Syria.",
  "lastNarrativeUpdate": "2026-07-03",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 5,
    "summary": "No active ceasefire is in effect, though diplomatic discussions are reported to be making some progress."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 85,
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "date": "Jul 02",
      "text": "Iran issues fresh warning on Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTFBJdzRnRHV6U1RFbENBREJ0cGh2Tm41dDBIRkh2U3VGb21vaXVQaVFFVnRacW1lX21lR2NsRDJucWJ0dVB2bUlOTTJUVkpuQ1MxMFhNM1NLblBCT2FrVnNLY04tWUZJTTRQZ0FEVFZESWpqZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1154
    },
    {
      "date": "Jul 02",
      "text": "Qatar talks make ‘positive progress’.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1154
    },
    {
      "date": "Jul 02",
      "text": "US hits Iran after Trump threat to respond to Gulf fire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQZUVsYmQzTWUxeEh5YmJHa21UaklQR1JEYUJPU0ZtNXFiZlYtZnpCNXdHMHNRdjFabUpRM1h3UVdkNzJlOFFrSHRWTmxWMTFHSlYwNnoxb21zeEw5NFE2SnB3d1RORE5HSVowV2FWeFVPZ2RqRHNGUDVSUnd5U0M0Ni1KTTdULWVlSVdlUlM4Slo0a0FPSUFIT3lBeS1IRFhONmtiR2o1ZnZya01zQXJQcUs0TU80emZPOE9R0gHAAUFVX3lxTE5oem5QSkhHa2pMODNPazB5VElnT0RmNVZkM1R0d0pFTW1mNjRGTFdtUW0ta1M4eUl6anE1SUxSMWJTWUpiYTNDUElEdmNuSzFRZ2tkUnNMWEJvZHZ6OVdBTnJZODBxQWVCTS1kQzNxRlgyb19kc0lvOXpmemluWjRsWnVudVVnZjgtZG1wSE9GeDRwcWNZWGlWd0pKTlBwaUR2YU1TOWtKNmgyUWR0M3dTMERhTEMxbVljVHBBSnRXNw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1154
    },
    {
      "date": "Jul 02",
      "text": "Israel conducts strikes in Iran, IDF says.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1154
    },
    {
      "date": "Jul 02",
      "text": "US and Iran exchange strikes as Israel intensifies attacks on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1154
    },
    {
      "date": "Jul 02",
      "text": "Iran and Oman propose fee plan for Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxNeU9YeHZfWV9ORmpiVVg2VV9WbG1Oby1WUlBXQ216ZGg0dXZSQXJUV3liYWNydmVEbzNoSkIwa3p6eEpCS1UwTDIwY2pCRHpjNnZSLWpxblNUR0xNYzBXVDZCQmsyYjdEODhGcWV0X0ZMbWNNQXd4Z1BVdHNULXBmSGJ2UUU0YnVyZjlqZ0xvckZBN19iNW9Ka2tZNGVEdWM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1154
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
      "perspective": "Iran's Defiance",
      "headline": "Tehran Rejects Intervention, Warns of Forceful Response",
      "summary": "Iran maintains a defiant stance, rejecting third-party intervention in Hormuz and warning of a 'forceful response' to any US 'miscalculation'. Its top negotiator asserts the country is ready for war despite ongoing peace talks.",
      "tone": "defiant",
      "latestSinceUpdate": 1145
    },
    {
      "perspective": "US/Israel Military Action",
      "headline": "US and Israel Conduct Strikes Amid Regional Tensions",
      "summary": "The US has conducted strikes in Iran following threats, while Israel also reports strikes within Iran. Israel's PM states the IDF will not withdraw from south Lebanon as long as Hezbollah remains present.",
      "tone": "strained",
      "latestSinceUpdate": 1145
    },
    {
      "perspective": "Strait of Hormuz Security",
      "headline": "Hormuz Tensions Escalate with Warnings and Seizures",
      "summary": "Iran has issued warnings to oil tankers regarding approved routes in the Strait of Hormuz, with reports of seized ships and stranded tankers. Saudi Arabia has increased oil shipments through the strait amidst the heightened security concerns.",
      "tone": "anxious",
      "latestSinceUpdate": 1145
    },
    {
      "perspective": "Regional Diplomatic Strain",
      "headline": "Peace Talks Inch Along Amid US-Saudi Rift",
      "summary": "Peace talks between Iran and the US are progressing slowly, while the ongoing conflict is creating a wedge between the US and Saudi Arabia. Qatar's Emir is involved in discussions regarding Iran and a Lebanon ceasefire.",
      "tone": "skeptical",
      "latestSinceUpdate": 1145
    }
  ]
});

export default LATEST_SNAPSHOT;
