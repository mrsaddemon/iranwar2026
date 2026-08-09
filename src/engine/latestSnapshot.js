export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1675,
  "lastUpdated": "2026-08-09",
  "lastSyncedAt": "2026-08-09T00:35:31.384Z",
  "warDay": 163,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-09",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect for the broader conflict, and a previous truce in Lebanon appears to be severely strained."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 38,
    "oilDisruption": 90,
    "tradeImpact": 56,
    "sanctionsPressure": 49,
    "globalPressure": 57,
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
      "date": "Aug 07",
      "text": "IRGC states Hormuz will open after US accepts conditions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPdXdjZUFncUFjUUhKUlJVNHZLOWFLbHlvQ1NxbGdTbXB1Q1p5V055VFFUbVNzaG1peHJHcG5NWUl4c1YxMnZhM3BlalN2V2dsWjNGb1JVRFdzby1CWlJJcVZvVVdSQ09QY2VHZ3hCaFRtb25RMjc4b1RvaDlTVm9lT3FPT0x4bThvZjV5bWx5TnNLcU9SU2E2UGhZSEpmU1ppVW05dDFtTDhKTS01UVg0YnZUZGo1QllZRHFybtIBwgFBVV95cUxNUmVhM2hweGl2V0dURDlEc3JqUTFYbG9UbWdhRmdSVkJXalZUSHdEanJ5eUVSMUpoblI0b0JEdmtELWNDR214ZTl5akNpTU9OYnZJcUZYQ3hBVlp0dW4xT19vNFYtbENtZUZTVlVScDRFaFVmWG1oY1pGZHN5a1gwRmtsQ1A0b3hwUFZJVmJ5WGExSFpXRV9Ed2hJcFNpNnVfRzhKZ2s2RG8zaGlRTGpBU01xdkxjU08yT2FfMkhpN2VTZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1675
    },
    {
      "date": "Aug 07",
      "text": "Iranian-backed proxies targeted Saudi Arabia, widening the conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE11OFNkTG1PNmRQOXdaM3ZBRVBzR1FQWnE3WV82SHBaZVI0Q3B6eGxjcUoweEVmRnRTVHloTVFiajNCU3htZU9tckhNeTVNU2VwVkFveGhpZ2NBV2lQQ2dXcF91aTFjal82NnAxUVB3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1675
    },
    {
      "date": "Aug 07",
      "text": "UAE, Bahrain, and Kuwait condemn Houthi attacks on Saudi Arabia.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxNVUhhNkk2U0E1aGxlSGh2emxEVnZnZWlZRnRzLVJvY29PQXp3S1VKX3ZsRnd3bWlQdmZfZmFvMFFZaDlEX2xWVG5IWmNDdTRZVXZONTd0MFFEYW1ZLXBHRkJ4dVRRUFF6V2VSdm5TZmpqWkIzdHl4bTlkWFdwTlpqcVB3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 1675
    },
    {
      "date": "Aug 08",
      "text": "US launches strikes after the killing of soldiers in Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxOeExZQjNOMmxmMDk3OW92dGEzamZjRGZBZDJZR09Ha3hXaU0yX09LUFRybFRqdkhCWlA4XzFXMUZWb0xCS2FlV3prZWo3RHJCVVVYbmI4NXNLWU1jX2RxRld5THF3TldPTkVVdEJRXzZPQWthNkxNdllHeXpzZmxsUnFkZXpXZVlXLWl1SXp6Z2xXOUFmY2VJTG9mQlFYMExLU0tNSlFiUEFTclM2M1JZd29uQWEwNklQSEHSAb8BQVVfeXFMTllkczI1VmJNZG1JbUV1MnNEeTRZWFhycHFRSjh4RU5WcW1PU2hTU0FiS3JxTGpwUVc3VWNWaU1Wd2poNVFhS19TVWo3N0V3VGx0UFJhZHpfVDJGdGtBSEYtMHFIel9NQ0FyMGp3X1lrTkNDTlluZWFha0R0TWUtdDZnWDBaNm1RUGQxMmx0Z3VFU3J1azlLTEhUS0RjWW5NaUNTNDYxZ3dDRXRVMWxZSjR6UUVMdmlSSEhUV2RqV00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1675
    },
    {
      "date": "Aug 08",
      "text": "Trump threatens 'heavy attacks' on Pickaxe Mountain and warns of an 'unprecedented massive attack' on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxORlZ5bEhMQlpYV2JLZTRpUkJTblJYa0VGeFhhblVfUkp1TDIzMFl6ZnlIZ2gxbDZJUXBpQmdZXzc0RjQtRmU1cjhXblRCN3lwbG5YNThjR0xLMnRJTklldUNYYzlrLXRjeUJDM0dPTjFBcVZQdUQyU1VZbmtYQ1ZfSld3cUppa1ZaVk4yWVNCYnFpbEJZVkxFaHdjcDVoMWplN2tRV3pTaWJodV9zZGloY0JRYjVTSXpMbUpV0gHAAUFVX3lxTE5Sb3VwbFB3cUlwMkoxU3VEZjBEUjBLZkxyVDFpNUp1WG5PektuUGw4Z1hTWEUzbE14dEd5X3RWMmxiRG4weVJoWHY2emd1N0NFSFY4QzlwZmQ4Q0s3d2NudG9CNTZjRUZxSDMxV0QwaEkxOF9qaTZ2cGJtOFRZVHJSYTR5TTc5b3NWMkJWbThFRnNJdUxJNExpa1M4NlFLN2dWVzJKX25RV2U0a0kwam15Wm8xZU1lTHJpUHVfNkZ1OA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1675
    },
    {
      "date": "Aug 09",
      "text": "Iran issues new demands for opening the Strait of Hormuz, with the UAE reporting a ship was targeted.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxQTjRyQnZ2aG5rTlFvRmplYkNqQ3Rxck5pREMzSGxnRm1oOFRSd3hic3BlUzZ3alAtZFB5RjFiSC1ibnVpNm9DQzZWVVk5c2Iwd24yeUlEQzBqWGZ6eHdMaFI4d0MtdDIxbXlzTDgzT0tsX3ZJb2Zvb3ZnLTNTbzFla1BORl9sN1pkeDEtVFE5SWhJY3BLUHFfaWhKRjh3WHBRS1FV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1675
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
      "perspective": "Iran",
      "headline": "Iran Demands Concessions, Seeks US Exit from Gulf",
      "summary": "Iran is actively making new demands for opening the Strait of Hormuz, signaling its intent to leverage its position. Concurrently, Iran perceives an opportunity to diminish the US presence in the Gulf region.",
      "tone": "defiant",
      "latestSinceUpdate": 1675
    },
    {
      "perspective": "United States",
      "headline": "US Threatens Massive Retaliation Amid Calls for De-escalation",
      "summary": "President Trump has issued strong threats of 'heavy' and 'massive' attacks on Iran following US soldier deaths. However, sources indicate top US military leadership is seeking an 'off-ramp' from the ongoing conflict.",
      "tone": "strained",
      "latestSinceUpdate": 1675
    },
    {
      "perspective": "Regional Allies",
      "headline": "Gulf States Condemn Proxy Attacks, Regional Conflict Widens",
      "summary": "Saudi Arabia has been targeted by Iranian-backed proxies, leading to condemnation from UAE, Bahrain, and Kuwait. This indicates a widening of the conflict and increased regional instability.",
      "tone": "anxious",
      "latestSinceUpdate": 1675
    },
    {
      "perspective": "Israel/Lebanon",
      "headline": "Lebanon Truce Fractures as Israeli Deaths Occur, Disarmament Verification Stalls",
      "summary": "The June truce with Hezbollah has been violated with the killing of Israeli soldiers in Lebanon. Disputes over Hezbollah disarmament verification and Israel's refusal to withdraw further indicate escalating tensions on this front.",
      "tone": "strained",
      "latestSinceUpdate": 1675
    }
  ]
});

export default LATEST_SNAPSHOT;
