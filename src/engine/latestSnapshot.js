export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1207,
  "lastUpdated": "2026-07-08",
  "lastSyncedAt": "2026-07-08T03:48:25.972Z",
  "warDay": 131,
  "summary": "The United States has launched renewed strikes against Iran following attacks on commercial vessels in the Strait of Hormuz, while Israel has also conducted strikes in Iran and Lebanon amid ongoing tensions with Hezbollah.",
  "lastNarrativeUpdate": "2026-07-08",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.55,
    "durationDays": 60,
    "summary": "A previously established ceasefire or peace deal appears to have collapsed following renewed strikes by both the US and Iran, and ongoing Israeli military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 83
      },
      "behavior": {
        "precision": 0.78,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 90,
    "oilDisruption": 75,
    "tradeImpact": 70,
    "sanctionsPressure": 64,
    "globalPressure": 83,
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
      "date": "Jul 08",
      "text": "US launches new strikes against Iran after attacks on tankers in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxOVGRRMkgyZXh6WmZONDQ3UF9hejJiLXBmY214Q1VlcWpkQWl2UmpmdGsyTHB2bFpJUnhiRklVMWE4dV9wazhTZGMzM3dvRzZMWjJrSF94MzgyejlmYXctMkpNSm4wbHZkUEdYa1NaaDltX2tfb2dHVksxR0hRRk52dFdFcnUzQzRyalhtemFwU0d2V1RJVHNqdC0tWmVqOUZ0eHB3MlJQUTNjNzdFc1pHdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1207
    },
    {
      "date": "Jul 08",
      "text": "Iran strikes three vessels near the Strait of Hormuz, raising stakes for a peace deal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxPXzNZOTZiVDREWWluWVNpdS1OMFNmVm94bWRFMG1CeUFqakZzOTlGbkk4ZEg3bGxPd3YyeHZvM3doVklIUW9uTm1zSXR0ejBac1VIeG1RMy14TzFWUi01M1MwNGxlUGx0YU1mUmlzWlY2aTd6NGJWVXVWZFQ2b3U1QVQzdS1JQ1J3anc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1207
    },
    {
      "date": "Jul 08",
      "text": "Israel conducts strikes in Iran and bombs Lebanon, with the IDF preparing for potential resumption of fighting against Hezbollah.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1207
    },
    {
      "date": "Jul 08",
      "text": "House passes war powers resolution directing Trump to end hostilities with Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE81cnVNSUc5VUI0VW51ZGRjQzNwdWV6Q1d0TWxVZWsyaXFiVEt1dDAwc0dWb2huX0MyOUJnSDRZZDZrLUpaeU5iaU9JT2xIaEdmbmplNFVBV1VQVzNqVFZlbEI1X1VpOFFWRW9TSjZwbjlyUm9PMkYtR3lwdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1207
    },
    {
      "date": "Jul 08",
      "text": "Khamenei's funeral draws millions in Iran amidst regional conflict.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1207
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US/Western",
      "headline": "US Retaliates Against Iran for Hormuz Attacks",
      "summary": "The US has resumed military strikes against Iran, citing retaliation for recent attacks on commercial vessels in the Strait of Hormuz, following a clear violation of a previous ceasefire. Washington officials indicate talks are intended to continue despite the strikes.",
      "tone": "defiant",
      "latestSinceUpdate": 1206
    },
    {
      "perspective": "Iran",
      "headline": "Iran Threatens Talks Amid US Strikes and Regional Tensions",
      "summary": "Iran has threatened to halt ongoing talks with the US after trading strikes, while also mourning the funeral of its leader amidst regional tensions. Iran has been accused of targeting neighbors and commercial vessels.",
      "tone": "defiant",
      "latestSinceUpdate": 1206
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Israel Prepares for Renewed Fighting with Hezbollah",
      "summary": "Israel continues to conduct strikes in Lebanon against Hezbollah targets and is preparing for a potential resumption of broader conflict if a truce is violated. IDF commanders assess the Lebanese army is unlikely to effectively eliminate Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 1206
    }
  ]
});

export default LATEST_SNAPSHOT;
