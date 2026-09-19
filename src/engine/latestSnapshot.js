export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2446,
  "lastUpdated": "2026-09-19",
  "lastSyncedAt": "2026-09-19T01:17:39.880Z",
  "warDay": 204,
  "summary": "The US-Iran war continues with reports of US setbacks, increasing US casualties, and potential war crimes, while regional tensions escalate with attacks in the Strait of Hormuz and threats of further US military action.",
  "lastNarrativeUpdate": "2026-09-19",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is active; conflict and escalation continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
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
    "nuclearIndex": 10,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Sept 17",
      "text": "Reports indicate the U.S. is losing the Iran war by nearly every metric.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxOMVdacDRMRDJXUnQzeXF4bldVYXlvMXlKWVJXM2hfMXpDQXZXZkJHY09sbzBvZy1Tdk4yNE9oZEhqNUk2TWpzeW55OFRxNzd6OFczdTI1bXVPOUxqWTlWQWVuLXdEVldOYjZpdmI2RlNMc0NGWEVUZG5ueWpFMXY4dWJ0WndEVHpiX0MzcTZ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 2446
    },
    {
      "date": "Recent",
      "text": "US troop deaths during the Iran war exceed the Pentagon's public count by at least four, according to reports.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiygFBVV95cUxNWTJWTFE3dlFIRDVOVDZiY01XQXNxNDI0Z1RiWlFybTFpaEFEQUtpcVRnaEVNUUxPSkl3eFpLc1JzakdRWHNFQWZSUHhQMmQ0T0MtOHBrUjFYTGIzM0dMUmFwNGZPdWhkZUdUSmR1Q29mTHZXNDJuY2d6MllvMXNTM3pGM1BHQmVvQkstdEd2SDE2ZjJ4dXpxdmVSa25KcWJxaUV5eUFrNGFLSUJoT21wNDRieGxuQjFzTXNxU1dFZFlCT3R3aEJESmRR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2446
    },
    {
      "date": "Recent",
      "text": "Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm; a U.N. report suggests the U.S. may have committed war crimes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "amnesty.org",
      "latestSinceUpdate": 2446
    },
    {
      "date": "Recent",
      "text": "President Trump weighs a return to large-scale Iran strikes, stating he has a 'big decision coming up' and threatening to 'annihilate' the regime.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNN3BOLWNqMUJEYnA0WTZ5cDA2VUhJOEt6VFNIeGZmRXM3YWlicWdkTVhKWmg0blR5LTJvcUVyQjF3VHdBTHJlV1Z2MlhSUXNjLTQ4cXZ1cTdaNGRyTjlaSGlmNUNMOXYwWGo0ZFhZNXlienZhdUZVQXVVb2djdUFycVZhTzQxLVl3alR4UlJ2cnFfd3JJTTdoOEtLa0hJOW4wN3dIb0V1MzMtWVdUc0M00gG0AUFVX3lxTE0zR05GTUxWb0QxYlNLRDk2a3o1VDhHWXd1LXJwZnRKU0tVZm1Sa3o2Rko5NnN4aEdSeXd1TDlRdDNSU0VxTjVYZDZZblVVRXhHU2hQdFpRbU1FQWJLUnBsQjctMVZ1TzhmRDRVQnhENmdadDVTXzF6QnYzY2hTNTdQRC1xQU0wRkNyaGVnMnZpZjVXN3ZSR2Z3bkdnTjJ0TnBuR2Y3NEl1b2gyQnQ2Tkw2T1BUbw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2446
    },
    {
      "date": "Recent",
      "text": "Two ships were attacked in the Strait of Hormuz, with Iran claiming it struck an oil tanker.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxNeWdlRjU5QTRNU0tfUUpTVW1iYUNBQ3hWejBlMVBaWTFEbFh1MkVtM1QzamhsY240NFQ3aW1vTUdMb0JaVUk2QWY1WE9SZWNqLUpzWVI4OFpyWlN1b0pXTW5vZzNEc3ZqZV9wdVowMGpzeHJub1ZFTWtoZGRyRklIbnR2d19mOVhhWG5GdkxTdTB1bktBRHFMSlVGbEZ5Mk0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 2446
    },
    {
      "date": "Recent",
      "text": "Iranian strikes damaged hundreds of US military buildings and dozens of aircraft.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxPMXlmQzNrdGJacjYxUHlIQ1JYTjRfczEzR2Q2cjZaejNqNVA4ZlluSGdoMTFNalotejBQQnI2Sm82a2NBSUNBSVF1VU42SUx4X3FoSGU1RDhFcFVxTWRIS0Rsa0RNUng2aTk0dmNCdUxBc2dWQ09NOHJjM0V2OThaUHFVTXZkbUtxYzlEbS0zSS1FM0VHT3VPaUtZUG02MjB3QW9WYTRRd0JWN1lHOExoSW81TC1FajNPb2ZhdUY2SW1UM1BlaFg5bkpyYlF5TnN2bTJpcjNjTVA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Military Times",
      "latestSinceUpdate": 2446
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
