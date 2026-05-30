export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 829,
  "lastUpdated": "2026-05-30",
  "lastSyncedAt": "2026-05-30T23:17:41.304Z",
  "warDay": 92,
  "summary": "The US and Iran have reached a tentative agreement for a 60-day truce, pending President Trump's approval, amidst ongoing exchanges of strikes and a US blockade of the Strait of Hormuz, while Hezbollah escalates drone attacks against Israel.",
  "lastNarrativeUpdate": "2026-05-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A tentative 60-day truce agreement between the US and Iran has been reached, but it awaits President Trump's final approval amidst ongoing hostilities."
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
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "May 28",
      "text": "US and Iran reach tentative agreement on 60-day truce, pending Trump's approval.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 829
    },
    {
      "date": "May 28",
      "text": "US and Iran exchange strikes as Israel intensifies attacks on southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 829
    },
    {
      "date": "May 28",
      "text": "US fires missile to stop cargo ship from breaching Iran blockade of Hormuz strait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxQSnoycEFlai1NWmhiSDB4ZE93UUd4ZUk1ZTNVWVFYUHpWdjhBZFFoeTRDVjlfUTNxNnN1akdnTDhjTTJ0emNidGZLdmt4MFRfVndqNFFDSlp0RGxwZGktbjIyRHFLQjFWZ3FJc1hsM2l2U3FTaVRNOVJVZHNCcmdqWUJtbWJSLTJHOTZ1NndTQlhfSS11WVIxVUQxLURlZ09RbnozTkZoXzlxeTlqV2U5OUtWaVYtM3RhQU5fZEM5SHpkdzc2YWtB0gHbAUFVX3lxTE5IdDA5QlNxZG0wbkRDWTNxLUxtMG9wajlseFhyODNNZVgtbEY0NTFFRmZ0SUdKWDdLOVQxbTdzZi1xSlA4QWNqdXpmMUVmcjlUejY3WmJ3bEVIQXlYZ1hoT01LR1B0enhKTkYxYXpLNTh2TjZEUDJHSWRFNzNKQVIxTDlNYjM1dFY0cWhXalZTd3J1LWVIeEJHR3RqTUI1VExobmFKdm5VMHVMLWE0ZE5jS25rcWN4SHFvS0FnMGVMbEFWMmZoQ2RNLXhEN2ZETVBOZjkxcmRvcXZmRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "OregonLive.com",
      "latestSinceUpdate": 829
    },
    {
      "date": "May 28",
      "text": "Iran says it targeted American base after fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 829
    },
    {
      "date": "May 28",
      "text": "Hezbollah uses fibre-optic drones and launches rocket barrages, causing damage in northern Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPN3BLZldaZFVObVZyOWNnb2dZYkNMOVcwVVVYRm5XQkhoV2d1bktOMmNIcVlEY2dqYmdxSzhOcVNzVzQ5WmNudjlpaUdQVjhoX2ZTS1JqUzRJV1ZscnBBTm9qQXlDT2NVdjJ6Y3NUNVIzY3EwVWlJUDN2T0lkd1VXc2RXTDIyNzVQT05oZHBTb0V0RXpKazNyc01yMmx2YktPMDRYZDhpTHhZUU15dEFCVEkwM1pWNDFDYlE4b0hwSdIBxAFBVV95cUxORW5oVUNJZThteFFBU1FNU3dyUndiVTBQVkwzS2JPaEN3WUJGQ0lULTVRSmxRLWdSQTJidWJaWDhQaW8zR255ZU9hOWl0ZXpFZzB2NHRwOGYyUHVFdHVaVFNUZzg3UGFpTk9zdTFCVnZRN2Rib0R5MVZxZnZWc2t3SEVyOGUtWmNFOEZiVlVLOWtIclJ4ODV5aXhjWHhBbVlfZ0V0X1ppWWRnbm1JTXRteFRpOENmMktpMGphV2lGU3lkSkJp?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 829
    },
    {
      "date": "May 28",
      "text": "US military warns it is ready to resume combat in the Gulf if needed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTFBvUVMwOFVMTmdjLW52a3JJdWRJc2JMN3lQOC1jZy1oa2ZpRGNZYWZEMFp5ZHB3OHZfRWFMVHBmS3FIeUt4alFuWG9KdXdhQXE5SmN0VEJMTVZRV0FNbFlUY0p2NFdVNGhMb0RHdUpZT0EyZXUwaTlsOE1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 829
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
