export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2117,
  "lastUpdated": "2026-08-22",
  "lastSyncedAt": "2026-08-22T04:52:44.561Z",
  "warDay": 176,
  "summary": "The US-Iran conflict continues to escalate with new US sanctions, military strikes by US-Israel on Iran, heightened tensions around the Strait of Hormuz, and increasing US military casualties.",
  "lastNarrativeUpdate": "2026-08-22",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is currently active; conflict continues to escalate."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 88,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 66,
    "globalPressure": 86,
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
      "text": "Trump states he views the Strait of Hormuz as ‘American territory’ amidst ongoing conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQQWUwUFJ0aEd2bHliRWRFMVlDRjJ5MDhkclhZV0pORWp2TGtGR1VoOUdTeVJiU0JfZ3BIXzRXMDMxYXkxZ3hCWllmTUc0dTkzemh2VXF2aTJuVkhRNVJwQVRZXzZUdlNkMmRGWmdoY0F2ZzQ4aDFlbHRUY0QxRlFMNFZGZktzbndySFNNUkRKWld0NFZTRWNhWVN3MW1fWTRpMTVrbGM2SFhzRkM3akhkbHd5bTNIRFdQazRvNExR0gHDAUFVX3lxTFBDWmZ0QTF0aktHUXZZUUxwRkVpcUY5ekRWeTdVODZpMzh2SEFMdy05cnVSSXF6ekotWDJvd24tY0Nua1JiLUY2NTN6bHpSWUMwa1o2cDdhSTJqbkl6ZTVZM0FTLUd5aC1OY2M1b21yOWd2LWJ1d0dSa3YzdDNmNWJQZHVfSGQtLTVrOWo4TjcyYWxmZjNWdGg0Y09kRERaSEE0bTg4U18zNzlYZm5kVFg0YVEzTkJ1Tm42Sk9sT09lbXRiTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2117
    },
    {
      "date": "Aug 20",
      "text": "US imposes new sanctions on Hezbollah and threatens further economic pressure on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBFRllmQTRnUUJ2Qk9iUUF0LU9jU0dQRjdSaGUyTlVkMFg0eXFvdVVmMGhHN3pncnFxLU5XYTlaQVFqa1FFNEwzUkRyVlhQdWhPV2V3TVEydTFUdFFNYnBKcEVUQzF5TE9TSjNtV19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2117
    },
    {
      "date": "Aug 20",
      "text": "West Asia conflict escalates as US-Israel strikes hit Iran and the US Embassy is attacked in Riyadh.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2117
    },
    {
      "date": "Aug 21",
      "text": "Pentagon reports more than 750 US service members have been wounded during operations against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE9GU0NEQThadWpqdUNZbVk0eUd1cHByYkNxczZoSVZUVEFoS1RhSTlwbHMyQ0pjOTVaWWVJRTRKVFljN2JlaEd2N3hWSjkxdVMzTWh5dUhQa0ZPTnRsMDNKZzNTcC1CbFd6RlVqRS0xM2dzU3FLNXliRE43d9IBgAFBVV95cUxOazhMZnN2cmtqNTNndjRaVEFhOUplZ0QxRlFjSlhONTZWUXpvNDl1SlJrTlBrQjFhRnR1NlVxM3pPV051N1R5WFo1WVhKSDRyNm9LNktsWHEwLWJQbkhMVVlwM0I5Qkt6RTV2dHcyUmNOTXZvUC00UTUwdVRySWdVeQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 2117
    },
    {
      "date": "Aug 21",
      "text": "Iran War raises the risk of collisions and oil spills in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2117
    },
    {
      "date": "Aug 21",
      "text": "U.S. is conducting a stealth operation to transport oil through the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMia0FVX3lxTFB6cnBGdDhxTW9hTE5vaXdadmx4NVFFb1lsc2ZRRWlGZTd3MnVJamt1Q0VpSzBHblBIMHlqTVhUN2pvaGc2RVBiRlJHOTJwTnpCT0h0bUwzREgwb3h6VTNHc3lMaFpzbmt1di04?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 2117
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
