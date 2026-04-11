export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 91,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T19:34:13.675Z",
  "warDay": 43,
  "summary": "High-level peace talks between the US and Iran are underway in Pakistan, while Israel and Lebanon prepare for ceasefire discussions amidst ongoing US military operations to clear mines in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "Peace talks are underway between the US and Iran, and planned between Israel and Lebanon, but no formal ceasefire is currently active."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
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
        "precision": 0.3,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 38,
    "oilDisruption": 80
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
      "text": "US and Iran hold direct peace talks in Pakistan with Vance participating.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE5wTDVrcXZzejVCLUZGT2c2Z2M1SE9XYzJTWjlmbFNJa09mX2pJRndkTVU5cE84TmxQM3ZQTmpvQXBIcFBtYkNIcVg4SVJNTzZhRUdudEw3TDZ4TTZTYWljZDFCeUdnV3Q5bWtfcGsyUWs1dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 91
    },
    {
      "date": "Apr 11",
      "text": "Israel to hold ceasefire talks with Lebanon next week, but rejects immediate ceasefire with Hezbollah.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQRUhHalQzTUJIZW5FOEd6NjQ1Zy1zX3pkWlRuMlV2UmhLWnRnVWE1aEctUE44cldJWXlHZ09seUZXWGNyY2Z4a293WkdZX0ZvVmdIQnVRN2hSb1REclFtZUxUMmJSVTYxVUhCZk5xMHk4LVpOY2JFSkZ2bXMxYk1WSXd0YXM3QS02ck9KRDdTbGh3U1ZxdVgzWGxYTXo1aTMwUEoxUVVZaS0wUXc4S2U3ZUVGNNIBuAFBVV95cUxQNXNjb3RtWElmZUFXY0c1Ym0xbVdpb3ZHUnpHTWV2dzVjQkw5VkM4bE56VktyUmRKdkt2Mmg5SG50Zi1RMGhJV3F5Mk9Ld1VzN09sM2taRExMbHZXVTZncHE4R2xPT0hQVlV5OHFITU9vWUI1S2pkcjEwRmV6R1cxTmJSXzdtakNqT19PUXlvdE1fS1pXdmpBMmRxTU13RFdqNjMwVXJtNEczZXNnRzlLOHhPNklKMzNh?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 91
    },
    {
      "date": "Apr 11",
      "text": "US military begins clearing mines from the Strait of Hormuz, with Navy ships crossing the strait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxPWUxrN0RHTnBNb1FVWndBei1EcFVwcUlKU0NZckhFYTlCMHJNTmhVTEd6aXl0V3BjWjRrSE5wNjF5ckctUWJBaTVwMEhNV09XODNWRDNBM3R2OWRxX3pXckx6WVl0Vl9hNmktaUlaWDNrNjhXQV9FSFEzaDBXWWtkOG9wR19FWGtIREhn0gGQAUFVX3lxTE9pRVdpYy1ZTEx6UGt3Q3poTWlKRzlCcUswWG8wc3pyYl9CdDNoZEc3VS1GeEtWX1IwUy16cjRhOVppM2FCX3dfWXVTdDlzTjdkZU1XY0w3NExhUTFhUFJkLVpScmU3LXlFN19WaGx3cWxjUzZzTjdidXZneDRhVmt1YjJpWm92bVR4eHZDUW9QQw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NewsNation",
      "latestSinceUpdate": 91
    },
    {
      "date": "Apr 11",
      "text": "Hezbollah defies notion of being crippled, with supporters rallying in Beirut against talks with Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxONDRadXI4N0YxSUYzNFZKR25pRUJDMFdtejNZeV94TEhGa0FqYWdYeFJXcFNDajB3cGdfQ3I4S1EweWU5RWZKOTR2LUdpWWx1SWVub1ZKcUN0NXpsYVV4QW9aeVd0VlBqQ2RUc3dJM2RNa3ZEVGFxNG0zck5INEtoal9maDdLeXgzNzFtbW1UZWZZbXE0Mjlid2ZueFlORUtZTWN1ZG9oY2NTZlhpUVJQWWk0MXlNeVpFMnp0OWs3Wm95TURqcVJTQk0yRFRnM3BDMXA4eUxZRXg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 91
    },
    {
      "date": "Apr 11",
      "text": "Trump warns of fresh strikes if Iran talks fail and claims US has begun clearing mines.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxQRHpKdTgxUlVlakFwSXFXN2dPVkZ2dkJtS3JJQWwxT1VGcmJOVTNJeVBWUUNxcFEwTV9jX05SRFZGemJwV1lPS1QwZ0RMYzN6Sms0Z01CeXpYSHpGejdwRDNVcjJ4d1Y5UUlIeVVLdVJkUV94dy14R3hRQ1V5cExBeUd3SDB6NGVNX1BnNk9fU2MwY2lCaV83T0pPWkt2R1c3Zk1lWUZMbXZrYWhqQnhvOGxPemxaa2Q0eHo5blhfcERFUG9JMVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 91
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
