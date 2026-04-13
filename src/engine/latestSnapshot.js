export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 142,
  "lastUpdated": "2026-04-13",
  "lastSyncedAt": "2026-04-13T19:43:29.136Z",
  "warDay": 45,
  "summary": "The United States has initiated a naval blockade of Iranian ports in the Strait of Hormuz, while diplomatic signals from both sides remain mixed regarding potential negotiations.",
  "lastNarrativeUpdate": "2026-04-13",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No ceasefire is active; regional tensions are escalating with the US blockade."
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
    "escalationLevel": 85,
    "oilDisruption": 95,
    "tradeImpact": 84,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Apr 12",
      "text": "US military announces it will begin a blockade of all ships to and from Iran on Monday.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPdV91cmVZQ2dkbHhmUkg0cUtIcEYtOFRieUpmQnRVS0Y4QWVmMnVwejhqUTFMdFNXQTJ2QXdVZWhWeGZud2dCckhVbVhVVE9nc29nSmZaRXRKUU8zbGtveHVvSDlSdS1SeUl1R0RjaXdGUXJWaDk0TFdfRzg1anRCcEtBR1BJV2VQU21zd01vUnI1QWc5RGRtQXdQQzdXUmhnSmFxYWJkX3pCT2xnQkRlVDJpUVBNbXNwalc1b05R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 142
    },
    {
      "date": "Apr 13",
      "text": "US military blockade on Iranian ports in the Strait of Hormuz takes effect.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxOalphYVF6R1RmNFMxWXhnWWRnZGFudTBZYmluTDNXOE5YZ2I2SVFDcjdwc1hIVGdaU096SlI0aDFZYnI3dVQwb0pWYk55UDdVdm9raVFfZ29SRHVvOC1NYzAzYXRIalRJejBhT3A4NjQ1WFRmc3RydTRjRHJvRVNnemY1TmpGUGxLT3Z1ODVWR0RlZENJb2VV0gGcAUFVX3lxTE1rZGpxWUtRb1Ztc0xKUmhjMzc5WEMzZW10dVAwRkZGcllwQXI2LTUxeEFObnVldHB1OGE5RC1BdmJ4VUlraFlGSlc4SlQ5SkZlalpBMnI2MHE1Vk82bFljTnppYVF0eWtlWExSSzZ1cFZwc2JFSDhHeGhIQzY0d29TS1d3VXRneXNtaVNmZU9Qd1Z0YXFyY0xwd1Qwdg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 142
    },
    {
      "date": "Apr 13",
      "text": "President Trump claims Iran 'wants to work a deal' and confirms the blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi7gFBVV95cUxOS2x6Qm9KaU1wNmdPd0FRMjVydXprTWdUT2xKTFMzRnlGM3pqSWxmV3ZyU0VRRXgwekRDaC14cUdZYmVWblIwaXg2UEoyTjAxZ042X1RpU3ExOEotNGExUTJnX3NsWVdILW94eTVoX0FGbWhmVWlDUVRCbE1KM0ZTUzEybVdUM1l0bTM1NXREeVp2bWIxN3ZFdUVkaXJrTGdwTlFnY1lEak5Idm5ZcHZRVDRzSUkxWnYtN3doWmVkMk1kNWtybnNBZlh4V3k5cWppOGo4SFh0SHlYak9QT3hkcEZqckpCX1hHTTRtYm5R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 142
    },
    {
      "date": "Apr 13",
      "text": "Iranian delegation arrives in Pakistan for talks with the US, despite an Iranian minister stating no intention to negotiate for now.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQUkJlNWk5X0x6X25UNC0xdHR1UnhQcWxwM2dqYW5uRVlSYXVEUFZzV29za0diTk1EaUtFMUFGaC14cmpjcTlmVU0tRDh1YzZvRXktNUpVVHpXZzFEOUtGcWhTa3JvalgzYnhLRUdWN1NLaTJkdk5PYmd5UkV6OUNHS3hUVmpnaXhMMEMxRXpvazlod2l0T1FXRmUzeE9wV0JoOVdaaVVrVEU2Wjk4ajFwYnlWNzZ2OHdUSjlTZm1hUWfSAcYBQVVfeXFMTzdFS2dXNW1zRS0zQU1IWm1uTjNQV0RCblc0Y3ZrLUhaNWlENjFoNXlUQ1I4YWtpREgzRWdvaXgwMjVUUzZZMElyeFEydC03U0t1YXEtQzNPTWgtMW55NHdkQjVrODFsb25zaWtVWDhhTXRLTlI5TmZKZUNiNEZFd0hQdldkbkM3bUg1T29zcG4tVXJnTVJPSkNZWmtaRzJRS0dORlpjeEdQamdocUpxWGpxNUZJTERNMlJSSHJmVkNuMlhiekZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 142
    },
    {
      "date": "Apr 13",
      "text": "Hezbollah chief urges the Lebanese government to cancel Washington talks with Israel amid Arab pressure.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxPeS12aEtESmhMeE5RNkFjZjdkY2FoLV9Ta1FhOElGM3VsTmlxdWNFYnp5TTdzSllGNUhFS1F5d3NXXzFYWGdjY0RCbU1NVXBmaFR3TlRCeGdBN1g0a2NPam9BT09mbU5qUUk0UTRUaHQtYTNlSndXUkdZZFU1RE5yT1ZuRWJPdGVjUWpaYXZQWWk4SEdNQlpHMWgwVW5hYlJKOTRidERWRjgxSl95c3JsM245cDhZTkhBQzI3N1ZTNzFuZ2lvRnh5T0VHdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 142
    },
    {
      "date": "Apr 13",
      "text": "IDF reportedly planning for a return to war, with Trump mulling strikes on Iran after talks fail.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNaEpDUHJybmdpTDJ0cmZFd0pJd2pGRmF3UGpUT3FxV1pBalowbnBUWlhRYnNFRUdjOXA1MU12T2lVVFVkR18xblJseU5WU0pNUlZzVFVPUDhEbTg4UUIyY28xOHE1bUpkel9UOFRPY1dhNmtJbWg1UmY5VGtyTzN6VmZDRE5RYzYwa1RDQUF0cjd0dTlmUGRFdGFMVnBnbkdrV3o1VnVhd3E5a1hhVGlPN3Iya2vSAboBQVVfeXFMTzlzcEIweDJDVm5PZ18zQXo3RUE0a2F6ZldDa21ZTkFNR0F4cHVEVTlIY3c1U3hxMjRoRWdoS1NFN0h6NUpHNjlrazhxRUtpajNFaEVNdXhncGJWWXhjYU93aTMydllnSjBmZHY5WHlXVTFXaEwzbE50bk5VdmJkZjlLNjVUazNsZGxndnBhYmJnMnBfU25tNWVCLWRaOUxuU1ItSXNuelRRSDl6a050eFllWW5ESFZDNFhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 142
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
