export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2324,
  "lastUpdated": "2026-09-01",
  "lastSyncedAt": "2026-09-01T19:51:02.589Z",
  "warDay": 186,
  "summary": "The United States has launched multiple airstrikes against Iranian targets, particularly around the Strait of Hormuz, following which Iran has vowed retaliation and oil tankers have been struck in the critical waterway.",
  "lastNarrativeUpdate": "2026-09-01",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is active; hostilities between the US and Iran, and Israel and Hezbollah, are ongoing."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.65
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
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
      "date": "Sep 01",
      "text": "US military began striking targets in Iran, with new airstrikes launched on Iranian targets.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxOS1hFc0hzeE9TUzdkczhyV2w2QlRoQjBLTXgtUjRITkhRQmVrbXBxWmFIV3hsd19CbTZpTm9tNUpqVTNFcUt2OXpVRjlQd0NBdE5PMzZRT0x6OXhQb3lTRFZKNERtTHp3MTFCUk9Tb2E4NmJfNDltYjl4WkcwamlCSkU0V2s5U1FBajlkbmYtX1l6eko2OFdpYzg4c1RLcWwxRXB1cl9jRDA2am9ZNXfSAbMBQVVfeXFMUEs2a2ZRU2dQa1AxeGNsX3NtRVFYZTl2dGwwQjhPaEFfajNtSzUxRnE3MkRwVmlZZzEteV8xcDk0YmZPSEVSSWJDQ0RTNHpUZ1V4SnIxbXMwXzhUVXJBdlVQdHBDRXNEMk5ycnp5bEkwbTFaZE41N1NVelREUk9NVlBoSmctaXdjendHSnl6M1dTWEdteWZGTXRjMjZpWFE5Q25TTF9uRFBIdEJWYi1ocU44TU0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2324
    },
    {
      "date": "Sep 01",
      "text": "US forces struck two Iranian launchers on Iran's Larak island.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxQTkpiVXljY0dfaG41QTlsRW1PXzVEMU9UUGRWYk41QzQ4UERCRnJ5TlVUSUloZXFTUF9ieVBhaGFxQi1iZ3NSOVRPODFnR3NQbnZxdWFJMnl6TmRwYnZqT3pOZFhWUEo5MzRVY2YtdEppVmNMSVQ2UVB0WW5zLThXNjIwdU9ZLUUyQVhWTENEQ3k0bGo2QUdNQVVHdWxSak91RkU5dGNlUFBOZjNqTDRuRGJRZHJHNWRuQTRiaDBSZFpjOTNGcGRV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2324
    },
    {
      "date": "Sep 01",
      "text": "US launched a new barrage of strikes on Iran around the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiygFBVV95cUxOYWVYQlZISm1jT2ZUaUZ4bDJ2ZE10ZEpaeXo5MnBPQTJYS0ZJNDFjNmdBNGlPQjdyRTIxMVJWeDYzTlFEZi1wVm55eUJTUjkxSjB2WnVVU3NLaEtjTWlMTFFXZlZuTDYyNzREc3hxWnpxRzdUV2MtRUdhei12TE9TQ0Rrc1hTMEN4alFnS1VFcVRzSEM1dmVxR2FYbzZXb1B2a254Y2FlVXlNMFBhQVlFRTAyNzdoaE1FN2Q5dFF0LS1PZDR3bm1PS2JR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2324
    },
    {
      "date": "Sep 01",
      "text": "Iran promised to respond to the new wave of US strikes despite threats.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxQY1VIcWhXU2JEN0F2MFR6UHNxbHQ4WG02cWVRVzVEaW5lS3lveTJaMUc4c2RIWEhOeEl3QUF3NnUtQzN2Q2VUQTczcmdGNmU5Y3I1XzJTSTRwU1RBQTFvSDBfSjlZMHRxMlM5TDhlcE1XNVlUclB5VUdNQlZmYWExbWlaUEZmWkFrQ2tyTy1pY9IBlAFBVV95cUxNbVdoa0dFUldPbnNjTlNaZUJGVHprRGpUOWNieWtoQ1QtQTBoZktQUnlMbkFpT2sycnAyV2VYYVo0dE51Q3VVWUxsUU5sRnhCcHIxVnB1US1haS1Xck9LVUZfV2JqM3NfWVVpa0hGdXh6OFNrd1J5b2hsWjJZTU54cDBlLTBnMXZjYURyeVltVGJINVB1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2324
    },
    {
      "date": "Sep 01",
      "text": "Saudi and South Korean oil tankers were hit in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxOZDZrSXpaNXpfajl5QlBndGx6a191amlOZEZINmlJYkVSMDBOUzNFNnA2cGhJaTRPVjVfVV92dUpFN0ZhYkVaZWNHSUpsTXU3YjdoNXd6RnJkZVdERXRVV3djOHdtR2JrUi1JN1ZXaW83UU1UNHduWlRfQ0diX3hudWFORzg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Financial Times",
      "latestSinceUpdate": 2324
    },
    {
      "date": "Sep 01",
      "text": "West Asia conflict escalated as US-Israel strikes hit Iran, and the US Embassy was attacked in Riyadh.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2324
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
      "perspective": "US Administration",
      "headline": "US Vows Strong Response to Iranian Aggression While Weighing Options",
      "summary": "The US administration, led by Trump, has responded to Iranian actions with military strikes and strong rhetoric, including threats to 'hit them hard.' However, there are also considerations for 'limited strikes' to curb attacks in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2320
    },
    {
      "perspective": "Iranian Leadership",
      "headline": "Iran Continues Retaliatory Strikes Against US Targets",
      "summary": "Iran's IRGC has attacked US bases in Jordan following US military actions, indicating a continued willingness to engage in direct conflict. Iranian actions, including mine warfare, aim to challenge US control in strategic waterways.",
      "tone": "defiant",
      "latestSinceUpdate": 2320
    },
    {
      "perspective": "US Military/Defense",
      "headline": "Pentagon Concerned About Sustaining Long-Term Conflict with Iran",
      "summary": "Leaked documents and reports indicate significant concern among American generals regarding the potential for a prolonged conflict with Iran. Questions are being raised about the US military's capacity to sustain such an engagement.",
      "tone": "anxious",
      "latestSinceUpdate": 2320
    },
    {
      "perspective": "Regional Stability (Israel/Lebanon)",
      "headline": "Hezbollah Poses Acute Challenge as Israel Expresses Discontent",
      "summary": "Hezbollah's use of FPV drones presents a significant threat to Israel, which is reportedly unhappy with the slow progress of Hezbollah disarmament efforts. Lebanon is also attempting to assert its influence against Iran's presence.",
      "tone": "strained",
      "latestSinceUpdate": 2320
    }
  ]
});

export default LATEST_SNAPSHOT;
