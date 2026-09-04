export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2346,
  "lastUpdated": "2026-09-04",
  "lastSyncedAt": "2026-09-04T21:44:32.825Z",
  "warDay": 189,
  "summary": "Recent reports indicate ongoing military strikes between Israel and Hezbollah in southern Lebanon following drone launches, with the Ali al-Taher ridge identified as a flashpoint.",
  "lastNarrativeUpdate": "2026-09-04",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.85,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 65,
    "oilDisruption": 55,
    "tradeImpact": 51,
    "sanctionsPressure": 64,
    "globalPressure": 77,
    "allianceInfluence": 68
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Sep 04",
      "text": "Explainer: Ali al-Taher ridge emerges as flashpoint in Israel-Hezbollah war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxPakRyMlpkYi00X1dGcXhwdmgzYklaeTFicENLWDJVQ2FJUW1JYURrMThUeFM5RUlzcUtJQmV6c0xuNjl0SG9UYUJUZXpGVWYyNmJpNThfTnAzX0pxeGFyczNYMHFVVEhyN0hQR25ERUhHamVxZHBZVHptdXo2c1pHT2E3NUlacEo2LTlIX3BYMVVJWTRKU3J2RHNYU3NTdnN3dWtSRW4zNmhJaFVRSmkxTWZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2346
    },
    {
      "date": "Sep 04",
      "text": "Israel conducts military strikes against Hezbollah targets in southern Lebanon following an explosive drone launch towards IDF soldiers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQY2dOV1l1QTdWZWR1S3p6cVMzb01JV2dhV3d5OVRfTzZ1RXZOLXJ0Z2lEU2lLemhDVklwS0x0c2xPRWdzZG1sT2owUHZkVjF5dEFQU1FMVmwzSUFPbUJBLUkzd01DcnVXNVRsZVhKUk9DenpjMWZ1aFBTOThRMWdQWHJtdlM5VWYwT3MyNVJmazlzb3B6dHJzXzI5QnZqTzhROENzMUpKMXhnVDZob25fWkItbnhTUEZSM0Ezb0hYYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2346
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (4 headlines)"
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
      "headline": "US asserts military dominance, downplays conflict duration",
      "summary": "The Trump administration emphasizes the effectiveness of US military strikes against Iran, stating that renewed fighting will not last long and questioning claims of civilian casualties. Officials highlight successful operations in protecting oil transit through the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2340
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran retaliates against US, warns Israel",
      "summary": "Iran asserts its right to retaliate against US strikes, firing missiles and drones at Gulf neighbors in response to perceived aggression. Tehran also issues warnings to the US against any potential Israeli attacks on Hezbollah-held areas in Lebanon.",
      "tone": "defiant",
      "latestSinceUpdate": 2340
    },
    {
      "perspective": "Regional/Global Concern",
      "headline": "Fears of wider Middle East war and oil disruption grow",
      "summary": "International observers express significant anxiety over the renewed US-Iran conflict, fearing a wider war across the Middle East. Concerns are particularly high regarding the Strait of Hormuz, prompting Asian nations to consider storing oil closer to home.",
      "tone": "anxious",
      "latestSinceUpdate": 2340
    },
    {
      "perspective": "Israeli Stance",
      "headline": "Israel warns Iran while releasing Lebanese prisoners",
      "summary": "Israel issues stern warnings to Iran regarding potential attacks, specifically threatening strikes on energy infrastructure. Concurrently, Israel has begun releasing Lebanese prisoners, a rare move signaling mixed signals in regional diplomatic efforts.",
      "tone": "strained",
      "latestSinceUpdate": 2340
    }
  ]
});

export default LATEST_SNAPSHOT;
