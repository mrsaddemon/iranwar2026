export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1130,
  "lastUpdated": "2026-07-01",
  "lastSyncedAt": "2026-07-01T20:07:24.267Z",
  "warDay": 124,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-01",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.3,
    "durationDays": 1,
    "summary": "A temporary pause in US-Iran strikes is in effect, but both sides disagree on next steps and Iran expresses readiness for war."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "date": "Jun 30",
      "text": "A special report warns that the next Iran war may come sooner than anticipated.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiyAFBVV95cUxPaGhZVGxYcGxXVFlVSXdiMDkxN0Z1QnJwX1k1Nm1pWTRJX0hBR0c4QW5CUFg2Ukw3dmxJUUstR2EtUDY2TDNuMjBVWmRTNnNNeTR4MkVGU3AwYkV5Wmo4OU9ZYWR1enRRNk9PUlNLcnBpVElzTnNaVTBTOVNkcmtyVE9FSXRVUWpKQ3ZWeDA1QWxVblNaTURUWk92YlR5VF9VRDNJczJTaDhYakQtbk9PVHo5a0R4MldOcW12amV5bVhYRm05VVJOTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1130
    },
    {
      "date": "Recent",
      "text": "US and Iran pause military strikes but remain at odds over next steps in talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxQOGllc29LZmZnSEdXeXdTZ0x1Sml0M2VVZVBWRVdvZG9DTEF4RnE2YjAwQzlITU9EcThTSjJBMjM1MUsxWjlWRkctVUdzalFkaE9KQUNnaHp6c3J1YThkOGxEWFprQkFTaThCczNmYWl0UTRNeFBWYS1uVUtaM0FhTVpTQXhSYVlEN08zR1F6ZFNiRE13YTJGTHppdmFCTS1SZlo4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1130
    },
    {
      "date": "Recent",
      "text": "Iran claims to have targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1130
    },
    {
      "date": "Recent",
      "text": "Israel conducts strikes within Iran, as confirmed by the IDF.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1130
    },
    {
      "date": "Recent",
      "text": "A ship runs aground in the Strait of Hormuz, according to Iranian state TV.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxOQ2lQSWQwRDQ4OFduMjN6LWJ6N0Q3VWQ2bTNDSGk3NzcyM01FYlBPd1ozSTgzM056VnZEck1UR2VvbE96dkZocFZ1cmNjS3NyOENOWlJJbDg0eHVmelg5NlZyQ0l2dTZPZW8zb0RzUGJRUnI0VFk5Q1dyZ0plQk1wQXR3STBEVHVWa1JoUE9qd0xGT2Jza2J0YzhHX1ljaHRkTXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1130
    },
    {
      "date": "Recent",
      "text": "Iran’s Revolutionary Guards claim destruction of 8 US military sites in Bahrain and Kuwait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNeUw4Z1lOT1dXS3ZybGlWR2Q3Q1k5bXNxNW53aU5FdVh0dFladXBnX1NGd0paeG5aN2M4YjY2Umd3Vmd1ZEM3bnprQ0E4eW1WS2pVekQ0bm04VHY3LU4yVS1UYVdXbmFKZW81T1VDMzBfUUJaQk1CRlkyLUhlem1odnBMbC1rZFlCbHB6STBXWWdYS1BGcWVnMVZOZ2k2dG5fbmRuNmt5OGFyUDVsUWxKa0ZvWkhZYl91ZU5hNGdMQ2hNTFVmMDVoa1NvZjY4WnhsbHZjekh1Y0tCTzBrMmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1130
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
      "headline": "Iran Defiant Amidst Strikes, Ready for War, Claims US Site Destruction",
      "summary": "Iran maintains a defiant stance, claiming successful strikes against US military sites and reiterating its readiness for war while engaging in slow-moving peace talks. Tehran rejects external intervention in the Strait of Hormuz, emphasizing its control over the vital waterway.",
      "tone": "defiant",
      "latestSinceUpdate": 1124
    },
    {
      "perspective": "United States",
      "headline": "US Engages in Strikes and Diplomacy, Threatens Further Action",
      "summary": "The US continues military strikes against Iran while simultaneously pursuing diplomatic channels through envoys in Doha, though statements on talks remain conflicting. President Trump has threatened to 'complete the job' in Iran, indicating a readiness for further military action.",
      "tone": "strained",
      "latestSinceUpdate": 1124
    },
    {
      "perspective": "Israel",
      "headline": "Israel Conducts Strikes, Warns of Resumption, Faces Hezbollah Challenge",
      "summary": "Israel has conducted strikes in Iran and issued warnings that conflict could resume within days, highlighting persistent regional instability. The country also faces ongoing security challenges from Hezbollah drones in Lebanon, testing existing truce frameworks.",
      "tone": "anxious",
      "latestSinceUpdate": 1124
    },
    {
      "perspective": "Regional Security",
      "headline": "Hormuz Tensions High as New Shipping Routes Explored",
      "summary": "The Strait of Hormuz remains a point of sensitive and complex tension, with Iran fighting to maintain its grip while commercial vessels transit and Oman proposes a new fee plan. The US and Gulf allies are exploring alternative shipping routes to mitigate potential disruptions.",
      "tone": "skeptical",
      "latestSinceUpdate": 1124
    }
  ]
});

export default LATEST_SNAPSHOT;
