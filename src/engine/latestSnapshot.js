export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1321,
  "lastUpdated": "2026-07-16",
  "lastSyncedAt": "2026-07-16T12:04:21.190Z",
  "warDay": 139,
  "summary": "The US and Iran have escalated military actions following the collapse of a ceasefire, with renewed strikes, a US blockade on Iranian ports, and threats exchanged, leading to a decline in Strait of Hormuz oil shipments.",
  "lastNarrativeUpdate": "2026-07-16",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.9,
    "durationDays": 1,
    "summary": "A previously active ceasefire between the US and Iran has collapsed, leading to renewed hostilities and a US blockade."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 72
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 88,
    "oilDisruption": 75,
    "tradeImpact": 70,
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
      "date": "Jul 15",
      "text": "US says new strikes on Iran aimed at protecting vessels in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAxVGZoUVBJNUtEYi1ONDBNWDZnX1o3ZTVLblF5RkY0dzR0VG1NRE5ZQzd1VHFTU3FDVnhIRENicjJIalVjRElNTjBtV0pfMVd3QVJMazBCMkZDZVNpRGZfNjdTdWJkcnZWT2VwVWd3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1321
    },
    {
      "date": "Jul 15",
      "text": "US resumes blockade on Iran and launches strikes after attacks in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxQVHY4TmVKS1hoUTY1cTVwYXNmX255SnU0R1h2SE16dDV2aUxhcUdSYklSWGVXUlduX1RHbkowT2dyUWdpOWlTM3F0RWtvYW1MRlpTZm81NS1WU1QyMVZ4aUFFRVBQMmIwb01wcDJSbC1iTEllMExxX2p4VHhyZ3NGdUFzeVlPdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1321
    },
    {
      "date": "Jul 15",
      "text": "Iran warns Strait of Hormuz is an 'unbreakable red line' as US expands strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1RWk1Qa1dMb0Y3cjlkWWtFUFpPQzhEMnk4N0lFRmswd2t1R1F0Yi1oS1Z6TUJFQ0xpRzZPcGd3Yi1ndU5YYlk3ZjRJYkJxRVkxdmlPU2RxY052ekFOWWc5NDd3LTJLMmx5MkdmZ293?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1321
    },
    {
      "date": "Jul 15",
      "text": "Iran threatens to 'crush' infrastructure if US attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOU0UzM1RqVEZOZDY5Z3RMcDN4UEpaejlVUnBZOW51azFzWmNaZEVtTHJSdThpTnYwbmlzRjd2Sno0SjZKdHFyYU5JZmJyMzFoeWZLZTVGVUsydVJFZ0MxVGlMVVY0NlpVaW5TMENxSGdTZ2NLYlZtZUdXTVZYVU1zQkZuNkFLNnFFQjVGbUpOUDZremQ1SHg1UTZVclpWSVQxa2ZpNDJ1N0dnVXFMX0NqT0JvaUhGMkFoc1dv0gHAAUFVX3lxTFB1U0ZRVHh2cWdJMmN4MGlmakxadUctVXhxNFZpR05SZGtYNEhyakRKT0NYTXBhSDhmYnpZYzhscS1lRy0wTWVmR3pJenZtQXB3VkNZM0szaWxoYlY4dkwxTXJhVEpHdFdiV2dqcFVEQ3NUNWlkclZjTU5hNExJZzM4VmhFTDlMVDNJV2RySk53dlVEVmZFak1VdTYwWV9aaEFILThmdHRxc3phV1ZuZmxGUTdsQ2hOeFZZbmJGMzNqSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1321
    },
    {
      "date": "Jul 15",
      "text": "US Fifth Fleet targeted in Bahrain, says Iran, in latest exchange of strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxQbjlLV08xTHJxX0JZLTJkRE1DaFV6WFRsMWwxeXRoZWROVHZJQ2hhUU9UTjhBd3Vld0h1azluWkJFM1ZzM2gtS3cyZXNqM1V6SnA2aDlPNUVNQ3dTMzVQV0JKaVNaUU9DcjRfZ3JNSWV0WkRvWWRxOE4wS1l4a1dremtzUUFoaFJlaVhVMFV2dXdNX2ZQdXpLRWdGeDJLTl8ycUhIaHowUktSTUx0ZUptcFR4clp5aWJla2UycHJHME00M3lKYVRGNVl5QnlXZmEtV013?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1321
    },
    {
      "date": "Jul 15",
      "text": "Strait of Hormuz oil shipments fall toward pre-peace deal levels as war reignites.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi1AFBVV95cUxQNGw2YXJ2anlOMDdNc1F4amtXY3ZYeXo4S0l0dVVzNGI3RzM5eGhQQzZnZjdGWnJIUDFDYVNuUXpBWlpRUTZNWl96Unoxbl9yTG9fXzlGMU8xU1lNVkRLMldLX2IzajhUUTRHSjd6NjdHdnlrZXBXVFhlS016NUZCVkNScHFmOGdHWERLNkM0VjZEdUctcndneXZpUkFraURCeVJ4YUgyUkFIODFsM2hVX0huUWEwTS1rYWRZby1WTTNGTE9sUmtZZlozZFNQRFZLZGpnVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo Finance",
      "latestSinceUpdate": 1321
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
      "perspective": "US/Western",
      "headline": "US Blockade and Strikes Aim to Protect Shipping in Hormuz",
      "summary": "The United States has reimposed a naval blockade on Iranian ports and launched new strikes, citing the need to protect vessels in the Strait of Hormuz following Iranian attacks. This action aims to restore stability and deter further aggression in the critical waterway.",
      "tone": "defiant",
      "latestSinceUpdate": 1316
    },
    {
      "perspective": "Iranian",
      "headline": "Iran Responds to US Aggression, Targets US Fifth Fleet",
      "summary": "Iran has responded to US aggression, claiming to have targeted the US Fifth Fleet in Bahrain amidst escalating exchanges of strikes. Iranian cyberattackers have also reportedly tracked US military personnel, indicating a multi-faceted response to the renewed blockade.",
      "tone": "defiant",
      "latestSinceUpdate": 1316
    },
    {
      "perspective": "Israeli",
      "headline": "IDF Intensifies Operations Against Hezbollah Infrastructure",
      "summary": "The IDF is actively engaged in destroying Hezbollah infrastructure in southern Lebanon, including strongholds, as part of ongoing efforts to neutralize threats. Concurrently, Lebanese security has detained an alleged Israeli spy within Hezbollah, highlighting intelligence operations.",
      "tone": "strained",
      "latestSinceUpdate": 1316
    },
    {
      "perspective": "Global Economic",
      "headline": "Strait of Hormuz Disruption Impacts Oil Shipments",
      "summary": "The renewed conflict and US blockade in the Strait of Hormuz have led to a significant fall in oil shipments, nearing pre-peace deal levels. This disruption raises concerns about global energy supply and market stability.",
      "tone": "anxious",
      "latestSinceUpdate": 1316
    }
  ]
});

export default LATEST_SNAPSHOT;
