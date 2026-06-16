export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 984,
  "lastUpdated": "2026-06-16",
  "lastSyncedAt": "2026-06-16T22:31:46.413Z",
  "warDay": 109,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "An initial US-Iran deal to end the war has been reached, but its terms are murky and regional hostilities, including Israeli strikes and Iranian retaliatory attacks, continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
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
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Jun 15",
      "text": "Trump and Vance virtually sign US-Iran agreement, moving towards a formal deal to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTFBsS3dOOXZmUFdkN2htVW0wQjB4MzdrUlBWazE3T3hDNjZSajhKeXIyaTlodjlFNV9oWF9SeHdBcmdPYlAyaG5QeVNHeEFUeUQxeW9nZkxyb3U0LTBLb3lYVUoyR3V3MGFFbkFIb2NYcWRBZW8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 984
    },
    {
      "date": "Jun 15",
      "text": "Israel attacks Hezbollah targets in Beirut, prompting threats of 'harsh response' from Iran.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 984
    },
    {
      "date": "Jun 15",
      "text": "US bases in the Middle East face a second night of retaliatory Iranian attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1SZDdKa1gxeUJSNTBHc1hsN2preWRiM1RqbjRlVDlYUzRjc0twS01jX25uWG83dk1ScmlnSUZpLUE3ckVOSGJRZmxjSXo1dXRYdmMtLWZ1OEY3SFRWU1Y2SERvZmpHeFZUanRqdTc1c2pDMjFzdUVz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 983
    },
    {
      "date": "Jun 15",
      "text": "US intelligence assesses Iran can shut down the Strait of Hormuz at will.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxPX3JKVm9LQzlXQjEyZzhpOXhjU2ZDblJsSk9HdXlJT0R5SzlMOEVVZXhQQWNtZzhJMnVhTkFmVDdRcXdTaTkteE5zUkJxMlFiUUZUVGhjeDRGRFFkbXc4azdXR1ZzbENoUnpUV0VqcElNTTRRdWFtME5paEwzSGd2SW9fTjdpSXljTnBB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 984
    },
    {
      "date": "Jun 15",
      "text": "Trump faults Israel's Beirut strike and urges a stand-down, stating he is 'not happy' with their actions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE00bzAyQUpFVVFHOWtkLWtJTzk0NlEtTGMzQWhkclpfY1JEcUhkTWExbXhvWmlqX3JYT1g3ajlLNUdUcktGTTVKSzZqR2pXcTE3Q0ZLUk81RGdrOHJzU3VfUkxYUzNMRnEwWmlYbm1oSEp0U3VlSjUtSndOUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 984
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
      "headline": "Historic Deal Reached, Strait Reopened",
      "summary": "The U.S. administration emphasizes the successful negotiation of an initial deal with Iran, aiming to end the conflict and restore free passage through the Strait of Hormuz. It views the agreement as a significant diplomatic achievement, urging all parties to uphold its terms.",
      "tone": "neutral",
      "latestSinceUpdate": 979
    },
    {
      "perspective": "Iran",
      "headline": "Deal Signed, But Regional Actions Threaten Peace",
      "summary": "Iran acknowledges the signing of an initial agreement with the U.S. to cease hostilities and reopen the Strait of Hormuz. However, it warns that continued Israeli military actions, particularly against Hezbollah, could jeopardize the fragile peace framework.",
      "tone": "strained",
      "latestSinceUpdate": 979
    },
    {
      "perspective": "Israel",
      "headline": "Continued Security Operations Amid Regional Shifts",
      "summary": "Israel maintains its right to conduct security operations against threats like Hezbollah, despite the broader U.S.-Iran peace efforts. Its actions in Lebanon are framed as necessary for national defense, potentially creating friction with the newly formed deal.",
      "tone": "defiant",
      "latestSinceUpdate": 979
    },
    {
      "perspective": "Global Shipping/Energy",
      "headline": "Hormuz Reopening Brings Relief, But New Costs Loom",
      "summary": "The reopening of the Strait of Hormuz is seen as a positive development for global energy markets and shipping, potentially easing oil flow. However, uncertainty remains regarding whether commercial vessels will face new fees for passage, impacting operational costs.",
      "tone": "anxious",
      "latestSinceUpdate": 979
    }
  ]
});

export default LATEST_SNAPSHOT;
