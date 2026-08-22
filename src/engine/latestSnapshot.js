export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2113,
  "lastUpdated": "2026-08-22",
  "lastSyncedAt": "2026-08-22T02:01:42.193Z",
  "warDay": 176,
  "summary": "The West Asia conflict continues to escalate with US-Israel strikes on Iran, new US sanctions on Hezbollah, and heightened tensions around the Strait of Hormuz, while US forces report over 750 wounded.",
  "lastNarrativeUpdate": "2026-08-22",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is reported, with ongoing escalation and strikes in the region."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
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
      "date": "Aug 20",
      "text": "Iran and Oman discuss the Strait of Hormuz amid Tehran dismissing Trump's threats.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNTWZtMDBMZHMxY3Y2bFg0R0hzYlJMaUMza2ZhXzAtaG5UNlk2X1hIQVJBcWxLMzBCZ2pPY2Q1R09IWlFMYnhSbUVmRUNqSHFVZmxhY0VrUkpaVW5iZFBOT0w5c2h2UHBYZ1hja0hnb2ctRnpfRnlENFRjVmIxbEJIVGxkb0E3b0t0Y3oyZWZnMVBqeGZMdE1wMURyS2tmbkliak16NlhlLV9ieTVQTDd1VGdwWnhkQdIBuwFBVV95cUxQLS1ucTVGS2NYdm0xanM1Z1RQbTFOY1h0azNGTzJLblk1YWozaUtzWExSNHQxS1dOS0VsVldTX0dJU0hPSW9xRmJWdFdGX1p3aXBsM0hEZ3Y3QTViWmFWdG1SYXJPbEtjTEFjbnh1X2pLS0xZR3Jsekk4alY3TGZ2WnJZNVFqcGQyazZDT3Y1VU1ibEtDMDFYTW45a3FpSTNyNFA3S1BNVXZlRktuaGpkVUVxd1o2V0hneEtj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2113
    },
    {
      "date": "Aug 20",
      "text": "US imposes new sanctions on Hezbollah and threatens economic pressure on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBFRllmQTRnUUJ2Qk9iUUF0LU9jU0dQRjdSaGUyTlVkMFg0eXFvdVVmMGhHN3pncnFxLU5XYTlaQVFqa1FFNEwzUkRyVlhQdWhPV2V3TVEydTFUdFFNYnBKcEVUQzF5TE9TSjNtV19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2113
    },
    {
      "date": "Aug 19",
      "text": "UAE suspends all trade and financial transactions with Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBISmhtaW9HT3BxYllQQmZvYjhwTHBKRG5LSFlBSFFLajl4QTBZVTlheU9uM244UVZ6UDVsTUxSbVdMNmgwSlN1T192UDFhTURxV2Z5ZWhqX1lTSnpuaV96US1IUjdkLUd0TlBNMHdn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2113
    },
    {
      "date": "Aug 22",
      "text": "West Asia conflict escalates as US-Israel strikes hit Iran, and the US Embassy in Riyadh is attacked.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2113
    },
    {
      "date": "Aug 22",
      "text": "Pentagon reports over 750 US service members wounded in the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE9GU0NEQThadWpqdUNZbVk0eUd1cHByYkNxczZoSVZUVEFoS1RhSTlwbHMyQ0pjOTVaWWVJRTRKVFljN2JlaEd2N3hWSjkxdVMzTWh5dUhQa0ZPTnRsMDNKZzNTcC1CbFd6RlVqRS0xM2dzU3FLNXliRE43d9IBgAFBVV95cUxOazhMZnN2cmtqNTNndjRaVEFhOUplZ0QxRlFjSlhONTZWUXpvNDl1SlJrTlBrQjFhRnR1NlVxM3pPV051N1R5WFo1WVhKSDRyNm9LNktsWHEwLWJQbkhMVVlwM0I5Qkt6RTV2dHcyUmNOTXZvUC00UTUwdVRySWdVeQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 2113
    },
    {
      "date": "Aug 22",
      "text": "Gaza mediators state latest Israeli strikes undermine efforts to end conflict at a critical stage.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxPUGViZ2w0cXVmUjBqbEFKeEFsdUY1YWNiWlBobmpkejVKWng5N3lINFFZOGdNQ2JzaV90bXBFQVpLaWVDRXZOMmQtOXA0d09XNEZmdExMbFFPZGNsaTc3QUVKQktwOU5DNnliZ0dDdVFNaGdsUVNyOWdHRkh1VFBjQkNfUklTZTRZMzhDb05xaHZUNGdURlZxSUJBZ3RCVHZtbThfaFRObk1SM0VYX3ZZS09jelpvOGMzSVktZDNocEpKOVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2113
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
