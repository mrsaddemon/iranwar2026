export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2195,
  "lastUpdated": "2026-08-23",
  "lastSyncedAt": "2026-08-23T19:38:52.457Z",
  "warDay": 177,
  "summary": "The West Asia conflict is escalating with US-Israel strikes on Iran, US economic pressure, and Iran's defiance, while tensions rise around the Strait of Hormuz and Hezbollah exploits a fragile ceasefire in Lebanon.",
  "lastNarrativeUpdate": "2026-08-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "A ceasefire appears to be in effect in Lebanon but is actively being exploited by Hezbollah for arms smuggling and challenged by increased IDF operations."
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
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "text": "Iran's military leader vows Tehran 'will not submit' as US plans economic squeeze.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pMk05V3loTHpKTHJyOFBSd2RWS0JKM3djNnZpdzFZWVN5R0loZm9kTjRleFZKSU1WMEtyOTF6Z1ZZV0JFdmhPNEFGR2J5WXo1V3lOeVlWd0E1VURWbkZLVjU4SzZkaWxDWXBkZ19n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2195
    },
    {
      "date": "Aug 22",
      "text": "West Asia conflict escalates as US-Israel strikes hit Iran, and the US Embassy is attacked in Riyadh.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2195
    },
    {
      "date": "Aug 22",
      "text": "Israel strikes southern Syria; Damascus condemns attack.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNdUlteHpodFpvY0RlTjBQVWdHWmFhTTAtU0VzVlRuY3hYRTA3NEFBSHcwN3pIR1ROYnBWVmFxWDVPTmVRcXZSaUM0YURHZHBmUDg0ekNFTDJ3NTd0S2NiR3loeDlXTlUzNzI1TjlKai1uNzh5TWRPeHJzd1UzNmM4TGRYLW1ET3ZnQ3hmeWNTNWF5ZVVReUtqTGFLdEtqVXZJWEw4RXk2TjE4YkFO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2195
    },
    {
      "date": "Aug 22",
      "text": "Trump views the Strait of Hormuz as 'American territory' amid US Navy efforts to secure oil passage.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxPS0VSTm1uS2NXQnFkRUhpVEFSTGNFUTlMdXhkT01MNTVBT29Hbk5ZbHd1a1pWRVEyOTN5N1BCc0I4eG9JeDRCMHE1ckpOUmlYTzcxVi1mNkc2VnZtN2c4XzRaU0I5UTF0TjlySVdLekVYLUktb3hZZ2hzUjlqd2VyRDJnaVMyTWQ3SVFkSXd2NHZZMnM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2195
    },
    {
      "date": "Aug 22",
      "text": "Hezbollah is reportedly exploiting a ceasefire to increase arms smuggling from Syria, while the IDF increases destruction of its infrastructure.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxNQ21mekFoVDJkaEt3TFhnRFY2VkU4S3Rjc3N5UXFNVDVVWGhKSWEtRjhtRS1CekRjVkRsSUZhZk0yOE1PU1AxdXNjWE5UNjIwWnlPVFdleWFOSVNvNXZEbThGN1I4d2JKYTh4WWw2T2tTcHJ4RlJ6QjRvbl85bDc0Y1BtZ05IM2hOelIzQkVMYW1MY0dseFRNZWdfS0MwazcwaFFaX1lzVFM4YzNtZUM1eVd1VFQxZUhLenhMendnaHRKVGs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2195
    },
    {
      "date": "Aug 22",
      "text": "Pence states the US must prepare for 'inevitable' action against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxPV19ScXJMckRaZWxlYl9rTC0tSXJSTlNxMU1fSHN3OTFVNm82LU1hTE1hal83MHNjUkRJVnJWLW1HbERyNHMxUzZScm5ZcHBCeXhuNWFad1hENlY5eG81cU92SXExUUM0ZkdFcmFlZzFBMDl3bTZQN3lQWkpnc3FPQmd2Q1c4WGFNdHfSAY8BQVVfeXFMT0VmSlk3Tk1LVjFQYWlQVVRVNW1CazRidXdKWmlMazZPNG53YXcxLVNCeXZpSXh3Zk9VWmFTam1KWUJUOVh5QVFtNzBXT3dyWVJ6XzZJeGNfT2VKSU9oZkJqQThrMFVjdFo3Z0pLNlQ4UG1ZeWFxNDFCQ3owa1lvU0tlNnV1SWZFTXhKbUNyREE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 2195
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
