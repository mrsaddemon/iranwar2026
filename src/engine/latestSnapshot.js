export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 487,
  "lastUpdated": "2026-05-03",
  "lastSyncedAt": "2026-05-03T12:00:00.000Z",
  "warDay": 65,
  "summary": "The Middle East conflict continues on Day 65 with ongoing hostilities between Israel and Hezbollah despite a declared ceasefire, while diplomatic efforts involving the US and Iran are underway amidst threats and a halt in Strait of Hormuz traffic.",
  "lastNarrativeUpdate": "2026-05-03",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 5,
    "summary": "A declared ceasefire between Israel and Hezbollah has collapsed, with both sides continuing to trade blows, and U.S.-Iran talks are uncertain as a broader ceasefire is set to expire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
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
      "date": "May 03",
      "text": "Iran submits a 14-point response to the U.S. proposal aimed at ending the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTFBLMi1mWVVxa2c3MmhYY3lTYndRdDhoQWZVaGhXVE1JVnN3ZW1jWldnUnEtSDU3ODNPa3l4emNCb2RCQWlYSERJdjBwVGtFLUQ3TllZRmZuT3hSQzYtWS1LSHpFTWp6UUJTMm4wR0FhY19BNnRueE9qUTVhMFJ3Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 487
    },
    {
      "date": "May 03",
      "text": "Israel and Hezbollah continue to exchange fire despite a previously declared ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibEFVX3lxTE5VQldEVmg4NWhDNTFHeWRQQXNoWW5XWUg3WEFSeS1KSG9PQ3NVT1I5OUpnQjE2UVBYbmVzRy1vY0lUSGY1QVIxM05ic2RhbmlsUVZZeWEwdjdRZlJ1YmlDT2JEZHk4QTdyUVFhYQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 487
    },
    {
      "date": "May 03",
      "text": "Iran warns of a 'long, painful' response if the US renews attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxPUkhFQUFYcXRXbmNQTVBoX0JSTWVFZUhuUEtQLWEzMXd0V3cwVHIyck9SdWV2c2drTk01bnMyQTZmMGdKa3lWWHBfcG5DTUZINEJZaEwyNV9Sa3BNZWZKNy1tSnNyRmtKUmFvcFZBVWxfZVBIdFBXX0JQTG1qSWRKR2djaGVGSS11WHp0SFo1OXZla2diSl9R0gGcAUFVX3lxTFA1R3pSank2OWROSzVkaTR5MkdSNTBZVW9TY2IteDZuNTBkZk1RTEQyMTRLQTVtS0J0c01sdnRTWV9sX20zWlYwcGtVUVk3R0pvdGtSWXFOTFl0bVRpVk5RTTlDYWRsZ1RJRTBNMWdFTG50NFZjREtIZklTZkhkdjN1VnBzNEtzV1pzWk82VEFhenZ4VHZPaU53YlZScQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 487
    },
    {
      "date": "May 03",
      "text": "Satellite data reveals the extent of US-Israeli strikes on Iran.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 487
    },
    {
      "date": "May 03",
      "text": "President Trump is reviewing a new Iranian peace proposal as Israel continues strikes on southern Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxOV3lZNjd6NWVNUWlvbUVLNlFyakY5YnZBNmJlMHpaeWJDX1JvNG1YY05sSjJzWVl5TTFzc0cxRDgtX3ltWWFKSDYzTTVoZ1l2elFaZ1pRZ3hoRFJybXNoNWs0UVA0ZFJ3bW1hdWp1MTVmTExnTlFKT1Bidk84T3RIaDcwQkw4NlFMQlUxeVo4ME4wT3FmWFV0MGh30gGfAUFVX3lxTFAtaE5xX242SDlkeW4yVl9Qd1hqaXAxN1RHOTVuUDZ2VThEczlHOG5KWFFwNFdtSnUwdUMzWXhFSHZYenlmci04ZzF3a1hWd3NGel9UV25QRTI2ZzhVckxLWDRCc2steVhJYUZaaGlQanp6b19jbm5iRGpmNXMzV2RGbEJXRGprZExGck1LQXlybjEyNlFUNmk2cVJjWEpmMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 487
    },
    {
      "date": "May 03",
      "text": "Traffic in the Strait of Hormuz has halted as Trump weighs Iran’s new offer.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 487
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
      "perspective": "Iran",
      "headline": "Iran Proposes Peace While Maintaining Readiness",
      "summary": "Iran has submitted a 14-point peace proposal to the U.S. to end the war, while simultaneously issuing warnings from the IRGC about its full preparedness for potential conflict resumption.",
      "tone": "strained",
      "latestSinceUpdate": 482
    },
    {
      "perspective": "United States",
      "headline": "Trump Rejects Peace, Threatens Relaunch",
      "summary": "President Trump is reviewing and rejecting Iranian peace proposals, stating Iran hasn't 'paid a big enough price' and is considering new military options to relaunch the war, alongside threats to withdraw troops from Germany.",
      "tone": "defiant",
      "latestSinceUpdate": 482
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Strikes Amid Drone Threats",
      "summary": "Israel continues strikes on southern Lebanon and faces new challenges from Hezbollah's advanced drone capabilities, while its UN ambassador defends the IDF's morality.",
      "tone": "strained",
      "latestSinceUpdate": 482
    },
    {
      "perspective": "Regional Impact",
      "headline": "Two Months In, War's Toll Evident",
      "summary": "Two months into the Iran war, the sentiment is that 'almost everybody is a loser,' with significant damage reported to US military sites in the Middle East.",
      "tone": "anxious",
      "latestSinceUpdate": 482
    }
  ]
});

export default LATEST_SNAPSHOT;
