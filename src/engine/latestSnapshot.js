export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1719,
  "lastUpdated": "2026-08-10",
  "lastSyncedAt": "2026-08-10T19:10:13.458Z",
  "warDay": 164,
  "summary": "The US and Iran are engaged in semi-negotiations amidst Iranian demands for concessions to reopen the Strait of Hormuz, while Israel prepares for potential unilateral strikes on Iran and continues operations against Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-08-10",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect for the broader US-Iran conflict, and a reported Hezbollah ceasefire has been violated."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
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
    "nuclearIndex": 35,
    "escalationLevel": 80,
    "oilDisruption": 90,
    "tradeImpact": 79,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "text": "Iran demands concessions from the US as it nears a Strait of Hormuz deal with Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAybVA3dzRBU1hnc01FeGxSb0E3MjFhcjRteXBQUHZSVWJMRmF1QjNYM3ludGJFX1ZnVWkxYWlVdHhZY3c3ZmZOb0tadUMzMzJpZmV6QjZpc0ViS3pzbmdjMUg4YTZSdjA5bzE5akpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1719
    },
    {
      "date": "Aug 09",
      "text": "The US announces another troop death as Israel warns Tehran's attacks are coming close.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNWnJYc0NUMEFyWXc0S0x1LVFjZXNDcV9WQm1sU0JTX05BN1hQSkxEcmYyTzdGdHpuVFJHZWo2Q25JaVptLTZEOEZKOFFJQ0pWV2tCWDNpa1NxbFNaX0x6dkF6dEw2enNEdEdDOGlFMXg1aG51dWRzN2VyaElzRnBkZkFnWkc2UWxsZmpUelNvNFFzejJMZ29pYm9vR2NUUURDNmhaRTdneGx5aXNYdmFqWnJRVWt5ODZ0bVHSAb8BQVVfeXFMTlZhWS1lMjFKSUlEOUcwVUd5RWtjRzdKamdKaTJHVlFTejZWQzdIUmd2Q203S1g3c1d2eUlxMEtkeFFpa2ZoaTNfcUtQcFJLdUF4UU9qWDJaUFlEYXNkdE51UHh2b2N6eGNaVkZ5NUpFUU1EYU9uMUc1NE9FX1lqY0I0azVpVkhhT1FnN2U0MzVmOGhkc2c1c1lxLWtKV081TGVwYmZxZkpxR05LODlONzdHMXBpQms2czM3MUo3UUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1719
    },
    {
      "date": "Aug 09",
      "text": "The Strait of Hormuz is reportedly hit by a missile strike amidst ongoing US-Iran tensions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOamFyOVhnZG9PZUJlenFjNUhXd0doVTNNS2dCTm5tQU5Wc3NCV1Z4UUVhVDF6ZVZjVEtiYzZVOHVVb281V2ZwS3J1TlRxVjB2eXlHYTVLYUpIZkpfMWw4OWVyVVFvYnRoRFpGamFMRFRSTFp3TVBObDJ1VHpVM3NKM3pQZFVDaEtFcWhZMnFaUWZtbVRwbElXQnQ4OFJublpJbWxEMGxaUnowbkNT?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1719
    },
    {
      "date": "Aug 10",
      "text": "Israel's military (IDF) states it struck targets in southern Lebanon, citing a Hezbollah cease-fire violation.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwJBVV95cUxOcVRQLWNxeE55TTlORE1YR3hpSWNzanBsbjJBbmhjWElnOHNNcUx0dHZVYXdEUlpGY25YQmZpakdPTFBQMjJOX0M0OG9aTjFXd0czWjhGcVNobDB1OU8zdENjTl85LWI4NGVRX09WRUxHMzRBZzgtMlQ1RXZHV1RzdHpqR0xuSjVWcFM5VDlCakRLRWppdDNVb09vVzZ5cUpxTlZBamxFRVNVRWY1QS1EVnpnZ19ieVMyYld1RTJoaG11TFNGb2VxR05aOEg1OWZaQVBlYWJCZGhJRVVkTXhKaXhYZU1lOFdZN3RyRDg0eF9nMlJDN3pwazNoSmR2cUx3QmRqUFdKNDNpdUQ4N2t5WE1XQ0h6LV9LTi1FUVBucw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1719
    },
    {
      "date": "Aug 10",
      "text": "President Trump signals a shift to economic pressure on Iran over new military strikes and the Strait of Hormuz dispute.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNZUp2OWhnVmxOYkpZTTM5TEktOUY1REswc3Roc04zNDNKbDAwQl9ib2JhZ1QtbHY3UHJXc2JjVkNYam5WNVJPR1lNNnlmS3ZkX253WTJtRE9ESG1BdnVSanQxWk9MR2NDeG15dlpzaEZrTm1Rcnowc1RLRmlaSnNPVmJxRHBUU0M1RWlqNTlSYmtDbW1zRzVDZHNkSk5SR1RWMWFmeVVMUHBCNzlJeVZmXzEyeURfd015SmfSAb8BQVVfeXFMUFFkMFhlblVNbUtKdmNacEI5cHVJRjJJbW44VXFoQzkwNXozeEoxZHFIWHZ2aEllSGpEQkYwVXhQV210LUFsMUloaWFZVXlQdmJjcTBOb2JmdzlaWnVyQkcxSUd1eGFtMzRUaW1BaktraDBxcnJGZjNvSjBJSXpaMzJtLTBPcGgyaWE2ZHE1TkhkY19ZRXdqR1Vubk1JbVJJMDZ6d2w1dmwtVVZPb244OGtYeW1pRC1tN2p1b3BiZlU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1719
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
