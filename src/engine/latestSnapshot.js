export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1728,
  "lastUpdated": "2026-08-11",
  "lastSyncedAt": "2026-08-11T04:04:33.403Z",
  "warDay": 165,
  "summary": "The US-Iran conflict continues with stalled Strait of Hormuz negotiations, reports of depleted US precision missiles, and rising oil prices, while Israel prepares for potential unilateral strikes on Iran and engages in talks with Lebanon.",
  "lastNarrativeUpdate": "2026-08-11",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect; negotiations are stalled, and military actions continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Aug 08",
      "text": "Iran demands concessions from the US as it nears a Strait of Hormuz deal with Oman.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAybVA3dzRBU1hnc01FeGxSb0E3MjFhcjRteXBQUHZSVWJMRmF1QjNYM3ludGJFX1ZnVWkxYWlVdHhZY3c3ZmZOb0tadUMzMzJpZmV6QjZpc0ViS3pzbmdjMUg4YTZSdjA5bzE5akpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1728
    },
    {
      "date": "Aug 11",
      "text": "Sources indicate the US has used 'virtually all' of its long-range precision missiles during the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxOZjVoa01lTFhQYVMtVjRxRWZKSng1YzFUTTNJOVI1T1pWZVNKc1czOWhJWHB3VDFFWnVrY3lLT1FnSVBfU1M1RFdrU2FsYVlKZXdhVm9VbF9PaEFNeGVMR0ZtNmlEeGhkWG1iang1U0kzb3hmWENGSnNXODRzdnZYaE1LYkY4Vm1hbzJEcEl1ZzZIRVBQLS1nYUYyTWdDdjZjXzN0NmtuZm5IV2FEdlBQby1UUnBqc0FF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1728
    },
    {
      "date": "Aug 11",
      "text": "Oil prices rise further as hopes for a Strait of Hormuz deal fade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPSzZkYjA2akFqZmtYOVpFd29JWE5aTkxma0FtUnpOOC1Cc19Ob05fMWV1RWxSeGRXYXQ3d1lkckMyOHZjVlY4Wng1YUFyVnpWMW5uOFFrYWM5MjR5bDNuMGU2RWREOGJMVlpFTFkzMTgxbzdlNGRtT2NzZ1k3V2g3OFpqOXA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo Finance Singapore",
      "latestSinceUpdate": 1728
    },
    {
      "date": "Aug 11",
      "text": "The Strait of Hormuz is reportedly 'hit by missile strike' amid ongoing conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOamFyOVhnZG9PZUJlenFjNUhXd0doVTNNS2dCTm5tQU5Wc3NCV1Z4UUVhVDF6ZVZjVEtiYzZVOHVVb281V2ZwS3J1TlRxVjB2eXlHYTVLYUpIZkpfMWw4OWVyVVFvYnRoRFpGamFMRFRSTFp3TVBObDJ1VHpVM3NKM3pQZFVDaEtFcWhZMnFaUWZtbVRwbElXQnQ4OFJublpJbWxEMGxaUnowbkNT?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 1728
    },
    {
      "date": "Aug 11",
      "text": "The US announces another troop death as Israel warns Tehran's attacks are coming close.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNWnJYc0NUMEFyWXc0S0x1LVFjZXNDcV9WQm1sU0JTX05BN1hQSkxEcmYyTzdGdHpuVFJHZWo2Q25JaVptLTZEOEZKOFFJQ0pWV2tCWDNpa1NxbFNaX0x6dkF6dEw2enNEdEdDOGlFMXg1aG51dWRzN2VyaElzRnBkZkFnWkc2UWxsZmpUelNvNFFzejJMZ29pYm9vR2NUUURDNmhaRTdneGx5aXNYdmFqWnJRVWt5ODZ0bVHSAb8BQVVfeXFMTlZhWS1lMjFKSUlEOUcwVUd5RWtjRzdKamdKaTJHVlFTejZWQzdIUmd2Q203S1g3c1d2eUlxMEtkeFFpa2ZoaTNfcUtQcFJLdUF4UU9qWDJaUFlEYXNkdE51UHh2b2N6eGNaVkZ5NUpFUU1EYU9uMUc1NE9FX1lqY0I0azVpVkhhT1FnN2U0MzVmOGhkc2c1c1lxLWtKV081TGVwYmZxZkpxR05LODlONzdHMXBpQms2czM3MUo3UUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1728
    },
    {
      "date": "Aug 11",
      "text": "Iran shakes up its military leadership as Strait of Hormuz talks appear to stall.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5xcnRIaENDM0VobHdzWGIteUx1Y1pwYU42VUlVdzhMUDRvMGV3MWZ2cEppX0NnV29nSE5ZWTFWS3dGd0ZNYjByWldRM3VERU10ZFBaUnY5X2VmTDJ6ekgxNUV4RUJ2U3ZYemZhS0NB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1728
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
      "headline": "Trump Demands Compensation, Shifts to Economic Pressure",
      "summary": "The US administration, led by Trump, is demanding compensation from Iran for past conflicts and is signaling a shift towards economic pressure. Negotiations with Tehran are described as only 'semi-negotiating' as military options appear limited.",
      "tone": "defiant",
      "latestSinceUpdate": 1726
    },
    {
      "perspective": "Iran",
      "headline": "Iran Conditions Hormuz Reopening on US Concessions",
      "summary": "Iran is demanding concessions from the US and states that the Strait of Hormuz will remain closed until the US 'corrects' its behavior. Tehran is also reportedly nearing a separate deal with Oman regarding the strait.",
      "tone": "defiant",
      "latestSinceUpdate": 1726
    },
    {
      "perspective": "Israel",
      "headline": "Israel Prepares for Unilateral Strikes Amidst Regional Tensions",
      "summary": "Israel is reportedly preparing for possible unilateral strikes on Iran and has warned that Tehran's attacks are coming close. The nation also defended its Beirut strikes as precise while engaging in talks with Lebanon.",
      "tone": "strained",
      "latestSinceUpdate": 1726
    }
  ]
});

export default LATEST_SNAPSHOT;
