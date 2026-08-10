export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1715,
  "lastUpdated": "2026-08-10",
  "lastSyncedAt": "2026-08-10T15:08:30.767Z",
  "warDay": 164,
  "summary": "Tensions remain high as Iran demands concessions for reopening the Strait of Hormuz, while the US seeks an off-ramp from the conflict and Israel prepares for potential unilateral strikes.",
  "lastNarrativeUpdate": "2026-08-10",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No active ceasefire is currently in effect for the primary US-Iran conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Aug 08",
      "text": "Iran demands concessions from US as it nears Strait of Hormuz deal with Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAybVA3dzRBU1hnc01FeGxSb0E3MjFhcjRteXBQUHZSVWJMRmF1QjNYM3ludGJFX1ZnVWkxYWlVdHhZY3c3ZmZOb0tadUMzMzJpZmV6QjZpc0ViS3pzbmdjMUg4YTZSdjA5bzE5akpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1715
    },
    {
      "date": "Aug 09",
      "text": "Strait of Hormuz reportedly hit by missile strike amidst ongoing tensions.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1715
    },
    {
      "date": "Aug 09",
      "text": "Israel prepares for possible unilateral strikes on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxORnBwMDd2NXlSclA4SjZxUzNxckZMVFRHckt1X25YRnlMaWxhVEJsUU9QUU1aNkhnc3o5RmVMUXJQRmFMRWFVSHVZVzhwbWpFM3RGdlRtN3R6RUFqdF9uYVVsTjlkaEJVeHA5ZXh5bnl2V0VZYkYtOXhJVFN2Q0VWcEtYaWNiQXhTMHZoc3lXbDIxdU1wNzh1azM3S0NrdnBSLTh5ZHlScmRfazkxM0FtblVNaTE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1715
    },
    {
      "date": "Aug 09",
      "text": "IDF strikes in southern Lebanon citing Hezbollah cease-fire violation.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwJBVV95cUxOcVRQLWNxeE55TTlORE1YR3hpSWNzanBsbjJBbmhjWElnOHNNcUx0dHZVYXdEUlpGY25YQmZpakdPTFBQMjJOX0M0OG9aTjFXd0czWjhGcVNobDB1OU8zdENjTl85LWI4NGVRX09WRUxHMzRBZzgtMlQ1RXZHV1RzdHpqR0xuSjVWcFM5VDlCakRLRWppdDNVb09vVzZ5cUpxTlZBamxFRVNVRWY1QS1EVnpnZ19ieVMyYld1RTJoaG11TFNGb2VxR05aOEg1OWZaQVBlYWJCZGhJRVVkTXhKaXhYZU1lOFdZN3RyRDg0eF9nMlJDN3pwazNoSmR2cUx3QmRqUFdKNDNpdUQ4N2t5WE1XQ0h6LV9LTi1FUVBucw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Haaretz",
      "latestSinceUpdate": 1715
    },
    {
      "date": "Aug 09",
      "text": "U.S. announces another troop death as Israel warns Tehran's attacks are coming close.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNWnJYc0NUMEFyWXc0S0x1LVFjZXNDcV9WQm1sU0JTX05BN1hQSkxEcmYyTzdGdHpuVFJHZWo2Q25JaVptLTZEOEZKOFFJQ0pWV2tCWDNpa1NxbFNaX0x6dkF6dEw2enNEdEdDOGlFMXg1aG51dWRzN2VyaElzRnBkZkFnWkc2UWxsZmpUelNvNFFzejJMZ29pYm9vR2NUUURDNmhaRTdneGx5aXNYdmFqWnJRVWt5ODZ0bVHSAb8BQVVfeXFMTlZhWS1lMjFKSUlEOUcwVUd5RWtjRzdKamdKaTJHVlFTejZWQzdIUmd2Q203S1g3c1d2eUlxMEtkeFFpa2ZoaTNfcUtQcFJLdUF4UU9qWDJaUFlEYXNkdE51UHh2b2N6eGNaVkZ5NUpFUU1EYU9uMUc1NE9FX1lqY0I0azVpVkhhT1FnN2U0MzVmOGhkc2c1c1lxLWtKV081TGVwYmZxZkpxR05LODlONzdHMXBpQms2czM3MUo3UUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1715
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
      "perspective": "Iran",
      "headline": "Iran Demands Concessions, Seeks US Exit from Gulf",
      "summary": "Tehran is demanding concessions from the US for a Strait of Hormuz deal and asserts its conditions for opening the strait. Iran also expresses a desire to remove the US presence from the Gulf region.",
      "tone": "defiant",
      "latestSinceUpdate": 1705
    },
    {
      "perspective": "United States",
      "headline": "Trump Threatens Attacks Amidst Limited Options",
      "summary": "President Trump issues threats of 'heavy' and 'massive' attacks on Iran while simultaneously engaging in 'semi-negotiations'. His top general is reportedly seeking an 'off-ramp' from the conflict due to limited military options.",
      "tone": "strained",
      "latestSinceUpdate": 1705
    },
    {
      "perspective": "Israel",
      "headline": "Israel Prepares for Strikes, Rejects Gaza Plan",
      "summary": "Israel is reportedly preparing for unilateral strikes on Iran and has rejected President Trump's Gaza plan, vowing no withdrawal until Hamas disarms. Concurrently, Israel is engaged in talks with Lebanon regarding Hezbollah disarmament verification.",
      "tone": "defiant",
      "latestSinceUpdate": 1705
    }
  ]
});

export default LATEST_SNAPSHOT;
