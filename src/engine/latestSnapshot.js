export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1129,
  "lastUpdated": "2026-07-01",
  "lastSyncedAt": "2026-07-01T18:06:09.899Z",
  "warDay": 124,
  "summary": "Ongoing tit-for-tat strikes between the US and Iran, and Israel and Iran, continue amidst diplomatic talks and maritime incidents in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-01",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.1,
    "durationDays": 1,
    "summary": "A previous pause in strikes between the US and Iran has collapsed due to renewed military actions, though technical talks are reportedly still underway."
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
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 50,
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
      "date": "Jun 30",
      "text": "Iran Update Special Report released, highlighting potential for earlier conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxNU0RtbUNscTVyb1NHT0FHeGFYMWgzMFktTGh1aDQwMVJsZ3RFSmdHdURMeXkzQkpUUkNjdVVXZHdaUm80MG9lR3c3b2N3cnp0Tm1sMDRGNFNqWXNzdzExT1ZFeW1iOVNyX0ZYdXZmUVQ5a0d0QUFhcWxOUEpLeTVOQ0RBX2s2QzNfdmpZa1VFN3FzMWdN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 1129
    },
    {
      "date": "Jun 30",
      "text": "US and Iran paused strikes but remain in disagreement over next steps in talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxQOGllc29LZmZnSEdXeXdTZ0x1Sml0M2VVZVBWRVdvZG9DTEF4RnE2YjAwQzlITU9EcThTSjJBMjM1MUsxWjlWRkctVUdzalFkaE9KQUNnaHp6c3J1YThkOGxEWFprQkFTaThCczNmYWl0UTRNeFBWYS1uVUtaM0FhTVpTQXhSYVlEN08zR1F6ZFNiRE13YTJGTHppdmFCTS1SZlo4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1129
    },
    {
      "date": "Jun 30",
      "text": "Iran claims to have targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1129
    },
    {
      "date": "Jun 30",
      "text": "US conducted strikes in Iran in a latest tit-for-tat response.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1129
    },
    {
      "date": "Jun 30",
      "text": "Israel conducted strikes in Iran, as confirmed by the IDF.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1129
    },
    {
      "date": "Jun 30",
      "text": "A ship ran aground in the Strait of Hormuz, according to Iranian state TV.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNa3hYM2p1SFA4MExhajdQc0ZWM2ZjY2NyVlVfM2VCaWNUTk1qUWs5NnVsMHdpMFBxOGktUEdyOXhZUXhyMDFLcEI2VzF4VUlaVTVJenh1T2RpdzZZaEk5ZFUtZ3BZMEdzY3BJWk4wUno3QW1zUFNnSFRYRkk2cXRtdUUwZDU3dGxGVDRaTHFRX0hiQ2hDYW1PMEtsQUlNMllS?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WRAL",
      "latestSinceUpdate": 1129
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
