export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2753,
  "lastUpdated": "2026-11-19",
  "lastSyncedAt": "2026-11-19T17:16:50.625Z",
  "warDay": 265,
  "summary": "Direct military actions between the US and Iran have escalated with US strikes on Qeshm Island and subsequent Iranian attacks on Kuwait and Bahrain, while concerns over Iran's potential WMD development are being voiced.",
  "lastNarrativeUpdate": "2026-11-19",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No ceasefire is currently active amidst ongoing military engagements."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 70,
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
      "date": "Nov 18",
      "text": "U.S. launches strikes on Iran's Qeshm Island in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxNbEJURjBQYXVkNTJSWEMyUlRrbFJ3NjJETGptNjYxX1JSS3lob1NOekp3WkZYcDdWVUtEaFRHYlpzUGg5d1FlNDE0QWdhMmtoUzBJb2piaWZFZWF3OFBaNjY1dTJMMldkdTVtNE1lWFJadlhpRFdFeWZYam5zN3RwWmFiSUw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2753
    },
    {
      "date": "Nov 18",
      "text": "Kuwait, Bahrain face new Iran attacks after US strike on Qeshm Island.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNdTNrNm5hd0NlSW9sNVo1VDVMVDA3eEtIMXhDdzJ3LTVjbGNxQ1J3dEVnWFFuMlQxTjVGYVhWaWVVaW5yRHJ3LWFrNkYwMGZjN3FrSENvdDlpQTRLNUNUQUhjb3hUX3BoUWRwMW5iSGZENWo3dm1xeUZIOU1FZm9EZDV5bHZYLU5mTENabEpoa1Y1ZEQyZXNZQk9sQkRzVVpNQ0VpR1lSdjBFRjRBNXow0gG0AUFVX3lxTE4xUnJGLWRBLUtPLWw0TjhrZjNZQUFVcmlHSjZrSURWSno1Z2JhUHBJOEFTcWN4X1R1cHdWLUFhc25RR25vbWtVUEN4S2J2TzdvdkJaLUxHeWJZX1BIbHpfeTlIcW53bkVSU2VoMzBRRnFKX1JvcG9ROHZtcW5jb0RMNnhLdjJUaDBmSWVPM3NRbUJUcmdHN0JkVU1fMW9fZm1kUU16WGJYOTR1eThhNEljVW5lcQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2753
    },
    {
      "date": "Nov 18",
      "text": "Trump weighs new strikes on Iran as Israel presses for action.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxPVVhsMGFnUEhueFlmbkpjTEdvbU1LVkxiUk8wVzhQMUZ2QlNfYUo2Nmh4N3dVSzI5ZXByTHpmdU9FNE9HaTloeTBGQU51cHNEbkZ0VEZJZFgxVWdoMFJKdDJkQk00a0Q0VXJlRmQ0RlJKX2RBalV4cy1ZaVVkeFE3bQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 2753
    },
    {
      "date": "Nov 18",
      "text": "Trump says Iran 'looking at gases' and 'biological weapons' amid dirty bomb report.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2753
    },
    {
      "date": "Nov 16",
      "text": "Foiled Houthi missile injures Saudi resident, Riyadh says.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNUC1tREkzTk9ydXdTMXFqZzAzMzlCZWN2N2RnVG5WM0V3Z3ZBblk0SkI4bkJ2ZXhmQXBsZFFVajMwVWdNRi1SUmNfRWJwZENIcEZtM1BaZVU2blVWLXhkMUhtdXI0SklvQm1vU1BEVXJlZFg5TDQwcU5EeGpqME9Yalk4RFUxSWJtZ3pyTmxRM2hZaFRNZUI0ZEVhWE9IdmdOalB4LWs0cXlkU29GLV90dFNTbzFXNGxlNUhTV3hB0gHDAUFVX3lxTE81ZkY5SzJvZG1CTnB0NzcyT1FleFBfZUIzanRrSjROcXZUd1JVakZQV3Fhc0U1SXRQMllyZkZrN2ppSU02NmZlT3pXMWlFelRNQU9MX0dRRmJRTGJRa1JyMDdkTy1FZHhsd2xLRVR4Y25UeVJ1QV9uY3UydUJsQUdtSS1nR1lqRTlZZmZ3ZEVhRERtdE5SekFHQVZubjFMODNld2lETXc0Q0tvUDE4VTlQTmR2U3pqREJBczBpSE9QNjg4cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2753
    },
    {
      "date": "Recent",
      "text": "US military rushing to build new bunkers across Middle East amid Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxPeDJkYk1fVDdDMnl5WERpaXVKUmp1TEN4T3NYa3IxZEE5UllIZUFzMEZiUWF3Z1pna1VZeDE5MmtuZEwxd1gzN2wwTW5DSDBKUVdLcXptOWVjNEFfYXl6X0ZvQUU5YU5YMDdxV0pQMTVIRWotUjlVUEpKb0t1cEJSc1VVdXZCZ1U1OXltYnFmNVJTUkZoNUxXM2JJQmN1SGdZNUo2U2tOTF9mTHhhV3RlTFZ0ZVAzempTTWNfdXVhWE15dHF1bGFoZ0o0Y9IB0AFBVV95cUxOVmEzaGRkcElwZTg0aFdLVzc2bVY4aEt6R2tXTms1OGtwXzk3QnB5d0dDdlVBTFN0TVRFam0yREFzNXNWeEVkSWtJUVRoWVZlck9YQ09TVFM4S1hpNlQ1WDBOQTdfWm1mQnZ6ZEc1SnM5LURsTmZWbkxUbHlIbWVadEdoWVNNMkdULXVPU0s4RWhrWjItYm45N093cXhJMWVOLVVUVXBaR0RWeXZSVHd2YVd2NEcxZHA5VzJTVFhUQXJUM0xjZlV1MUNBVlBKaXdy?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Arabiya English",
      "latestSinceUpdate": 2753
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
      "perspective": "US/Israel",
      "headline": "US and Israel escalate pressure on Iran",
      "summary": "The US and Israel are considering and executing strikes against Iran, viewing Iranian actions as a threat to regional stability and US interests. Israel is actively pushing for more aggressive joint action and considering indefinite security zones in neighboring territories.",
      "tone": "defiant",
      "latestSinceUpdate": 2751
    },
    {
      "perspective": "Iran/Allies",
      "headline": "Iran warns US, continues retaliatory strikes",
      "summary": "Iran is engaging in retaliatory strikes against US targets and Gulf shipping, warning the US against miscalculation. Hezbollah maintains its stance against disarmament while Israel occupies Lebanese territory, indicating continued regional resistance.",
      "tone": "defiant",
      "latestSinceUpdate": 2751
    },
    {
      "perspective": "Global Concern",
      "headline": "Strait of Hormuz incidents raise global alarm",
      "summary": "The escalating tit-for-tat strikes between the US and Iran, particularly those impacting shipping in the Strait of Hormuz, are raising fears of a wider regional conflict. This situation poses significant risks to global oil trade and stability.",
      "tone": "anxious",
      "latestSinceUpdate": 2751
    }
  ]
});

export default LATEST_SNAPSHOT;
