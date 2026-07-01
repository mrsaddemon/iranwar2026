export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1125,
  "lastUpdated": "2026-07-01",
  "lastSyncedAt": "2026-07-01T06:41:34.372Z",
  "warDay": 124,
  "summary": "A fragile US-Iran ceasefire is strained by continued strikes and conflicting statements, while technical talks in Qatar proceed amidst regional tensions and Israeli warnings.",
  "lastNarrativeUpdate": "2026-07-01",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 3,
    "summary": "A fragile ceasefire between the US and Iran is in effect, marked by pauses in strikes but also by violations and threats, with ongoing technical talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
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
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "text": "Trump and Iran issue conflicting statements regarding the status of new talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE9MVi1NaU82STg3WmRydk9wSkcyR1BhTmNHQnRxR1lvcWNJVXdWMngtZlBmQXJrR0M5eW4tU28zd3ZvdFpobFNVYkF1Z29DNEVFQWFCaGZDb0NaSmp5RWVmZGdxX2xwalRUa0lhQVlqLWlZbEp3QjJLQg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1125
    },
    {
      "date": "Jul 01",
      "text": "Iran's IRGC claims 8 US military sites in Bahrain and Kuwait were destroyed in overnight strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNeUw4Z1lOT1dXS3ZybGlWR2Q3Q1k5bXNxNW53aU5FdVh0dFladXBnX1NGd0paeG5aN2M4YjY2Umd3Vmd1ZEM3bnprQ0E4eW1WS2pVekQ0bm04VHY3LU4yVS1UYVdXbmFKZW81T1VDMzBfUUJaQk1CRlkyLUhlem1odnBMbC1rZFlCbHB6STBXWWdYS1BGcWVnMVZOZ2k2dG5fbmRuNmt5OGFyUDVsUWxKa0ZvWkhZYl91ZU5hNGdMQ2hNTFVmMDVoa1NvZjY4WnhsbHZjekh1Y0tCTzBrMmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1125
    },
    {
      "date": "Jun 30",
      "text": "US and Iran pause strikes but express disagreement over the next steps in ongoing talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxQOGllc29LZmZnSEdXeXdTZ0x1Sml0M2VVZVBWRVdvZG9DTEF4RnE2YjAwQzlITU9EcThTSjJBMjM1MUsxWjlWRkctVUdzalFkaE9KQUNnaHp6c3J1YThkOGxEWFprQkFTaThCczNmYWl0UTRNeFBWYS1uVUtaM0FhTVpTQXhSYVlEN08zR1F6ZFNiRE13YTJGTHppdmFCTS1SZlo4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1125
    },
    {
      "date": "Jun 30",
      "text": "Iran states it targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1125
    },
    {
      "date": "Jun 30",
      "text": "Israel conducts strikes within Iran, according to IDF statements.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1125
    },
    {
      "date": "Jun 30",
      "text": "Iran threatens a 'complete halt' to talks after exchanging strikes with the U.S., though Washington officials indicate talks will continue.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1125
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
