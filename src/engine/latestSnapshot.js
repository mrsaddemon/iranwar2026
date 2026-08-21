export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2084,
  "lastUpdated": "2026-08-21",
  "lastSyncedAt": "2026-08-21T08:51:47.907Z",
  "warDay": 175,
  "summary": "The conflict continues with US economic pressure on Iran, ongoing Israeli military actions in Gaza, and escalating tensions between Israel and Hezbollah, alongside concerns over Strait of Hormuz shipping.",
  "lastNarrativeUpdate": "2026-08-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is reported; mediation efforts in Gaza are reportedly undermined by ongoing strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.68,
        "aggression": 0.88
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 73
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.78
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 87,
    "oilDisruption": 78,
    "tradeImpact": 72,
    "sanctionsPressure": 64,
    "globalPressure": 83,
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
      "date": "Aug 19",
      "text": "Israel conducts strikes in Gaza amidst reports of potential US talks with Iran.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2084
    },
    {
      "date": "Aug 20",
      "text": "US imposes new sanctions on Hezbollah and threatens further economic pressure on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBFRllmQTRnUUJ2Qk9iUUF0LU9jU0dQRjdSaGUyTlVkMFg0eXFvdVVmMGhHN3pncnFxLU5XYTlaQVFqa1FFNEwzUkRyVlhQdWhPV2V3TVEydTFUdFFNYnBKcEVUQzF5TE9TSjNtV19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2084
    },
    {
      "date": "Aug 21",
      "text": "Gaza mediators report that recent Israeli strikes are undermining efforts to end the conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxPUGViZ2w0cXVmUjBqbEFKeEFsdUY1YWNiWlBobmpkejVKWng5N3lINFFZOGdNQ2JzaV90bXBFQVpLaWVDRXZOMmQtOXA0d09XNEZmdExMbFFPZGNsaTc3QUVKQktwOU5DNnliZ0dDdVFNaGdsUVNyOWdHRkh1VFBjQkNfUklTZTRZMzhDb05xaHZUNGdURlZxSUJBZ3RCVHZtbThfaFRObk1SM0VYX3ZZS09jelpvOGMzSVktZDNocEpKOVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2084
    },
    {
      "date": "Aug 21",
      "text": "Trump threatens Iran's trade partners as economic pressure intensifies.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxOX0YxejNNS1poTHVOcXNPenhxM2c4RmxRb2dtVnVpMHpZMGw1OHBCbDRxWWpmOWxiLVh4QjJkc3JsUVd2UTZseXBGd3lzM1Q5bkpiLXhkMWhlZmJMZHNaV0lTZ0tra0dGclg3T1lTaERzaUJ3WUswQ0dKM3lvX2RGbkotQTZTb3V2VDBWTEY0aVpKQ1RldlE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2084
    },
    {
      "date": "Aug 21",
      "text": "Hezbollah official states only force can compel Israel to leave Lebanon, while a potential flashpoint is identified at Ali Al-Taher Heights.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2084
    },
    {
      "date": "Aug 21",
      "text": "Reports indicate a Hezbollah FPV drone engaged Israeli soldiers.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2084
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
