export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2690,
  "lastUpdated": "2026-11-03",
  "lastSyncedAt": "2026-11-03T01:10:26.293Z",
  "warDay": 249,
  "summary": "Fears of a renewed conflict between the US/Israel and Iran persist following reports of a US strike on an Iranian island, ongoing diplomatic efforts without breakthrough, and warnings from Tehran of a strong response.",
  "lastNarrativeUpdate": "2026-11-03",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire is reported, with ongoing diplomatic contacts yielding no breakthrough amidst rising tensions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 85,
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 68,
    "globalPressure": 87,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Nov 01",
      "text": "General update on the Iran situation, indicating ongoing developments.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2690
    },
    {
      "date": "Nov 03",
      "text": "US reportedly strikes an Iranian island in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQWTdYYkNwNDM4VUhlRy1IUmhUd3BiS3d2bTIyTTN3NDRyTDl5ekttOWdIbnBQdnQwcEVyMzRJZVJxMG9LR1RFMU9aR21xbjhLcTNFbjZXb3Q1cERyNUZWVmJBdWo5a1B5ZFlwdTM4ZGs0Nk5qcVlXTzdsakE5YzVpSmFnOUMwOGZGcHduSmtNeWFMMk91d2p0SVhUcGhLYkU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2690
    },
    {
      "date": "Nov 03",
      "text": "Iran states readiness to reopen the Strait of Hormuz within two days as part of a potential US deal.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2690
    },
    {
      "date": "Nov 03",
      "text": "Oil futures decline amid reports of ongoing Iran peace efforts easing supply concerns.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2690
    },
    {
      "date": "Nov 03",
      "text": "Israel reportedly plans to occupy southern Lebanese cities if Hezbollah joins a potential Iran conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxPTkNHQnpjM2Q0dWVVNmp3Y3Ixa1Vtb1JLNUVmRkxwcTZXRmtzSzlHRUd3eVZOMW4wdEZDNUVsX0JxR0hLREhkNlBHNWdfRXI4d2ZtMUV6X2dwSFgwSGxLSkZ3S0IxQzRhMDc0ZEJTWEVJY2ZMcmxSdzk2emhlQ0JLeG5TTlBwUzVjOGtObGF0SEtBbzNRd3RKVWNPTDg0MXdFOEkyem9OMEctX255cEhieFdWdS1LaF96dlpvN19EM0M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Naharnet",
      "latestSinceUpdate": 2690
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
      "perspective": "Iran's Defiance & Diplomacy",
      "headline": "Tehran Warns of Response Amidst Ongoing Talks",
      "summary": "Tehran warns of 'painful' and 'powerful' responses to any new attacks while continuing contacts over ending the war. Iran indicates a willingness to reopen the Strait of Hormuz under a US deal, suggesting a mix of defiance and diplomatic leverage.",
      "tone": "defiant",
      "latestSinceUpdate": 2690
    },
    {
      "perspective": "US/Israel Preparations & Warnings",
      "headline": "US/Israel Prepare for Strikes, Israel Warns Lebanon",
      "summary": "The US is reportedly preparing for possible strikes, with Israel ready to join, though specific joint goals remain unclear. Israel is also pressing Lebanon to prevent Hezbollah involvement and planning potential occupation of southern Lebanese cities.",
      "tone": "strained",
      "latestSinceUpdate": 2690
    },
    {
      "perspective": "Regional Tensions & Conflict Risk",
      "headline": "Middle East on Edge as War Fears Mount",
      "summary": "The Middle East remains on edge with fears mounting that the Iran war could restart after the midterms. Analysts are briefing on what another US-Iran conflict would look like, highlighting the significant risks involved in reigniting the war.",
      "tone": "anxious",
      "latestSinceUpdate": 2690
    }
  ]
});

export default LATEST_SNAPSHOT;
