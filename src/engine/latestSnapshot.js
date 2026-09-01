export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2320,
  "lastUpdated": "2026-09-01",
  "lastSyncedAt": "2026-09-01T02:04:32.126Z",
  "warDay": 186,
  "summary": "The United States and Iran have exchanged military strikes in recent weeks, including US actions in the Strait of Hormuz and Iranian attacks on US bases in Jordan, leading to rising oil prices and concerns about sustained conflict.",
  "lastNarrativeUpdate": "2026-09-01",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is currently active between the primary belligerents."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
    "nuclearIndex": 35,
    "escalationLevel": 75,
    "oilDisruption": 80,
    "tradeImpact": 71,
    "sanctionsPressure": 62,
    "globalPressure": 79,
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
      "date": "Aug 28",
      "text": "US and Iran trade strikes after first known US attack in weeks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE0wR1VYOXlxY0JNeElMalZOaEw0VDcycU9GeDBFLUdEQ2x4NjRuSjQzd0drUUtfVDRIR2hzenZjY2lRU2ZvbzVUeWVzYUQxc2QwcS1pWW5HX2EzUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 2320
    },
    {
      "date": "Aug 29",
      "text": "U.S. strikes Iranian rocket launchers on the Strait of Hormuz in first military action in weeks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNOGhwcUVGWm1hTHB5UWs3blpsTXlDc1gtZWJxUUNUakF6Y1FPMGc3U0MyYVlmYkJvX25LWnJjUS1fOHlfOEJ4TDlmcjdOcThhYnRVenNGSlhQUzNXSUV2R1pzQUNRM3k2TGxVMjd0Q1pFY2J2SDYwbXU3cVJxZ3ZVSV9OZnFaNzFFT3E2c3hkSjM0T1MxaUFaWnF0MG93RDBWaVdWRDBTZkROdlJtTzBGd1VObGxPTGt6NjNOQkM1UUVBRU9oRFQ4SlZibkxrV3JhV1RLTHNHV2ZGaFVhTEHSAeMBQVVfeXFMTXdQZm9CQ2R5N0hjeV9tX1M3R2RJazR6UWs3NUcwb204MDlZOEs4RmRjMTgxbzVtRkxzTWtyZTFsMVVPQ1lwaEtSMFlpbEVfVW0wYjdGX29EYkFlckFkRUhJX243a3ZCaUc1d0EyMEhqTGZiMXlBSU16ZndoTHc5cUM4LTNqTU5kVDRGNFpjV3hVZ0tCUXY4NndzUk5wMGhpdTNOWGtISlRlRGhoa3VuQUhzYzZpZVlvbUc5V2JVeWYwaEN5TmR4Y2xhUjJWVkxKSWR3ZER3T0VWb0t2RElvbThiYTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 2320
    },
    {
      "date": "Aug 30",
      "text": "IRGC attacks US bases in Jordan after US bombs Larak Island.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPZmpwLVVHQTNwYU5qS2JESWg5anN3UmVFQi1xY3l4enR4dXYyOG11em9OR3ZzR29Kazhzczd4Q1FfajBPd0ZBS3Q5cVNFdkNfSDNvQ1FsenQxWG5lUi12clZwaW5KYzZmb3FZVUNROVY4MThsUkJhQ21QZkN5TE5XNDZQRXYwcndYb2NtTWVCdjMyTXA5UnVvSHFLU3J0akhySFVPclpoUGpZSWE2MTM3TDVCZUFEREZoalHSAb8BQVVfeXFMUFdNYVJpZ0Rsek9Zc3NPdGdDNk1LU3g3clRKWEdxYkRjMndFRm80YVAzVGVCWnVQUGdid0ozVDl1al9zQ251SXhyM08yLU1RRVNEb21peEFuZm8xRXQ3cV83VFY3TTFEeWJxU0tZbFJmeVM4TklDZWdqcTltX2xsZ2VWWWk4VElCVWlkTm1jaWZLdVIyN29KU25mTW5aYUEyRVNnNWhhYUU2UDFCWEdQdi1RRlJDMk9MY1diWHpNNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2320
    },
    {
      "date": "Aug 30",
      "text": "Oil prices rise and stocks fall after US hits Iranian sites in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxQTkxlME9kNGFRUWlyc1k0NW93dnBPbHRkWWtveTVWc19ybnNSV2J2SHZ1MUhZa2VrQWVRaWNWWUQ0ZnE5UmRHcjYtYXl1ZVp4OF9DU0VRdmFEVXJ4MUFnUWkzQkRsNThWbVVXcUVvUDBRYXpoeXpBcnZaX0tXTjd3V3QxNzRBMTAwY3dRSmticTlFQUtITmdqQmpRS1JyUDVS?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 2320
    },
    {
      "date": "Aug 31",
      "text": "Trump vows to hit Iran hard after U.S., Tehran exchange strikes for the first time in weeks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxOX3VPTi0xVlBhMThyb19kVkpfWmJ5Q054dGxfeEFUMFFlN1NGZ2pwYU82ei03S28yNHJSc1lsampHMnFJYXpQbjJSR1hGNWpNT3pUTC05V1dhT1BfTTVQVkd1eF9BSU45bU1udS01QXRhdHdaY0pfUS1NZ0tac2JoeTlvSW9nVkNHdjRrbUZpN1o?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2320
    },
    {
      "date": "Aug 31",
      "text": "Pentagon expresses concern over classified warnings against Iran War and ability to sustain a long conflict.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2320
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
