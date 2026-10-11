export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2566,
  "lastUpdated": "2026-10-11",
  "lastSyncedAt": "2026-10-11T14:08:40.386Z",
  "warDay": 226,
  "summary": "The US is reportedly preparing for potential 'massive bombing' strikes against Iran, while Israel continues operations against Hezbollah and the Strait of Hormuz experiences disruptions and blockade attempts.",
  "lastNarrativeUpdate": "2026-10-11",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 3,
    "summary": "No ceasefire is currently active; conflict remains ongoing with high tensions."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 70,
    "escalationLevel": 88,
    "oilDisruption": 92,
    "tradeImpact": 82,
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
      "date": "Oct 10",
      "text": "US reportedly prepares for 'massive bombing' of Iran, with Trump stating he doesn't want an Iran deal.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2566
    },
    {
      "date": "Oct 10",
      "text": "Putin and Trump discuss Iran, while a Saudi-led coalition conducts strikes against Houthis.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPT1ZDbTBzS2w5TzZUNTQ2TFhqTnFRd1VoRUZDYnhTWE9VSmZkTDlaMkZXc0xLX18ycl94ZnJnanJ3SnJueXpWOUpIRVZFbklFb0lCdUNDSFY3Rk9rNTJTSE1UYzhYYVNSZDNpeHBUb1Q5QS1OR05NWWdJOXlKcGhTWlRsN2hmTHluRkVYM25VSHNSQzZtSThPWmk4U2ZFOEJzNEtmUEtmcXlPQjRaWktUM295a1RmUWtPOFBXbzB30gHDAUFVX3lxTE85QjZwYndUd1RiczR0WFg2akJ5aVdIdS1sbUMyYUxGTjFyUG1idjhsRmlhb0VNWlIteDROYm1VTkF3MXZPYzZ1cEE1RDFXc3NzWW1DTnliQWVVQWlCUF9BNHFMWHBROUZxdVhNYTdIZkNtbWFROFNtZlFnUy1hdHp4eDQyUmlkVWZ1aVJBbVBIalRWeHM2VHh2bzJKdm9iNjdsdldFa2tvZzBTTHZXYm1ORmhZdUw2WVhxSk9hWEVpSFdHaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2566
    },
    {
      "date": "Oct 09",
      "text": "US military ordered to be ready for possible Iran strikes as Trump weighs timing.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxOcTJVT0lpY01IdHRxLXR3WFJUWVdlVlNWM2IyV0p2cFNoQVRPQjVMdXNkTHNpYk5NY2lvRzQ0SkpHN1I3T21KLThjVHI5SHlmeFZyZndfempWYjgzNWJMaWFmY1B2dk9nbGxuV056WG9NSWlRdWszd085cWZUOXBKbjc5YlFrcGo4VjI4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 2566
    },
    {
      "date": "Oct 09",
      "text": "Reports indicate the US pressed Israel to conduct a lone operation against Iran ahead of midterm elections.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiakFVX3lxTE8yeGdLcFpkcDRnT1pFNEJIWlluQ0VjdlNESzJFandBNzVBQlotbnJLNURiTC16V1VwdG9qQnhaaldWN0F3SmJ0VkRBa2o3UWxydFZrZHNlNElIZy1OMTZJcVctMlktbnRqbUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2566
    },
    {
      "date": "Oct 09",
      "text": "A supertanker caught fire in the Strait of Hormuz, and the US military disabled a cargo vessel attempting to bypass the blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxQRnlBdzc1T2VIdlNCdjRBUkEwUXBHR1pBNnVpSVE4RnlCcDJYRFdLYjdxMFgwZVBsVW43Z2s3bC1iUUNRX1NHRl9OSmNITnYxMUFxcU56SlpJRWllbFRKNW0xZmJyNzlpcnJ5dkNiajRTWTN1SUZVY2NCVkxlYWh6UkZEVVd0MHNiUHJz0gGQAUFVX3lxTE9uZmNoOFlhUkdiTG5YSFlUOG1LZEJNOERjMWxfZDZTTjl2QWlNalpBdE9RVWw3ajhMdXppX2t3aGdNMU1kb3RBaW5sanBwSW95T240M0stUEd6Uld4T2ItcGRCN0ZSUDlsT2MtdmpneFNyem9GamlVQlM5NUJtNGk0ZG1qZndPX3pna2pUYmpCaA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 2566
    },
    {
      "date": "Oct 09",
      "text": "Israel conducted a drone attack wounding six in Lebanon near the Syria border and reportedly plotted to kill the Hezbollah chief.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPZDlneDFDVlJhbkRIb3NoZ3NjbWtkSmkwWV94Z21oM0cyc1d2NXJBRFEweE1vbGJqQ19DUzM0MUhucV9lY19CNmY4T2hlb2VXNFVqcS1CWC1HRUY1aXF3Q3lBN3c0dDRuTXBKSWlzMjhhUWRsRV9LaFVhTzZraTFTYzBoREJ4WGZmOG1PeVNyUkY5UzctZkJfWk9jWi1Da3VadlZHUNIBqgFBVV95cUxNeVR3QzNzVW1YcTlxOFJINW1qc0FUWUotaE93Z29fYTdzV1hJckJ6eGxwUjEzOXkwNE9UY0Jlc1UzNmhVY3VLX2VhOEs3YVc2U0tsLXJjbFY1NWc1bUxicUhKOWQ1bExXWEdhcmdqTUcwakpXMnRGZFd2cWs0VWRFOWIwNWJ4NVRNRy01aUp6Wl9tM2ZoT0F5b0VzLS02SzdVTXNVa0JZUzJXQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2566
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
      "status": "unavailable"
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
      "perspective": "US War Posture",
      "headline": "US Prepares for 'Massive Bombing' Amid Rising Casualties",
      "summary": "The US is reportedly preparing for 'massive bombing' against Iran, with military forces on alert, while also pushing Israel for independent operations, amidst rising US casualties and significant military costs.\nThis indicates a potential escalation of direct US military involvement.",
      "tone": "anxious",
      "latestSinceUpdate": 2564
    },
    {
      "perspective": "Iranian Resistance & Regional Impact",
      "headline": "Iran Chokes Hormuz, Strikes Riyadh Amid Escalating Conflict",
      "summary": "Iran is actively engaged in the conflict, with attacks on Riyadh and efforts to disrupt oil exports through the Strait of Hormuz, leading to high shipping risks and increased energy prices.\nThis highlights Iran's strategy to exert pressure through regional actions and economic disruption.",
      "tone": "defiant",
      "latestSinceUpdate": 2564
    },
    {
      "perspective": "Regional Instability",
      "headline": "Israel's Expanding Footprint Fuels Regional Volatility",
      "summary": "The broader region remains volatile, with Israeli military actions in Lebanon and internal security concerns regarding Hezbollah, indicating an expanding and costly conflict footprint.\nThis suggests a widening scope of conflict beyond direct US-Iran engagements.",
      "tone": "strained",
      "latestSinceUpdate": 2564
    }
  ]
});

export default LATEST_SNAPSHOT;
