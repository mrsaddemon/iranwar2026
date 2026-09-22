export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2471,
  "lastUpdated": "2026-09-22",
  "lastSyncedAt": "2026-09-22T22:15:58.029Z",
  "warDay": 207,
  "summary": "Tensions remain high between the US and Iran, with ongoing threats of renewed strikes, an expired deal deadline, and Iran offering to reopen the Strait of Hormuz under specific conditions.",
  "lastNarrativeUpdate": "2026-09-22",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect; tensions and threats of renewed conflict persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
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
        "precision": 0.85,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 90,
    "oilDisruption": 70,
    "tradeImpact": 67,
    "sanctionsPressure": 68,
    "globalPressure": 88,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Sep 21",
      "text": "Iran reportedly says it can reopen Strait of Hormuz within 7 days if U.S. eases military pressure.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE56cTJuZUVZVG1nNHo0SVU2eGgxQzNqbF9aWWhycHVZZmJNTDE5UkJSV3YzVDFVb042YTFOc08xd0M4cUo2MjFtakxyZVUxQ3drNnFKb182cU1JSGhtQ05vd2NTaDhHTXMyYktKcEdR0gFzQVVfeXFMUGpLbzc2YkZoQWFzOUFNRVNqejU0SF9lY3Rfa0lFNlFIUzR5ZUdrRE9VUDBjWllFSkU5YndMMU5kM2RCbDQ5UmVVR0NLSGtuY2ZvZWk1VXBBSVBDRWlTNHlwcjdEWUVycXd1QWVxLWtIV1RCTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2471
    },
    {
      "date": "Sep 21",
      "text": "Tehran warns of a 'painful' response if the US launches attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNd3ZKbm1kRkNueWdYR1E0bUdlUVVNX19EbmVjc3lCWFVGdjk0VldhQTI2c0dBSWRhSEQ4MHlseVI0QWt5aEJ2LUdqNFA5WHQ3RTVwUzhDV0QwZzFMRUJNeHZIc2JxZTVLQlM3endVVnBORHdBWnB0YVFvWDdHUG1NS05CejVoYUF3U0IyeWZWUjM2ZjU2UzZhb0hPcmJna2h4SVlfbTl3ckl5VlRRd3liSFEwQVEtMjNYRDM5VtIBwgFBVV95cUxPWVpKNDFnRWU2NHZrV2xwY0tFWnp3NTlOeElWTlpSM01jY2VZUFFNMmYyRHBMWU1tTlgydFhaYXRmN0xic0kyS1B5SU10Yi1RWUNZSVZDQXRmbUQ3c3c2dDhDRmw1eWhxYXU1ZHdJZWpwcnAtR1FJM0JFLS02bnpPSlhrOVpKdUMxOU5faTdFUTh6SWJXZEFEbl8ydmEzM3J2STZZc185dHh3RVExRG1kSE80czczT2JDWHAyQVc0eTVBUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2471
    },
    {
      "date": "Aug 17",
      "text": "Deadline to reach US-Iran deal expires, with Trump threatening Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2471
    },
    {
      "date": "Sep 22",
      "text": "Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2471
    },
    {
      "date": "Sep 22",
      "text": "Iran’s military command states it has been informed US plans to resume strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxPaHk4MGQybWQzOXNVaUViSmJxVjJpSGozUjBzdEo0d0pLSVV6czdsRm9HRWZEVlo4ZDRPN083RzhndTU5cU5yWkpSVnI2R05qdGdjaW5XWmRlWXZDWUJRTUZWSmt5YUtwXzAxMDhnUk5qRTBRWW1kbWxXX28yal9zS1lPMFYwblQ0b0swOGJWQWQtN2g4SmM1SHNMSnMzUVZ4OUx1eDZ30gGrAUFVX3lxTFBpcjVGRXJPaGpFU1o1MUx6UkRmMC1kTEhNbWlTMVNLVjZ6SlhlajdIODIxUkRoN0lkaVpsczhCcy1mZmhqSmNBS29iYXFiVE1Jd3BGb080OUZBZ0NIUmtkY3Rsd3ZNUUx5aVB3RmdJcDVJYXRaZ2RPWVg0UmFnOGV3RzdpZDBZYVRsaHVCbDB2Q3cwRmp3WjBRWWZGMThMRjN4OXBLM0dFbnpGaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2471
    },
    {
      "date": "Sep 22",
      "text": "Oil Prices Fall for Fourth Day as Supply Concerns Ease.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxOcEZWRkFoeVdVQnQtNnE2OXRQM2ViMkhkdk41di05ZWhjQXgwRGJFaW12REM2ZnVxMl9zYUR6Vlh2NVVJRFk4X2RUUk9HRXZDUVVHWmw0YjRlcDFsTTlwQjYxZGlwRnVXTUUxTnU5ZzFXMy02Ri1TNkE3Y1ZTa29yWFR2VVZoYWQ0eEttX081M0w5bkpIZ1FmNFdOOGNINWR3LW9N?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WSJ",
      "latestSinceUpdate": 2471
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
      "headline": "Iran warns of 'painful' response and counteroffensive readiness",
      "summary": "Iran maintains a defiant stance, threatening severe retaliation for any new US attacks and asserting readiness for a counteroffensive, while also signaling conditions for potential talks.",
      "tone": "defiant",
      "latestSinceUpdate": 2466
    },
    {
      "perspective": "US/Israel",
      "headline": "US-Israeli strikes face war crimes allegations amid ongoing operations",
      "summary": "US and Israeli forces continue military operations, facing international scrutiny over alleged war crimes and civilian casualties, amidst ongoing threats from Iran and its proxies.",
      "tone": "strained",
      "latestSinceUpdate": 2466
    },
    {
      "perspective": "Regional/Economic",
      "headline": "Hormuz crisis threatens LNG projects, Qatar rules out bypass",
      "summary": "The crisis in the Strait of Hormuz continues to disrupt global energy markets, with Qatar reporting delays in LNG projects and ruling out alternative transit options.",
      "tone": "anxious",
      "latestSinceUpdate": 2466
    }
  ]
});

export default LATEST_SNAPSHOT;
