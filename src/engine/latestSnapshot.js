export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 475,
  "lastUpdated": "2026-05-02",
  "lastSyncedAt": "2026-05-02T18:31:05.271Z",
  "warDay": 64,
  "summary": "A 2-week ceasefire between the U.S. and Iran is in effect, though its stability is threatened by Trump's rejection of Iranian proposals and review of military options, alongside Iran's vows of retaliation and Hezbollah's continued drone attacks on Israeli targets.",
  "lastNarrativeUpdate": "2026-05-02",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 14,
    "summary": "A 2-week ceasefire is technically active, but its stability is severely undermined by Trump's rejection of proposals and consideration of renewed military action."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
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
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "May 01",
      "text": "U.S. and Iran reach 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 475
    },
    {
      "date": "May 02",
      "text": "Trump claims hostilities have ended in Iran in letter to congressional leaders.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxPLVNURmVxb1BndlNRd1RDSXJ6MS1YN0xwY0NxQlZJSWJrUHNhR3hCbVlXbjlvVUZSWWJmeFFvZ1pWZzBIYTYzMXlGZUhHbGRVX1N2NEpJRVpxZjE1b2c1SW9neEQ1UXBxb2QtLVA1b2xQbE13TndGTGtFUnBfXzRJMC1rc05Qdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 475
    },
    {
      "date": "May 02",
      "text": "Trump rejects Iran’s latest proposal and reviews new military options to relaunch war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPcnFPUzd6XzVPeXdrLXg1Q2RtR3NreUJSWE82ZGc5YkRZYUxCOXlIVERFU2s1RDBlUzc4dkVONkU0WHV1RGRmc3QwV3hPeTBDRWRKblBJcDZlS2I0ZWJWbklPbkZQN1p3alE5dlBKX0xDR25lX1gtaFowYnRYeEJRV0U1VFhGRWwwbWhwRkJpTXpMTXA4NElybWxnWk5rTU9WdkNBdTBlRUF6RERnTWVBeFV6REhIeS1vNC1VdA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 475
    },
    {
      "date": "May 02",
      "text": "Iran vows ‘long, painful’ response if US renews attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxPUkhFQUFYcXRXbmNQTVBoX0JSTWVFZUhuUEtQLWEzMXd0V3cwVHIyck9SdWV2c2drTk01bnMyQTZmMGdKa3lWWHBfcG5DTUZINEJZaEwyNV9Sa3BNZWZKNy1tSnNyRmtKUmFvcFZBVWxfZVBIdFBXX0JQTG1qSWRKR2djaGVGSS11WHp0SFo1OXZla2diSl9R0gGcAUFVX3lxTFA1R3pSank2OWROSzVkaTR5MkdSNTBZVW9TY2IteDZuNTBkZk1RTEQyMTRLQTVtS0J0c01sdnRTWV9sX20zWlYwcGtVUVk3R0pvdGtSWXFOTFl0bVRpVk5RTTlDYWRsZ1RJRTBNMWdFTG50NFZjREtIZklTZkhkdjN1VnBzNEtzV1pzWk82VEFhenZ4VHZPaU53YlZScQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 475
    },
    {
      "date": "May 02",
      "text": "US threatens shipping firms with sanctions if they pay Iran tolls in Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9nekV0UmtXWEVSSy1NVEtPSEN0dFBlazllcXc4RFpaVFFtbGxIbWlyc3JFS05hdjRnUFRNRFdUZFFtU2Vfems0eXRWdUZ6SGFQV0hQVXpYUEl2dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 475
    },
    {
      "date": "May 02",
      "text": "Hezbollah is using fiber-optic drones against Israeli targets.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 475
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "perspective": "US Administration",
      "headline": "Trump Declares War 'Terminated' Amid Ceasefire Dissatisfaction",
      "summary": "President Trump declares the Iran war 'terminated' but expresses dissatisfaction with the new peace deal and does not rule out resuming attacks, while also withdrawing troops from Germany and seeking help with the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 462
    },
    {
      "perspective": "Iran",
      "headline": "Battered Iran Remains Defiant, Believes US Will Yield",
      "summary": "Despite a battered economy and damaged infrastructure, Iran's leaders remain defiant, presenting new proposals while believing the US will eventually yield, even as US military sites in the region have sustained damage.",
      "tone": "defiant",
      "latestSinceUpdate": 462
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Israel-Hezbollah Escalation Continues in Lebanon",
      "summary": "Tensions between Israel and Hezbollah escalate with deadly Israeli strikes in southern Lebanon and Hezbollah employing fiber-optic drones, leading to increased frustration with Hezbollah among some local populations.",
      "tone": "anxious",
      "latestSinceUpdate": 462
    },
    {
      "perspective": "Global Economic Impact",
      "headline": "Strait of Hormuz Standoff Threatens Global Shipping",
      "summary": "The standoff in the Strait of Hormuz poses a significant threat to global shipping and luxury auto industries, with the US warning against tolls, even as US economic growth shows a rebound amid the conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 462
    }
  ]
});

export default LATEST_SNAPSHOT;
