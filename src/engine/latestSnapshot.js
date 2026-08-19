export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2024,
  "lastUpdated": "2026-08-19",
  "lastSyncedAt": "2026-08-19T17:44:09.550Z",
  "warDay": 173,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-08-19",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 21,
    "summary": "No durable ceasefire signal was detected across the latest source mix."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
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
    "nuclearIndex": 30,
    "escalationLevel": 38,
    "oilDisruption": 62,
    "tradeImpact": 51,
    "sanctionsPressure": 56,
    "globalPressure": 63,
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
      "date": "Aug 19",
      "text": "Iran Update Special Report, August 18, 2026",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxOZ3ZUcl9XZEx2ejdibU12aG5pQUZBQ2pkN1JkeTNzMWUwNWlzeFF0QzQ5QzZqNG1lR3pjTkREZTF5MzJTVTRISlRVOV95SUZOME9odFo0OUdVRy0wZUZpcFlla28weF9tVnJDVndiNnNnSE16dVIxY2JZaG4yU09SSHFNVUdhMjd0LXFEaGNTbzVMZXZHUHZF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 2023
    },
    {
      "date": "Aug 19",
      "text": "Iran war live: Iran says US seeks ‘exit’ from region, Israel pounds Gaza",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNT25YYlNfbnY5OE9lS1l4OElGQjlJcEdHQlVEN0lna0ZJLUVNR1dOWlpBcjNEdzNmc1pCTjZWNnBRY0hiNVhtVW1SbkowbkRUMnBUdGU5Z2lKUEgwR0taSVNvTEtJbzZtd08zT1FudUJucXRzd3dyNGIydEJjaXpyWEZTaFBHbl9zX2xLTkd2SkZiM0szWnpzUVM3QWVJeUpPRXlQZnU3V3JsWGtBWnU0bmxn0gG3AUFVX3lxTE55c2gyeUJVdkFkbjBhRnVWYTZoTEdhUnFnY0p5XzJmb01nTXJSYjVsSDlWZTV4aVFaOHZ3b1NDbUs3MTM4OVhXX3pmeGlXMmFldU5UN0FDbVZOQXNMYlB4SUdONzZ6aVhzQ2g0dDdyWlprZTZwUFJaX0c5RmQ2RWEtVEVZZFZlMWw1TmFzaTQ3eXpYRXcxZjlnNFhIelhteldEVVBXUFVFR1hpZWdxbl9ONWRPZ3daWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2024
    },
    {
      "date": "Aug 19",
      "text": "Iran war pushes Middle Eastern airlines towards $4.3bn loss in 2026",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxQWGJOWUs3azVwVUgtM3hHaW8xNTJFcFZReHJiUlRKeVM2c0lIY1YyOTBHQXdBUExMZDdLVXRURDFua0Y4b3RBYjBDZTR3Q0VIX2JRMF9KbTZzUlRzWXVTRDBycUVYZEdzRHpWTGxoWml4NVdLVWcyaFRlUE8yVmh0YXdRcmlDaXBxRFpLVnpuczY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Middle East Eye",
      "latestSinceUpdate": 2023
    },
    {
      "date": "Aug 19",
      "text": "Iran war updates: Tehran denies Iran targeted UAE with missiles",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPeFNEVEs5RGt0eGdpRzhOOTJFeGVVWTgzY0dXcW81aDZRLXM2U2pkUnI3czFzN09peXp3N3NySnRHT0ZDaFZOZ3JtVG4xb1pjeFJpanVpRlJROEgwSEdJNERFdWh2WG5iM09zYWdsV0JQLUdJQTQ4VHJHY1pxUFJSaGU1TkRnNjgwLUcyWFpNYlpMclVqN0xJWHhTLWZPdHE5djRKaF9oWHJhZllHaWJyUEFLQzBUeUxTUmhxSXBZZ9IBxAFBVV95cUxNcGxjek5ZME81SDl1ZmgwNEpDa3Zqdmh5V3NSSHpURmNTclVRcDFESFJXby1YM2pNUGI2LVc3dDdfMzhoX0VSdG5iQ2djREFhYXhmUWowWkM4VzNRcWs5dDhUYVFHR2dDd2FmZ1FLZUtYRmtLZ2g5SklRUkRaYTZNOWVSYm0tU1p6dlpXTXd1WDlWcEJOc0VrYnd3SEV5SFJnVVlyVWdwYk1tcGxaR2QyMHNKcXkzSnZES2FmRkttcFp0U19F?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2023
    },
    {
      "date": "Aug 19",
      "text": "Israel strikes Lebanon as U.S. prepares fresh Iran sanctions",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxNRXhvNkxYc1FyX0YxVzZZTXBLeW9GVnhVT21GNjlrbmhQSTZpZkdxVmhubVZPcTIxeEVwLUZnMUdiTUYwc3BERmxoWXBNVm5BNGxQOWVwcldhcDFWMC16aXdKVjJrUzlmNVV6SXVtV3dsLVpOcGgzWm1SNkZ1MTBiOGdVaWpJYzlvMEVlOQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "japantimes.co.jp",
      "latestSinceUpdate": 2024
    },
    {
      "date": "Aug 19",
      "text": "Turkey slams Israel's 'untenable' claims after strikes on Syrian base",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxPeTdCNlA1LTNVZ0ttZ2VXTGJLVnR5YjBnUnZMNFVWVzc5cUJEcHdxekdHLXBzcDNLUnp1TUx4N3J6SzJQQ0pOTEtSRFVWOTJpZC1xZEd4QTA1TkpEaG1mOXdTM2pQWU5kV3FqWTM3SlJUZEYyb180ZWxMRHlSZlVveDMtWkNJMTFwMWs0VTB6R1M1aHhNRVAzdXc2V29oOVBBRV8wM2FmWnE4OTNJVWpWU3E0Z0VBcnQ4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2023
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
      "perspective": "US/Western",
      "headline": "Iran's Aggression Prompts Sanctions, Deconfliction Efforts",
      "summary": "The US is responding to Iran's escalating actions, including missile launches and Strait of Hormuz incidents, with fresh sanctions and diplomatic efforts to deconflict regional tensions. There is also consideration for adjusting the US military footprint in the Gulf post-conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Iranian",
      "headline": "Defiance Amidst US Pressure and Regional Strikes",
      "summary": "Iran continues to assert its regional influence, including missile launches and claims over the Strait of Hormuz, in defiance of US pressure and sanctions. The nation is responding to US-Israel strikes and perceived threats to its sovereignty.",
      "tone": "defiant",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Israeli/Regional",
      "headline": "Escalation in Lebanon and Iran Amidst Regional Instability",
      "summary": "Israel has escalated attacks in southern Lebanon despite a ceasefire, citing ongoing security concerns and threats from groups like Hezbollah. The broader West Asia conflict sees US-Israel strikes hitting Iran, contributing to regional instability.",
      "tone": "strained",
      "latestSinceUpdate": 1998
    }
  ]
});

export default LATEST_SNAPSHOT;
