export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 872,
  "lastUpdated": "2026-06-05",
  "lastSyncedAt": "2026-06-05T01:31:51.459Z",
  "warDay": 98,
  "summary": "The Middle East conflict intensifies with Iran's attack on Kuwait and Hezbollah's rejection of ceasefire deals, while the Strait of Hormuz faces significant oil shipping disruptions and US military involvement grows amidst domestic political division.",
  "lastNarrativeUpdate": "2026-06-05",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 94,
    "summary": "Multiple attempts at a ceasefire between Israel and Lebanon, backed by the US, have been rejected by Hezbollah, and an agreed renewal was immediately undermined by an Iranian attack on Kuwait, indicating a collapsed state of de-escalation."
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
        "precision": 0.8,
        "aggression": 0.7
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
    "nuclearIndex": 68,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "text": "An Iran Update Special Report was published.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxNcjNwZU1ndTV0T2FlMW56eHdPSTJMQjlNUE9TcHg1RUNJMXFzOEJEaVd2QzdoSUNaUmloUktjbTlfaS0teXdEeDc2Y29UN0FtT3o5YkF3Q3VrY2lLMTVrc19WUWY1dGh5MVp0Wk96bmZpWnhDSjlqbE01dHdXRVRpUWp2SGdCbDdwVjNLUU9HT2k5YjQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 872
    },
    {
      "date": "Jun 05",
      "text": "Hezbollah rejected a US-backed ceasefire deal between Lebanon and Israel.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 872
    },
    {
      "date": "Jun 05",
      "text": "Israel continued attacks in Lebanon despite ceasefire discussions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNci1FMmVzUHVBVFpfSlNBQ2ozZUhXdk9wWllHM3FfM1IxVVc2cDNwdi1PaVJ6aldDY3JzYlhocTk0V3N6VUU1cHFPVzFaUVhsLWxNNnQweTlwaGMzdV9XZjRPbUpWakk0NV9XU1VOa1ZVWXp0VzJ2R25odmJOd1ZYZHpOYVhWUVEyb2dpOGRlTnpSU1NWSGpfZjZodjNxTWwySl9sdVFTczBib0d5NHBvR3UzU3dhQdIBuwFBVV95cUxPRzF6SWJmbE5YVktwdmw5UnZtNnNUalRzX05ac0Q3QjE2V2NIRGdCT1B3UFlBMlhLN29WWEdNblUwMTQySXBBemxyakQwcEx5LW5MdlpLbldpeDZIVmxrcTJCU1lZYkJQVjlNcXNUcVNleVhKYnVGNHVKMzBLNVEwODhJYl9nZDZ4V1J4bDdhMW1hWWlneXM3dk1wcjJ1eEo5cjVLME9KWmJGQU94Tm9qS1NCYllmelpCTFRr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 872
    },
    {
      "date": "Jun 05",
      "text": "Iran stated 'no tangible progress' was made in ongoing talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxOYlpmbDZCQVFUOFE1aWl0NG9jVWp6MElrRjJzNE5UVTVkelU1anNIYjNvRjZ5bHNLVWM4M1h1UXFvbHRGNXZzS0RxSF9OU21OUm5VQTZwdnIyMVJTVmwyLU5YLWY2RkRRTXFOV05FdW9BYjVodUlYaVNmdTdEVTlkaDFrU2NvYnp4eW5MSlIxSGhDemJZYUxF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 872
    },
    {
      "date": "Jun 05",
      "text": "Iran launched a deadly attack on Kuwait airport.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxNWmVQTjduVEoyLVF3Ym84c25PRXR5dmFoMjlXUy10N3NMYjlEbWxoS0JtSW9Oc280eXRqWVNDOEZZLW1OWXRFdEVwUFl2NXNjSWVTdjNjOXpBcXZ1QUVjZEpiREZEM25YUlVlR1M0UTBUWVF0cVZGaUE4dzQ1cVZvTWFaREh0czBnX2Y5YXY1Mi1Ic3BOSGpRTXROMFhoSWtYU0dDYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 872
    },
    {
      "date": "Jun 05",
      "text": "Ships in the Persian Gulf quietly coordinated with the U.S. Navy to exit the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxQQjcwMnZ6S0hSN3dVQ24zOEdHNzZhM3JyUGNQUFl2TjJTcnpGaDJQaENaSVc5ejBCNFcwSzNmTHl4T3ZvVnFmZ0U5S1RBakZheXdkSC02SjVkbEVQTkFkeXd3VDhtWnJQSl9fTTlUclZheTZqNlVMN3FlenFGTk5xTTBXMFBScTZ1RU94V2h5UVFMenl0QkHSAZsBQVVfeXFMTWM1VFFFNlc3VWdRSXVmV25QbzRwWmx2QzhYMWZZbl9WdUNyc01Cam5kSHNZVWJ3WkphZUhKYmNZcnBkcnhqQTkzaVpLRjM1ZmszNTlkQjRYdl9jdEFiZkdEU2hna19PMU91a3VHemY3QklKeTlMWmczOUsza2RWOW5oY0lyU3pQNXE2M0FhV2ZrR2hkbEotdm9OWk0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 872
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "perspective": "Iran/Hezbollah",
      "headline": "Defiance and Resistance",
      "summary": "Hezbollah and Iran maintain a defiant stance, rejecting ceasefire proposals and continuing military actions, asserting their influence and rejecting external mediation efforts. Iran also reports no progress in broader negotiations.",
      "tone": "defiant",
      "latestSinceUpdate": 872
    },
    {
      "perspective": "US (Trump)",
      "headline": "Assertive US Posture",
      "summary": "President Trump has broadened the U.S. military footprint and issued strong warnings to Iran, signaling a more aggressive stance against perceived threats. However, this approach faces domestic opposition from the House of Representatives.",
      "tone": "strained",
      "latestSinceUpdate": 872
    },
    {
      "perspective": "Global Energy",
      "headline": "Strait of Hormuz Disruption",
      "summary": "Iran's increasing influence over the Strait of Hormuz is causing significant disruptions to global oil shipping, forcing a re-evaluation of energy supply routes and raising concerns about long-term stability in the region.",
      "tone": "anxious",
      "latestSinceUpdate": 872
    }
  ]
});

export default LATEST_SNAPSHOT;
