export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1398,
  "lastUpdated": "2026-07-21",
  "lastSyncedAt": "2026-07-21T11:30:38.211Z",
  "warDay": 144,
  "summary": "The US and Iran are engaged in escalating direct conflict, marked by repeated US airstrikes, Iranian attacks on Gulf states and shipping in the Strait of Hormuz, and increasing US casualties, while diplomatic efforts address the situation in Lebanon.",
  "lastNarrativeUpdate": "2026-07-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are currently reported amidst ongoing hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Jul 20",
      "text": "Another tanker attacked in Strait of Hormuz; 2 tankers reported on fire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQajNHTE9aUmxpa2RIMy1jNjZ4RmgzZlk2OXE3ZXBtRzdxaUpnQldzeUtxaHh6Z3VTQzZMUGNtZ1oxNE5lQzZwLVhnX3BTZWk1OVBVT1ZiNFFtMnoyRDhHbFBnV0pFdTdNcnBKdWVuT0RidVJoWXFCYkdlNDE2V1hmZ1VhUlZhLXExZTZjOHo1YmRYMm5ra1U4RE9DU29CMVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1398
    },
    {
      "date": "Jul 20",
      "text": "US completes more strikes against Iran for 10th consecutive night after Trump warning to Tehran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9vNkw0Q1VPUDBXanZUeUtTZFpFYmV1ZWJwazYzd29VY1dKM19EMmJsdEFCNFg5cU94MFZNNS1JbjZxRWZFd0p1T2NpWkNlWGl5M2FTa1hRa1dsTm1wNjZraHBzOXhBVnlYT2ZGcGhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1398
    },
    {
      "date": "Jul 20",
      "text": "Iran attacks Gulf states and Jordan, indicating a broadening conflict zone.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1398
    },
    {
      "date": "Jul 20",
      "text": "Lawmakers demand termination of Iran War after three U.S. service members killed.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1398
    },
    {
      "date": "Jul 20",
      "text": "US forces sustained about 100 recent injuries in Iran war, Pentagon reports amid scrutiny.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQbGxVLU51NDZzT2RHMlRkSFdpRkJnTzJSM2gtd1E5dGpmcWYzdUh6SzZCQ1I4LW1KSzNRV3RwanhSMUxvWVBpRzJhVWdCWjBHZTRyWkg3ajRGLXdobFJsRXZQQzFWcVR3NDVKRXcxbEhuSzFJVDBKX25ZZEtaNFJtZnVYcUhEN3BtR2VqZmIyNE1qdWEzSFJYOGtxcm5RNmIzeWllaWRkTFFyTDA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "stripes.com",
      "latestSinceUpdate": 1398
    },
    {
      "date": "Jul 20",
      "text": "Houthis announce a Saudi naval blockade, further threatening regional shipping.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1398
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
      "perspective": "US Government",
      "headline": "US Vows Retaliation for Soldier Deaths",
      "summary": "The US government, including former President Trump, has vowed strong retaliation against Iran following the deaths of US service members. Multiple strikes have been launched in response to these casualties.",
      "tone": "defiant",
      "latestSinceUpdate": 1394
    },
    {
      "perspective": "Iran",
      "headline": "Iran Declares 'Full-Scale War' Amid US Strikes",
      "summary": "Iran asserts it is in a 'full-scale war' with the US, continuing its actions and supporting regional proxies. Attacks on US forces and critical infrastructure targets are reported.",
      "tone": "defiant",
      "latestSinceUpdate": 1394
    },
    {
      "perspective": "US Lawmakers",
      "headline": "Lawmakers Demand End to Iran War After Casualties",
      "summary": "Some US lawmakers are calling for the termination of the conflict with Iran following recent US military deaths and injuries. Concerns are rising over the escalating human cost of the war.",
      "tone": "anxious",
      "latestSinceUpdate": 1394
    },
    {
      "perspective": "Israel",
      "headline": "Israel Targets Hezbollah Amid Regional Tensions",
      "summary": "Israel continues to conduct strikes against Hezbollah in Lebanon, warning of broader regional attacks from Tehran. Israeli forces are reportedly surrounding Hezbollah fighters in tunnel networks.",
      "tone": "strained",
      "latestSinceUpdate": 1394
    }
  ]
});

export default LATEST_SNAPSHOT;
