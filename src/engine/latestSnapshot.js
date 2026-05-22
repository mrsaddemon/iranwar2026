export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 733,
  "lastUpdated": "2026-05-22",
  "lastSyncedAt": "2026-05-22T11:33:54.278Z",
  "warDay": 84,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-22",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 3,
    "summary": "A shaky ceasefire continues between parties, with ongoing peace talks showing slight progress but significant disagreements remain."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.7
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "May 20",
      "text": "Tehran accuses US of ‘overt and covert’ moves for attack.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPMDJZNG9HalZLWEpsaHNBemRNVHpOOXVITWN3eTVMZEx6WnNuX0gwdlpUV2x5ME82MHJTazE4TlJoWmxLMTF3c2xDWG9rb1o1UmJlLXRpWlZjWWlpZXJUR2l1X0ttQlZzaEtVaEd6QTliRTFGZFZsX21jYnE4alNOeEoxTVVyZm81UU5uNWNGZGNHVzJZcy1UTHNlNjZ6d3hoYnJzWHBvZkZxMTRmWHVGRjB4cGJJNk4tMENN0gHAAUFVX3lxTFA5dzBfN3RmRWVPR2ZpWjQxOTlEbDBncExIejdaMU9UdDc0c21Bd2VLa3p6Vy1fcFE4bE1xQmR2LVJGOUxKNERXSGFzbjhKb09jLU5pTU5DY1Z1S2tTWEdQN2N6MVFRWWJTMmhvaVMwN0RWclo4b2Q2cF85aHFaZVhvZ0N0WWdmVFo5YTFtcGlWU2l5NzZjeXJrTXpmRkRIVjh3Tk1DMzBzVGtKcFpraDVmVGJNTkhrSTNPWENPTGhBUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 733
    },
    {
      "date": "May 21",
      "text": "Rubio states 'some good signs' peace deal can be reached in Iran talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPekMyeGcxWEVrNG5LQnpVdW5jdU9hcTFMUTFlRFRuU2VNZFZZbUZHbEpkY1ZxbUtjSGgyeTh2VnY1Y1dZNENFanNBYzhNNERpWF8tOXJCS1pmbHJOcFBoVl9tbDVlM3RGUFVsdDc4aXFJOTdLZXpRclFJTGlDeUdZel9CWDRHaE5GcEFGQ2hFb0hEQVNpQ3Q0YndnbHFtdHBBRFMzOEtUajhXd0c5U3Zfdm9wdlJ1VV8wbDZn0gHAAUFVX3lxTFBVM1ZlbXNDVU1IVE45TWxiaXNZTDJGaTZNa3J6WWRiQWpnaVVudFdDOVk4VHkybjYwQ241QXBoaTNhSzhHT3pZNmlJVGNoZ2FVcDFuOERYbklaLXpwbVVlbDdxWnJDSmx6VE1NLVZ2WXBtYjNvRi05dXpUUmFIdGxyR1JqcGYwdHZsS19udG5KS3ZXWU9kUUp0c1B4bkx1Mmt3TU1FWlo0dERWb1FwYnBZbldKaU5tdEJNVkJPazFVTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 733
    },
    {
      "date": "May 22",
      "text": "Iran unveils plans to control the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 733
    },
    {
      "date": "May 22",
      "text": "Israel is reportedly preparing for a renewal of the Iran war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQY0hFRFJqeXMyYXVTQU5XZjI3TExpcUw2RlNaUW5rT2k0Ylk3ZEN1a3RhZzBUQU00Z3JPSmtNTjhrYlhZWFVNWmlSaUZRZUNKOXBuVGVCSzQtVjZHMzFFRWszU2txa1RJSFdlSVhERWVQdl9xcFFUV1NrSDJuTTR1Ukw5M29MYnJuWWhNY1BxajI2eGZGNUJYNDNnWXl5TWdZUHF0ZkZuQlluTlJkeHBxajM1cWhUYmPSAbwBQVVfeXFMTmVqLS1IcXJHdTZfdTdweVpGUmI5a2drYWtGWlFwa19lY0ZLUTliR0NYeDhDZFBhMnlXTnlRcTZOSmlaNmJwQ25KTFI5TkNTeU5UWXdxZ2I4dnBzQTcwUkZ2ZDNfTVZNcGMyTGYyNVcwUUZYUHJVN2hPMUxwSDFVcWRJc3NoWkpSV2c5Z3YtV2htLU41eWZqR2hQOWJsWDNUTFhiSVBZOTJXSEZobHZyS2NPejdpSlhYZy1CSlY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 733
    },
    {
      "date": "May 22",
      "text": "Trump states 'Clock is Ticking' for Iran amidst a shaky ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxQMWZnWl9iZjVMaE91ZFRYa3JNR2xSMk50eXVCTzZaYWh5TkhYSFUyd0FmbFZqRXg1V3JPOHE3QldoNm9XVlZGdVVqY1NoOEdMelRjZWM1eW84T3k2TkFrYml3cWJ6UklVczJsQ3RySnZ2T0JmNGEwY3NMUFBlSlZpcFVTMFRfLVB4QzRXSHhYdkQzYnF0QzJQSdIBngFBVV95cUxPTWVNNTBmUEtIbXdXMnlFX3E0aHo2U29ZN2xnZ0Rtc3pneV9oc1BhVVFzZEtNeVN1eG9vQTVMaXU1a2JkOXp5bHJXV3NmUHZMejByUTZkNTRtQVRfektVXzM4ZFp6VUdZUjFKeXZCd3RJWEdZNmZGdmFWMUV6bDdmVmRqSVJtSWE3OXJpc2hsNjA2aFVPT3BYYlRGQ1pVUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 733
    },
    {
      "date": "May 22",
      "text": "U.S. and Iran signal peace progress but remain at odds over enriched uranium and Strait of Hormuz tolls.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTE4yUnlWeDNhbzIzeHpJdGFPUThqTHl2VXk3OE5XYVZDVXN5NmxfSmEwWGpfdGRDRXQyWWVrVm5qVlhlWlNfQktNdDZPeDFxejdWU2xKRU82b0lFVE52YlZOREpuemVLdUdUUnlBc0RpdXlLeHExN2dVUDlrMkZESWvSAYQBQVVfeXFMUFBtTVI3SUxrYVg1Y3lleWdZNWFzeWEyUURrak4zZFZqS01XaGpCcTllSkMyTjRsYVdSSzB4NE9PYXQ2bHlzVHdaY0o4NG9CUVdQSHB4NUZpZ0JLMWN1SjFQLXNYVHFFeF9lNUVGaksyZmJ1RmRMdTA2OTBNT3FvUFZXOTFS?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 733
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
      "perspective": "US/Trump Administration",
      "headline": "Trump Offers Peace, Warns of Renewed Attacks",
      "summary": "President Trump has presented a peace proposal to Iran, indicating a willingness to wait 'a few days' for a response. However, he has also issued warnings of potential attacks if a deal is not reached, signaling a conditional pause in military action.",
      "tone": "strained",
      "latestSinceUpdate": 730
    },
    {
      "perspective": "Iran",
      "headline": "Tehran Reviews Proposal Amid Accusations and Readiness",
      "summary": "Iran is reviewing the US peace proposal while simultaneously accusing the US of 'overt and covert' moves for attack. Tehran declares readiness for 'every scenario' and tightens its grip, asserting its control over the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 730
    },
    {
      "perspective": "Israel",
      "headline": "Israel Prepares for War, Strikes Beirut",
      "summary": "Israel is reportedly preparing for a renewal of the war with Iran and has launched air strikes on Beirut, resulting in casualties including children. This comes amidst accusations of potentially committing genocide in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 730
    },
    {
      "perspective": "UAE",
      "headline": "UAE Accelerates Hormuz Bypass Pipeline",
      "summary": "The UAE is quickening the development of a second pipeline to bypass the Strait of Hormuz, with the first nearly 50% complete. This infrastructure project aims to ensure oil flows independently of the Strait, with full operation expected by early 2027.",
      "tone": "neutral",
      "latestSinceUpdate": 730
    }
  ]
});

export default LATEST_SNAPSHOT;
