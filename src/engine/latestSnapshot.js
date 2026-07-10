export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1233,
  "lastUpdated": "2026-07-10",
  "lastSyncedAt": "2026-07-10T13:20:38.535Z",
  "warDay": 133,
  "summary": "The US-Iran ceasefire has crumbled, leading to intensifying tit-for-tat strikes across the Middle East, a halt in Strait of Hormuz shipping, and continued Israeli operations against Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-07-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The US-Iran ceasefire has explicitly crumbled, with both sides exchanging intensifying fire and peace talks stalled."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jul 09",
      "text": "US-Iran ceasefire crumbles as fresh strikes rock Middle East.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTFB4bHN4OE85Y0EtNkdsYzlGcGRzbjRJNE5DRktPMFdfUDB6cVFfQzE5eC04VDJISDVGNDVERVB2M1dERXNTOWRld2JVNDNVRVhaa3VwR1FiMGdScVZVN3QzZUZzeWpJV2RTS3VkX2ZQdHlkNDg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1232
    },
    {
      "date": "Jul 10",
      "text": "Strait of Hormuz shipping halts as Trump and Tehran trade strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxOY3RoSGYxQ1hPRGEzNU1FdXQ0azRYSHVLZ2lZY0pvdDF0QzdzaVhyTjFtWnBvLUdZWERzRmVDUndtcUFyQ1YtTTlqaDBxWm5pU1NTeWJBSC1ON3FVZlRMbmdEMzh6dHJLVEdYY1N5MlN0Zk5fcjdWSnY1QUMwNHE2VElQTWUzZzZzNGduVHpOZk5JN1hGUldFaFZtV2szY2tva2JJQ1lyZnRLQWM3X0xwcnpoNkgwcXlJSXJVWGdn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 1233
    },
    {
      "date": "Jul 10",
      "text": "Iran and U.S. ramp up tit-for-tat strikes as Khamenei laid to rest.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPYmQyTXJRVFgtVE1uM1MtLUhNb0dLaUNLMUxyYUpLcUhHWmowR2JhZGZtamJZaWJNNG13TkI5RFU4N19sZHl3czZkblU1Mi1tcDVCUjlRTGdXWDRLc3Y4bkc3ai1ObmVwQV9oYXdvN3lwVEdhX0F1bk5aUm05WktoZ2FrVm9JQnpfeUQxZF9tRmoxdXF6VWlnYXVKbw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1233
    },
    {
      "date": "Jul 10",
      "text": "Explosions reported across Iran; US military denies involvement.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxPdjRwNlJIX3oycGNxWHN4N2tfRVlNTDhRTHhJa0R5eEYxZWkyZzRNaEFKWFhzWFlBUXVZeHp2TV9OdGloaF9kcDY1QVRwVTlkQURDOWhNVURoOU1FZHYteHlITHU3QUlnNVB4TzRJdWh4MjlQWVI5cnF5TmhHdDRrLVNRMjJEVVVsTU1nS01LWGtDNFprZGo5M003QUdKN3PSAaQBQVVfeXFMTV9MbG9lRWhnUHBtTl94Z0ZFdFRjRVNPUnJacjhkd3dFdnlzWTRmeGhPV3cydElseEZKODZ0by1YNlRzVmIzejcwcm5KOFNfMmh5aXl4dnB2dHZpX0lCV2puNlZJN3hua2l3MlM4RklraGZBWFBIR1hMeGlvS3FEMWR5b0QxM0MxVTdWZzFTMVdxZmxDZ2JqVWtlS3I4WmhxZEZ4b3U?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1233
    },
    {
      "date": "Jul 10",
      "text": "Israel destroys more Hezbollah tunnels and hunts militants in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE9UcGhZSXktWEhYU25yb25ZNXZoU1ViMkdlRlYtOXB3b25qWEhuTS1MazIyMmhJVU5lMkVHdHFMd1RWcDVfNy1qdGdZV2VVQ2I4OTBkRlRn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 1233
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US/Western",
      "headline": "Ceasefire Collapse",
      "summary": "Trump suggests the ceasefire is 'over' as the US renews strikes on Iran, with Tehran firing back at Gulf Arab states. This indicates a breakdown of previous de-escalation efforts and a return to direct conflict.",
      "tone": "strained",
      "latestSinceUpdate": 1229
    },
    {
      "perspective": "Iranian",
      "headline": "Retaliation & Resilience",
      "summary": "Iran vows retaliation and claims to have hit US military targets in the Gulf, amidst reports of explosions across its southern regions. The burial of slain leader Khamenei also occurs during this period of heightened conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 1229
    },
    {
      "perspective": "Israeli",
      "headline": "Northern Border Security",
      "summary": "Israel asserts its intent to remain in the Lebanon security zone until Hezbollah is disarmed, actively destroying tunnels and hunting militants. This highlights ongoing efforts to secure its northern border against perceived threats.",
      "tone": "defiant",
      "latestSinceUpdate": 1229
    },
    {
      "perspective": "Regional Stability",
      "headline": "Escalation Concerns",
      "summary": "Reports suggest tanker attacks risk reigniting a wider war, and the Lebanese army is deemed unlikely to effectively eliminate Hezbollah. This indicates persistent regional instability and a high potential for further escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 1229
    }
  ]
});

export default LATEST_SNAPSHOT;
