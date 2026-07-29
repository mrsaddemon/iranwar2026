export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1506,
  "lastUpdated": "2026-07-29",
  "lastSyncedAt": "2026-07-29T01:11:23.802Z",
  "warDay": 152,
  "summary": "The Iran war has entered its sixth month with increased uncertainty, marked by direct missile exchanges between Iran and Israel, US military intercepts, and continued US strikes against Iran-backed groups in Iraq, alongside diplomatic efforts involving the US and Iran.",
  "lastNarrativeUpdate": "2026-07-29",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.1,
    "durationDays": 1,
    "summary": "The April ceasefire between Iran and Israel has collapsed following direct missile exchanges and continued regional military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 88,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Jul 27",
      "text": "Iran and Israel exchanged strikes for the first time since an April cease-fire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1506
    },
    {
      "date": "Jul 27",
      "text": "US military intercepted Iranian missiles in an 'attempted surprise attack,' according to CENTCOM.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1506
    },
    {
      "date": "Jul 27",
      "text": "US military, alongside Saudi forces, struck sites of Iran-backed groups in Iraq.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOUHJGTGM0cWxxc1lyajNFQ1Y1NXNKUUdnREtjZDk3Z3RaRUFabm41dmF2UE1YVTFfbVJNTHJWZTlRYzJCTEpGbnVRWlg1akk2cGJKamVPRmZQNEZZRFVsSFp1LXFOOWQxYzRObjYyYmQ1U29LWUVyRHAtNHVFcUplWHlZYWZnWVFJeTVxdmktRVdmaTJ2aTh6SkM5R3VJOEtKR254SzdEMFNyZFJHcHJGN3kwaE4ySVdSUngwbTdhZ1M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1506
    },
    {
      "date": "Jul 27",
      "text": "Iran vowed control over the Strait of Hormuz amid ongoing diplomatic talks.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1506
    },
    {
      "date": "Jul 27",
      "text": "Mojtaba Khamenei issued a 'Jihad' message to Hezbollah against the US and Israel.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1506
    },
    {
      "date": "Jul 27",
      "text": "Defense Minister Katz stated Israel has razed 24 south Lebanon villages whose residents aided Hezbollah.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxQb0dDVFZiRGF5TEVfaXFmZTNob3RiYmVfbkhGbl8yYTc4ZFpQMGJCVkZQeXZJWk1hdlJuNlFZRDRvcE9UNnEtQjM5ZFJrNXpIRm9BLUV5c3pFdnNaNTNpVkUtT0lpSkpUZW1Yc01pd3VBcnhtSzZOYnl5aTFlVGI5WjBISWtnajJkdjVvQXViOXB6SXRzOEdIRVpTYTZ0VmZIZzFsMV9USGJrUnBmUERwTXVIWHA2NzhFQ3dSN0kxY0ZHR2d2QUJBWmZ5ZURkOXRrcnVhRXNSbmE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1506
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
      "perspective": "US Diplomacy/Threat",
      "headline": "Trump Pursues Talks Amidst War Pause, Warns of Force",
      "summary": "The Trump administration is engaged in 'very deep talks' with Iran, having paused strikes for a second night. However, Trump warns of 'strong military action' if diplomacy fails, while dismissing concerns over military stockpiles.",
      "tone": "strained",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "Iranian Conditions/Defiance",
      "headline": "Iran Threatens Expansion, Ties Peace to Lebanon, Praises Hezbollah",
      "summary": "Iran threatens to expand the war if U.S. resumes strikes, which it attributes to Israeli pressure. Supreme Leader Khamenei ties any peace deal to Israel ending attacks on Lebanon, with Mojtaba Khamenei praising Hezbollah and calling for continued jihad.",
      "tone": "defiant",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "Israeli Skepticism",
      "headline": "Israel Anticipates US Escalation Despite Pause",
      "summary": "Despite the current pause in U.S. strikes, Israel reportedly believes that the Trump administration will soon be compelled to escalate military action against Iran.",
      "tone": "skeptical",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "US Stockpile Debate",
      "headline": "US Stockpile Levels Under Scrutiny Amidst Conflict",
      "summary": "A debate persists within U.S. political circles regarding the state of military stockpiles. While some officials dismiss concerns, others attribute potential depletion to previous administrations.",
      "tone": "neutral",
      "latestSinceUpdate": 1493
    }
  ]
});

export default LATEST_SNAPSHOT;
