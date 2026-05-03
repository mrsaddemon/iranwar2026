export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 492,
  "lastUpdated": "2026-05-03",
  "lastSyncedAt": "2026-05-03T16:26:17.860Z",
  "warDay": 65,
  "summary": "A fragile ceasefire between the U.S. and Iran is nearing expiration amidst ongoing peace proposal reviews, renewed threats of conflict resumption, and reports of attacks on shipping in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-03",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 30,
    "summary": "A ceasefire is in place but is set to expire, with talks uncertain and threats of renewed conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.3
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "May 3",
      "text": "Iran submits 14-point response to U.S. proposal to end war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTFBLMi1mWVVxa2c3MmhYY3lTYndRdDhoQWZVaGhXVE1JVnN3ZW1jWldnUnEtSDU3ODNPa3l4emNCb2RCQWlYSERJdjBwVGtFLUQ3TllZRmZuT3hSQzYtWS1LSHpFTWp6UUJTMm4wR0FhY19BNnRueE9qUTVhMFJ3Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 492
    },
    {
      "date": "May 3",
      "text": "IRGC warns conflict may resume, states it’s fully prepared.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxONHl6SE8tQW1PQldFa3E2YS1xVGluSkhhQy10eERhODBRazNrX292Tzdwdk9oUnlrQi02TXhKZjBBa2VnWDZpdGFQY19idU8wc1BKUkUzcHZfejI5ZmptaGZmSk12RHhXaEtEVXB6MjlmYm4yNEljVnpaOFdkQU8wRFlVdjVkSmtmN0pWWXBRbGo0XzZtbktKekFyVUJIelRTRnZwMHpEVFh2bEM3dTdYcnlYcERsUlUyQnY40gHAAUFVX3lxTE94aS01bGVkMXdRclRFUklxMVpqbzdienNVRTVNVEU0TDZ3RXQycVBESk9YanZGWDVZaktRT3NVYUE2SHVUeGN5RW9LUkhQY29TdTZBdnpNaW1ZdDgzekpUU0xabGJJQVd4d3d2VUI0ZTFRemtpMkVBZHZiUWNmZUFoZ3NGT2dHc2xlQlRxYlN2akN4eldQRE5mYTBRR2hvMTRuVDhFQ19kTmgtTGZkRVp1amhudTFLai12eWlXbTJFdQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 492
    },
    {
      "date": "May 3",
      "text": "U.S.-Iran talks are uncertain as ceasefire is set to expire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxNMHg1TVIyZGUxTVJpVkhrYmhrN3d6dlk5M0h4STJMdlRYRGJSbGJnZjVEVndmOHBWMFpEYmJxWUphSWJWc2F6MEJiVTBOazRwR1IycFYwaVhxblFsRGs3OFBrTi15eFp4NVdqcFpaQmFZSE9CX041WTIwRE5oT3VjdE9WeG5zZ1EtN0p6NWs5Y3E0S2gyWG1nMXlkQjZyZG55d0F0ZWZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 492
    },
    {
      "date": "May 3",
      "text": "Cargo ship attacked by multiple small vessels near Hormuz Strait.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 492
    },
    {
      "date": "May 2",
      "text": "Trump reviewing Iran peace proposal as deadline for congressional authorization passes.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxOV3lZNjd6NWVNUWlvbUVLNlFyakY5YnZBNmJlMHpaeWJDX1JvNG1YY05sSjJzWVl5TTFzc0cxRDgtX3ltWWFKSDYzTTVoZ1l2elFaZ1pRZ3hoRFJybXNoNWs0UVA0ZFJ3bW1hdWp1MTVmTExnTlFKT1Bidk84T3RIaDcwQkw4NlFMQlUxeVo4ME4wT3FmWFV0MGh30gGfAUFVX3lxTFAtaE5xX242SDlkeW4yVl9Qd1hqaXAxN1RHOTVuUDZ2VThEczlHOG5KWFFwNFdtSnUwdUMzWXhFSHZYenlmci04ZzF3a1hWd3NGel9UV25QRTI2ZzhVckxLWDRCc2steVhJYUZaaGlQanp6b19jbm5iRGpmNXMzV2RGbEJXRGprZExGck1LQXlybjEyNlFUNmk2cVJjWEpmMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 492
    },
    {
      "date": "May 2",
      "text": "Iran offers Trump one-month deadline to end conflict and open Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPZ0NITl9PNnN1OVFyWjl0UWl3ajU4RkVqTXAwazJzX2d0V0Z2eVZzeGQ1RDhjTFlWeW53NWprQWJ2STRtd2tpa0lOU0RnWFdZbExoYTBwVE9KXzk5V1RidlNTazJLcFhVYmVodXltMms0c0ZlZWtkY0RyNDgydXRkQjlpTWgydlJnRG1pT2dKX2pPa0RjV2NJTmREbVRHLWt6WDk4SGJudlRTelZGNHIyNTFUNzF2dms3aGpRb1pMaF95Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 492
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
