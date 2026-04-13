export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 132,
  "lastUpdated": "2026-04-13",
  "lastSyncedAt": "2026-04-13T03:47:02.966Z",
  "warDay": 45,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-13",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "Despite earlier claims of a ceasefire holding, peace talks between the US and Iran have collapsed, leading to a US announcement of a blockade of the Strait of Hormuz starting Monday."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.88
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.78
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Apr 11",
      "text": "Trump states US-Iran ceasefire is holding well, but US will blockade Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTFBOTVJhU0NGZ21nWU1ka3pKNnNUVHR5ZDZ5YW5UMXJ2RnJlRHNUMks0T1ZWdGtucEx1dmk5ajd3LXNGQy0yMU5Hb0JxeDNXNzlnWnU3aHg5eXRnOTlrVVgyRHdoYXJJZnYycFBBdnNFNWhuYm93MjVteDBR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 132
    },
    {
      "date": "Apr 11",
      "text": "Iranian delegation arrived in Pakistan for peace talks with US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQUkJlNWk5X0x6X25UNC0xdHR1UnhQcWxwM2dqYW5uRVlSYXVEUFZzV29za0diTk1EaUtFMUFGaC14cmpjcTlmVU0tRDh1YzZvRXktNUpVVHpXZzFEOUtGcWhTa3JvalgzYnhLRUdWN1NLaTJkdk5PYmd5UkV6OUNHS3hUVmpnaXhMMEMxRXpvazlod2l0T1FXRmUzeE9wV0JoOVdaaVVrVEU2Wjk4ajFwYnlWNzZ2OHdUSjlTZm1hUWfSAcYBQVVfeXFMTzdFS2dXNW1zRS0zQU1IWm1uTjNQV0RCblc0Y3ZrLUhaNWlENjFoNXlUQ1I4YWtpREgzRWdvaXgwMjVUUzZZMElyeFEydC03U0t1YXEtQzNPTWgtMW55NHdkQjVrODFsb25zaWtVWDhhTXRLTlI5TmZKZUNiNEZFd0hQdldkbkM3bUg1T29zcG4tVXJnTVJPSkNZWmtaRzJRS0dORlpjeEdQamdocUpxWGpxNUZJTERNMlJSSHJmVkNuMlhiekZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 132
    },
    {
      "date": "Apr 11",
      "text": "US military announces blockade of Iranian ports and Strait of Hormuz after peace talks collapse.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxNMURTblM1aXB4LUNMLVNXdlEyaUJ2WER3RlFMa3h2U0pjc3MxNGRJU09TWC1oNUlpNWdYMXVPSXhid2J5TW82X21GM19lWi1Sb3VTSWZVdHVUNVdsZmlsQ3lHNllSNjZrbkpieUt2N3dxdDRoZFFJRjVSbWZnTE0zOU95N1hqN0tsR2NJeQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 132
    },
    {
      "date": "Apr 12",
      "text": "IDF reportedly planning for renewed conflict, Trump considering strikes on Iran after talks fail.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNaEpDUHJybmdpTDJ0cmZFd0pJd2pGRmF3UGpUT3FxV1pBalowbnBUWlhRYnNFRUdjOXA1MU12T2lVVFVkR18xblJseU5WU0pNUlZzVFVPUDhEbTg4UUIyY28xOHE1bUpkel9UOFRPY1dhNmtJbWg1UmY5VGtyTzN6VmZDRE5RYzYwa1RDQUF0cjd0dTlmUGRFdGFMVnBnbkdrV3o1VnVhd3E5a1hhVGlPN3Iya2vSAboBQVVfeXFMTzlzcEIweDJDVm5PZ18zQXo3RUE0a2F6ZldDa21ZTkFNR0F4cHVEVTlIY3c1U3hxMjRoRWdoS1NFN0h6NUpHNjlrazhxRUtpajNFaEVNdXhncGJWWXhjYU93aTMydllnSjBmZHY5WHlXVTFXaEwzbE50bk5VdmJkZjlLNjVUazNsZGxndnBhYmJnMnBfU25tNWVCLWRaOUxuU1ItSXNuelRRSDl6a050eFllWW5ESFZDNFhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 132
    },
    {
      "date": "Apr 12",
      "text": "Israeli strike in Lebanon kills a paramedic, according to Lebanese Red Cross.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxQaTQxazV6MlNqWXFpenozdGFVTzV1ZGdleHctcGJGNVp5Mk5xVmRZdnJqUlAwUUtiQnVfV1lOSDhOODJrU0VkeldCWk5hdVR4ZlhHemplZlJQclhVQkYteW9UVUpCbDZ6TzJMY0FSaGR2UXFuNDFtYzRkSzN6UHZkdnk2LWp4Wmk3Yi1HTDhGWGtiNHRzSXRuYWRPbGNueGdPWDh6WU9uSEFLNS1HM2g5Mk40WE5MQzZfWnM1eDhrT0M3d3lEbWgzczJRRlRLQjBmak9hM1RncFFocUI0aGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 132
    },
    {
      "date": "Apr 13",
      "text": "US blockade of Iranian ports and Strait of Hormuz to begin Monday, Trump dismisses further talks.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 132
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
      "perspective": "United States",
      "headline": "Trump's Firm Stance on Iran Negotiations",
      "summary": "President Trump maintains a strong military presence near Iran, warning of further strikes if negotiations fail and asserting readiness for future conquests. He emphasizes that the military will remain until a 'real agreement' is honored.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Iran",
      "headline": "Diplomacy Amidst Strait of Hormuz Threats",
      "summary": "Iran engaged in direct talks with the U.S. in Pakistan but also issued stern warnings to American warships in the Strait of Hormuz, signaling a dual approach of negotiation and deterrence. The delegation arrived for talks, but no agreement was reached.",
      "tone": "strained",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Israel",
      "headline": "Continued Offensive Against Hezbollah",
      "summary": "Israel continues its military operations against Hezbollah, rejecting ceasefire calls and asserting its intent to counter perceived threats from the group and Hamas. Netanyahu insists Israel 'will deal with' Hamas and Hezbollah's plans to invade Galilee.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    }
  ]
});

export default LATEST_SNAPSHOT;
