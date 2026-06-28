export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1104,
  "lastUpdated": "2026-06-28",
  "lastSyncedAt": "2026-06-28T23:43:09.631Z",
  "warDay": 121,
  "summary": "The US and Iran have exchanged multiple strikes following a fragile ceasefire agreement, with Iran targeting Bahrain and Kuwait and threatening to halt talks, while regional tensions persist between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-06-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A ceasefire agreement between the US and Iran is in place but has been immediately strained by renewed tit-for-tat strikes and threats."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "precision": 0.7,
        "aggression": 0.5
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
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Jun 27",
      "text": "Iran's IRGC claims destruction of 8 US military sites.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1103
    },
    {
      "date": "Jun 27",
      "text": "US launches strikes on Iranian sites; Iran retaliates with drone/missile attacks on Bahrain and Kuwait, threatening to halt talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxQcDBTQkFEbzlzV3FGUXhBeks0Wm5CV2RIU0J4aFcwTl9jRFRNeHRNbkxzVEZNa3ZNSTcwS1FDZm5PM3RDbVJuMFc0bWRwR1hhSlZFVGlMSkdvOC1GcnlLUWpUbjQ0aFlMYWN3X0gtdVBUWHZYSHNKR3BKelJtdUZ1dUpnTWVubU1BOWowd1N3aE1kckE1Uklya1huN25iLUxYM2Q5N0JtcVY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1104
    },
    {
      "date": "Jun 27",
      "text": "Markets react to a fragile ceasefire agreement between US and Iran, despite ongoing violence.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1104
    },
    {
      "date": "Jun 27",
      "text": "Iran asserts sole control over the Strait of Hormuz, dismissing US threats.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxPSm9KZGIyaU5OUVJQZXBweE5GZWc4dklaNVBxNlVrODJ2RV8yb1luSk9wUURSbDloVlBvMjBUeUpRVkpIZ3cybWRXZVNwVzM0bVNSZWNmWHlpa1ZCMDd6eHgyWGFnODdtb1pnS3JXa0VNY29xV0lRQllqbGdFUmRyZmJFVkZwdzVNenRiWDJFTjhnNXNqN0tfNkc1ejQyYzdHRW9Yc1RpaDVwdl9BbW90ZDdR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1104
    },
    {
      "date": "Jun 27",
      "text": "Israel mobilizes military and tech to counter new Hezbollah threats.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1104
    },
    {
      "date": "Jun 27",
      "text": "Trump urges Syria to confront Hezbollah, causing regional concern in Lebanon and Israel.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1104
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "perspective": "US",
      "headline": "US Strikes Iran Over Aggression",
      "summary": "The US states its strikes on Iran are a response to continued aggression against shipping and violations of a ceasefire agreement.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    },
    {
      "perspective": "Iran",
      "headline": "Iran Retaliates Against US Attacks",
      "summary": "Iran asserts its strikes are retaliatory actions against recent US military attacks and to defend its sovereign interests.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects US-Israel Deal",
      "summary": "Hezbollah's leadership has publicly rejected the US-brokered security deal between Israel and Lebanon, calling it a surrender.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    }
  ]
});

export default LATEST_SNAPSHOT;
