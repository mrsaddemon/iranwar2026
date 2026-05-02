export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 479,
  "lastUpdated": "2026-05-02",
  "lastSyncedAt": "2026-05-02T21:53:23.683Z",
  "warDay": 64,
  "summary": "Diplomacy is in danger as the threat of resumed war elevates, with President Trump expressing dissatisfaction with Iran's peace proposals while reviewing military options and Iran moving to block Israeli-linked ships in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-02",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 14,
    "summary": "No active ceasefire is in effect, as President Trump has rejected Iran's latest peace proposals and is reviewing military options."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
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
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
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
      "date": "May 02",
      "text": "Diplomacy is in danger as the threat of resumed war elevates.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxONHl6SE8tQW1PQldFa3E2YS1xVGluSkhhQy10eERhODBRazNrX292Tzdwdk9oUnlrQi02TXhKZjBBa2VnWDZpdGFQY19idU8wc1BKUkUzcHZfejI5ZmptaGZmSk12RHhXaEtEVXB6MjlmYm4yNEljVnpaOFdkQU8wRFlVdjVkSmtmN0pWWXBRbGo0XzZtbktKekFyVUJIelRTRnZwMHpEVFh2bEM3dTdYcnlYcERsUlUyQnY40gHAAUFVX3lxTE94aS01bGVkMXdRclRFUklxMVpqbzdienNVRTVNVEU0TDZ3RXQycVBESk9YanZGWDVZaktRT3NVYUE2SHVUeGN5RW9LUkhQY29TdTZBdnpNaW1ZdDgzekpUU0xabGJJQVd4d3d2VUI0ZTFRemtpMkVBZHZiUWNmZUFoZ3NGT2dHc2xlQlRxYlN2akN4eldQRE5mYTBRR2hvMTRuVDhFQ19kTmgtTGZkRVp1amhudTFLai12eWlXbTJFdQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 479
    },
    {
      "date": "May 02",
      "text": "President Trump claims hostilities have ended in Iran in a letter to congressional leaders, but also doesn't rule out resuming attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxPLVNURmVxb1BndlNRd1RDSXJ6MS1YN0xwY0NxQlZJSWJrUHNhR3hCbVlXbjlvVUZSWWJmeFFvZ1pWZzBIYTYzMXlGZUhHbGRVX1N2NEpJRVpxZjE1b2c1SW9neEQ1UXBxb2QtLVA1b2xQbE13TndGTGtFUnBfXzRJMC1rc05Qdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 479
    },
    {
      "date": "May 02",
      "text": "Tehran moves to block Israeli-linked ships from the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwJBVV95cUxOLXB1dDdJNDRqT2U0aHpfcFZFaEtaa29YOVdZLU5QMUpkQU9KdHpMUHFIc2RUODRGbF9aNEFTb3hSVjV5cHpGT3lUTUtaTkpha3NoSUxnbDk4X3h0MlRyc2F6Sy1QYWFyb2kwSWFYUUZ1ZkVIa0lmT1B2MnlXQll4MklwV2R4WnJzY183eWx2SVExWkR0NkNWVmV0NWpjbm56OWZTeVhISFgzaW0zMVdsZ0ItX3hlWEVLQ2JtVC1ZTFZZMzVvRDZPSmpfZlRvNEJZU3BTeWJTSldJWl9MRUY4VHJ4WnlDM3ZTZnVmb09OeHFGa2RlV0RLNTFDNkQta3VMRE94enZ5OTl0V0VwbUhWVmhKd1ZzR3E1b0UweFRGSklMbEU4U0owRE96SGRvalnSAbQCQVVfeXFMUHcwSkJhdVBqT0VGSjZiZnBXUW5feGVPS1o2QnZQRENJYW1mNkFnaDZycEpMNVN2bXhvbmZwN09fYlFGb2tST3MzbEhoQWs3UFZpTHNIZjdIVUs2N2E3bm03RjM2WFJJb0xiT1c1NXdjeUVBLWlSNDlQWnotZnZiUnZjTDVqa2ZGU3pXa1gtenFBM2tfVkVVWVFKTFBwNUlka25tNGZYTHNicWdUeHUzZDlYQkRWdGdkUWw1TDZneXp3ZGdSNjdJSjA2bmRwQWdSWm9SVXkxZzJMYTdSclRfZFlHa3VCZ19FUlJVWDd2S2ljNmM2Z1RNTm5tQ2JlU25HOTRGWTkzTm9nWTFmU3lQVm03bXRWTHhQMWV1eFJwQzJ1N2tVM2NUeG5LY2xzRms2Z2FNcGs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of India",
      "latestSinceUpdate": 479
    },
    {
      "date": "May 02",
      "text": "Israel strikes Hezbollah targets.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 479
    },
    {
      "date": "May 02",
      "text": "Iran vows a 'long, painful' response if the US renews attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxPUkhFQUFYcXRXbmNQTVBoX0JSTWVFZUhuUEtQLWEzMXd0V3cwVHIyck9SdWV2c2drTk01bnMyQTZmMGdKa3lWWHBfcG5DTUZINEJZaEwyNV9Sa3BNZWZKNy1tSnNyRmtKUmFvcFZBVWxfZVBIdFBXX0JQTG1qSWRKR2djaGVGSS11WHp0SFo1OXZla2diSl9R0gGcAUFVX3lxTFA1R3pSank2OWROSzVkaTR5MkdSNTBZVW9TY2IteDZuNTBkZk1RTEQyMTRLQTVtS0J0c01sdnRTWV9sX20zWlYwcGtVUVk3R0pvdGtSWXFOTFl0bVRpVk5RTTlDYWRsZ1RJRTBNMWdFTG50NFZjREtIZklTZkhkdjN1VnBzNEtzV1pzWk82VEFhenZ4VHZPaU53YlZScQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 479
    },
    {
      "date": "May 02",
      "text": "President Trump is 'not satisfied' with a new peace deal offered by Iran and rejects its latest proposal, preferring a non-military path but reviewing new military options.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPcnFPUzd6XzVPeXdrLXg1Q2RtR3NreUJSWE82ZGc5YkRZYUxCOXlIVERFU2s1RDBlUzc4dkVONkU0WHV1RGRmc3QwV3hPeTBDRWRKblBJcDZlS2I0ZWJWbklPbkZQN1p3alE5dlBKX0xDR25lX1gtaFowYnRYeEJRV0U1VFhGRWwwbWhwRkJpTXpMTXA4NElybWxnWk5rTU9WdkNBdTBlRUF6RERnTWVBeFV6REhIeS1vNC1VdA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 479
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
