export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1725,
  "lastUpdated": "2026-08-10",
  "lastSyncedAt": "2026-08-10T23:43:53.131Z",
  "warDay": 164,
  "summary": "The US and Iran are engaged in semi-negotiations while both sides demand compensation, with the Strait of Hormuz remaining closed and Israel preparing for potential unilateral strikes.",
  "lastNarrativeUpdate": "2026-08-10",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.1,
    "durationDays": 60,
    "summary": "A previous cease-fire has reportedly teetered and been violated, with no active de-escalation in effect."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "text": "Trump states the US is 'only semi-negotiating' with Tehran amidst ongoing conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOUmwyLW4yX3hkbjF2aWNpbmNLZWhIdTRZWV9hMDFCcmRZdkFGTFBidEtQWUJHR01Sd1JsZ0Y1aEltY2tfeHM2R1NNNk96VFA0b29zdXl4cFlOMDZRVFRXbGxwOVFfT3BSRjRtaklJbGVlZjcxVThBclg1emZSOGxOSjN3N1pLVHFXdFBnTHlJZmhGekk0QUhlUWQ0eHlMd2ZXOWVHZXBFMTZseDgtekVLeDNubU9oSmR3R2dxVS1LbkvSAcYBQVVfeXFMUERqYm5zQnVEdmc0b0tCU091ZTJGQ01Cald4UVVyWUZCdWlGMURrZ1RsYV93cXNoZjRRNTJXVUZHaU5KTlVtMmoyMUNIOFFETzI3YjZfRTE0Y3BGY0s5aFFGTkhXSTJEMmJRdEp3blBXZktxeFFtOWh1czZ4U0ZNZE54aGljT3doeHpKdlFkbk9WVlFrdU1EWHhIbVZqMnFiWkRhbGZ2RnNERUxvQll1TnEwUHI3QVkzUlFnMms0cXBiWmhuSU9B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1725
    },
    {
      "date": "Aug 10",
      "text": "Iran demands concessions from the US as a Strait of Hormuz deal with Oman nears, but talks appear stalled.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAybVA3dzRBU1hnc01FeGxSb0E3MjFhcjRteXBQUHZSVWJMRmF1QjNYM3ludGJFX1ZnVWkxYWlVdHhZY3c3ZmZOb0tadUMzMzJpZmV6QjZpc0ViS3pzbmdjMUg4YTZSdjA5bzE5akpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1725
    },
    {
      "date": "Aug 10",
      "text": "Sources indicate the US has used 'virtually all' of its long-range precision missiles during the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxOZjVoa01lTFhQYVMtVjRxRWZKSng1YzFUTTNJOVI1T1pWZVNKc1czOWhJWHB3VDFFWnVrY3lLT1FnSVBfU1M1RFdrU2FsYVlKZXdhVm9VbF9PaEFNeGVMR0ZtNmlEeGhkWG1iang1U0kzb3hmWENGSnNXODRzdnZYaE1LYkY4Vm1hbzJEcEl1ZzZIRVBQLS1nYUYyTWdDdjZjXzN0NmtuZm5IV2FEdlBQby1UUnBqc0FF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1725
    },
    {
      "date": "Aug 10",
      "text": "Iran reportedly plotted a wider war with the aid of its proxies as a cease-fire teetered.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1725
    },
    {
      "date": "Aug 10",
      "text": "Israeli media reports that Israel is preparing for possible unilateral strikes on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxORnBwMDd2NXlSclA4SjZxUzNxckZMVFRHckt1X25YRnlMaWxhVEJsUU9QUU1aNkhnc3o5RmVMUXJQRmFMRWFVSHVZVzhwbWpFM3RGdlRtN3R6RUFqdF9uYVVsTjlkaEJVeHA5ZXh5bnl2V0VZYkYtOXhJVFN2Q0VWcEtYaWNiQXhTMHZoc3lXbDIxdU1wNzh1azM3S0NrdnBSLTh5ZHlScmRfazkxM0FtblVNaTE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1725
    },
    {
      "date": "Aug 10",
      "text": "Iran declares the Strait of Hormuz will not open until the U.S. 'corrects' its behavior.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxOMVhleVdzazZyT0ZHcXV5aWJxa3FZaGtTelNHdUJ5cm4tNXNlLU5PYUM3Tk40cVRLQjdWY2Job2NyM0hNTnhKN1diQkkzN0Y0a0lOWmtCaGxxdU5GTUFxZW9IODM0MjI4aU5sS2YzREFrODBHV0pocFpGMkpPWHhla1JaXzRzclYtb085WFhMOFcxaXVfWWh1SXQzSmpJNUU5TzR3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1725
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
