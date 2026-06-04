export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 869,
  "lastUpdated": "2026-06-04",
  "lastSyncedAt": "2026-06-04T20:17:17.025Z",
  "warDay": 97,
  "summary": "The conflict continues with ongoing strikes between Israel and Hezbollah, a recently agreed ceasefire has been rejected by Hezbollah, and Iran launched a deadly drone attack on Kuwait airport, while the Strait of Hormuz remains closed for 94 days.",
  "lastNarrativeUpdate": "2026-06-04",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 94,
    "summary": "A ceasefire agreement between Israel and Lebanon, secured by the US, has been repeatedly rejected by Hezbollah, leading to its collapse and continued hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "text": "Israel and Hezbollah trade strikes, casting doubt on a new ceasefire.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 869
    },
    {
      "date": "Jun 03",
      "text": "US House passes war powers resolution directing President Trump to end hostilities with Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE81cnVNSUc5VUI0VW51ZGRjQzNwdWV6Q1d0TWxVZWsyaXFiVEt1dDAwc0dWb2huX0MyOUJnSDRZZDZrLUpaeU5iaU9JT2xIaEdmbmplNFVBV1VQVzNqVFZlbEI1X1VpOFFWRW9TSjZwbjlyUm9PMkYtR3lwdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 869
    },
    {
      "date": "Jun 03",
      "text": "Hezbollah dismisses and rejects a new Lebanon ceasefire, stating deadly Israeli attacks continue.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNci1FMmVzUHVBVFpfSlNBQ2ozZUhXdk9wWllHM3FfM1IxVVc2cDNwdi1PaVJ6aldDY3JzYlhocTk0V3N6VUU1cHFPVzFaUVhsLWxNNnQweTlwaGMzdV9XZjRPbUpWakk0NV9XU1VOa1ZVWXp0VzJ2R25odmJOd1ZYZHpOYVhWUVEyb2dpOGRlTnpSU1NWSGpfZjZodjNxTWwySl9sdVFTczBib0d5NHBvR3UzU3dhQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 869
    },
    {
      "date": "Jun 03",
      "text": "Israel and Lebanon agree to renew a ceasefire, despite Hezbollah's rejection.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxNWmVQTjduVEoyLVF3Ym84c25PRXR5dmFoMjlXUy10N3NMYjlEbWxoS0JtSW9Oc280eXRqWVNDOEZZLW1OWXRFdEVwUFl2NXNjSWVTdjNjOXpBcXZ1QUVjZEpiREZEM25YUlVlR1M0UTBUWVF0cVZGaUE4dzQ1cVZvTWFaREh0czBnX2Y5YXY1Mi1Ic3BOSGpRTXROMFhoSWtYU0dDYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 869
    },
    {
      "date": "Jun 03",
      "text": "Iran launches a deadly drone attack on Kuwait airport, killing one and injuring dozens.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 869
    },
    {
      "date": "Jun 03",
      "text": "Ships stranded in the Persian Gulf quietly coordinate with the U.S. Navy to exit Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxQQjcwMnZ6S0hSN3dVQ24zOEdHNzZhM3JyUGNQUFl2TjJTcnpGaDJQaENaSVc5ejBCNFcwSzNmTHl4T3ZvVnFmZ0U5S1RBakZheXdkSC02SjVkbEVQTkFkeXd3VDhtWnJQSl9fTTlUclZheTZqNlVMN3FlenFGTk5xTTBXMFBScTZ1RU94V2h5UVFMenl0QkHSAZsBQVVfeXFMTWM1VFFFNlc3VWdRSXVmV25QbzRwWmx2QzhYMWZZbl9WdUNyc01Cam5kSHNZVWJ3WkphZUhKYmNZcnBkcnhqQTkzaVpLRjM1ZmszNTlkQjRYdl9jdEFiZkdEU2hna19PMU91a3VHemY3QklKeTlMWmczOUsza2RWOW5oY0lyU3pQNXE2M0FhV2ZrR2hkbEotdm9OWk0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 869
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
