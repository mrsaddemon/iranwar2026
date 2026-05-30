export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 826,
  "lastUpdated": "2026-05-30",
  "lastSyncedAt": "2026-05-30T19:59:21.596Z",
  "warDay": 92,
  "summary": "The US and Iran are engaged in ongoing military exchanges and a blockade in the Gulf region while simultaneously attempting to negotiate a truce, complicated by Trump's indecision and escalating conflict between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-05-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A tentative 60-day truce agreement between the US and Iran has been reached but awaits final approval from President Trump, with hostilities continuing."
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
        "aggression": 0.8
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
      "date": "May 28",
      "text": "US and Iran reach a tentative agreement on a truce, though President Trump has not yet signed off.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTE9nU2JJbWg5ZjRFYUNaaVV2b19hT25aeWtFZER1Tkhyby1yNU16d3FwNVVZblBBemQ4eTVwMWNTYVY1NzNIRnpzU193WFdjUzhYakhsNmxSTkpkbnJCSGsxcU9YeENCQ1RWR2kwdFl0bGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 826
    },
    {
      "date": "May 28",
      "text": "Iran denies a ceasefire deal with the US has been reached, stating negotiations are ongoing.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 826
    },
    {
      "date": "May 28",
      "text": "Iran reports targeting an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 826
    },
    {
      "date": "May 28",
      "text": "US and Iran exchange strikes as Israel intensifies attacks on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 824
    },
    {
      "date": "May 28",
      "text": "Iran reasserts control over the Hormuz Strait as a deal with the US remains elusive.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxPRm5vQ2dIOXllellmMG1IVmh6V3dqU3dlVm9SNDlXcmdORUR2N2dyQnRYZUtfdmpUMWpoWkxmZzlzRkR6TEtDT2c3ZE5SSEZWU29venBRQWJxUEVFazgxU3daZ042ZDZOcDU3WWcxMmRMdEtmMmhOTkg5QWxDdjdGX0hHTFRfQ2x3T3U3WUlHaGtGWlFjV2swWDNZT19odjZEbGhpNU5KS2RVQkNlTnFfbkFCSWHSAboBQVVfeXFMT01wQjRvRjk3YjU2bC1OVVNpRVI3dFRmd011a3VXUzlDdDBNSy1Sd3FEZjdMSjJMVHRmY0tsNFN3dXgtOTFtUjB3bFpKX0czeGwwV3BFM19HS2hWU25jSDEtYmsydjIwNTRPd0tRb2E4SGhrNEY0TzRiVEwteFZJUTVDbm83MWMyNmpjRjRJSTBQLWdoa2hRWGJ3UDZ2dGZiRk01enRXNjlsZ1VoLXJNUVFNRXRnLXFHSTh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 826
    },
    {
      "date": "May 28",
      "text": "The US disables a commercial ship in the Gulf of Oman attempting to breach the blockade and reach Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxQS3M1WGV6elZYQWhScGxaeXNPZEdpOWlmamR2bnl3b3JjbFpGZWlLM0g3b05JRUlWR0RiLW9NOC1mbmVsQzhLY3VJaDVqa2VQSTR0bE9QRUd6bmJVZVozZzk2ZzhMV2pnVEVJcXB1NXVuTEk5dUQ0UzJ0c0pCN3k5QmN0ZmpuSzh2QmFZR2Q4N3FyYnpKa01talFsSDlFdlY1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 826
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
