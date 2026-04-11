export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 101,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T23:18:55.156Z",
  "warDay": 43,
  "summary": "US and Iranian delegations are engaged in peace talks in Pakistan amidst rising tensions in the Strait of Hormuz, while Israel continues its conflict with Hezbollah and authorizes talks with Lebanon.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": false,
    "status": "fragile",
    "confidence": 0.55,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect, though US-Iran peace talks are underway and Israel has authorized talks with Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 80,
    "oilDisruption": 85
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
      "date": "Apr 11",
      "text": "US and Iranian delegations are holding peace talks in Pakistan, with discussions lasting into the morning hours.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 101
    },
    {
      "date": "Apr 11",
      "text": "Two U.S. warships transited the Strait of Hormuz, marking the first such passage since the war began.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 101
    },
    {
      "date": "Apr 11",
      "text": "The U.S. military is reportedly 'setting conditions' to clear mines from the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQN3hnbUZSX2gtVDBXNFhtRndieXlMUDhHd2tTQVZ4NnU0Z01fZnloY3R1bWZGeHZuRGVQUGlFRzZmcUkxVEx5OW83SDVyN2prOXRtb0RRRl9nbFZrWWNKWWs0dGU0TnZQSVBHTHNtNDlaWmVTckdNekJJekZiUWtnUFVoYTJudlUzZnZaNnVhdmotQnJwTEdTQWY1UDdMbUJIUWU0Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 101
    },
    {
      "date": "Apr 11",
      "text": "Netanyahu authorized direct talks with Lebanon, but Israel rejected a ceasefire with Hezbollah before next week's talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQRUhHalQzTUJIZW5FOEd6NjQ1Zy1zX3pkWlRuMlV2UmhLWnRnVWE1aEctUE44cldJWXlHZ09seUZXWGNyY2Z4a293WkdZX0ZvVmdIQnVRN2hSb1REclFtZUxUMmJSVTYxVUhCZk5xMHk4LVpOY2JFSkZ2bXMxYk1WSXd0YXM3QS02ck9KRDdTbGh3U1ZxdVgzWGxYTXo1aTMwUEoxUVVZaS0wUXc4S2U3ZUVGNNIBuAFBVV95cUxQNXNjb3RtWElmZUFXY0c1Ym0xbVdpb3ZHUnpHTWV2dzVjQkw5VkM4bE56VktyUmRKdkt2Mmg5SG50Zi1RMGhJV3F5Mk9Ld1VzN09sM2taRExMbHZXVTZncHE4R2xPT0hQVlV5OHFITU9vWUI1S2pkcjEwRmV6R1cxTmJSXzdtakNqT19PUXlvdE1fS1pXdmpBMmRxTU13RFdqNjMwVXJtNEczZXNnRzlLOHhPNklKMzNh?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 101
    },
    {
      "date": "Apr 11",
      "text": "Trump warned of fresh strikes if Iran talks fail and claimed the US has begun clearing mines in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxQRHpKdTgxUlVlakFwSXFXN2dPVkZ2dkJtS3JJQWwxT1VGcmJOVTNJeVBWUUNxcFEwTV9jX05SRFZGemJwV1lPS1QwZ0RMYzN6Sms0Z01CeXpYSHpGejdwRDNVcjJ4d1Y5UUlIeVVLdVJkUV94dy14R3hRQ1V5cExBeUd3SDB6NGVNX1BnNk9fU2MwY2lCaV83T0pPWkt2R1c3Zk1lWUZMbXZrYWhqQnhvOGxPemxaa2Q0eHo5blhfcERFUG9JMVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 101
    },
    {
      "date": "Apr 11",
      "text": "An expert suggests the U.S. military is preparing for 'round 2' against Iran, with the Navy testing a Hormuz blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxQNTVRX2pESDU2MThjSVpwWHdDNkdfX1c1MFhYZHBiT3lUUkFPTE9WNTc1Vkx2MTdaaGRYdHhTZ3M3cF9ESUktc195bWJfUmNYSmk4WGFRaGtxN1YwaWNMcjNkZF9iU0dZWng2ZlV0Q3FTcEdQdVNpSjFDb2p2aE1nemVBN215cTNodkd6X2xLYnVHcGVfd01mZFlvdHdCUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 101
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
      "perspective": "US Diplomacy & Pressure",
      "headline": "US pushes for negotiation while maintaining military readiness.",
      "summary": "The US, through envoy Vance, is actively engaged in peace talks with Iran, while President Trump warns Iran against failing negotiations and highlights US military readiness. Trump also criticizes Iran's actions regarding the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran engages in talks amidst Strait of Hormuz closure and ceasefire tests.",
      "summary": "An Iranian delegation is participating in peace talks, but the Strait of Hormuz remains closed or has low traffic, and Iran is reported to be testing the ceasefire. Iran is also reportedly unable to find mines it planted in the Strait.",
      "tone": "defiant",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Israeli-Lebanese Front",
      "headline": "Continued conflict in Lebanon despite ongoing talks.",
      "summary": "Israel and Lebanon have agreed to meet for talks, but Israel states there is no ceasefire in Lebanon, and both sides continue to trade strikes, further threatening any broader de-escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "US Military Internal",
      "headline": "Disquiet and unpreparedness claims within US military.",
      "summary": "Survivors of a deadly attack on a US military outpost in Kuwait dispute the Pentagon's account, claiming the unit was unprepared, contributing to growing disquiet within the military.",
      "tone": "skeptical",
      "latestSinceUpdate": 64
    }
  ]
});

export default LATEST_SNAPSHOT;
