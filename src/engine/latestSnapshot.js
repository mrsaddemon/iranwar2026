export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 955,
  "lastUpdated": "2026-06-13",
  "lastSyncedAt": "2026-06-13T15:13:22.127Z",
  "warDay": 106,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-13",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 100,
    "summary": "Reports of a US-Iran deal are circulating, but details are contested and no formal ceasefire is active in the broader conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
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
    "nuclearIndex": 58,
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
      "date": "Jun 12",
      "text": "US and Iran reportedly close to a deal to end their war, with Pakistan mediating.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 955
    },
    {
      "date": "Jun 12",
      "text": "Israel carries out air strikes on Lebanon, killing 12, and warns of launches from Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WbDM5eldoWW54T1NESmcxenViSnhRMk1VaWh2UjB5eF9Lb194QW1IUmt1QUxLLUc5VF9Vc1RHNS1iTENwcTNMaHVJV2haaGx2UXZhN04wSFNodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 955
    },
    {
      "date": "Jun 12",
      "text": "Kuwait closes airspace following reported US strikes in Iran, though Trump later 'cancels strikes'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxQcVotVXBtSFIzWjE4NGk0ZXRDWGFqbGlENTNETFBsaGJRSmdFLWJBaFZiY2tQMjBjSm4wMXl5azV2emN3OG1kMVk3c21WZUxqanAyTVp4UmZ6UHRSM0FNMl81djVvNm5aWlpDQUliLUxrMU5paVRmSFgwNzNJVXIyRVBvcEl5TnQ2Ml9ESllaM0hIZkJTeU5rR2JFSWFlNEZtSmhPT2JJSTdCdFpSYkNQWdIBtgFBVV95cUxQNDVBLWpPLXZ3Nzh4NDJiMy1Wb2ZxU0NFOGJXUTREYUt1bFpRNmJIZkJrSlNlUmhVVWh6Z3doU0pFX3A2U2ZXbEhOMVpJQ2lZQ25heEJQV2Y3b29zZ3U5cHNqblhPbXdJMllxUVJ2b1VsanRQV1R5U1h2NXItTWs1RjJmRVk3TThWTERqdXZKam42VUNtVWs5RTJhaEwtbUJFZXRQY2xiYXNCeEsyMWNNRUt2X2FaZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 955
    },
    {
      "date": "Jun 12",
      "text": "Tanker hit by 'unknown projectile' near Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxPc3JyS0owTHNiOXVLejVocXd2Nl82aEtCYUxCa082QWc1MFZkUkNYcnZnbDRCM3owSWhwZ3R1Q1Z0dnptaXZDckhld3pHZUdESFppQU5FNmh2cTBENW1rTnVkenJmOTRScWF5SVB0RDhWMnpkTmhLUmlfd3ZqNWM3c3M1MWNMdlMyVXVyZ0tiQWlkSEF5SjJPazZtc1VnbzVIYmthbmItdGNIMU5faGpQRjAyTHRPUXFvSGF2MVdPVHdRT2VvTVVfWVpsWW83RjZJYzNBclpOQTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 955
    },
    {
      "date": "Jun 12",
      "text": "US military downs Iranian attack drones.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi5gFBVV95cUxOWXZFVFVpaWpJR2d1WDM0eklhWVF4SjllZ1RkdXVvTmY4N1VySzRQd3k5TGdHdGQtQ0RnLUthcXRQakdxcUtxejFSblFLWlRQODhIaUtKN2dGcUpDX01LTVdERXJ3WnFMckRwWS1qSjdQaUxCVThCMzExOXNHcl8yM3oyX3ZmdnlITEJsUjl6RGpaZFp5NjlZdFNKcmRLUEF1MXY2ZkhrdTlvZ0lpODZaR2RyT0ozYUhRdUFJaWg5TVkxb0pmM0htTE5LLUVmM0pOcHRLWGVndmJGNGJ4UWpWc1oyaXFRUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 955
    },
    {
      "date": "Jun 12",
      "text": "IDF poised for offensive against Hezbollah in southern Lebanon city.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMizwFBVV95cUxOc3JWYzF6eUdPVFpYLWktcXZfaXkxNGFUSFVsd2VEM0hqRzhLSk9MeURQeEktUko4aVFyd0UtbnJtdzRvUS1pc09tUm5HUkRaSm8wd3VJLUlQUVM3MWt2aVBRdUxQdHNGaXpncGZkNC1JcE5CWFluemlKbzhnX3paNXR3VGNyVEY1WGJDbGZQUkVwUXd0aFFfajVEWktqR3RmbTlvYUVKX0pTRmdzaFZIQTRSaWx1dlFNQmQwRmpGbmdyckxZNlhvTHJNR0tYWHfSAdQBQVVfeXFMTXpWN1JMOTVERFlESHFEVGNmdVo0M1UxZGFhdWFoUGVPcjZZRno0ckN4aG5ueDVidVZiQkNZblBMQmZCQkl6N3p4QVJpa3JacFRndVUyRGJpNmFLXzBzelhkYjh1Y1VEcmYzbDdTbURkckRic1VrNnBUd3hnRDJfUzh2dllNTnNCOXBqTGJTNHZIUDN2MzBCRGtxMXhGWFRINUNjQWE2Zk1SazNBZXhoZ1dPV1VDWWdfcFlzRm9iSHhrU2ZCRFBPM2NBa01HZlJKNnRJYnU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 955
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
