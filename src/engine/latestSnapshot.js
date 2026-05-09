export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 568,
  "lastUpdated": "2026-05-09",
  "lastSyncedAt": "2026-05-09T06:23:49.666Z",
  "warDay": 71,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 7,
    "summary": "A proposed peace deal is under review by Iran, but ongoing military actions by the US in Hormuz and Israeli strikes in Lebanon indicate a highly fragile or collapsed truce."
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
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "text": "US fires on and disables 2 more Iranian tankers in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxOcExZcVpZYU4yU3oxSEpmajVmMktveG8zd1V3anRxdHhneVR1LUFuSUtSZGJpZUEwVEZTNkNZRlBGSzRQSVRkZVprMkp5dzhVUFJPMkdmTFVQMF9tOF8xVng2Qy01ZDlWNW5oTEhjeVcxd0ltQ3h2LUVBNVg1THRtUFp5Y3Ezd1MwUkR6elNoWHNDY00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 568
    },
    {
      "date": "May 07",
      "text": "Iran accuses the US of 'reckless military adventure' in Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxNNWZhUzVmUUNudHFiYzR6WFItRllzWEJ3ejdGOTVEQ0R3TzJrY3BEYUNtY3NHV0hRb2lVTXd5SGpXSHVVVmQ1V2dkSnVCNExRaGRrbWYxUHREdmx2dk1RVlkyNE5wYUFET1BLV2pSbTI2akVESndfWTRBeU5hc3lWUlRrMUp5OWd1YlRDRU1KaG5nQXdHZGhHd3lwNThLUE83a0t5dDl3ZWViRmp6b3dCcUJVeWNreE3SAbwBQVVfeXFMUGxycEpfd3RGUHo4NzBmUkREQ2RheTZmRjJreHZXRzJZbWJFbloyZjdVRzJOY0Y3X0RiNG5vN2dndVVTSWt0NXFyd28yZkdMWUttUXdRRENQbXc2c2RibnJoaXIwQjRqNEZUWHlsRjRFWnpwajBQX0Z1MV9sMm9ERl9MNFBRb3l2TDI4WExSQzZSSUE0TjJfSEdrai1DbVdScFhHdjZJMWhQMTllSTdBdUNKS3R5Y1ZrcDBoaXA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 568
    },
    {
      "date": "May 07",
      "text": "US military intercepts Iranian attacks on 3 Navy ships in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxObENkOFNhc08zdzBiZEpmMGQxVzZScm9tZ2NhcUpxd0FMRUU3YUpuTDl4eG9ER0JnaWNQUDBLcDd3b1Vhb0hBeV9rd0xiaTZVSG9rSTBvWmhLNjgxNTJYVmQzWnpUS3pVV3ZSaUM3MWUwMkRDajNUMHItdGowZHpHaWNPQUJnN09KMDdrWmN1Z2NVbHd2M2xsRGJSXzN1S1E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 568
    },
    {
      "date": "May 07",
      "text": "Israel strikes Beirut for the first time since a ceasefire, killing a Hezbollah chief.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 568
    },
    {
      "date": "May 07",
      "text": "Hezbollah rockets hit open areas in Israel following Israeli airstrikes in southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNN19vV0hvR1lXbXI0WkhzTzlfbHhfVDZnbWRDOVZmaWpsS0RBUDd4ajBjWGhhOG9MNWlzVmFXRE9MUkxNaHV5eHlwcWtIYVA3T0ZTc01adjBpeHQwdkxSZlQ4aDV3dXN0VTlCRHRNaEc2OThWRGVZWHBpVmxjMkk2SGVyOVpMQjZJTWd2ME80c2RCcl9GVUZpN2FWZTdhWmpLWmEyMDZaQURnMnR0WFk2eDNuSzlmUTNQNWxIV1Bfdk1ieFZYbGNJV0N6eDVfakFCZGVkQkg0dEhEeHFTTHfSAeQBQVVfeXFMUDZzR0M5UzJWTHpfV1ByYVNLV3FidG5RX3pTOFhSekZUTmRpdVRDa2xsZzh0ZDFBSmV2R0U4U3kzd3pURXUzcGNZblo0RV9oQkxldkdYa2dFM1JhbXc5a2xFLWlxLTNZM2NqRW03VTlBeE9QOUhPUTFFRTJZMWcxLTI1ZjQwTkpRVkhtMklrSl8tV3NQX3VHdEpTTHBnV19YMF96TVpMeDBpcmVKQjB0b0V6eWNHTXN3RUEwd19xanhmMGdRTURZaTZmc1JzOU1DdHU0UTMzeTV6VlFmLTdYblVSODN1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 568
    },
    {
      "date": "May 07",
      "text": "Iran is reviewing a US peace proposal amid 'sporadic clashes' in the Hormuz Strait.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 568
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
