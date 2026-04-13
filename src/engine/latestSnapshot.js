export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 144,
  "lastUpdated": "2026-04-13",
  "lastSyncedAt": "2026-04-13T21:35:08.584Z",
  "warDay": 45,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-04-13",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "Ceasefire language is present across the source mix, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 38,
    "oilDisruption": 62,
    "tradeImpact": 35,
    "sanctionsPressure": 49,
    "globalPressure": 52,
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
      "date": "Apr 13",
      "text": "Day 44 of Middle East conflict — Trump says US will blockade the Strait of Hormuz",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTFBOTVJhU0NGZ21nWU1ka3pKNnNUVHR5ZDZ5YW5UMXJ2RnJlRHNUMks0T1ZWdGtucEx1dmk5ajd3LXNGQy0yMU5Hb0JxeDNXNzlnWnU3aHg5eXRnOTlrVVgyRHdoYXJJZnYycFBBdnNFNWhuYm93MjVteDBR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 143
    },
    {
      "date": "Apr 13",
      "text": "Iran war updates: Trump says US to block Hormuz, IRGC insists strait open",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPSmFwRzdvNDJwdXFsMktMYzZEU1ZOcDhWVldacUQ3a3VlQkY4NEpIZ21qeE9CaFk0aEFQaFFwVUxId2xuclZQemJrczlyQU4xVGlBWHc2UndaODBwaFBJRWoyOUlJZnNzWTd3dUZERkgwbVhfSWFNUlRsQkhxUnZRdjJtbG5vdmE5ckpIVnlYYS0tRlZBazF4TlJpSzRod0Q4bEZqT2liT0lVbG1Jd19zaDV6cGcyb2ZmQjNwcFRB0gHDAUFVX3lxTE56a0JvdEJLTmx5c291OHZPWWU1WnVDSU8zbXN4azZNZzFoTnkwLURNRnA2ZGhqdkdSX3ZmV05DdVJDRldHVW05bXlsYmR1Mk5KTHNtUjZZNGpkSEt0Q2hmR0dBSXdfUkgyb0l2ZWtTV1VQR0tLVmN4VGlhcE1TWEV2T1c2cExCc01rX1BGZ25KSVAyazliOWl1R2o4Y2JxSEhXUHZmMVFZRGU1UHZER09rMUlFaWlmWVVRTUJEMzBMLThzQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 143
    },
    {
      "date": "Apr 13",
      "text": "Middle East crisis live: Donald Trump claims Iran ‘wants to work a deal’ and confirms blockade of strait of Hormuz",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi7gFBVV95cUxOS2x6Qm9KaU1wNmdPd0FRMjVydXprTWdUT2xKTFMzRnlGM3pqSWxmV3ZyU0VRRXgwekRDaC14cUdZYmVWblIwaXg2UEoyTjAxZ042X1RpU3ExOEotNGExUTJnX3NsWVdILW94eTVoX0FGbWhmVWlDUVRCbE1KM0ZTUzEybVdUM1l0bTM1NXREeVp2bWIxN3ZFdUVkaXJrTGdwTlFnY1lEak5Idm5ZcHZRVDRzSUkxWnYtN3doWmVkMk1kNWtybnNBZlh4V3k5cWppOGo4SFh0SHlYak9QT3hkcEZqckpCX1hHTTRtYm5R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 143
    },
    {
      "date": "Apr 13",
      "text": "After talks fail, IDF planning for return to war, Trump mulls strikes on Iran — reports",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNaEpDUHJybmdpTDJ0cmZFd0pJd2pGRmF3UGpUT3FxV1pBalowbnBUWlhRYnNFRUdjOXA1MU12T2lVVFVkR18xblJseU5WU0pNUlZzVFVPUDhEbTg4UUIyY28xOHE1bUpkel9UOFRPY1dhNmtJbWg1UmY5VGtyTzN6VmZDRE5RYzYwa1RDQUF0cjd0dTlmUGRFdGFMVnBnbkdrV3o1VnVhd3E5a1hhVGlPN3Iya2vSAboBQVVfeXFMTzlzcEIweDJDVm5PZ18zQXo3RUE0a2F6ZldDa21ZTkFNR0F4cHVEVTlIY3c1U3hxMjRoRWdoS1NFN0h6NUpHNjlrazhxRUtpajNFaEVNdXhncGJWWXhjYU93aTMydllnSjBmZHY5WHlXVTFXaEwzbE50bk5VdmJkZjlLNjVUazNsZGxndnBhYmJnMnBfU25tNWVCLWRaOUxuU1ItSXNuelRRSDl6a050eFllWW5ESFZDNFhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 143
    },
    {
      "date": "Apr 13",
      "text": "Iran war updates: Iranian delegation arrives in Pakistan for talks with US",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQUkJlNWk5X0x6X25UNC0xdHR1UnhQcWxwM2dqYW5uRVlSYXVEUFZzV29za0diTk1EaUtFMUFGaC14cmpjcTlmVU0tRDh1YzZvRXktNUpVVHpXZzFEOUtGcWhTa3JvalgzYnhLRUdWN1NLaTJkdk5PYmd5UkV6OUNHS3hUVmpnaXhMMEMxRXpvazlod2l0T1FXRmUzeE9wV0JoOVdaaVVrVEU2Wjk4ajFwYnlWNzZ2OHdUSjlTZm1hUWfSAcYBQVVfeXFMTzdFS2dXNW1zRS0zQU1IWm1uTjNQV0RCblc0Y3ZrLUhaNWlENjFoNXlUQ1I4YWtpREgzRWdvaXgwMjVUUzZZMElyeFEydC03U0t1YXEtQzNPTWgtMW55NHdkQjVrODFsb25zaWtVWDhhTXRLTlI5TmZKZUNiNEZFd0hQdldkbkM3bUg1T29zcG4tVXJnTVJPSkNZWmtaRzJRS0dORlpjeEdQamdocUpxWGpxNUZJTERNMlJSSHJmVkNuMlhiekZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 144
    },
    {
      "date": "Apr 13",
      "text": "No intention of negotiating for now,' says Iranian minister, as US insists war goals almost met",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE56dkx0c0Z3Umx4dlBzYzdrdGV6SHM3U3hLRnpDX0tFOC1UeHBiUEJLamlEalBVZUV6d0RsVS13UU5wUldEVm9hNVZ6ekRMOWtyamJMbQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 144
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
