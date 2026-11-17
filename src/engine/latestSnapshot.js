export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2747,
  "lastUpdated": "2026-11-17",
  "lastSyncedAt": "2026-11-17T19:44:59.790Z",
  "warDay": 263,
  "summary": "The conflict between Iran, the US, and Israel has intensified with multiple direct strikes, significant military deployments, and intelligence warnings of potential unconventional attacks, leading to high regional escalation and oil market disruption.",
  "lastNarrativeUpdate": "2026-11-17",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire is reported; a previous 2-month lull has ended with renewed strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 90,
    "oilDisruption": 90,
    "tradeImpact": 81,
    "sanctionsPressure": 64,
    "globalPressure": 86,
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
      "date": "Nov 15",
      "text": "Iran's third strike on U.S. targets in Bahrain ends a 2-month lull in hostilities.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxQOG1QMmRxQXdlZ2VBcTViV3VwM0NfT0stMUdpVUZnNFlteUFka2l2dXZSN1MzRkhCWmtHVjhUNUpiX3dfTGl6bVlBTmJiT281ZnlKendCaDlUejRxNHd3NkRxYndMQk1Vdmx4TzN6RXFMNHRYT1BLS3ZUTVRDUFBEdnBHTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 2747
    },
    {
      "date": "Nov 15",
      "text": "USS Roosevelt arrives in the Middle East, signaling a US military buildup.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxPeV9idVVUaFB2a1hNbHIxci1yVmxNTTQwczhxSFdvZXFxWVIwX2NDVUd1Wjc2UHprbUxsaU44R1JvYWpqMmdVLTVuNy1Cb2lTYkpTQ3BuMW90a1B0TFdEUEYzcndiZVI2WDNHRDd1Qmt0N0ZwSzR3Si1iS09SYXZXMTV3bExYMEZNTGZTU19nbW54QzQ0VVVVc3loY1RQcHg4djY5eVJXVDdLeDFWZC1oUVl4NNIBuAFBVV95cUxNQ0dvV2xFTmFuLWVhbmVycEw3T1VsUVA5bDVsc19Ibkl3ZUtRWm93MEVjTlBKV01pSFNiWXkwbWItdzZaV0JyZ2FuUVJTM0ljV3RaWDVqLThWcDBTdEN5NGk2NTdyRmdBWDhDRkUxRi1CVWQ5M0xVcFZBU3Q1OGE3djBWenFYczdJYjFaVnVrRlp2OW8zX3ZFeW5TZGdhVDItM05WelpTVVdtb0g4eEFoRGg0M1pLNFBl?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2747
    },
    {
      "date": "Nov 15",
      "text": "Yemen’s Houthis edge closer to Aden, while their army repositions troops from the Red Sea.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2747
    },
    {
      "date": "Nov 15",
      "text": "Iran claims a new attack on a U.S. radar system in Bahrain and a tanker hit near the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxNbEJURjBQYXVkNTJSWEMyUlRrbFJ3NjJETGptNjYxX1JSS3lob1NOekp3WkZYcDdWVUtEaFRHYlpzUGg5d1FlNDE0QWdhMmtoUzBJb2piaWZFZWF3OFBaNjY1dTJMMldkdTVtNE1lWFJadlhpRFdFeWZYam5zN3RwWmFiSUw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2747
    },
    {
      "date": "Nov 15",
      "text": "Five tankers are reported hit around Hormuz, with blasts heard on Qeshm island.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxNLW8wZ0U1T0hHZ0VoRXlUU3hJYVdoX0VrSjF2VWs3d1pTZGtvMUN3SFRDd2QtV2c1eUFuUVBPN3dTWHloeC00WlRfVXU4UWpDeDkydllvdm5BWDU1MkhhemxtWHpNRFBraHVvWkFtSmhTQzcweWt4MU53S191MW4yNDlJazFXSEN4YVFfeXNEYnRyVWZReVhRR05kQnhEa1hYQXQ0VTIzRlF0WWcyRzd4bEpZdTdKYW9SNXBQOGJvWlNKVHfSAcgBQVVfeXFMT19iRE4wbDlMWllvUktMbFZKOS1kQTUwb3Q0cEJHTGFFTHZYOWFHSjlqWkk2S1BpNTh0VF92RGZTRHBhUXI1MWNFcFJJNDBQeVhzdEJ0Y3pFWk92VVkwbXBzUUQ5M1Bjd2FEMUpUeUhjQkJYZGFTZnJzM1k2SjYyTVF6b2Y3WEltcHZ1cUV6WURFYnNxMTVRNGFSUmNTQnNJdUxoSHBScmQxaTlrcmZtcWl5YXNIaTdQYXBHSmNXa3FBc1cwYVdKUkk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2747
    },
    {
      "date": "Nov 16",
      "text": "US intelligence indicates Iran may be planning a 'dirty bomb' attack in Washington.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxQYnY4Z3N4VFhWUEhLZ2hkb0VVZ2xRd0dzdWtoSlcybkJlMHhHRUd3NG02ejJWbHBTcDRHc1Z3WGxfbVZfRGNMd3V1QklwNGRKaDRreXNkVW16MWhraVZhS29KalFKVUhybnBqZDk5OG1nWVNkd3RMQ0t0aFlFdHBHVmZLMlJGUXFqcUtEaHZCWWgzNUNiQkJzNldRZ0ZDVjZfeHN3VTBzLXdqNV9yTWF4Vm5B0gG3AUFVX3lxTE1ZSGFfQy05TGRnU1RHU0FkWVFJUHdxZENMYzh4RloyaC1rZE1VVmlRa0otYXBKbWZZWkczeTVBU1NLS1ZwUGJFTEpiSy1sTjVSVzIwZWw4U3B6NjVacFBHVmFkckEtQUxSMUVGQXNQY3RQZlVEdXhHNWZ1SG9ZR2xwQmxlOE5td3B3QmpnMzF4QzczUVdZWFd6RzNiNmFlYnJaMXh5eXJKc2daSElzYW5fOHFNeGdUOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2747
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
      "perspective": "US Public/Internal",
      "headline": "Iran Conflict Unpopular, Pentagon Under Scrutiny",
      "summary": "The conflict with Iran remains deeply unpopular among Americans, with many expecting it to continue for months. The Pentagon faces a whistleblower complaint and calls for answers regarding US service member casualties from Iranian strikes.",
      "tone": "anxious",
      "latestSinceUpdate": 2742
    },
    {
      "perspective": "Israeli Security",
      "headline": "Israel Prepares for Solo Iran Strike Amidst Nuclear Program Rebuild",
      "summary": "Israel, while seeing no immediate threat, is preparing for a possible solo strike on Iran and is ready to resume operations as the Iranian regime aims to rebuild its nuclear program. Covert actions, including the kidnapping of Iranian generals, have also been reported.",
      "tone": "defiant",
      "latestSinceUpdate": 2742
    },
    {
      "perspective": "Iranian Actions/Posture",
      "headline": "Iran Engages in Regional Attacks, Naval Incidents, and Nuclear Ambitions",
      "summary": "Iran's navy reports tankers hitting mines in Hormuz, while the country targets US military bases in Bahrain with drone attacks. The regime is also reportedly aiming to rebuild its nuclear program, indicating continued military and strategic assertiveness.",
      "tone": "defiant",
      "latestSinceUpdate": 2742
    },
    {
      "perspective": "Regional Stability",
      "headline": "Middle East Sees Escalation and Shifting Alliances",
      "summary": "Fighting rages in Yemen, and Lebanon braces for potential escalation with Israel. Meanwhile, Qatar and Turkiye have inked a defense deal, reflecting a dynamic and tense regional security landscape.",
      "tone": "strained",
      "latestSinceUpdate": 2742
    }
  ]
});

export default LATEST_SNAPSHOT;
