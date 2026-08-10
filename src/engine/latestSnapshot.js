export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1706,
  "lastUpdated": "2026-08-10",
  "lastSyncedAt": "2026-08-10T02:55:31.459Z",
  "warDay": 164,
  "summary": "The Iran war continues with ongoing negotiations over the Strait of Hormuz, US troop deaths, Israeli preparations for unilateral strikes, and regional Houthi attacks.",
  "lastNarrativeUpdate": "2026-08-10",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect, with ongoing military actions and negotiations for de-escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
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
      "date": "Aug 08",
      "text": "Trump states the US is 'only semi-negotiating' with Tehran regarding the conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOUmwyLW4yX3hkbjF2aWNpbmNLZWhIdTRZWV9hMDFCcmRZdkFGTFBidEtQWUJHR01Sd1JsZ0Y1aEltY2tfeHM2R1NNNk96VFA0b29zdXl4cFlOMDZRVFRXbGxwOVFfT3BSRjRtaklJbGVlZjcxVThBclg1emZSOGxOSjN3N1pLVHFXdFBnTHlJZmhGekk0QUhlUWQ0eHlMd2ZXOWVHZXBFMTZseDgtekVLeDNubU9oSmR3R2dxVS1LbkvSAcYBQVVfeXFMUERqYm5zQnVEdmc0b0tCU091ZTJGQ01Cald4UVVyWUZCdWlGMURrZ1RsYV93cXNoZjRRNTJXVUZHaU5KTlVtMmoyMUNIOFFETzI3YjZfRTE0Y3BGY0s5aFFGTkhXSTJEMmJRdEp3blBXZktxeFFtOWh1czZ4U0ZNZE54aGljT3doeHpKdlFkbk9WVlFrdU1EWHhIbVZqMnFiWkRhbGZ2RnNERUxvQll1TnEwUHI3QVkzUlFnMms0cXBiWmhuSU9B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1706
    },
    {
      "date": "Aug 08",
      "text": "Iran demands concessions from the US as it progresses towards a Strait of Hormuz deal with Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAybVA3dzRBU1hnc01FeGxSb0E3MjFhcjRteXBQUHZSVWJMRmF1QjNYM3ludGJFX1ZnVWkxYWlVdHhZY3c3ZmZOb0tadUMzMzJpZmV6QjZpc0ViS3pzbmdjMUg4YTZSdjA5bzE5akpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1706
    },
    {
      "date": "Aug 08",
      "text": "The Pentagon requests defense companies to increase production due to dwindling stockpiles during the Iran war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE4zczFtNVN4ekhEZnBzcmk1a0JsOHlRanpTblowSUN5d1pCbHRmMTN5Y045bkdTdG92bncxWUhqZ2ZOdEV0X3kxU29TZ3lkYU0zd3N4Qk1LMUhvU3RYM2RhcXpJN2FEZjdoSVBNWVZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1706
    },
    {
      "date": "Aug 08",
      "text": "UAE, Bahrain, and Kuwait condemn Houthi attacks targeting Saudi Arabia.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxNVUhhNkk2U0E1aGxlSGh2emxEVnZnZWlZRnRzLVJvY29PQXp3S1VKX3ZsRnd3bWlQdmZfZmFvMFFZaDlEX2xWVG5IWmNDdTRZVXZONTd0MFFEYW1ZLXBHRkJ4dVRRUFF6V2VSdm5TZmpqWkIzdHl4bTlkWFdwTlpqcVB3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 1706
    },
    {
      "date": "Aug 08",
      "text": "Israeli media reports that Israel is preparing for potential unilateral strikes on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxORnBwMDd2NXlSclA4SjZxUzNxckZMVFRHckt1X25YRnlMaWxhVEJsUU9QUU1aNkhnc3o5RmVMUXJQRmFMRWFVSHVZVzhwbWpFM3RGdlRtN3R6RUFqdF9uYVVsTjlkaEJVeHA5ZXh5bnl2V0VZYkYtOXhJVFN2Q0VWcEtYaWNiQXhTMHZoc3lXbDIxdU1wNzh1azM3S0NrdnBSLTh5ZHlScmRfazkxM0FtblVNaTE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1706
    },
    {
      "date": "Aug 08",
      "text": "The U.S. announces another troop death as Israel warns Tehran's attacks are drawing closer.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNWnJYc0NUMEFyWXc0S0x1LVFjZXNDcV9WQm1sU0JTX05BN1hQSkxEcmYyTzdGdHpuVFJHZWo2Q25JaVptLTZEOEZKOFFJQ0pWV2tCWDNpa1NxbFNaX0x6dkF6dEw2enNEdEdDOGlFMXg1aG51dWRzN2VyaElzRnBkZkFnWkc2UWxsZmpUelNvNFFzejJMZ29pYm9vR2NUUURDNmhaRTdneGx5aXNYdmFqWnJRVWt5ODZ0bVHSAb8BQVVfeXFMTlZhWS1lMjFKSUlEOUcwVUd5RWtjRzdKamdKaTJHVlFTejZWQzdIUmd2Q203S1g3c1d2eUlxMEtkeFFpa2ZoaTNfcUtQcFJLdUF4UU9qWDJaUFlEYXNkdE51UHh2b2N6eGNaVkZ5NUpFUU1EYU9uMUc1NE9FX1lqY0I0azVpVkhhT1FnN2U0MzVmOGhkc2c1c1lxLWtKV081TGVwYmZxZkpxR05LODlONzdHMXBpQms2czM3MUo3UUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1706
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
