export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 262,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T22:49:12.510Z",
  "warDay": 51,
  "summary": "Direct military confrontations between the US and Iran over ship seizures and the Strait of Hormuz have escalated tensions and caused a significant oil price jump, while a fragile ceasefire holds between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A fragile ceasefire is in effect between Israel and Hezbollah, though its stability is questioned by potential violations and Hezbollah's conditional cooperation."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Apr 19",
      "text": "US military seized an Iranian-flagged vessel near the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 262
    },
    {
      "date": "Apr 19",
      "text": "Iran's IRGC declared the Strait of Hormuz closed until the US blockade is lifted.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPX3BZbTNiYm9PQUVrYUdkbURCY0t1Y2pya1RhRVBDblE1a29SLW95RDljZmJFelF4Y1dIbll1cXNEZE8xOUlpMVZzRm9hQXJ4RDVHb1V4X2lGeUx2dVVGVFc4RmpxSGlETlI4bVRFMnlBMXJjREF5QjVWRDdvcUdzMFpGeUVDMFRSUi1oOVJrNDFGMXJ4TUJ1VGJ4UGxDZUlnSHhGb1lXcFRIY0xJS1NnRFZvelBGSlFKT25MYtIBwgFBVV95cUxPMlo1TmZCR0l1RWR1UXZHcHh0Tk9qakZoa3prZmkzcHNLcFNPUHZRU3lGcXBwNVoxYkRBSzhvQXlCYXNTQVBvMS0zOHU4QkEzRDQ0MXpZMDZ3RWJQTkdFWThMUUY1Nno4SXBhTGFlMHVUZUlfS2FpdDU5Ym55X2hxbElPYnRTdmlwVXdvSk4wTTNNUjc1XzhtUXV0ZTl5M2xHaDJUU1BwMnYzM3lucGRGeU5Dd2RReS1RZFdhbEhYbkh6UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 262
    },
    {
      "date": "Apr 19",
      "text": "Two ships were reportedly fired upon as tensions escalated in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 262
    },
    {
      "date": "Apr 19",
      "text": "Oil prices jumped 7% after reports of Iran and U.S. attacking ships.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 262
    },
    {
      "date": "Apr 19",
      "text": "The US military attacked an Iranian ship, casting doubt over peace talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE0tUXpieTdWYlJEZGZ5c0gtOVBaWmY0ZElaRUQtcmlJbk9COWQ0TlY1UFpBWUpyaFpIamFOeFZ2WnZsQXlQZHVMYVJzY1gybUpiRXpLS1VDRnNjbW81ZFBqaTFpSC0xVl93MWNQdkNWTWpTQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "MS NOW",
      "latestSinceUpdate": 262
    },
    {
      "date": "Apr 19",
      "text": "Iran rejected peace talks as the US military prepared to enforce maritime order.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE1mUF9QTTFITDFGZThPNmdOSkZTWlNFTkxVSXNOdmFwZngxeWZWS2taeEdMSlYxZTVqaFlwR00yNWhZejNzTFFQTjJuZjU2NlJhZ1VkWTlB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 262
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
      "perspective": "Iran's Stance",
      "headline": "Strait of Hormuz Closed Amid US Blockade",
      "summary": "Iran asserts its right to close the Strait of Hormuz due to a U.S. blockade, while also indicating progress in talks with the US despite significant remaining differences.",
      "tone": "defiant",
      "latestSinceUpdate": 241
    },
    {
      "perspective": "Israel-Lebanon Conflict",
      "headline": "Truce Violations and Escalating Strikes",
      "summary": "Despite reports of a truce, Israel and Hezbollah continue to exchange fire, with both sides accusing the other of violations and significant casualties reported.",
      "tone": "strained",
      "latestSinceUpdate": 241
    },
    {
      "perspective": "Global Economic Impact",
      "headline": "Traders Bet on War, Oil Market Volatility",
      "summary": "Traders have made significant bets on the Iran war, highlighting market sensitivity to the conflict and potential for major economic shifts, particularly concerning oil.",
      "tone": "anxious",
      "latestSinceUpdate": 241
    },
    {
      "perspective": "US Role",
      "headline": "US Enforces Blockade, Seeks Peace Talks",
      "summary": "The U.S. is actively enforcing a blockade of Iranian ports and turning back ships, signaling a direct intervention in the conflict while also engaging in diplomatic efforts for peace talks.",
      "tone": "neutral",
      "latestSinceUpdate": 241
    }
  ]
});

export default LATEST_SNAPSHOT;
