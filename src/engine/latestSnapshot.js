export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 823,
  "lastUpdated": "2026-05-30",
  "lastSyncedAt": "2026-05-30T16:45:58.099Z",
  "warDay": 92,
  "summary": "The US and Iran continue to exchange strikes while negotiating a potential truce, as Israel intensifies operations against Hezbollah in southern Lebanon and concerns persist over Strait of Hormuz transit.",
  "lastNarrativeUpdate": "2026-05-30",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A Memorandum of Understanding for a 60-day truce has been reached between the US and Iran, but it awaits Trump's approval and the deal is reported to be stalling."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
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
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 38,
    "oilDisruption": 70,
    "tradeImpact": 41,
    "sanctionsPressure": 49,
    "globalPressure": 53,
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
      "date": "May 30",
      "text": "US and Iran exchange strikes; US military launches another strike on Iran and disables a merchant ship trying to breach blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxObFM3SGFqTGQ5OU5nSFpkTkhXT0k0dzRmR29fOENYcVVvR3ZXcXUzMUtXU0ZKNV8yQnhZVHlLWXBBdFZOejA0bWtYaTRjQk9TOTgxdDdzUXJLSEFVMkVhVHFRVWlpQ3BadUlKRGV0cEYxc0JoS3JwMWFCUnhEaFNVM0psaGczR1lqWERySDNoM2NETy1JNGRtNEdFd0N6UUpjanNBejVrT3hUR3Y5WmlobGV1T3lBTUxzUk5v?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 823
    },
    {
      "date": "May 30",
      "text": "Israel issues evacuation orders for seven south Lebanon villages as IDF expands operations against Hezbollah, who are using fibre-optic drones.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxOVjc5RzlWZ09TY1QySzVwUnFmSVZia0wxUWxGb2dBOTVQdTduZjQ3eVVXSng2el90QUJfd1ZMQS12QzFXZDVHcG1qb3JqUkVuVi1LMTJHemxnUktfRG80TnJFeGdjbVljcmdvY0FIMGMwbTVjaEdUSFVaN1lnTUY5TWhoRGFLWXBSaTB6dFplb1RTNGtKSWN6OUh1T3p1dE4wTkFhaHRZUC0zODVEWjh1ZWpVcl9fYjZUMDVZZHJFUUZlYVpTYks3M0gwRG5Cc09RelE5X1lsTnnSAd8BQVVfeXFMUDRZNE5rcW1xRWZGbzhfNnNOQXQ3Tm5mWnJVVjhlV1Y1UGhDUDZMWkpMcjVkQV90RmZMMzRST05qazRUM0ozUVNRUVZqWlB0d2FiQ2U4REhhQWpNQnZvd0t6WTFiWGVDQkV4aE9xLXNTQW4xMzg2MVNWaVBjdmYzSHhCVGlWNHVsYV9TckdqQlRLdXk2VV9KNWR0aGVLeXNNRGI5SVlDTGdkcm9CR0dBeGNNQW90ZEJVSmpVcjBrSU83bjlGNUw4Rnl5U0JTOHpiM052a3hXX0hDRV9fbElOZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 823
    },
    {
      "date": "May 30",
      "text": "US officials are closing in on an arrangement to reopen the Strait of Hormuz, while warning of readiness to resume combat in the Gulf if needed.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 823
    },
    {
      "date": "May 30",
      "text": "Negotiations for a 60-day US-Iran truce continue, with an MoU reached but awaiting Trump's approval, as Tehran states a deal is not yet finalized.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOc2tnMjh3LWhDb2RvT05wUUV6MGctd3hkekYzU1lGbU9VZzAyUU9IdFlldmx1eHdBcXdDM0ZwS0xacHZHZmdtMmZxYzNIV082YVBtN05iR1NsQy1paDBId0lpak9IN0wtY2tnZWtkaWlXc0w2TVJBRUtVTEpzMHEtaVRYRWZWLUJTR19YSm91TE9LVEVYTHlTN1ItWEROY1dzV1FCTGxEOHZKZ0R4U0xaaWlTSzhLbExRQzcybDUwa9IBxAFBVV95cUxQcThwU0NNYm45RWlOZlRvSXhBWXhHUzduWGF1TWZ1MHFVS21wRGd4RnliRFNSMVdNN2UyX0RGQmZuN1dCcFVEclVlVVBKYklZM09WVHhvcmJDM3QxZHhZR3hQeXMycXkwM3lHaEJXUlllMmNCb3RfRVNCVnl2UTA4X054ME1RZnJSLUh6M3BGYkNCdTc1VC01OXd6c0txMlFpWFZzdldYVFJoRE01THZaOGFNNjdVVmo2RGpCaGE0SDZIY3Rj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 823
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
