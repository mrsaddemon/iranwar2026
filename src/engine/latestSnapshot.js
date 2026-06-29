export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1110,
  "lastUpdated": "2026-06-29",
  "lastSyncedAt": "2026-06-29T20:17:23.734Z",
  "warDay": 122,
  "summary": "A fragile ceasefire between the U.S. and Iran is strained by reciprocal strikes, while both sides indicate a willingness to continue talks, and shipping in the Strait of Hormuz has resumed.",
  "lastNarrativeUpdate": "2026-06-29",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 3,
    "summary": "A fragile ceasefire between the U.S. and Iran is in effect, marked by recent reciprocal strikes and ongoing disagreements over the path forward for talks."
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
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 60,
    "tradeImpact": 44,
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
      "text": "US and Iran pause strikes but disagree over next steps on talks",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxQOGllc29LZmZnSEdXeXdTZ0x1Sml0M2VVZVBWRVdvZG9DTEF4RnE2YjAwQzlITU9EcThTSjJBMjM1MUsxWjlWRkctVUdzalFkaE9KQUNnaHp6c3J1YThkOGxEWFprQkFTaThCczNmYWl0UTRNeFBWYS1uVUtaM0FhTVpTQXhSYVlEN08zR1F6ZFNiRE13YTJGTHppdmFCTS1SZlo4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1110
    },
    {
      "date": "Jun 28",
      "text": "Fragile US-Iran ceasefire strained, Bahrain and Kuwait targeted by Tehran",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE9JcVZwTU9wS3YxN1ZZcHgzWTRxdHpNN2Y0UlRDS1dneHhWQWdWTTNibkUwMGJGTjI1N3ROQWFjSkI3MURHTTNCVXBCS2hDYzc5em51MjNYalBRQ1M0dV9ILTNlTF9CYzFYTzVfTGkyU1RXcUR2alZUbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1110
    },
    {
      "date": "Jun 28",
      "text": "Iran’s Revolutionary Guards say 8 US military sites destroyed in overnight strikes in Bahrain, Kuwait",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNeUw4Z1lOT1dXS3ZybGlWR2Q3Q1k5bXNxNW53aU5FdVh0dFladXBnX1NGd0paeG5aN2M4YjY2Umd3Vmd1ZEM3bnprQ0E4eW1WS2pVekQ0bm04VHY3LU4yVS1UYVdXbmFKZW81T1VDMzBfUUJaQk1CRlkyLUhlem1odnBMbC1rZFlCbHB6STBXWWdYS1BGcWVnMVZOZ2k2dG5fbmRuNmt5OGFyUDVsUWxKa0ZvWkhZYl91ZU5hNGdMQ2hNTFVmMDVoa1NvZjY4WnhsbHZjekh1Y0tCTzBrMmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1110
    },
    {
      "date": "Jun 28",
      "text": "U.S. and Iran exchange strikes, underscoring the fragility of the ceasefire",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxOSEtEanN5a1QwZnVEQWxWM0dnQm5pSktIWS1iUHlPUjlWeDM4SmJZdkg4dXl6TFVPbktMckhVZTFlanVlZjdVeVZLQTlwdmZrVGFoQ0x3R3BrQkoyQXNLR1ZnVFFXamdIWXFOVzBhS2ltbkFVUERSalBXR2NvQVpvb21CbmJJOHpfX1NGN1lHMzN2dmljbWdrTUhCNA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1110
    },
    {
      "date": "Jun 28",
      "text": "US military conducted strikes against Iran",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxOdHdZdU1zam5FTTBKVzlNWDBLU3N0dmxTbFRaMjBrVFNwNHBXQVpnTU16SmhxWUdyRWRNUkE0NXdLWE5kMDNnc25rdFIxMk1jSFd4M05LWkxzTDVlTnRBUkotNW5RaHBQaGZFaXE2RWdlb2psdHVqTHV3MU9odHVVdVZ0M1NJX3pMQ0RHcGFsTWlQTXdIY29rSV9HQXJCWW1uZHVUWnQwOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1110
    },
    {
      "date": "Jun 28",
      "text": "U.S., Iran pause hostilities as Hormuz shipping resumes after weekend clashes",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxQc3VldHk1NklNUnVwUlhzLXo1MjJIN3dVOWF3N1RIZjBIbXVGVlloTExyeVFSdVNIWkpfWlB4UmZwSnpSNmJGQjlmSzh5RFV3NUE2UzJkeTllTlc3YmdjOUc4Y2NxVmtiQkdocDBBX0N6WGlCaG1ZTWVqM0RXY2JqV3dmdHM5SWhENUZhZE9NRUtNS2habnRsdEl6VXU5Tmk0NC0wSlNNLTXSAa4BQVVfeXFMUE14anFsVFg5enQzcEJ2TGZ6S3J5MzFoT1FUZGJGUnVNTktjYi1SNkFLcXZsajlpMWx5aHV5YlFnRmxXUGk1NkJ2Y3RjU1dzUVl6S0VMTnRhVjFDc011ZUhUczJIS0E2ZW9ubjU0QWU1bVYybDE1RkU3VXNhcUNBX3ROYzZZYTBwZ3U4Um1VSFlMNTdLSGxpRmRIWHhCMDM5RTRqaVlqZnhEZENqd0tR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1110
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
