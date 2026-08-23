export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2203,
  "lastUpdated": "2026-08-23",
  "lastSyncedAt": "2026-08-23T22:51:15.174Z",
  "warDay": 177,
  "summary": "The US and Iran are in an escalating conflict marked by US sanctions, Iranian defiance, and military strikes, while a fragile ceasefire in Lebanon is being exploited amidst ongoing Israel-Hezbollah clashes.",
  "lastNarrativeUpdate": "2026-08-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 25,
    "summary": "A ceasefire in Lebanon, reportedly being exploited by Hezbollah for arms smuggling, remains fragile amidst ongoing Israeli military actions."
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
        "militaryPower": 80
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
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "text": "Iran military leader vows Tehran ‘will not submit’ as US plans economic squeeze.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pMk05V3loTHpKTHJyOFBSd2RWS0JKM3djNnZpdzFZWVN5R0loZm9kTjRleFZKSU1WMEtyOTF6Z1ZZV0JFdmhPNEFGR2J5WXo1V3lOeVlWd0E1VURWbkZLVjU4SzZkaWxDWXBkZ19n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2203
    },
    {
      "date": "Aug 22",
      "text": "Tehran says US sanctions ‘declaration of war’ on all nations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQQWUwUFJ0aEd2bHliRWRFMVlDRjJ5MDhkclhZV0pORWp2TGtGR1VoOUdTeVJiU0JfZ3BIXzRXMDMxYXkxZ3hCWllmTUc0dTkzemh2VXF2aTJuVkhRNVJwQVRZXzZUdlNkMmRGWmdoY0F2ZzQ4aDFlbHRUY0QxRlFMNFZGZktzbndySFNNUkRKWld0NFZTRWNhWVN3MW1fWTRpMTVrbGM2SFhzRkM3akhkbHd5bTNIRFdQazRvNExR0gHDAUFVX3lxTFBDWmZ0QTF0aktHUXZZUUxwRkVpcUY5ekRWeTdVODZpMzh2SEFMdy05cnVSSXF6ekotWDJvd24tY0Nua1JiLUY2NTN6bHpSWUMwa1o2cDdhSTJqbkl6ZTVZM0FTLUd5aC1OY2M1b21yOWd2LWJ1d0dSa3YzdDNmNWJQZHVfSGQtLTVrOWo4TjcyYWxmZjNWdGg0Y09kRERaSEE0bTg4U18zNzlYZm5kVFg0YVEzTkJ1Tm42Sk9sT09lbXRiTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2203
    },
    {
      "date": "Recent",
      "text": "West Asia conflict escalates as US-Israel strikes hit Iran, US Embassy attacked in Riyadh.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2203
    },
    {
      "date": "Recent",
      "text": "Iranian parliament advances plans for Hormuz service fees.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQOU1LUHpQeDVTWHlVQ25TbER0TExUcV9wcGIxY241UXhJeHNVTWFEVjQwSVpxTjBPT0h3b0FzT0FQX29Lc1o4c0VJRkt3c3BFYTIwUWdGbVFhb2I5b2FIYk1LMl9rejhSdk5KWHhNTGtWd3B5M0dzbkNnTlpyMUFxV2FfMV93R3Z4aHBOTmZGMUUwVk9lRDRlTnRRV3hMRHdUS1JsazFLYlRkaGN4OGtPNm9XQVpOVmJZVXBF0gHAAUFVX3lxTE9rcEFXUnZQM3pvYThzODM5SEQ1eFBVREdFN3RwNWxJUnRDYS1BcllTWkJ3TzVmeWl5VldHS25YSkFaY21ZTFg5SkgzX3pnODJ2N3k1cmRSbDNMdnBCeF91SmxpdDR1aDdlNGpqOWh0S056UUtxTmxULXRQQjctRVY3MkdtYTF4UlhKSEJXUmRZR3ptblNTcXlFOGdCZUtmT25pUVBTYjEtT0hZamNZTUc2a1B6eUV2QUpMTTktcmZUag?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2203
    },
    {
      "date": "Recent",
      "text": "Iran’s hardline new security chief issues stark threat to Gulf states.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE10NWduUk9rVWtZSTJ4a2k3clBvRGdIQlFLaWFyM1VqR0RDZTE2QnhfUHRleWh3T2oxR2k3Y19mVi1EcURxSllxd0lEblFoNklOSS0waGpqdGM0bjdWUm1Kamt3Tm9GaTNBbWVlMnJB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2203
    },
    {
      "date": "Recent",
      "text": "Pentagon adds 60 wounded to Iran war casualty count.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxOYVc5aVJ1N00yU0dGYUtNQm9yM0VMR1lwaW5qaTNuOHJ4czlYWXB2UGd5MlJ3N3djbFVVNUVOQUVuUHl1bkZxeVMtM1lzWjZXYmcwRUdQWkRSWnVqbG02VW9lYkFaaW8waEdmVjNWMXUwMFFNekRld2lleTlTR2FxdHFYSk9tUjBnRnBEYTVqSkc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "stripes.com",
      "latestSinceUpdate": 2203
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
