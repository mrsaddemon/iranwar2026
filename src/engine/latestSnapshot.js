export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2004,
  "lastUpdated": "2026-08-19",
  "lastSyncedAt": "2026-08-19T05:37:56.311Z",
  "warDay": 173,
  "summary": "The ongoing Iran war continues with discussions of a reduced U.S. military presence in the Gulf, while Israel conducts strikes in Lebanon and Gaza amid a fragile ceasefire, and tensions remain high in the Strait of Hormuz due to Iranian actions and U.S. claims.",
  "lastNarrativeUpdate": "2026-08-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "A previously established ceasefire in southern Lebanon appears to have collapsed following escalated Israeli attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "date": "Aug 19",
      "text": "Pentagon weighing smaller U.S. military presence in Gulf once Iran war ends",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxPZWQ5MVY3S2IzeW9Ia3JlQlhsVTlfUGY5TnZvUFVFYWl4UGFkMTVRbmhMdXQ1TnN6WXlDaVk2QVBIbmVrZ2JPOENmM1J6NVhBQ1FCcVN4UkNxQ2twbzZBelRmaW14SlY1YktnMzB1cWNQUVIwRmxLRk9KMEdhWF9IZUpfRXFCVHZMckVFaWx6WGFMejJWQVVQVFNDVE5vdDQyamJCRGxmbTdiSllBWElES2NIX2tMMW5ZUmhIRTRROXhHa2dqUUlYMW15Yk9NUUw5SVc4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 2003
    },
    {
      "date": "Aug 19",
      "text": "Iran denies targeting UAE with missiles",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPeFNEVEs5RGt0eGdpRzhOOTJFeGVVWTgzY0dXcW81aDZRLXM2U2pkUnI3czFzN09peXp3N3NySnRHT0ZDaFZOZ3JtVG4xb1pjeFJpanVpRlJROEgwSEdJNERFdWh2WG5iM09zYWdsV0JQLUdJQTQ4VHJHY1pxUFJSaGU1TkRnNjgwLUcyWFpNYlpMclVqN0xJWHhTLWZPdHE5djRKaF9oWHJhZllHaWJyUEFLQzBUeUxTUmhxSXBZZ9IBxAFBVV95cUxNcGxjek5ZME81SDl1ZmgwNEpDa3Zqdmh5V3NSSHpURmNTclVRcDFESFJXby1YM2pNUGI2LVc3dDdfMzhoX0VSdG5iQ2djREFhYXhmUWowWkM4VzNRcWs5dDhUYVFHR2dDd2FmZ1FLZUtYRmtLZ2g5SklRUkRaYTZNOWVSYm0tU1p6dlpXTXd1WDlWcEJOc0VrYnd3SEV5SFJnVVlyVWdwYk1tcGxaR2QyMHNKcXkzSnZES2FmRkttcFp0U19F?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2004
    },
    {
      "date": "Aug 19",
      "text": "Israel strikes Lebanon as U.S. prepares fresh Iran sanctions",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxNRXhvNkxYc1FyX0YxVzZZTXBLeW9GVnhVT21GNjlrbmhQSTZpZkdxVmhubVZPcTIxeEVwLUZnMUdiTUYwc3BERmxoWXBNVm5BNGxQOWVwcldhcDFWMC16aXdKVjJrUzlmNVV6SXVtV3dsLVpOcGgzWm1SNkZ1MTBiOGdVaWpJYzlvMEVlOQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Japan Times",
      "latestSinceUpdate": 2001
    },
    {
      "date": "Aug 19",
      "text": "Two Chinese Supertankers U-Turn in Hormuz as Risks Remain High",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQemNha2xvdVFJTjVYaVg3SWtCUG1nTVhpUC1zY0pTQTltTVpwdHdvNWpndXk0dy1OUXYwSXN0QXRiOE9UcU5MWDVaOFZCenpLY212azNrTlg0eVhPU01LM3hCbGc3LVdYNmFieWdTY2pDUnBYYXF0aC1jVDlpUS1SUFdOTjBTeFF3elhDY1Bub1pLNjFZM3hmX2hFVmpEc0R2enBZcEkzZU5Md19PaVNWZk1PZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Bloomberg.com",
      "latestSinceUpdate": 2004
    },
    {
      "date": "Aug 19",
      "text": "Iran’s Attacks on Ships in Hormuz Mount, Testing U.S. Military Restraint",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNdkR4blJKdVRSdUJldFRXenNyRzRuSEEtUjlTRWxUbE54QVNsb0U1QXE3NUdzZWFLNmppUlIyOFUyRTNoVVRjcFRWVlMwWXJkSG43TlBOMkpKaktpemV6VWZRcDJFMmdrcnZGazEtMVg3M0NEbkkxOU5Na3pkS2wwbWt6V0RhNkRkODk0ajd3T0stUnhzUEdyTWhyNWIwX3ZyYThON2xIbzUyRFd2cWdjeDYwc080WlQ4Rnc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WSJ",
      "latestSinceUpdate": 2004
    },
    {
      "date": "Aug 19",
      "text": "Iran eyes military targets in Europe if Donald Trump escalates war",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPX1JZN1RkZ0VhaTk1MXZsMlZlOW1iNUFvc2tYb2tmcjRhZWRLT3J1azE4VHNhLTNKQ0ZMck1NcktQc3FNcGtJekdwZUJlRUl3WFN1cXFtN05YLVJ0RjlpRGlRYnRESVlPdzZTU1pTeUI2TkhlWlBFcmhyX0dDajNncEtrMlg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Financial Times",
      "latestSinceUpdate": 2004
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
