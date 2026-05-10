export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 599,
  "lastUpdated": "2026-05-10",
  "lastSyncedAt": "2026-05-10T21:27:01.623Z",
  "warDay": 72,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 30,
    "summary": "The US rejected Iran's peace proposal, and ongoing Israeli strikes in Lebanon have eroded a previous truce, indicating no active ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "May 10",
      "text": "Trump rejects Iran’s response to US peace plan as 'totally unacceptable'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxPenk2aFlwU0NEd0tIMm5QVG4wTnRNSVIwX3FuWTNHdFlfcm5WQ0d3ZlR2emNfQ1d5VEVsWldZU1lTUnc0dWZoVkExdW1mcWNGSGQyZFZDaWc3SlliY0tJNWREa2FMZ0VzeklrQk5KbjZDVkRBVF9WbzBMakZsaDNweE9DQmNybW1GaGZaZUZMcU80S0owMkEyRXBDOHNtYWVfbHpzUjVrd1NpVjdnOXFkcDk5OXlHa1JRSm9KSWptNHrSAcYBQVVfeXFMT3RMTDM5YW12QmRDcndKNDYxWnlFWlZDRUh6eF9iZ1ZObllWMnpyeFJoaDEwS0k5NUljTXRJRmFNdTRYYzRScXJ3cWctN1ZIWUFpTFFKWU1tMkQxVFYteGhTZDBMN2ZYOXExa0cyU0w0M3dqejZhSUNDYnZTWlV4Y1hKT3h6X2J1ajlOTG83WURDdS1Qa3JYbWlNMDlHcFhSS2hUc3lDRzhOUnlTcXZOXzZIVjVQTVBydVdiQ1lzYVdMTHF3eDh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 599
    },
    {
      "date": "May 10",
      "text": "U.S. fires on tankers and carries out retaliatory strikes against Iran, accusing Tehran of 'reckless' attacks in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPOE1uOURBaC03bzROOEdzRzdQOGFvc1hOanMxM2w2NS0wOFc2ei1Ga1JDMHBTd0QtVzh4ZGdXSE16TFhkM1lXTWRZXzZ3bDM1SFo3Y1JfXzRoV09fQmJZSUZmOHNpWVptcjBKanJxM21GUS1Ncjc2Qm1rOTFkTk9yck9XWWRfZVk2QWNrdHZNWGIxUEkwX29aMDZ5em5ZaHZfcWlTQ2tncGh5WXFRT2Q0NnhyOXJZU3dYOWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 599
    },
    {
      "date": "May 10",
      "text": "Israeli airstrikes kill 24, 5, 9, and 39 in southern Lebanon, eroding a previous cease-fire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNN19vV0hvR1lXbXI0WkhzTzlfbHhfVDZnbWRDOVZmaWpsS0RBUDd4ajBjWGhhOG9MNWlzVmFXRE9MUkxNaHV5eHlwcWtIYVA3T0ZTc01adjBpeHQwdkxSZlQ4aDV3dXN0VTlCRHRNaEc2OThWRGVZWHBpVmxjMkk2SGVyOVpMQjZJTWd2ME80c2RCcl9GVUZpN2FWZTdhWmpLWmEyMDZaQURnMnR0WFk2eDNuSzlmUTNQNWxIV1Bfdk1ieFZYbGNJV0N6eDVfakFCZGVkQkg0dEhEeHFTTHfSAeQBQVVfeXFMUDZzR0M5UzJWTHpfV1ByYVNLV3FidG5RX3pTOFhSekZUTmRpdVRDa2xsZzh0ZDFBSmV2R0U4U3kzd3pURXUzcGNZblo0RV9oQkxldkdYa2dFM1JhbXc5a2xFLWlxLTNZM2NqRW03VTlBeE9QOUhPUTFFRTJZMWcxLTI1ZjQwTkpRVkhtMklrSl8tV3NQX3VHdEpTTHBnV19YMF96TVpMeDBpcmVKQjB0b0V6eWNHTXN3RUEwd19xanhmMGdRTURZaTZmc1JzOU1DdHU0UTMzeTV6VlFmLTdYblVSODN1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 599
    },
    {
      "date": "May 10",
      "text": "US military intercepts Iranian attacks in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxObFR5UnNDWUxiUV93amJyTEFXLVpJYVV1bVFXWDVVem9FQ1pzX0JHWnVSMHB4aEEtdUszd3g4LWgwdDBTWUQwdHFEb2t1QVRKM3JOQmJMQnppRk1kNDg2OUl3YTk5MGxidGhOVGZ0VC1BSVU1OUZiWUppazY4M3Fyd2FRdTA1bW1CMW5YQVh3c1hPVzBTTGd0aWZsZlNnaGlGUlE0UTJlLWtNeWlDNncxd3RtMjlXbHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 599
    },
    {
      "date": "May 10",
      "text": "The Strait of Hormuz crisis is highlighted as a critical energy security issue.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxNTUJwSmdOdnNmQkVIdHVSNTBzUTBZMHhNRFJVSDRDWGdCNTBoT0puZjM0NWhnVXBKTkswWkVlVXY1RmRRQUtuSTRMU2xGT243UWVka3ptYVpVUi1YWXJ4M1VUM2hqeUE3aVFJTks2VFRWSzAybTNMaGtYaVhGREgxRFZ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 599
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
      "perspective": "Iran",
      "headline": "Iran warns of heavy assault, awaits peace deal response",
      "summary": "Iran maintains a defiant stance, threatening severe retaliation if its ships are attacked, while also awaiting a US peace proposal response. The country continues to engage in military actions, which the US claims to have intercepted.",
      "tone": "defiant",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    },
    {
      "perspective": "United States",
      "headline": "US intercepts attacks, conducts retaliatory strikes, awaits Iran's response",
      "summary": "The US military has actively intercepted Iranian attacks on its Navy ships and carried out retaliatory strikes. Concurrently, the US is awaiting Iran's response to a peace proposal, indicating a dual approach of defense and diplomacy.",
      "tone": "strained",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    },
    {
      "perspective": "Israel",
      "headline": "Israel continues strikes, tests truce with Hezbollah actions",
      "summary": "Israel has continued its military operations, including airstrikes in Lebanon and Beirut, and claims to have killed a Hezbollah chief. These actions are seen as testing the existing ceasefire and indicate a focus on degrading Hezbollah's capabilities.",
      "tone": "defiant",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    },
    {
      "perspective": "International/Russia",
      "headline": "Truce remains elusive as Russia offers nuclear support to Iran",
      "summary": "The international community observes a fragile truce that is frequently violated, with some experts predicting an American retreat from the conflict. Russia has offered to store Iran's enriched uranium, signaling potential geopolitical shifts and support.",
      "tone": "skeptical",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    }
  ]
});

export default LATEST_SNAPSHOT;
