export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2088,
  "lastUpdated": "2026-08-21",
  "lastSyncedAt": "2026-08-21T11:10:54.244Z",
  "warDay": 175,
  "summary": "The US is intensifying economic pressure on Iran and its allies, while Israel continues strikes in Gaza and faces escalating tensions with Hezbollah, impacting shipping in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-08-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is reported amidst ongoing military actions and economic pressures."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Aug 20",
      "text": "US imposes new sanctions on Hezbollah and threatens economic pressure on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBFRllmQTRnUUJ2Qk9iUUF0LU9jU0dQRjdSaGUyTlVkMFg0eXFvdVVmMGhHN3pncnFxLU5XYTlaQVFqa1FFNEwzUkRyVlhQdWhPV2V3TVEydTFUdFFNYnBKcEVUQzF5TE9TSjNtV19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2085
    },
    {
      "date": "Aug 20",
      "text": "Israel pounds Gaza amid ongoing conflict.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2088
    },
    {
      "date": "Ongoing",
      "text": "Gaza mediators state latest Israeli strikes undermine efforts to end conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxPUGViZ2w0cXVmUjBqbEFKeEFsdUY1YWNiWlBobmpkejVKWng5N3lINFFZOGdNQ2JzaV90bXBFQVpLaWVDRXZOMmQtOXA0d09XNEZmdExMbFFPZGNsaTc3QUVKQktwOU5DNnliZ0dDdVFNaGdsUVNyOWdHRkh1VFBjQkNfUklTZTRZMzhDb05xaHZUNGdURlZxSUJBZ3RCVHZtbThfaFRObk1SM0VYX3ZZS09jelpvOGMzSVktZDNocEpKOVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2088
    },
    {
      "date": "Ongoing",
      "text": "Trump threatens Iran's trade partners, shifting focus to economic pressure.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxOX0YxejNNS1poTHVOcXNPenhxM2c4RmxRb2dtVnVpMHpZMGw1OHBCbDRxWWpmOWxiLVh4QjJkc3JsUVd2UTZseXBGd3lzM1Q5bkpiLXhkMWhlZmJMZHNaV0lTZ0tra0dGclg3T1lTaERzaUJ3WUswQ0dKM3lvX2RGbkotQTZTb3V2VDBWTEY0aVpKQ1RldlE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2088
    },
    {
      "date": "Ongoing",
      "text": "Spike in 'dark' oil tankers in Gulf raises risk of catastrophic spills.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2088
    },
    {
      "date": "Ongoing",
      "text": "Ships passing through Hormuz hover in single digits, data shows.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxNSEhZX09yZU9wMFlFN0FUUjM0dUhpZ01zMEVvWFBlVHpoQ25lY0xFckRtVnpXMHZfZVA3TU0zRjNNYlUydy1pelQ1Q3Rmb1dPeWZmU3hDTXF2ZERfY3UyY2tteGpocUNoY0FkdE13dXV5cjV1VUh3MmN1al9MUm5xVlh6RWpwenRzQ2dzR0dxci05c2kwQ1VSUGNDTVBJVkFFd0RjZm9GRnBBdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2088
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
      "perspective": "US Administration",
      "headline": "Economic Pressure on Iran Intensifies Amidst Stalled Talks",
      "summary": "The US is implementing a 'crushing economic operation' against Iran, threatening its trade partners, while signaling a willingness to reopen talks 'at some point'. The Pentagon is also considering a reduced military presence in the Gulf post-conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Iran",
      "headline": "Iran Dismisses US Economic Warfare, Demands Conditions for Hormuz Reopening",
      "summary": "Iran dismisses Trump’s 'economic D-Day' as a distraction and asserts that the Hormuz Strait will remain closed until the U.S. meets interim deal conditions. Tehran also claims the war will be over 'very soon'.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Gaza Strikes, Considers Retaliation Against Iran",
      "summary": "Israel continues to pound Gaza, actions which mediators say undermine peace efforts. A former Israeli official suggests striking Iran in retaliation for Hezbollah attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Affirms Force as Sole Means to Compel Israeli Withdrawal",
      "summary": "Hezbollah's Nawaf Moussawi states that only force can compel Israel to leave Lebanon, indicating a continued stance of resistance.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    }
  ]
});

export default LATEST_SNAPSHOT;
