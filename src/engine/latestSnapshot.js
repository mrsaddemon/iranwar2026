export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1958,
  "lastUpdated": "2026-08-18",
  "lastSyncedAt": "2026-08-18T01:44:13.817Z",
  "warDay": 172,
  "summary": "Multiple conflicts continue to escalate across the Middle East with US, Israeli, and Iranian forces engaged in strikes, threats, and diplomatic maneuvers, while a ceasefire remains unextended.",
  "lastNarrativeUpdate": "2026-08-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The previously active ceasefire between the US and Iran has been rejected for extension by the US, with ongoing hostilities in the region."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Aug 16",
      "text": "Kushner meets regional leaders as multiple conflicts roil Middle East.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE40V2dqMUJIcWdndGVfSXlVeDRKbmkzU3hrTTRyeXBrSWR3NGtUNzNkSm54X19kcDNBNzJBaVV0NEJTNVdLVVRrUlNHLXZETnFwMEIyekJhOTduVWxZQWZyVW5WQ0xua1ByTDc0OG1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1958
    },
    {
      "date": "Aug 16",
      "text": "Trump threatens to bomb Oman if they impede a Hormuz deal and claims US control of the strait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3wFBVV95cUxQT3RSdDBxSmg2Qk9ZWTFVTExQeTJxdHVpWGpFUkJ4YUxLWlQzNkxjRTJaWE5uNnA4MVVpeVdDMVo0MnlycVRBVWhacE9pbmppTmoxVmpnRzJNNkhKSjBubDZXWVF3M3JDN0o0b2R0eHM2U2o4Sm43TVNvQWpKRTVEb0d6SGZGSEhhc0ppQUM4a0hESDlnLWcxQzNtTGZzalRHTGIzcU41MXRmSlNjZlhMRTRjMmE4VHdlZndMY0FlN21HV2NWNE1EZGRNX0QtYkZOWkhtQ3ZhQnh1RFBwVm5n0gHmAUFVX3lxTE5xTkJReWpsRmRvSVlqb3U5TEtfbFk2ZkR5VUhiZHlWZkdnLVhNRFdONU9GaGc5bVFaNzRobDhGempJenJYWmhYWk5fSXFDd25IMWpuMGxqb1o4bVljX1VGSU4xMDFEMVh0TWN0TGkzSWFZc1NJTExxeldieUJ0TnZYYlBDRTNNeWhmZGlYeUVvVkRMVVltaGFfcnc1MkFtaGkwSXFQX0NObHFUOVpFYXp6UVdGdGRkNFVwblJmZWYtQWpNZGhORHNRdElZTVZXMjlNYm52TVhMNU9UUW5fSmRUdHBUUmR3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 1958
    },
    {
      "date": "Aug 16",
      "text": "Israel strikes Lebanon, killing 11, and conducts strikes in Gaza.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxNQWlULVBMUTk3T05wRS0tNnBRUWFReXlURUhCaTNIZVlRaUtVOHczUm5CTi1YRWlveXN6cC1hWDBKOTJqbUpna3JYZUhzLTVrTnU0bXFWd3JncVNCeUc3NTNING9KeHFSNWpUWWhCNFBGUm1aQzBna3c1OFNtclBMZEY1VERJS0x1elM2ZEVwXzZVeTRzelkyM3ZoWTNGeGRGZkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1958
    },
    {
      "date": "Aug 16",
      "text": "Iran threatens a new offensive and offers a $30,000 bounty for US soldiers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxOcUFVOVduVlZTWFpDYURxYjROVWdvd0pIX0tZRGItN2NaRlpWZy1DYTA5NERsOTJNRFBjYVl2VFZZdzRYWkZCZGFTYW9nOEM3UWx0XzdNZzJBRE11VFhhNms2aDRqcEFzaGE5QjZkcVlCWGt4UzVnMnh0cTBYQW9Qc1dZc0luTjBiSldoY0ZGZDRDbGFsOEVEcW5ZVkR1ZFVEM0JIeV9PTmdZNFF4LVlXWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 1958
    },
    {
      "date": "Aug 16",
      "text": "US rules out extending Iran ceasefire, Trump rejects MoU extension.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOcVl4WFplN0o4aVNSQ0REMXZlRmNzNTk4dURRMV8wUXhVQjNzVkZ0S3R4el9XSnE1MWZfLXc1RlZtZmJITURZRS1NaThGcXBKV0NZY2JXRGU1c093dzM1M0ZLcUtaRERHS1B4QUtXU3pwUk5XVWpSTEtXXzlTQ1BBZU85ZE50NHZQN2hXa1FTODlNRHU5UzhWS0tzMGktMktwMXI3X3pNYmRFMVIzSTlJbzl5SWRQa05qZ0lXWnM1bw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1958
    },
    {
      "date": "Aug 16",
      "text": "CENTCOM chief meets with troops aboard USS Abraham Lincoln amid morale concerns.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPb2FwQzRGRnQwTjFNbTRBTHNFY3JtRTRNZkZ5T1VYbFBlbzVhNnZqTTlrWEZaN3VzTWpySWVhOFdNNmhmTzdpWnZkY1NVNzFOWUxvakM4RkJmU1JMSWlpN3BTNFA3UHdUbXNiSjVDbjJWdjhQa0p3WFUyNGRXNzZzS3k2SnBWNlRsN1hCN0swYVR4MW5GbDFXM3VZSGF0QjlHbXZyMVZibFdyd3c2Q1Bv?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1958
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
      "perspective": "International Community",
      "headline": "Calls for De-escalation Persist Amidst Ongoing Conflict",
      "summary": "International observers continue to emphasize the need for diplomatic solutions to prevent further regional instability. Concerns remain high regarding humanitarian impacts and the potential for wider escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Israel",
      "headline": "Security Operations Continue to Address Persistent Threats",
      "summary": "Security operations are framed as essential for national defense against ongoing threats in the region. The focus remains on neutralizing perceived dangers and ensuring long-term national security.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Iran",
      "headline": "Regional Actors Assert Influence Amidst Geopolitical Tensions",
      "summary": "Regional actors continue to assert their influence, supporting various groups in what they describe as resistance against foreign intervention. The narrative emphasizes sovereignty and regional power dynamics.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    }
  ]
});

export default LATEST_SNAPSHOT;
