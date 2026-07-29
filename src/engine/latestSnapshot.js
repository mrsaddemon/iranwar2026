export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1507,
  "lastUpdated": "2026-07-29",
  "lastSyncedAt": "2026-07-29T04:33:47.337Z",
  "warDay": 152,
  "summary": "The Iran war continues into its sixth month with ongoing missile attacks by Iran, US intercepts, and retaliatory US strikes on proxies, alongside diplomatic discussions and regional proposals.",
  "lastNarrativeUpdate": "2026-07-29",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No comprehensive ceasefire is active, though the US has paused some strikes and a localized agreement exists in southern Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.4,
        "aggression": 0.9
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
      "date": "Jul 27",
      "text": "Iran vows control over the Strait of Hormuz amid reports of Trump-Netanyahu talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNeDIyc1dzckZFZ0RzcVF1N0NaUHVDNzBLR3d0VUEwTjhIRHYxQktIZ2hobHlHQkh3cHdkZmJrbDh4Q21NSGcxRUVRM29rQlFkZ3ZfSG9MRWJNbzBJRzJQVXA5Mmp6cXBUZkVEa3BKMmt0WDJ2eEtGOUtSeWxOc2dfdWNMX056M29Zc05JQ1MxV2VrSjJCZFpPVkNaZ3lrTFFSNnlLOE5CZkpTd0M0elNuQmJFUi3SAboBQVVfeXFMTjgxWU81QTR1XzRFbzZ0RHJEenVKUjlwZWNRSnhpRjBXX1JxX1FCMUdldzBUVjc4RUItdnAtTWtLOVBIV1NMLU9fOUVlUXRVSnlLdW9rUmw5ajBZX1BwcnlidmIzNUVsZmVBYVFobG1iRy1yb2tRQmNIMlVqNTQ1dm40UkFSalF4U1JER3E5RGpBR0x2Ukt1cW9NaUFMTEtYdXBVYWVIT3VBRFk1MWc1ajYyenpvWDE0UFJ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1507
    },
    {
      "date": "Jul 27",
      "text": "US pauses new strikes, while Iran states no current negotiations are underway with the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1XYlk1TXQyaFgzZF92aWM1cHMxWHlIci14VTNUVEVBamN4Rl9qQzNvQVo2VmEwVjBpbEZIU1RXTk1QMFJHay0wbFloVnU5Ui0yLVFFcWdiOXg3cGN1RVo5bW1QMTZSNlR0LU1iN0t3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1507
    },
    {
      "date": "Recent",
      "text": "The US thwarts an Iranian missile attack on US troops and strikes Iranian proxies in Iraq with Saudi forces.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxQTHZOSmtoZTBQNGNtZUlocFVfLTNmdFpvWFdoN2ZwVmpZMDNrcXNSdTVUUjJRVWRSTzJGeFQ2TG52cnVYZFllWFlfTTctTllRSExPRDhGNXhieEV0Z2VqRk5CcWtROVF2ZGR1WDhjd0tGQkVZQTExZEFYVGRTenkxdk9YVGZlYkwxY2Zz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1507
    },
    {
      "date": "Recent",
      "text": "President Trump states the US is in talks with Iran and hopes for 'good things,' also claiming US strikes saved Israel.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNdENxTVZ4dF90R0xReVUzUlh1dG1JeEd5ZGdPRFRlTlltYjZWcWhQcWlmcDhGMzhrTlgxVThFSk1xR3BMOU1lU1AwSGJZV1Q4eXNRcWhWQVNzelEtSTVTRlhZWXYyOEFrU25NdFdpN2duQmh6YUcwWklXTllJZnduMzllUndPMjdpcWM5cG15NjdqZ1ZlZTB3a3NxZjJIeGJMMGR0UjhaWHRzeUsyTVRDUnJfQVc3UFdYWWl2S9IBwgFBVV95cUxPY0NMOHJKUmVxVG9IU3ZhNjZFd0FLZTBYNWFjdmQxYUFYS3phTE9rRjExVm9ibHY3TTNxZEZMUnc0UnZQeFktbl9YZWlhNjh0SDhISV9OX3JEaW85QVM4blZwYkZuaUNTX0xUVW5MdE5xcEVPYjkyTWJoMkhiNlc2Q3VKUFdDZkpmbVZSRmRoSkNlWU5aN0FVa1JBUnQ5dENFYmJaOERPdUpUQkZWYTl5N1BaWjc5SWtNSFR0NkNNXzR0dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1507
    },
    {
      "date": "Recent",
      "text": "US military intercepts Iran's latest 'surprise' missile attack on US forces in the Middle East.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxObTVqSTB4SV8ydHZWZjBDMUhyQnlqc05HUlB4NENrS0wzVjdXdzJMYWdkOTZJZ2ZTUmhGR2Z4eVVIUk5telFPZWthVmRlaEpnY0txZDVQOVdMbWZlR2JCUU5MNDBQdDMwdVY1dmJDaVVwM0J3aXRNUXFwQ3JMakVWZENpWU1KMlVrNVZUNzVJdmRBSjlTSjdhMmlnSGZ1U1ZKMnJxemJWS0ZBRzlEV2ltaTZRWk0xN25CWGY5VEtSSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 1507
    },
    {
      "date": "Recent",
      "text": "Oman proposes a new plan to manage the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQbXRyekdNLTJicW5na3REMEUxbVF1X2NLUnBGOTRVWFRCS3QyMzFhNFhHM0lmeVBzTTE3VER5TmwtcU1aWkotR05EbFlmOS11N3A4Slp1UURHU3Y4UkdqQmF4d2tURzVseWYtT2taMVJsNVNBOElfdmI1YnlSQ2k1aEVTNHVTRnIxeGJQT3R6WllNUGVyRF80T3RYeHMzRTM5RW1UUA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1507
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
      "perspective": "US Diplomacy/Threat",
      "headline": "Trump Pursues Talks Amidst War Pause, Warns of Force",
      "summary": "The Trump administration is engaged in 'very deep talks' with Iran, having paused strikes for a second night. However, Trump warns of 'strong military action' if diplomacy fails, while dismissing concerns over military stockpiles.",
      "tone": "strained",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "Iranian Conditions/Defiance",
      "headline": "Iran Threatens Expansion, Ties Peace to Lebanon, Praises Hezbollah",
      "summary": "Iran threatens to expand the war if U.S. resumes strikes, which it attributes to Israeli pressure. Supreme Leader Khamenei ties any peace deal to Israel ending attacks on Lebanon, with Mojtaba Khamenei praising Hezbollah and calling for continued jihad.",
      "tone": "defiant",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "Israeli Skepticism",
      "headline": "Israel Anticipates US Escalation Despite Pause",
      "summary": "Despite the current pause in U.S. strikes, Israel reportedly believes that the Trump administration will soon be compelled to escalate military action against Iran.",
      "tone": "skeptical",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "US Stockpile Debate",
      "headline": "US Stockpile Levels Under Scrutiny Amidst Conflict",
      "summary": "A debate persists within U.S. political circles regarding the state of military stockpiles. While some officials dismiss concerns, others attribute potential depletion to previous administrations.",
      "tone": "neutral",
      "latestSinceUpdate": 1493
    }
  ]
});

export default LATEST_SNAPSHOT;
