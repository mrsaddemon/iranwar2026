export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 391,
  "lastUpdated": "2026-04-26",
  "lastSyncedAt": "2026-04-26T23:58:03.793Z",
  "warDay": 58,
  "summary": "The Iran-Israel/Hezbollah conflict continues with increased attacks, while a fragile two-week ceasefire between the U.S. and Iran is in effect amidst ongoing Strait of Hormuz disruptions and U.S. weapon supply concerns.",
  "lastNarrativeUpdate": "2026-04-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire has been reached between the U.S. and Iran, though regional conflicts and talks remain stalled."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
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
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Apr 26",
      "text": "The Strait of Hormuz crisis continues with ships reportedly taken, and a U.S. blockade is in effect.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 391
    },
    {
      "date": "Apr 26",
      "text": "Israel and Hezbollah are engaged in active battles, with Israel increasing attacks in Lebanon.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 391
    },
    {
      "date": "Apr 26",
      "text": "U.S. supplies of critical weapons have been drained, raising long-term concerns about advanced munitions.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 391
    },
    {
      "date": "Apr 26",
      "text": "A two-week ceasefire has been reached between the U.S. and Iran, though talks remain stalled.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 391
    },
    {
      "date": "Apr 26",
      "text": "Iran has caused billions in damage to U.S. military bases in the Gulf region, more extensive than publicly known.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQY3A3aFAtRXVVbHhmSW9xT2RVbFBVdFJLbkktNWZUSVpPMG5IclJyYTQtYVRjTnU3QVQwYXFNNE5QbGJmNndaWER2Nk1mWXFSOFdmS1U3V2ZrLTJ2LUdpY0FzZ2Zia0Y3ZnBFUVdxOFdydEgzR3pTWkl3UkRuNjlDUmlxd1ZCalFrWUU2a09ocVhnYmFCMldYMExQTVVQLXBHYm5DYlhDRGZfcG8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 391
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
      "perspective": "US Diplomatic Stance",
      "headline": "Trump Halts Iran Talks, Citing Strong US Position",
      "summary": "President Trump has canceled plans to send envoys for peace talks with Iran, stating the U.S. holds a strong negotiating position. This move follows Tehran's refusal of direct talks, contributing to ongoing uncertainty in the Middle East conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Iranian Resistance",
      "headline": "Iran Rejects Direct Talks, Threatens Retaliation Amid Blockade",
      "summary": "Iran has refused direct talks with the U.S., maintaining a firm stance amidst the ongoing conflict and a U.S. blockade. The Iranian Armed Forces Command has threatened a strong response if the blockade persists, following reports of significant damage to U.S. bases.",
      "tone": "defiant",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Lebanon Front Escalation",
      "headline": "Israel Escalates Attacks in Lebanon, Hezbollah Remains Defiant",
      "summary": "Israel has intensified its strikes in southern Lebanon, killing four and escalating breaches of a nominal ceasefire. Hezbollah has expressed defiance, questioning the effectiveness of any ceasefire amidst continued cross-border attacks.",
      "tone": "strained",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Global Oil Market",
      "headline": "Hormuz Standoff Threatens Global Oil Supply and Demand",
      "summary": "The ongoing standoff in the Strait of Hormuz, marked by ship seizures, continues to pose a significant threat to global oil supplies. Analysts warn of a potential 'Billion-Barrel Hormuz Oil Shock' that could severely impact demand and market stability.",
      "tone": "anxious",
      "latestSinceUpdate": 370
    }
  ]
});

export default LATEST_SNAPSHOT;
