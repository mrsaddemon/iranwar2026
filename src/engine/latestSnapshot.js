export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 982,
  "lastUpdated": "2026-06-16",
  "lastSyncedAt": "2026-06-16T17:34:23.386Z",
  "warDay": 109,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.6,
    "durationDays": 1,
    "summary": "An initial agreement between the U.S. and Iran aims to end hostilities and reopen the Strait of Hormuz, but its stability is threatened by ongoing regional conflicts and retaliatory actions."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 20,
    "tradeImpact": 15,
    "sanctionsPressure": 54,
    "globalPressure": 53,
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
      "date": "Jun 15",
      "text": "Trump and Vance virtually sign initial US-Iran agreement to end war and reopen shipping.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTFBsS3dOOXZmUFdkN2htVW0wQjB4MzdrUlBWazE3T3hDNjZSajhKeXIyaTlodjlFNV9oWF9SeHdBcmdPYlAyaG5QeVNHeEFUeUQxeW9nZkxyb3U0LTBLb3lYVUoyR3V3MGFFbkFIb2NYcWRBZW8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 982
    },
    {
      "date": "Jun 15",
      "text": "Israel strikes Beirut outskirts as fighting with Hezbollah escalates.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 982
    },
    {
      "date": "Jun 15",
      "text": "Trump condemns Israel's Beirut strike, urges stand-down, and suggests Syria fight Hezbollah.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE00bzAyQUpFVVFHOWtkLWtJTzk0NlEtTGMzQWhkclpfY1JEcUhkTWExbXhvWmlqX3JYT1g3ajlLNUdUcktGTTVKSzZqR2pXcTE3Q0ZLUk81RGdrOHJzU3VfUkxYUzNMRnEwWmlYbm1oSEp0U3VlSjUtSndOUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 982
    },
    {
      "date": "Jun 15",
      "text": "US bases in Middle East face second night of retaliatory Iranian attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1SZDdKa1gxeUJSNTBHc1hsN2preWRiM1RqbjRlVDlYUzRjc0twS01jX25uWG83dk1ScmlnSUZpLUE3ckVOSGJRZmxjSXo1dXRYdmMtLWZ1OEY3SFRWU1Y2SERvZmpHeFZUanRqdTc1c2pDMjFzdUVz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 982
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
