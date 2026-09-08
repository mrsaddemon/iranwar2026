export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2377,
  "lastUpdated": "2026-09-08",
  "lastSyncedAt": "2026-09-08T23:36:35.934Z",
  "warDay": 193,
  "summary": "The conflict in the Middle East continues to escalate with direct US strikes on Iranian oil tankers, Iran's seizure of a US drone, and ongoing deadly clashes between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-09-08",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing hostilities and direct military engagements."
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
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 85,
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "text": "US military strikes three to five Iranian oil tankers in the Strait of Hormuz in retaliation for missile attacks on a Navy warship.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE9tVlZfRVpnZHk5LUZINnd1bUh0Mkp3N3FoU3ZpT1Rad3ZwbzU2SllpNEUzeFpjdms2SWI4MWFCSVU4S2JtQ3BRTUNRQ01ybWprRmFybkNUdDk4TWxtZTFiWV9CQzJha0JWdlh0XzhHUzJSa2hEQkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2377
    },
    {
      "date": "Sep 07",
      "text": "Iran's IRGC states it will retaliate against US strikes on its tankers.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2377
    },
    {
      "date": "Sep 07",
      "text": "Iran claims to have seized a US unmanned submarine drone in the Strait of Hormuz, which the US states had malfunctioned.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxPWmlqeDdsTWM5SmRhZE95ZmZVcVFrYkNYelVGTExQTGlnSFJvTGNuaURuV0o4MXFybUhRT3JfYWFVVDB4TnJOM3haOXhSdXBKVmNVaUlHSkhqSEZKbDF5RUxzYmhXc2JCLXlqRVNCYS1Eb2dTdmxwN2kxRkw2bzlmbEljdFRHYlE0dTJGRmJ6TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2377
    },
    {
      "date": "Sep 07",
      "text": "Israel-Hezbollah clashes kill 11 in Lebanon, with Israeli strikes in a southern Lebanese village killing 12.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBkeHo4dnBmNnFsLXpHaUU2czN0MG52bTBadUNFVlNWTTExWWFTanpTZnp3YS1QVEFsVkVPYWREVFRhRVBvY3NwcV9kakJ5clVhb2VtUjhMNzlTZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 2377
    },
    {
      "date": "Sep 07",
      "text": "Arab and Gulf countries condemn 'malicious' Houthi attacks on Saudi Arabia.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxNWWZwYVd5ZkUwZE1QSU9VclpYam10NVFMZ194cDRqMEJ3YVZjTHp2NVpISkVFQ0k2R0wyeS1Gem9INUFObWN3TmUtZUFyZDRkUUJOVlFrb2xKODRvdTBMWi1abUUzVFFQZ25TMXVJalBoRXZ5QmhPdlJ1REpqYlBpalBfTnV5NHFYRUhlUjd1SVNHRW9WNHVqdVRYUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 2377
    },
    {
      "date": "Sep 07",
      "text": "An investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighborhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2377
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
