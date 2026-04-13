export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 145,
  "lastUpdated": "2026-04-13",
  "lastSyncedAt": "2026-04-13T22:26:04.493Z",
  "warDay": 45,
  "summary": "The United States has initiated a military blockade of Iranian ports in the Strait of Hormuz following the collapse of peace talks, while Iran issues threats and Israel plans for renewed conflict.",
  "lastNarrativeUpdate": "2026-04-13",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "Peace talks have collapsed, and military actions are escalating with a US blockade and threats from Iran."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "date": "Apr 13",
      "text": "US military blockade on Iranian ports in the Strait of Hormuz takes effect.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE4tQVFtT3lHMmxsRlhMRklHUi1YcnJ0c29mSFNrOFhOSFZlUEhLdzRGYkpiNTJVZmJFQW5YdXR6Y2xCZTdrN0czWnBmOGo4M0t4QUUxZWxzRUVtYkdZeTJTRGZvTDJDSy1LV3gtSVY0TUg0eXg1UTg3VVI4VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 145
    },
    {
      "date": "Apr 13",
      "text": "Iran peace talks collapse, with US insisting war goals almost met and Iran stating no intention to negotiate.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 145
    },
    {
      "date": "Apr 13",
      "text": "Iran makes 'bottom of the sea' threat in response to US actions.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 145
    },
    {
      "date": "Apr 13",
      "text": "IDF reportedly planning for a return to war after talks fail.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNaEpDUHJybmdpTDJ0cmZFd0pJd2pGRmF3UGpUT3FxV1pBalowbnBUWlhRYnNFRUdjOXA1MU12T2lVVFVkR18xblJseU5WU0pNUlZzVFVPUDhEbTg4UUIyY28xOHE1bUpkel9UOFRPY1dhNmtJbWg1UmY5VGtyTzN6VmZDRE5RYzYwa1RDQUF0cjd0dTlmUGRFdGFMVnBnbkdrV3o1VnVhd3E5a1hhVGlPN3Iya2vSAboBQVVfeXFMTzlzcEIweDJDVm5PZ18zQXo3RUE0a2F6ZldDa21ZTkFNR0F4cHVEVTlIY3c1U3hxMjRoRWdoS1NFN0h6NUpHNjlrazhxRUtpajNFaEVNdXhncGJWWXhjYU93aTMydllnSjBmZHY5WHlXVTFXaEwzbE50bk5VdmJkZjlLNjVUazNsZGxndnBhYmJnMnBfU25tNWVCLWRaOUxuU1ItSXNuelRRSDl6a050eFllWW5ESFZDNFhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 145
    },
    {
      "date": "Apr 13",
      "text": "Hezbollah rejects Israel talks amidst ongoing conflict in Lebanon.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 145
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
