export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2375,
  "lastUpdated": "2026-09-08",
  "lastSyncedAt": "2026-09-08T18:45:17.232Z",
  "warDay": 193,
  "summary": "The conflict involving the US, Israel, and Iran continues to escalate with mutual strikes, sanctions, and increased tensions in the Strait of Hormuz, while regional actors like Hezbollah and Houthis remain active.",
  "lastNarrativeUpdate": "2026-09-08",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire reported amidst ongoing conflict and escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
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
      "date": "Sep 07",
      "text": "US slaps aviation sanctions on Iran; UK bans Israel settlement goods.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNcDBXTktaeW5IYnVNSlBhR1Y2ZzZmVEhBZzU4d0Y2bmQyMnY5X2ttbF95bFoyRldZTExTQ1N6LTlwLTAtcTBfbXhEUEw3allpSXJ1QXYyQkhOcUZteW1PdFExZEZTbjJLY1AxX21lZkk3MTVsZTdVMFIwSUdWak4tN2I1Uzg0cFBlQ2kwT2VrdDBuTEZybm9ELTRHZGV0YUdacDFGb2NjTzB6TFRmRHRsY3VlckNiV3BPRFdqU9IBwgFBVV95cUxQMWZzenNaLWdwZ2kxZFZUZ2lqczJNNnRhbVlFVHdwSkNjYzVGS1NIeVJhYV9BQXlreENVaFRPZk1NT21pM1pIWGxWNXlHNkkwVHJKMndXc2s4MDByb1gyelNrVjJmODFNQkRkNGg4VG5uWGRDLTc1Wi1zNDR6dUo2X1ltZnlDaHFkQ2hmekdGTkFMU0RwUUpYc1VCT0hDaXAxeTNLMUFsSjBYVFdYRy1CT1hUaVJGdFpyeXB0aC1kN01HQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2375
    },
    {
      "date": "Sep 07",
      "text": "Ex-US defense secretary warns Iran war likely to drag on for another six months.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxNZXJQTHRSR3JvX1VldVlIdVI0OHFqa2x3VXBfMFpYNE1TcnA0dXdLTFV0bE40bFEteVN1Rnl3S2puRUMxZmlkbHRhQTBCQVloaW5HN2h2LTBjaUJ6QVZTU2NhWmQ3SjA4QmR3ZDIzZ3dnbGtTVGYtLUMyR1MzOEdOc1RzUWxkcnp4UllB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2375
    },
    {
      "date": "Sep 07",
      "text": "Arab and Gulf countries condemn 'malicious' Houthi attacks on Saudi Arabia.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxNWWZwYVd5ZkUwZE1QSU9VclpYam10NVFMZ194cDRqMEJ3YVZjTHp2NVpISkVFQ0k2R0wyeS1Gem9INUFObWN3TmUtZUFyZDRkUUJOVlFrb2xKODRvdTBMWi1abUUzVFFQZ25TMXVJalBoRXZ5QmhPdlJ1REpqYlBpalBfTnV5NHFYRUhlUjd1SVNHRW9WNHVqdVRYUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 2375
    },
    {
      "date": "Sep 07",
      "text": "Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2375
    },
    {
      "date": "Sep 07",
      "text": "Israel-Hezbollah clashes kill 11 as Mideast conflict escalation gathers pace.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxObk5EbElublhva1o0aEYxbmpnTFB1aEU1dTNvenR2eHJndXFvYjVTTFJmYk5EQWpSVXdlaXhiM2lFeks5aFh6M1hQd2hJSDgwRXB1b3ducmllX19mam9CRFRjN0dlQVp5ak1QaEphcE8wUXpkYW4xUS1JYWpiTDJvcS1EOHduTjN5OWJWNy11anpKMlVoYlgtM2dwNGnSAaIBQVVfeXFMT0FyOVVHZVpXUUtqTWpKZ0hYdnVEZ1FhWTRWNk44bnZlS2Y2dkV5VTVGZjVYbm94MXcwMzN4TUY5YXBPX05qUUM2Q09sM3BYYl9uWlVFcmZsbmFCMjhCZE11bEN3bmt5VFpVdmdybHFfSExucWpXSVpZNVZjQTVOOFZIdXI3VWVvdjdsV1o2b1doQk9ZT0NxUldDTEdaRmZ3Mjh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2375
    },
    {
      "date": "Sep 07",
      "text": "Iran Foreign Ministry takes aim at Canada for support of U.S. actions in Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOWU9TdjZUU2ozWGhJMGRpaHNzWnZNUjYyTW1BSHVNQ0ZEWmx1QlBkaDVLUHR5RzltNG01UEgyX1BUTW9JaVVMSFFIdGxPcEgzNTY5OGhtSDlHeG1FTXZubnVkSUZQay1HLWE1SzRzRzBBMm1yY0hmZEpVNHprTm1Jc0tKUy1ENUY1dzVlU0FTQXpEV0dW0gGaAUFVX3lxTE1HS3J6TzlEWlhBQzVGSHQ0VFh6OEkxc2lYVGhOYUZ4dTA2VGd3aVQydmdLSnhKYV8xVFB2SjB4azY1bTV3U0doQjl5b292emJ0UG84cDN4cFZpWmt6bk0yR05TbkRqRWlabldQcl9uV0xkd3J1VVJHS19EdlZVZ25pR1hHYjd6eUlsTmFhU3oyVTlBSDVzQnZndlE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2375
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
      "perspective": "Iran's Stance",
      "headline": "Iran Threatens 'More Painful' Response, Asserts Hormuz Control",
      "summary": "Iran asserts its right to respond to U.S. attacks with 'more painful' measures and plans to establish an exclusion zone near the Strait of Hormuz, while also claiming a strike on a U.S. ship. This indicates a defiant posture and an intent to control strategic waterways.",
      "tone": "defiant",
      "latestSinceUpdate": 2365
    },
    {
      "perspective": "Israeli Security Concerns",
      "headline": "Israel Warns of Major Iranian Attacks, Conducts Strikes",
      "summary": "Israeli intelligence suggests Iran is rebuilding its 'axis of resistance' and planning a significant 'October 7-style' multi-front attack, leading to Israeli retaliatory strikes in southern Lebanon. This highlights a perception of imminent and severe threats from Iran and its proxies.",
      "tone": "anxious",
      "latestSinceUpdate": 2365
    },
    {
      "perspective": "US Military Engagement & Internal Issues",
      "headline": "US Strikes Iranian Tankers Amidst Internal Military Challenges",
      "summary": "The U.S. military has conducted retaliatory strikes on Iranian tankers, indicating direct engagement, while simultaneously grappling with internal challenges such as a major leak hunt and criticism regarding military leadership. This suggests a complex operational environment with both external actions and internal pressures.",
      "tone": "strained",
      "latestSinceUpdate": 2365
    },
    {
      "perspective": "Global Shipping & Conflict Duration",
      "headline": "Hormuz Traffic Plummets as War Expected to Prolong",
      "summary": "The conflict has already led to a 95 percent drop in traffic through the Strait of Hormuz, significantly impacting global shipping, with warnings that the war is likely to continue for at least another six months. This narrative focuses on the economic and logistical consequences and the prolonged nature of the conflict.",
      "tone": "skeptical",
      "latestSinceUpdate": 2365
    }
  ]
});

export default LATEST_SNAPSHOT;
