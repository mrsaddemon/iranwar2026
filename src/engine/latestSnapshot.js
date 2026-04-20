export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 271,
  "lastUpdated": "2026-04-20",
  "lastSyncedAt": "2026-04-20T14:56:04.988Z",
  "warDay": 52,
  "summary": "Tensions between the US and Iran have escalated following the US seizure of an Iran-flagged vessel, leading to reported Iranian drone strikes and mixed signals regarding peace talks, alongside reports of high-level Iranian casualties and an ongoing Israel-Lebanon ceasefire.",
  "lastNarrativeUpdate": "2026-04-20",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.81,
    "durationDays": 100,
    "summary": "No ceasefire is in effect for the primary US-Iran conflict."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
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
    "nuclearIndex": 10,
    "escalationLevel": 38,
    "oilDisruption": 95,
    "tradeImpact": 59,
    "sanctionsPressure": 49,
    "globalPressure": 58,
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
      "date": "Apr 20",
      "text": "US military seizes Iran-flagged vessel defying blockade in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE1YUS1EelZ3bVFnZGZwMERkRnhybVpPUk1JcVNwR3FOUEREclc4bzVDQkNZdXdseVhCY2QtSWE3TlVCUGJUUUU5Y0doOTJkZHJvaHUwTmNkOG1Zay1xeXdkcFp0R3A4dE1NWEIzQ0xHNnU3cWJhaklDdkU3MA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 271
    },
    {
      "date": "Apr 20",
      "text": "Iran vows retaliation and reportedly launches drone strikes on US military vessels after ship seizure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPclI5dnpSdTM4ajFZRFl5THdQejNtTmd5d2pncmo4LW9ReDV2MlBLa1BYeWhnLWpUeTJHTFdlWGtLcHFkVE5QSFgyTlNnckNTc0JRNFZnVmZJb0V5cVphR1lJdXUwQk9xYXZUdHBDVDlBRUFhdzFHVTRIT2ZhQ2Q0QVU0Q01yTWczWnl6TGt5azhXaVpkbm5YdWdTcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The National",
      "latestSinceUpdate": 271
    },
    {
      "date": "Apr 20",
      "text": "Iran sends mixed signals on peace talks, with a minister stating 'no intention of negotiating for now' despite US claims of preparing for talks.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 271
    },
    {
      "date": "Apr 20",
      "text": "Reports indicate that Iran's Supreme Leader Khamenei and top security officials were killed in a US/Israel attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPbkVCTnhodk1jUmFmOWVwMlJ5dlN2RFFEd3ByUFQtS3lvLVJ6Z0FFZHpmb2szTERvOW5xV0pIVUxIazU4LUs4ci0wcVdJNU9PY3hNNl9Va0xveHh4T292SkdqdmF4akFxdHpFNS1yZTcyNHFKaGpoMHFQQWZ0Vkd3T1ZwMV9CaGFkaHY1anMtd1Q2bzVVcFFXUGJiWHdTZi1CbkVTSEdEOWRaYWZHaVVESGtuX1ZqcmYwREExaEZMb9IBxAFBVV95cUxPZzBGclI4NmZ2Zm1uWWkwNlJVRjdqNUg4X1RtaU1sbVl4MC1nd2h6QkVCckRIbDdVbXVqVUx5Njl5NWc4S2dLUHBYcnZON3VVZDZXNW9jdkJqUGoyTlpkdlR1N2JFRHRETjVUQmZOaGZwdEUzeURZY21MVnBkb1dxYUdSNzlzOGNsekljVXQzaHVWek5sT2JiUldFWV8yUF9Ba3Z2RGtabGc5NG5rNGVTMnZiWENQTnE5QVN0bENvUFhjU1JI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 271
    },
    {
      "date": "Apr 20",
      "text": "President Trump states the Navy struck and seized an Iranian ship, while his approval rating declines amidst public dissatisfaction with the Iran war.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 271
    },
    {
      "date": "Apr 20",
      "text": "An Israel-Lebanon ceasefire is in effect, though witnesses detail deadly Israeli strikes on medics in Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxNOUNaNkhhanJCVTNKQnRFbm5sX2dObEhNdEQ1ZU94SmdMYVdOclY5bk9KUlhjYTFPUFJKMEo1cXotQjViLVpqeTF3U0tocFNTNHFMX2VIcXhQMDRaWjhJRVJUeDZjUjlFa1pJZk1mcVZ6b1lwSXFKeGgtRmtCMzd1aDg0WE1XWHA0eVhyQ0UyY21tMV9JeURaTk5xNNIBoAFBVV95cUxPcldQM29ybjE3UExHTjVfVlE4WE0yWkp2QzRINDd2cE9vaVZrVEhNWnlzWDJhbzY5cU9jYnVyWUpWSnlqeXdJcVVTSW1fM0hONnR2QzVIWk8yZ2lOY1VLenlsV1hIYlpqTFBPbU9xWHBRYmtxZlRIdUEtWWhybnVXaUU5VndUTVdLMDBYZy1Scjc2dHVBNnRyVzlBcGZkdm9I?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 271
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
      "perspective": "US/Israel Stance",
      "headline": "US Enforces Maritime Order, Israel Prepares for Escalation",
      "summary": "The US asserts its right to enforce maritime order, seizing an Iranian vessel and claiming war goals are nearly met. Israel is reportedly ready to strike Iranian energy facilities if broader regional truces fail, indicating a readiness for further military action.",
      "tone": "defiant",
      "latestSinceUpdate": 264
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Vows Response, Rejects Talks Amid Hardliner Shift",
      "summary": "Iran has vowed a swift response to the US vessel seizure and has rejected peace talks, with hardliners reportedly gaining influence in Tehran. The Strait of Hormuz has seen reversals on opening, signaling a hardened stance against US actions.",
      "tone": "defiant",
      "latestSinceUpdate": 264
    },
    {
      "perspective": "Regional Stability",
      "headline": "Strait of Hormuz Disruptions Fuel Oil Price Jumps",
      "summary": "The ongoing US blockade and Iranian actions in the Strait of Hormuz are causing significant disruptions to commercial shipping and have led to a jump in global oil prices. While a fragile truce holds in Lebanon, the broader region remains highly volatile.",
      "tone": "anxious",
      "latestSinceUpdate": 264
    }
  ]
});

export default LATEST_SNAPSHOT;
