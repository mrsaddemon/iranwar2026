export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 454,
  "lastUpdated": "2026-05-01",
  "lastSyncedAt": "2026-05-01T16:14:21.689Z",
  "warDay": 63,
  "summary": "A 2-week ceasefire between the US and Iran is active amidst ongoing negotiations, while Israel intensifies attacks in Lebanon, the Strait of Hormuz faces a critical standoff, and oil prices surge.",
  "lastNarrativeUpdate": "2026-05-01",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 14,
    "summary": "A 2-week ceasefire between the US and Iran is active, with Iran offering new proposals for talks, though regional tensions and threats persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.65
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 72
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 12,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "May 01",
      "text": "Iran offers new proposal for talks with U.S. to end war as standoff's costs multiply.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxOV3lZNjd6NWVNUWlvbUVLNlFyakY5YnZBNmJlMHpaeWJDX1JvNG1YY05sSjJzWVl5TTFzc0cxRDgtX3ltWWFKSDYzTTVoZ1l2elFaZ1pRZ3hoRFJybXNoNWs0UVA0ZFJ3bW1hdWp1MTVmTExnTlFKT1Bidk84T3RIaDcwQkw4NlFMQlUxeVo4ME4wT3FmWFV0MGh30gGfAUFVX3lxTFAtaE5xX242SDlkeW4yVl9Qd1hqaXAxN1RHOTVuUDZ2VThEczlHOG5KWFFwNFdtSnUwdUMzWXhFSHZYenlmci04ZzF3a1hWd3NGel9UV25QRTI2ZzhVckxLWDRCc2steVhJYUZaaGlQanp6b19jbm5iRGpmNXMzV2RGbEJXRGprZExGck1LQXlybjEyNlFUNmk2cVJjWEpmMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 454
    },
    {
      "date": "Apr 28",
      "text": "U.S. and Iran reach 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 454
    },
    {
      "date": "Apr 28",
      "text": "Israel strikes southern Lebanon, killing 4; Hezbollah drone wounds 2 Israeli soldiers.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxNQ0N3RlIxTmFkOG5HQnlkZklLckpLd2NFc29LcUJRSDZ5UHIzSzB1WE5Jb0RJdUVxS3E2Ql9ObHhGdlktQ2RfN0lVdjUzcFNEaEd3ZHBCM1hXWlpISHlmSTBoTnlCZEVyeHgxNmR5RmFmaEpwT0k2R1pOY1NkLV9VWmx4bzV6RWwzZzdkMmNZakR4MlB4d0hwMDlvNjV2ajVkenlKWHk0N29UN0ZMNlZYaV9pd19sZFlTdUM2M20tZ1hJYUQ3MkxiRy1JOXRvbnFaRVZ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Los Angeles Times",
      "latestSinceUpdate": 454
    },
    {
      "date": "Apr 28",
      "text": "Strait of Hormuz standoff puts Iran at critical breaking point as oil gets stuck.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiW0FVX3lxTE8zd1dBQlhNNlNVdXlqWkZ2WmtKamRNY2JCSjBTeUZaSjV5T1ViLXY1UjZMYUVOeUVGWTRxNl9pbkFPd3ZUOXQ4WFJ1b2k2LWV2cVl2NjJUeGEtUVk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox Business",
      "latestSinceUpdate": 454
    },
    {
      "date": "Apr 28",
      "text": "Majority of US military sites in Middle East damaged by Iran, CNN investigation reveals.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxPZXgyczJfZ015aVNZWVpKYmZHc29IVVowSGpEM004YjE2X3JTV1ZVNzJldWVlbjA3Vk5WTmZLNENGd2R6M3QzdklvX0FUOVdMQ1F0M1otcmNZWUpNakZ3ZE5wSTRCWkc2WDc2bng5X2tvYWFReG5IM3Q0YjFCb3Z0T0k3YXQ3SC1BMzRQeHhnQ1UwX3l3RUFN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 454
    },
    {
      "date": "Apr 28",
      "text": "Oil price hits highest since 2022 after report Trump to be briefed on new Iran options.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBsbzF3QzZBT2o2cXFBNG5fNGpwYlJwVnhndmg0ZE9DV1hSaTJvXzdsRjVNTEt4cmZqNVJDZjJQamVZYVZFWkc3bE9aS0R6S29VYVFqSy1FU3pUZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 454
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
      "perspective": "US Administration",
      "headline": "Trump Considers New Military Options to Pressure Iran",
      "summary": "President Trump is being briefed on new military options to pressure Iran into a deal, and has not ruled out resuming attacks. There are debates in the Senate regarding the accuracy of claims about US military triumph.",
      "tone": "strained",
      "latestSinceUpdate": 445
    },
    {
      "perspective": "Iran Leadership",
      "headline": "Iran Defiant Despite Economic Strain, Plans Strait Control",
      "summary": "Despite its economy being battered and infrastructure in ruins, Iran's leaders remain defiant, believing Trump will eventually back down. The Supreme Leader has stated plans for ongoing control of the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 445
    },
    {
      "perspective": "Regional Actors (Hezbollah/Israel)",
      "headline": "Hezbollah Rejects Disarmament, Tests Israeli Defenses",
      "summary": "Hezbollah's leadership has rejected disarmament and called for Israeli withdrawal, while actively testing Israel's radar systems with fibre optic drones. Israel maintains its military is the 'most moral in the world'.",
      "tone": "anxious",
      "latestSinceUpdate": 445
    },
    {
      "perspective": "Global Economy/Energy",
      "headline": "War Pushes Oil Prices to 4-Year High Amid Strait Uncertainty",
      "summary": "The war in Iran has significantly impacted global energy markets, pushing oil prices to a four-year high and causing gas price spikes. Uncertainty surrounding the Strait of Hormuz is a primary driver of these price increases.",
      "tone": "anxious",
      "latestSinceUpdate": 445
    }
  ]
});

export default LATEST_SNAPSHOT;
