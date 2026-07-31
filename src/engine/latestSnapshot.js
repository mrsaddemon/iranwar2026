export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1544,
  "lastUpdated": "2026-07-31",
  "lastSyncedAt": "2026-07-31T23:45:29.740Z",
  "warDay": 154,
  "summary": "The US-Iran conflict has expanded, drawing in Egypt and Kuwait, with continued US strikes on Iran and Iranian retaliation, leading to rising oil prices due to Strait of Hormuz disruptions.",
  "lastNarrativeUpdate": "2026-07-31",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 21,
    "summary": "No active ceasefire is in effect as the conflict continues to expand."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
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
      "date": "Jul 30",
      "text": "Egypt was struck for the first time as the US-Iran conflict expanded to involve more countries.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBDZ0dMZk1tUGZDZlItTm1MSmR2ODExY2t6VFVCeC0xTy1IVENybUZIalVuSmw1cWI0ZlN3MTNvX3ZxMy1aUlFiSkg5ejVwQzhxc3loWmRRUEFoVnZIdUd6cWpaSFZyU1hPWWpLSFFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1544
    },
    {
      "date": "Jul 30",
      "text": "The US conducted strikes on dozens of targets in Iran overnight, impacting peace efforts.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxOSnVOeXVGanRXY1VyT01TUlVGZTNxSjlDR05vcTlHcjdRNFU5OFJIRnZSd3RsV3VtNVpCY1lua05jV0F4cnltUlZhek5iYVZTeXFOLUpqaHpjSWdhbGVRZENRR0dHT1RrSTZ6M0l5d0c0RHMwOXFnYjNFcmJ0SFdSTURlU0NPdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1544
    },
    {
      "date": "Jul 30",
      "text": "Iran claimed to have targeted US military installations in Kuwait with drones.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1544
    },
    {
      "date": "Jul 30",
      "text": "Iran stated it attacked two tankers and stopped ships transiting the Strait of Hormuz, leading to increased oil prices.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxPQ0l6N3lHU1dIT0dUQk9NYlJoVzY4c2lUcHlCa1l6eVNpeF9wakZUbWpKQ3pPZE1tb1NDT0pkZ2oyMmJDSTR3UUpmQ09KUWMwU0h5SHRSTFlhcHRGcGtvOHVKeTRmdGQ5aUtMYmYtQjVMRjBneFJ1Y0JXbkwxdTlHNkhESk91T0kyQ3fSAY8BQVVfeXFMTWd0U2pVRmhJNTNYVEFOaE4yTUU2enFTQWowRkY5aUlodkhtX2RfeTlYd3RVVFkxWnFqY1huYUxGQlcxZWFwcHRXSzg4QjA3czNibzFFalBMWU9aSVN6Q2tfV0kwWXctb3FvVnFvUGZsTzVGSHdpYTNPdUlZc3VpbExUUlBiblJBdDFWSzFjTUU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1544
    },
    {
      "date": "Jul 30",
      "text": "Oil prices rose following Iran's actions in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1544
    },
    {
      "date": "Jul 30",
      "text": "The IDF destroyed a Hezbollah tunnel network beneath Beaufort Ridge in South Lebanon.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1544
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
      "perspective": "US/Allies",
      "headline": "US Responds to Attacks Amidst Regional Expansion",
      "summary": "American forces are actively responding to attacks on their troops by hitting Iranian targets, while also navigating the expansion of the conflict to new regional fronts. Concerns are being raised domestically regarding the treatment of wounded US personnel.",
      "tone": "strained",
      "latestSinceUpdate": 1532
    },
    {
      "perspective": "Iran",
      "headline": "Iran Vows Retaliation and Stands Firm Against Enemy",
      "summary": "Iran views recent US actions as requiring retaliation for civilian casualties and urges its population to remain steadfast against perceived enemies. Tehran also claims to be nearing a deal with the US, even as it tightens its control over the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 1532
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Israel Engages Hezbollah While Halting Iran Strikes",
      "summary": "Israel is conducting air strikes in Lebanon and engaging Hezbollah forces, including demolishing tunnels. Simultaneously, Israel temporarily halted strikes against Iran following US diplomatic claims, indicating a complex and multi-front security situation.",
      "tone": "anxious",
      "latestSinceUpdate": 1532
    }
  ]
});

export default LATEST_SNAPSHOT;
