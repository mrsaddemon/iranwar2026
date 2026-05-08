export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 565,
  "lastUpdated": "2026-05-08",
  "lastSyncedAt": "2026-05-08T23:12:52.625Z",
  "warDay": 70,
  "summary": "Direct military engagements between the US and Iran have escalated in the Strait of Hormuz and within Iran, while Israel continues strikes in Lebanon amidst a fragile truce.",
  "lastNarrativeUpdate": "2026-05-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 7,
    "summary": "A previously established truce is under severe strain, with both US and Israeli forces conducting strikes that Iran claims violate the agreement."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "May 07",
      "text": "US forces fired on and disabled two Iranian tankers in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 565
    },
    {
      "date": "May 07",
      "text": "Iran accused the US of a 'reckless military adventure' and violating a ceasefire by targeting ships.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 565
    },
    {
      "date": "May 07",
      "text": "Israel launched strikes on Beirut and killed five in southern Lebanon, while Hezbollah rockets hit open areas in Israel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNN19vV0hvR1lXbXI0WkhzTzlfbHhfVDZnbWRDOVZmaWpsS0RBUDd4ajBjWGhhOG9MNWlzVmFXRE9MUkxNaHV5eHlwcWtIYVA3T0ZTc01adjBpeHQwdkxSZlQ4aDV3dXN0VTlCRHRNaEc2OThWRGVZWHBpVmxjMkk2SGVyOVpMQjZJTWd2ME80c2RCcl9GVUZpN2FWZTdhWmpLWmEyMDZaQURnMnR0WFk2eDNuSzlmUTNQNWxIV1Bfdk1ieFZYbGNJV0N6eDVfakFCZGVkQkg0dEhEeHFTTHfSAeQBQVVfeXFMUDZzR0M5UzJWTHpfV1ByYVNLV3FidG5RX3pTOFhSekZUTmRpdVRDa2xsZzh0ZDFBSmV2R0U4U3kzd3pURXUzcGNZblo0RV9oQkxldkdYa2dFM1JhbXc5a2xFLWlxLTNZM2NqRW03VTlBeE9QOUhPUTFFRTJZMWcxLTI1ZjQwTkpRVkhtMklrSl8tV3NQX3VHdEpTTHBnV19YMF96TVpMeDBpcmVKQjB0b0V6eWNHTXN3RUEwd19xanhmMGdRTURZaTZmc1JzOU1DdHU0UTMzeTV6VlFmLTdYblVSODN1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 565
    },
    {
      "date": "May 07",
      "text": "The US military conducted strikes on sites within Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxOWXUwRGdlNmJ0QlZ4YlNseHlhRFRoZlhxWG1jM0xMZnB0R1lyUVhBcjk2U0Y3U214Yzhib0o2RFF6dW5Hb0lZSkhCRXhBRU9XaTI5RWRMNXdER2RZdDBtT2ZMb01XZU9tRnhJLUNOd0dQTXRzdnNVTGhpcW9LSVF6c3hYSmU1MEN0aWo1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 565
    },
    {
      "date": "May 07",
      "text": "Israel announced it killed a Hezbollah chief near Beirut, testing the existing truce.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 565
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
      "perspective": "US Government",
      "headline": "US Responds to Attacks, Seeks De-escalation Amid Peace Talks",
      "summary": "The US military has conducted 'self-defense strikes' against Iranian targets following attacks on its warships in the Strait of Hormuz, while simultaneously asserting it does not seek escalation. President Trump indicates a peace deal with Iran could be imminent, with Tehran reviewing the latest US offer.",
      "tone": "strained",
      "latestSinceUpdate": 551
    },
    {
      "perspective": "Iranian Government",
      "headline": "US Violates Ceasefire, Iran Responds to Aggression",
      "summary": "Tehran accuses the US of violating the existing ceasefire by targeting Iranian sites and ships. Iran maintains its right to respond to 'unprovoked attacks' in the Strait of Hormuz, while also considering a US peace deal proposal.",
      "tone": "defiant",
      "latestSinceUpdate": 551
    },
    {
      "perspective": "Israeli Government",
      "headline": "Targeted Strikes in Lebanon Test Truce, Counter Hezbollah Threat",
      "summary": "Israel has launched precision airstrikes in Beirut, targeting and killing a senior Hezbollah commander, marking the first such strike since the Lebanon ceasefire. These actions are framed as necessary to counter Hezbollah's continued operational capabilities amidst the broader regional conflict.",
      "tone": "strained",
      "latestSinceUpdate": 551
    }
  ]
});

export default LATEST_SNAPSHOT;
