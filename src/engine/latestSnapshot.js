export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 183,
  "lastUpdated": "2026-04-16",
  "lastSyncedAt": "2026-04-16T07:14:30.271Z",
  "warDay": 48,
  "summary": "Diplomatic efforts are underway involving Pakistan, the US, Israel, and Lebanon, while active conflict persists in Lebanon, Iran threatens shipping, and the US maintains a blockade on Iranian ports.",
  "lastNarrativeUpdate": "2026-04-16",
  "ceasefire": {
    "active": false,
    "status": "fragile",
    "confidence": 0.3,
    "durationDays": 2,
    "summary": "Diplomatic efforts are underway involving Pakistan, the US, Israel, and Lebanon, but active conflict and shipping disruptions persist without a formal ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 80,
    "oilDisruption": 90,
    "tradeImpact": 79,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "date": "Apr 15",
      "text": "Pakistani army chief visits Tehran in an effort to restart US talks regarding Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNam43bTZtRlVmOGE4Rm56N3NoM1hmN0syZVJHUXVzRS1nVHZIQ1plVnBoRWxveHMyellqcE1sbXVIUWdPa1poVDVkVmItcUJvMFFWM3dRMW9VOGZEWmd4dWpUNGJJNnZJM2doWENiXzlPVlZfTTVPU1phWktJdmQ1UVRHaVBBSWhiUnlTS0dMbGwybXJMakxIbE1wVUNreTZJODNhR2cwdEVSbWdKQ2pXRy13U1FDSnlFVFllRERBWdIBxAFBVV95cUxPRlA0Q29kWHV0SE1rSXFLYXotUjVZZGZseWp1RFJpNXIxZlVnWG5ZeXJfVUFxcTJHRVVseWlSZXcxZlh3RmJoMmJySG5rc21USDluOHlRQnhxdGdBOUptLS1LXzhJYmtjRTk1ZnJ6S1lSaXJUMDA2eW5wSHczUnVsNklBNzU1b1FvcVUzZzhfTXZtQ0dGei1hTDUtSEstUzh1MVZoSnNRellhMEZJQXhSYVVfSEFwZHFiQ2tRUnBKTUVRVmxK?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 183
    },
    {
      "date": "Apr 16",
      "text": "White House expresses optimism about a potential Iran deal amidst ongoing negotiations.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 183
    },
    {
      "date": "Apr 16",
      "text": "Israel and Lebanon's leaders are scheduled to speak or meet today to discuss regional tensions.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 183
    },
    {
      "date": "Apr 16",
      "text": "Israeli strikes result in the deaths of four Lebanese medics.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 183
    },
    {
      "date": "Apr 16",
      "text": "Sanctioned Iran-linked ships are observed crossing the Strait of Hormuz using new paths.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 183
    },
    {
      "date": "Apr 16",
      "text": "Iran issues threats regarding shipping in the Gulf and Red Sea.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNdUhOeW1tSHg0WHdOU3lET25xT19BYTQ2QUpmb0x3aXZLSEIwVGt3aEtwaVZyMnEyX2JqOGgza3dxOFNDV3YxOUNzRWpCdEhfeXlhY2ZpdkdwekRMUU1LN2FSMm1UaEllbmtVbGVIN2x2VjNaNHlMN3pYUF9INkM5Mm1RYWxHQmRwczVfSEprWktzbkc4TDM3RmxvV2lMNFN2cEdLSVZJck5sR2NHYjJn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 183
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
