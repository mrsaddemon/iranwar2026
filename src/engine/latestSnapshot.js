export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 834,
  "lastUpdated": "2026-05-31",
  "lastSyncedAt": "2026-05-31T12:01:18.805Z",
  "warDay": 93,
  "summary": "US and Iran continue to exchange strikes and negotiate a ceasefire extension while Israel expands its military operations into southern Lebanon against Hezbollah.",
  "lastNarrativeUpdate": "2026-05-31",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A tentative 60-day ceasefire extension between the US and Iran has been reported, but it awaits Trump's approval and has been accompanied by continued military exchanges."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
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
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "May 29",
      "text": "US military warns it is ready to resume combat in the Persian Gulf if needed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTFBvUVMwOFVMTmdjLW52a3JJdWRJc2JMN3lQOC1jZy1oa2ZpRGNZYWZEMFp5ZHB3OHZfRWFMVHBmS3FIeUt4alFuWG9KdXdhQXE5SmN0VEJMTVZRV0FNbFlUY0p2NFdVNGhMb0RHdUpZT0EyZXUwaTlsOE1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 834
    },
    {
      "date": "May 29",
      "text": "US officials report closing in on an arrangement to reopen the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 834
    },
    {
      "date": "May 29",
      "text": "US 'disables' a ship with a Hellfire missile in the Gulf of Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPSVotLVFqT0lNQy15OWRUSVRNYi12b1d2ZTZTekxmaE9uYlNmNDd5YlVwVXNlaHE2RWsxTzZVZzFxTmk0M05uSjdCVlU5OGFsbUVEY3hOWUJFRTEzOWtjOURHZUZUQ0pGNlJMSl9ORHk5WUVGOG9nM1U4WnBWS2RSZzBSaTFkWC1nR0ZmNmNGTUVTVnF3TFNUN2ptYk9TLXp5Y19PMm8xSFBpWTduQl9xTDNuVHZJSEwwWTV3a2Z30gHDAUFVX3lxTE1qaGFnNzB1Q2JrYy1HUml3ZllPZTZjbU9tUGxsV25VNWp4UnpOVkNFUHV0a3NXVzRsVHk1M2pHTkNnb05KVlhqVFE3TTY5MDN0dDhyZlNnSlJ3dTVpdGNFaXNqLUNNMDFfR2VWRGxlYlV4VnJPd09OVVktNDhndXlmLXlaUkJpdXd4U2Q3ZXM1bnZac3RzcGxnQmJBWFFKT0lqaFlhcVRLd3cxb1ppREs0VVM4dnZyTlpjMmhtc2hzWlotQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 834
    },
    {
      "date": "May 29",
      "text": "US and Iran trade attacks amid reports of a tentative agreement for a ceasefire extension.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 834
    },
    {
      "date": "May 29",
      "text": "Israel announces plans to expand its invasion into Lebanon.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 834
    },
    {
      "date": "May 29",
      "text": "Iran claims to have targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 834
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
      "headline": "Trump's Demands Shape Iran Truce",
      "summary": "President Trump has outlined demands for Iran and has yet to give final approval to a tentative 60-day truce agreement, with US officials emphasizing the military's capability to resume strikes if necessary. Negotiations are ongoing, but the administration maintains a firm stance.",
      "tone": "strained",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Iran",
      "headline": "Iran Responds to US Strikes Amid Truce Talks",
      "summary": "Iran has agreed to a tentative 60-day truce but continues to target American bases in response to fresh US strikes, including a US military hit on a commercial ship attempting to reach Iran. This indicates a volatile situation despite diplomatic efforts.",
      "tone": "defiant",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Hezbollah's Drone Threat Escalates Border Conflict",
      "summary": "Hezbollah has intensified its attacks on northern Israel using rockets and advanced fibre-optic drones, prompting Israel to shut schools near the border. This regional conflict continues to escalate, posing a significant security challenge for Israel.",
      "tone": "anxious",
      "latestSinceUpdate": 830
    }
  ]
});

export default LATEST_SNAPSHOT;
