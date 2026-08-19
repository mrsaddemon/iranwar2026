export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2012,
  "lastUpdated": "2026-08-19",
  "lastSyncedAt": "2026-08-19T10:49:06.787Z",
  "warDay": 173,
  "summary": "Tensions escalated significantly as the US-Iran deal deadline expired, leading to threats, reported missile attacks on the UAE, and attacks on ships in the Strait of Hormuz, while Israel continued strikes in Lebanon, Gaza, and Syria amidst a fragile ceasefire.",
  "lastNarrativeUpdate": "2026-08-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "A ceasefire in southern Lebanon is active but appears fragile due to continued Israeli strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Aug 17",
      "text": "US-Iran deal deadline expires, Trump threatens Oman",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2012
    },
    {
      "date": "Aug 17",
      "text": "Iran denies targeting UAE, new missile attack on UAE reported",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2012
    },
    {
      "date": "Aug 17",
      "text": "Israel strikes Lebanon as U.S. prepares fresh Iran sanctions",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxNRXhvNkxYc1FyX0YxVzZZTXBLeW9GVnhVT21GNjlrbmhQSTZpZkdxVmhubVZPcTIxeEVwLUZnMUdiTUYwc3BERmxoWXBNVm5BNGxQOWVwcldhcDFWMC16aXdKVjJrUzlmNVV6SXVtV3dsLVpOcGgzWm1SNkZ1MTBiOGdVaWpJYzlvMEVlOQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Japan Times",
      "latestSinceUpdate": 2012
    },
    {
      "date": "Aug 17",
      "text": "Israel kills six in Gaza on day after Kushner meeting",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxNWUljaVdkdjZZMngxR1FnWEVjQ25STWQxNDRtVVNGV0dUdFkzN0tVWUh6UmtPTlZVZU14eTBuWW13Um9WUzZ1QzlBS0tHcFhhakc3aUZOVnc5QlJ2aFpqSF9fejNPd3ZUMFpMN2Q0RVhSVFM3ZHVJWHlka05acUpTY3lQdFFSSDZHbzJzLWxTOXdOdk9QbUI5Rm4yd1ZGUzJ1UTNwbjRhRXpNTkxnZG9LbzVTRGdfbEd0VGw3M1FGRzdoRW1CY3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2012
    },
    {
      "date": "Aug 17",
      "text": "Israel strikes Syrian military airfield to ensure its security",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxOYnpvd0dzbVhzVWx6c2ZGRXJBcDJzZVpRUUZDbTBfVFZqMUFxUk92OEk4cmpoVENKcWw5b2RjOUdEbVVGUkFSeHRkZFZKRHhBSVpuNDNtNjRoNE1pRVAzNkZQRVJrODVZWHhsTnQxVXpWckF4RWpURlNZeHpEalk5NDE1Mllxbm10T2wybmJpSklLS1hxb3FhN0F1YUgzR3diTzdFN3BMa2RYUEluaGpUZ2s0Q2hTMy1mVnlpaGln?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 2012
    },
    {
      "date": "Aug 17",
      "text": "Two Ships Transiting Strait of Hormuz Are Attacked as Oil Prices Rise",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxOTGRpNm9fblB2cTJiOHJmbzI5OTlPZmJrNUlWaUtyVDA3STdiTllISTBvNDIzLUFIMUlUMU8tcHJUazh5MmdrVlRwNUtZeHBqeVdsTFVuLVg0SDF0STVTSDlNUEVING82UWs3RmZvX1VsSzBMeTNkZER0ZmlfMWdiZUo0VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 2012
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
      "perspective": "US/Western",
      "headline": "Iran's Aggression Prompts Sanctions, Deconfliction Efforts",
      "summary": "The US is responding to Iran's escalating actions, including missile launches and Strait of Hormuz incidents, with fresh sanctions and diplomatic efforts to deconflict regional tensions. There is also consideration for adjusting the US military footprint in the Gulf post-conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Iranian",
      "headline": "Defiance Amidst US Pressure and Regional Strikes",
      "summary": "Iran continues to assert its regional influence, including missile launches and claims over the Strait of Hormuz, in defiance of US pressure and sanctions. The nation is responding to US-Israel strikes and perceived threats to its sovereignty.",
      "tone": "defiant",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Israeli/Regional",
      "headline": "Escalation in Lebanon and Iran Amidst Regional Instability",
      "summary": "Israel has escalated attacks in southern Lebanon despite a ceasefire, citing ongoing security concerns and threats from groups like Hezbollah. The broader West Asia conflict sees US-Israel strikes hitting Iran, contributing to regional instability.",
      "tone": "strained",
      "latestSinceUpdate": 1998
    }
  ]
});

export default LATEST_SNAPSHOT;
