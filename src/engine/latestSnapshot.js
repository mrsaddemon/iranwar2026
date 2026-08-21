export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2103,
  "lastUpdated": "2026-08-21",
  "lastSyncedAt": "2026-08-21T20:00:21.984Z",
  "warDay": 175,
  "summary": "The Iran War continues with the US imposing new economic sanctions on Iran and Hezbollah, while Israel conducts strikes in Gaza and faces threats from Hezbollah, and Iran warns of potential strikes in Europe.",
  "lastNarrativeUpdate": "2026-08-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is reported amidst ongoing military actions and threats."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 90,
    "oilDisruption": 70,
    "tradeImpact": 67,
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
      "date": "Aug 20",
      "text": "US imposes new sanctions on Hezbollah and threatens economic pressure on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBFRllmQTRnUUJ2Qk9iUUF0LU9jU0dQRjdSaGUyTlVkMFg0eXFvdVVmMGhHN3pncnFxLU5XYTlaQVFqa1FFNEwzUkRyVlhQdWhPV2V3TVEydTFUdFFNYnBKcEVUQzF5TE9TSjNtV19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2101
    },
    {
      "date": "Aug 20",
      "text": "Trump indicates a willingness to reopen talks with Iran 'at some point'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNT25YYlNfbnY5OE9lS1l4OElGQjlJcEdHQlVEN0lna0ZJLUVNR1dOWlpBcjNEdzNmc1pCTjZWNnBRY0hiNVhtVW1SbkowbkRUMnBUdGU5Z2lKUEgwR0taSVNvTEtJbzZtd08zT1FudUJucXRzd3dyNGIydEJjaXpyWEZTaFBHbl9zX2xLTkd2SkZiM0szWnpzUVM3QWVJeUpPRXlQZnU3V3JsWGtBWnU0bmxn0gG3AUFVX3lxTE55c2gyeUJVdkFkbjBhRnVWYTZoTEdhUnFnY0p5XzJmb01nTXJSYjVsSDlWZTV4aVFaOHZ3b1NDbUs3MTM4OVhXX3pmeGlXMmFldU5UN0FDbVZOQXNMYlB4SUdONzZ6aVhzQ2g0dDdyWlprZTZwUFJaX0c5RmQ2RWEtVEVZZFZlMWw1TmFzaTQ3eXpYRXcxZjlnNFhIelhteldEVVBXUFVFR1hpZWdxbl9ONWRPZ3daWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2103
    },
    {
      "date": "Aug 20",
      "text": "Israel pounds Gaza, with mediators stating these strikes undermine efforts to end the conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxPUGViZ2w0cXVmUjBqbEFKeEFsdUY1YWNiWlBobmpkejVKWng5N3lINFFZOGdNQ2JzaV90bXBFQVpLaWVDRXZOMmQtOXA0d09XNEZmdExMbFFPZGNsaTc3QUVKQktwOU5DNnliZ0dDdVFNaGdsUVNyOWdHRkh1VFBjQkNfUklTZTRZMzhDb05xaHZUNGdURlZxSUJBZ3RCVHZtbThfaFRObk1SM0VYX3ZZS09jelpvOGMzSVktZDNocEpKOVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2102
    },
    {
      "date": "Aug 20",
      "text": "More than 750 US service members have been wounded since the start of the Iran War.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOaXROaW5CZXFmcURNMzN0aWFmTm9xNlZGaG55cTE1LXFUOHp4UGdxRDFtY0xzYUtBbk92NGgtZVhici1rU1pqZGg5Q3V1dXd5V3pqUnNIZEZGclFvRXRMUzhpemdGaER4bmFpaDlJSEtZM2Uyc3puSk1FR29Ma0JnTVln?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2102
    },
    {
      "date": "Aug 20",
      "text": "Trump unleashes 'economic D-Day' on Iran, warning nations against providing support.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxOYjNDZy10ODNkRFhWRkNqbmw0eVpKQk9WMWh1WnpLU2pZdEt6alA4cjc5ZTI3dndOd1ptQVFPQ2Z3OGQydExST2dwclB4SV9nRkJhQ29GczU2TDYyMzNHcXhacnV1SzVsLTJTa2Z5d0cxdWxmMHluZHNHUjZjM0NPQ25nUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 2103
    },
    {
      "date": "Aug 20",
      "text": "The U.S. military reports aiding the passage of 660 million barrels of oil through the Strait of Hormuz since May.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxPU2tmbVlWOHdGT19tdnFrRnRSMzY4ZzJtUTNhV0xHVlZlOERZVGJtaHlMR3ZVT2IySVJfamFjS3JBUFlXZ1QxUnF4VzJWdnNacDEyeGp2a3p0a0pGS3RINTZZNTJIQ1FFX0hhWlBENWFSM2VPMlhvX21rOWZEalR6Ump2dFdrZEE4bkxZTWxneFXSAZYBQVVfeXFMTlByT2dSRUliWjY3SG9jU1MyNzkyVDJsNHhERkExdU8wSzAwcXR4YXVtMWY3dld3bzByRWVndFB1TnV0LU54eWZQNDduTmFaaG5jNl9QdFhaeXA5aWd0eGlTc3lRVUI3VnYzRG1kZnhNQm1fT0J0NVJ5WGRiTzNZT0FWMDZydFhsVG1UT0c0eWk4WVVqa09R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2103
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
