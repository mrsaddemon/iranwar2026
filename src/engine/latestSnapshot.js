export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2093,
  "lastUpdated": "2026-08-21",
  "lastSyncedAt": "2026-08-21T14:44:42.200Z",
  "warDay": 175,
  "summary": "The conflict involving the US, Israel, and Iran continues to escalate with military strikes, new sanctions, and heightened tensions in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-08-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire or de-escalation efforts are currently reported amidst ongoing military actions and threats."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 70,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 66,
    "globalPressure": 88,
    "allianceInfluence": 62
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": true,
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
      "latestSinceUpdate": 2092
    },
    {
      "date": "Aug 20",
      "text": "China rejects US sanctions on Tehran, indicating geopolitical alignment.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2093
    },
    {
      "date": "Aug 20",
      "text": "Israel conducts strikes in Gaza and Lebanon.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2093
    },
    {
      "date": "Aug 20",
      "text": "West Asia conflict escalates as US-Israel strikes hit Iran, and the US Embassy in Riyadh is attacked.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2093
    },
    {
      "date": "Aug 20",
      "text": "Hezbollah uses FPV drones to target Israeli soldiers, forcing them to retreat.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2093
    },
    {
      "date": "Aug 20",
      "text": "Concerns rise over increased risk of collisions and oil spills in the Strait of Hormuz, with the U.S. military guiding oil tankers and conducting stealth operations.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxPNzQ3TkxjSlV3TWF2QjF1eERyNFNGWXp5UUhiVnRsMkRobktKSElnQXJUTFgtcjRjMHBxcUFqV01lYVBTX3dmcTZHelhvRy1ETUppZk5NcHE3SzFsUzlLTTlhS3VHa0N5c0hCYk9DM2QyamUtb19YZTdZMnRXUFNUeEJNN3puUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "qz.com",
      "latestSinceUpdate": 2093
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
