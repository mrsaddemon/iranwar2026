export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1750,
  "lastUpdated": "2026-08-12",
  "lastSyncedAt": "2026-08-12T05:07:00.137Z",
  "warDay": 166,
  "summary": "The conflict continues with ongoing military actions by the US, Israel, and Iran, centered on control and conditions for reopening the Strait of Hormuz, while diplomatic efforts appear stalled.",
  "lastNarrativeUpdate": "2026-08-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is active; hopes for a Strait of Hormuz deal are fading amidst ongoing hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "date": "Aug 10",
      "text": "Trump states he would require compensation from Iran as a condition for talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5xcnRIaENDM0VobHdzWGIteUx1Y1pwYU42VUlVdzhMUDRvMGV3MWZ2cEppX0NnV29nSE5ZWTFWS3dGd0ZNYjByWldRM3VERU10ZFBaUnY5X2VmTDJ6ekgxNUV4RUJ2U3ZYemZhS0NB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1750
    },
    {
      "date": "Aug 10",
      "text": "Iran holds firm on its conditions for reopening the Strait of Hormuz, visited by Pakistan’s Naqvi.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPOFRsNlBTNUQteFdZZzVXYVhOTUk5SFJHZGVZR2hKQ0FiMmItUld5aURYOF8zT1MtSndXVUpQWkZOUmFrTEI0akg2OUFOMl84WVBwRmFYMHBTZ3hLdGlYdl9Gdkx0SW9SQ04wUWF3R2hZY2ViMTdWZWJPbkZ1MTc2cmh2eG1JYzl4Y200ZEpEWERiOGpDMHVteEFpT2JqSEw2TzZ2SE9MejJlV2JlTGNv0gG0AUFVX3lxTE5xWFE4SWVUVmxhd0o3dWotU09md0Y1bkdtYTZnc1hnY1dnRV9Ya0pyYTZIWG92N3E2S0lkUklTM2RRVTVVY3dIWXJLdS1OblZKWUtVOW1HOHE5Y3Y5eFQ0T3RPdzJXR25vWFhfTFJVZVVLbEo0cjlXRjVGVTVwaTBVRTFDdG05OEl2bnh2WGk2LTFpMk1sV1doVUhIRm9ybm9wTGEya1J0MVBLOXJRQW5fV2xINg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1750
    },
    {
      "date": "Aug 10",
      "text": "U.S. oil prices rise above $83 a barrel as Iran maintains Strait of Hormuz closure conditions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTE1ERXgzSE9wdWREUDZacUg3UWdOLWpxOEhYZ1VZanZjZjRXejNiWFotSnVyOXNEaGdySGU3SDRhVUx4dlBTd2pjRnVveUlsNDFiU1gtSlpjQkdkUTBUcVVmWHN2S0JWaEZvNzBuMWtqdWpFQ2fSAXhBVV95cUxQZTZkNVRYbGJoMEd3bnU4TWpJWEd0bzBvYnd0ZHRhMDI3Sy01bllGZlhlMV9oeGxXVldqOWtCTm1tNWpJUkQwdzZtckhQWThvcHpaamJxb1JwTkhVTS16UmN6ckI4YlA4dUxDcWgyeEpUYjV1T1hkMUg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1750
    },
    {
      "date": "Aug 10",
      "text": "U.S. announces another troop death amidst warnings from Israel about Tehran's attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNWnJYc0NUMEFyWXc0S0x1LVFjZXNDcV9WQm1sU0JTX05BN1hQSkxEcmYyTzdGdHpuVFJHZWo2Q25JaVptLTZEOEZKOFFJQ0pWV2tCWDNpa1NxbFNaX0x6dkF6dEw2enNEdEdDOGlFMXg1aG51dWRzN2VyaElzRnBkZkFnWkc2UWxsZmpUelNvNFFzejJMZ29pYm9vR2NUUURDNmhaRTdneGx5aXNYdmFqWnJRVWt5ODZ0bVHSAb8BQVVfeXFMTlZhWS1lMjFKSUlEOUcwVUd5RWtjRzdKamdKaTJHVlFTejZWQzdIUmd2Q203S1g3c1d2eUlxMEtkeFFpa2ZoaTNfcUtQcFJLdUF4UU9qWDJaUFlEYXNkdE51UHh2b2N6eGNaVkZ5NUpFUU1EYU9uMUc1NE9FX1lqY0I0azVpVkhhT1FnN2U0MzVmOGhkc2c1c1lxLWtKV081TGVwYmZxZkpxR05LODlONzdHMXBpQms2czM3MUo3UUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1750
    },
    {
      "date": "Aug 10",
      "text": "Iran launches missile and drone attacks across the Gulf, while Israel strikes Tehran infrastructure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQYmFtdmtoamYyU2taWm5uSUp0LWxRR3p3bGszYjhPT0tnNmoweWI3eWtjcnlmRzRqTmtJdWRYTU55Ym5zY0xkTVJOdlRSUVduWjVSSGRndlJwSThXSU9qOW50ejUxWTNjRUZPbkpxZHZBd1RoVUV0V2gtSmZycEZTeFlfejZfOEtNbjYxUF9VYnpHTURxZ3E2dkU3Z1FQOUtpZFM2MVdRdnNGc25RajFhdzlnQlZzbVh4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1750
    },
    {
      "date": "Aug 10",
      "text": "US military fires on a cargo vessel reportedly attempting to break the Iran blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNVDZDSVYteFdRNE1CNmNDaDJBWUFkc1M1b21WalE1UDZaSnAybDJwNWZlZEhORVdmMC1JRVdRMk9MOHhWZjFCdXhudzN5dEdWdWNlck5PU0NJQ25fZDZOZXd2d1BoTXhtZlpMVW9HY1pQdzlOWTRCYlNHUTBNMUhCTjRBU29HbXI2dGdUeHhCbVlwM3VoZGU0TVFRNkdCRE5aSTl4VU12Y243WmVEMVVUbXNn0gG3AUFVX3lxTE5zMklBY3BGOEdfX0FtdkNXLUVER3NGVnRPU0REUkVfRjg4UDlTNkxoVUhVS1VJYnN2N2liZE95Wi1reWhXV25kOU5iWmlILTJCVVlKRklQOUM0ampTQzBqcWhnZmhwX2hLOG5UZlJ6bG5OWjU3QWVTR0Q2RWtPM3J5Mkt2RTVfT1Eta0JqWUExUktzMmRWWkZBVHE2c2huWG9RZG1oM3gyWWR5cEhlMTRYaG9zd25HQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1750
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
