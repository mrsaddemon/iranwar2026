export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 930,
  "lastUpdated": "2026-06-10",
  "lastSyncedAt": "2026-06-10T17:29:58.091Z",
  "warDay": 103,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 100,
    "summary": "A US-brokered truce between Israel and Hezbollah appears to have collapsed following continued Israeli strikes in Lebanon, while US-Iran exchanges of fire persist despite ongoing peace talks."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
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
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jun 10",
      "text": "Tehran states the US is not seeking a ceasefire or dialogue in the ongoing conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxPckwzaWlod3dWNDIyX0dILXNhaXNBUnVOSG9VU245MHBTT2RkajBsQ2RidHRrMDdEQW4xc2h5NkFhbDcxQ3l1MGkzVzZLOGlOS2JGdjZBR2JOVmZwZFFaR0o4TGl4V2l2Nk1MVmpkdWVJU0ZJQWVqNmVialczOEt6aUZnMzRRV2FDQnBRZ3FBWllsWGNUSzRXU243X3hpblZhM25nYWZENXN3WHJyYkpqNlRqVmZENWlrWGxtRlg3azjSAcYBQVVfeXFMTUdNcDNObDZwcl95bkxtTVhqeU5GcHd1SnFMblhuLUkwTXI1eG0tUmNoSkpBRDJUYXhPRzNCbng2QmNFbUpDZFgxeFJ4cDI2eDdzb0ZoV2hCWVlQblBsQmtrai1KWERiRjhsMjFncnQ0VHUzY2NKNlFrZ2lOWElRUEVBQVFGMnExdzVDYU53TXFCeHVIejQwOXVROW9EenprbEFXTFFid3FWT3ZTMXpiU1FsZFozVU1maFdmUnlTalMyZjBhWm13?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 930
    },
    {
      "date": "Jun 10",
      "text": "Trump vows to attack Iran again today, amid prolonged peace talks and recent US-Iran trade of strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1SZDdKa1gxeUJSNTBHc1hsN2preWRiM1RqbjRlVDlYUzRjc0twS01jX25uWG83dk1ScmlnSUZpLUE3ckVOSGJRZmxjSXo1dXRYdmMtLWZ1OEY3SFRWU1Y2SERvZmpHeFZUanRqdTc1c2pDMjFzdUVz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 930
    },
    {
      "date": "Jun 10",
      "text": "The U.S. conducted retaliatory strikes after an Apache helicopter was reportedly shot down by Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTE9CcXlXY1RUWm9uR0lyQlVvb2pIYWM5WFdNZHNYVnlYeTZiaTdvSVlKUDBKV1hvRkxmUG5VbHhWaHpXenIwYTQ4QlBJMjdvNVBhUFZLMTE4cWhpeU9XRmRWVjBDNlRhUUtfcGFNN0M1ZkhzN0ZmSE40Yktn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 930
    },
    {
      "date": "Jun 10",
      "text": "US and Iran exchanged fire after an American patrol helicopter was downed in Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBsMU5qNmNLREM0TFZjR2hkZ1ZTSlZFNktlWjhZX0Z0YnM0UFRicUNkaUxxTzRvM195emt5aWhYX2FONkFUR1ZwNHdwQVphYm5YVnJ4RHJjbEh0QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 930
    },
    {
      "date": "Jun 10",
      "text": "Tehran reportedly targeted Bahrain, Kuwait, and Jordan following U.S. strikes on Iranian assets.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMifEFVX3lxTE5sRm9EcldpYUsxdEx1MnNJUUhaVGc1a0hsUDN6am1PMnJXQWZ2c3lVSWFEMVRtcktEeE5EQUxpcC02Rzg1akFuMEd1VGhlRmxPYzV3RnBWMmVVejR5YkhhYWZfeDg3UWYwWlROZGY0SGtUREZQeTFDSTM4Z3XSAYIBQVVfeXFMTjB2aTYwNTNBOVpOWEhaVUl5ZGx1WFdMTUMwU3p3TkMtUlNfR2hEZTF0X2s5VWlZZUpsbnc4eXItazJEb2I4Y3VuV1BOa1FoX1NVSVJwblpyNmhNQ1hBSlhSV0FYb3Y1SFdiMUkxX2VuVXJoTDJJWW01Qk9OZFg3a1NtQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 930
    },
    {
      "date": "Jun 10",
      "text": "Ship traffic has thinned in the Gulf as US-Iran tensions intensify, with oil tankers increasing 'dark' transits through the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTE9NZGhYVUg2Rjk0T2dFM05PbkhqVlRaX253T2h2d05rMlJISFhmMGRKaEdxZ3pxWUdXSnNMZVZxelRJcm4tUWpJNFRhRklEM0dTUnpUQWlXMjNqVHdiY3luQ2U4WFpKMG1MckFac3NibE0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Financial Times",
      "latestSinceUpdate": 930
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "Economic Impact",
      "headline": "Global Markets Reel from 100 Days of Iran War Fuel Shock",
      "summary": "Global markets and airlines are experiencing significant fuel shock and profit forecast cuts due to the ongoing Iran war, marking 100 days of conflict. The economic fallout is a major concern for international stability.",
      "tone": "anxious",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "Escalation & Retaliation",
      "headline": "Iran and Israel Exchange Missile Strikes, Vows of Retaliation",
      "summary": "Israel and Iran have engaged in direct missile exchanges, with Israel vowing retaliation after Iran's first missile attack since April, following earlier strikes in Lebanon. This marks a significant escalation in the conflict.",
      "tone": "strained",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "US/Western Concern",
      "headline": "US Focuses on Iran's Nuclear Ambitions and Hormuz Control Amid Gulf Strikes",
      "summary": "US officials and allies emphasize preventing Iran from becoming a nuclear power and controlling the Strait of Hormuz, while also engaging in strikes in the Gulf. The US provides naval overwatch in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "Iran's Stance",
      "headline": "Iran Retaliates Against Israel, Accuses US of Ceasefire Violation",
      "summary": "Iran has launched missiles and drones toward the Strait of Hormuz and Israel, accusing the US of violating the ceasefire and retaliating for Israeli strikes. Peace talks have stalled amidst the renewed hostilities.",
      "tone": "defiant",
      "latestSinceUpdate": 909
    }
  ]
});

export default LATEST_SNAPSHOT;
