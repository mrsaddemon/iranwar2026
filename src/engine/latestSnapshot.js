export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1427,
  "lastUpdated": "2026-07-23",
  "lastSyncedAt": "2026-07-23T14:24:51.206Z",
  "warDay": 146,
  "summary": "The US is conducting ongoing strikes against Iran, with President Trump issuing threats of further attacks on infrastructure, while oil prices are rising due to escalating conflict in the Red Sea and broader Middle East.",
  "lastNarrativeUpdate": "2026-07-23",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation agreement is currently in effect amidst ongoing military actions."
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
        "precision": 0.7,
        "aggression": 0.4
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Jul 23",
      "text": "US military carries out new strikes on Iran for the 11th consecutive night.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxOVG9iYmRIcFFxcEZhd1dOd1VXdFlmRFozbWFuMWR1YVptOG03UUk2VkdhcEdLN29PUENuSUZMeDNNNVdHb1FEcGF6RVFPU1NabWx2QWRWcEFqQm5FQ2t4YUhlODAtOFo4dVhUUGZnZW1RNWRtUGVTNE5PTkZjTGNlbWJqejJCajV6VWl3NXV2SdIBlAFBVV95cUxOX1J5QUlCV1Y1aXAycjhJT3gtMFVQZDAtdE1JT0FpSlEtNlJzN2JfaTFCMDR6UGZMcEk0bVdFZ2VsejlhRlhiWnpsdVQ3WTVmOHZOSllmY192Z1VvSzgwWUlDOWY2MGhZbkF6Q2lhemFnRXU4dUNBdUFfdWNVc2dPVmhmckJDM1BIbVR2eVFrejQ2NWZF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1427
    },
    {
      "date": "Jul 23",
      "text": "President Trump threatens 'heavy attacks' on Iranian bridges, power plants, and Pickaxe Mountain, and 'major military punishment' for Iran and Houthis.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxORlZ5bEhMQlpYV2JLZTRpUkJTblJYa0VGeFhhblVfUkp1TDIzMFl6ZnlIZ2gxbDZJUXBpQmdZXzc0RjQtRmU1cjhXblRCN3lwbG5YNThjR0xLMnRJTklldUNYYzlrLXRjeUJDM0dPTjFBcVZQdUQyU1VZbmtYQ1ZfSld3cUppa1ZaVk4yWVNCYnFpbEJZVkxFaHdjcDVoMWplN2tRV3pTaWJodV9zZGloY0JRYjVTSXpMbUpV0gHAAUFVX3lxTE5Sb3VwbFB3cUlwMkoxU3VEZjBEUjBLZkxyVDFpNUp1WG5PektuUGw4Z1hTWEUzbE14dEd5X3RWMmxiRG4weVJoWHY2emd1N0NFSFY4QzlwZmQ4Q0s3d2NudG9CNTZjRUZxSDMxV0QwaEkxOF9qaTZ2cGJtOFRZVHJSYTR5TTc5b3NWMkJWbThFRnNJdUxJNExpa1M4NlFLN2dWVzJKX25RV2U0a0kwam15Wm8xZU1lTHJpUHVfNkZ1OA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1427
    },
    {
      "date": "Jul 23",
      "text": "Oil price rises above $95, nearing $100, as Red Sea attacks mark a new escalation in the Middle East conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQd3RaMjdqWXNXeFV1R1dnQnpoM2VLTml2ZWtNWE1WcHVrekNraHpPa2dxUjVhZVZmTWJrbkJzYVFrVy1WdWNJSTBDWG5pS0UtZXZJbFVSel9jcUMwMUhGU3U3S0xXSVBsRmFqaDlIRkpSRnlzUlJ0WTFsWnBKanF0NDJJc19TdHQ5WXlUX1JLZGxWV2Q4dkdRRTgwM3U3OGRORVlVbndqbw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1427
    },
    {
      "date": "Jul 23",
      "text": "US identifies a 3rd service member killed in an Iranian attack and surges forces toward the Middle East.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNQ3dEY08zMVhyUGt3S3pwaTU2NzltZjFuNkNQRFNoNVB2WGpfYXQwQW1JR0RmUWdiRnEwTkhXWW9QMmkxMFVoa3lRcGRWQjEtMUV5bGs3VWkyVmhCak1QTGFfOXlGbW1uajZEd0VJbDRSeFpMLVEzMnpoSEZHS3JUTzRnMGxiYkZrcTJYWGQ3bTFGM3NHYlA3UHJqNHJ0WWtYRnJBcWxLaldGR0NWNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1427
    },
    {
      "date": "Jul 23",
      "text": "Lebanese army deploys to three southern villages in a 'pilot zone' after Israeli withdrawal under a US-backed security framework.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxPbFFqSWZlVGRYYWZhN0hVd2k1aXBGb2ltdWktUS1MWEF0bl9yUlVTeGpPc1diWHRGRG11c2Z4ajgzVGp6SVhsYmFpWVRHNlA5bTRTOXpybmk4a05qUFgzaEJORXpxMlhPNXBac3RMeWZlYTdIcVJuZmcya3Uxd3NDLWhZaVZhdUdOdDRORElWZEZkZG4xOHJnOG9hRk4tM183OFdodloxUk5Udw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 1427
    },
    {
      "date": "Jul 23",
      "text": "Iran is reportedly avoiding attack on Israel over fears of IDF strikes on regime leaders.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiakFVX3lxTE9zcGEwdWRPTk9WdHFDVEtHTmR2bXdjcjNyanhRNE45cXVlVHJ1azZaaS1OU0ZkWWp0MnVKR3NONWNHZ1JWTzVCMzNvdWNhTUduMWx1SVVzckRodkRFSFhqdVVqN1RIUXZUanc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1427
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
