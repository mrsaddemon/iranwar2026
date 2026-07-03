export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1151,
  "lastUpdated": "2026-07-03",
  "lastSyncedAt": "2026-07-03T16:47:28.010Z",
  "warDay": 126,
  "summary": "Ongoing conflict between Iran, the US, and Israel continues with mutual strikes, warnings regarding the Strait of Hormuz, and diplomatic efforts making limited progress.",
  "lastNarrativeUpdate": "2026-07-03",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 5,
    "summary": "No active ceasefire is reported amidst ongoing military actions and war warnings."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
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
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
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
      "text": "Iran issues fresh warning regarding the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTFBJdzRnRHV6U1RFbENBREJ0cGh2Tm41dDBIRkh2U3VGb21vaXVQaVFFVnRacW1lX21lR2NsRDJucWJ0dVB2bUlOTTJUVkpuQ1MxMFhNM1NLblBCT2FrVnNLY04tWUZJTTRQZ0FEVFZESWpqZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1151
    },
    {
      "date": "Jul 02",
      "text": "Qatar-mediated talks show positive progress.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1151
    },
    {
      "date": "Jul 02",
      "text": "Israel conducts strikes within Iran, according to IDF.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1151
    },
    {
      "date": "Jul 02",
      "text": "Iran claims to have targeted an American base following US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1151
    },
    {
      "date": "Jul 02",
      "text": "Iran warns US and Israel against attacks during the leader's funeral.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQTkFjUGxyUTBnems3cHJKRFQ1cXBOWE5qdVRTTHU4aDFsNFJTT0xMU0dhSzVUZVdFMEkyWHgxNXBDTVZPWlpiNUpVSUdYSVBoV0hLUWdUWVdiSFo0cEJkWURHcW9vaEg5TzZBQnZDdTBTRm02RWwwQTU2YnZjd1FYQXcyY1l3VThMdmpYb2FMcW4wcmtWcmVyQnc0LWdWTXBIQXBoOWpCY1RVSmI3T1ZfLWljSkgwdjUwOEFxRg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 1151
    },
    {
      "date": "Jul 02",
      "text": "BBC reports seized ships and stranded tankers in Iran near the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE14TnVGLUx0cXBxUkZpUV96QVNJS05iN0Q2RUcyTGtWdGtTSTgzVmJQNVFlSnh4d1VQcHdjZ0hSMF9tUWp1RjFfVkhSb0tBRkZ2Skd6TDdSTmwxZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1151
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
