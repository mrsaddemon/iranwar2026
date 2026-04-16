export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 193,
  "lastUpdated": "2026-04-16",
  "lastSyncedAt": "2026-04-16T21:23:35.585Z",
  "warDay": 48,
  "summary": "A 10-day ceasefire between Israel and Lebanon has been announced amidst ongoing tensions, including Iran's warnings and continued gridlock in the Strait of Hormuz, while diplomatic efforts to restart US-Iran talks are underway.",
  "lastNarrativeUpdate": "2026-04-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon/Hezbollah has been announced by the US, but its stability is uncertain given ongoing tensions and Israel's intent to hold positions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "date": "Apr 16",
      "text": "Trump announces a 10-day ceasefire between Israel and Hezbollah in Lebanon, to take effect at midnight.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiY0FVX3lxTFBaRnNzQzlPbUFod2xHa09IUGNzVEhUcmhmZW5lcW5sWGt6emhfWFhXc3dmVTM4RHdlYzhyN2ZfTENZVTNDSjdFMFhDSXdJSzFPaGtadzYzMDhodFZ4MjhtNEpoQdIBaEFVX3lxTFA1YjRwNjVuNzA0Y0ZXQjl2MlpCdmJvbDhSM3Z3X0lGQmFMVkZEV0NrTGhLZVNaNHdEMW1obEMwVkNPc2xDVXJTM1puSlkwcVJUT29aanphZHNhS1BGcXEwYVpMSW9xc3lG?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 193
    },
    {
      "date": "Apr 16",
      "text": "Israel states it will hold positions in Lebanon throughout the 10-day ceasefire period.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFB2T0l3STJWbjRqT3ZfSWF4ZDZ6TjJETFI5S0U2LWdjTU1JSGcwZFl0OVZ2QkM2WEhYdXJ2cEZHaHhpQVg3OE5YUnFDWDdQZ3VMWElKd3A0cHMyQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 193
    },
    {
      "date": "Apr 16",
      "text": "Iran warns of a response if Israeli attacks on Lebanon do not cease immediately.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTFBqdkRTSFRQX3ltWlEwc2xQOFpJRlo4b2tNZnhiYkpBbmFPeDdLLVJWc3UxQjBTdjQ5NDdlcjN1U2QyZ0pGdWtsQ3d1T1FHYTNlckhZYQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 193
    },
    {
      "date": "Apr 16",
      "text": "The Strait of Hormuz remains gridlocked, with international calls from France and China for Iran to restore free passage.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxNelBDUGJzR05CN1JPZW5NMVpITkpPM05qU2RUTUZhNG5JYlBWOFIwZFlxM2FMaVNPcHJILU1xN3FkVGFyNTdPRUtIZEZnQlUtWkppUUM2eTJLOTJNVHZoTmptZmZURkpsbUxlUXZEaGlpbnh4VVpFRFZhbjUzT014c2oyaExHeW80QlBZUHRYSGVfUUc2ZGFiRGZCb04?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Table.Briefings",
      "latestSinceUpdate": 193
    },
    {
      "date": "Apr 16",
      "text": "Pakistani army chief visits Tehran in an effort to restart US-Iran talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNam43bTZtRlVmOGE4Rm56N3NoM1hmN0syZVJHUXVzRS1nVHZIQ1plVnBoRWxveHMyellqcE1sbXVIUWdPa1poVDVkVmItcUJvMFFWM3dRMW9VOGZEWmd4dWpUNGJJNnZJM2doWENiXzlPVlZfTTVPU1phWktJdmQ1UVRHaVBBSWhiUnlTS0dMbGwybXJMakxIbE1wVUNreTZJODNhR2cwdEVSbWdKQ2pXRy13U1FDSnlFVFllRERBWdIBxAFBVV95cUxPRlA0Q29kWHV0SE1rSXFLYXotUjVZZGZseWp1RFJpNXIxZlVnWG5ZeXJfVUFxcTJHRVVseWlSZXcxZlh3RmJoMmJySG5rc21USDluOHlRQnhxdGdBOUptLS1LXzhJYmtjRTk1ZnJ6S1lSaXJUMDA2eW5wSHczUnVsNklBNzU1b1FvcVUzZzhfTXZtQ0dGei1hTDUtSEstUzh1MVZoSnNRellhMEZJQXhSYVVfSEFwZHFiQ2tRUnBKTUVRVmxK?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 193
    },
    {
      "date": "Apr 16",
      "text": "The US military declares itself 'locked and loaded' to strike Iran's power plants and energy industry if ordered.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOaEItbU9FVnJLN1l1RktWRkdtZGZiNGk1US1JTm0zRWN3MTNTNmpPVmJQYmV1bUxkRTV5WXBqVnVJWnhlM2tQbU54cXRMbF9IR0NyLW5STnV5WWl4MnM0bkJTdjhMejJwZHhuWXYwUVJaN0RZektTNHRTemtNbUdfSWpVV3dKZnFPMmdOeVVvR200c2swZFNVeHdEUnhGX0tHUGNtVDRxVHRBYTM2eG43bnJpMGlCQTAzLUVuaWwtbTc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 193
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
      "headline": "War 'Close to Over,' Talks Imminent",
      "summary": "The Trump administration suggests the war is nearing its end and expresses a desire for a 'grand bargain' with Tehran, hinting at a resumption of talks within days. The US maintains its military blockade on Iranian ports, asserting its war goals are almost met.",
      "tone": "defiant",
      "latestSinceUpdate": 164
    },
    {
      "perspective": "Iran",
      "headline": "No Talks, Blockade Endangers Environment",
      "summary": "Iran's minister states there is 'no intention of negotiating for now,' despite US claims of nearing war goals. Iran also condemns Israeli oil depot strikes, citing environmental and health dangers, while facing a US-imposed blockade.",
      "tone": "defiant",
      "latestSinceUpdate": 164
    },
    {
      "perspective": "China",
      "headline": "Blockade 'Dangerous,' Transit Continues",
      "summary": "China has labeled the US military blockade on Iranian ports as 'dangerous,' indicating concern over regional stability and freedom of navigation. Iran-linked ships are reportedly attempting to transit the Strait of Hormuz despite the blockade.",
      "tone": "skeptical",
      "latestSinceUpdate": 164
    },
    {
      "perspective": "Lebanon/Hezbollah",
      "headline": "Talks Not Negotiations, Disarmament an 'Illusion'",
      "summary": "Lebanese figures, including Ghassan Salame, clarify that direct talks with Israel are 'not negotiations' and dismiss the idea of Hezbollah disarmament by force as an 'illusion.' This perspective highlights the limited scope of the talks amidst ongoing conflict.",
      "tone": "skeptical",
      "latestSinceUpdate": 164
    }
  ]
});

export default LATEST_SNAPSHOT;
