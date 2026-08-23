export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2186,
  "lastUpdated": "2026-08-23",
  "lastSyncedAt": "2026-08-23T15:50:32.906Z",
  "warDay": 177,
  "summary": "Tensions between the US and Iran are escalating significantly due to new US economic sanctions, which Iran has declared a 'declaration of war,' while regional conflict involving Israel and Hezbollah continues.",
  "lastNarrativeUpdate": "2026-08-23",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst escalating tensions."
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
        "militaryPower": 85
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
      "date": "Aug 22",
      "text": "Iran military leader vows Tehran ‘will not submit’ as US plans economic squeeze.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pMk05V3loTHpKTHJyOFBSd2RWS0JKM3djNnZpdzFZWVN5R0loZm9kTjRleFZKSU1WMEtyOTF6Z1ZZV0JFdmhPNEFGR2J5WXo1V3lOeVlWd0E1VURWbkZLVjU4SzZkaWxDWXBkZ19n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2186
    },
    {
      "date": "Aug 22",
      "text": "Iran declares new US sanctions a ‘declaration of war’ on all nations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQQWUwUFJ0aEd2bHliRWRFMVlDRjJ5MDhkclhZV0pORWp2TGtGR1VoOUdTeVJiU0JfZ3BIXzRXMDMxYXkxZ3hCWllmTUc0dTkzemh2VXF2aTJuVkhRNVJwQVRZXzZUdlNkMmRGWmdoY0F2ZzQ4aDFlbHRUY0QxRlFMNFZGZktzbndySFNNUkRKWld0NFZTRWNhWVN3MW1fWTRpMTVrbGM2SFhzRkM3akhkbHd5bTNIRFdQazRvNExR0gHDAUFVX3lxTFBDWmZ0QTF0aktHUXZZUUxwRkVpcUY5ekRWeTdVODZpMzh2SEFMdy05cnVSSXF6ekotWDJvd24tY0Nua1JiLUY2NTN6bHpSWUMwa1o2cDdhSTJqbkl6ZTVZM0FTLUd5aC1OY2M1b21yOWd2LWJ1d0dSa3YzdDNmNWJQZHVfSGQtLTVrOWo4TjcyYWxmZjNWdGg0Y09kRERaSEE0bTg4U18zNzlYZm5kVFg0YVEzTkJ1Tm42Sk9sT09lbXRiTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2186
    },
    {
      "date": "Aug 22",
      "text": "Iran warns any country cooperating with new US sanctions will be ‘considered an enemy’.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxQOTVWZW04Z21JN0NWU0l1Y3pUMHZaM3VBSnJkT2NXaTVkQW5DNFU0eHZHMGhnRllFYkpuTlpNTjhTV0s0WGNIMnZ4c0ZXMGR0Y1puRktfaV9EaHVoZk9hY1d2bVRNcndYTUpNZ3p3NjFCZGU1WHdwdGg0VGxldVBPQWJYVzRNLTY0eHIyQ0MzeVJHQnVwNmfSAZsBQVVfeXFMTmZseTlKSFViTjdfVWVoUHZMdm1Sd0VKcXk1ZzBDUlZSSkRzRzlkWEViTGt1VnZmNktkTjYtdWs0a3JFSXFmTG9BRktLQmR1REMzOS1Dd24wMUFSTE1QVjhlcGFDSHotUjVlZWY2QTdVMGpteGdmZmF1dzZXQlUzZ0R1V1VKbzBLb0JJQVo5QXFJbUh3SFBDTk9KZms?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2186
    },
    {
      "date": "Aug 22",
      "text": "Israel strikes southern Syria; Damascus condemns attack.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNdUlteHpodFpvY0RlTjBQVWdHWmFhTTAtU0VzVlRuY3hYRTA3NEFBSHcwN3pIR1ROYnBWVmFxWDVPTmVRcXZSaUM0YURHZHBmUDg0ekNFTDJ3NTd0S2NiR3loeDlXTlUzNzI1TjlKai1uNzh5TWRPeHJzd1UzNmM4TGRYLW1ET3ZnQ3hmeWNTNWF5ZVVReUtqTGFLdEtqVXZJWEw4RXk2TjE4YkFO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2186
    },
    {
      "date": "Aug 22",
      "text": "IDF increases pace of destroying Hezbollah's terror infrastructure.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE03T3JuM3doY251TURQRURMX3BHc0FOX1BkR2xXZkozNUVrYnR3cU1zUDE4YkNwQlJwd01TT1Q1cm1UMkZUQ0R6OURnWVU4SV90WjBwV3hfYkR1TWloTEZKRkJCWDBiNFI1MEJvT19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2186
    },
    {
      "date": "Aug 22",
      "text": "U.S. military says it aided passage of 660 million barrels of oil through Strait of Hormuz since May.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxPU2tmbVlWOHdGT19tdnFrRnRSMzY4ZzJtUTNhV0xHVlZlOERZVGJtaHlMR3ZVT2IySVJfamFjS3JBUFlXZ1QxUnF4VzJWdnNacDEyeGp2a3p0a0pGS3RINTZZNTJIQ1FFX0hhWlBENWFSM2VPMlhvX21rOWZEalR6Ump2dFdrZEE4bkxZTWxneFXSAZYBQVVfeXFMTlByT2dSRUliWjY3SG9jU1MyNzkyVDJsNHhERkExdU8wSzAwcXR4YXVtMWY3dld3bzByRWVndFB1TnV0LU54eWZQNDduTmFaaG5jNl9QdFhaeXA5aWd0eGlTc3lRVUI3VnYzRG1kZnhNQm1fT0J0NVJ5WGRiTzNZT0FWMDZydFhsVG1UT0c0eWk4WVVqa09R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2186
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
