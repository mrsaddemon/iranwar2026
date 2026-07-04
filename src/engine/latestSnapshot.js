export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1168,
  "lastUpdated": "2026-07-04",
  "lastSyncedAt": "2026-07-04T18:43:48.679Z",
  "warDay": 127,
  "summary": "Ongoing direct military exchanges between the US and Iran, alongside Israeli strikes in Iran and intensified clashes with Hezbollah, are exacerbating tensions and disrupting shipping in the Strait of Hormuz, despite diplomatic discussions.",
  "lastNarrativeUpdate": "2026-07-04",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 6,
    "summary": "No active ceasefire is in effect between the primary belligerents, despite ongoing diplomatic discussions."
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
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
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Jul 02",
      "text": "Iran issues fresh warning on Hormuz and reports 'positive progress' in Qatar talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTFBJdzRnRHV6U1RFbENBREJ0cGh2Tm41dDBIRkh2U3VGb21vaXVQaVFFVnRacW1lX21lR2NsRDJucWJ0dVB2bUlOTTJUVkpuQ1MxMFhNM1NLblBCT2FrVnNLY04tWUZJTTRQZ0FEVFZESWpqZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1168
    },
    {
      "date": "Jul 02",
      "text": "US and Iran hold separate meetings in Qatar and agree to continue discussions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxOQ2lQSWQwRDQ4OFduMjN6LWJ6N0Q3VWQ2bTNDSGk3NzcyM01FYlBPd1ozSTgzM056VnZEck1UR2VvbE96dkZocFZ1cmNjS3NyOENOWlJJbDg0eHVmelg5NlZyQ0l2dTZPZW8zb0RzUGJRUnI0VFk5Q1dyZ0plQk1wQXR3STBEVHVWa1JoUE9qd0xGT2Jza2J0YzhHX1ljaHRkTXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1168
    },
    {
      "date": "Jul 04",
      "text": "IRGC claims 8 US military sites were destroyed in recent actions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOam5lWGFqNWVZWW5aWnBwNGlhZEhGNlZxSEJMRW53YjYwQjJ0OXVTSVhJeGI5aDBhV1BPdXg0b1B0RGg3N2dMbFh3MHRxcFp1MFljZTlsNFgtYmxsSThLRnlBWEtXTS05eXBDSTZfSE03WTRYLTM3MkxOUjhBRXRtNlVrRTVSSVQ0LWRyVWNjUUJSc0FWTGl4QWtTaEx5NGxxdXJ2ZHJuNTc5dXRUakt0TlpySWZkSy1xVW82QXJYd9IBxAFBVV95cUxQN1E3WGQ0WkNTVjFiODlwR2o1UDVobVdkSnVSbkpwQTRQZ2xweHBWZnh6NlRoZkZTOTkxM1VyU083S3pfMnVVVW5UNUc1bDZtdkoxNDNvYWFUeTc4b0MyUnJaWFFBQ3ZiYVV4QnIxODZxUi1UODBjOGphclRLR3JsWVNzRU9nV0tFQkdvSWpWRE4tcDlIXzVUQm5RVlU3UW40TnJYRkFKaHBBaE45ekNGYmxINWtRUnJBRU15OFBfQmFjMnRj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1168
    },
    {
      "date": "Jul 04",
      "text": "Israel conducts strikes in Iran, according to IDF statements.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1168
    },
    {
      "date": "Jul 04",
      "text": "US and Iran exchange strikes as Israel intensifies attacks on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1168
    },
    {
      "date": "Jul 04",
      "text": "Iran threatens 'complete halt' to talks after trading strikes with U.S., though Washington official states talks will continue.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1168
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
      "perspective": "Iran's Stance",
      "headline": "Hormuz Sovereignty & Diplomatic Leverage",
      "summary": "Iran asserts its right to control the Strait of Hormuz, issuing warnings against US 'miscalculation' while engaging in diplomatic talks in Qatar and proposing a fee plan for passage. Tehran views US actions as provocative but also seeks negotiated solutions.",
      "tone": "defiant",
      "latestSinceUpdate": 1158
    },
    {
      "perspective": "US Strategy",
      "headline": "De-escalation Efforts Amidst Retaliatory Strikes",
      "summary": "The US seeks arrangements to reopen the Strait of Hormuz and sends envoys for talks, indicating a desire for de-escalation. However, it also conducts retaliatory strikes against Iran and considers moving military assets to Israel, signaling a readiness to respond forcefully.",
      "tone": "strained",
      "latestSinceUpdate": 1158
    },
    {
      "perspective": "Israel's Security",
      "headline": "Pre-emptive Strikes & Regional Deterrence",
      "summary": "Israel is actively conducting strikes in Iran and intensifying attacks on Hezbollah in Lebanon, citing security concerns and a persistent drone threat from the Iran-backed group. This reflects a strategy of pre-emption and deterrence against perceived threats.",
      "tone": "defiant",
      "latestSinceUpdate": 1158
    },
    {
      "perspective": "Global Shipping",
      "headline": "Choke Point Crisis & Stranded Sailors",
      "summary": "The Strait of Hormuz remains a critical choke point with seized ships and stranded tankers, prompting international efforts to rescue sailors and address the ongoing disruption to global shipping. The situation highlights the vulnerability of maritime trade routes.",
      "tone": "anxious",
      "latestSinceUpdate": 1158
    }
  ]
});

export default LATEST_SNAPSHOT;
