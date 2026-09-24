export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2481,
  "lastUpdated": "2026-09-24",
  "lastSyncedAt": "2026-09-24T15:12:24.576Z",
  "warDay": 209,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-09-24",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.81,
    "durationDays": 7,
    "summary": "No active ceasefire is reported for the main Iran-US-Israel conflict, though a past Israel-Hezbollah ceasefire is referenced."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 58,
    "escalationLevel": 38,
    "oilDisruption": 70,
    "tradeImpact": 41,
    "sanctionsPressure": 49,
    "globalPressure": 53,
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
      "date": "Sep 22",
      "text": "Iranian President Pezeshkian addresses the UN General Assembly, with Iran stating readiness for 'dialogue, diplomacy without force'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNdGVwQTd0TVh0YW5rbU5EQWo3QkVXYk9BWE0wZG5XLVZjZEgxdjBndURxZEFnQmo3aFR6Vk1oSlpiUFFmUXl0S3lUd1NvOGFXNnA0UmJmLVhXRE1pS01hMkkzTUl0ZGZJTVhVclRadnRkclVXUjlBbUctZkhzMFB1RTlvenlhWVp4NEZVVUd5cE44WTNONG5JSXQ0QUY4Q2pkRVYyX3BUVmVCdEMwSmfSAbMBQVVfeXFMTlNKMmxzYVBqRnY3Q0p4QUQ0eUp2cXZlTkxFNDNIeVpuWEY2TVNCYjN6ODBBZkNJU21tN2xRbHdsd0duWUJ3Y3ZsQ3B6cFVTSC1hRWJEck44VnVUczZtVEtiVXRQX3UzNkFuWmJLeUVCeURNVHlrWl9PUm1oZ0IyNThuSS1oTkRsbkN0akpJVFk2TndvbUNzOUg5VFlfZkdqZk0ySjNwMENzeGZNazhpcXpsSUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 2481
    },
    {
      "date": "Sep 24",
      "text": "Iran reportedly states it can reopen the Strait of Hormuz within 7 days if the U.S. eases military pressure.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE56cTJuZUVZVG1nNHo0SVU2eGgxQzNqbF9aWWhycHVZZmJNTDE5UkJSV3YzVDFVb042YTFOc08xd0M4cUo2MjFtakxyZVUxQ3drNnFKb182cU1JSGhtQ05vd2NTaDhHTXMyYktKcEdR0gFzQVVfeXFMUGpLbzc2YkZoQWFzOUFNRVNqejU0SF9lY3Rfa0lFNlFIUzR5ZUdrRE9VUDBjWllFSkU5YndMMU5kM2RCbDQ5UmVVR0NLSGtuY2ZvZWk1VXBBSVBDRWlTNHlwcjdEWUVycXd1QWVxLWtIV1RCTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "cnbc.com",
      "latestSinceUpdate": 2481
    },
    {
      "date": "Sep 24",
      "text": "Israel declares readiness to resume strikes on Iran as the regime aims to rebuild its nuclear program.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2481
    },
    {
      "date": "Sep 24",
      "text": "A Khamenei adviser warns Iran may take the war to the Indian Ocean if Israel or the US strikes again.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxPV0hxS2ZmbnY3S0xzempVcFNiaXM4c1lkbVI2Y2pyWmk5VEdCRVFnanYxdkJubENRTnk5c2xMa01yWE9YLXl0VS1CUG5kOFJXNnl5Q2I4MkxUNXlYWUlFa2E5bXpmZUtTRUVGa0xPMjBpTmhzZnlRczRyRkNmanVuXzZVVHluMC1XM2lMUU4tNlZHUGkwWEZKU1Jnb1VXdUk1QlQ5THZfSXB2S010VDhZUFl0bi1mRGdGdEtJa2xKTG9VMEwxS1h6OW03Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2480
    },
    {
      "date": "Sep 24",
      "text": "An investigation into US-Israeli strikes on Tehran neighborhoods reveals devastating civilian harm.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "amnesty.org",
      "latestSinceUpdate": 2481
    },
    {
      "date": "Sep 24",
      "text": "US military casualties rise, with the Army identifying the 19th US service member to die amid the Iran war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQZ05kNy1HZWhaeGxCZmpGYlBpZnpCanN5cjhtSDItVTZlSHVtY0tPZnNFaGQ1dWZwZVVDNHppNmhScjVrb2tUQmxZSGNJZ2h4cDVWQ3BQVHdVZ1A0ZGU3N1pyVmN1Sk5OTnZCNjl1LXYxamFzSFRvNF82MlpaSjJubEpPemd3N1A4TFBfOGVOUDhJOHlnZi01dlNJSmoxWkxoZlVFTERzZ1RKbjc0Q3VEaWsyYVZmaFJ1SnQyTw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Military Times",
      "latestSinceUpdate": 2481
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
      "status": "unavailable"
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
      "perspective": "Iran's Stance",
      "headline": "Tehran Offers Dialogue, Hormuz Reopening Amid US Pressure",
      "summary": "Iran expresses readiness for dialogue and diplomacy, offering to reopen the Strait of Hormuz if the US eases military pressure and lifts blockades. President Pezeshkian asserts Iran will not 'bend the knee' to US threats, viewing them as 'strategic desperation'.",
      "tone": "defiant",
      "latestSinceUpdate": 2478
    },
    {
      "perspective": "US/Israeli Actions & Impact",
      "headline": "US-Israeli Strikes Cause Civilian Harm, US Casualties Rise",
      "summary": "US and Israeli forces are conducting strikes on Tehran, with investigations revealing devastating civilian harm, including the destruction of an Iranian school. The Pentagon has acknowledged rising US military casualties, including a recent 'non-hostile' death, amid reports of undisclosed fatalities.",
      "tone": "strained",
      "latestSinceUpdate": 2478
    },
    {
      "perspective": "Regional Instability",
      "headline": "Middle East Escalation Feared Amid Lebanon's Struggles",
      "summary": "Israel security officials warn of potential escalation across the Middle East, while Lebanon's army seeks $3 billion in aid with little progress. French President Macron emphasizes that only Lebanon can disarm Hezbollah, condemning Israeli violations.",
      "tone": "anxious",
      "latestSinceUpdate": 2478
    }
  ]
});

export default LATEST_SNAPSHOT;
