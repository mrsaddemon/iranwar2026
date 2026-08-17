export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1921,
  "lastUpdated": "2026-08-17",
  "lastSyncedAt": "2026-08-17T04:21:57.140Z",
  "warDay": 171,
  "summary": "The Middle East conflict intensifies with a US-Iran ceasefire lapsing, ongoing Israeli strikes in Lebanon and Gaza, and Iran asserting control over the Strait of Hormuz amid US military deployments.",
  "lastNarrativeUpdate": "2026-08-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "A US-Iran ceasefire is lapsing or has collapsed, with ongoing Israeli strikes and heightened tensions in the region."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Aug 14",
      "text": "US carrier group is headed to the Middle East to replace the USS Lincoln.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1921
    },
    {
      "date": "Aug 14",
      "text": "Iran claims the Strait of Hormuz is under its control.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNQzlkS0EwWUsxSGYtSjNaal92eVBWNjhwcnhzdS10VXNRd1NTdnZ6OFNxZ2xXdWZ4NWtwZ2pQcWdnbmJ3M3hrU0E1RVppcjR1WU8ydjlRdm91UVJjVDNndk0zSUR0a2VNZ0NNZmp1MkNBNHVpaGpwUy1VdTJnbzBQX2JZeDdwTXd2NEpZN3RhNzY2OWZGR052eUYxTzZ2emVfSWNCZ2VKTFc5X0MxU1JHdjNJVTbSAboBQVVfeXFMTTBCVzhpTmo0MFR2eXFDWktoY0pfVVVoeUVPcU9heS1FaVdwTEJsdDB0eU9HWkhKMkM4YzdJb0hoT2ljdl9vTXlMNFRkdFJQcmJRWDEtajh2VDMyLWpNYXRtd0NyUTJkUnVKZ09CRUVYSVQ5Z1IxUklWUnNYNE9zelpmUEZTNnE3SWY0X0VSYkpaNldjcjZPQkYzNmRlVUtWLUpYSUhmelpRRGxmOWRVcDR2NzY3WjR3WUVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1921
    },
    {
      "date": "Aug 14",
      "text": "Israel bombs Lebanon, killing 11 after Hezbollah wounds 3 IDF soldiers.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1921
    },
    {
      "date": "Aug 14",
      "text": "US-Iran ceasefire is due to lapse, coinciding with renewed Israeli strikes.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1921
    },
    {
      "date": "Aug 14",
      "text": "Iran claims Qatar is holding its pilots.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOU0NBVmpueWNUWGJ1ckoxSW1wR1dkX0ZHRzk3bWFUcUlGamk0NjBjMEo2LXVRNTlUUkxibVdSbHdLS245VF9Hc2hzbE9JYld3WEt4VnBPSWVwMjFoTlQyc2RSYjdzLU5ZN0FoZ1dSaVVGUGIwbU1XbzlCY256ZnloUFBuNnlPakV3RFlFWHpqRERKa3lIblRReG80R1hyN1RCczFLdXYtRmJQNlo3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1921
    },
    {
      "date": "Aug 14",
      "text": "Trump's envoys meet mediators as Israel strikes Gaza.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxNQWlULVBMUTk3T05wRS0tNnBRUWFReXlURUhCaTNIZVlRaUtVOHczUm5CTi1YRWlveXN6cC1hWDBKOTJqbUpna3JYZUhzLTVrTnU0bXFWd3JncVNCeUc3NTNING9KeHFSNWpUWWhCNFBGUm1aQzBna3c1OFNtclBMZEY1VERJS0x1elM2ZEVwXzZVeTRzelkyM3ZoWTNGeGRGZkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1921
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
