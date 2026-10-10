export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2561,
  "lastUpdated": "2026-10-10",
  "lastSyncedAt": "2026-10-10T15:13:27.854Z",
  "warDay": 225,
  "summary": "The conflict involving Iran continues with the US military preparing for potential strikes, while diplomatic efforts involving Russia and political considerations in the US influence strategic decisions.",
  "lastNarrativeUpdate": "2026-10-10",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 3,
    "summary": "No active ceasefire or de-escalation efforts are currently reported amidst ongoing conflict and military preparations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
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
        "aggression": 0.75
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
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 66,
    "globalPressure": 85,
    "allianceInfluence": 62
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": false,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Oct 09",
      "text": "Putin relays Iran’s terms for ending the war to Trump, who is reportedly weighing the timing for potential strikes.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPM2hKQnU0RnNlWmR5M0dpZy1GdkEybmxWRm1scHZNMlREbG52WmpkLWlRUnI4M3hRQkZKUXAtX3doSGxHbnZ5Tl9ybGp2SHVSLTlvUC0wUG9rOFVZeG81UmxvZ0hzNTZsa25fMTF5Y0V1Q1QwbjdjQnVScGdfZlUzQzg0TXo3aVFnSGVuWlRyazZ6M2N2NzItYnNhMHJrNDg5dGxhUlNoNVU3OGZva3djcmQ2eGQyOU43N21Z0gHAAUFVX3lxTFB0ZXVSYWwwdm1HYnp0cWY5eWNRXzRYb1BaOVRjcXBZVUpDOEpPUmFxeVJZT2x4U01Ma2ljMmN6Z2N0S19kZTVXekp6dTZFamp0NGRZMHp2UzhrcmJVOENPd3N3d3RXR2E2aU55TEN6QWpSVHZsbjhHUUxPU25YREd1MmFtMXUtVmNvLXdHTEY3NWpBZm5MZ0RBandXcS0xZkpVbVZtQkZEeFN6OHlMOTZlcWo2Q2FVVHFuN0hkcVU0SQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2561
    },
    {
      "date": "Oct 09",
      "text": "US military ordered to prepare for a possible resumption of Iran strikes, with reports indicating preparations for 'massive bombing'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxPXzRfZkx5czhJd1RIbEdMa0dmd0p5UWlFM0pST2cxQkF0VzMwZUJTN2MtV0VhV2tpcm5zV2UtcmtfZk50VXZxTEhXSXFNRmhsN2JkWllCOTV3YlQyZ0NFTk9EZUgxVFFQaUJKLVN5VVNOR3FYRXhKYkQ2eWJmSWkxS0NUNC1DYnNpSkY5cUo3SUVJaHNoSndQSTNqbnlnN3plOHdrV1VidDJ5dFnSAbABQVVfeXFMT05jWXlMN0lVUG13SWpBS29CZUkyTTNQaWFsTWhGYVJwZ2hlQ0dZckNFOURpODA0SUp1YXkzU2lKaU4wSW9OMVRmV3RPTWdxSFQ3TTJ1ZnVrNVNxbEFCcU1wWnNMY1hiWjk2OE5lTkoycDlvTGxsQ3BmY0tDbFRUYm9LLTFILTV1OHhmbVNFMnVyaDVRLUlKSURDNFZNVEZzYzcxRDhMX0VRc3ZVMVNXYTY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2561
    },
    {
      "date": "Oct 09",
      "text": "Trump states the US will not attack Iran again before midterm elections, despite ongoing military planning.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2561
    },
    {
      "date": "Oct 09",
      "text": "Tanker attacks in the Strait of Hormuz surge to a wartime high as Iran attempts to choke off oil exports.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxQLXQ5SXNEMzB0UFVEM09pZjB6S29PbXBPZWdwQ1VUei1iSkJ4RWx6d0pvOUhRVXdiVTZKeHUzUkVVSUE5bmtENm5OOXFrN24zYjhYdlN5R1VfckRfaGt3eXJlLXVNSFR6OE5lTTdWT19mRGVRNDQ5QTltV09OdXdSd2h6c9IBiAFBVV95cUxOeXViRmlFc2pYOS1vS3htNzF6Q0hLcEt1Vm1VUEJkb0NrWENIcFRtSXNiUDUxMk5DbFVQbXpBaTdsU25vajNhd3lQTW93bk05RGVWdlNkWFRtRkZxa1M5c3ZBTkxRWGxHOEwyM1dYS1hTczRJNjNZUk5MUXVGS0ROcWlYX0lzdkVD?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2561
    },
    {
      "date": "Oct 09",
      "text": "A congressional report indicates the US has lost or sustained damage to 81 military aircraft, valued up to $3.3 billion, in the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxQYURFZENqc0hDNWRzUXVWOVVJWktLc3RFR2JlU3oyZVBqZ21fVmNBVFl6N2Q0ZklpcnJCRTNnbmV5TEFSeU9HcTJoeFAzeTJjSEd4TEt6UGo3Tk1wVDNTbFkwUGFpT1ZNNU0yRnJrM05OY3VnVm5kWklOeXB2R21VVExLRmdnbDBi?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2561
    },
    {
      "date": "Oct 09",
      "text": "IDF Chief Zamir warns that the war with Iran may delay US elections, as Israel's military footprint expands.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2561
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
      "perspective": "US Administration",
      "headline": "US Prepares for Renewed Iran Strikes Post-Midterms Amid Budget Strain",
      "summary": "The Trump administration is reportedly preparing for renewed, potentially massive, strikes against Iran after the upcoming midterm elections, despite a temporary pause in operations. This comes as the ongoing conflict is significantly draining the US Navy budget and increasing aircraft losses.",
      "tone": "strained",
      "latestSinceUpdate": 2559
    },
    {
      "perspective": "Iran/Proxies",
      "headline": "Iran Escalates Strait of Hormuz Attacks, Funds Hezbollah Amid Regional Tensions",
      "summary": "Iran is actively escalating its efforts to disrupt global oil exports through a surge in tanker attacks in the Strait of Hormuz. Concurrently, Iran continues to provide substantial financial support to regional proxies like Hezbollah, further entrenching its influence in the Middle East.",
      "tone": "defiant",
      "latestSinceUpdate": 2559
    },
    {
      "perspective": "Regional/International",
      "headline": "Global Economic Burden and Election Delays Feared Amid Iran War Escalation",
      "summary": "International observers, including Qatar, warn of the global economic burden imposed by the ongoing Iran war, citing high gas prices despite open shipping lanes. The IDF Chief has also expressed concerns that a full-scale war with Iran could lead to delays in US elections, highlighting broader regional instability.",
      "tone": "anxious",
      "latestSinceUpdate": 2559
    },
    {
      "perspective": "Israel",
      "headline": "Israel Adapts Post-Oct 7, Faces Manpower Strain Amid Enduring Threats",
      "summary": "Three years after October 7, Israel has significantly altered its strategic rules in the Middle East, but faces mounting manpower strain. Hamas and Hezbollah continue to endure, posing persistent threats that necessitate ongoing adaptation and readiness from the IDF.",
      "tone": "strained",
      "latestSinceUpdate": 2559
    }
  ]
});

export default LATEST_SNAPSHOT;
