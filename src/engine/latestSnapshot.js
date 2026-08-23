export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2175,
  "lastUpdated": "2026-08-23",
  "lastSyncedAt": "2026-08-23T10:32:31.879Z",
  "warDay": 177,
  "summary": "The conflict in West Asia is escalating with US-Israel strikes on Iran, new US economic sanctions, and heightened tensions around the Strait of Hormuz, while Iran vows defiance and threatens military response.",
  "lastNarrativeUpdate": "2026-08-23",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst escalating conflict."
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
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
      "date": "Aug 23",
      "text": "Iran warns regional neighbors against aligning with US economic sanctions.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2175
    },
    {
      "date": "Aug 22",
      "text": "Iran's military leader vows Tehran will not submit to US economic pressure.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pMk05V3loTHpKTHJyOFBSd2RWS0JKM3djNnZpdzFZWVN5R0loZm9kTjRleFZKSU1WMEtyOTF6Z1ZZV0JFdmhPNEFGR2J5WXo1V3lOeVlWd0E1VURWbkZLVjU4SzZkaWxDWXBkZ19n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2175
    },
    {
      "date": "Aug 22",
      "text": "Iran declares new US sanctions a 'declaration of war' on all nations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQQWUwUFJ0aEd2bHliRWRFMVlDRjJ5MDhkclhZV0pORWp2TGtGR1VoOUdTeVJiU0JfZ3BIXzRXMDMxYXkxZ3hCWllmTUc0dTkzemh2VXF2aTJuVkhRNVJwQVRZXzZUdlNkMmRGWmdoY0F2ZzQ4aDFlbHRUY0QxRlFMNFZGZktzbndySFNNUkRKWld0NFZTRWNhWVN3MW1fWTRpMTVrbGM2SFhzRkM3akhkbHd5bTNIRFdQazRvNExR0gHDAUFVX3lxTFBDWmZ0QTF0aktHUXZZUUxwRkVpcUY5ekRWeTdVODZpMzh2SEFMdy05cnVSSXF6ekotWDJvd24tY0Nua1JiLUY2NTN6bHpSWUMwa1o2cDdhSTJqbkl6ZTVZM0FTLUd5aC1OY2M1b21yOWd2LWJ1d0dSa3YzdDNmNWJQZHVfSGQtLTVrOWo4TjcyYWxmZjNWdGg0Y09kRERaSEE0bTg4U18zNzlYZm5kVFg0YVEzTkJ1Tm42Sk9sT09lbXRiTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2175
    },
    {
      "date": "Aug 22",
      "text": "Israel conducts strikes in southern Syria, drawing condemnation from Damascus.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNdUlteHpodFpvY0RlTjBQVWdHWmFhTTAtU0VzVlRuY3hYRTA3NEFBSHcwN3pIR1ROYnBWVmFxWDVPTmVRcXZSaUM0YURHZHBmUDg0ekNFTDJ3NTd0S2NiR3loeDlXTlUzNzI1TjlKai1uNzh5TWRPeHJzd1UzNmM4TGRYLW1ET3ZnQ3hmeWNTNWF5ZVVReUtqTGFLdEtqVXZJWEw4RXk2TjE4YkFO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2175
    },
    {
      "date": "Aug 22",
      "text": "West Asia conflict escalates with US-Israel strikes hitting Iran and an attack on the US Embassy in Riyadh.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2175
    },
    {
      "date": "Aug 22",
      "text": "Questions arise regarding US claims of deeper control over the Strait of Hormuz, as Iran grants passage to Iraqi oil tankers.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE9YWFAxQ1lEaVZncEZ2R2h1Ullsb05UblA5NXN5aFZPa2wzUE4wQUd5X0lWbEpWV0VNeW1NQVNDY2d2YW45dUFZNUx0cEFzR0JBbWdwQUZYak93dTBtME9qOTRMcm93Z2ZaeXRiTDlYc2Zqd3hSMC1j?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 2175
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
