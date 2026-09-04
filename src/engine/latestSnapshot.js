export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2340,
  "lastUpdated": "2026-09-04",
  "lastSyncedAt": "2026-09-04T00:23:10.992Z",
  "warDay": 189,
  "summary": "Renewed conflict between the US and Iran involves retaliatory strikes, missile launches at Gulf neighbors, and concerns over the Strait of Hormuz, while Israel issues warnings to Iran and releases Lebanese prisoners.",
  "lastNarrativeUpdate": "2026-09-04",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is currently active between the warring parties as hostilities have resumed."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "text": "US-Iran strikes raise fears of renewed war across the Middle East.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxORjZ4d3JRTk1WcXR6eThpVm1wcVpzQV8wMm42eDB4bDJRMVhxelJpdmZTYXVPQ0JTUmtiNXFVWEZyb1NBTTZibmZJTkk4bjlRNGwtWTU1OF8zXzhENVZhWDN4TUwzekdfVG8xWUpmY3hmcHBDQk5TUzBLSERGbFJ0c05nekFpclo3cFdMcm93dHlEUXctVTY2MjJIMkkxSTRGWnc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2339
    },
    {
      "date": "Sep 01",
      "text": "Iran fires missiles and drones at Kuwait as strikes resume in war with U.S.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxOallJNTBESkZZUGJPSldNM2tCZFlGcHc2UkdOX3hPYjN6NzI0WXVidGJNbHpaRjhKWTRBWGxoZEg2WXp3em55QUpOVVh4RFpleEVYd0ZvcGF4OWp1dFNqVnYxU29Nc3ZJbkVEMUd1QWhKaGRNSi1UempFVHo1Z0FiM29GeVEtUlRweUNYWFFCcnlXX3RkNlkyWGt2UThVT1Nkemp1N2lVOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 2340
    },
    {
      "date": "Sep 03",
      "text": "US military completes latest strikes against Iran, while Trump vows more for Tehran's retaliation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxPZEFCR3pYMFczek00TGhzVl9ram9qaUExZmVLWk05OGRzalVmc1J1dEcya2dON1I3TFRJNjZMRGxSeTVpZzVmMVdMVTFzMlFJWl9Vai01TVRFRWJ2eTlmU2ZuVW1QaHU4NzZneE5ndjRydTdRb2JrMWx6cnd4dUpwYg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 2340
    },
    {
      "date": "Sep 03",
      "text": "60 targets struck, 18M barrels of oil protected: The US military’s record day in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxOeXlRMElsZTdHUThtWXFaX0dIeEs4Rk5QTUtJVlhpWFNxZlN2YTB6R0pSa0RKLVR2TWJtdUUzSloxYTVWWDdpS1F0TjFFeTdMRURVQzlUOUhPdFlSQjRXNWFMaXpXNjVOd0xxdWpNWEVNa3lYU2hQQWt4c0UxRmF4TTBCemN6OEZqQV9BbG5qanJLVTIwR1FCdko4a0dLZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2340
    },
    {
      "date": "Sep 02",
      "text": "Energy Secretary Chris Wright states more than 17 million barrels of oil transited Hormuz on Monday.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNUUwtV0h5MmswU1oxM2hYa2RNajQtaF9pQ3lEdlBDOWk5dHp2MG1VcVBpZFo2LWh6aENSREtsTDQwREhSejNLV2dKZnU0dzdLOUU5VjdjX3hidnU4OWl2bWZMd29VZUwteUpDZU04MEhiNHdfRS1NdHQtZDVYYzVpRkFjbW9KU2QtdUkyWm1YU1d6aXFJRGwxamRBM3pHb1FIOVFOV0hqdkN3TjFpWUh0aElxTzBRRENJa0h1SlZ5VzY0VW1EbWctLVVPdUNhMU9LM3BVYWVISzJGMEFBVVHSAeMBQVVfeXFMUGtrejFHdVByeXdWNXNWSTRBa1d4Zmo5NHM2d0txbi0xcno0eXpJNEF0T2djT05HRC10dGpBSjVsemNQTFh1UkhLZzJ3TlJ0cGdCR0tiNWQ3Ym9TdmVmbjNLRnoydFNMSWJGYUR3UUhZLW5BTlpXdzNXaFVjRElRTWhYWjh5VE9CSXRBN0pnZHFoZjhYaVVQVXlMS1paTHpGNnQ1emtqNWJYMVhmbU5tdGdPc2FLOVhVNWxkV2JrYkxnMzN2X0FxMy1FalZVQTdFTzJ6ZGZSWGxWVjN6WHA3eUNJVFU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2340
    },
    {
      "date": "Sep 01",
      "text": "Israel warns Iran of consequences of an attack on the country, specifically targeting energy infrastructure.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikgFBVV95cUxOdDRGbGJ4VmlGTmM0R0xHMWpaX2RVS2xHa3g1Z1hCODF2WlU4ZDZFbWlERHZzeDkxQlpxWmFUdnFUcF9mOGpwOVhxeE92S1BBSFZ3aVZ5NmZQem5IcUJOZ1FYYUhQU3k2Z0czTTJSUzEwTWxyd2RxVXBibFRyTDZqc01aTzlKVXkzV1BSR0RwXzZ1d9IBlwFBVV95cUxNMjVrNnVXNDBnaWZ1NU1JLUxtRjRBaWc0c2gyQjYwZndqSzhKWllYS2FfZWpNR0hhNGxUYTZBZDlER3ZyV3N6R2VpOHpkaF9uc2dTSFd1VlcyVWxMVXhwa3JHRmZuM1loNzNMR3VSUmFfM1dReEo2VENoVnpqcTg4RFFBY3M3NVFVcEsyb3BMaEJ3VjUybHJN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NewsNation",
      "latestSinceUpdate": 2340
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
      "headline": "US asserts military dominance, downplays conflict duration",
      "summary": "The Trump administration emphasizes the effectiveness of US military strikes against Iran, stating that renewed fighting will not last long and questioning claims of civilian casualties. Officials highlight successful operations in protecting oil transit through the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2340
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran retaliates against US, warns Israel",
      "summary": "Iran asserts its right to retaliate against US strikes, firing missiles and drones at Gulf neighbors in response to perceived aggression. Tehran also issues warnings to the US against any potential Israeli attacks on Hezbollah-held areas in Lebanon.",
      "tone": "defiant",
      "latestSinceUpdate": 2340
    },
    {
      "perspective": "Regional/Global Concern",
      "headline": "Fears of wider Middle East war and oil disruption grow",
      "summary": "International observers express significant anxiety over the renewed US-Iran conflict, fearing a wider war across the Middle East. Concerns are particularly high regarding the Strait of Hormuz, prompting Asian nations to consider storing oil closer to home.",
      "tone": "anxious",
      "latestSinceUpdate": 2340
    },
    {
      "perspective": "Israeli Stance",
      "headline": "Israel warns Iran while releasing Lebanese prisoners",
      "summary": "Israel issues stern warnings to Iran regarding potential attacks, specifically threatening strikes on energy infrastructure. Concurrently, Israel has begun releasing Lebanese prisoners, a rare move signaling mixed signals in regional diplomatic efforts.",
      "tone": "strained",
      "latestSinceUpdate": 2340
    }
  ]
});

export default LATEST_SNAPSHOT;
