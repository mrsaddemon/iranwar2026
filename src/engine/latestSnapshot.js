export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 562,
  "lastUpdated": "2026-05-08",
  "lastSyncedAt": "2026-05-08T20:12:33.307Z",
  "warDay": 70,
  "summary": "Direct military engagements between the US and Iran have escalated in the Strait of Hormuz, while Israel and Hezbollah continue to exchange fire despite reports of a truce being tested.",
  "lastNarrativeUpdate": "2026-05-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 7,
    "summary": "A ceasefire between the US and Iran appears to have collapsed amidst direct military engagements, while a truce between Israel and Hezbollah is being tested by ongoing hostilities."
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
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "May 07",
      "text": "US forces fired on and disabled two Iranian tankers in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 562
    },
    {
      "date": "May 07",
      "text": "Iran accused the US of violating a ceasefire and targeting its ships.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 562
    },
    {
      "date": "May 07",
      "text": "US military struck sites in Iran, claiming response to attacks on navy ships.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 562
    },
    {
      "date": "May 07",
      "text": "Israel launched airstrikes in southern Lebanon, killing five and a Hezbollah chief near Beirut.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 562
    },
    {
      "date": "May 07",
      "text": "Hezbollah fired rockets at the Haifa area and drones wounded troops in northern Israel and Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNM1lwdnZBSHpZZDlwSVhEd2JLbkEzNzY4TVVuem5fNklRTWFFZWRxbnBhLU5MVTV0U2x2V3hWNUdseWJST1VLc3ZrT0o2dU13Q2lkUDNoYXVkWl9ncDNCYXpNbzNlQWhtdTdVa2tFNExiWDh0Nk03ZDdhMmVaRGtOclRxajg4emx4X202Q3VrNXBGSFNESzJBVEZtSkF3Vk9NYVBsSVM1REpiYU1nVkZiQlBZZzY3Z3FuVlpr0gHAAUFVX3lxTE5KTVFLZkRkckpEc3BIV2Yxd2RVR1hpSVJyNHpuTm11WlQzT1piRklnWWF3UHc2bllVOXd4Y2I1UkFKV3BKaXFlYmNDOFc0S2x3MXAzbml4enRyb1ctSmJSel9MM3BjVGZKekpfVTdHTDYxa09PQzJfTHQwVzc5T3RHbVUxYkpkOHBSeEVnQW5BcTc4dWE0SUZPOHdfSUpGNXpBMnJnQ0VKU0h2cFB5cUd0R3FWY2h5OU4yRzZURGd2cA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 562
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
      "perspective": "US Government",
      "headline": "US Responds to Attacks, Seeks De-escalation Amid Peace Talks",
      "summary": "The US military has conducted 'self-defense strikes' against Iranian targets following attacks on its warships in the Strait of Hormuz, while simultaneously asserting it does not seek escalation. President Trump indicates a peace deal with Iran could be imminent, with Tehran reviewing the latest US offer.",
      "tone": "strained",
      "latestSinceUpdate": 551
    },
    {
      "perspective": "Iranian Government",
      "headline": "US Violates Ceasefire, Iran Responds to Aggression",
      "summary": "Tehran accuses the US of violating the existing ceasefire by targeting Iranian sites and ships. Iran maintains its right to respond to 'unprovoked attacks' in the Strait of Hormuz, while also considering a US peace deal proposal.",
      "tone": "defiant",
      "latestSinceUpdate": 551
    },
    {
      "perspective": "Israeli Government",
      "headline": "Targeted Strikes in Lebanon Test Truce, Counter Hezbollah Threat",
      "summary": "Israel has launched precision airstrikes in Beirut, targeting and killing a senior Hezbollah commander, marking the first such strike since the Lebanon ceasefire. These actions are framed as necessary to counter Hezbollah's continued operational capabilities amidst the broader regional conflict.",
      "tone": "strained",
      "latestSinceUpdate": 551
    }
  ]
});

export default LATEST_SNAPSHOT;
