export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2322,
  "lastUpdated": "2026-09-01",
  "lastSyncedAt": "2026-09-01T12:46:54.766Z",
  "warDay": 186,
  "summary": "The conflict in West Asia has escalated with direct military exchanges between the US and Iran, attacks on oil tankers in the Strait of Hormuz, and ongoing tensions involving Hezbollah.",
  "lastNarrativeUpdate": "2026-09-01",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect; direct military engagements and threats continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.65
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
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
      "text": "US and Iran exchange fire in a new flare-up, with IRGC attacking US bases in Jordan after US bombs Larak Island.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPZmpwLVVHQTNwYU5qS2JESWg5anN3UmVFQi1xY3l4enR4dXYyOG11em9OR3ZzR29Kazhzczd4Q1FfajBPd0ZBS3Q5cVNFdkNfSDNvQ1FsenQxWG5lUi12clZwaW5KYzZmb3FZVUNROVY4MThsUkJhQ21QZkN5TE5XNDZQRXYwcndYb2NtTWVCdjMyTXA5UnVvSHFLU3J0akhySFVPclpoUGpZSWE2MTM3TDVCZUFEREZoalHSAb8BQVVfeXFMUFdNYVJpZ0Rsek9Zc3NPdGdDNk1LU3g3clRKWEdxYkRjMndFRm80YVAzVGVCWnVQUGdid0ozVDl1al9zQ251SXhyM08yLU1RRVNEb21peEFuZm8xRXQ3cV83VFY3TTFEeWJxU0tZbFJmeVM4TklDZWdqcTltX2xsZ2VWWWk4VElCVWlkTm1jaWZLdVIyN29KU25mTW5aYUEyRVNnNWhhYUU2UDFCWEdQdi1RRlJDMk9MY1diWHpNNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2322
    },
    {
      "date": "Aug 31",
      "text": "U.S. strikes Iranian rocket launchers on the Strait of Hormuz, marking the first military action in weeks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNOGhwcUVGWm1hTHB5UWs3blpsTXlDc1gtZWJxUUNUakF6Y1FPMGc3U0MyYVlmYkJvX25LWnJjUS1fOHlfOEJ4TDlmcjdOcThhYnRVenNGSlhQUzNXSUV2R1pzQUNRM3k2TGxVMjd0Q1pFY2J2SDYwbXU3cVJxZ3ZVSV9OZnFaNzFFT3E2c3hkSjM0T1MxaUFaWnF0MG93RDBWaVdWRDBTZkROdlJtTzBGd1VObGxPTGt6NjNOQkM1UUVBRU9oRFQ4SlZibkxrV3JhV1RLTHNHV2ZGaFVhTEHSAeMBQVVfeXFMTXdQZm9CQ2R5N0hjeV9tX1M3R2RJazR6UWs3NUcwb204MDlZOEs4RmRjMTgxbzVtRkxzTWtyZTFsMVVPQ1lwaEtSMFlpbEVfVW0wYjdGX29EYkFlckFkRUhJX243a3ZCaUc1d0EyMEhqTGZiMXlBSU16ZndoTHc5cUM4LTNqTU5kVDRGNFpjV3hVZ0tCUXY4NndzUk5wMGhpdTNOWGtISlRlRGhoa3VuQUhzYzZpZVlvbUc5V2JVeWYwaEN5TmR4Y2xhUjJWVkxKSWR3ZER3T0VWb0t2RElvbThiYTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 2322
    },
    {
      "date": "Aug 30",
      "text": "West Asia conflict escalates as US-Israel strikes hit Iran, and the US Embassy in Riyadh is attacked.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2322
    },
    {
      "date": "Aug 29",
      "text": "Two tankers carrying Saudi oil were attacked in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxPbTdiazZLdjJmZFUzaDZwUHpSV3R0b2lubVJLcXdtNmk1WEZjbU96MjJveEl4dl9FWjl3V3kwTVQtY0N5WnhINS1PSXoyNUNtYXpub0EwWVBCZklqaTJPTXN0QmxaTWJ3b284NWx4ckg4S3NONkl4WEVnSzdaaV94cUJ0YXI3UlZHV3RwZ1B2am8xMHc2VnV1TTBjcExjSEg1R2d0RWhuUkY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2322
    },
    {
      "date": "Aug 28",
      "text": "Trump warns of hitting Iran 'hard' after Iran targets U.S. forces in Jordan.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTE4wSnJRS01nMGw4dnRINXlHYjVUUHBJaVNncFAyXzUtUWpMbGlFX0x2M0I1SXpNdElMZ0VpYzE1cm1tRFk4cDBob29xMlp3OExfS1RJcFplNEMwVFVHd3ZvTlZzb0x4d29iUjVOcGsxRzZrd1Vm0gF6QVVfeXFMTTZSZEkzZFVMR1YzOHo3V2pMSEZlTGZBQ3VhR3NLUmp3VVNVX0JDZkFVUlpDdWFzc01LUExwcnJqYTdQbGhWS2E4VEVnOUZjcm9Tc0Nib3Q2TDVmVlVUeVlGMExqNXRkUC1zdklFZjlyOTRaZjdteEZkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2322
    },
    {
      "date": "Aug 27",
      "text": "Military leaders warn against extending Iran war operations, with a leaked document showing generals are concerned.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxNelBwdjExMnFiT0Q4TTJNdXIzTmN1WWFCSEZtdHhjbkFRYkhRc0o4U3ViX3pVSmQ5c0JBRkd3UXZwNFE1T0lLWUFPTXpWaW5JNDFEbC1fM3ZNczEwOHVudFZMUVNRbHJkWEFRWHA2Z203R05FbE5FOVVXLW9mUzFkRjI3TlIzNWM2eEhNWENjOTlNTmM2NVVKdGNFaDhITEFMeThNVnc0SXN1N3B0cUFNNlZrWWhkbjVnSTV6ckVPUUk1dGd2NHlr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 2322
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
