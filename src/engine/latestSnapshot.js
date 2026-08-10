export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1711,
  "lastUpdated": "2026-08-10",
  "lastSyncedAt": "2026-08-10T10:49:26.076Z",
  "warDay": 164,
  "summary": "Tensions remain high as Iran demands concessions to reopen the Strait of Hormuz, while the US engages in 'semi-negotiations' and Israel prepares for potential unilateral strikes.",
  "lastNarrativeUpdate": "2026-08-10",
  "ceasefire": {
    "active": false,
    "status": "fragile",
    "confidence": 0.3,
    "durationDays": 60,
    "summary": "A fragile ceasefire appears to be in place between Israel and Hezbollah, but violations are reported, while no broader ceasefire is active in the US-Iran conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
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
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 68,
    "globalPressure": 90,
    "allianceInfluence": 68
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
      "date": "Aug 10",
      "text": "Trump states the US is 'only semi-negotiating' with Tehran regarding the conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOUmwyLW4yX3hkbjF2aWNpbmNLZWhIdTRZWV9hMDFCcmRZdkFGTFBidEtQWUJHR01Sd1JsZ0Y1aEltY2tfeHM2R1NNNk96VFA0b29zdXl4cFlOMDZRVFRXbGxwOVFfT3BSRjRtaklJbGVlZjcxVThBclg1emZSOGxOSjN3N1pLVHFXdFBnTHlJZmhGekk0QUhlUWQ0eHlMd2ZXOWVHZXBFMTZseDgtekVLeDNubU9oSmR3R2dxVS1LbkvSAcYBQVVfeXFMUERqYm5zQnVEdmc0b0tCU091ZTJGQ01Cald4UVVyWUZCdWlGMURrZ1RsYV93cXNoZjRRNTJXVUZHaU5KTlVtMmoyMUNIOFFETzI3YjZfRTE0Y3BGY0s5aFFGTkhXSTJEMmJRdEp3blBXZktxeFFtOWh1czZ4U0ZNZE54aGljT3doeHpKdlFkbk9WVlFrdU1EWHhIbVZqMnFiWkRhbGZ2RnNERUxvQll1TnEwUHI3QVkzUlFnMms0cXBiWmhuSU9B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1711
    },
    {
      "date": "Aug 10",
      "text": "Netanyahu rejects Trump’s Gaza plan and vows no withdrawal until Hamas disarms.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizgFBVV95cUxPT2VkSGVvZ0RGVGpNZnN2bUZCaFZqMWdoY1NnNHFudS1OQzdSemFBeDg0MU4xSEgxX2ZLTmk4WUdxLV9YbFV4RU9INDNLSm5YTGpNSFdWcmxoX2RWTUVVaExVNkpaWHp6WGtEWWdFaDRldU1MWlFWWVNXYllseFlzSjlkYnVzVFFxQXljMEF1c0NJeDJ4NHFZVU8tVk5BSTRBcEhTQnBYR1RhU2FYUkZSZDBmN3BWWXFPdVVpeFZURDhzZ3lwMTRuSXI4LVJzdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1711
    },
    {
      "date": "Aug 10",
      "text": "Iran's IRGC states the Strait of Hormuz will open after the US accepts conditions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPdXdjZUFncUFjUUhKUlJVNHZLOWFLbHlvQ1NxbGdTbXB1Q1p5V055VFFUbVNzaG1peHJHcG5NWUl4c1YxMnZhM3BlalN2V2dsWjNGb1JVRFdzby1CWlJJcVZvVVdSQ09QY2VHZ3hCaFRtb25RMjc4b1RvaDlTVm9lT3FPT0x4bThvZjV5bWx5TnNLcU9SU2E2UGhZSEpmU1ppVW05dDFtTDhKTS01UVg0YnZUZGo1QllZRHFybtIBwgFBVV95cUxNUmVhM2hweGl2V0dURDlEc3JqUTFYbG9UbWdhRmdSVkJXalZUSHdEanJ5eUVSMUpoblI0b0JEdmtELWNDR214ZTl5akNpTU9OYnZJcUZYQ3hBVlp0dW4xT19vNFYtbENtZUZTVlVScDRFaFVmWG1oY1pGZHN5a1gwRmtsQ1A0b3hwUFZJVmJ5WGExSFpXRV9Ed2hJcFNpNnVfRzhKZ2s2RG8zaGlRTGpBU01xdkxjU08yT2FfMkhpN2VTZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1711
    },
    {
      "date": "Aug 08",
      "text": "Iran demands concessions from the US as it nears a Strait of Hormuz deal with Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAybVA3dzRBU1hnc01FeGxSb0E3MjFhcjRteXBQUHZSVWJMRmF1QjNYM3ludGJFX1ZnVWkxYWlVdHhZY3c3ZmZOb0tadUMzMzJpZmV6QjZpc0ViS3pzbmdjMUg4YTZSdjA5bzE5akpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1711
    },
    {
      "date": "Aug 10",
      "text": "Iran says the Strait of Hormuz won't open until the U.S. 'corrects' behavior.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxOMVhleVdzazZyT0ZHcXV5aWJxa3FZaGtTelNHdUJ5cm4tNXNlLU5PYUM3Tk40cVRLQjdWY2Job2NyM0hNTnhKN1diQkkzN0Y0a0lOWmtCaGxxdU5GTUFxZW9IODM0MjI4aU5sS2YzREFrODBHV0pocFpGMkpPWHhla1JaXzRzclYtb085WFhMOFcxaXVfWWh1SXQzSmpJNUU5TzR3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1711
    },
    {
      "date": "Aug 10",
      "text": "Israeli media reports Israel is preparing for possible unilateral strikes on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxORnBwMDd2NXlSclA4SjZxUzNxckZMVFRHckt1X25YRnlMaWxhVEJsUU9QUU1aNkhnc3o5RmVMUXJQRmFMRWFVSHVZVzhwbWpFM3RGdlRtN3R6RUFqdF9uYVVsTjlkaEJVeHA5ZXh5bnl2V0VZYkYtOXhJVFN2Q0VWcEtYaWNiQXhTMHZoc3lXbDIxdU1wNzh1azM3S0NrdnBSLTh5ZHlScmRfazkxM0FtblVNaTE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1711
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
      "summary": "Tehran is demanding concessions from the US for a Strait of Hormuz deal and asserts its conditions for opening the strait. Iran also expresses a desire to remove the US presence from the Gulf region.",
      "tone": "defiant",
      "latestSinceUpdate": 1705
    },
    {
      "perspective": "United States",
      "headline": "Trump Threatens Attacks Amidst Limited Options",
      "summary": "President Trump issues threats of 'heavy' and 'massive' attacks on Iran while simultaneously engaging in 'semi-negotiations'. His top general is reportedly seeking an 'off-ramp' from the conflict due to limited military options.",
      "tone": "strained",
      "latestSinceUpdate": 1705
    },
    {
      "perspective": "Israel",
      "headline": "Israel Prepares for Strikes, Rejects Gaza Plan",
      "summary": "Israel is reportedly preparing for unilateral strikes on Iran and has rejected President Trump's Gaza plan, vowing no withdrawal until Hamas disarms. Concurrently, Israel is engaged in talks with Lebanon regarding Hezbollah disarmament verification.",
      "tone": "defiant",
      "latestSinceUpdate": 1705
    }
  ]
});

export default LATEST_SNAPSHOT;
