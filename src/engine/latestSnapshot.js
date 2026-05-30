export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 825,
  "lastUpdated": "2026-05-30",
  "lastSyncedAt": "2026-05-30T18:50:47.473Z",
  "warDay": 92,
  "summary": "The US and Iran are engaged in ongoing strikes and negotiations for a 60-day truce, with President Trump yet to approve a tentative agreement, while Hezbollah continues rocket attacks against Israel.",
  "lastNarrativeUpdate": "2026-05-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A Memorandum of Understanding for a 60-day truce has been reached between the US and Iran, but President Trump has not yet approved it, and active strikes continue."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 60,
    "tradeImpact": 44,
    "sanctionsPressure": 54,
    "globalPressure": 61,
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
      "date": "May 28",
      "text": "US and Iran reach tentative agreement, though President Trump has not yet signed off on it.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTE9nU2JJbWg5ZjRFYUNaaVV2b19hT25aeWtFZER1Tkhyby1yNU16d3FwNVVZblBBemQ4eTVwMWNTYVY1NzNIRnpzU193WFdjUzhYakhsNmxSTkpkbnJCSGsxcU9YeENCQ1RWR2kwdFl0bGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 825
    },
    {
      "date": "May 28",
      "text": "Iran states that a ceasefire deal with the US has still not been reached, despite reports of an agreement.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOc2tnMjh3LWhDb2RvT05wUUV6MGctd3hkekYzU1lGbU9VZzAyUU9IdFlldmx1eHdBcXdDM0ZwS0xacHZHZmdtMmZxYzNIV082YVBtN05iR1NsQy1paDBId0lpak9IN0wtY2tnZWtkaWlXc0w2TVJBRUtVTEpzMHEtaVRYRWZWLUJTR19YSm91TE9LVEVYTHlTN1ItWEROY1dzV1FCTGxEOHZKZ0R4U0xaaWlTSzhLbExRQzcybDUwa9IBxAFBVV95cUxQcThwU0NNYm45RWlOZlRvSXhBWXhHUzduWGF1TWZ1MHFVS21wRGd4RnliRFNSMVdNN2UyX0RGQmZuN1dCcFVEclVlVVBKYklZM09WVHhvcmJDM3QxZHhZR3hQeXMycXkwM3lHaEJXUlllMmNCb3RfRVNCVnl2UTA4X054ME1RZnJSLUh6M3BGYkNCdTc1VC01OXd6c0txMlFpWFZzdldYVFJoRE01THZaOGFNNjdVVmo2RGpCaGE0SDZIY3Rj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 825
    },
    {
      "date": "May 28",
      "text": "Iran claims to have targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 825
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
      "text": "President Trump states Iran is 'negotiating on fumes' as the U.S. conducts new strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxQR1RuVG9VYnY4b1hEczN1SFBCZDJROHZQZlRMUjRxeHIwczhfWEM4QndTRGYzcjg0ZTcxejJxOGs0elBieU9ncnFWM3F5QXU3YkVJVHUtemtDc0VIMEJoQ0tzTzFaM2stTHRHWmVnZUZwYzBlRTFVdnZ6cTFQUzNKTkxLY2pxajA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 825
    },
    {
      "date": "May 28",
      "text": "Hezbollah launches rocket barrages causing damage in northern Israel, with drones identified as a top threat.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPN3BLZldaZFVObVZyOWNnb2dZYkNMOVcwVVVYRm5XQkhoV2d1bktOMmNIcVlEY2dqYmdxSzhOcVNzVzQ5WmNudjlpaUdQVjhoX2ZTS1JqUzRJV1ZscnBBTm9qQXlDT2NVdjJ6Y3NUNVIzY3EwVWlJUDN2T0lkd1VXc2RXTDIyNzVQT05oZHBTb0V0RXpKazNyc01yMmx2YktPMDRYZDhpTHhZUU15dEFCVEkwM1pWNDFDYlE4b0hwSdIBxAFBVV95cUxORW5oVUNJZThteFFBU1FNU3dyUndiVTBQVkwzS2JPaEN3WUJGQ0lULTVRSmxRLWdSQTJidWJaWDhQaW8zR255ZU9hOWl0ZXpFZzB2NHRwOGYyUHVFdHVaVFNUZzg3UGFpTk9zdTFCVnZRN2Rib0R5MVZxZnZWc2t3SEVyOGUtWmNFOEZiVlVLOWtIclJ4ODV5aXhjWHhBbVlfZ0V0X1ppWWRnbm1JTXRteFRpOENmMktpMGphV2lGU3lkSkJp?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 825
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
