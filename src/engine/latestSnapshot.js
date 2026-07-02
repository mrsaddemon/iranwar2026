export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1136,
  "lastUpdated": "2026-07-02",
  "lastSyncedAt": "2026-07-02T10:24:13.292Z",
  "warDay": 125,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-02",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "No broad ceasefire is active, though discussions for de-escalation and specific regional agreements are ongoing but met with skepticism."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.65
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
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
    "nuclearIndex": 25,
    "escalationLevel": 38,
    "oilDisruption": 80,
    "tradeImpact": 48,
    "sanctionsPressure": 49,
    "globalPressure": 55,
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
      "date": "Jul 01",
      "text": "US and Iran wrap up indirect talks in Qatar, agreeing to continue discussions.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1136
    },
    {
      "date": "Jul 01",
      "text": "Iran claims to have targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1136
    },
    {
      "date": "Jul 01",
      "text": "Israel conducts strikes in Iran, according to IDF statements.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1136
    },
    {
      "date": "Jul 01",
      "text": "Adnoc L&S LNG carrier transits the Strait of Hormuz in 'dark' mode amidst heightened tensions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOZUtqMU9sakx3SVpjclhsM0V1LUY2S2xKZXFPakk1aldSM01ScnBmQm5YdHJhQUIyYmQ2aWV3TXVRZC1NUmxVbExpMGlMeVNXbWI4SzZoM24xb3A4Z1pCVERyMV9YMzZrSmo2SzljNHp1UDdWVk5CSlZ4dmhxS1dPdTJiczJjRmI1MjdSOTd1OUZXNDR5TXNjdFlMeEpQQ1NZRzloZi1Sd2RKdWViV3U2bnFFdjZ6bUdrQXNBcg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "TradeWinds News",
      "latestSinceUpdate": 1136
    },
    {
      "date": "Jul 01",
      "text": "Iran's top negotiator states the country is ready for war as peace talks progress slowly.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxQaGFGOW1UbXp6UGVFUm9OallVbzEweHphTnF1cFNoOFp0OS0xX2NlUVdnc1VvUWZTdW9qZDV0QXhRcXJVaG1SRzlvbUpiSmFjRER1UzUyTlZnNlhZVWw5Umh1ZkxtSW1aOC1xbHdvTFVpejlRYk1JUGZCdXZuVUJQT0tjcGZkcDI5Rmt4TTUzQXNMR1d3NGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1136
    },
    {
      "date": "Jul 01",
      "text": "Reports indicate Israel is facing a significant Hezbollah drone problem in Lebanon.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1136
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
      "perspective": "US/Allies",
      "headline": "Diplomacy Stalls Amidst Retaliatory Strikes",
      "summary": "The US continues diplomatic efforts in Doha to de-escalate tensions and secure shipping routes in the Strait of Hormuz, while responding to Iranian military actions. Efforts are also underway with Gulf allies to establish alternative shipping routes.",
      "tone": "strained",
      "latestSinceUpdate": 1133
    },
    {
      "perspective": "Iran",
      "headline": "Sovereignty and Readiness for Conflict",
      "summary": "Iran asserts its control over the Strait of Hormuz, rejecting external intervention, and declares readiness for war while engaging in talks. The Revolutionary Guards claim successful retaliatory strikes against US military sites.",
      "tone": "defiant",
      "latestSinceUpdate": 1133
    },
    {
      "perspective": "Regional Stability",
      "headline": "Escalation Risk High as Talks Fail",
      "summary": "The failure of Doha talks to achieve a breakthrough, coupled with continued military engagements involving the US, Iran, and Israel, signals a high risk of further regional escalation. The situation in the Strait of Hormuz remains a critical flashpoint.",
      "tone": "anxious",
      "latestSinceUpdate": 1133
    }
  ]
});

export default LATEST_SNAPSHOT;
