export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1013,
  "lastUpdated": "2026-06-20",
  "lastSyncedAt": "2026-06-20T11:30:28.947Z",
  "warDay": 113,
  "summary": "The US has released an agreement with Iran, while a fragile ceasefire between Israel and Hezbollah is in effect despite reports of continued fighting, and Iran has imposed mandatory insurance on ships in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-06-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "Israel and Hezbollah have agreed to a ceasefire, but reports indicate continued fighting and exchanges of fire in Lebanon, making its stability uncertain."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 40,
    "tradeImpact": 29,
    "sanctionsPressure": 54,
    "globalPressure": 57,
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
      "date": "Jun 20",
      "text": "US releases official agreement with Iran, detailing a 14-point text.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE5CQ3p0cG16TzJCYXJpcEQteFZSMkxpQ1dwR3pjNFkxUElfZXJYN0R5ZlRDdzVDVUJQXzVOcHRFUGlHcW5VSmU3MGd0QWoxRGJySklOREdEXzRiZlZjNjd1Z1FWcFJLLTJBV3FsOTgwMTdIeThTYWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1013
    },
    {
      "date": "Jun 20",
      "text": "Diplomacy for US-Iran talks is 'back in motion' in Switzerland, Iran, and Egypt.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxOR25aelZYNGo5ZVFrNnBfUDQzRTd6eTBzbmUyUW40aGg1MVFqOS0tSVFRNXIwZjAyOFg0UWFSSlAyOHRVMGw1UGtaMUVWTmNWcGtpeTV4eFhacHJFc0d5dVl1THFHa2NMMV9iYmhLSmk4Skc4OTU0U1JmNkNSVWExWDBia1REZF94WTUxbjdrWWJORGdyeGctMjhuNkJQdGlmdzVNbXEzUF9YRHBJQk0xRGlmZWdETEJ2bGYtR1pB0gHDAUFVX3lxTE5Vd2Y1Zm9PZWJQd3VMZ21rUDM3anBFY0NQN3QwN3l5Sll4cTZaWkV6Snc4RkJ2RHRsWlFnbHlBWXpNaGxma1RmZTBPVTAxc2x3U29EM2duMV9RMVJVNDVSREZXSXVnN0p3MmNqaHBManNTSkRFdlZlNkwydVVRTFlRWFR5YmdVZGtGVC1vM2dWTGd0d0hoWGdTMHh3aWo5NVZOVl9RWFBkLUVBRUtoMzdTV1BReTIxT0ExR0ZzM1ZZclRSZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1013
    },
    {
      "date": "Jun 20",
      "text": "Israel and Hezbollah agree to a ceasefire, though continued strikes and fighting are reported in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE81dUtGajhYYWJSU19acmJzaGRKdk5VX1k4ZWJ6My1jb1VJQjhnOUF0cFdQaEpYWDBiQ2dvSWpES0ZCSXZuWW9tSGwxX01vSHdhVE5Jaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1013
    },
    {
      "date": "Jun 20",
      "text": "Iran imposes mandatory insurance on ships transiting the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizgFBVV95cUxNUmxSMkJzZlRKTGhXcklpcnVKd21hQ0Izd1RZWEpJeTJ4dllQYWxNMlMtMGt5TGx6MDJXZlRYbUhuSXR2cUpDNXhWQlBTWlJJNWZ4cGFZbk40aFcwLUdMOXVGdmlwZlh6aXNQYTViMWhGNko4Wnk2Nk9IX0xqVkx4blI3WVl2MmhxOXNvdmxnRThpUFlBRDNRbHRYekF0d2VZUDhZVFZXOUtnLVpudEZ1LXY5aXQzVXU4UkczaXhqU1Jld2FxaUVQY2dRYmJWdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Lloyd's List",
      "latestSinceUpdate": 1013
    },
    {
      "date": "Jun 20",
      "text": "U.S. military lifts its blockade following the US-Iran deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxNWDVyRkR6VWszZFAta3UzZkFoa1pUdXpBWXZKSGc5QU8zRXduQWd3dFNQLW8tOEd4Z0h6Ykx0bzRBMmZhMlZJSGJ5QUdHWFYwcGRmWjg0YVZ6cXItaGU3QVFPeHFMaUkwbnI5V0hvcXlfd01zdEM2aWVCeVpNS3BBcTlEOElXbC1mM2Y2cGxhRUVmcVpfM3ZiejJ1a2lUM2ZlYkpuTXBpZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1013
    },
    {
      "date": "Jun 20",
      "text": "Pentagon investigation into an Iran school strike is being finalized.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxPQjhtZ1VHZjRERUl4SUJ3MVZSbHB0c1JHZUZyYmY4bHJ1SFl0TDlveTk2UmdTT1pWM2hyNEdBajBXbzRQX2RJSE1PS1hIa0dQbG4ySnF2V0Q3bzBpano5SzdLN2pHMEFQWG1RVFA3U1oxOG4zNDhNOW1FOWk4MUliZ1NsaS02cVhTaEl4Tjg0VndLUlBEczNZM0l0aVN2d2lGY09xZ2dqdUNqSGFYcWx2SlJDYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1013
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
      "perspective": "US Diplomacy",
      "headline": "US Brokers Iran Deal Amid Regional Tensions",
      "summary": "The US has successfully brokered a 14-point agreement with Iran, aiming to de-escalate regional tensions and set the stage for nuclear negotiations. However, the process faces challenges from ongoing regional conflicts, as evidenced by the postponement of talks due to Israeli strikes.",
      "tone": "strained",
      "latestSinceUpdate": 1010
    },
    {
      "perspective": "Regional Stability",
      "headline": "Ceasefire Holds, But Assertions Remain",
      "summary": "While a ceasefire between Israel and Hezbollah has been agreed upon, the region remains tense with Israel maintaining troops in Lebanon and having conducted recent strikes. Iran, having implemented the deal, is also asserting control over the Strait of Hormuz through new insurance requirements.",
      "tone": "skeptical",
      "latestSinceUpdate": 1010
    },
    {
      "perspective": "Economic Outlook",
      "headline": "Hormuz Traffic Up, New Fees Emerge",
      "summary": "The costs of the recent conflict are significant, impacting lives and finances, while the Strait of Hormuz, a critical oil transit point, sees increased traffic but also new Iranian fees, signaling potential future economic friction.",
      "tone": "anxious",
      "latestSinceUpdate": 1010
    }
  ]
});

export default LATEST_SNAPSHOT;
