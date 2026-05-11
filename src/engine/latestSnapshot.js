export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 602,
  "lastUpdated": "2026-05-11",
  "lastSyncedAt": "2026-05-11T01:26:08.349Z",
  "warDay": 73,
  "summary": "The Middle East conflict continues with the US rejecting Iran's latest ceasefire proposal, while US forces conduct retaliatory strikes on tankers and Israel carries out deadly airstrikes in Lebanon amidst eroding truces.",
  "lastNarrativeUpdate": "2026-05-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 30,
    "summary": "A proposed ceasefire was rejected by the US, and existing truces in Lebanon are eroding amidst ongoing strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
    "allianceInfluence": 46
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
      "date": "May 11",
      "text": "US President Trump rejects Iran's latest counteroffer to end the war, calling it 'unacceptable'.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 602
    },
    {
      "date": "May 11",
      "text": "US military carries out retaliatory strikes against Iranian tankers in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPOE1uOURBaC03bzROOEdzRzdQOGFvc1hOanMxM2w2NS0wOFc2ei1Ga1JDMHBTd0QtVzh4ZGdXSE16TFhkM1lXTWRZXzZ3bDM1SFo3Y1JfXzRoV09fQmJZSUZmOHNpWVptcjBKanJxM21GUS1Ncjc2Qm1rOTFkTk9yck9XWWRfZVk2QWNrdHZNWGIxUEkwX29aMDZ5em5ZaHZfcWlTQ2tncGh5WXFRT2Q0NnhyOXJZU3dYOWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 602
    },
    {
      "date": "May 11",
      "text": "Israeli airstrikes kill 39 in Lebanon, eroding an existing cease-fire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 602
    },
    {
      "date": "May 11",
      "text": "Two crude oil tankers exit the Strait of Hormuz with trackers switched off following a confirmed strike on a vessel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiyAFBVV95cUxPTzRScmctdkN4Ulc1ZC1Xc0pRRHVOYjFWSVdnNWY1RF82dFFxanh3LU91ajRMV3ZCcXMyaVlrSXh0YVk5TkdDMFdZZENka2xscERsTUZqSDhmOVVLd0pCU1hXQ3pvSU1nVGJVa1dUelZBaFJnMlhWLTZBVm9SUWl1bXlpdGI1SnE2V2Jnb1VjOUhuU0pMX1R3eExucUtfMUhvejlvWWk4dzNMcTJSbEpCZXFCM0pkTTZOT2pZTHM4dndXWWxNYzdETA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 602
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
      "perspective": "US Perspective",
      "headline": "Trump Rejects Iran's 'Unacceptable' Proposal",
      "summary": "US President Trump has rejected Iran's latest counteroffer to end the war, stating it is 'unacceptable' and does not meet US demands for a resolution.",
      "tone": "defiant",
      "latestSinceUpdate": 602
    },
    {
      "perspective": "Iran Perspective",
      "headline": "Tehran Condemns US 'Reckless Military Adventure'",
      "summary": "Iran accuses the US of 'reckless military adventure' in the Strait of Hormuz following US strikes on tankers, while maintaining its own peace proposal.",
      "tone": "defiant",
      "latestSinceUpdate": 602
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Deadly Israeli Strikes Erode Lebanon Truce",
      "summary": "Deadly Israeli strikes in southern Lebanon continue, killing dozens and eroding an existing cease-fire, as Hezbollah rockets hit open areas in Israel.",
      "tone": "strained",
      "latestSinceUpdate": 602
    }
  ]
});

export default LATEST_SNAPSHOT;
