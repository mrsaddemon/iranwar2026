export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2019,
  "lastUpdated": "2026-08-19",
  "lastSyncedAt": "2026-08-19T14:56:32.291Z",
  "warDay": 173,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-19",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 21,
    "summary": "Iran has explicitly stated no interest in a ceasefire, indicating a continued commitment to full conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 38,
    "oilDisruption": 70,
    "tradeImpact": 41,
    "sanctionsPressure": 49,
    "globalPressure": 53,
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
      "date": "Aug 17",
      "text": "Deadline to reach US-Iran deal expires, with Trump threatening Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2019
    },
    {
      "date": "Aug 17",
      "text": "Iran denies targeting UAE with missiles amidst ongoing war updates.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPeFNEVEs5RGt0eGdpRzhOOTJFeGVVWTgzY0dXcW81aDZRLXM2U2pkUnI3czFzN09peXp3N3NySnRHT0ZDaFZOZ3JtVG4xb1pjeFJpanVpRlJROEgwSEdJNERFdWh2WG5iM09zYWdsV0JQLUdJQTQ4VHJHY1pxUFJSaGU1TkRnNjgwLUcyWFpNYlpMclVqN0xJWHhTLWZPdHE5djRKaF9oWHJhZllHaWJyUEFLQzBUeUxTUmhxSXBZZ9IBxAFBVV95cUxNcGxjek5ZME81SDl1ZmgwNEpDa3Zqdmh5V3NSSHpURmNTclVRcDFESFJXby1YM2pNUGI2LVc3dDdfMzhoX0VSdG5iQ2djREFhYXhmUWowWkM4VzNRcWs5dDhUYVFHR2dDd2FmZ1FLZUtYRmtLZ2g5SklRUkRaYTZNOWVSYm0tU1p6dlpXTXd1WDlWcEJOc0VrYnd3SEV5SFJnVVlyVWdwYk1tcGxaR2QyMHNKcXkzSnZES2FmRkttcFp0U19F?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2019
    },
    {
      "date": "Aug 18",
      "text": "Israel strikes Lebanon as U.S. prepares fresh Iran sanctions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxNRXhvNkxYc1FyX0YxVzZZTXBLeW9GVnhVT21GNjlrbmhQSTZpZkdxVmhubVZPcTIxeEVwLUZnMUdiTUYwc3BERmxoWXBNVm5BNGxQOWVwcldhcDFWMC16aXdKVjJrUzlmNVV6SXVtV3dsLVpOcGgzWm1SNkZ1MTBiOGdVaWpJYzlvMEVlOQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Japan Times",
      "latestSinceUpdate": 2019
    },
    {
      "date": "Aug 18",
      "text": "Iran states no interest in a ceasefire, insisting the war must end fully.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE96dTlXTXdLdkJfWHpuYUtTRlp1dDh5SEd2a2F6ZUxwcTJCa3kxRXhqaUE1aHhmWTFxOG9Zd21SQzBsalAyRjN1czlieHlXT1lIT1MtcnFDM0tTX1dCeDJqRHdJTXZZYjVHLXRndEJlZ1N6akkyMWRmR2Z5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2019
    },
    {
      "date": "Aug 18",
      "text": "Reports indicate Iran has lost significant control of the Strait of Hormuz, with the U.S. Navy assisting oil passage.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTE5UYmdZbW8tMm55Yzg4Z3VFeDFiWUk2TDNWWU13aVdKU2tSSmtOb3FMWnBaOWRxMW1tMUZna01vZnpZUXdMaDNKLVVVR1FOMTlrZm03V2JWeGVzR2VxY19QbkdCaFR6ckdhOVdFU05PWEhvMnc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2019
    },
    {
      "date": "Aug 18",
      "text": "Iran weighs strikes on US military assets in Europe if Washington escalates conflict.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2019
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
