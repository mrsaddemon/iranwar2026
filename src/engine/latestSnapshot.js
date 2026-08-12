export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1754,
  "lastUpdated": "2026-08-12",
  "lastSyncedAt": "2026-08-12T10:30:30.167Z",
  "warDay": 166,
  "summary": "The conflict between the US/Israel and Iran is escalating with widespread missile and drone attacks, direct US military action against shipping in the Strait of Hormuz, and Houthi attacks in the Red Sea, alongside ongoing reparation demands.",
  "lastNarrativeUpdate": "2026-08-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect; conflict and hostilities are ongoing."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "date": "Aug 11",
      "text": "New attacks on shipping reported as Iran war talks reach an impasse.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPVzI4ZllHeXZmVDVJVE40M0w5NkYtdkFzM0RyYlZvY1pXbEJoc1d4RHNvVWxTem1kMEhGNUxmc0tZZmZ2ZkpZamtDNkd6bjRTVXhCVEF6dGhOSXltR0RQc3RPc0RFUzctZ00xRjAzX0hwNy1oYlU0a0dMYU9iUjdqYXZ4ZWM5YXhBMUhEREduYVo2QkVsT2ktQ19NaFNpUF85TmhFcnF1REktbFZfRklXb0EtbzZsLUZ1Vk53TFRR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1754
    },
    {
      "date": "Aug 11",
      "text": "Trump demands compensation from Tehran for 'conflicts' while scoffing at Iran's own reparation demands.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1754
    },
    {
      "date": "Aug 11",
      "text": "U.S. announces another troop death as Israel warns Tehran's attacks are coming close.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNWnJYc0NUMEFyWXc0S0x1LVFjZXNDcV9WQm1sU0JTX05BN1hQSkxEcmYyTzdGdHpuVFJHZWo2Q25JaVptLTZEOEZKOFFJQ0pWV2tCWDNpa1NxbFNaX0x6dkF6dEw2enNEdEdDOGlFMXg1aG51dWRzN2VyaElzRnBkZkFnWkc2UWxsZmpUelNvNFFzejJMZ29pYm9vR2NUUURDNmhaRTdneGx5aXNYdmFqWnJRVWt5ODZ0bVHSAb8BQVVfeXFMTlZhWS1lMjFKSUlEOUcwVUd5RWtjRzdKamdKaTJHVlFTejZWQzdIUmd2Q203S1g3c1d2eUlxMEtkeFFpa2ZoaTNfcUtQcFJLdUF4UU9qWDJaUFlEYXNkdE51UHh2b2N6eGNaVkZ5NUpFUU1EYU9uMUc1NE9FX1lqY0I0azVpVkhhT1FnN2U0MzVmOGhkc2c1c1lxLWtKV081TGVwYmZxZkpxR05LODlONzdHMXBpQms2czM3MUo3UUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1754
    },
    {
      "date": "Aug 11",
      "text": "Houthis reportedly kill six in their first deadly attack since the start of the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1qV0V6Z08tZ1RuOVlBTzZXRWQ5UzZqcFBOZlVNZnB6VE9KN2VGT29aQzhxYnh0aE9SWWNSN0szaWVZQklMeXY1a29IaklsY3dhQU5Wa1JZblRKQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1754
    },
    {
      "date": "Aug 11",
      "text": "Iran launches missile and drone attacks across the Gulf as Israel strikes Tehran infrastructure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQYmFtdmtoamYyU2taWm5uSUp0LWxRR3p3bGszYjhPT0tnNmoweWI3eWtjcnlmRzRqTmtJdWRYTU55Ym5zY0xkTVJOdlRSUVduWjVSSGRndlJwSThXSU9qOW50ejUxWTNjRUZPbkpxZHZBd1RoVUV0V2gtSmZycEZTeFlfejZfOEtNbjYxUF9VYnpHTURxZ3E2dkU3Z1FQOUtpZFM2MVdRdnNGc25RajFhdzlnQlZzbVh4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "newsonair.gov.in",
      "latestSinceUpdate": 1754
    },
    {
      "date": "Aug 11",
      "text": "Strait of Hormuz traffic falls to a new low amidst Houthi attacks in the Red Sea and US claims of control.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1754
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
