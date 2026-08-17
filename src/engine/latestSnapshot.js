export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1939,
  "lastUpdated": "2026-08-17",
  "lastSyncedAt": "2026-08-17T15:43:29.987Z",
  "warDay": 171,
  "summary": "The US-Iran ceasefire has expired, leading to increased rhetoric and threats from President Trump, while Israel escalates strikes in Lebanon and Iran asserts control over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-08-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The US-Iran ceasefire has expired, and a proposed Lebanon-Israel deal is rejected by Hezbollah amidst escalating Israeli strikes."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Aug 16",
      "text": "Kushner meets regional leaders as multiple conflicts roil Middle East.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE40V2dqMUJIcWdndGVfSXlVeDRKbmkzU3hrTTRyeXBrSWR3NGtUNzNkSm54X19kcDNBNzJBaVV0NEJTNVdLVVRrUlNHLXZETnFwMEIyekJhOTduVWxZQWZyVW5WQ0xua1ByTDc0OG1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1936
    },
    {
      "date": "Aug 16",
      "text": "Iran states the Strait of Hormuz is under its control, while Israel bombs Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNQzlkS0EwWUsxSGYtSjNaal92eVBWNjhwcnhzdS10VXNRd1NTdnZ6OFNxZ2xXdWZ4NWtwZ2pQcWdnbmJ3M3hrU0E1RVppcjR1WU8ydjlRdm91UVJjVDNndk0zSUR0a2VNZ0NNZmp1MkNBNHVpaGpwUy1VdTJnbzBQX2JZeDdwTXd2NEpZN3RhNzY2OWZGR052eUYxTzZ2emVfSWNCZ2VKTFc5X0MxU1JHdjNJVTbSAboBQVVfeXFMTTBCVzhpTmo0MFR2eXFDWktoY0pfVVVoeUVPcU9heS1FaVdwTEJsdDB0eU9HWkhKMkM4YzdJb0hoT2ljdl9vTXlMNFRkdFJQcmJRWDEtajh2VDMyLWpNYXRtd0NyUTJkUnVKZ09CRUVYSVQ5Z1IxUklWUnNYNE9zelpmUEZTNnE3SWY0X0VSYkpaNldjcjZPQkYzNmRlVUtWLUpYSUhmelpRRGxmOWRVcDR2NzY3WjR3WUVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1939
    },
    {
      "date": "Aug 15",
      "text": "Trump threatens to 'bomb' Oman if it 'gets in the way' as U.S.-Iran ceasefire expires.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5yYUVkY2dPZ0gwUXljWl91UW90Tk9Yb0J0NlRaZTdESlhoMmtneGpFZUhQSkd3ZzhhX3l2RGZJUmdDSzFhVnczRFhnY2tsaHBqMHFqN0lTS2Q3bjJEUm9QUFJmSHM0M25OcHV4RnZn0gFzQVVfeXFMTUx6bEdGYlhiR1ZTbVVyTzFaY1ZZcy1WQ1pQSXRyVjBfa0o0TVZ5VW83ZUsyMmtPTGNxQ3RscjR0ajdSTjA1akVxclViUWlRd19STTRDcVVuSkp3VURicGtUZkhJMHZqTHZhWjg5Zk1VRHRybw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "cnbc.com",
      "latestSinceUpdate": 1939
    },
    {
      "date": "Aug 15",
      "text": "South Carolina gas prices jump 8.2 cents as Strait of Hormuz remains closed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi2wFBVV95cUxOa2U5RmlnRUdjSmZDRGpYTGl6VWZpc3hoNjVNNWJ3dGZ5T09Fb0U2NkJyUmxDdmltRVhYTXNQMFVGRXQ5M2RyUkdLbTFLLUJIU0FlWWtZZm1kWFBRV2l5bnVnc0hzRW5NM1lwT3AwRUZscHdqbktHTzNPWGRUZEpPNk13SERWeXZWV3pPejJlLWFqMTl5OWpka0VKeWN4M0RkckpqV1oxLXFBb1FQMktYN2dPbkJLY3lqN1dsR1FVVFNtLUluQVA5MVRtektKeVZDOVZHWWs2b3RCTnM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WCIV",
      "latestSinceUpdate": 1939
    },
    {
      "date": "Aug 15",
      "text": "Iran reportedly offers a $30,000 bounty for killing or capturing US soldiers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxOcUFVOVduVlZTWFpDYURxYjROVWdvd0pIX0tZRGItN2NaRlpWZy1DYTA5NERsOTJNRFBjYVl2VFZZdzRYWkZCZGFTYW9nOEM3UWx0XzdNZzJBRE11VFhhNms2aDRqcEFzaGE5QjZkcVlCWGt4UzVnMnh0cTBYQW9Qc1dZc0luTjBiSldoY0ZGZDRDbGFsOEVEcW5ZVkR1ZFVEM0JIeV9PTmdZNFF4LVlXWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 1939
    },
    {
      "date": "Aug 15",
      "text": "Hezbollah Chief rejects a U.S.-led Lebanon deal as Israel reportedly plans an assault.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1939
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
      "status": "unavailable"
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
