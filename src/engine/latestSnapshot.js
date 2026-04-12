export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 130,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T23:20:19.345Z",
  "warDay": 44,
  "summary": "Peace talks between the US and Iran have collapsed, leading to a US order for a naval blockade of Iranian ports and the Strait of Hormuz, while Israel and Hezbollah continue conflict ahead of separate talks.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.55,
    "durationDays": 1,
    "summary": "Peace talks between the US and Iran have collapsed, leading to an immediate escalation, while no ceasefire is in effect between Israel and Hezbollah."
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Apr 12",
      "text": "US and Iran fail to agree on a peace deal after 21 hours of talks in Pakistan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxNUlo0OU1tNnQ3ZWFaRi1BVUh1Tk5oU1VydlFONUNaN2tnYjl5OGIzODRQT2syck1JajJsZEpkcXNmUUhJN1BYRm9XMEdGeVVLNldmWlBSOU4weUVVdmZSb0RUVlpMX2VEZHRWaFdtWmhVMnZ2U1J5RmVMQkkzUFZGN0VxWDlIYjhPamtYMEdrUHVFMHBNbFd4X1NRbDNjQVIyZTJhRG1HeUIxNDM0elIxMTZLdW9vajhTcmdNalh3S1FVbHlJeXBZ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 130
    },
    {
      "date": "Apr 12",
      "text": "President Trump announces the US will blockade the Strait of Hormuz and Iranian ports following the collapse of peace talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNS2hsNmdISmJxSGk4RjVtb0ZoTE4zT2lrcmh0NEpQbEVOSW1rNGRCMlk3X3hOVko0bHk0d2lIaVduLWNWRWtFZGItZGFaN0YyRE1tVWNuTFFBUTJzQWVMT0tWRTY1aGxnUXJid1lUbTVaTGdjN3NEQ19CbExPMGFfeVlxU243VEFWS0lucm5wX04xUGl4enRaVzBmRXUyLWZQNkNOVERLUEljWWhvTy1GS2pKdGgxd00yWHNldWtn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 130
    },
    {
      "date": "Apr 12",
      "text": "The U.S. military confirms a naval blockade around Iran will begin tomorrow, Monday.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxOZWEyVHFmdUR6cDAxWjVJMTNlYmVfQ1NIUURtbkpjNGFWZlJCWDh6T1NBZzhiTF9SUzFvT3RmMFNEQWhHRWhrQm9KZlRBVmJ2YUZCOGZ5UFFKVGRNVDgtdlU3dXRhOFRIWFdvM1dqS3Vyc0NhejBnYmw2THY1UUpfTXcyMF94VmxVUlp0SkFaWWRIV3ppVkdSNFJ5ZjhpSFctX19MNTA1QlU0ZHBfWDJQX3FSejhsOExDVWNJY2RhSDN5cVg2?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 130
    },
    {
      "date": "Apr 12",
      "text": "Israel rejects a ceasefire with Hezbollah before Lebanon talks scheduled for next week.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQRUhHalQzTUJIZW5FOEd6NjQ1Zy1zX3pkWlRuMlV2UmhLWnRnVWE1aEctUE44cldJWXlHZ09seUZXWGNyY2Z4a293WkdZX0ZvVmdIQnVRN2hSb1REclFtZUxUMmJSVTYxVUhCZk5xMHk4LVpOY2JFSkZ2bXMxYk1WSXd0YXM3QS02ck9KRDdTbGh3U1ZxdVgzWGxYTXo1aTMwUEoxUVVZaS0wUXc4S2U3ZUVGNNIBuAFBVV95cUxQNXNjb3RtWElmZUFXY0c1Ym0xbVdpb3ZHUnpHTWV2dzVjQkw5VkM4bE56VktyUmRKdkt2Mmg5SG50Zi1RMGhJV3F5Mk9Ld1VzN09sM2taRExMbHZXVTZncHE4R2xPT0hQVlV5OHFITU9vWUI1S2pkcjEwRmV6R1cxTmJSXzdtakNqT19PUXlvdE1fS1pXdmpBMmRxTU13RFdqNjMwVXJtNEczZXNnRzlLOHhPNklKMzNh?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 130
    },
    {
      "date": "Apr 12",
      "text": "Arab pressure reportedly reins in Hezbollah protests ahead of Israel-Lebanon talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQOUd2S1FKZVpObXVnQ3RfdlB4TXhzNHh4bmVwQXozRG80V0FTMzdKUU5wVnRzNkR0ODZiTGE1Nk1YM3h3S2ZxSGp4SFdHelFVQ0paWVdVNEVGV2RyMW5idTdxaWZ5dnU4cFgwZ0FlclJ3Q0tyUjROb2Zqck5mYTZiUkZzU2JvSHNHX3NKeE10VUtuNjZxX0xnWEJDNzJUTnBSRnl4bdIBqgFBVV95cUxOT2FmcEcwNVhWZ2dSYXp1WV8tU0F3M2hzanphYzVNY1dYVHl3QVM3YmZNeFhJbHRTTm96UzZtS3BTaVNFR25SM1ZUd295YjRmNjJaWjhMSzFfRG82Z0x2TUMyTmFVTjVKaktnMnZSVDlTT3lTSUpfaGlZX0FNeC1qaVF5LXhiRzRSNl90QW11aGt0U0ZoX0tUSkRlczBjNS1QamY5MWdUaXVIUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 130
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
