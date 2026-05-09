export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 570,
  "lastUpdated": "2026-05-09",
  "lastSyncedAt": "2026-05-09T09:46:19.536Z",
  "warDay": 71,
  "summary": "Direct clashes between US and Iranian forces have occurred in the Strait of Hormuz, while Israel has conducted airstrikes in Lebanon, testing a fragile truce as diplomatic efforts for a peace deal continue.",
  "lastNarrativeUpdate": "2026-05-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 7,
    "summary": "A ceasefire between Israel and Hezbollah is under severe strain following Israeli strikes in Lebanon and Hezbollah rocket fire, despite ongoing diplomatic efforts."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
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
    "nuclearIndex": 10,
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
      "date": "May 09",
      "text": "U.S. military fires on Iran-flagged tankers and strikes sites in Iran, leading to accusations of 'reckless military adventure' from Tehran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxNNWZhUzVmUUNudHFiYzR6WFItRllzWEJ3ejdGOTVEQ0R3TzJrY3BEYUNtY3NHV0hRb2lVTXd5SGpXSHVVVmQ1V2dkSnVCNExRaGRrbWYxUHREdmx2dk1RVlkyNE5wYUFET1BLV2pSbTI2akVESndfWTRBeU5hc3lWUlRrMUp5OWd1YlRDRU1KaG5nQXdHZGhHd3lwNThLUE83a0t5dDl3ZWViRmp6b3dCcUJVeWNreE3SAbwBQVVfeXFMUGxycEpfd3RGUHo4NzBmUkREQ2RheTZmRjJreHZXRzJZbWJFbloyZjdVRzJOY0Y3X0RiNG5vN2dndVVTSWt0NXFyd28yZkdMWUttUXdRRENQbXc2c2RibnJoaXIwQjRqNEZUWHlsRjRFWnpwajBQX0Z1MV9sMm9ERl9MNFBRb3l2TDI4WExSQzZSSUE0TjJfSEdrai1DbVdScFhHdjZJMWhQMTllSTdBdUNKS3R5Y1ZrcDBoaXA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 570
    },
    {
      "date": "May 09",
      "text": "Israel conducts airstrikes in Beirut and southern Lebanon, killing five and a Hezbollah chief, testing the existing truce.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 570
    },
    {
      "date": "May 09",
      "text": "Hezbollah rockets hit open areas in Israel, with the IDF preparing for further rocket fire in northern Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0AFBVV95cUxONG5IOFNuUy1Vc0xwQTctYnN2ZkNDZ0ZSSldUVUdMbmJYaGRENGpkSnEzR0RPYUdjUHMwZHJnVW1ZV3N4aWJQS1ZGOEJyY0JjdEd4REtDMTdVelhabWctT3VIc3hoX2RKcXlNVG9nRUNUNTdndUE3cW94WWhBd25hckY0MUF1THBPbVRJZE5fQzAtcGJmeVhKSGVsSzlBUkFGSWNXVkFqYkhfUW1qUGRDQlE2dkNoTm9Bek9RbkJEQmRTRDJvU2VVc0tsOTgzSTJf?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 570
    },
    {
      "date": "May 09",
      "text": "Iran is reviewing a US peace proposal, with the US awaiting Tehran's official response.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 570
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
