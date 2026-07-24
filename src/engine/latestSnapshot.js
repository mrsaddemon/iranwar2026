export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1447,
  "lastUpdated": "2026-07-24",
  "lastSyncedAt": "2026-07-24T22:45:04.726Z",
  "warDay": 147,
  "summary": "The US is threatening a 'massive attack' on Iran while also engaging in talks, as oil shipments face attacks and a fragile ceasefire between Iran and Israel shows signs of collapse.",
  "lastNarrativeUpdate": "2026-07-24",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "A recently announced pause in strikes between Iran and Israel is fragile, with Israel already carrying out blasts in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
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
    "nuclearIndex": 55,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Jul 24",
      "text": "Trump considers a 'massive attack' on Iran while stating Tehran is getting 'more serious' in talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAtQk51ZFI1R2hJeUhnTTJlazk2WGstSFNLeEhfbVY2TXhER0tBVjZpemxQWTlyTDQzdFRiZlJQSHZ1YXVIWDJvUTh0ZzkwNDg2RmxBOTdLRGNSVUhaRm9DZzJUZm0xY3U5WGxQZThR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1447
    },
    {
      "date": "Jul 24",
      "text": "US and UK are planning a major international conference next week on the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxNcEtqZkVISF96MU9lRVd3cmd1Q2xRa2VrVWk0c280aFBuZUZ4Q2RtMmIxS1hNRk10Um9vVURYaDdydzM2LURoMmhkMUQzbnhzRzVlRnE5bDhFYWxPaDk1ZG02RXlBWEFDN3NlZi00Mjh2YUVHdFlwWS1RZmk3ZEhtSVNYV3ZqZTJSQ0tybmxQY1RmVkx0YXF6YnZYYmtZZ2ZWSjZIRGliNXY4RFdtbGpuX3FxVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 1447
    },
    {
      "date": "Jul 24",
      "text": "Oil shipments are under attack on multiple fronts, including the Red Sea, Hormuz, and Black Sea.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxOYnZkSnE3cjdkVWpBWnVkQi1qUndVbHZkb2Q3amhCWEdibTlJNVRzcEt5OUNnQTd3QnBfUjlwV2Q5SVJ4cTlVelpQLXpva0l6allVSDVEOTRJc2I5R2ZJclk5Ukc1VzhkQ2hNQkdNeVllaEZMWlJ6d25KelM0RURFdFhjcGQ1ZkpkeDVia0Jn0gGTAUFVX3lxTE16dkxjTHEtc0Yzc1lhYkw5aEVVMG9aYlczbnFrSS1lY3EyNWpPSWw4bVpGMlQ0cGdOVnFNYjJUTHg3cW1VMkFZaHJHUl9uMEJVZlhOY1Bqc0FHQ3JHTUxjLW1jWEZqX0F3YWZ3clJyU2l2RDNQOXBHVXhwa3dscDFyaDVHUXdWN2xYV3dUNE5JTVg4Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1447
    },
    {
      "date": "Jul 24",
      "text": "Israel carries out blasts across south Lebanon despite a declared ceasefire deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNZl90QmVaeGdDMFBWV2JaNkRTV29BN2tJOTIyVTdYeGdrTXoyYS1PWWthTG4tUzlkWlBpNEtiWmFUTTRBRC1VYTlhNlhCb0EwZ1NoUV9CUVRlYWZLTmdhakcwbWNTUExtYkEtUVZzN1pEUkhZRzgwZHVGYU5Lekx0bXdNNHoyWnhkcW1WXzZmejU2Wm53YTdla3RZSk9NS1p5YnFUMjBxZE9HMFJvSVk40gG0AUFVX3lxTE9aU2dWYTlsVEdubkFVTWRoSlBqZnJaYTBzWUw1THpGeGo0eXJWMmpqcnBJYTAyZ1VmajdVZTI4TVBRNU9VdmFwOWg4WjV5bHI5c0NlNU1LSll2YUJvdERRMjBkbWtVWFY3VW95WFJyc1AtbHRBWVdGYVd5ZHFIamI4S094c1l3V2hYb0U0OU02MVlLNVc0SzhnLXpEWUUtQW5YSWJkaW1DcTF3SkFKSmUzMzBGSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1447
    },
    {
      "date": "Jul 24",
      "text": "US military fired on another merchant vessel attempting to breach the blockade of Iranian ports.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxPY3VyaWt6cjNQeC1IUW9EcUd4TGdqcUZwdmN3Qk9KQ3ZXc0dYRmx5SF9Lb2Fjb1dNaXRJT2d6QU9ZZUthQm05RVo5UTRzZzJMWERZMWd0OVZzNXdOVVd6ZWVJOWREcWhpdktjYkRDTEQ3X1hnU29sVlFXeVpVMnJLME00dW9MMkkxTWowYUNtVUR6Q0dxVFh5ek5FckNSZjlwY0FNRFlDa0NUaVRyWXNFMno0OEtfeFk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "6abc Philadelphia",
      "latestSinceUpdate": 1447
    },
    {
      "date": "Jul 24",
      "text": "Iran and Israel announced a pause in strikes but warned of retaliation if the ceasefire is breached again.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE0xV3g2OWxXcVhxUjZOZUpZVThPSXNkbW1lcjdqaU5KRkctWHBwRTNOSWp1dy1zSE8xNHpUU1ZpRGVKMm5qVTBJMEx2Znp3d1pUaGcwVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1447
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
      "perspective": "US Administration Stance",
      "headline": "Trump Vows Escalation Amidst Ongoing Strikes",
      "summary": "The Trump administration maintains a defiant posture, continuing military strikes and issuing threats of further escalation against Iran, while honoring fallen soldiers. There is a reported split in Congress regarding the administration's actions.",
      "tone": "defiant",
      "latestSinceUpdate": 1435
    },
    {
      "perspective": "Iranian Perspective",
      "headline": "Iran Recounts Damage, Navigates Regional Pressures",
      "summary": "Iran acknowledges significant damage from initial Israeli strikes and faces ongoing US military action. The Iranian foreign minister describes the impact of these strikes, while Iran also expresses concern over Hezbollah's stability in Lebanon.",
      "tone": "strained",
      "latestSinceUpdate": 1435
    },
    {
      "perspective": "Global Energy Market Concern",
      "headline": "Oil Producers Race to Bypass Hormuz",
      "summary": "Amid escalating tensions and military clashes impacting shipping routes, Mideast oil producers are actively developing alternative export routes to bypass the Strait of Hormuz. Oil prices have reached $100, reflecting market anxieties.",
      "tone": "anxious",
      "latestSinceUpdate": 1435
    },
    {
      "perspective": "Lebanese Security Transition",
      "headline": "Lebanese Army Deploys Post-Israeli Withdrawal",
      "summary": "Following an Israeli withdrawal, the Lebanese army is deploying to southern villages, indicating a shift in regional security arrangements under a US-backed framework. This move suggests a localized de-escalation or new security posture.",
      "tone": "neutral",
      "latestSinceUpdate": 1435
    }
  ]
});

export default LATEST_SNAPSHOT;
