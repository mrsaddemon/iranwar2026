export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2450,
  "lastUpdated": "2026-09-19",
  "lastSyncedAt": "2026-09-19T17:10:21.338Z",
  "warDay": 204,
  "summary": "The Iran war continues with reports of undisclosed US troop deaths, US-Israeli strikes causing civilian harm in Tehran, and former President Trump weighing a return to large-scale strikes, while oil traffic in the Strait of Hormuz shows mixed signals of disruption and escort operations.",
  "lastNarrativeUpdate": "2026-09-19",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is currently active; active conflict and military operations continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
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
    "nuclearIndex": 45,
    "escalationLevel": 80,
    "oilDisruption": 75,
    "tradeImpact": 68,
    "sanctionsPressure": 63,
    "globalPressure": 80,
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
      "date": "Sep 18",
      "text": "Reports indicate more U.S. troops have died in the Iran war than publicly disclosed by the Pentagon.",
      "severity": "warning",
      "sourceUrl": "https://www.washingtonpost.com/...",
      "sourceName": "Washington Post",
      "latestSinceUpdate": 2450
    },
    {
      "date": "Sep 19",
      "text": "Investigations reveal devastating civilian harm from US-Israeli strikes on Tehran neighborhoods, with a UN report suggesting potential U.S. war crimes.",
      "severity": "critical",
      "sourceUrl": "https://news.un.org/...",
      "sourceName": "U.N. Report",
      "latestSinceUpdate": 2450
    },
    {
      "date": "Sep 19",
      "text": "Former President Trump is reportedly weighing a return to large-scale strikes against Iran.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2450
    },
    {
      "date": "Sep 19",
      "text": "The U.S. military touts escorting 1 billion barrels of oil out of the Strait of Hormuz, amidst reports of fluctuating traffic and LNG vessels reappearing.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxON1ROYVJ6T0RNSzVUbXVHZTJTc0NDajFSSzB4VjdJcWVpX2JVVk9KcnpmZHNMZFZxS3pIaTFRMlUzSExKZHBiUlRYa2l2M0s1amg4aTd6alZNLW53cmZsWVhFZFRsUG91NnNLMXNSdnhGckhpTTlRTF9JV0xRS0dDNEh3cUhMcFl3NGNCdQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2450
    },
    {
      "date": "Sep 19",
      "text": "Israel accuses Lebanon army chief of Hezbollah ties as talks stall, following analysis that bombing Hezbollah strongholds could open a diplomatic door.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNSkxKWnFvY1R2OUtnX0xEWmhnX3FBQlZNMnFTZEZBUXJOcHlFbVFxVnRLQjhIcTludVdpM0ZCS3oyNEgzUk9OckF0NlJSbUZjdzFxOUE1YV9VcDlxLTZxMXRtMHptUklhZGk0RnBkNlQ0WkxEamFjYWNWTUt1cTVST0RRMmlpajNOMWFlUnJIaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Arab Weekly",
      "latestSinceUpdate": 2450
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
      "perspective": "US/Western Critical",
      "headline": "US Losing Iran War, Facing War Crimes Allegations",
      "summary": "Reports indicate the U.S. is losing the Iran war by nearly every metric, with troop deaths exceeding official counts. Investigations into US-Israeli strikes on Tehran reveal devastating civilian harm, leading to a U.N. report suggesting potential U.S. war crimes.",
      "tone": "anxious",
      "latestSinceUpdate": 2446
    },
    {
      "perspective": "Iran/Allies Defiant",
      "headline": "Iran Strikes US Targets, Houthis Emerge as 'New Hezbollah'",
      "summary": "Iran claims strikes on an oil tanker in the Strait of Hormuz and has damaged hundreds of US military buildings and dozens of aircraft. The Houthis are described as a powerful 'new Hezbollah,' indicating growing regional proxy strength.",
      "tone": "defiant",
      "latestSinceUpdate": 2446
    },
    {
      "perspective": "US Administration",
      "headline": "Trump Considers Escalation, Threatens Annihilation",
      "summary": "President Trump is weighing a return to large-scale Iran strikes, stating he has a 'big decision coming up.' He has also threatened to 'annihilate' the Iranian regime, signaling a potential for significant escalation.",
      "tone": "defiant",
      "latestSinceUpdate": 2446
    },
    {
      "perspective": "Regional Stability (Lebanon/Israel)",
      "headline": "Hezbollah Weakening Amid IDF Operations and Normalization Talks",
      "summary": "The IDF has captured the Ali Taher Ridge in southern Lebanon, coinciding with reports of Hezbollah's weakening. Discussions around a fragile path to Israel-Lebanon normalization are ongoing, despite regional tensions.",
      "tone": "strained",
      "latestSinceUpdate": 2446
    }
  ]
});

export default LATEST_SNAPSHOT;
