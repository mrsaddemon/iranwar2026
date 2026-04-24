export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 341,
  "lastUpdated": "2026-04-24",
  "lastSyncedAt": "2026-04-24T19:32:52.755Z",
  "warDay": 56,
  "summary": "The Iran War continues on Day 56 with a US blockade of the Strait of Hormuz, an extended but fragile Israel-Lebanon ceasefire, and ongoing US-Israeli strikes on Iran amid peace talks.",
  "lastNarrativeUpdate": "2026-04-24",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 21,
    "summary": "The Israel-Lebanon ceasefire has been extended by three weeks, but Hezbollah has declared it 'meaningless' amid reports of continued fighting in the south."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 62
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.65
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Apr 23",
      "text": "Cease-Fire Between Israel and Lebanon Extended by Three Weeks, Trump Says",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMia0FVX3lxTFB4UkN3UnZ4bXVpSDJtX0JaOUl5OV9PRF82MnlxNXdxYzJyNEFGWWljTlNuSmxkT1pKcWJmMGxIMTFIYjNzd3NERU5VQ3ozMUZJRDI4TjNnVXpRZzZHd0g3cC1JRHJ2WHFsVEpF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WSJ",
      "latestSinceUpdate": 340
    },
    {
      "date": "Apr 24",
      "text": "U.S. Blockade Around Strait of Hormuz Will Last ‘as Long as It Takes,’ Hegseth Says",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE5XRU5GRThDaG03aFJWMURDYmN2dklmYjJwQThkdnRFTkVkMlBjUS1JcXlKNVgzcF9TZ3FQZUl5Y2VoM2hQeVN5alFBRjAzY3YweE1BWTVjTUZWUmV1U1NnQjl2MHJaT3pLTGRvRm9MSlY4emhEYkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 341
    },
    {
      "date": "Apr 24",
      "text": "Satellite Data Reveal Scope and Scale of US-Israeli Strikes on Iran",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxQWDhqTHBrY2Z2dTJDY0VVdFROLTJfczhCcmdZT3d2YW5TUk1ndDFpUDVPbE1VYk1JTkRXaFU5aUlneWlqU1RtaGhDRW1OalVXQlhqM0RmM2d4Vl9QWTEtbjhoNVdkLTFvZ1hNRk5PUE5Ram42MEliSXNaZ1kzclk4UWJRQ1ZYVF9WRGZV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Bloomberg.com",
      "latestSinceUpdate": 340
    },
    {
      "date": "Apr 24",
      "text": "Iran’s Schools and Hospitals in Ruins, Times Analysis Shows",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNbURkVU1ObjFOb2psUGJ2dWtENFROSWd6QnFSMjd2YXotaDBNMGFNV2M5Ylpkai1YRk8xSVA2WVB4MVJFejllT0xuNEFHZnA5cGQ5NlhOTlpuYjA0YmdtMXNpVXNlNWlIY0lvZW5LVlNwLV9KNWxfWXVqOVBJdkNCN1duUk1jczVjODRoVlpZcjd2ZHRnRjEtWHppSFlTYmVsbkJyQnpnX3FRNHkySkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 341
    },
    {
      "date": "Apr 24",
      "text": "Witkoff, Kushner to head to new Iran peace talks in Pakistan, White House says",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxOaldEcGJmb245Z2ZkNVg1c05IaFBQNFQyZ0RJV0pvWDV5Umt5Rm1TRkNXLS14MTdFaUQ0Njk3RGtOdU9CVXVKQ3hybFItNTdnNDFkNGJIVGxNM0FBRXlqeGV2dEhmOE43Z2xDOFFpTXB4anprN1NnOHp5elVxWWR0emJfR2E2anNwX0otdlpYd2tBbXdSRTlrU3ZrSFpNX0xpN0kwNi01dWQ0MEXSAbABQVVfeXFMTmt1ZlhRX2lSeGlOOEI3NTBkbmV1a2tzdDNZdkNGdVZSNmlKbUM0NjQtbkRpaWRTdF90MEN1RG53bVI3MkFJOUItRDA5RUdjczZ4STNSeFdFN2FWS0U5VDhHbUlaM3plUl9YQXNQOXlZNnpDanZ2bEh1TS1tTUNUa1F1UDFpaDVkclRwMkhET2FMRUhfbUxva2pIQWFqSV93cEN0emxwakcwQkZLOUFEcGQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 341
    },
    {
      "date": "Apr 24",
      "text": "Strait of Hormuz will not fully open until second half of 2026, Baker Hughes says",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxQYlNYYVRkbkhyeUIzU1lTVFUtNUpzMTV2dnRHX0syRWhadmpGQUszd1daMm1DY1VOWDVaNVBFejRod1FMOW44TTdrVDFSelp3akM2STdzT0tHemszZ2F0MkxQTHlka1N1UVVaWDZIS285eV9IZlBkem0tQTdueVRHWlNHdVFURzDSAYwBQVVfeXFMT2FKaHozTUQ0b3lfdnRJd0ZOQThhNlpJV3M1cEFOaGFNdFNIckZINF9teGxiQUpCV1FEVmdLWFV5NGJwdTFsUWhVdXlOZk1QVko1Z1hHc29GQlFwR2czeGhpaS13UGNFRHpSQ25PYzd1eWd2OHRROTZyRmR5TUxGVi1HVEFLaWJiRkFrSEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 341
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
      "perspective": "US/Israel",
      "headline": "Defensive Strikes and Maritime Enforcement",
      "summary": "The US and Israel are conducting strikes on Iran and taking measures to secure the Strait of Hormuz, responding to perceived threats and maintaining regional stability. The extension of the Israel-Lebanon ceasefire is seen as a diplomatic success.",
      "tone": "defiant",
      "latestSinceUpdate": 330
    },
    {
      "perspective": "Iran",
      "headline": "Facing Aggression and Blockade Threats",
      "summary": "Iran is under attack from US and Israeli forces and faces direct military threats regarding its activities in the Strait of Hormuz. The 'shoot and kill' order and naval blockade are viewed as significant escalations against Iranian sovereignty.",
      "tone": "strained",
      "latestSinceUpdate": 330
    },
    {
      "perspective": "Global Economy",
      "headline": "Oil Market Volatility Amid Strait Tensions",
      "summary": "Escalating tensions in the Strait of Hormuz, a critical oil transit choke point, are directly impacting global oil prices. The risk of supply disruption remains high, despite a localized ceasefire in the Levant.",
      "tone": "anxious",
      "latestSinceUpdate": 330
    }
  ]
});

export default LATEST_SNAPSHOT;
