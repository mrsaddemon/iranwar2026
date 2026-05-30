export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 827,
  "lastUpdated": "2026-05-30",
  "lastSyncedAt": "2026-05-30T21:10:39.129Z",
  "warDay": 92,
  "summary": "US and Iran have reached a tentative agreement for a 60-day truce, though President Trump has not yet approved it, while both sides continue to exchange strikes and Israel intensifies operations against Hezbollah.",
  "lastNarrativeUpdate": "2026-05-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 60,
    "summary": "A tentative 60-day truce agreement has been reached between the US and Iran, but President Trump has not yet approved it, and military exchanges continue."
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
        "militaryPower": 80
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
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "May 28",
      "text": "US and Iran reach tentative agreement on 60-day truce, pending Trump's approval.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 827
    },
    {
      "date": "Recent",
      "text": "Iran says it targeted an American base after fresh US strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 827
    },
    {
      "date": "Recent",
      "text": "US and Iran exchange strikes as Israel intensifies attacks on southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 827
    },
    {
      "date": "Recent",
      "text": "Iran reasserts control over the Hormuz Strait as deal with US remains elusive.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxPRm5vQ2dIOXllellmMG1IVmh6V3dqU3dlVm9SNDlXcmdORUR2N2dyQnRYZUtfdmpUMWpoWkxmZzlzRkR6TEtDT2c3ZE5SSEZWU29venBRQWJxUEVFazgxU3daZ042ZDZOcDU3WWcxMmRMdEtmMmhOTkg5QWxDdjdGX0hHTFRfQ2x3T3U3WUlHaGtGWlFjV2swWDNZT19odjZEbGhpNU5KS2RVQkNlTnFfbkFCSWHSAboBQVVfeXFMT01wQjRvRjk3YjU2bC1OVVNpRVI3dFRmd011a3VXUzlDdDBNSy1Sd3FEZjdMSjJMVHRmY0tsNFN3dXgtOTFtUjB3bFpKX0czeGwwV3BFM19HS2hWU25jSDEtYmsydjIwNTRPd0tRb2E4SGhrNEY0TzRiVEwteFZJUTVDbm83MWMyNmpjRjRJSTBQLWdoa2hRWGJ3UDZ2dGZiRk01enRXNjlsZ1VoLXJNUVFNRXRnLXFHSTh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 827
    },
    {
      "date": "Recent",
      "text": "US military disables ship attempting to breach blockade of Iranian ports in Gulf of Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxQYkFqQjdtOU1keS12S0VfUVpNdDVsMGdqdDJlLWJkRHdMd3UwYjZXbjJVNlRmd2ZEbnlZVTRPZllmd3llLTdza0ZsSGJSSXVqOUZLY0NoR0xRbUJUU3VoY1kwSjNNUTlYUFRJMjNDVVpPbkR4VGhrMTI1dzVvNXBJclVB0gGHAUFVX3lxTE8yWW5oZGpmM2tWZUZ2ekxvUGhJZmZiYWJTME9oeXQxVTFtZzVnalNyVTJ2ZGEtNWVtc3MyWFR5T19NOUlyOHUxdkdJdHRqRXl4ZnREbmttTG4yMlQ2SU1UVk0yY2pTOWVoTnVybzQwUGJ5cFFEdHUtZnIyWG00MnMxenBjdnljcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 827
    },
    {
      "date": "Recent",
      "text": "Hezbollah launches rocket barrages, causing damage in northern Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPN3BLZldaZFVObVZyOWNnb2dZYkNMOVcwVVVYRm5XQkhoV2d1bktOMmNIcVlEY2dqYmdxSzhOcVNzVzQ5WmNudjlpaUdQVjhoX2ZTS1JqUzRJV1ZscnBBTm9qQXlDT2NVdjJ6Y3NUNVIzY3EwVWlJUDN2T0lkd1VXc2RXTDIyNzVQT05oZHBTb0V0RXpKazNyc01yMmx2YktPMDRYZDhpTHhZUU15dEFCVEkwM1pWNDFDYlE4b0hwSdIBxAFBVV95cUxORW5oVUNJZThteFFBU1FNU3dyUndiVTBQVkwzS2JPaEN3WUJGQ0lULTVRSmxRLWdSQTJidWJaWDhQaW8zR255ZU9hOWl0ZXpFZzB2NHRwOGYyUHVFdHVaVFNUZzg3UGFpTk9zdTFCVnZRN2Rib0R5MVZxZnZWc2t3SEVyOGUtWmNFOEZiVlVLOWtIclJ4ODV5aXhjWHhBbVlfZ0V0X1ppWWRnbm1JTXRteFRpOENmMktpMGphV2lGU3lkSkJp?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 827
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
      "perspective": "US Diplomatic Efforts",
      "headline": "Trump Weighs Iran Deal Amid Strikes",
      "summary": "The US is actively engaged in high-stakes negotiations with Iran, aiming for a deal to reopen the Strait of Hormuz and address uranium concerns, despite ongoing military actions. President Trump is reportedly making a final decision on a potential truce and broader agreement.",
      "tone": "strained",
      "latestSinceUpdate": 815
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Responds to Strikes, Warns of Escalation",
      "summary": "Iran is participating in truce negotiations while simultaneously responding to US strikes by targeting American bases and warning of severe consequences if the conflict escalates further. Iranian officials are negotiating amidst continued US military pressure.",
      "tone": "defiant",
      "latestSinceUpdate": 815
    },
    {
      "perspective": "Israel-Lebanon Front",
      "headline": "Israel Intensifies Lebanon Attacks, Talks Begin",
      "summary": "Israel is intensifying military operations in southern Lebanon against Hezbollah, pushing deeper into the territory and intercepting rockets. These actions occur concurrently with the initiation of military talks between Israeli and Lebanese officials at the Pentagon aimed at curbing Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 815
    }
  ]
});

export default LATEST_SNAPSHOT;
