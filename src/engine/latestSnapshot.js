export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2468,
  "lastUpdated": "2026-09-22",
  "lastSyncedAt": "2026-09-22T11:25:35.464Z",
  "warDay": 207,
  "summary": "The conflict between Iran, the US, and Israel continues with escalating threats, ongoing strikes, and attacks on shipping in the Strait of Hormuz, while a fragile ceasefire holds between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-09-22",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 10,
    "summary": "A ceasefire between Israel and Hezbollah is reported to be in effect, but recent strikes and targeting incidents suggest it is fragile and localized."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Sep 22",
      "text": "Iran warns of a 'painful' response if the US launches new attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNd3ZKbm1kRkNueWdYR1E0bUdlUVVNX19EbmVjc3lCWFVGdjk0VldhQTI2c0dBSWRhSEQ4MHlseVI0QWt5aEJ2LUdqNFA5WHQ3RTVwUzhDV0QwZzFMRUJNeHZIc2JxZTVLQlM3endVVnBORHdBWnB0YVFvWDdHUG1NS05CejVoYUF3U0IyeWZWUjM2ZjU2UzZhb0hPcmJna2h4SVlfbTl3ckl5VlRRd3liSFEwQVEtMjNYRDM5VtIBwgFBVV95cUxPWVpKNDFnRWU2NHZrV2xwY0tFWnp3NTlOeElWTlpSM01jY2VZUFFNMmYyRHBMWU1tTlgydFhaYXRmN0xic0kyS1B5SU10Yi1RWUNZSVZDQXRmbUQ3c3c2dDhDRmw1eWhxYXU1ZHdJZWpwcnAtR1FJM0JFLS02bnpPSlhrOVpKdUMxOU5faTdFUTh6SWJXZEFEbl8ydmEzM3J2STZZc185dHh3RVExRG1kSE80czczT2JDWHAyQVc0eTVBUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2468
    },
    {
      "date": "Sep 22",
      "text": "Yemeni forces (Houthis) report targeting with drones and fighters.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2468
    },
    {
      "date": "Sep 22",
      "text": "Iran's Rezaei states conditions for ending the war have been sent to the US via Doha.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNS0tMRnMtZVNISzhaMjNjZmJTbjBacUhkQS1yLURFSzY4bEJ0SXk5a3ItWjRNV09qXzZZa0Y2cklJMG5nVTZNZ0pNbDdGRnhSSzJSenF6MVBYTG9BZlhMemdnQVdqVUc3U29kdGRQN3l5R1BfTnpFRDBDTUNPOXVmLWduYklpWEkxZVZ3cFFnQlVWbFpja1FhMWl1UDZpRHZsZmZ5anRFenJlc0g3dTdVd000bWVCbVdfalBpRDlna9IBxAFBVV95cUxQMVJTWmQ5YVJYRE5vUERTYk8tR1Z0bWxWTWRVdnF5Y3g5Qy1IdjVOVHBzZ3lLdm9zZWhDRC1GOWNKcHBWQVZEa3JraXI0T0h0YjB4eHNIR3NwMGlfSnNBRHhuaXVhdjJGaVpmbVNSX1FaWVBoSk9NekE1VkZ4SUlnRGJzZ3JYeDRVdTFzemp4N2U4WWU0QmJVRU9aNVZMVGhBOGRONmlkN1FIRU9zUHgzcUQwamhSNmJhaEl6WFRVMlJaRUFF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2468
    },
    {
      "date": "Sep 22",
      "text": "An investigation into US-Israeli strikes on Tehran neighborhoods reveals devastating civilian harm.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2468
    },
    {
      "date": "Sep 22",
      "text": "Iran’s military command indicates it has been informed of US plans to resume strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxPaHk4MGQybWQzOXNVaUViSmJxVjJpSGozUjBzdEo0d0pLSVV6czdsRm9HRWZEVlo4ZDRPN083RzhndTU5cU5yWkpSVnI2R05qdGdjaW5XWmRlWXZDWUJRTUZWSmt5YUtwXzAxMDhnUk5qRTBRWW1kbWxXX28yal9zS1lPMFYwblQ0b0swOGJWQWQtN2g4SmM1SHNMSnMzUVZ4OUx1eDZ30gGrAUFVX3lxTFBpcjVGRXJPaGpFU1o1MUx6UkRmMC1kTEhNbWlTMVNLVjZ6SlhlajdIODIxUkRoN0lkaVpsczhCcy1mZmhqSmNBS29iYXFiVE1Jd3BGb080OUZBZ0NIUmtkY3Rsd3ZNUUx5aVB3RmdJcDVJYXRaZ2RPWVg0UmFnOGV3RzdpZDBZYVRsaHVCbDB2Q3cwRmp3WjBRWWZGMThMRjN4OXBLM0dFbnpGaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2468
    },
    {
      "date": "Sep 22",
      "text": "Oil prices rise as shipping risks persist in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2468
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
      "status": "unavailable"
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
