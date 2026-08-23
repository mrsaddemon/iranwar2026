export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2194,
  "lastUpdated": "2026-08-23",
  "lastSyncedAt": "2026-08-23T19:08:18.979Z",
  "warDay": 177,
  "summary": "The West Asia conflict is escalating with US-Israel strikes on Iran, US economic pressure, and heightened rhetoric, while a fragile ceasefire in Lebanon is reportedly being exploited.",
  "lastNarrativeUpdate": "2026-08-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "A ceasefire appears to be in effect in Lebanon, but Hezbollah is reportedly exploiting it for arms smuggling, indicating its fragile status."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "Aug 22",
      "text": "Iran military leader vows Tehran ‘will not submit’ as US plans economic squeeze.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pMk05V3loTHpKTHJyOFBSd2RWS0JKM3djNnZpdzFZWVN5R0loZm9kTjRleFZKSU1WMEtyOTF6Z1ZZV0JFdmhPNEFGR2J5WXo1V3lOeVlWd0E1VURWbkZLVjU4SzZkaWxDWXBkZ19n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2194
    },
    {
      "date": "Aug 22",
      "text": "Trump views Strait of Hormuz as ‘American territory’ and is 'stuck' on Iran war ahead of elections.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxPS0VSTm1uS2NXQnFkRUhpVEFSTGNFUTlMdXhkT01MNTVBT29Hbk5ZbHd1a1pWRVEyOTN5N1BCc0I4eG9JeDRCMHE1ckpOUmlYTzcxVi1mNkc2VnZtN2c4XzRaU0I5UTF0TjlySVdLekVYLUktb3hZZ2hzUjlqd2VyRDJnaVMyTWQ3SVFkSXd2NHZZMnM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2194
    },
    {
      "date": "Aug 22",
      "text": "Israel strikes southern Syria; West Asia conflict escalates as US-Israel strikes hit Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2194
    },
    {
      "date": "Aug 22",
      "text": "US Embassy attacked in Riyadh; Jordan caught in Iran-US-Israel war crossfire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQZ0hOakNlaXpGOGc1QWRGYkZLeEtFb0YwUzBFYlo3X2VZcnQ1SGtxcFpJSHp3elFjelNoT3lELU80bWZ3SGNtdGRybjNKLThxS2xGeGx3R3QteUJ5bFR0WG9RQ1IydUU3T3FVdEs4bEdfMkxZOWRDT3dMWHlOM29TYlNSTUpIRzBXelZyNVkwWnRUN29WRWlYZ0s3c1lRMlk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "ABC News & Headlines – Australian Broadcasting Corporation",
      "latestSinceUpdate": 2194
    },
    {
      "date": "Aug 22",
      "text": "Hezbollah said to be exploiting ceasefire to increase arms smuggling from Syria.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxNQ21mekFoVDJkaEt3TFhnRFY2VkU4S3Rjc3N5UXFNVDVVWGhKSWEtRjhtRS1CekRjVkRsSUZhZk0yOE1PU1AxdXNjWE5UNjIwWnlPVFdleWFOSVNvNXZEbThGN1I4d2JKYTh4WWw2T2tTcHJ4RlJ6QjRvbl85bDc0Y1BtZ05IM2hOelIzQkVMYW1MY0dseFRNZWdfS0MwazcwaFFaX1lzVFM4YzNtZUM1eVd1VFQxZUhLenhMendnaHRKVGs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2194
    },
    {
      "date": "Aug 22",
      "text": "IDF increases pace of destroying Hezbollah's terror infrastructure.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE03T3JuM3doY251TURQRURMX3BHc0FOX1BkR2xXZkozNUVrYnR3cU1zUDE4YkNwQlJwd01TT1Q1cm1UMkZUQ0R6OURnWVU4SV90WjBwV3hfYkR1TWloTEZKRkJCWDBiNFI1MEJvT19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2194
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
      "perspective": "Iran",
      "headline": "US Sanctions: A Declaration of War",
      "summary": "Iran views US sanctions as an act of war against all nations, indicating a strong stance against economic pressure. Despite this, Iran has granted passage to Iraqi oil tankers through the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "United States",
      "headline": "Hormuz as 'American Territory', Economic Pressure on Iran",
      "summary": "President Trump asserts the Strait of Hormuz as 'American territory' and threatens Iran's trade partners, signaling a shift towards economic pressure. The US military continues to facilitate oil transit through the strait.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "Israel",
      "headline": "Retaliation Against Iran for Hezbollah",
      "summary": "Former Prime Minister Bennett advocates for Israeli strikes on Iran in response to Hezbollah attacks. This perspective suggests a direct link between Hezbollah's actions and Iran, calling for escalated military response.",
      "tone": "strained",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Force Only Way to Compel Israeli Withdrawal",
      "summary": "Hezbollah's Nawaf Moussawi states that only force can compel Israel to leave Lebanon, indicating a continued commitment to military confrontation. Efforts to tame Hezbollah within Lebanon are reportedly stalling amid the Israel War.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    }
  ]
});

export default LATEST_SNAPSHOT;
