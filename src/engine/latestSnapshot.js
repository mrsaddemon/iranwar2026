export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2087,
  "lastUpdated": "2026-08-21",
  "lastSyncedAt": "2026-08-21T10:38:32.368Z",
  "warDay": 175,
  "summary": "The conflict continues with the US imposing economic sanctions and threatening Iran's trade partners, while Israel conducts strikes in Gaza and considers further action against Iran, amidst regional tensions and concerns over oil shipping routes.",
  "lastNarrativeUpdate": "2026-08-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "Efforts to end the conflict are reportedly being undermined by ongoing military actions."
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
        "militaryPower": 85
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
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 68,
    "globalPressure": 88,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Aug 19",
      "text": "Trump indicates willingness to reopen talks with Iran 'at some point'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNT25YYlNfbnY5OE9lS1l4OElGQjlJcEdHQlVEN0lna0ZJLUVNR1dOWlpBcjNEdzNmc1pCTjZWNnBRY0hiNVhtVW1SbkowbkRUMnBUdGU5Z2lKUEgwR0taSVNvTEtJbzZtd08zT1FudUJucXRzd3dyNGIydEJjaXpyWEZTaFBHbl9zX2xLTkd2SkZiM0szWnpzUVM3QWVJeUpPRXlQZnU3V3JsWGtBWnU0bmxn0gG3AUFVX3lxTE55c2gyeUJVdkFkbjBhRnVWYTZoTEdhUnFnY0p5XzJmb01nTXJSYjVsSDlWZTV4aVFaOHZ3b1NDbUs3MTM4OVhXX3pmeGlXMmFldU5UN0FDbVZOQXNMYlB4SUdONzZ6aVhzQ2g0dDdyWlprZTZwUFJaX0c5RmQ2RWEtVEVZZFZlMWw1TmFzaTQ3eXpYRXcxZjlnNFhIelhteldEVVBXUFVFR1hpZWdxbl9ONWRPZ3daWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2086
    },
    {
      "date": "Aug 19",
      "text": "Israel continues to pound Gaza with strikes.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 2087
    },
    {
      "date": "Aug 20",
      "text": "US imposes new sanctions on Hezbollah and threatens economic pressure on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBFRllmQTRnUUJ2Qk9iUUF0LU9jU0dQRjdSaGUyTlVkMFg0eXFvdVVmMGhHN3pncnFxLU5XYTlaQVFqa1FFNEwzUkRyVlhQdWhPV2V3TVEydTFUdFFNYnBKcEVUQzF5TE9TSjNtV19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2085
    },
    {
      "date": "Aug 21",
      "text": "Gaza mediators state that recent Israeli strikes are undermining efforts to end the conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxPUGViZ2w0cXVmUjBqbEFKeEFsdUY1YWNiWlBobmpkejVKWng5N3lINFFZOGdNQ2JzaV90bXBFQVpLaWVDRXZOMmQtOXA0d09XNEZmdExMbFFPZGNsaTc3QUVKQktwOU5DNnliZ0dDdVFNaGdsUVNyOWdHRkh1VFBjQkNfUklTZTRZMzhDb05xaHZUNGdURlZxSUJBZ3RCVHZtbThfaFRObk1SM0VYX3ZZS09jelpvOGMzSVktZDNocEpKOVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2087
    },
    {
      "date": "Aug 21",
      "text": "Former Israeli PM Bennett suggests Israel should strike Iran in retaliation for Hezbollah attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOVm5RWHRhUm1XZV9BTno5Ym9IUnJRQ1k2R0M3RW9sb0xRYlhzU1JfaW1RRzlWRUYxdFQ2TmE2X2o5M1R2WDNhNVBJWXVvdDF1cTVyZFVZTWdmdTZwSWluZ1JRR0x1MWtMOEFETFpmSzVJdEw5UDllNXVwZFV3SkUwd0dRa0hxYTB0LS1aNUJFNjIwWTNsWEMySXhZZy1zMUtz0gGmAUFVX3lxTE01TTIwbzBrenNMcmp6eV9ZN1BoY1A5Q2Y4VkNTVG4yeWhPSlFMU01uWTZoLURQRUI4REpVaHBkZXgtWmNYRHFfOFdXVlpNV1pxZExRNmFyczJvbnM5VEJGUkdTN2gyYzk2MGRoakVrOHlMVHFmc0taRlV5S3lZWktwRkJhUlRKS19HUU01ckgyOHJacktLc1VQdGs4MlpYQkZMbGpyOGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2087
    },
    {
      "date": "Aug 21",
      "text": "Hezbollah official Nawaf Moussawi asserts that only force can compel Israel to leave Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxQM0haLUozRFRjWUlNUVB1cndpcTIydGYyNlc2VTlTUzV5ZDRCT083TmpMSkFMQkRiTE5ySHRpelU3cndZQTF4bFJmdUh4UnBLVlh0LWhHTkRGQVlxbm9iQ2ZTN0RmY3A3QkxoSG0tLXlfdk9mNnNSUjBaN1pNakd5M1ZtVGJNUWh3dG1uUXFRNWlaRTlzSV9jZHJoY1U5N2VXVzdaN0hR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2087
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
