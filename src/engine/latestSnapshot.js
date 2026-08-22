export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2142,
  "lastUpdated": "2026-08-22",
  "lastSyncedAt": "2026-08-22T17:30:00.000Z",
  "warDay": 176,
  "summary": "The US-Iran conflict continues with direct military strikes, escalating economic pressure, and heightened tensions surrounding the Strait of Hormuz, while regional and global allies monitor the situation.",
  "lastNarrativeUpdate": "2026-08-22",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is active; direct military engagements and economic warfare are ongoing."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Aug 21",
      "text": "US gas prices are up nearly a dollar from a year ago, with traffic through the Strait of Hormuz remaining low.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5NQkZSTmhtZGZDNVQ0bTh4WHI2WUdEOTVSTVh3N2tkcl9YSHRtdW5wN0JlSzV2SnpJMWJ5eGlDTDZpVzQ5ZG9OTEN6VmEwUW9QRjAtNGc3b1ozMW4wd3l1OXhrZkZrOEJMMGU0UUJR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2142
    },
    {
      "date": "Aug 21",
      "text": "Iran declares US sanctions a 'declaration of war' on all nations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQQWUwUFJ0aEd2bHliRWRFMVlDRjJ5MDhkclhZV0pORWp2TGtGR1VoOUdTeVJiU0JfZ3BIXzRXMDMxYXkxZ3hCWllmTUc0dTkzemh2VXF2aTJuVkhRNVJwQVRZXzZUdlNkMmRGWmdoY0F2ZzQ4aDFlbHRUY0QxRlFMNFZGZktzbndySFNNUkRKWld0NFZTRWNhWVN3MW1fWTRpMTVrbGM2SFhzRkM3akhkbHd5bTNIRFdQazRvNExR0gHDAUFVX3lxTFBDWmZ0QTF0aktHUXZZUUxwRkVpcUY5ekRWeTdVODZpMzh2SEFMdy05cnVSSXF6ekotWDJvd24tY0Nua1JiLUY2NTN6bHpSWUMwa1o2cDdhSTJqbkl6ZTVZM0FTLUd5aC1OY2M1b21yOWd2LWJ1d0dSa3YzdDNmNWJQZHVfSGQtLTVrOWo4TjcyYWxmZjNWdGg0Y09kRERaSEE0bTg4U18zNzlYZm5kVFg0YVEzTkJ1Tm42Sk9sT09lbXRiTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2141
    },
    {
      "date": "Aug 21",
      "text": "Trump threatens Iran’s trade partners and states he views the Strait of Hormuz as 'American territory'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxPS0VSTm1uS2NXQnFkRUhpVEFSTGNFUTlMdXhkT01MNTVBT29Hbk5ZbHd1a1pWRVEyOTN5N1BCc0I4eG9JeDRCMHE1ckpOUmlYTzcxVi1mNkc2VnZtN2c4XzRaU0I5UTF0TjlySVdLekVYLUktb3hZZ2hzUjlqd2VyRDJnaVMyTWQ3SVFkSXd2NHZZMnM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2142
    },
    {
      "date": "Aug 21",
      "text": "Former Israeli PM Bennett suggests Israel should strike Iran in retaliation for Hezbollah attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOVm5RWHRhUm1XZV9BTno5Ym9IUnJRQ1k2R0M3RW9sb0xRYlhzU1JfaW1RRzlWRUYxdFQ2TmE2X2o5M1R2WDNhNVBJWXVvdDF1cTVyZFVZTWdmdTZwSWluZ1JRR0x1MWtMOEFETFpmSzVJdEw5UDllNXVwZFV3SkUwd0dRa0hxYTB0LS1aNUJFNjIwWTNsWEMySXhZZy1zMUtz0gGmAUFVX3lxTE01TTIwbzBrenNMcmp6eV9ZN1BoY1A5Q2Y4VkNTVG4yeWhPSlFMU01uWTZoLURQRUI4REpVaHBkZXgtWmNYRHFfOFdXVlpNV1pxZExRNmFyczJvbnM5VEJGUkdTN2gyYzk2MGRoakVrOHlMVHFmc0taRlV5S3lZWktwRkJhUlRKS19HUU01ckgyOHJacktLc1VQdGs4MlpYQkZMbGpyOGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2142
    },
    {
      "date": "Aug 21",
      "text": "Iran launches missile and drone attacks across the Gulf, while Israel strikes Tehran infrastructure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQYmFtdmtoamYyU2taWm5uSUp0LWxRR3p3bGszYjhPT0tnNmoweWI3eWtjcnlmRzRqTmtJdWRYTU55Ym5zY0xkTVJOdlRSUVduWjVSSGRndlJwSThXSU9qOW50ejUxWTNjRUZPbkpxZHZBd1RoVUV0V2gtSmZycEZTeFlfejZfOEtNbjYxUF9VYnpHTURxZ3E2dkU3Z1FQOUtpZFM2MVdRdnNGc25RajFhdzlnQlZzbVh4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2142
    },
    {
      "date": "Aug 21",
      "text": "The Pentagon reports an additional 60 wounded in the Iran war casualty count.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxOYVc5aVJ1N00yU0dGYUtNQm9yM0VMR1lwaW5qaTNuOHJ4czlYWXB2UGd5MlJ3N3djbFVVNUVOQUVuUHl1bkZxeVMtM1lzWjZXYmcwRUdQWkRSWnVqbG02VW9lYkFaaW8waEdmVjNWMXUwMFFNekRld2lleTlTR2FxdHFYSk9tUjBnRnBEYTVqSkc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "stripes.com",
      "latestSinceUpdate": 2142
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
      "perspective": "US Administration",
      "headline": "Economic Pressure on Iran Intensifies Amidst Stalled Talks",
      "summary": "The US is implementing a 'crushing economic operation' against Iran, threatening its trade partners, while signaling a willingness to reopen talks 'at some point'. The Pentagon is also considering a reduced military presence in the Gulf post-conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Iran",
      "headline": "Iran Dismisses US Economic Warfare, Demands Conditions for Hormuz Reopening",
      "summary": "Iran dismisses Trump’s 'economic D-Day' as a distraction and asserts that the Hormuz Strait will remain closed until the U.S. meets interim deal conditions. Tehran also claims the war will be over 'very soon'.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Gaza Strikes, Considers Retaliation Against Iran",
      "summary": "Israel continues to pound Gaza, actions which mediators say undermine peace efforts. A former Israeli official suggests striking Iran in retaliation for Hezbollah attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Affirms Force as Sole Means to Compel Israeli Withdrawal",
      "summary": "Hezbollah's Nawaf Moussawi states that only force can compel Israel to leave Lebanon, indicating a continued stance of resistance.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    }
  ]
});

export default LATEST_SNAPSHOT;
