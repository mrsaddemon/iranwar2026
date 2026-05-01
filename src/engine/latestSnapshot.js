export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 456,
  "lastUpdated": "2026-05-01",
  "lastSyncedAt": "2026-05-01T18:14:08.725Z",
  "warDay": 63,
  "summary": "A two-week ceasefire between the U.S. and Iran is set to expire amid Trump's dissatisfaction with new peace proposals, while oil prices surge and the Strait of Hormuz remains a point of contention.",
  "lastNarrativeUpdate": "2026-05-01",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire is active but highly fragile, with U.S.-Iran talks uncertain and Trump expressing dissatisfaction with new peace proposals."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "May 01",
      "text": "US economic growth rebounds 2% as consumer spending slows amid Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxNSTdsRUQ4N1J1UEExZGNoQ1d2WFJscUhneTcxZWlrZ01KTDFTckZfOGE5OVdHWWlyZTZ4TzhSRDFGRHJIUjI3Wk04bTJNb1laOXJBMjdtRnYxWUdkM2ZYZzBlM0pZZEFvZi1tSkpLVjZIdXl6UTVqaEUxUUk0b1RLSUw5Y3FicW02eFdKcTFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 456
    },
    {
      "date": "May 01",
      "text": "Trump expresses dissatisfaction with Tehran’s new peace proposal as ceasefire talks are uncertain.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 456
    },
    {
      "date": "May 01",
      "text": "U.S. strikes against Iran could be 'imminent' as Trump doesn’t rule out resuming attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxOZ3VJSDBsM2FwclJ6Q0dRMXNMUE5ZMHhJRXNHREpqaS1XMDBGelJWSGpUcHBPSTBwdDJ6SlpuVXlOOTdqcHdOdWI0RU5ZakwxaEVLVG9CWllqbzVLTmxJQTA4YzVRZi1IUU5MSXlJbjBsUWx3SHZHcU5LM1YySWVtS2xBV29lRHN1ZktzaTZUWFBnbWwwX0RiNXdrSFYySjNTUGtOTV9ESEc5MnMtVUFoRHBpd25CYlAzRkHSAb8BQVVfeXFMUDFyMWl1dXZXdjBWc0JuZ1VUR3pTMVl0WThiY1dUSDNsdGlaTVQ2MWZwNVNKdWNaekI4N0QwZDBqQWFrYk9IeXRMWU1hY0w3WklEeFY5WDFaZXJJdGlXU2RqX0R5V2VKYjFfbGZkYThhZXVGcFF2M29WbTBQVnBub2ljZlVIZnU1dTA5c3JWeWpJbzZpN29kWnZVM3Z6TWRxWkVsNXlPLUs1VzdXMktrem0tNVBMZTRPWEtTRE1YT3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 456
    },
    {
      "date": "May 01",
      "text": "Iran’s Schools and Hospitals are reported to be in ruins due to the ongoing conflict.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 456
    },
    {
      "date": "May 01",
      "text": "U.S. asks for help with opening Strait of Hormuz and warns shippers against paying tolls.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxOdkU2SjJpVUZkLV9nOHB3T3F1Y0k1cFhVOVZ0cG1kdUd2WFVKWGM5ZHJlTFBMdU5HampzbUdibGR2ck9pYzM4ZWJ4clZTd0M0TWZGZ0RCaWluVmZhYkVmTUJhbTdVdWNnMHBQcy1FT0lKWjdjcHVCbjdCNHpxY0lXNXZsVjdsZnRGRjdBaW1BLVVPMUttdTgxWDYwTml1b014T1VVbGljN0LSAa4BQVVfeXFMTUhVRnFrTVpydUpRcXJERXlhZGRuX0t4OHZ2VThUTWsxbnI3QVZFU2x3MXNoN3JQcVNxcXFXM2Z2VnhITEJhb1hndGZXa29ad08zMjNLbUM0WFZsUGRVclFta0ZDUnNULTlSQlRIQ3pYX2doeEpaYXA3dVlLSk83QXZKdGpLT2tnM2I2c3JicENoUG51YTdyTDhUSjgyQ2NNM2x3RnBuRXR6Wk95T3B3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 456
    },
    {
      "date": "May 01",
      "text": "Majority of US military sites in the Middle East reportedly damaged by Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxPZXgyczJfZ015aVNZWVpKYmZHc29IVVowSGpEM004YjE2X3JTV1ZVNzJldWVlbjA3Vk5WTmZLNENGd2R6M3QzdklvX0FUOVdMQ1F0M1otcmNZWUpNakZ3ZE5wSTRCWkc2WDc2bng5X2tvYWFReG5IM3Q0YjFCb3Z0T0k3YXQ3SC1BMzRQeHhnQ1UwX3l3RUFN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 456
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
      "headline": "Trump Considers New Military Options to Pressure Iran",
      "summary": "President Trump is being briefed on new military options to pressure Iran into a deal, and has not ruled out resuming attacks. There are debates in the Senate regarding the accuracy of claims about US military triumph.",
      "tone": "strained",
      "latestSinceUpdate": 445
    },
    {
      "perspective": "Iran Leadership",
      "headline": "Iran Defiant Despite Economic Strain, Plans Strait Control",
      "summary": "Despite its economy being battered and infrastructure in ruins, Iran's leaders remain defiant, believing Trump will eventually back down. The Supreme Leader has stated plans for ongoing control of the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 445
    },
    {
      "perspective": "Regional Actors (Hezbollah/Israel)",
      "headline": "Hezbollah Rejects Disarmament, Tests Israeli Defenses",
      "summary": "Hezbollah's leadership has rejected disarmament and called for Israeli withdrawal, while actively testing Israel's radar systems with fibre optic drones. Israel maintains its military is the 'most moral in the world'.",
      "tone": "anxious",
      "latestSinceUpdate": 445
    },
    {
      "perspective": "Global Economy/Energy",
      "headline": "War Pushes Oil Prices to 4-Year High Amid Strait Uncertainty",
      "summary": "The war in Iran has significantly impacted global energy markets, pushing oil prices to a four-year high and causing gas price spikes. Uncertainty surrounding the Strait of Hormuz is a primary driver of these price increases.",
      "tone": "anxious",
      "latestSinceUpdate": 445
    }
  ]
});

export default LATEST_SNAPSHOT;
