export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1127,
  "lastUpdated": "2026-07-01",
  "lastSyncedAt": "2026-07-01T13:20:14.506Z",
  "warDay": 124,
  "summary": "US and Iran are engaged in tit-for-tat strikes, with a fragile pause for technical talks, while Israel has also conducted strikes in Iran and maintains a strong stance regarding Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-07-01",
  "ceasefire": {
    "active": false,
    "status": "fragile",
    "confidence": 0.3,
    "durationDays": 3,
    "summary": "A fragile pause in strikes between the US and Iran is in effect, but talks are stalled and disagreements persist."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 80,
    "oilDisruption": 60,
    "tradeImpact": 58,
    "sanctionsPressure": 63,
    "globalPressure": 77,
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
      "date": "Jul 01",
      "text": "Iran rejects third-party intervention for Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxQeFZlSzkxMFJqN2I3LUtJb3hKUkt1UlR1Y29OUTdGdlV0VTFkV0JYdHRnZUFIMEFaQlp6RDVERFdaWXNVaFlWYWNhZXlodmw2TG5VeEJUczhvMElwa295QVItQ1FPRGtaMjZLd2U5eVJGQ3VtZzR6WVRWV1lNdmdWUnJVMlhQTi1KLVpFemY3MUZKem1yME5RaWhLUm1FTGY4bVZhcGU2LTJxWE1fSksw0gG0AUFVX3lxTE4tQ2pUSGw2N3UwdnBSSEczVl94ZU9iQWpnRzZCYnBBZDF0ZGxRei1iV3ZPUUVUYi1DWnR6a08xbjZsQzJQRmpEbTM4Vzh5TlhXU2RKRFlCQVd6eXlTZmgtOHdmRTluaURtaTRfR2NaSV9ETE0zZkEzd2drT09mbllXSmJjZktOazYwQzczd0dfNHU0VGNjTUhaRGJDc3ZSd0hNRjhnV2szb01RR3BiSTJnUlN3SQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1127
    },
    {
      "date": "Jun 29",
      "text": "Iran Update Special Report published.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOX0pNV1NrT0ZlTXlKazQ1VnJMU1pvTjd0WUFVb1ZPVWYzcVM3WFhhVzFXNzZtMFZ5MFFrSllJcllOQTBCNUdQR2ZQWHFydUNYYUNQRDZRdXgwbkh3QkprNlYyT1hnaFJBQllyT3E5LWw3MDZWYTBsT2JwYWhXbEVGRFBPN0xoZ3h3a01aZzZjUEtjX3Jt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 1127
    },
    {
      "date": "Jul 01",
      "text": "US and Iran pause strikes but disagree over next steps on talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxQOGllc29LZmZnSEdXeXdTZ0x1Sml0M2VVZVBWRVdvZG9DTEF4RnE2YjAwQzlITU9EcThTSjJBMjM1MUsxWjlWRkctVUdzalFkaE9KQUNnaHp6c3J1YThkOGxEWFprQkFTaThCczNmYWl0UTRNeFBWYS1uVUtaM0FhTVpTQXhSYVlEN08zR1F6ZFNiRE13YTJGTHppdmFCTS1SZlo4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1127
    },
    {
      "date": "Jul 01",
      "text": "Iran says it targeted American base after fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1126
    },
    {
      "date": "Jul 01",
      "text": "US hits Iran in latest tit-for-tat strike.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOLTM2b0s0V25IYjUxNEhrRDV1RDFfdzlRMFdGU1VFZlhPNXJwZ3BuS2RIY1pmT2JPVG9kd19Sdlhtby1uUGVHSTJuU0dnSzJIeFVydU5PeVVQbFJHa0NqbF9iS2Foc2FNSDh2Qk9hNU84dWV0SUpXc00xbzl1ei1UT3UzdUpFam43cFJDZWstWnpBMVJleWE5Ul8ycUNybWRjMDJKUWtEdFJZQjlPRUxrLVMtaVZPaHg3bWY5d9IBwgFBVV95cUxNaUdLcXdDSTJMcFZjY2NCcXRtYXhHWEZNaDNxcTBOUUZZUjBnY1hLSk5Xb1d4aXNRQXpKSVhWMVhhUU5iWVZjMnViTVE5X2hCdnBtbEdURzlPdEVSeEF2RkN2a2NDeU9oREdEZ1dUVUtqeHVndWdBelpaUWc4S0dHZkpqUTRFZy0tcEdMZGZPVWpxX0VPZFUwdURyQ1BkZXBFazIwT2E2QWxacUFZVnF6bVk3NFVlZnRYcmRNckR6QXloUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1127
    },
    {
      "date": "Jul 01",
      "text": "Israel conducts strikes in Iran, IDF says.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1126
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
