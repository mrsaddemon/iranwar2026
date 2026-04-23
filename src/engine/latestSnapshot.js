export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 327,
  "lastUpdated": "2026-04-23",
  "lastSyncedAt": "2026-04-23T22:00:00.000Z",
  "warDay": 55,
  "summary": "A fragile ceasefire between Israel and Lebanon has been extended amid escalating tensions in the Strait of Hormuz, where Iran has seized a ship and the US has issued a 'shoot and kill' order against Iranian boats.",
  "lastNarrativeUpdate": "2026-04-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 21,
    "summary": "The Israel-Lebanon ceasefire has been extended by three weeks following White House peace talks, though its stability is questioned amid internal Lebanese divisions."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Apr 22",
      "text": "Israel's attacks in Lebanon have reportedly increased.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 327
    },
    {
      "date": "Apr 22",
      "text": "Iran seized a ship in the Strait of Hormuz, described as a 'tit-for-tat' escalation.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 327
    },
    {
      "date": "Apr 22",
      "text": "President Trump announced that Israel and Lebanon agreed to extend their ceasefire by three weeks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE0tNzNHeS0wUWZqdFM1TGUtQ0x0MkhMakpPMWFJOGtFSjdhSkVIbFNZbVFxZVhyZWUzVFA5aVlPVTRLQnN2TGdMM1FyU2Q1cmZFZUcwYlB2Yk5JVlFKMlB4SHFCRmFmR1U?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 327
    },
    {
      "date": "Apr 22",
      "text": "A Times analysis indicates Iran's schools and hospitals are in ruins.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 327
    },
    {
      "date": "Apr 22",
      "text": "President Trump ordered the U.S. military to 'shoot and kill' Iranian boats mining the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxNd0RrbHZHZkFPZTQ2VF9WQkh6MUxjVVkyaHZzSm55WVRuM0FROEwzRnNkQV94dWk5U0RGYlM3eE92akUzaDBiZG9pdUdlUFZfcXZpWmgzMDU3YjA1c1REdlNYWXhZT2t0UDRFLW1wZzNRMEVtblprVkF0UVIzaHJXaUFPekRSYkZCZHd6QUFGYzlXTFowVXo1UWVrdDBERHgyNjNmc0dhNkp2a0RWTHNXaHl6bGtmbDdFZV82UTRqSmttRlhJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 327
    },
    {
      "date": "Apr 22",
      "text": "The U.S. military is developing plans to target Iran’s Strait of Hormuz defenses if the ceasefire fails.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxQaVk4eWR6LXRSekNDOHFWS1paVDlIS2tIa1BNQkt6WUhPTVZjUlc4M2NVWFdyY1Rhd1hmMXhZd0pOaXZ1dmxCZ085elczZWRXTlY5SDFvcl9DR3pWVTQwNkxlekQ3N05HTnFGSmJoNVZlUHJxVzZ3ZHY1VndVekVEaTVKNVlMdDRETHZTa0FUNlM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 327
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
      "perspective": "US/Israel Military",
      "headline": "New Artillery Deployed, Missile Stockpile Concerns Mount",
      "summary": "Israel has unveiled new artillery against Hezbollah amid the fragile ceasefire, while the US military faces scrutiny over its use of expensive missiles against drones and concerns about depleting its stockpiles.",
      "tone": "strained",
      "latestSinceUpdate": 314
    },
    {
      "perspective": "Iran/Hezbollah",
      "headline": "Ships Seized, Disarmament Rejected Amid Truce Breaches",
      "summary": "Iranian forces have seized ships in the Strait of Hormuz, and Hezbollah has rejected disarmament while firing at Israel, citing truce breaches. Iran's president lists obstacles to a deal with the US.",
      "tone": "defiant",
      "latestSinceUpdate": 314
    },
    {
      "perspective": "International Law",
      "headline": "US Strikes on Iran Questioned as Potential War Crimes",
      "summary": "Over 100 international law experts warn that U.S. strikes on Iran may violate the UN Charter and constitute war crimes, raising questions about the legality of ongoing military actions.",
      "tone": "skeptical",
      "latestSinceUpdate": 314
    },
    {
      "perspective": "Geopolitical Impact",
      "headline": "Middle East Crisis Weakening Europe, US Talks Stalled",
      "summary": "Erdogan suggests the ongoing war is starting to weaken Europe, while US and Iran remain in a blockade stalemate, with uncertainty surrounding talks and Trump denying midterms influence decisions.",
      "tone": "anxious",
      "latestSinceUpdate": 314
    }
  ]
});

export default LATEST_SNAPSHOT;
