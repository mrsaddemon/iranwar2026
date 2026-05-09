export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 569,
  "lastUpdated": "2026-05-09",
  "lastSyncedAt": "2026-05-09T08:18:45.733Z",
  "warDay": 71,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "A truce between Israel and Hezbollah is under severe strain following recent strikes and rocket fire, with its future uncertain."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "May 09",
      "text": "US forces fire upon and disable two Iranian tankers in the Strait of Hormuz, escalating tensions.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 569
    },
    {
      "date": "May 09",
      "text": "Israel conducts airstrikes in Beirut, marking the first such action since a recent ceasefire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 569
    },
    {
      "date": "May 09",
      "text": "Israeli airstrikes kill five in southern Lebanon; Hezbollah responds with rocket fire into open areas in Israel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNN19vV0hvR1lXbXI0WkhzTzlfbHhfVDZnbWRDOVZmaWpsS0RBUDd4ajBjWGhhOG9MNWlzVmFXRE9MUkxNaHV5eHlwcWtIYVA3T0ZTc01adjBpeHQwdkxSZlQ4aDV3dXN0VTlCRHRNaEc2OThWRGVZWHBpVmxjMkk2SGVyOVpMQjZJTWd2ME80c2RCcl9GVUZpN2FWZTdhWmpLWmEyMDZaQURnMnR0WFk2eDNuSzlmUTNQNWxIV1Bfdk1ieFZYbGNJV0N6eDVfakFCZGVkQkg0dEhEeHFTTHfSAeQBQVVfeXFMUDZzR0M5UzJWTHpfV1ByYVNLV3FidG5RX3pTOFhSekZUTmRpdVRDa2xsZzh0ZDFBSmV2R0U4U3kzd3pURXUzcGNZblo0RV9oQkxldkdYa2dFM1JhbXc5a2xFLWlxLTNZM2NqRW03VTlBeE9QOUhPUTFFRTJZMWcxLTI1ZjQwTkpRVkhtMklrSl8tV3NQX3VHdEpTTHBnV19YMF96TVpMeDBpcmVKQjB0b0V6eWNHTXN3RUEwd19xanhmMGdRTURZaTZmc1JzOU1DdHU0UTMzeTV6VlFmLTdYblVSODN1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 569
    },
    {
      "date": "May 09",
      "text": "Israel announces the killing of a Hezbollah chief near Beirut, further testing the existing truce.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 569
    },
    {
      "date": "May 09",
      "text": "Satellite imagery suggests Iran has struck more U.S. military assets than publicly acknowledged.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 569
    },
    {
      "date": "May 09",
      "text": "The U.S. awaits Iran's response to a proposed peace deal amidst ongoing Israeli actions in Lebanon.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 569
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
      "headline": "US actions in Hormuz are reckless and violate agreements",
      "summary": "Iran condemns recent US military actions in the Strait of Hormuz as a 'reckless military adventure' and a violation of an existing ceasefire, asserting that the US targeted its ships. Tehran indicates it will respond to external peace proposals.",
      "tone": "defiant",
      "latestSinceUpdate": 566
    },
    {
      "perspective": "United States",
      "headline": "US acts to enforce blockade, mediate regional tensions",
      "summary": "The US military engaged Iranian tankers for allegedly violating a blockade and conducted strikes on Iranian sites. Concurrently, the US is seeking to mediate talks between Israel and Lebanon to de-escalate regional tensions.",
      "tone": "strained",
      "latestSinceUpdate": 566
    },
    {
      "perspective": "Israel",
      "headline": "Strikes target militants, no immunity for threats",
      "summary": "Israel has conducted strikes in Lebanon, including Beirut, stating there is 'no immunity' for militants and confirming the killing of a Hezbollah chief. These actions are described as testing a truce and responding to ongoing threats.",
      "tone": "defiant",
      "latestSinceUpdate": 566
    },
    {
      "perspective": "Regional Analysis",
      "headline": "Escalation continues despite initial US military success",
      "summary": "While the initial military engagements between the US and Iran may have favored the US, the broader conflict remains difficult to conclude. Israeli actions in Lebanon are seen as potentially sowing division within the country.",
      "tone": "anxious",
      "latestSinceUpdate": 566
    }
  ]
});

export default LATEST_SNAPSHOT;
