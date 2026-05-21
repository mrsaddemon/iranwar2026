export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 729,
  "lastUpdated": "2026-05-21",
  "lastSyncedAt": "2026-05-21T23:36:35.559Z",
  "warDay": 83,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-21",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 3,
    "summary": "A ceasefire between Israel and Hezbollah is in effect but is being actively violated by continued clashes and Israeli strikes in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
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
      "date": "May 20",
      "text": "Trump signals a nuclear deal with Iran may be possible but warns of attacks in 'two or three days' if no deal is reached.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQbTlFd3h6a0dEY2xzZDhJR0pOcFBpSGU1VkZHM1dPbnJPNmZnbU95TG5LSm81MFZwZjY4NnM4QURoY2RFajltcE1OZlA4MVJhX1M4bHhpTGg5ZWJ6SFItUVN1bENBdF93dGxnUFFVYVk0ekZ1bGFEbnlLTUhlQnd1NkdhaW5JWVQtdWJjb1F1ZVhPRVR0WGVWalFsQ1BmUG5CdU5pQW9sY19mR2ZESUhwc2dqbGRVQ3NmZU53dkdnbw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 729
    },
    {
      "date": "May 20",
      "text": "Israel launches an air strike on Beirut as the US reports attacking an Iranian-flagged ship.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 729
    },
    {
      "date": "May 20",
      "text": "Iran steps up its claim to control the Strait of Hormuz and is in talks with Oman over a permanent toll system.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1BWFlRVzBGQnRxMk55Vzg1Ymw3LVkwZmlnaGhJN09nazFPb3plNE9hTGU0aHF1U3ZzSUMyX3YtRXRPWWV0U2t5ei1mbzJZbWN1NVZUTHpvcUtidw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 729
    },
    {
      "date": "May 20",
      "text": "US military boards an Iranian-flagged oil tanker in the Gulf of Oman suspected of trying to breach a blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQYk44NDJqQmZtaTZFYTNxdzNHdkVnbmJBQ29hWFRpVjFHbG9oalk0ZGNhX3o4RUFDbkFMb2c0dkxpR0ZfMWxwdmVROHM3QlVfTS14eExMWldjMW9lUGpwRERGWVRXYVI2NGkxSTdkZ2tnc1lneldYSDBPektTZGNIcGR3aTlGZWc3Tnk5c0dUVjZoQWd5NV96ZkZKMGs5M3JWemc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 729
    },
    {
      "date": "May 20",
      "text": "Israeli strikes on Lebanon kill at least 19 as clashes with Hezbollah continue despite an existing ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPWmJQWGtnRWdqTlUtM1hoa3BoM1VtalYxc3Bsa2ZnTHhCZFBQN2p6R2VGVjBIM1FaQVpfNzF0YUtrRHVLa1lvMnh2M0QzV2JZb2xCQTdEcVpXOWJEWWtsWC1OaEticEJfb2M5YXpva1VXV0NvdTc4ZkxwaVdpRlJnM2x3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 729
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
      "perspective": "US Diplomatic/Coercive Stance",
      "headline": "Trump Balances Iran Deal with Strike Threats Amidst Senate Rebuke",
      "summary": "The US administration, led by Trump, is pursuing a deal with Iran while simultaneously issuing warnings of military action if negotiations fail. This dual approach is complicated by a Senate measure seeking to limit US military engagement in Iran.",
      "tone": "strained",
      "latestSinceUpdate": 720
    },
    {
      "perspective": "Iran's Strategic Posturing",
      "headline": "Iran Accuses US, Threatens Israel While Weighing Deal",
      "summary": "Iran is examining a US proposal for a deal, yet simultaneously accuses the US of covert hostile actions and threatens massive missile retaliation against Israel if conflict resumes. This indicates Iran's attempt to project strength and leverage in the ongoing situation.",
      "tone": "defiant",
      "latestSinceUpdate": 720
    },
    {
      "perspective": "Regional Instability & Oil Security",
      "headline": "Lebanon Conflict Persists, Hormuz Bypass Underway",
      "summary": "Despite a truce extension, the conflict between Israel and Hezbollah continues in Lebanon, resulting in a high death toll. Concurrently, regional players like the UAE are advancing projects to mitigate potential oil disruptions in the Strait of Hormuz.",
      "tone": "anxious",
      "latestSinceUpdate": 720
    }
  ]
});

export default LATEST_SNAPSHOT;
