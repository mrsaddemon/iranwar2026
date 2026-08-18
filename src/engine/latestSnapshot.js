export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1973,
  "lastUpdated": "2026-08-18",
  "lastSyncedAt": "2026-08-18T11:43:54.320Z",
  "warDay": 172,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The 60-day negotiation period for a US-Iran ceasefire has ended without extension, and Israel has escalated attacks in Lebanon despite a separate ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
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
      "date": "Aug 17",
      "text": "Deadline to reach US-Iran deal expires, President Trump threatens Oman over Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1973
    },
    {
      "date": "Aug 17",
      "text": "Middle Eastern airlines are projected to face $4.3 billion in losses for 2026 due to the ongoing Iran war.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1973
    },
    {
      "date": "Aug 17",
      "text": "A vessel was hit by an ‘unknown projectile’ in Omani waters leaving the Strait of Hormuz, causing oil prices to rise.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQdnhsTnlwVkVUTjEzcmw0cVhsUDZxVUoyUDl6WkNSSXp1SEx1c1AzQ1pwcloxN3RnMUV5SU9oSnJzcm1aQkRIV1hPMnBqWDAwMGp4T1g3YmxJT05qSGVxZm5LcDlmY3p5UkY5el82UHplTzR0R3dMWUQ1dzRvU2sxNTUxanRDVlMwVV9ab3EzRkYwLVFYWVdLcWVpXzVXLVktcG9odVdGSdIBrAFBVV95cUxQWmg0WGhUZzNuTDBDYkNzeDdJMjRVMEJRRFJLcENEaXhXNDR2T2tyVzVvMF9YSmtLYkRObGEzSE9NSmNUQTFfYXFseDFFYm40VmNSbkNFNGdqcDY0NWttUlpjbmFzMmFobW9pVGdMTEplNHFaTlBlaXZvZmM3N013Nk1UMF84SnkyT0FyQl9iLXpQTEZpWnVCY2dnbzJvblVJMUtreWF1TW5nZnps?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1973
    },
    {
      "date": "Aug 17",
      "text": "Israel conducted strikes in Lebanon, killing 11, further pressuring stalled US-Iran talks.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1973
    },
    {
      "date": "Aug 16",
      "text": "Jared Kushner met with regional leaders amidst multiple ongoing conflicts in the Middle East.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE40V2dqMUJIcWdndGVfSXlVeDRKbmkzU3hrTTRyeXBrSWR3NGtUNzNkSm54X19kcDNBNzJBaVV0NEJTNVdLVVRrUlNHLXZETnFwMEIyekJhOTduVWxZQWZyVW5WQ0xua1ByTDc0OG1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1973
    },
    {
      "date": "Aug 15",
      "text": "Shipping operations in the Middle East are facing increased disruptions.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1973
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
      "perspective": "International Community",
      "headline": "Calls for De-escalation Persist Amidst Ongoing Conflict",
      "summary": "International observers continue to emphasize the need for diplomatic solutions to prevent further regional instability. Concerns remain high regarding humanitarian impacts and the potential for wider escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Israel",
      "headline": "Security Operations Continue to Address Persistent Threats",
      "summary": "Security operations are framed as essential for national defense against ongoing threats in the region. The focus remains on neutralizing perceived dangers and ensuring long-term national security.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Iran",
      "headline": "Regional Actors Assert Influence Amidst Geopolitical Tensions",
      "summary": "Regional actors continue to assert their influence, supporting various groups in what they describe as resistance against foreign intervention. The narrative emphasizes sovereignty and regional power dynamics.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    }
  ]
});

export default LATEST_SNAPSHOT;
