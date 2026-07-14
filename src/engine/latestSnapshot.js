export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1300,
  "lastUpdated": "2026-07-14",
  "lastSyncedAt": "2026-07-14T22:41:23.277Z",
  "warDay": 137,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-14",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 100,
    "summary": "A previously fragile ceasefire between Israel and Iran has collapsed amidst renewed strikes and regional tensions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jul 13",
      "text": "US launches additional rounds of strikes on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNZ1FmMWtLM2FxQldvem5lcHN6MlA5S2hJLXY0cHhmbi03eDhwOHZiUndwVFljaUgwcVZWRTBjUEl5MXAwZlo5X2EzLVNsdU5pTk9wcEk0dDc1bHNNS2F3MllFUktjaUVHQlJST1doektLNkp6S3pTOVNjZzUtYzdZb0hDc1RTRUZSaVVXcVdxejRZZXVWOE5fUDJTeUM2dC1obnp0bnVtU1Q3eTlYMlJMbWRYY2x2eENTalVvTNIBwgFBVV95cUxOZmtXVEFSSlhjNUZlVVR3VTRTMm4tRUNMYXNLMk93N2FDeE9zekdSQmtVZzFKS3IxTktvbEYxeXkzOElVRG1uMFZuZG1wZGdpZUtrTkdTTHFIVTVuSmZnTDFBbG1fcVlNcE5UZFB2U19MWWcwSWVzekd5SlR3NzdYUnlfSnU4UWtUbHlxZFlTWjVmcl9SUmFkWjRGc1A5SXNVOXUxUUU5UThtdndyRXYxZVBuNkZVdHBVckJNbFN4a2pTQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1300
    },
    {
      "date": "Jul 13",
      "text": "Iran claims to have struck two tankers in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBnVjhScnVheUNnYXhMcjVVRlZuS2RiMGgwQTNxRWxtU1AxWlM1elZTRGxjU0xwVFNwb3A3YkluVzN4WGlsUlVrbmZtT0hwRlVsYnozb2Q1cXhHTXU2QlFyMlNzaHFQUzh1cVVmWW1n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1300
    },
    {
      "date": "Jul 13",
      "text": "US restores naval blockade on Iran and its ports.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxNWnBwMkRnYlE0eWdLanFlS1JwcWNwQW83YkJMbFJXdzZYRGFiZUtib0UzM1hRVFozX3RCTmwxUVQzV2RvNTU2ZE56RjZOYjRQbzF5SkJ1Y0RTQnktRmg1NjliM2pMcy1kY045dVQ4bk9sYkNDU2N6WTFnNV9NNjZMa21IYkxLX3NmWDF2NXMzUmRtRkN0eGlwRmx6SHdlakU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1300
    },
    {
      "date": "Jul 13",
      "text": "Israel and Iran trade strikes, imperiling an already fragile ceasefire on the war's 100th day.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPelJMTjAxUFhxdHBqeU9KN3lhbkFhM182azlzVHpGTDZXaGkyaDFNT0Vzc2ZBT1BJTnpiTm9XalZjOVhaWGN6YjJjXzBBZ2lrQW52bFhZZmw4OHFSYWVRcUpwenVEckFlSkY5NGx1bFM2dDVuUUlPQ1M1UTgtX094dlhHOUs1bVU3NlFBRmFuLThRN0dtUE9yWg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1300
    },
    {
      "date": "Jul 13",
      "text": "A Hezbollah lair is unearthed in Lebanon, and Israel seeks proof of Lebanese Army's ability to prevent Hezbollah's return.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTE1rS29BSi1VV2ZZZW1qM0JQVUVhV3gxZzlzMmdNRnhSYnJuQ0VqNk8xMFlVLTRtMDRrNHgwTnd0ZWtVOExoekVUa3hLSHpiNUVtekYyZjZwb1BpaEEx?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1300
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
      "perspective": "US Aggression",
      "headline": "Trump Escalates Iran Conflict with New War, Blockade, and Nuclear Site Threat",
      "summary": "The US administration under Trump has declared a new war against Iran, resuming military strikes and imposing a shipping blockade in the Strait of Hormuz. Threats to take control of the strait and consider striking a nuclear site signal a significant escalation of hostilities.",
      "tone": "defiant",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Iranian Retaliation",
      "headline": "Iran Accused of Tanker Attacks Amid US Strikes and Blockade",
      "summary": "Iran is accused by the UAE of attacking two tankers in the Strait of Hormuz, causing casualties, amidst renewed US military strikes and a declared shipping blockade. This suggests a pattern of Iranian retaliation or defiance in response to US actions.",
      "tone": "strained",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Regional Instability",
      "headline": "Mideast Tensions Soar as Hormuz Attacks and US-Iran War Threaten Oil Supply",
      "summary": "The Strait of Hormuz is a flashpoint with reported tanker attacks and a renewed US blockade, driving oil prices up due to supply worries. The broader region remains volatile with Israel and Iran trading strikes and concerns over Hezbollah's activities in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Israeli Security",
      "headline": "Israel-Lebanon Talks Hinge on Hezbollah Amid Trade Strikes with Iran",
      "summary": "Israel and Iran continue to trade strikes, further destabilizing the region. Israeli officials indicate that any withdrawal from Lebanon is contingent on the dismantling of Hezbollah, highlighting ongoing security concerns on its northern border.",
      "tone": "strained",
      "latestSinceUpdate": 1287
    }
  ]
});

export default LATEST_SNAPSHOT;
