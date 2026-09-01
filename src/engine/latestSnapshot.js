export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2323,
  "lastUpdated": "2026-09-01",
  "lastSyncedAt": "2026-09-01T16:58:08.952Z",
  "warDay": 186,
  "summary": "The conflict between the US and Iran has escalated with direct military strikes by the US on Iranian targets, Iranian retaliation, and attacks on tankers in the Strait of Hormuz, while Hezbollah continues to pose a challenge to Israel.",
  "lastNarrativeUpdate": "2026-09-01",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is active as direct military hostilities between the US and Iran have escalated."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
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
      "date": "Aug 31",
      "text": "U.S. strikes Iranian rocket launchers on the Strait of Hormuz in first military action in weeks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNOGhwcUVGWm1hTHB5UWs3blpsTXlDc1gtZWJxUUNUakF6Y1FPMGc3U0MyYVlmYkJvX25LWnJjUS1fOHlfOEJ4TDlmcjdOcThhYnRVenNGSlhQUzNXSUV2R1pzQUNRM3k2TGxVMjd0Q1pFY2J2SDYwbXU3cVJxZ3ZVSV9OZnFaNzFFT3E2c3hkSjM0T1MxaUFaWnF0MG93RDBWaVdWRDBTZkROdlJtTzBGd1VObGxPTGt6NjNOQkM1UUVBRU9oRFQ4SlZibkxrV3JhV1RLTHNHV2ZGaFVhTEHSAeMBQVVfeXFMTXdQZm9CQ2R5N0hjeV9tX1M3R2RJazR6UWs3NUcwb204MDlZOEs4RmRjMTgxbzVtRkxzTWtyZTFsMVVPQ1lwaEtSMFlpbEVfVW0wYjdGX29EYkFlckFkRUhJX243a3ZCaUc1d0EyMEhqTGZiMXlBSU16ZndoTHc5cUM4LTNqTU5kVDRGNFpjV3hVZ0tCUXY4NndzUk5wMGhpdTNOWGtISlRlRGhoa3VuQUhzYzZpZVlvbUc5V2JVeWYwaEN5TmR4Y2xhUjJWVkxKSWR3ZER3T0VWb0t2RElvbThiYTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 2323
    },
    {
      "date": "Aug 31",
      "text": "US and Iran trade strikes after first known US attack in weeks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE0wR1VYOXlxY0JNeElMalZOaEw0VDcycU9GeDBFLUdEQ2x4NjRuSjQzd0drUUtfVDRIR2hzenZjY2lRU2ZvbzVUeWVzYUQxc2QwcS1pWW5HX2EzUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 2323
    },
    {
      "date": "Aug 31",
      "text": "First US military attacks on Iran in a month prompt retaliation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPTm1OakU0ZTQxTmQ0YkVOWWVoMHZJQmJSQkhiV3ZTMXJ6TWNRZzYzblpoYnh2cUFCVTUzdkNRQUhBamhWY0I2MzFZZHBxWlpObmVyd3VXZkt4Y1FCNWVfZmR0U3VuRU16ODB3S1NJcHI4SHdhM1RwbnZnRkNSejdzZTB3N3FKM3ZEZmU0cGhfUHhoZFZPQ3E0cG1pelZlVFlpc05CQTZLdGdhV2ZYOXF3X2I5MmhLa21jS2t5SVVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2323
    },
    {
      "date": "Aug 31",
      "text": "West Asia conflict escalates as US‑Israel strikes hit Iran, US Embassy attacked in Riyadh.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2323
    },
    {
      "date": "Aug 31",
      "text": "Tankers hit in Strait of Hormuz as Trump mulls more strikes.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2323
    },
    {
      "date": "Aug 31",
      "text": "Tehran warns of military action if US intensifies blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPWG5RQm1MSmRjSmtON2xrWjZxNXZvVzExRkxaOWJKalg2S2p1OGhBRFdNdDQwWVMxZEd6aW5ITG5BaWNlelRVbVk5TWxibVlMckJ6NVBQOS1WSTlOQnR2T2o4V0p3TmZmWUhGM01XUGlwLWpOSjlVa1FnMVRFY1puWTUyUGVTV05Kb04zYTFwQTdPVVNhcXZQSlQ2LTJ0QUpHR25ZZmFOT25ndTlrcW9kNG8tVjVGVmtzM2fSAb8BQVVfeXFMT3hYWmFVRndoWU9QMVg4dVpXUTktaWUxY0Uyc3hnXzNDUkxOQ0sxSWg5dXpFVU9LS0ZlWi1BNVFrd0ZTNDF0cXlCVlRad1FDelZDZ0F2aUVQQ0JUdkY3Tnd4UkRRcVJUVTdPdjNLcm9qTEhnQXdBbjR1Qm9jMzY4MmxIVkJRa0VRVDMzVGF4ZUpIWWhjc3Q2TnUzYjlGNl9zc3k2N09IYkxpcEpKYUt4X09EejNIUEd3SVhub2tRZkk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2323
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
