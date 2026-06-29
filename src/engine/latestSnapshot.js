export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1111,
  "lastUpdated": "2026-06-29",
  "lastSyncedAt": "2026-06-29T21:45:31.048Z",
  "warDay": 122,
  "summary": "A fragile ceasefire between the U.S. and Iran is strained by recent exchanges of strikes and threats, while diplomatic efforts for talks continue amidst regional tensions involving Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-06-29",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 3,
    "summary": "A fragile ceasefire between the U.S. and Iran is active but has been repeatedly strained by recent exchanges of strikes and threats, though hostilities have paused and shipping resumed."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 65,
    "tradeImpact": 47,
    "sanctionsPressure": 54,
    "globalPressure": 61,
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
      "date": "Jun 28",
      "text": "Iran's IRGC claims destruction of 8 US military sites in Bahrain and Kuwait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNeUw4Z1lOT1dXS3ZybGlWR2Q3Q1k5bXNxNW53aU5FdVh0dFladXBnX1NGd0paeG5aN2M4YjY2Umd3Vmd1ZEM3bnprQ0E4eW1WS2pVekQ0bm04VHY3LU4yVS1UYVdXbmFKZW81T1VDMzBfUUJaQk1CRlkyLUhlem1odnBMbC1rZFlCbHB6STBXWWdYS1BGcWVnMVZOZ2k2dG5fbmRuNmt5OGFyUDVsUWxKa0ZvWkhZYl91ZU5hNGdMQ2hNTFVmMDVoa1NvZjY4WnhsbHZjekh1Y0tCTzBrMmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1111
    },
    {
      "date": "Jun 28",
      "text": "U.S. and Iran pause strikes but express disagreement over next steps for talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxQOGllc29LZmZnSEdXeXdTZ0x1Sml0M2VVZVBWRVdvZG9DTEF4RnE2YjAwQzlITU9EcThTSjJBMjM1MUsxWjlWRkctVUdzalFkaE9KQUNnaHp6c3J1YThkOGxEWFprQkFTaThCczNmYWl0UTRNeFBWYS1uVUtaM0FhTVpTQXhSYVlEN08zR1F6ZFNiRE13YTJGTHppdmFCTS1SZlo4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1111
    },
    {
      "date": "Jun 28",
      "text": "Fragile US-Iran ceasefire is strained, with Bahrain and Kuwait reportedly targeted by Tehran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE9JcVZwTU9wS3YxN1ZZcHgzWTRxdHpNN2Y0UlRDS1dneHhWQWdWTTNibkUwMGJGTjI1N3ROQWFjSkI3MURHTTNCVXBCS2hDYzc5em51MjNYalBRQ1M0dV9ILTNlTF9CYzFYTzVfTGkyU1RXcUR2alZUbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1111
    },
    {
      "date": "Jun 28",
      "text": "Iran threatens a 'complete halt' to talks after trading strikes with the U.S., though Washington indicates talks will continue.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1111
    },
    {
      "date": "Jun 28",
      "text": "U.S. and Iran exchange strikes, highlighting the fragility of the ongoing ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxOSEtEanN5a1QwZnVEQWxWM0dnQm5pSktIWS1iUHlPUjlWeDM4SmJZdkg4dXl6TFVPbktMckhVZTFlanVlZjdVeVZLQTlwdmZrVGFoQ0x3R3BrQkoyQXNLR1ZnVFFXamdIWXFOVzBhS2ltbkFVUERSalBXR2NvQVpvb21CbmJJOHpfX1NGN1lHMzN2dmljbWdrTUhCNA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1111
    },
    {
      "date": "Jun 28",
      "text": "U.S. military launches fresh strikes against Iran, with Trump threatening to 'complete the job'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNSWJpN1VxTmpMb29JZjgzTnVqajU0dXJmVFFxNEF4T3MzenZXWk9FLW1YOHpGdEk0c3lrQU56akxjeFQyM3lwaTdJWHVRZ2FTSllkYk9PcmsyRkZtX3Q2TkVtWkIwb0ZWbmhxa2I2VElEWnA2YllZQm5MZ3B2R2RZenpYQ0FHazAzVkM3cXBIU093MW9TQ1FFbmdkTW5KZWxpTE5hMi13cDdUVlZNZUwtMzZ30gG3AUFVX3lxTFBlU01XakVNamNDTHFEVmphZlFVVmRJTDFPLUlyemRtXzRDNWJNZC1WZ1dXdjNRbmhqZElaeDV6OXhHRW5ZN3E2bW5OYjBjWkV4d2xIZEJfd2VOc1NwSk1QTERFczdUUlNHQ1Y0aC0yWXVlZmVzX3UtZnozbnFQSXU0S1lFUk96NDNwYUd1LUowWG9WeEc5OEdvbEpJbTNnSnZQcHByQzA3R3FMVFZlclNiLWhyanFhVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1111
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US",
      "headline": "US Strikes Iran Over Aggression",
      "summary": "The US states its strikes on Iran are a response to continued aggression against shipping and violations of a ceasefire agreement.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    },
    {
      "perspective": "Iran",
      "headline": "Iran Retaliates Against US Attacks",
      "summary": "Iran asserts its strikes are retaliatory actions against recent US military attacks and to defend its sovereign interests.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects US-Israel Deal",
      "summary": "Hezbollah's leadership has publicly rejected the US-brokered security deal between Israel and Lebanon, calling it a surrender.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    }
  ]
});

export default LATEST_SNAPSHOT;
