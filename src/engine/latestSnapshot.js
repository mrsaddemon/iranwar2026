export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1424,
  "lastUpdated": "2026-07-23",
  "lastSyncedAt": "2026-07-23T07:22:55.344Z",
  "warDay": 146,
  "summary": "The United States and Iran are engaged in escalating conflict with ongoing US strikes and reciprocal threats, while Houthi forces threaten Red Sea oil routes, and Israel completes a withdrawal from southern Lebanon.",
  "lastNarrativeUpdate": "2026-07-23",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect between the primary belligerents, with ongoing military actions and threats."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.3
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 88,
    "oilDisruption": 85,
    "tradeImpact": 77,
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
      "date": "Jul 22",
      "text": "US military carries out strikes on Iran as both sides threaten civilian infrastructure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQVkxVRHNEai1jeXMzeVdPZVZqZmJvUjBqdTY5ZVZyWEp5bC0yWFJTWldhSlhlbFhoRmEwcFBnNkk0UWdDdHZMWFRXMk5acElxZEFSQ0otZzFQRElSMXdER1NlT0ptZUxVbTRPT3dFM25rOGtsb08yLUdXRll4SkhUZk9QejZ2RWZrb1hLcmhBYktXeEhrTTZIR3FTSTN6RUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1423
    },
    {
      "date": "Jul 22",
      "text": "US attacks Iran for 11th consecutive night, with new strikes reported underway.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxOVG9iYmRIcFFxcEZhd1dOd1VXdFlmRFozbWFuMWR1YVptOG03UUk2VkdhcEdLN29PUENuSUZMeDNNNVdHb1FEcGF6RVFPU1NabWx2QWRWcEFqQm5FQ2t4YUhlODAtOFo4dVhUUGZnZW1RNWRtUGVTNE5PTkZjTGNlbWJqejJCajV6VWl3NXV2SdIBlAFBVV95cUxOX1J5QUlCV1Y1aXAycjhJT3gtMFVQZDAtdE1JT0FpSlEtNlJzN2JfaTFCMDR6UGZMcEk0bVdFZ2VsejlhRlhiWnpsdVQ3WTVmOHZOSllmY192Z1VvSzgwWUlDOWY2MGhZbkF6Q2lhemFnRXU4dUNBdUFfdWNVc2dPVmhmckJDM1BIbVR2eVFrejQ2NWZF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1424
    },
    {
      "date": "Jul 22",
      "text": "Houthis threaten a Red Sea blockade, putting the oil market at greater risk, and attack two Saudi oil tankers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOQVI2TFJjMFduMWRzZ1B6dEYtWWVTcHYyWFJ6NjVaNlpzaWxleklxUmNRMVFfMzlCNjhhU21mMmNoTk9zTjZ2NGZZbGxNR3FXYzQyM29uc3N1bkNXLURCTmwtNHF5RU5xNHVNQWlnR0hYanhOeXV1SzgyN1dVam5vZElpZ2NENktUTUFhX2RLdi15UXBZZTRWUkZNT3Q5bW9melEtN0R1Z0ZPeldvOFl5WS10czRjbVE0TXpWR2RIZ9IBxAFBVV95cUxOYTJ6dmJvYTV3RkFscUNkQVNjMEVLZUN5TGVydTVEd2VHeXp3YkU1blpTX1Vrb2Q1SVBUaTVYSm4wV2VjUWlsMmwzZWRKYkpiaEdSSEpGaUVlSEpuRzMzX09nczZ5RGVqTWgzRGpCQ09rWEpPQjduQnJkdVZOanFldk84aHZyZEc5UE5LU1dkUnpxUDlVUEtBTmtQZUVhaW9hWVp6d2xuYm55a0ZsUnU1ak5RMFFyejU2ZEdRdlVpSDh5dEh1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1424
    },
    {
      "date": "Jul 22",
      "text": "Oil prices climb after a tanker was struck off Saudi Arabia and Trump escalates Iran threats.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxOTmctMzlYU1FiQlBvdGFwemtzeWE4MnZPR3pIeV8zSUYyWG90d2dfdlBKYmFoRjU2TFlKUUhPWklaclgzRWgtZW03Z09fOURWdlEweXNvY3dYdzFYdnY4U182ZW1RZHVweDVTUW9NUE5va00tREQxTHM5Qy1UQ0pSdExsQmpSbFlD0gGOAUFVX3lxTFBrRTdDSTVkeWFvYkd6ZGdfRnNDeUJ1QmE1UjBKUE1QWU01T0hwM2xPTXJMdHRWZTQ2Zzd5cGNFbDFRakVMN0VoQlVsUEd1UlpvMlgzS2JrcDhORVhqb0JIOUpMSmRqZW0zdVZmWGU4c0Vkd2Z5aDBiajh4VHVSajEtT1VBODZaZXNjTGZjQ1E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1424
    },
    {
      "date": "Jul 22",
      "text": "Several US service members are reported killed or missing in the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiX0FVX3lxTE1FU1VHOEk5Zy00TnUtSVd3Z2hCdXMzcEo0bjcwS19TLWpKZFNVeDdnNDg2MlNIZWdHVy1JTGFaRHc2YkcxdjI0SlAzUTVvZzQ1dUhjVjBzXzFXMG1oc19R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1424
    },
    {
      "date": "Jul 22",
      "text": "Lebanese army troops are deploying in a 'pilot zone' following a complete Israeli withdrawal from southern villages.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5CWVVsOEJFcFdFU2RfS0lkeHZTY2d0VnRsdkNzUnVtTVQzNV9Sa1NTXzExWGZWQzZZX2thUnNrX2dKYm9pdlgzZnh3Z0RzZ2hyTUZYMVZabjJodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1424
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
