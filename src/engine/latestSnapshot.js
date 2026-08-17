export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1951,
  "lastUpdated": "2026-08-17",
  "lastSyncedAt": "2026-08-17T21:33:10.974Z",
  "warDay": 171,
  "summary": "Tensions between the US and Iran escalate as a ceasefire agreement nears expiration, marked by US threats against Oman, Israeli strikes in Lebanon, and Iranian signals of readiness for ground operations and bounties on US troops.",
  "lastNarrativeUpdate": "2026-08-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 60,
    "summary": "The US-Iran ceasefire is set to expire with Iran ruling out an extension, while Israel continues strikes in Lebanon despite a separate ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
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
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
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
      "text": "Trump threatens to bomb US ally Oman if they impede a Hormuz deal, as an Iran agreement expires.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1951
    },
    {
      "date": "Aug 17",
      "text": "US-Iran ceasefire/MOU deadline looms, with Iran ruling out an interim deal extension and threatening escalation.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1951
    },
    {
      "date": "Aug 17",
      "text": "Israel strikes Lebanon, killing 11, despite an existing ceasefire.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1951
    },
    {
      "date": "Aug 17",
      "text": "Iran signals readiness for 'US ground operations' as its strategy shifts gear.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxQelFzdllQRGI3MUs3bFFrY3pqdmoxaUs1VnJBbTJuT2tCYUVVMDdpdFRGX1dfV2xLYzBES0l4QXNObXlmWFFrbzd3SjFOT3pIVzgyRlh6TlVxUEw4U1JRaE9IOGFhdEEzRnYwXzNSV0NjOWwtSXdBNTkyMWxpVnZyTDdZRzNMRm45S2pmV1RhTm5MenFyd1kyVmszc1QyOTV4cWZBVFpR0gGrAUFVX3lxTE1MLWVBNEdLNXdVUU11bk1fOGEwc24tWnJYMzhlR2NXNkYwU0NwdWlPaThMYnJVbjFEV0hXdXNKM2VnbGdkX1dMd19zZ3hZMldHY29DMFdzai1Dd05UVUh3c2FMc1FRQzAxNlJIRDQxN05sQ2x5b0JKVy0zcG5yT1gwYkZoQ1JJZjQ3Uk5HaFRVY0R2ZDlUMjQxeEpaQUhPYzBsbzNOMFJXUVBBbw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1951
    },
    {
      "date": "Aug 17",
      "text": "Iran reportedly places a $30,000 bounty for killing or capturing US soldiers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxOcUFVOVduVlZTWFpDYURxYjROVWdvd0pIX0tZRGItN2NaRlpWZy1DYTA5NERsOTJNRFBjYVl2VFZZdzRYWkZCZGFTYW9nOEM3UWx0XzdNZzJBRE11VFhhNms2aDRqcEFzaGE5QjZkcVlCWGt4UzVnMnh0cTBYQW9Qc1dZc0luTjBiSldoY0ZGZDRDbGFsOEVEcW5ZVkR1ZFVEM0JIeV9PTmdZNFF4LVlXWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 1951
    },
    {
      "date": "Aug 17",
      "text": "Brent oil rises above $90 amid Iran's refusal to extend a deal and threats of conflict escalation.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1951
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
      "status": "unavailable"
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
