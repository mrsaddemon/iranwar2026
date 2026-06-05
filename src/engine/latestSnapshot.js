export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 880,
  "lastUpdated": "2026-06-05",
  "lastSyncedAt": "2026-06-05T22:49:11.322Z",
  "warDay": 98,
  "summary": "Conflict continues between Israel and Iran-backed forces in Lebanon, with US involvement and heightened tensions around the Strait of Hormuz, despite attempts at a ceasefire.",
  "lastNarrativeUpdate": "2026-06-05",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A renewed ceasefire between Israel and Lebanon is reported, but Hezbollah has rejected the plan, and Israeli attacks continue, indicating a fragile status."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Jun 04",
      "text": "Israel continues attacks in Lebanon despite reports of a new ceasefire agreement.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNci1FMmVzUHVBVFpfSlNBQ2ozZUhXdk9wWllHM3FfM1IxVVc2cDNwdi1PaVJ6aldDY3JzYlhocTk0V3N6VUU1cHFPVzFaUVhsLWxNNnQweTlwaGMzdV9XZjRPbUpWakk0NV9XU1VOa1ZVWXp0VzJ2R25odmJOd1ZYZHpOYVhWUVEyb2dpOGRlTnpSU1NWSGpfZjZodjNxTWwySl9sdVFTczBib0d5NHBvR3UzU3dhQdIBuwFBVV95cUxPRzF6SWJmbE5YVktwdmw5UnZtNnNUalRzX05ac0Q3QjE2V2NIRGdCT1B3UFlBMlhLN29WWEdNblUwMTQySXBBemxyakQwcEx5LW5MdlpLbldpeDZIVmxrcTJCU1lZYkJQVjlNcXNUcVNleVhKYnVGNHVKMzBLNVEwODhJYl9nZDZ4V1J4bDdhMW1hWWlneXM3dk1wcjJ1eEo5cjVLME9KWmJGQU94Tm9qS1NCYllmelpCTFRr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 880
    },
    {
      "date": "Jun 04",
      "text": "Hezbollah rejects the Lebanon-Israel ceasefire plan amid uncertainty in US-Iran talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTE0xUDZ6OFRNS2NIcWt6VWY5cHdUeVBGa1hRMENwd3U5YVFhN3RUY2lIWkd5MnhTQTREb2NWQ2FzcXZBR2N5TlFxWnpKTHZsNzMtQmpGWXB0eVUtc0w2bzU5SEtGY3NxM3ItOTRURXZFMUpuNUI3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 880
    },
    {
      "date": "Recent",
      "text": "US House of Representatives passes a war powers resolution directing President Trump to end hostilities with Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE81cnVNSUc5VUI0VW51ZGRjQzNwdWV6Q1d0TWxVZWsyaXFiVEt1dDAwc0dWb2huX0MyOUJnSDRZZDZrLUpaeU5iaU9JT2xIaEdmbmplNFVBV1VQVzNqVFZlbEI1X1VpOFFWRW9TSjZwbjlyUm9PMkYtR3lwdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 880
    },
    {
      "date": "Recent",
      "text": "Iran launches a deadly attack on Kuwait airport; Israel and Lebanon agree to renew a ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxNWmVQTjduVEoyLVF3Ym84c25PRXR5dmFoMjlXUy10N3NMYjlEbWxoS0JtSW9Oc280eXRqWVNDOEZZLW1OWXRFdEVwUFl2NXNjSWVTdjNjOXpBcXZ1QUVjZEpiREZEM25YUlVlR1M0UTBUWVF0cVZGaUE4dzQ1cVZvTWFaREh0czBnX2Y5YXY1Mi1Ic3BOSGpRTXROMFhoSWtYU0dDYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 880
    },
    {
      "date": "Recent",
      "text": "Iran launches multiple drones towards the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPaWNoMWljcEVLeTNSU09PSGdTTllERnBWUXVqRlNrSGI2S3I1Y1VZdlRBY05FbXNlX0tudmZlalJKYV9VaVpJZHBRTWFqTThMQ01TakJDVXVnTGJ2OVBmNmxNdVRRRXNKRThuWnFDUzRDZlFyQkt4Uy1EUDlqVzVMNW56U0tvZzAtYmNoby1tdnpTaGNrWkV3eHk4TGhTUWdaVGg4S3dHakNRaTNpR2tFTnNiYTFmaDl0cjk3eU9R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 880
    },
    {
      "date": "Recent",
      "text": "Oman's explosion-hit oil terminal resumes operations amid US-Iran tensions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi6AFBVV95cUxPTV9zSlk0T3l6VkdXOXdjSE83cFZiVDVyWG1PMDBJLUQyenVyWUlnekk4OHRlTndmYVQxU0JjbDlxSXNRTExkRGdlQzF3RDlpYjY5N3MxRjYtUDFOTEFwcG1hTHZYeVA5VUZiTExfd0RzemdnU01KaFdJSFh6NDVyX05WeTZFdUdmYWhLOHQySzF0SEZzenJjODlWQW54RTNJTld0RWZkQXNKTnlRWlp6c1RYck9GeEVSaXFULUFDajc4UHVvUUY5aHhFSWpJdnRCOGYxcmFfSHd4Y0FqQVFubTBWTlRyUG1v0gH7AUFVX3lxTE4yUHpIejlDVWNaQTlFWXJUdUhaOTRqeHFIdmRqMFlZRWtxeGlUdWxtQ1dweG5lQ0U3NFVCMjJCYVo3VGgyYk9FbGR4em01M1c5OXdGTS12bndnSDF6Um9UZGNoUTZyTnVwM1VqN0gyUDRRLTJSbmNWYkdwVnctZWhoN1pYdmxVVklpcEc3bE00eENoYWR2NklLNXFqRWJWX3ZyYzZrR3E2c1JoR1dUMVZVd0Nfd1E2V3lGX3pqUm93b214TmN5dHpmRTBVMWkyc29TcEw5WUVLT2pzcGlJSEVVb1pJU3ZlR0dBdHRPTnZFYkJiWTUtcmZkUFdr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Gulf News",
      "latestSinceUpdate": 880
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
