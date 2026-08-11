export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1726,
  "lastUpdated": "2026-08-11",
  "lastSyncedAt": "2026-08-11T00:35:51.193Z",
  "warDay": 165,
  "summary": "Tensions remain high between the US and Iran over the Strait of Hormuz, with both sides demanding compensation, while Israel prepares for potential unilateral strikes and engages in talks with Lebanon regarding Hezbollah.",
  "lastNarrativeUpdate": "2026-08-11",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No active ceasefire or de-escalation agreement is currently in effect between primary belligerents."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
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
    "nuclearIndex": 20,
    "escalationLevel": 80,
    "oilDisruption": 90,
    "tradeImpact": 79,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "text": "Iran demands concessions from US regarding Strait of Hormuz as it nears a deal with Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAybVA3dzRBU1hnc01FeGxSb0E3MjFhcjRteXBQUHZSVWJMRmF1QjNYM3ludGJFX1ZnVWkxYWlVdHhZY3c3ZmZOb0tadUMzMzJpZmV6QjZpc0ViS3pzbmdjMUg4YTZSdjA5bzE5akpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1726
    },
    {
      "date": "Aug 11",
      "text": "Sources indicate the US has used 'virtually all' of its long-range precision missiles during the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxOZjVoa01lTFhQYVMtVjRxRWZKSng1YzFUTTNJOVI1T1pWZVNKc1czOWhJWHB3VDFFWnVrY3lLT1FnSVBfU1M1RFdrU2FsYVlKZXdhVm9VbF9PaEFNeGVMR0ZtNmlEeGhkWG1iang1U0kzb3hmWENGSnNXODRzdnZYaE1LYkY4Vm1hbzJEcEl1ZzZIRVBQLS1nYUYyTWdDdjZjXzN0NmtuZm5IV2FEdlBQby1UUnBqc0FF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1726
    },
    {
      "date": "Aug 11",
      "text": "Israeli media reports that Israel is preparing for possible unilateral strikes on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxORnBwMDd2NXlSclA4SjZxUzNxckZMVFRHckt1X25YRnlMaWxhVEJsUU9QUU1aNkhnc3o5RmVMUXJQRmFMRWFVSHVZVzhwbWpFM3RGdlRtN3R6RUFqdF9uYVVsTjlkaEJVeHA5ZXh5bnl2V0VZYkYtOXhJVFN2Q0VWcEtYaWNiQXhTMHZoc3lXbDIxdU1wNzh1azM3S0NrdnBSLTh5ZHlScmRfazkxM0FtblVNaTE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1726
    },
    {
      "date": "Aug 11",
      "text": "Iran states the Strait of Hormuz will not open until the U.S. 'corrects' its behavior.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxOMVhleVdzazZyT0ZHcXV5aWJxa3FZaGtTelNHdUJ5cm4tNXNlLU5PYUM3Tk40cVRLQjdWY2Job2NyM0hNTnhKN1diQkkzN0Y0a0lOWmtCaGxxdU5GTUFxZW9IODM0MjI4aU5sS2YzREFrODBHV0pocFpGMkpPWHhla1JaXzRzclYtb085WFhMOFcxaXVfWWh1SXQzSmpJNUU5TzR3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1726
    },
    {
      "date": "Aug 11",
      "text": "The U.S. announces another troop death as Israel warns Tehran's attacks are coming close.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNWnJYc0NUMEFyWXc0S0x1LVFjZXNDcV9WQm1sU0JTX05BN1hQSkxEcmYyTzdGdHpuVFJHZWo2Q25JaVptLTZEOEZKOFFJQ0pWV2tCWDNpa1NxbFNaX0x6dkF6dEw2enNEdEdDOGlFMXg1aG51dWRzN2VyaElzRnBkZkFnWkc2UWxsZmpUelNvNFFzejJMZ29pYm9vR2NUUURDNmhaRTdneGx5aXNYdmFqWnJRVWt5ODZ0bVHSAb8BQVVfeXFMTlZhWS1lMjFKSUlEOUcwVUd5RWtjRzdKamdKaTJHVlFTejZWQzdIUmd2Q203S1g3c1d2eUlxMEtkeFFpa2ZoaTNfcUtQcFJLdUF4UU9qWDJaUFlEYXNkdE51UHh2b2N6eGNaVkZ5NUpFUU1EYU9uMUc1NE9FX1lqY0I0azVpVkhhT1FnN2U0MzVmOGhkc2c1c1lxLWtKV081TGVwYmZxZkpxR05LODlONzdHMXBpQms2czM3MUo3UUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1726
    },
    {
      "date": "Aug 11",
      "text": "Oil prices climb 5% as Iran and the US both demand compensation and hopes for Hormuz reopening fade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxQaXpSdTFpV0NCUnZ4ZmZ3bXhmR3QxR1VVbGthTXNFSmZDNU03WWxGTDQ2eE9SeVZPYVE1aHl3NWZuS3FxcW1WSnBBb3J1SXJLY1F6RnFkTy1wdVZHaXdMZkhpclJjM09BU0k1RmMyaFNHQmtnZzA5elZZbUpHVUFEZHFNbnJaek93UlM4cUZJTlU5ZzRUckVJVXdTVVd3amluLWRDb1ljZkY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1726
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
