export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 956,
  "lastUpdated": "2026-06-13",
  "lastSyncedAt": "2026-06-13T16:50:57.220Z",
  "warDay": 106,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-13",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 100,
    "summary": "A claimed Lebanon truce by Iran, including IDF withdrawal, is contradicted by ongoing Israeli strikes, indicating extreme fragility."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.65
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Jun 12",
      "text": "US and Iran say an agreement is close, but questions remain regarding a potential deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTFBmSE93eGkwYURDS3JDRWVOWEhTSjRSbmE0bThZeTdDak1qdkh0Q08wbnF6aTdKYTFBTGJWYk84VkFLbEFkMUpKSE9jYjR3ZmJjM2Vrbktpa2dnY0FqQTNIbGx2ZS1vU2l6M1hra3RoM3RoMExQeWpr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 956
    },
    {
      "date": "Jun 12",
      "text": "Israel carries out air strikes on Lebanon, with reports of 12 fatalities.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WbDM5eldoWW54T1NESmcxenViSnhRMk1VaWh2UjB5eF9Lb194QW1IUmt1QUxLLUc5VF9Vc1RHNS1iTENwcTNMaHVJV2haaGx2UXZhN04wSFNodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 956
    },
    {
      "date": "Jun 12",
      "text": "Kuwait closes its airspace, and Israel warns of potential launches from Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE5JRzk3dDJ5dEFyWGw2dGY2Z0hxUy12c29QVElKMUxxNUYzeVdMVXBiWm9vZUlxYzBzakpMOGsyMVhLZ2p1WnByX2dkVWVwNi1uNmt2UWZwdU5ZaG90Vm9DQWs5OGhUSWtfdGlYTjU2TVA3d9IBd0FVX3lxTE1MeFk0ZWNVVUM5X2xWaVRCN1IyVDFxMjcwWERtUjlXWS10UmFMdVBpMlZ4akhDSWRBR09QVjA4SjBUX0VhVnl6YTMtOFdwVEd6Q1R5S2tVSmJQZ1c4YlNCTXIxemM5Z2w1RWljYl9zQ21EWFc0bGxN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 956
    },
    {
      "date": "Jun 12",
      "text": "A tanker was hit by an 'unknown projectile' near Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxPc3JyS0owTHNiOXVLejVocXd2Nl82aEtCYUxCa082QWc1MFZkUkNYcnZnbDRCM3owSWhwZ3R1Q1Z0dnptaXZDckhld3pHZUdESFppQU5FNmh2cTBENW1rTnVkenJmOTRScWF5SVB0RDhWMnpkTmhLUmlfd3ZqNWM3c3M1MWNMdlMyVXVyZ0tiQWlkSEF5SjJPazZtc1VnbzVIYmthbmItdGNIMU5faGpQRjAyTHRPUXFvSGF2MVdPVHdRT2VvTVVfWVpsWW83RjZJYzNBclpOQTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 956
    },
    {
      "date": "Jun 11",
      "text": "Hezbollah drone strikes a military zone in northern Israel; no injuries reported.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNZjJQZHBvcHZvbExucVNsS2FNdkRvcEVMaTZMdXduXzhEdi03eEhReDNCUm44Q3ZfV2o5cmR6VENCV0t6RU96QnVOdTVJNVdqZ3hiTkx1RDlOOUJnNUJWT1EzRzFBcDBrVDJWZjdyMk9POFdSOHJkdzZlZ3MtQWtXSG5UbnV6RUQwaDl5M0FuenVSYWpmbjRIY0hXX2RmdHlxVXNmQzZrZWZxVDgtbmd2cWRJNTA0VHBOZGtCdHd0Zmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 956
    },
    {
      "date": "Jun 11",
      "text": "US military shoots down multiple Iranian drones.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxPOTktdERRTXhHZVNZOXJQeHFzNHZuOFdLWW80UTJ0VGZpaGpQQTFNcHpNX3k4Z3ZiOF90TTVFeUtOTzQwMTg1QkVxNjBCTWc5VXRBbjJzM050QjZ5dnNPVl94Vk1VcUh5dWhkMWc5WHdCOFFpNi1yYk8xT3c0RW9fUGJxRWVTWkxqMWNFSllwQTlJMndiZzVUbHg4cnZUaldJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 956
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
      "status": "unavailable"
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
      "perspective": "US Administration",
      "headline": "Trump Touts Deal Progress, Cancels Strikes",
      "summary": "President Trump claims significant progress in talks with Iran, leading to the cancellation of planned strikes and signaling a potential de-escalation of direct conflict. This narrative emphasizes diplomatic breakthroughs.",
      "tone": "neutral",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Denies Deal Finalized, Warns on Hormuz",
      "summary": "Iran acknowledges ongoing negotiations but denies a deal is finalized, maintaining a defiant posture regarding the Strait of Hormuz and leveraging Lebanon as a strategic asset. This perspective highlights caution and continued leverage.",
      "tone": "defiant",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Israel Escalates Against Hezbollah Amidst Talks",
      "summary": "Israel continues military action against Hezbollah in Lebanon, with the IDF poised for further offensives, indicating persistent regional tensions despite US-Iran diplomatic efforts. This narrative focuses on ongoing localized conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "International Mediation",
      "headline": "Pakistan Claims US-Iran Deal Text Agreed",
      "summary": "Pakistan's Prime Minister asserts that a 'final text' of a US-Iran deal has been reached, suggesting international efforts to broker an agreement are advancing. This perspective offers a more optimistic view of the diplomatic process.",
      "tone": "neutral",
      "latestSinceUpdate": 950
    }
  ]
});

export default LATEST_SNAPSHOT;
