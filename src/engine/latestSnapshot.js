export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1423,
  "lastUpdated": "2026-07-23",
  "lastSyncedAt": "2026-07-23T04:38:31.388Z",
  "warDay": 146,
  "summary": "The United States and Iran are engaged in direct military conflict, with US strikes ongoing for the 11th consecutive night and both sides trading threats regarding civilian infrastructure and the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-23",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation is in effect between the primary belligerents; direct military actions and threats are ongoing."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "precision": 0.8,
        "aggression": 0.6
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
    "nuclearIndex": 60,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Jul 22",
      "text": "US military carries out strikes on Iran as both sides threaten civilian infrastructure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQVkxVRHNEai1jeXMzeVdPZVZqZmJvUjBqdTY5ZVZyWEp5bC0yWFJTWldhSlhlbFhoRmEwcFBnNkk0UWdDdHZMWFRXMk5acElxZEFSQ0otZzFQRElSMXdER1NlT0ptZUxVbTRPT3dFM25rOGtsb08yLUdXRll4SkhUZk9QejZ2RWZrb1hLcmhBYktXeEhrTTZIR3FTSTN6RUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1423
    },
    {
      "date": "Jul 22",
      "text": "US attacks Iran for 11th consecutive night, with President Trump threatening 'heavy attacks' on Pickaxe Mountain and targeting bridges and power plants.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxOVG9iYmRIcFFxcEZhd1dOd1VXdFlmRFozbWFuMWR1YVptOG03UUk2VkdhcEdLN29PUENuSUZMeDNNNVdHb1FEcGF6RVFPU1NabWx2QWRWcEFqQm5FQ2t4YUhlODAtOFo4dVhUUGZnZW1RNWRtUGVTNE5PTkZjTGNlbWJqejJCajV6VWl3NXV2SdIBlAFBVV95cUxOX1J5QUlCV1Y1aXAycjhJT3gtMFVQZDAtdE1JT0FpSlEtNlJzN2JfaTFCMDR6UGZMcEk0bVdFZ2VsejlhRlhiWnpsdVQ3WTVmOHZOSllmY192Z1VvSzgwWUlDOWY2MGhZbkF6Q2lhemFnRXU4dUNBdUFfdWNVc2dPVmhmckJDM1BIbVR2eVFrejQ2NWZF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1423
    },
    {
      "date": "Jul 22",
      "text": "Iran's IRGC states it stopped ships from sailing through the Strait of Hormuz, prompting US discussions on reopening the strait by force.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxNTHdUWmJzaENqQ3d4cU5PV0oybGVDd0gtcHFfeEhNV0FHX1pVNnNkbVdTTFpXSnlQYjI0YjJtWWJGMUZsOHd6N25kLXl0X0dNcUNXaXF0aXU4X2Y0WldtWEN6QWtqMWdKU3R2Nm5MQ3pLUlBXLXBqNTVtWjZCbXhZWm02eFpscnJfYUVxZTNReWUtc1VmSHFMTlJCYU5nSGNSYmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1423
    },
    {
      "date": "Jul 22",
      "text": "Iran's FM Araghchi describes surviving Israel's opening strikes, stating 'Everything was in ruins'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTE56M3NPT25BaFFEcmZYWThOZTZ5UlRFVjNnQXRJMEZPb2U2VXhLWWlmUjFjZDl6ME5rZW1KWWtNOWRyWUE4TElRLWttZDRkWTNBc3M2SlRTeGROM1U4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1423
    },
    {
      "date": "Jul 22",
      "text": "Lebanese army deploys to three southern villages in a 'pilot zone' following an Israeli withdrawal, under a US-backed security framework.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxPbFFqSWZlVGRYYWZhN0hVd2k1aXBGb2ltdWktUS1MWEF0bl9yUlVTeGpPc1diWHRGRG11c2Z4ajgzVGp6SVhsYmFpWVRHNlA5bTRTOXpybmk4a05qUFgzaEJORXpxMlhPNXBac3RMeWZlYTdIcVJuZmcya3Uxd3NDLWhZaVZhdUdOdDRORElWZEZkZG4xOHJnOG9hRk4tM183OFdodloxUk5Udw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 1423
    },
    {
      "date": "Jul 22",
      "text": "Reports indicate recent damage to U.S. military sites in the Middle East, while a Houthi Red Sea threat is noted to challenge a stretched US military.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxPOThodmVRdFZqSlZuSnpSMDJBb1dkX1NUam1GcVJsRWlHcV9qM0x6MUhXRlJtRXd3MWdKMHpYOVFvUGZjcmUtR1pkSTZsUEd2M2xZS1YtUGRqUkhteGw5QzR6a1ZhcG4wR1c4LXUzaXZrN3ctTlI2Vkc4NzlnUlRBb01pY3kxRTlweVFDWGMydnpsLThrUGlXamcxX3RDTnFpVXFwY1FJT01LRU1pVEdxdW1pQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1423
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
      "perspective": "US Stance",
      "headline": "US warns Iran on Hormuz, continues strikes",
      "summary": "US officials warn Iran's demands over the Strait of Hormuz are a dangerous precedent, while the US continues military strikes and threatens further heavy attacks in response to Iranian actions and troop deaths.",
      "tone": "defiant",
      "latestSinceUpdate": 1422
    },
    {
      "perspective": "Iranian Actions",
      "headline": "Iran continues attacks, avoids Israel",
      "summary": "Iran continues its attacks and makes demands regarding the Strait of Hormuz, while reportedly avoiding direct attacks on Israel due to fears of retaliatory strikes on its leadership.",
      "tone": "defiant",
      "latestSinceUpdate": 1422
    },
    {
      "perspective": "Regional Stability",
      "headline": "Lebanese army deploys in pilot zone",
      "summary": "The Lebanese army has deployed in a southern 'pilot zone' following an Israeli withdrawal, indicating a localized de-escalation in that specific area amidst broader regional tensions.",
      "tone": "strained",
      "latestSinceUpdate": 1422
    }
  ]
});

export default LATEST_SNAPSHOT;
