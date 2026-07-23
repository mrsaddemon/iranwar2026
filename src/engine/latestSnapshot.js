export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1426,
  "lastUpdated": "2026-07-23",
  "lastSyncedAt": "2026-07-23T11:57:27.444Z",
  "warDay": 146,
  "summary": "The US military continues strikes on Iran, which has responded with attacks on Jordan and Houthi actions in the Red Sea, while oil prices have risen amid threats to civilian infrastructure.",
  "lastNarrativeUpdate": "2026-07-23",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire or de-escalation agreement is currently in effect between the primary belligerents."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.95
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.45
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 92,
    "oilDisruption": 85,
    "tradeImpact": 78,
    "sanctionsPressure": 65,
    "globalPressure": 86,
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
      "text": "US military carries out strikes on Iran as both sides threaten civilian infrastructure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQVkxVRHNEai1jeXMzeVdPZVZqZmJvUjBqdTY5ZVZyWEp5bC0yWFJTWldhSlhlbFhoRmEwcFBnNkk0UWdDdHZMWFRXMk5acElxZEFSQ0otZzFQRElSMXdER1NlT0ptZUxVbTRPT3dFM25rOGtsb08yLUdXRll4SkhUZk9QejZ2RWZrb1hLcmhBYktXeEhrTTZIR3FTSTN6RUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1426
    },
    {
      "date": "Jul 23",
      "text": "US announces new strikes underway against Iran; Trump threatens bridges.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOd2d4ajBjWjdUZEplZjlpNS1mWkRLZ2hqU0VUNUx4TXFsVEhVd25ZWWxENGNsWUNidVNiVThJQWhyRHpHYjhZRXFhQ2tQbGxwSFRiZHJ4YmFLZFFaNWVlQ1piRVYwYUtXcGZGaTBZaEp1a2J3X2VseGpRUmUwZEU3Mm1oVzN2TnZwU05pLVFBOExkUVI4YlBJLWhIbEp0ME43VXlHeGhKNEJUVy03WEZROUtJeXJqVmUzaDBCONIBwgFBVV95cUxNZnlKX1pwZUQxSFo1NnE3ZF85MmRwWE84UmhaaEdvQmtXYmtxTEI4dVRFU19XSGZtU1VTdkQtajN1Q3pkNEN5akcwalBUTlNYUTJYbVZOZkQtX21ET3c3U19ZaUwwTHY3M2o4b1NsYUpEcnhtTEpaOWZLVlhNcUF3X0RMNzNRdzFxbzFoQ2FoNkluS1ZHVllwb3o0d092UWY2dVB3UEQwOHNZMEVwR3pvdWJaeWJSTkNQbnpyLWhSTzB4QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1426
    },
    {
      "date": "Jul 21",
      "text": "Pete Hegseth testifies at hearing on Iran funding, stating war cost $37.5 billion.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTE5WYjgtQWNmYVdvQVhUMnhaNHpfUVVfalROWG9wTnlxNi14aV9WTkFYWG5fU2NFQmY0aFRQbm5CWlFSQVBld0xiRGNoOUpWbldSeUxYTFdpQWw4a2RRX3dlNFN0RGRjdHNuUEY1b0pxY3lZY1E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1426
    },
    {
      "date": "Jul 23",
      "text": "Trump threatens ‘heavy attacks’ on Pickaxe Mountain in Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxORlZ5bEhMQlpYV2JLZTRpUkJTblJYa0VGeFhhblVfUkp1TDIzMFl6ZnlIZ2gxbDZJUXBpQmdZXzc0RjQtRmU1cjhXblRCN3lwbG5YNThjR0xLMnRJTklldUNYYzlrLXRjeUJDM0dPTjFBcVZQdUQyU1VZbmtYQ1ZfSld3cUppa1ZaVk4yWVNCYnFpbEJZVkxFaHdjcDVoMWplN2tRV3pTaWJodV9zZGloY0JRYjVTSXpMbUpV0gHAAUFVX3lxTE5Sb3VwbFB3cUlwMkoxU3VEZjBEUjBLZkxyVDFpNUp1WG5PektuUGw4Z1hTWEUzbE14dEd5X3RWMmxiRG4weVJoWHY2emd1N0NFSFY4QzlwZmQ4Q0s3d2NudG9CNTZjRUZxSDMxV0QwaEkxOF9qaTZ2cGJtOFRZVHJSYTR5TTc5b3NWMkJWbThFRnNJdUxJNExpa1M4NlFLN2dWVzJKX25RV2U0a0kwam15Wm8xZU1lTHJpUHVfNkZ1OA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1426
    },
    {
      "date": "Jul 23",
      "text": "Expert states Iran is avoiding attack on Israel over fears of IDF strikes on regime leaders.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiakFVX3lxTE9zcGEwdWRPTk9WdHFDVEtHTmR2bXdjcjNyanhRNE45cXVlVHJ1azZaaS1OU0ZkWWp0MnVKR3NONWNHZ1JWTzVCMzNvdWNhTUduMWx1SVVzckRodkRFSFhqdVVqN1RIUXZUanc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1426
    },
    {
      "date": "Jul 23",
      "text": "US attacks Iran for 11th consecutive night.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxOVG9iYmRIcFFxcEZhd1dOd1VXdFlmRFozbWFuMWR1YVptOG03UUk2VkdhcEdLN29PUENuSUZMeDNNNVdHb1FEcGF6RVFPU1NabWx2QWRWcEFqQm5FQ2t4YUhlODAtOFo4dVhUUGZnZW1RNWRtUGVTNE5PTkZjTGNlbWJqejJCajV6VWl3NXV2SdIBlAFBVV95cUxOX1J5QUlCV1Y1aXAycjhJT3gtMFVQZDAtdE1JT0FpSlEtNlJzN2JfaTFCMDR6UGZMcEk0bVdFZ2VsejlhRlhiWnpsdVQ3WTVmOHZOSllmY192Z1VvSzgwWUlDOWY2MGhZbkF6Q2lhemFnRXU4dUNBdUFfdWNVc2dPVmhmckJDM1BIbVR2eVFrejQ2NWZF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1426
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
