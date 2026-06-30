export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1116,
  "lastUpdated": "2026-06-30",
  "lastSyncedAt": "2026-06-30T09:56:06.133Z",
  "warDay": 123,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 2,
    "summary": "Attempts at de-escalation and a Hezbollah-Israel truce have been undermined by renewed strikes and threats of war resumption."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 65,
    "tradeImpact": 47,
    "sanctionsPressure": 58,
    "globalPressure": 67,
    "allianceInfluence": 68
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
      "date": "Jun 30",
      "text": "US and Iran issue conflicting statements about new talks in Doha.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE9MVi1NaU82STg3WmRydk9wSkcyR1BhTmNHQnRxR1lvcWNJVXdWMngtZlBmQXJrR0M5eW4tU28zd3ZvdFpobFNVYkF1Z29DNEVFQWFCaGZDb0NaSmp5RWVmZGdxX2xwalRUa0lhQVlqLWlZbEp3QjJLQg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1116
    },
    {
      "date": "Jun 29",
      "text": "Iran's IRGC claims destruction of 8 US military sites in Bahrain and Kuwait in overnight strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNeUw4Z1lOT1dXS3ZybGlWR2Q3Q1k5bXNxNW53aU5FdVh0dFladXBnX1NGd0paeG5aN2M4YjY2Umd3Vmd1ZEM3bnprQ0E4eW1WS2pVekQ0bm04VHY3LU4yVS1UYVdXbmFKZW81T1VDMzBfUUJaQk1CRlkyLUhlem1odnBMbC1rZFlCbHB6STBXWWdYS1BGcWVnMVZOZ2k2dG5fbmRuNmt5OGFyUDVsUWxKa0ZvWkhZYl91ZU5hNGdMQ2hNTFVmMDVoa1NvZjY4WnhsbHZjekh1Y0tCTzBrMmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1116
    },
    {
      "date": "Jun 29",
      "text": "US conducts fresh strikes against Iran for a second day, following previous actions.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1116
    },
    {
      "date": "Jun 29",
      "text": "Iran says it targeted an American base after fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1116
    },
    {
      "date": "Jun 29",
      "text": "Iran threatens a 'complete halt' to talks after trading strikes with the U.S.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1116
    },
    {
      "date": "Jun 29",
      "text": "Israel says it destroyed Hezbollah underground infrastructure in southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOeHpnQ2htRldyN2wyQkhMc0JqSVdwbDA5VkRCZklRS0t1QURDWHFWRUJEM1BxNnFhN0hCcnRNQ3hvQm9USV9wSkhKZXl2OXJSc2xObjFxRTdCNXVaUVNsdlVsZHd4dDNwVHZTUU5LY1BodWRrZkZHdU1NcFVGMDhfVmpJTnkwSDc4NzdBWTlVUnhKaFg2ZTZiSnNFeDdteG5TVmZDbEtFRGhLSk0yNDFabDdUTDV6SmFJejQ0akZ4OWg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1116
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
      "perspective": "US/Western Perspective",
      "headline": "US pushes for talks while responding to Iranian strikes",
      "summary": "The US seeks to de-escalate tensions through technical talks in Qatar, despite recent tit-for-tat strikes and Iranian claims of targeting US sites. Washington maintains that talks will continue.",
      "tone": "strained",
      "latestSinceUpdate": 1114
    },
    {
      "perspective": "Iranian Perspective",
      "headline": "Iran claims successful strikes and threatens talks amid US pressure",
      "summary": "Iran's Revolutionary Guards claim to have destroyed US military sites, while Tehran threatens to halt talks after US strikes. Iran views the Strait of Hormuz situation as sensitive and complex.",
      "tone": "defiant",
      "latestSinceUpdate": 1114
    },
    {
      "perspective": "Israeli/Hezbollah Perspective",
      "headline": "Israel acts against Hezbollah as regional tensions rise",
      "summary": "Israel has destroyed Hezbollah infrastructure and warns of potential war resumption, while Hezbollah rejects US-brokered security deals as a surrender.",
      "tone": "anxious",
      "latestSinceUpdate": 1114
    }
  ]
});

export default LATEST_SNAPSHOT;
