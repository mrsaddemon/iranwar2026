export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1408,
  "lastUpdated": "2026-07-22",
  "lastSyncedAt": "2026-07-22T01:10:00.639Z",
  "warDay": 145,
  "summary": "US forces continue strikes against Iran amidst tanker attacks, Houthi threats, and discussions of a ceasefire, while a security pilot begins in southern Lebanon.",
  "lastNarrativeUpdate": "2026-07-22",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.81,
    "durationDays": 10,
    "summary": "Mediators are pushing for a 10-day ceasefire, but no active agreement is reported amidst ongoing hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 58,
    "escalationLevel": 38,
    "oilDisruption": 80,
    "tradeImpact": 48,
    "sanctionsPressure": 49,
    "globalPressure": 55,
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
      "date": "Jul 22",
      "text": "Another tanker attacked in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQajNHTE9aUmxpa2RIMy1jNjZ4RmgzZlk2OXE3ZXBtRzdxaUpnQldzeUtxaHh6Z3VTQzZMUGNtZ1oxNE5lQzZwLVhnX3BTZWk1OVBVT1ZiNFFtMnoyRDhHbFBnV0pFdTdNcnBKdWVuT0RidVJoWXFCYkdlNDE2V1hmZ1VhUlZhLXExZTZjOHo1YmRYMm5ra1U4RE9DU29CMVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1408
    },
    {
      "date": "Jul 22",
      "text": "US strikes Iran for 10th and 11th consecutive nights.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPLUh0VUFhQy00V0hoRUU0bnctN2V2aFM1N1FkeXVJUGdpTTlwRnhQOHV5dFFFdXFmS2dTN1ZQQWlYR3pSb0RPYkRGS2NySGl2MU5PRnVEWmFKLXF6RktkQTBDQzFvcEFfYTZsd2lOQ3M0WExtQUNTbnZUSWxzRU10UW1wVXpHc1h5anVidkg5YW1JVU0zNXdIVWl2b9IBoAFBVV95cUxNVHRfZUFKdTR6NWlGVlZNUjN1RFQ1TG44TmNCQVNtNjdCaldMREkzZklKYVN4cE0tanlwRU85d19UZGd2aVJuNTFfNkxFclhDaFpwejcyMXgtWUxRVE44SndnOFFCeWd4c1hVSllrMjVQRWFYb3B3R3IzMkFNQlppVE5wb1pXV1dRSkFEZVhXYUFQb0NkNzZmQnhQS2xnMndm?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1408
    },
    {
      "date": "Jul 22",
      "text": "U.S. military identifies 2 soldiers killed in Iranian attack in Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxNWXNJYmdvY0pfYnlkVm5aV1RZV2JrMl9FbkE4cElqZnJXR05ocDd0RERIVEFnMHRncEI1RUhaR2pxbGV6U1VEalNPM3dzTnZjcVduclhwNnNRZzR5cnIxMkZzaDJzV21zdHY4ZVhRTmVsRk4wNDY2MTFQX05zM21GVDNZaUY3b0tUckIzUTF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1408
    },
    {
      "date": "Jul 22",
      "text": "Jordan is becoming a new focus in the U.S.-Iran War.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1408
    },
    {
      "date": "Jul 22",
      "text": "Trump threatens 'heavy attacks' on Pickaxe Mountain and claims US will hit Iran nuclear storage facility 'pretty soon'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxORlZ5bEhMQlpYV2JLZTRpUkJTblJYa0VGeFhhblVfUkp1TDIzMFl6ZnlIZ2gxbDZJUXBpQmdZXzc0RjQtRmU1cjhXblRCN3lwbG5YNThjR0xLMnRJTklldUNYYzlrLXRjeUJDM0dPTjFBcVZQdUQyU1VZbmtYQ1ZfSld3cUppa1ZaVk4yWVNCYnFpbEJZVkxFaHdjcDVoMWplN2tRV3pTaWJodV9zZGloY0JRYjVTSXpMbUpV0gHAAUFVX3lxTE5Sb3VwbFB3cUlwMkoxU3VEZjBEUjBLZkxyVDFpNUp1WG5PektuUGw4Z1hTWEUzbE14dEd5X3RWMmxiRG4weVJoWHY2emd1N0NFSFY4QzlwZmQ4Q0s3d2NudG9CNTZjRUZxSDMxV0QwaEkxOF9qaTZ2cGJtOFRZVHJSYTR5TTc5b3NWMkJWbThFRnNJdUxJNExpa1M4NlFLN2dWVzJKX25RV2U0a0kwam15Wm8xZU1lTHJpUHVfNkZ1OA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1408
    },
    {
      "date": "Jul 22",
      "text": "Tankers carrying Saudi oil turned back after Houthi threats.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi7AFBVV95cUxNZUNEazROOWlVb0djbTd3cVgxTlc5VkRVMzBuMjdIVl9jVXZidWZIWlRiZUJnQjZ2OHp3LUN3VEd3T1BsdGduSl8tTG1ydm5rYXlpUlBRblU1MVA3X0RpUndfVFpPQ0dfV0hiLTBJek9VN3ZzTGJob1hCNC1hY1MwUEtkVXhCbXFCUDlwbVZQTFpjU0VMSlRQeWZsa1U2MC1IZFVFbGlmMWtCejlibndybWo1UVdZSlZFcV9yd1NlTDRKRllzcjliQU8yRnBpeGdTVFdkQTRESjN4Ym9oOElQTUFPWkZOUEtBY3ZnWA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1408
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
      "perspective": "US Resolve",
      "headline": "US Intensifies Strikes, Issues Nuclear Warning to Iran",
      "summary": "The US continues its military strikes against Iran, emphasizing its commitment to action despite ongoing costs and threats. President Trump has issued strong warnings regarding potential strikes on Iran's nuclear facilities.",
      "tone": "defiant",
      "latestSinceUpdate": 1408
    },
    {
      "perspective": "Iranian Pressure",
      "headline": "Iran Faces Sustained US Pressure Amid Regional Tensions",
      "summary": "Iran faces sustained US military pressure and economic threats, while also navigating regional tensions by supporting proxies and threatening shipping. An expert suggests Iran avoids direct attacks on Israel due to fear of retaliation.",
      "tone": "strained",
      "latestSinceUpdate": 1408
    },
    {
      "perspective": "Regional De-escalation Efforts",
      "headline": "Ceasefire Push and Lebanon Security Pilot Underway",
      "summary": "Amidst escalating conflict, mediators are pushing for a 10-day ceasefire. Separately, a US-backed security pilot involving Lebanese army deployment in southern Lebanon is underway following an Israeli withdrawal, indicating some efforts towards localized stability.",
      "tone": "neutral",
      "latestSinceUpdate": 1408
    }
  ]
});

export default LATEST_SNAPSHOT;
