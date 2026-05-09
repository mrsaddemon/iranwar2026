export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 583,
  "lastUpdated": "2026-05-09",
  "lastSyncedAt": "2026-05-09T22:57:41.710Z",
  "warDay": 71,
  "summary": "A fragile ceasefire is being tested by ongoing Israeli airstrikes in Lebanon and Hezbollah rocket attacks on Israel, while the US awaits Iran's response to negotiation proposals amidst military encounters in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "A fragile ceasefire is being tested by ongoing military actions from both Israel and Hezbollah, while the US awaits Iran's response to negotiation proposals."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.55
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.45,
        "aggression": 0.65
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "May 09",
      "text": "US awaits response from Iran over proposals for a ceasefire deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxQZVkwelMtbEU0cDlZQTdoZVBVRU5NSE5ta2JZejN3RlE1NU5IWE9fNTIwVXcxbWhSalJhRTlRMS1tMldva0xMRFF4SVZIMVJNamhaa2Zhd2o0WnhBZVJJc2I5bVhTeTVtR1MtUmpyZnhlX3NGbF9rWXBzblZ2YlFGSlFZZC1xMkNqY0VTRTBpOU9UMnVtdGcwLWVJcTE1NURt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 583
    },
    {
      "date": "May 09",
      "text": "Israeli airstrikes kill five in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNN19vV0hvR1lXbXI0WkhzTzlfbHhfVDZnbWRDOVZmaWpsS0RBUDd4ajBjWGhhOG9MNWlzVmFXRE9MUkxNaHV5eHlwcWtIYVA3T0ZTc01adjBpeHQwdkxSZlQ4aDV3dXN0VTlCRHRNaEc2OThWRGVZWHBpVmxjMkk2SGVyOVpMQjZJTWd2ME80c2RCcl9GVUZpN2FWZTdhWmpLWmEyMDZaQURnMnR0WFk2eDNuSzlmUTNQNWxIV1Bfdk1ieFZYbGNJV0N6eDVfakFCZGVkQkg0dEhEeHFTTHfSAeQBQVVfeXFMUDZzR0M5UzJWTHpfV1ByYVNLV3FidG5RX3pTOFhSekZUTmRpdVRDa2xsZzh0ZDFBSmV2R0U4U3kzd3pURXUzcGNZblo0RV9oQkxldkdYa2dFM1JhbXc5a2xFLWlxLTNZM2NqRW03VTlBeE9QOUhPUTFFRTJZMWcxLTI1ZjQwTkpRVkhtMklrSl8tV3NQX3VHdEpTTHBnV19YMF96TVpMeDBpcmVKQjB0b0V6eWNHTXN3RUEwd19xanhmMGdRTURZaTZmc1JzOU1DdHU0UTMzeTV6VlFmLTdYblVSODN1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 583
    },
    {
      "date": "May 09",
      "text": "Hezbollah rockets hit open areas in Israel.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 583
    },
    {
      "date": "May 09",
      "text": "Israeli strikes across Lebanon kill at least 18 amid ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPSkhuSHhxdmpnSVdoRUZkWUYxU1FYMXpNbVZqSV9aa0wtMFowdmhFczlINWM4cm4tQzFNV3VHN1hXamRraDZhMHk1LUx5MnVJb3Btb3VDTHNjbHRfdWZ3bVBrZUxmS1lBQ3VxbUM2LTR1NUFiWndmRzVfRUppNnVmTkFwVlpBcldtSUVGcnpCN2R1dlVXbllHVEdNdWhSaG5qaWJaOHd0OTR4VmFfRC1pUHJCbXItUkdjN0HSAb8BQVVfeXFMT0puUGVHRDJlczNDRUQtNjBNejM5VE9iZkUtY3ZzSTVhOW5GbWc3cGFReXJieXA5ZlJPQXFaUktqRUVDU3BCeFpTelpNUHE4ZUFjOElfbVp1VHBxMHNETmpCaV95QmcyTUhOQ0dyVFRyTTlDN0thaFNsZlNwdXRPMC1WeWlZSXB0Z1JKUDluTV85OEhxRzA3QWFJSmF2Ty1XNndkeXVSZy1zMFQ2TElIa281allySHc4MFQyZG04SHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Firstpost",
      "latestSinceUpdate": 583
    },
    {
      "date": "May 09",
      "text": "Israel kills 23 in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZmpsanI2RlZnQW52VjcwN2w4RXNYN1RJOGNDaFJCSmhBOExiUzJuM3RIcjh4eVd5TC0zTHAwdHhtam5wZFRGX1I4WThJYklza3hlMGFBcThXaE1mWGFWaXM3WnY1YVY4aWxzS0Y3OGVucU43ejhNTEpWU3FjUy0zVkk0Q1VqUi1IeFFDZ2h5aTZCNDRkRkJHWTlqaklVVkJVMmZuUnFwSG1PU29tcTFBMUMyYTBKei1DVVZr0gHAAUFVX3lxTE15eEZPZjVBV0M1V2dQVXJ6X0EwdUhybzNjOEhmb2tiM1hxRTlpM0dCN29DV25jQ1oxb1U0UlcwMGNya2I3ZG5ERU53RGMxZ21WampsQWRwcXJDeUpxNG9MQWx0bjB4Wlh3c3JzdXBzVmFCQ3lOVUxqNzRzQm16RXZCY1pyV3R0Y2JUWFByN2N1WGVYakcwTXRmajFKRTZDc2xZV3E1emtMS3lhdFc1NEdSbjZuRGlDaHRkWUc4UzF6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 583
    },
    {
      "date": "May 09",
      "text": "HMS Dragon heads to Middle East for potential Strait of Hormuz mission.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBQblVISmtYbzlfT1NTNG4zeTE4bUdobFhEVlVSMXdjd1F4ekl5VEJVRGNOdGJmZkpYQ2I4V0FycG11dDdwX0tIWEZzZWtRUW9ERlJnRDdSdWlldw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 583
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
