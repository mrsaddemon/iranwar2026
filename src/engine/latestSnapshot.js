export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1999,
  "lastUpdated": "2026-08-19",
  "lastSyncedAt": "2026-08-19T01:46:00.974Z",
  "warDay": 173,
  "summary": "The US-Iran deal deadline expired, leading to Trump's declaration of the Strait of Hormuz as US territory and increased attacks on ships, while Israel escalated strikes in Lebanon despite an existing ceasefire.",
  "lastNarrativeUpdate": "2026-08-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A ceasefire between Israel and Hezbollah is in effect but has been violated by recent Israeli strikes in southern Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Aug 17",
      "text": "Deadline to reach US-Iran deal expires, Trump threatens Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1998
    },
    {
      "date": "Aug 17",
      "text": "Iran denies targeting UAE with missiles.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPeFNEVEs5RGt0eGdpRzhOOTJFeGVVWTgzY0dXcW81aDZRLXM2U2pkUnI3czFzN09peXp3N3NySnRHT0ZDaFZOZ3JtVG4xb1pjeFJpanVpRlJROEgwSEdJNERFdWh2WG5iM09zYWdsV0JQLUdJQTQ4VHJHY1pxUFJSaGU1TkRnNjgwLUcyWFpNYlpMclVqN0xJWHhTLWZPdHE5djRKaF9oWHJhZllHaWJyUEFLQzBUeUxTUmhxSXBZZ9IBxAFBVV95cUxNcGxjek5ZME81SDl1ZmgwNEpDa3Zqdmh5V3NSSHpURmNTclVRcDFESFJXby1YM2pNUGI2LVc3dDdfMzhoX0VSdG5iQ2djREFhYXhmUWowWkM4VzNRcWs5dDhUYVFHR2dDd2FmZ1FLZUtYRmtLZ2g5SklRUkRaYTZNOWVSYm0tU1p6dlpXTXd1WDlWcEJOc0VrYnd3SEV5SFJnVVlyVWdwYk1tcGxaR2QyMHNKcXkzSnZES2FmRkttcFp0U19F?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1999
    },
    {
      "date": "Aug 17",
      "text": "Iran war pushes Middle Eastern airlines towards $4.3bn loss in 2026.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxQWGJOWUs3azVwVUgtM3hHaW8xNTJFcFZReHJiUlRKeVM2c0lIY1YyOTBHQXdBUExMZDdLVXRURDFua0Y4b3RBYjBDZTR3Q0VIX2JRMF9KbTZzUlRzWXVTRDBycUVYZEdzRHpWTGxoWml4NVdLVWcyaFRlUE8yVmh0YXdRcmlDaXBxRFpLVnpuczY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Middle East Eye",
      "latestSinceUpdate": 1999
    },
    {
      "date": "Aug 17",
      "text": "Iran and Oman discuss the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPbkJqOHdsTVhuNWRIbk9EdVRDUmQxMlczTmFsRlc4MEdOemNRMEdHUUxJaDZzZUtydUxsMDlyT0c0eXdJZnNOSmx1d0pmakY5enZKSjg3UjBIN1I2dzVieUx1VXcwVFZJbmFsbnZLSTlObXNaY2x4WUxYRERNbXVZaFRNOERTclNFeUhDaVkzdG96Mjh5cDhjbk9XM3JET25HS3BHZXhWMmJSR1hjSEdpWUpHYlJ6R1l3WllrWGhSRdIBxAFBVV95cUxNZFhLVEMyTjcwUGh5MWUwcms1M1ctOHpoeVh2NzlHYnh1aUJ1MWJqb2RqZGZHbGRvSTNyMVE4OGE3X0ZmVU1zM1VkMlpJTEM0V3BSemF4VUw5T0pDdmFad09JdldGenRhUzN4ZGFLZ0ZJMmw2Sm53WUx0WGQ0bHFVOUxMM2F2QnctbC05NWJjdExxcEl2aEZycC10bDU5REMyYWpCelo3b28wZk5PcWItLXZfeEJPbU1YQUtGRGJLMWc2Rmg0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1999
    },
    {
      "date": "Aug 17",
      "text": "Israel strikes Lebanon as US prepares fresh Iran measures.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1999
    },
    {
      "date": "Aug 17",
      "text": "Israel strikes Hezbollah after attack on IDF, accused of ceasefire violations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE5jQTJhLTg2YTBtNE4yTkpfYWk2UWQzNGpoSGxrNjI1ZkNvY2lEU1JLZEo0M1dXMTdrV1YzV3lkY0EyMUNfakZIMy0tdVNLOE4zMHVSMHlB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1999
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
      "perspective": "US/Western",
      "headline": "Iran's Aggression Prompts Sanctions, Deconfliction Efforts",
      "summary": "The US is responding to Iran's escalating actions, including missile launches and Strait of Hormuz incidents, with fresh sanctions and diplomatic efforts to deconflict regional tensions. There is also consideration for adjusting the US military footprint in the Gulf post-conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Iranian",
      "headline": "Defiance Amidst US Pressure and Regional Strikes",
      "summary": "Iran continues to assert its regional influence, including missile launches and claims over the Strait of Hormuz, in defiance of US pressure and sanctions. The nation is responding to US-Israel strikes and perceived threats to its sovereignty.",
      "tone": "defiant",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Israeli/Regional",
      "headline": "Escalation in Lebanon and Iran Amidst Regional Instability",
      "summary": "Israel has escalated attacks in southern Lebanon despite a ceasefire, citing ongoing security concerns and threats from groups like Hezbollah. The broader West Asia conflict sees US-Israel strikes hitting Iran, contributing to regional instability.",
      "tone": "strained",
      "latestSinceUpdate": 1998
    }
  ]
});

export default LATEST_SNAPSHOT;
