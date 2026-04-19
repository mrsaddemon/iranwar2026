export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 245,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T09:09:05.747Z",
  "warDay": 51,
  "summary": "Iran has reportedly closed the Strait of Hormuz and fired on ships, while a two-week ceasefire between the US and Iran, which saw violations by Hezbollah, is nearing expiration and appears to have collapsed.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire between the US and Iran has collapsed due to violations by Hezbollah and Iran's actions in the Strait of Hormuz, as it nears expiration."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Apr 18",
      "text": "Iran fully closes the Strait of Hormuz, citing a US blockade, and fires on ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOaWhWNHdua3F2cEE3RVNzZFNHV1o5N0RsOFFybkxtOThyWm5BZ2MzNXRsYTFuVnJHREp1LVotYWJidXc1T2NqM0RzM2NMQmtNdXlyQ1ViZ0RhaEJRckJIVDY2bURJZXpfMW5hZTlWT0F4VGlsdUVRYnlOYlVXNERxWG9IeUN4S2ZZUmJGUkJkUzAwY1FsQ1c3NVFRQWo5N0Rq?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 245
    },
    {
      "date": "Apr 18",
      "text": "An IDF reservist and a French UNIFIL soldier were killed in Lebanon amid a truce, with Israel accusing Hezbollah of ceasefire violations.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNVTZ0dllXUXlSMlBJQ3h4VXhiTEhubW9WOEJOajY2Y0hoc2prX00zOWxTVHFjTGJWNF9Pdi1XN3V5NTVGRTVqS0FrUVNaRXVfSXdrUW11TVo2QXItWndrZFdwb1QwMHY4TDEzcW8tV2FEZnVUZTVFa1EyaU1SNGtDbTlJWDlBSlZLaHpfeVk0N1dlNF9veEZSNEhFU1FRQTlrS0ZDaGh0RjFZZHllXzVVRTBieTJBd1lzdFlhQVEzcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 245
    },
    {
      "date": "Apr 18",
      "text": "The US military is reportedly preparing to seize Iran-linked ships in the coming days, with Marines practicing maritime raids.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 245
    },
    {
      "date": "Apr 18",
      "text": "The two-week ceasefire between the US and Iran is reported to be nearing expiration and far from a final agreement.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 245
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
      "headline": "Strait of Hormuz Closed Amid US Blockade",
      "summary": "Iran asserts its right to close the Strait of Hormuz due to a U.S. blockade, while also indicating progress in talks with the US despite significant remaining differences.",
      "tone": "defiant",
      "latestSinceUpdate": 241
    },
    {
      "perspective": "Israel-Lebanon Conflict",
      "headline": "Truce Violations and Escalating Strikes",
      "summary": "Despite reports of a truce, Israel and Hezbollah continue to exchange fire, with both sides accusing the other of violations and significant casualties reported.",
      "tone": "strained",
      "latestSinceUpdate": 241
    },
    {
      "perspective": "Global Economic Impact",
      "headline": "Traders Bet on War, Oil Market Volatility",
      "summary": "Traders have made significant bets on the Iran war, highlighting market sensitivity to the conflict and potential for major economic shifts, particularly concerning oil.",
      "tone": "anxious",
      "latestSinceUpdate": 241
    },
    {
      "perspective": "US Role",
      "headline": "US Enforces Blockade, Seeks Peace Talks",
      "summary": "The U.S. is actively enforcing a blockade of Iranian ports and turning back ships, signaling a direct intervention in the conflict while also engaging in diplomatic efforts for peace talks.",
      "tone": "neutral",
      "latestSinceUpdate": 241
    }
  ]
});

export default LATEST_SNAPSHOT;
