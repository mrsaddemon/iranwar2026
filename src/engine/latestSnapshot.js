export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 925,
  "lastUpdated": "2026-06-09",
  "lastSyncedAt": "2026-06-09T23:44:45.427Z",
  "warDay": 102,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-09",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "No active ceasefire is in effect, with direct U.S. strikes on Iran and ongoing Israel-Hezbollah exchanges."
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
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 38,
    "oilDisruption": 75,
    "tradeImpact": 45,
    "sanctionsPressure": 49,
    "globalPressure": 54,
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
      "date": "Jun 09",
      "text": "A U.S. helicopter went down near the Strait of Hormuz, with the crew subsequently rescued.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 925
    },
    {
      "date": "Jun 09",
      "text": "Former President Trump claimed Iran shot down the helicopter and vowed a 'response'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxPTk1sMDhuN1Y0S0dtS3hsMWdlZUp5NGVWcnhZSmEya3VLYXBOM29DTzkzTjNIWWdIMUNVWjBVWkNWQnRnYWZnRUcwSmQ3bDU3QlN5Rndub2dWNUc1dHA1Z0c1RXlPT1lhbWVpRlFnV3ZjSml2MW45ZmlDbXU5clhNQmlmZ3RwbmtqQkFFMHZLOS1LVkVpSnhsTHpoMjNTOXltMl95QXEyZ25rd9IBrwFBVV95cUxNOG1fSlNOY2JPQUF4c3hFSF9hZ25YdHp4SzNzai1oZXhHNjlIbkhhV21CMnRUVkxBbXg5WVpURUFEYVdkUDhjNEJRUXp1WmxtWFRHajRabktYbV9ab013cmcwb29nYmJ5N3hWbE93SThJclNIRzVzUEhWc3IzbEVPRkplUTlldk5yMTJPdTFFM3ZhRUU5WFhzQWxoQ09OOWNndEVVVFVGSThYY2Vndi13?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 925
    },
    {
      "date": "Jun 09",
      "text": "The U.S. military launched strikes against Iran in response to the helicopter downing.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1SZDdKa1gxeUJSNTBHc1hsN2preWRiM1RqbjRlVDlYUzRjc0twS01jX25uWG83dk1ScmlnSUZpLUE3ckVOSGJRZmxjSXo1dXRYdmMtLWZ1OEY3SFRWU1Y2SERvZmpHeFZUanRqdTc1c2pDMjFzdUVz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 925
    },
    {
      "date": "Jun 09",
      "text": "Iran and Israel reportedly halted exchanges of fire, though Netanyahu stated the war is not over.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 925
    },
    {
      "date": "Jun 09",
      "text": "Israel struck Beirut following a Hezbollah attack, risking further Iranian response.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxPamtFLVM2ZEVsR3UxUS12X2VGclNOVzJWdllVejhUOFdKZWt0THJJVGxsZ0EwZXRJU0tRUGJlbG42UWx5al9XN0VXMG5UN0laS2t6S0RiYmRIME51bk5IWF80T1h0emNneEx5c0p0NE94QUFRelZIOEhwTWtBUTI1Ym05OU9tYkUwX0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 925
    },
    {
      "date": "Jun 09",
      "text": "Iran stated the U.S. is not seeking a ceasefire or dialogue amidst the escalating conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxPckwzaWlod3dWNDIyX0dILXNhaXNBUnVOSG9VU245MHBTT2RkajBsQ2RidHRrMDdEQW4xc2h5NkFhbDcxQ3l1MGkzVzZLOGlOS2JGdjZBR2JOVmZwZFFaR0o4TGl4V2l2Nk1MVmpkdWVJU0ZJQWVqNmVialczOEt6aUZnMzRRV2FDQnBRZ3FBWllsWGNUSzRXU243X3hpblZhM25nYWZENXN3WHJyYkpqNlRqVmZENWlrWGxtRlg3azjSAcYBQVVfeXFMTUdNcDNObDZwcl95bkxtTVhqeU5GcHd1SnFMblhuLUkwTXI1eG0tUmNoSkpBRDJUYXhPRzNCbng2QmNFbUpDZFgxeFJ4cDI2eDdzb0ZoV2hCWVlQblBsQmtrai1KWERiRjhsMjFncnQ0VHUzY2NKNlFrZ2lOWElRUEVBQVFGMnExdzVDYU53TXFCeHVIejQwOXVROW9EenprbEFXTFFid3FWT3ZTMXpiU1FsZFozVU1maFdmUnlTalMyZjBhWm13?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 925
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
