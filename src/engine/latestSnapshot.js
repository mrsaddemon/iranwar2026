export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 816,
  "lastUpdated": "2026-05-30",
  "lastSyncedAt": "2026-05-30T05:30:19.281Z",
  "warDay": 92,
  "summary": "US and Iran continue to exchange strikes while President Trump deliberates on a tentative 60-day truce agreement, as Israel intensifies operations against Hezbollah in southern Lebanon.",
  "lastNarrativeUpdate": "2026-05-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A tentative 60-day truce agreement between the US and Iran has been reached, but President Trump has not yet approved it, and both sides continue to conduct strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
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
    "nuclearIndex": 65,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "text": "President Trump delays final determination on a proposed deal with Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPSVotLVFqT0lNQy15OWRUSVRNYi12b1d2ZTZTekxmaE9uYlNmNDd5YlVwVXNlaHE2RWsxTzZVZzFxTmk0M05uSjdCVlU5OGFsbUVEY3hOWUJFRTEzOWtjOURHZUZUQ0pGNlJMSl9ORHk5WUVGOG9nM1U4WnBWS2RSZzBSaTFkWC1nR0ZmNmNGTUVTVnF3TFNUN2ptYk9TLXp5Y19PMm8xSFBpWTduQl9xTDNuVHZJSEwwWTV3a2Z30gHDAUFVX3lxTE1qaGFnNzB1Q2JrYy1HUml3ZllPZTZjbU9tUGxsV25VNWp4UnpOVkNFUHV0a3NXVzRsVHk1M2pHTkNnb05KVlhqVFE3TTY5MDN0dDhyZlNnSlJ3dTVpdGNFaXNqLUNNMDFfR2VWRGxlYlV4VnJPd09OVVktNDhndXlmLXlaUkJpdXd4U2Q3ZXM1bnZac3RzcGxnQmJBWFFKT0lqaFlhcVRLd3cxb1ppREs0VVM4dnZyTlpjMmhtc2hzWlotQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 816
    },
    {
      "date": "May 29",
      "text": "US and Iran exchange military strikes amidst ongoing negotiations.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 816
    },
    {
      "date": "May 29",
      "text": "Israel begins strikes on southern Lebanon after issuing evacuation orders.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1kYzFJdldyZ01IUWdFLTNOU2lDNFkwTjIwbzRnN0xudjg4T3k2RzlkdW1KTy1mZUpMVUVTZWxTQ241N1REcGt3anhyNzQ1eWpFM0ppUlBIVHR0QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 816
    },
    {
      "date": "May 29",
      "text": "Ships are reportedly sailing 'dark' to navigate the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 816
    },
    {
      "date": "May 29",
      "text": "Hezbollah's drones are identified as a significant threat to Israel.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 816
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
