export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 123,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T18:26:15.581Z",
  "warDay": 44,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "Peace talks between the US and Iran have failed, leading to renewed threats and no active ceasefire."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
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
    "nuclearIndex": 15,
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
      "date": "Apr 12",
      "text": "Trump says US will blockade Strait of Hormuz after Iran talks end without deal",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTFBOTVJhU0NGZ21nWU1ka3pKNnNUVHR5ZDZ5YW5UMXJ2RnJlRHNUMks0T1ZWdGtucEx1dmk5ajd3LXNGQy0yMU5Hb0JxeDNXNzlnWnU3aHg5eXRnOTlrVVgyRHdoYXJJZnYycFBBdnNFNWhuYm93MjVteDBR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 123
    },
    {
      "date": "Apr 12",
      "text": "U.S. And Iran Fail to Agree on Peace Deal After 21 Hours of Talks",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxNMW1lcTdTd0t4UXdWc1NqQ09Rb3VQRjUxejRkN1FMNV9Eb0JXbGxjaVpMRmJGOE4wUWZQQW4xR1RUZ1JOOWVPdmNNOTJqaWdfYUZZZWtYSjRqU2JsaWhjb3ZJbDJOSG9samNsa3JZV2M2dHJMSWR1U005a2Jmam5seQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 123
    },
    {
      "date": "Apr 12",
      "text": "Iranian Delegation Arrives at Peace Talks, With Vance en Route",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxPMEVFMUtBU0M0VXBGM25pbWk4b0hFNUxweGVNSFJDYTJlMUZjSnFuMXZicXNZNU9SZnhleEFaRVRQN1VUb0NJQ3RIYm9Fb0dLcjVKd3RuNVV3eXRCSm1yTzlURmdUWlN4NUZFQXBnZ29pR2Nxa0Y0YjlxRmNJc0Y5eQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 123
    },
    {
      "date": "Apr 12",
      "text": "Iran warns of 'strong responses' as Israel's attacks on Lebanon threaten ceasefire",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxPb0psUE5qdkY0ekNxN1NNcjJyRFl2VjhROXhwWkRHVWZxek5jYVRsNjdEMnpaTGtObnJWQ0FhdXhBRHZtTlY1V0ZVbGNJNG5lS2d6anJEdEdmTzIwTE9ISVVKbzFLbm9qUm5tZ29zTHpvTEE4N2RidVRNeUtqT1FZc043NDhmZDQ4N2x4eVZ6ZFhlSnp1Qk4zZ2Q4emdiY2hxbnRTOS1Ia01sOUcwVnNMMW1NNGFTUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 123
    },
    {
      "date": "Apr 12",
      "text": "IDF says it raided hospital used by Hezbollah in group’s Bint Jbeil stronghold",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxQWUxnWXBWMG9kdTBGRWpvWWk4Qk5wUXhuR0EtQVhVT0tvMUlWWUJYN3pWTTlmdnhSeG00NGZLd2VnT2UxRXdBb2FQWUhtNVg3VmxaOWI2SmJKUkhiOEZNNmFxTUtRSFBDUXBEUF9oRHE0Tm90QUJKUGpjQ1ZOZFdEZGtjZXlTX1hLMDd1cHBzazVHaDRybTlTWWpWanFOdjRwWFZJXzFBdXRublpI0gGyAUFVX3lxTE9HMTVRWmdsUEdxTndyeU9YY0lMYnZScWdhb0I2R0FaLU9aU0FFVzhRd2RBb0FnRFJIWkhaRXhVbzM5ZDZDRm1ZVm1yRFRXVFZ0MHd1M1pzb2pOVkwtSXY1aXNMWmdUOWdIQ3Fzd2dmelRzTVB1UU1yXzRLRHQ0OUZ6UDhFcGNXU1BsbzA4bjUyWEdXMFNCSU5oSjMtX2pMOHJCb2pKQ1RuV2VzWlU3T1ZHT3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 123
    },
    {
      "date": "Apr 12",
      "text": "Navy tests Hormuz blockade as expert says U.S. military prepares for round 2 against Iran",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxQNTVRX2pESDU2MThjSVpwWHdDNkdfX1c1MFhYZHBiT3lUUkFPTE9WNTc1Vkx2MTdaaGRYdHhTZ3M3cF9ESUktc195bWJfUmNYSmk4WGFRaGtxN1YwaWNMcjNkZF9iU0dZWng2ZlV0Q3FTcEdQdVNpSjFDb2p2aE1nemVBN215cTNodkd6X2xLYnVHcGVfd01mZFlvdHdCUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 123
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
      "perspective": "United States",
      "headline": "Trump's Firm Stance on Iran Negotiations",
      "summary": "President Trump maintains a strong military presence near Iran, warning of further strikes if negotiations fail and asserting readiness for future conquests. He emphasizes that the military will remain until a 'real agreement' is honored.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Iran",
      "headline": "Diplomacy Amidst Strait of Hormuz Threats",
      "summary": "Iran engaged in direct talks with the U.S. in Pakistan but also issued stern warnings to American warships in the Strait of Hormuz, signaling a dual approach of negotiation and deterrence. The delegation arrived for talks, but no agreement was reached.",
      "tone": "strained",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Israel",
      "headline": "Continued Offensive Against Hezbollah",
      "summary": "Israel continues its military operations against Hezbollah, rejecting ceasefire calls and asserting its intent to counter perceived threats from the group and Hamas. Netanyahu insists Israel 'will deal with' Hamas and Hezbollah's plans to invade Galilee.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    }
  ]
});

export default LATEST_SNAPSHOT;
