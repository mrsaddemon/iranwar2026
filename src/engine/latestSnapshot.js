export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2089,
  "lastUpdated": "2026-08-21",
  "lastSyncedAt": "2026-08-21T11:45:03.168Z",
  "warDay": 175,
  "summary": "The US is intensifying economic pressure on Iran and its partners, while military engagements continue between Israel and Hamas/Hezbollah, and diplomatic efforts to de-escalate the Gaza conflict face setbacks.",
  "lastNarrativeUpdate": "2026-08-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect, with ongoing military actions and diplomatic efforts undermined by recent strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Aug 20",
      "text": "Trump indicates willingness to reopen talks with Iran 'at some point'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNT25YYlNfbnY5OE9lS1l4OElGQjlJcEdHQlVEN0lna0ZJLUVNR1dOWlpBcjNEdzNmc1pCTjZWNnBRY0hiNVhtVW1SbkowbkRUMnBUdGU5Z2lKUEgwR0taSVNvTEtJbzZtd08zT1FudUJucXRzd3dyNGIydEJjaXpyWEZTaFBHbl9zX2xLTkd2SkZiM0szWnpzUVM3QWVJeUpPRXlQZnU3V3JsWGtBWnU0bmxn0gG3AUFVX3lxTE55c2gyeUJVdkFkbjBhRnVWYTZoTEdhUnFnY0p5XzJmb01nTXJSYjVsSDlWZTV4aVFaOHZ3b1NDbUs3MTM4OVhXX3pmeGlXMmFldU5UN0FDbVZOQXNMYlB4SUdONzZ6aVhzQ2g0dDdyWlprZTZwUFJaX0c5RmQ2RWEtVEVZZFZlMWw1TmFzaTQ3eXpYRXcxZjlnNFhIelhteldEVVBXUFVFR1hpZWdxbl9ONWRPZ3daWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2089
    },
    {
      "date": "Aug 20",
      "text": "Israel pounds Gaza, undermining mediator efforts to end the conflict.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2089
    },
    {
      "date": "Aug 20",
      "text": "US imposes new sanctions on Hezbollah and threatens economic pressure on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBFRllmQTRnUUJ2Qk9iUUF0LU9jU0dQRjdSaGUyTlVkMFg0eXFvdVVmMGhHN3pncnFxLU5XYTlaQVFqa1FFNEwzUkRyVlhQdWhPV2V3TVEydTFUdFFNYnBKcEVUQzF5TE9TSjNtV19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN"
    },
    {
      "date": "Aug 20",
      "text": "Trump threatens Iran’s trade partners as economic pressure intensifies.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxOX0YxejNNS1poTHVOcXNPenhxM2c4RmxRb2dtVnVpMHpZMGw1OHBCbDRxWWpmOWxiLVh4QjJkc3JsUVd2UTZseXBGd3lzM1Q5bkpiLXhkMWhlZmJMZHNaV0lTZ0tra0dGclg3T1lTaERzaUJ3WUswQ0dKM3lvX2RGbkotQTZTb3V2VDBWTEY0aVpKQ1RldlE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2089
    },
    {
      "date": "Aug 20",
      "text": "Spike in 'Dark' Oil Tankers in Gulf raises risk of catastrophic spills.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2089
    },
    {
      "date": "Aug 20",
      "text": "Ships passing through Hormuz hover in single digits, indicating severe disruption.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxNSEhZX09yZU9wMFlFN0FUUjM0dUhpZ01zMEVvWFBlVHpoQ25lY0xFckRtVnpXMHZfZVA3TU0zRjNNYlUydy1pelQ1Q3Rmb1dPeWZmU3hDTXF2ZERfY3UyY2tteGpocUNoY0FkdE13dXV5cjV1VUh3MmN1al9MUm5xVlh6RWpwenRzQ2dzR0dxci05c2kwQ1VSUGNDTVBJVkFFd0RjZm9GRnBBdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2089
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
      "perspective": "US Administration",
      "headline": "Economic Pressure on Iran Intensifies Amidst Stalled Talks",
      "summary": "The US is implementing a 'crushing economic operation' against Iran, threatening its trade partners, while signaling a willingness to reopen talks 'at some point'. The Pentagon is also considering a reduced military presence in the Gulf post-conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Iran",
      "headline": "Iran Dismisses US Economic Warfare, Demands Conditions for Hormuz Reopening",
      "summary": "Iran dismisses Trump’s 'economic D-Day' as a distraction and asserts that the Hormuz Strait will remain closed until the U.S. meets interim deal conditions. Tehran also claims the war will be over 'very soon'.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Gaza Strikes, Considers Retaliation Against Iran",
      "summary": "Israel continues to pound Gaza, actions which mediators say undermine peace efforts. A former Israeli official suggests striking Iran in retaliation for Hezbollah attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Affirms Force as Sole Means to Compel Israeli Withdrawal",
      "summary": "Hezbollah's Nawaf Moussawi states that only force can compel Israel to leave Lebanon, indicating a continued stance of resistance.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    }
  ]
});

export default LATEST_SNAPSHOT;
