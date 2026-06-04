export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 868,
  "lastUpdated": "2026-06-04",
  "lastSyncedAt": "2026-06-04T18:02:14.111Z",
  "warDay": 97,
  "summary": "A renewed ceasefire agreement between Israel and Lebanon is challenged by Hezbollah's rejection and ongoing Iranian attacks on regional targets, while the US House moves to curb presidential war powers amidst a broadened US military footprint.",
  "lastNarrativeUpdate": "2026-06-04",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A ceasefire agreement between Israel and Lebanon has been renewed, but its effectiveness is undermined by Hezbollah's rejection and ongoing Iranian attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Jun 03",
      "text": "Israel and Lebanon agree to renew a ceasefire.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxNWmVQTjduVEoyLVF3Ym84c25PRXR5dmFoMjlXUy10N3NMYjlEbWxoS0JtSW9Oc280eXRqWVNDOEZZLW1OWXRFdEVwUFl2NXNjSWVTdjNjOXpBcXZ1QUVjZEpiREZEM25YUlVlR1M0UTBUWVF0cVZGaUE4dzQ1cVZvTWFaREh0czBnX2Y5YXY1Mi1Ic3BOSGpRTXROMFhoSWtYU0dDYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 868
    },
    {
      "date": "Jun 03",
      "text": "House passes war powers resolution directing Trump to end hostilities with Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE81cnVNSUc5VUI0VW51ZGRjQzNwdWV6Q1d0TWxVZWsyaXFiVEt1dDAwc0dWb2huX0MyOUJnSDRZZDZrLUpaeU5iaU9JT2xIaEdmbmplNFVBV1VQVzNqVFZlbEI1X1VpOFFWRW9TSjZwbjlyUm9PMkYtR3lwdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 868
    },
    {
      "date": "Jun 03",
      "text": "Iran launches deadly attack on Kuwait airport, killing one and injuring dozens.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 868
    },
    {
      "date": "Jun 03",
      "text": "Iran fires missiles and US strikes an Iranian facility after reports of faltering peace talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOU1BXWkhqeGRkRDRmQURFZW02aWM1NlZyTHl6Q3hIUjhRUUdaMV85bUpCbUl5bjREd1Flbk9YNE9ndldSSExSUkw2M3IzdkpreFRMTnBLaUFWdkRxSVlOY1d3TVN1bFZTZTd0ZVV5UTlsQ1Q3bDI2a3gteXBPdmtMY2J4MmNfdGFtZFg3UXZwU0wxN0VG?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 868
    },
    {
      "date": "Jun 02-03",
      "text": "Iranian attacks on Kuwait airport and Bahrain are condemned by Middle East countries.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxPYjlDZ2xvU3ltT2EySXRxSi1adFRtRVF3RTlJZXlJNUNRZW5DdjhlN1NoeWR5dHE3Wi0zRWR4OUxsQzZhZERRd0ZLc01mdEpBNTZNd0Z5cHo3cGhpN3htRkliUGFfLXNMZ09kTXlmRTVOQXNGbG1pX1lfcm50OTB5ODVZbjM2ZHBOU0N0d3RR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 868
    },
    {
      "date": "Jun 03",
      "text": "Hezbollah rejects the renewed ceasefire agreed by Israel and Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBDX19HLUpiZ2wzMzJfd0VNaUxxazNlXzJXMkRrM2tkUkk5MmtVYllkUUZSWWR3d2RydXRNSzdKdHRqQ281Mkk5ZWpRamlrM3lqTll5LWNQQW5rUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 868
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
      "perspective": "Iran's Stance",
      "headline": "Iran Continues Strikes Amidst Stalled US Negotiations",
      "summary": "Iran's Foreign Minister states contact with the US is maintained but negotiations show no progress, as Iran launches aggressive strikes against neighbors and US assets, framing them as responses to regional dynamics.",
      "tone": "defiant",
      "latestSinceUpdate": 863
    },
    {
      "perspective": "US Response & Internal Division",
      "headline": "US Counters Iranian Aggression While Congress Rebukes Executive Power",
      "summary": "The US condemns Iran's aggressive strikes and actively counters missile and drone attacks, while the House of Representatives passes a war powers resolution, signaling internal political division regarding military engagement.",
      "tone": "strained",
      "latestSinceUpdate": 863
    },
    {
      "perspective": "Israel-Hezbollah Volatility",
      "headline": "Fragile Truce Holds Amidst Hezbollah Provocations",
      "summary": "A partial truce between Israel and Hezbollah is in place, contingent on Hezbollah ceasing attacks, but recent rocket launches by Hezbollah are testing the U.S.-mediated deal, maintaining high regional tension.",
      "tone": "anxious",
      "latestSinceUpdate": 863
    }
  ]
});

export default LATEST_SNAPSHOT;
