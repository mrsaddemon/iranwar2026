export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 580,
  "lastUpdated": "2026-05-09",
  "lastSyncedAt": "2026-05-09T20:04:17.089Z",
  "warDay": 71,
  "summary": "Tensions are high between the US and Iran following tanker attacks in the Strait of Hormuz, while Israel and Hezbollah continue to exchange strikes despite a fragile ceasefire, as international efforts for a peace deal continue.",
  "lastNarrativeUpdate": "2026-05-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 30,
    "summary": "A month-long ceasefire between Israel and Hezbollah is active but remains fragile, with recent strikes and counter-strikes testing its stability."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
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
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "May 09",
      "text": "US fires on and disables 2 more Iranian tankers as tensions rise in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxOcExZcVpZYU4yU3oxSEpmajVmMktveG8zd1V3anRxdHhneVR1LUFuSUtSZGJpZUEwVEZTNkNZRlBGSzRQSVRkZVprMkp5dzhVUFJPMkdmTFVQMF9tOF8xVng2Qy01ZDlWNW5oTEhjeVcxd0ltQ3h2LUVBNVg1THRtUFp5Y3Ezd1MwUkR6elNoWHNDY00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 580
    },
    {
      "date": "May 09",
      "text": "Israel kills 23 in Lebanon as US awaits Iran’s reply to deal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZmpsanI2RlZnQW52VjcwN2w4RXNYN1RJOGNDaFJCSmhBOExiUzJuM3RIcjh4eVd5TC0zTHAwdHhtam5wZFRGX1I4WThJYklza3hlMGFBcThXaE1mWGFWaXM3WnY1YVY4aWxzS0Y3OGVucU43ejhNTEpWU3FjUy0zVkk0Q1VqUi1IeFFDZ2h5aTZCNDRkRkJHWTlqaklVVkJVMmZuUnFwSG1PU29tcTFBMUMyYTBKei1DVVZr0gHAAUFVX3lxTE15eEZPZjVBV0M1V2dQVXJ6X0EwdUhybzNjOEhmb2tiM1hxRTlpM0dCN29DV25jQ1oxb1U0UlcwMGNya2I3ZG5ERU53RGMxZ21WampsQWRwcXJDeUpxNG9MQWx0bjB4Wlh3c3JzdXBzVmFCQ3lOVUxqNzRzQm16RXZCY1pyV3R0Y2JUWFByN2N1WGVYakcwTXRmajFKRTZDc2xZV3E1emtMS3lhdFc1NEdSbjZuRGlDaHRkWUc4UzF6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 580
    },
    {
      "date": "May 09",
      "text": "Israeli airstrikes kill five in southern Lebanon as Hezbollah rockets hit open areas in Israel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNN19vV0hvR1lXbXI0WkhzTzlfbHhfVDZnbWRDOVZmaWpsS0RBUDd4ajBjWGhhOG9MNWlzVmFXRE9MUkxNaHV5eHlwcWtIYVA3T0ZTc01adjBpeHQwdkxSZlQ4aDV3dXN0VTlCRHRNaEc2OThWRGVZWHBpVmxjMkk2SGVyOVpMQjZJTWd2ME80c2RCcl9GVUZpN2FWZTdhWmpLWmEyMDZaQURnMnR0WFk2eDNuSzlmUTNQNWxIV1Bfdk1ieFZYbGNJV0N6eDVfakFCZGVkQkg0dEhEeHFTTHfSAeQBQVVfeXFMUDZzR0M5UzJWTHpfV1ByYVNLV3FidG5RX3pTOFhSekZUTmRpdVRDa2xsZzh0ZDFBSmV2R0U4U3kzd3pURXUzcGNZblo0RV9oQkxldkdYa2dFM1JhbXc5a2xFLWlxLTNZM2NqRW03VTlBeE9QOUhPUTFFRTJZMWcxLTI1ZjQwTkpRVkhtMklrSl8tV3NQX3VHdEpTTHBnV19YMF96TVpMeDBpcmVKQjB0b0V6eWNHTXN3RUEwd19xanhmMGdRTURZaTZmc1JzOU1DdHU0UTMzeTV6VlFmLTdYblVSODN1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 580
    },
    {
      "date": "May 09",
      "text": "Israel strikes Beirut for first time since Lebanon ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 580
    },
    {
      "date": "May 09",
      "text": "HMS Dragon heads to Middle East for potential Strait of Hormuz mission.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBQblVISmtYbzlfT1NTNG4zeTE4bUdobFhEVlVSMXdjd1F4ekl5VEJVRGNOdGJmZkpYQ2I4V0FycG11dDdwX0tIWEZzZWtRUW9ERlJnRDdSdWlldw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 580
    },
    {
      "date": "May 09",
      "text": "Israel Says It Killed a Hezbollah Chief Near Beirut, Testing the Truce.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxNR0xZeHZNdEhXTlJFZjg4SV8yVDh4UG82OEJhdFg2MXVRWURkbzZ6U1Byck16ZHRsZ0IzbW5PVm4za1F3VEZUem4yWGtkdldUVW9iZGRQblhGVWJDaVg0ZDB2b0dGbVJINGpLVGdPTm1HU2E1bTl1eUhzUWF5R2R1UXFFd0hhLUM1LWh2S3hQVUxaSjhqUnVvX3A1VmdFQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 580
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
