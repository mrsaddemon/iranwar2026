export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 981,
  "lastUpdated": "2026-06-16",
  "lastSyncedAt": "2026-06-16T12:28:10.855Z",
  "warDay": 109,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.4,
    "durationDays": 1,
    "summary": "A US-Iran agreement to end the war has been signed, but its immediate implementation is challenged by continued Israeli and Iranian military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
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
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 30,
    "tradeImpact": 22,
    "sanctionsPressure": 54,
    "globalPressure": 55,
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
      "text": "US and Iran virtually sign an agreement to end the war, including the reopening of the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 981
    },
    {
      "date": "Jun 15",
      "text": "Israeli military strikes Hezbollah targets in Beirut, drawing condemnation from President Trump.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBaZVE2UC11VHhpR2ZqaHlpQ2M4dlBxc1VPX2M1ekdRRXN6blAzcXdHbE5EV2JOYkkyU2lpWmRNeEgzYVVsd0tIYmthcTg3Z1FnSFppSEZnWVB0UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 981
    },
    {
      "date": "Jun 15",
      "text": "President Trump criticizes Israel's handling of the conflict with Hezbollah and warns against jeopardizing the US-Iran deal.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 981
    },
    {
      "date": "Jun 15",
      "text": "US bases in the Middle East face a second night of retaliatory Iranian attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1SZDdKa1gxeUJSNTBHc1hsN2preWRiM1RqbjRlVDlYUzRjc0twS01jX25uWG83dk1ScmlnSUZpLUE3ckVOSGJRZmxjSXo1dXRYdmMtLWZ1OEY3SFRWU1Y2SERvZmpHeFZUanRqdTc1c2pDMjFzdUVz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 981
    },
    {
      "date": "Jun 15",
      "text": "The US states it will not soften its military posture in the Middle East despite the Iran agreement.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMizwFBVV95cUxOX0dpUklsbmUxdDB6R0tRS2NJMHludzRrNG5zN2dfYWRYR0dlMUZtZmw5TS1CNUZfM3lOM2tiWDRna0p4SU96Q3J1TkJaWUJFMXEweVZENjRsOXVra2MxVTA3ZGl6LUJFU1JVNnZKWFkyelhYeFl3NHJ1NVNMLVZ0TGhOVDRjcFJZMllrc3BXa2pkWjVpWlc3SUpJaFFzbGNKTFlnTmFOVHdiMmJNcU4yQ0JuX0VOaXlCSlZ2YmpGMlFYSFJsemlrMWtRVERsTzQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Military Times",
      "latestSinceUpdate": 981
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
