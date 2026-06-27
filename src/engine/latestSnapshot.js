export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1085,
  "lastUpdated": "2026-06-27",
  "lastSyncedAt": "2026-06-27T16:35:06.003Z",
  "warDay": 120,
  "summary": "Direct military clashes between the US and Iran have escalated following accusations of ceasefire violations, while a US-brokered Israel-Lebanon framework agreement faces rejection from Hezbollah amidst ongoing regional tensions.",
  "lastNarrativeUpdate": "2026-06-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "A previously established ceasefire between the US and Iran has collapsed following mutual accusations of violations and direct military engagements."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.4
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Jun 27",
      "text": "US strikes military sites in Iran after accusing Tehran of violating ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxNdjVVaVMzcUdxUDVMbm0zREp4X2FHWk5kdzJzbi1zZF9OQ3RhSlVmRFdkSGVXenc4TlRISHlmNzY2dl9FSjdUaDFYR0lNRTlleWxwb0t3blVWUUt3V0tiRGNURVQwQndQZ2l0YkxKZHJ4cjg0OXRwVUVKblBkMks5LXZkWWg5YWJjbmFVN2gzM05rRnBYcDZsTTc2aF8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The National",
      "latestSinceUpdate": 1085
    },
    {
      "date": "Jun 27",
      "text": "Iranian drones target Bahrain after U.S. strikes Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1085
    },
    {
      "date": "Jun 27",
      "text": "Tanker struck in Strait of Hormuz as U.S.-Iran tensions escalate.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNejk4RTNUbmRrRkRCX2xiX1R2azgzNXhfMVl1Z1pRbS1LZzJqS2h2TFpkS3BXQWRKZUk2UUwwOWg2WHZ3Y0o2bVVRbFBpSGZ2a3V5YTdBd0tNcHV3aHBiblZZRktpemtVamc1QWVzeEF1WXBOYko4QnBmVzJXWFdXbFl1Q3JZMG05Ync0Q3h6ZUtyelNPX0VRci1PUVJrOURT0gGmAUFVX3lxTE40X3pXY3l4RC1TS2EzUzBLUnFFeEw1TnZ6QTFJTE13SHF0Ym5HWngwOEJhSS03TzRDX0pzYUNhMGRDNUtkT1BwV2UzR0tRbF9uVk8tampaTzhsY3plX3A2Tjh5VEc4UGVmSk85V1h2RVJpNUxoc3ZGVTIyb3lsdm1JV3B0cE9MZnpKNzRGVkxyQmJEVkxEdHR6ODh3d3VlNk5ZVmt1TXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1085
    },
    {
      "date": "Jun 27",
      "text": "UN’s IMO halts ship evacuations from Hormuz after attack.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNOHZGMlVVcWRmYVBfNGx5WEYwbHBVZkhjcFVfdld2cmQ0VWVPMzIwcHg3dnl6alFUc2UtRVgzQVhPZWFfV0hUVUNkYXdxb1JaZzl1cG41SG9HbDZVQkhoSnh0WFNGSS1IUjNSTFU5QUJXbWlsS3QzQmdpTmZmLTNSZVRuSVpVeUtuYnhKajdQSXJsOFFXSVB5RmlKbXJ6Sk15bUFESzF6YVZrTnh4LTVGVW9Gdlc4X2RaR2cwdzNLRdIBxAFBVV95cUxOSjI4NkNxOUR3NmJjSjRUQjZkZ1J0NFBJdndkYlJ4aVo3Wk9IZXR4Qk1rYzJ4bGxzM004WTA2d2taOF9jX1FYeFlEcTQ5VXNLZTRPdnhud0VvcUtNSGpMbGQxRnlYLVlIS09pdTVRbUJnVEQwbng1WlpscjY5TnJWVjRpWTFWZlhwVVVZZlB2RjdBUElVWlBzeklIcXJWQXFsTkljWVFoS0hFTTJVNEJzNW5VeHpNV0tRMjdvZkhuVmw5NVF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1085
    },
    {
      "date": "Jun 27",
      "text": "Iran says it targeted U.S. assets in Mideast as fresh clashes test ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxQWWlZa1Z2ekR6MzlkR0RRNUd1X2FwTnBBcExWYkVPRndJcUVJWTk1NkxBTmMyQ3pta1V2S1lFU2RoQWE1TnpKYXktMl9ieFU4Vi1LOEFoUFB1dHdocU1rUTd6Y3ZOcGg4TTIxc1dqSlpPS0otcUpwQjVSWldvZWZ5UkpDMF9YWEo3VE5nRENFbXcxaEw4RllSVzNPUFdJQkN4Zm40eHV2bzFndDdOOWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1085
    },
    {
      "date": "Jun 27",
      "text": "Israel and Lebanon sign framework agreement after US-brokered talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9wb3BXX1RsdTNSSC1EbXBRM3VJaUtoRUsydG4wU0NYcEUwVmY3TXJXdEpaMFMzdWlzdlBiUEgyZG8zZk1LUTc4bXRfQjdfWnpNeTJQM0tJOWpNQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1085
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (14 headlines)"
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
      "headline": "US and Israel Respond to Iranian Aggression",
      "summary": "The United States and Israel assert their right to respond to Iranian aggression, including attacks on shipping and violations of a ceasefire, by conducting targeted military strikes to protect regional interests.",
      "tone": "strained",
      "latestSinceUpdate": 1078
    },
    {
      "perspective": "Iran",
      "headline": "Iran Retaliates Against Foreign Aggression",
      "summary": "Iran maintains its right to retaliate against US and Israeli military actions, asserting that its strikes are a response to foreign aggression and defense of its sovereignty.",
      "tone": "defiant",
      "latestSinceUpdate": 1078
    },
    {
      "perspective": "Economic/Global",
      "headline": "Oil Prices Fall Amid Ongoing Conflict",
      "summary": "Despite ongoing conflict, global oil prices have reportedly fallen to pre-war levels, raising questions about the economic impact and beneficiaries of the prolonged conflict.",
      "tone": "skeptical",
      "latestSinceUpdate": 1078
    }
  ]
});

export default LATEST_SNAPSHOT;
