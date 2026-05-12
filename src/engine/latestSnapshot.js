export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 614,
  "lastUpdated": "2026-05-12",
  "lastSyncedAt": "2026-05-12T09:26:31.939Z",
  "warDay": 74,
  "summary": "The ceasefire between the US/Israel and Iran is on 'life support' after President Trump rejected Tehran's proposal, leading to renewed Israeli strikes in Lebanon and US consideration of military action.",
  "lastNarrativeUpdate": "2026-05-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "The ceasefire is effectively collapsed after President Trump rejected Iran's proposal and is considering military action, with renewed hostilities in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
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
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
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
      "date": "May 11",
      "text": "President Trump rejects Iran's ceasefire proposal, stating the truce is on 'life support'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTE1NMnZrT2FJTmdLVExrRU5Sa09MOXRiUWh6ZGxHWXR1dGZoTG0tdGlieXlhYl9tUjlpbUpqWlhjM1BiV3RiampfNFRZTXh0d0t3LXhrcDg5NTZlZjNMcFc1blFfOTRGdExkYXVPOXJVOVIwUm1kbjRpWkpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 614
    },
    {
      "date": "May 11",
      "text": "Israel strikes Beirut for the first time since the Lebanon ceasefire, and kills 24-39 in south Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 614
    },
    {
      "date": "May 11",
      "text": "Hezbollah drone hits an Iron Dome battery in Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxOeWZmN3ZQWVk5UlBhUVNvZGFvSE5vTkhFU0pmTHhVT1Z2NFRKc0NCZWZjRFZUUTZvdzJzcDMzZVhGSktnM1hleDZ5M2NyQmVwN00wRU9vZzZZdHJZQnZvM2xRcEFGeENTQ1NXdWJDeHhKeUR0V0xWUC1zWEVnNzlCOXFjamtsTUtETnF2UUItUlNmSWM1VnZTM1pBVmFTRld5YkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 614
    },
    {
      "date": "May 11",
      "text": "Three crude oil tankers exit the Strait of Hormuz with trackers switched off.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiyAFBVV95cUxPTzRScmctdkN4Ulc1ZC1Xc0pRRHVOYjFWSVdnNWY1RF82dFFxanh3LU91ajRMV3ZCcXMyaVlrSXh0YVk5TkdDMFdZZENka2xscERsTUZqSDhmOVVLd0pCU1hXQ3pvSU1nVGJVa1dUelZBaFJnMlhWLTZBVm9SUWl1bXlpdGI1SnE2V2Jnb1VjOUhuU0pMX1R3eExucUtfMUhvejlvWWk4dzNMcTJSbEpCZXFCM0pkTTZOT2pZTHM4dndXWWxNYzdETA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 614
    },
    {
      "date": "May 11",
      "text": "President Trump is considering military action against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxQSUtzS2lhSnYxX3ptRFh3dlNSbFZlX1FVNkt2STEwOWttdUJRN3ZrdGlkT1dydlhmd2ZlY2VCTkFNTlgzX3dGcEVkQ1BEdVdpQ3VWOGpxbGkybWRyV1BIMG9ELXQyU1Nab0R4bFJTaTJEakdxUm5qb3o0X0hPdUg5T2hnZk1RaVB1TTJ5M0tJaEhnZGYyN2c1Q1FPcGJsOVJMRzQ5ZS1PV3k3UTJaR2U2OGJ2S3VTSmdYU1pVbVJZZUVzRGdFb1E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 614
    },
    {
      "date": "May 11",
      "text": "Location of a US Navy’s nuclear-armed submarine is revealed amid fragile Iran ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxPQjJWcElkcmFkU2JhbWsxVXlGamNZNndKQXJDd2tZbjE0MVdrWnZDalFCRGN4QVEteGxvX3JGWGRMX3ZjZjV1WWV2SnMzZVJUR2pydmVhcklZRncxTGs0SzdzbFRYN3c0cVNyblh2WkZwS19YQlFoczNjSThXYVUzUWZldnJhYTQ4WU5Sbg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Interesting Engineering",
      "latestSinceUpdate": 614
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
      "perspective": "US/Trump Administration",
      "headline": "Trump Rejects Iran's Offer, Threatens More Strikes",
      "summary": "President Trump has rejected Iran's latest peace counteroffer as 'totally unacceptable', stating the ceasefire is on 'massive life support'. He threatens more strikes if a deal is not signed 'fast'.",
      "tone": "defiant",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Iran",
      "headline": "Iran Vows Defiance Amid US 'Reckless Adventure'",
      "summary": "Iran states it will 'never bow' to pressure after the US rejected its peace proposal, accusing the US of 'reckless military adventure' and highlighting its military playbook to cripple Iran.",
      "tone": "defiant",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Lebanon",
      "headline": "Lebanon Seeks External Pressure for Ceasefire",
      "summary": "Amid rising Israeli killings, Lebanon is seeking US pressure on Israel to halt attacks and operations, also turning to Saudi Arabia in pursuit of a ceasefire.",
      "tone": "anxious",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Analysts/Observers",
      "headline": "Ceasefire Pretence Over, US Retreat Predicted",
      "summary": "Observers suggest the 'pretence of a ceasefire' is over following increased Israeli strikes in Lebanon. Some predict the war on Iran will likely end in an American retreat.",
      "tone": "skeptical",
      "latestSinceUpdate": 611
    }
  ]
});

export default LATEST_SNAPSHOT;
