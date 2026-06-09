export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 921,
  "lastUpdated": "2026-06-09",
  "lastSyncedAt": "2026-06-09T16:36:05.977Z",
  "warDay": 102,
  "summary": "A recent ceasefire attempt between Israel and Iran has faltered amidst renewed strikes on Lebanon by Israel, while the US is involved in rescue operations and diplomatic efforts.",
  "lastNarrativeUpdate": "2026-06-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A recent attempt at a ceasefire has collapsed due to continued Israeli strikes on Lebanon despite a stated pause from Iran."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "Jun 07-08",
      "text": "Ceasefire falters as Israel and Iran trade worst strikes in months.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPR2Z1c1luQ3VlZGdLNFE3c0cxRDZBa2JUQlZwMlNlNVZWWXplUDVjbzNZS0dfS1Bub0ZJNDIybDhmSGFkaW5vcmhvdjc4dzAyN1ExdTFuNXhRTU9DUnhBZ0VqX2FySHdaX3RqQ2JPd0I3STZSaU1TNlI5d3ZmcGlTend3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 921
    },
    {
      "date": "Jun 09",
      "text": "Israel pounds Lebanon, killing at least eight people in strikes on Tyre and Beirut outskirts.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 921
    },
    {
      "date": "Jun 09",
      "text": "A US Apache helicopter was downed near Hormuz, with its crew rescued by a drone boat.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 921
    },
    {
      "date": "Jun 09",
      "text": "Netanyahu states the war with Iran and Hezbollah is not over, despite Tehran's claims of halting strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxNZnBndXNpNUd4bnh6M2trWE5oM0dmREVnZzlidjhNS2dnZkRUN1AtOTdMcl9VZThTc2ZPdDVVcWlvLTM0aVJubUFpSGFIZjJVT0xoOXU5cTBjRS12NkVpVGZVMlM1ajBXMlpDdDN4Qmp0WWNwRHRiN2YtcVJEN0J2aWtPdmVSMlZCS0VwV1IwdHM5a0NBQ1HSAZsBQVVfeXFMTlNqYnlBakZKVWptLXFDYjZuZlFjT1dVX04yZU84eEdrNFUwOW9MbXN4RjRoanloRG1hUDROVXRfSGVjYTNIa3BiMGpUZkZZazNFVDQxazJTZVdvWE16THlJbFczdUd5LWhSOHJqWEJjMURVdzh0M0tCdFBJcGhYa2RTQmRaMGlNazNDMm9rZkxWbGdxZDNOeVEybFU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 921
    },
    {
      "date": "Jun 09",
      "text": "US military assisted Israel in intercepting Iranian missiles.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 921
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "perspective": "Economic Impact",
      "headline": "Global Markets Reel from 100 Days of Iran War Fuel Shock",
      "summary": "Global markets and airlines are experiencing significant fuel shock and profit forecast cuts due to the ongoing Iran war, marking 100 days of conflict. The economic fallout is a major concern for international stability.",
      "tone": "anxious",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "Escalation & Retaliation",
      "headline": "Iran and Israel Exchange Missile Strikes, Vows of Retaliation",
      "summary": "Israel and Iran have engaged in direct missile exchanges, with Israel vowing retaliation after Iran's first missile attack since April, following earlier strikes in Lebanon. This marks a significant escalation in the conflict.",
      "tone": "strained",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "US/Western Concern",
      "headline": "US Focuses on Iran's Nuclear Ambitions and Hormuz Control Amid Gulf Strikes",
      "summary": "US officials and allies emphasize preventing Iran from becoming a nuclear power and controlling the Strait of Hormuz, while also engaging in strikes in the Gulf. The US provides naval overwatch in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "Iran's Stance",
      "headline": "Iran Retaliates Against Israel, Accuses US of Ceasefire Violation",
      "summary": "Iran has launched missiles and drones toward the Strait of Hormuz and Israel, accusing the US of violating the ceasefire and retaliating for Israeli strikes. Peace talks have stalled amidst the renewed hostilities.",
      "tone": "defiant",
      "latestSinceUpdate": 909
    }
  ]
});

export default LATEST_SNAPSHOT;
