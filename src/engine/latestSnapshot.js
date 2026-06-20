export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1011,
  "lastUpdated": "2026-06-20",
  "lastSyncedAt": "2026-06-20T05:58:11.835Z",
  "warDay": 113,
  "summary": "The US has released a preliminary agreement with Iran to end the war, while Israel and Hezbollah have agreed to a ceasefire in Lebanon amidst ongoing tensions regarding the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-06-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "Israel and Hezbollah have agreed to a ceasefire in Lebanon, but Israeli troops are expected to remain, indicating the truce's fragility."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 45,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 58,
    "globalPressure": 67,
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
      "date": "Jun 20",
      "text": "US releases official agreement with Iran, detailing a 14-point text to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE5CQ3p0cG16TzJCYXJpcEQteFZSMkxpQ1dwR3pjNFkxUElfZXJYN0R5ZlRDdzVDVUJQXzVOcHRFUGlHcW5VSmU3MGd0QWoxRGJySklOREdEXzRiZlZjNjd1Z1FWcFJLLTJBV3FsOTgwMTdIeThTYWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1011
    },
    {
      "date": "Jun 20",
      "text": "Israel and Hezbollah agree to a ceasefire in Lebanon after intensified fighting, with US officials confirming the truce.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxOMG40STJrQkMxTUlTM2J4bkNpWXJTb0daR3BXaEpNZGx5dVVzaVFsQU9xRXU0QkVlSWw0dXpmSkdYNEVBZmEzVmhma0pyTUg0TFUyMHJnOFQzRFk0Zk5PeHpvVmpVXzZLMVhpS3JoeExqNFhwdkdDSXRfeElvb0VUTGk4bFhvZExWTHFYcWItUWs0cmpNY1R0ZjlDdGZaLTlXTW5VZkVnS1g0a0dhaFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1011
    },
    {
      "date": "Jun 20",
      "text": "Iran issues new transit rules for vessels passing through the Strait of Hormuz, leading to reports of turbulent conditions and stranded ships.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxPTktTdjM1UExiQWY3bnVocjktWGRhNVZRODh4bzg1OXNwVzJpVWVOc2lta0FLMnh1QTB4NVAydHBsaC1QamlaNjF2Tmt3a0ozWkhDZU1LMXROM3ZHbTdqYmhUQUhRSkhZNVBjLXZsckRzNi1TTm1JRElBZDZqMklvRlpPNENzM3VIYWJuWnFva2ZrZkV3N2lZRkswR1NIWjRtYktWN2ZQLXJ3WGM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "news.cgtn.com",
      "latestSinceUpdate": 1011
    },
    {
      "date": "Jun 20",
      "text": "Pentagon investigation into an Iran school strike is being finalized.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxPQjhtZ1VHZjRERUl4SUJ3MVZSbHB0c1JHZUZyYmY4bHJ1SFl0TDlveTk2UmdTT1pWM2hyNEdBajBXbzRQX2RJSE1PS1hIa0dQbG4ySnF2V0Q3bzBpano5SzdLN2pHMEFQWG1RVFA3U1oxOG4zNDhNOW1FOWk4MUliZ1NsaS02cVhTaEl4Tjg0VndLUlBEczNZM0l0aVN2d2lGY09xZ2dqdUNqSGFYcWx2SlJDYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1011
    },
    {
      "date": "Jun 20",
      "text": "Hegseth announces a review of U.S. troops in Europe and criticizes NATO allies amid a rift.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1011
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
      "perspective": "US Diplomacy",
      "headline": "US Brokers Iran Deal Amid Regional Tensions",
      "summary": "The US has successfully brokered a 14-point agreement with Iran, aiming to de-escalate regional tensions and set the stage for nuclear negotiations. However, the process faces challenges from ongoing regional conflicts, as evidenced by the postponement of talks due to Israeli strikes.",
      "tone": "strained",
      "latestSinceUpdate": 1010
    },
    {
      "perspective": "Regional Stability",
      "headline": "Ceasefire Holds, But Assertions Remain",
      "summary": "While a ceasefire between Israel and Hezbollah has been agreed upon, the region remains tense with Israel maintaining troops in Lebanon and having conducted recent strikes. Iran, having implemented the deal, is also asserting control over the Strait of Hormuz through new insurance requirements.",
      "tone": "skeptical",
      "latestSinceUpdate": 1010
    },
    {
      "perspective": "Economic Outlook",
      "headline": "Hormuz Traffic Up, New Fees Emerge",
      "summary": "The costs of the recent conflict are significant, impacting lives and finances, while the Strait of Hormuz, a critical oil transit point, sees increased traffic but also new Iranian fees, signaling potential future economic friction.",
      "tone": "anxious",
      "latestSinceUpdate": 1010
    }
  ]
});

export default LATEST_SNAPSHOT;
