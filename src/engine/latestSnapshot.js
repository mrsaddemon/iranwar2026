export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 939,
  "lastUpdated": "2026-06-11",
  "lastSyncedAt": "2026-06-11T21:04:49.796Z",
  "warDay": 104,
  "summary": "The US and Iran have exchanged fire in the Middle East, including in the Strait of Hormuz, while President Trump claims a deal to end the war is close despite ongoing strikes, and Israel continues operations in Lebanon.",
  "lastNarrativeUpdate": "2026-06-11",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.2,
    "durationDays": 100,
    "summary": "Despite President Trump's claims of a potential settlement and canceled strikes, active exchanges of fire between the US and Iran indicate no current ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
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
      "date": "Jun 10",
      "text": "President Trump claims to have canceled scheduled strikes against Iran and signals a move toward a deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQOGh6VE16SGcyemxnaWsxLTlXTjlxSVRSMFhOdXlCZjkya1Z0bzh3UVp2TzJLemtNTzZ2bU9lYnhmSEhaOGJNWFpleE1FWlYzTUl6TmlKd3ZDY3JMZmJLRFBRcXpkOUpPM1pIT2VZbEl2MEZ6YnZPdnN1eU9iUUFfLTFQd3dEWThacDBZbnM5aURzLWJsNEpvUHUtcW5xaW13Vkc0emwwaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 939
    },
    {
      "date": "Jun 10",
      "text": "US bases in the Middle East are reportedly facing a second night of retaliatory Iranian attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1SZDdKa1gxeUJSNTBHc1hsN2preWRiM1RqbjRlVDlYUzRjc0twS01jX25uWG83dk1ScmlnSUZpLUE3ckVOSGJRZmxjSXo1dXRYdmMtLWZ1OEY3SFRWU1Y2SERvZmpHeFZUanRqdTc1c2pDMjFzdUVz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 939
    },
    {
      "date": "Jun 10",
      "text": "The US launched new strikes on Iran, which responded by firing back at Gulf states and Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxPU25kWmtrYVNpdHBud0dxUDhZdUx0OFMyQUxOWER5cXowaW8zWk9pdWNBeWdycUNTTXp4VjlmSWF1UDRzOEpBdl9RRTlYeno2cXBHUEJuVDJaTk05dldzaEwza29fR2I1NmpsZU5JZUlUWjNoWlZUTXFiaFFLYm9oSHR5Ukk4X2s5X193eU5fVm5KWjZmSHBsTnJ2U29JU1lVb3ZtLUZuTUpDNHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 939
    },
    {
      "date": "Jun 10",
      "text": "Kuwait closed its airspace, and Israel warned of launches from Lebanon following US strikes in Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE5JRzk3dDJ5dEFyWGw2dGY2Z0hxUy12c29QVElKMUxxNUYzeVdMVXBiWm9vZUlxYzBzakpMOGsyMVhLZ2p1WnByX2dkVWVwNi1uNmt2UWZwdU5ZaG90Vm9DQWs5OGhUSWtfdGlYTjU2TVA3d9IBd0FVX3lxTE1MeFk0ZWNVVUM5X2xWaVRCN1IyVDFxMjcwWERtUjlXWS10UmFMdVBpMlZ4akhDSWRBR09QVjA4SjBUX0VhVnl6YTMtOFdwVEd6Q1R5S2tVSmJQZ1c4YlNCTXIxemM5Z2w1RWljYl9zQ21EWFc0bGxN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 939
    },
    {
      "date": "Jun 10",
      "text": "The US and Iran exchanged fire after an American patrol helicopter was downed in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBsMU5qNmNLREM0TFZjR2hkZ1ZTSlZFNktlWjhZX0Z0YnM0UFRicUNkaUxxTzRvM195emt5aWhYX2FONkFUR1ZwNHdwQVphYm5YVnJ4RHJjbEh0QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 939
    },
    {
      "date": "Jun 10",
      "text": "Israeli air strikes hit the Lebanese city of Tyre despite an Iranian warning to cease attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1pQ2lCMHpqSjhTWFdQZ0dOZ2hBSXoyY1YtV0tiM0NmVVNuQUpNN1hhazFiWUx0MkhCSFNTZF9kNEVxMTNMVlA0cEtGWGR2dnFJRlBVZXk2ZEpMUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 939
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
      "perspective": "US Administration",
      "headline": "US Strikes Iran, Vows Strong Response to Aggression",
      "summary": "The US military has conducted retaliatory strikes against multiple targets in Iran, with statements from officials indicating a firm stance against perceived Iranian aggression. There is a clear intent to respond forcefully if US assets are targeted.",
      "tone": "defiant",
      "latestSinceUpdate": 934
    },
    {
      "perspective": "Iran",
      "headline": "Iran Responds to US Aggression, Threatens Key Waterway",
      "summary": "Iran claims to have attacked US fleet assets and a US base in Bahrain, while also announcing the closure of the Strait of Hormuz in response to US strikes. Tehran views the US actions as an escalation requiring a strong counter-response.",
      "tone": "defiant",
      "latestSinceUpdate": 934
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Operations, Rejects End to Conflict",
      "summary": "Israel has conducted strikes in Beirut and a minister has called for aggressive tactics against Lebanese civilians to pressure Hezbollah. Despite a reported pullback, Prime Minister Netanyahu asserts that the conflict with Iran and Hezbollah is ongoing.",
      "tone": "strained",
      "latestSinceUpdate": 934
    },
    {
      "perspective": "Regional De-escalation",
      "headline": "Fierce Exchange Followed by Partial Pullback",
      "summary": "Following a period of intense military exchanges involving the US, Iran, and Israel, there are reports of a mutual pullback. This suggests a temporary de-escalation of direct hostilities, though underlying tensions remain high.",
      "tone": "neutral",
      "latestSinceUpdate": 934
    }
  ]
});

export default LATEST_SNAPSHOT;
