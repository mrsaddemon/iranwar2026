export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 896,
  "lastUpdated": "2026-06-07",
  "lastSyncedAt": "2026-06-07T01:58:34.011Z",
  "warDay": 100,
  "summary": "Ongoing clashes between US and Iran, and Israel and Lebanon, continue as a ceasefire deal frays and Hezbollah rejects a truce, while the US maintains naval presence in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-06-07",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 3,
    "summary": "A ceasefire deal between Lebanon and Israel has been rejected by Hezbollah and appears to have collapsed amidst mutual strikes and accusations of violations, though peace talks reportedly continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.6
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
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "Jun 05",
      "text": "Iran states US 'lacks will' for stability following clashes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxOZDNOM0N5RlRpQVgzS3JNR3FFVmluU2w1dk0tRDRnRzg1UHhSbDVkNVd2aHlkSXBZc0l0MHdjcENyX3NUN3E4RTViUGxfVmNGZFFGeEN6ZGVTMWlXOFlKanZhN1ZfdE54Ykxhd3J1SkFqZ2RuVUJCN2RXZUxqZC00LTFQNUlLdkUzbzhhYzFqLWhPdmg1SjBYQUVDS2hxaVprLThyYkVWUHEydnpUbnZGU08yMUhOOXPSAbwBQVVfeXFMTWVNMkFzNGlmOXQzSTA2TDR1VmpJLWZTMlFrR193XzBQWnl5V3JWSlpLb1dDV21CdzEtSU1lSTJScDI4WC1GcDNOQ2YwdGJKR2pObzRtZHNPRnhRYTRmTkwtMmlIU25HTXpiU3hKbFRGUTlVa0FjVXp6aW9DVVBzTUY0c0JtWTVzY1YyYmVqcEZJcGdOR2ZiWUhhN0o3X19BMk5IaG5KTmsxVWFwWE9ldEY3cW9nYWlYcDg5UHQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 896
    },
    {
      "date": "Jun 04",
      "text": "Ceasefire in Lebanon frays as Iran warns of wider conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxNa3p2Mk13TlJHN1BKSVRWTWJjZHBRMUtqZlVIa1psMzNxY1BublNGZ2Y1eUY4NUhReHo0bFNrZllNZTduUHVjbEVoWXk4ajZzVDJLNGFiTXVaVHR3NDcwOGhwRVAyRG5zb1RSZXpCRklIS0p0NTU3T29TdHVUbDBKa293SFpPV2Zf?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 896
    },
    {
      "date": "Jun 06",
      "text": "Hezbollah rejects US-backed ceasefire deal between Lebanon and Israel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBDX19HLUpiZ2wzMzJfd0VNaUxxazNlXzJXMkRrM2tkUkk5MmtVYllkUUZSWWR3d2RydXRNSzdKdHRqQ281Mkk5ZWpRamlrM3lqTll5LWNQQW5rUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 896
    },
    {
      "date": "Jun 06",
      "text": "Iran accuses US of ceasefire violation amidst mutual strikes and stalled peace talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPelJMTjAxUFhxdHBqeU9KN3lhbkFhM182azlzVHpGTDZXaGkyaDFNT0Vzc2ZBT1BJTnpiTm9XalZjOVhaWGN6YjJjXzBBZ2lrQW52bFhZZmw4OHFSYWVRcUpwenVEckFlSkY5NGx1bFM2dDVuUUlPQ1M1UTgtX094dlhHOUs1bVU3NlFBRmFuLThRN0dtUE9yWg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 896
    },
    {
      "date": "Jun 06",
      "text": "US and Iran exchange strikes; US reports destroying two Iranian drones targeting Hormuz shipping.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxObnMtNTBlSnZZT1h0OGVBZFhSMGVTWFhEQ3lNRnFNQVBEOW9zM3BzbElrU3NaMm5VT3lzcDRUakF1RzFCTkdTTV9NZnp3LUFhTGZpMEhKcW5QMmZzNGt2cTVleW1faThrdXRMVkpzUktHb2ZtODI0V2p6YmlGMkZkalpKOUdvSEJSTFk1OWhZRkg4cW1JLThoRFhGZjB0cVNQV01ncTlPV2ZyWE8x?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 896
    },
    {
      "date": "Jun 06",
      "text": "US military intercepts multiple Iranian drones launched towards Gulf allies and Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxPSzNfZ04xZUVycUZLbW4xTERjZFVfMlZIdXphTXotR1pna2JaZ2pHM1ZxcTVvekpHOE0zZVlRSndFTDRJcHdVRmlxZXphc2lFQXNhajc1aFJudGREZ0l5blhQTXh1Zl9ZWXc0NUtKUjBURlFBV3JvOHBFYkZtUlE0Zzk0WXEtV2tGaVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 896
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "headline": "US Lacks Will, Iran Warns of Wider War",
      "summary": "Iran asserts the US lacks the will for regional stability following recent clashes and accuses the US of violating a ceasefire. Tehran warns that the ongoing conflict could escalate into a wider war.",
      "tone": "defiant",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects Truce, Finds New Purpose",
      "summary": "Hezbollah has rejected a US-backed ceasefire deal between Lebanon and Israel. The group states that the ongoing Israeli offensive in Lebanon has provided it with renewed purpose.",
      "tone": "defiant",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "United States",
      "headline": "US Secures Hormuz, Seeks Regional Stability",
      "summary": "The US military is providing naval overwatch in the Strait of Hormuz, having intercepted Iranian drones targeting shipping. The US also plans to use Iranian assets for rebuilding in Gulf states, signaling a complex approach to regional stability.",
      "tone": "neutral",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "Lebanon",
      "headline": "Lebanese President Criticizes Iran",
      "summary": "Lebanon's president has publicly criticized Iran amidst ongoing Israeli attacks on Lebanese territory. This indicates growing internal pressure and potential shifts in regional alliances.",
      "tone": "strained",
      "latestSinceUpdate": 896
    }
  ]
});

export default LATEST_SNAPSHOT;
