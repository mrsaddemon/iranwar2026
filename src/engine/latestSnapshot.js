export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1150,
  "lastUpdated": "2026-07-03",
  "lastSyncedAt": "2026-07-03T15:18:07.126Z",
  "warDay": 126,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-03",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 5,
    "summary": "Diplomatic talks in Qatar are reportedly making progress on a potential ceasefire, but direct military actions continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 38,
    "oilDisruption": 85,
    "tradeImpact": 52,
    "sanctionsPressure": 49,
    "globalPressure": 56,
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
      "date": "Jul 02",
      "text": "Iran issues fresh warning on the Strait of Hormuz amidst ongoing tensions.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1150
    },
    {
      "date": "Jul 02",
      "text": "Israel conducts strikes in Iran, as confirmed by the IDF.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1150
    },
    {
      "date": "Jul 02",
      "text": "Iran states it targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1150
    },
    {
      "date": "Jul 02",
      "text": "Qatar talks make 'positive progress' regarding the conflict and a potential Lebanon ceasefire.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1150
    },
    {
      "date": "Jul 02",
      "text": "Iran's top negotiator declares the country is ready for war as peace talks continue.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxQaGFGOW1UbXp6UGVFUm9OallVbzEweHphTnF1cFNoOFp0OS0xX2NlUVdnc1VvUWZTdW9qZDV0QXhRcXJVaG1SRzlvbUpiSmFjRER1UzUyTlZnNlhZVWw5Umh1ZkxtSW1aOC1xbHdvTFVpejlRYk1JUGZCdXZuVUJQT0tjcGZkcDI5Rmt4TTUzQXNMR1d3NGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1150
    },
    {
      "date": "Jul 02",
      "text": "The US evaluates moving CENTCOM forces and naval assets to Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTE41Y2VKUTFZMlF1anJWTkpKU2gxNnd2cTFDOXlheEJXX2tvY0E1UFBLSVJ5Z3BKTVpZZGpvZUs3WE11R0NTUmFoWFlBZDRjZnBtYVduY19JcUhtcWpv?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1150
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
      "perspective": "Iran's Defiance",
      "headline": "Tehran Rejects Intervention, Warns of Forceful Response",
      "summary": "Iran maintains a defiant stance, rejecting third-party intervention in Hormuz and warning of a 'forceful response' to any US 'miscalculation'. Its top negotiator asserts the country is ready for war despite ongoing peace talks.",
      "tone": "defiant",
      "latestSinceUpdate": 1145
    },
    {
      "perspective": "US/Israel Military Action",
      "headline": "US and Israel Conduct Strikes Amid Regional Tensions",
      "summary": "The US has conducted strikes in Iran following threats, while Israel also reports strikes within Iran. Israel's PM states the IDF will not withdraw from south Lebanon as long as Hezbollah remains present.",
      "tone": "strained",
      "latestSinceUpdate": 1145
    },
    {
      "perspective": "Strait of Hormuz Security",
      "headline": "Hormuz Tensions Escalate with Warnings and Seizures",
      "summary": "Iran has issued warnings to oil tankers regarding approved routes in the Strait of Hormuz, with reports of seized ships and stranded tankers. Saudi Arabia has increased oil shipments through the strait amidst the heightened security concerns.",
      "tone": "anxious",
      "latestSinceUpdate": 1145
    },
    {
      "perspective": "Regional Diplomatic Strain",
      "headline": "Peace Talks Inch Along Amid US-Saudi Rift",
      "summary": "Peace talks between Iran and the US are progressing slowly, while the ongoing conflict is creating a wedge between the US and Saudi Arabia. Qatar's Emir is involved in discussions regarding Iran and a Lebanon ceasefire.",
      "tone": "skeptical",
      "latestSinceUpdate": 1145
    }
  ]
});

export default LATEST_SNAPSHOT;
