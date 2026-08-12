export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1753,
  "lastUpdated": "2026-08-12",
  "lastSyncedAt": "2026-08-12T09:20:19.228Z",
  "warDay": 166,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-12",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "No general ceasefire is active in the broader Iran-US conflict, though a localized, fragile ceasefire is reported in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 38,
    "oilDisruption": 85,
    "tradeImpact": 52,
    "sanctionsPressure": 49,
    "globalPressure": 56,
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
      "date": "Aug 11",
      "text": "New attacks on shipping reported amidst stalled Iran war talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPVzI4ZllHeXZmVDVJVE40M0w5NkYtdkFzM0RyYlZvY1pXbEJoc1d4RHNvVWxTem1kMEhGNUxmc0tZZmZ2ZkpZamtDNkd6bjRTVXhCVEF6dGhOSXltR0RQc3RPc0RFUzctZ00xRjAzX0hwNy1oYlU0a0dMYU9iUjdqYXZ4ZWM5YXhBMUhEREduYVo2QkVsT2ktQ19NaFNpUF85TmhFcnF1REktbFZfRklXb0EtbzZsLUZ1Vk53TFRR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1753
    },
    {
      "date": "Aug 11",
      "text": "US announces another troop death as Israel warns of escalating Iranian attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNWnJYc0NUMEFyWXc0S0x1LVFjZXNDcV9WQm1sU0JTX05BN1hQSkxEcmYyTzdGdHpuVFJHZWo2Q25JaVptLTZEOEZKOFFJQ0pWV2tCWDNpa1NxbFNaX0x6dkF6dEw2enNEdEdDOGlFMXg1aG51dWRzN2VyaElzRnBkZkFnWkc2UWxsZmpUelNvNFFzejJMZ29pYm9vR2NUUURDNmhaRTdneGx5aXNYdmFqWnJRVWt5ODZ0bVHSAb8BQVVfeXFMTlZhWS1lMjFKSUlEOUcwVUd5RWtjRzdKamdKaTJHVlFTejZWQzdIUmd2Q203S1g3c1d2eUlxMEtkeFFpa2ZoaTNfcUtQcFJLdUF4UU9qWDJaUFlEYXNkdE51UHh2b2N6eGNaVkZ5NUpFUU1EYU9uMUc1NE9FX1lqY0I0azVpVkhhT1FnN2U0MzVmOGhkc2c1c1lxLWtKV081TGVwYmZxZkpxR05LODlONzdHMXBpQms2czM3MUo3UUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1753
    },
    {
      "date": "Aug 11",
      "text": "Houthis reportedly kill six in first deadly attack since the start of the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1qV0V6Z08tZ1RuOVlBTzZXRWQ5UzZqcFBOZlVNZnB6VE9KN2VGT29aQzhxYnh0aE9SWWNSN0szaWVZQklMeXY1a29IaklsY3dhQU5Wa1JZblRKQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "bbc.com",
      "latestSinceUpdate": 1753
    },
    {
      "date": "Aug 11",
      "text": "US military fires on a cargo vessel attempting to breach its blockade of Iranian ports.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNVDZDSVYteFdRNE1CNmNDaDJBWUFkc1M1b21WalE1UDZaSnAybDJwNWZlZEhORVdmMC1JRVdRMk9MOHhWZjFCdXhudzN5dEdWdWNlck5PU0NJQ25fZDZOZXd2d1BoTXhtZlpMVW9HY1pQdzlOWTRCYlNHUTBNMUhCTjRBU29HbXI2dGdUeHhCbVlwM3VoZGU0TVFRNkdCRE5aSTl4VU12Y243WmVEMVVUbXNn0gG3AUFVX3lxTE5zMklBY3BGOEdfX0FtdkNXLUVER3NGVnRPU0REUkVfRjg4UDlTNkxoVUhVS1VJYnN2N2liZE95Wi1reWhXV25kOU5iWmlILTJCVVlKRklQOUM0ampTQzBqcWhnZmhwX2hLOG5UZlJ6bG5OWjU3QWVTR0Q2RWtPM3J5Mkt2RTVfT1Eta0JqWUExUktzMmRWWkZBVHE2c2huWG9RZG1oM3gyWWR5cEhlMTRYaG9zd25HQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1753
    },
    {
      "date": "Aug 11",
      "text": "Oil prices rise above $83 a barrel as Iran threatens to keep the Strait of Hormuz closed.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1753
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
      "perspective": "US/Trump Administration",
      "headline": "Trump Demands Compensation, Enforces Blockade",
      "summary": "The US administration, led by Trump, is demanding compensation from Iran as a condition for any talks, while actively enforcing a blockade of Iranian ports, including firing on vessels attempting to breach it. Trump claims control of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 1748
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Resists Blockade, Elevates Military Leadership",
      "summary": "Iran is resisting the US blockade and its supreme leader is elevating military veterans prepared to confront the US. Iran has also implicitly demanded war reparations, which Trump has scoffed at.",
      "tone": "defiant",
      "latestSinceUpdate": 1748
    },
    {
      "perspective": "Regional Conflict Dynamics",
      "headline": "Hezbollah Strategy Shifts, Israeli Strikes Continue",
      "summary": "Hezbollah has adopted a new battlefield strategy posing challenges for Israeli and US leadership. Israel continues to conduct strikes, claiming precision, while warning of escalating attacks from Tehran.",
      "tone": "strained",
      "latestSinceUpdate": 1748
    },
    {
      "perspective": "Global Economic Impact",
      "headline": "Hormuz Deadlock Threatens Oil Prices",
      "summary": "The ongoing deadlock in the Strait of Hormuz, exacerbated by the US blockade and military actions, is causing uncertainty in global oil markets and could lead to significant price increases.",
      "tone": "anxious",
      "latestSinceUpdate": 1748
    }
  ]
});

export default LATEST_SNAPSHOT;
