export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 170,
  "lastUpdated": "2026-04-15",
  "lastSyncedAt": "2026-04-15T12:41:55.536Z",
  "warDay": 47,
  "summary": "On War Day 47, the Strait of Hormuz blockade continues with US military intervention, while President Trump signals the war is 'close to over' and hints at US-Iran talks, even as an Iranian minister denies negotiation intentions and Hezbollah launches rockets at Israel, which is holding direct talks with Lebanon.",
  "lastNarrativeUpdate": "2026-04-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 2,
    "summary": "No formal ceasefire is in effect, though President Trump has hinted at potential US-Iran talks."
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
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 70,
    "oilDisruption": 90,
    "tradeImpact": 77,
    "sanctionsPressure": 61,
    "globalPressure": 79,
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
      "date": "Apr 14",
      "text": "Strait of Hormuz blockade continues with US military turning back six ships and completely halting trade from Iranian ports.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/...",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 170
    },
    {
      "date": "Apr 14",
      "text": "President Trump states the war is 'close to over' and teases potential US-Iran talks, also mentioning opening Hormuz for China.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/...",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 170
    },
    {
      "date": "Apr 14",
      "text": "Hezbollah launches rockets at Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/...",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 169
    },
    {
      "date": "Apr 14",
      "text": "Israel and Lebanon hold first direct talks since 1993 in the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/...",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 170
    },
    {
      "date": "Apr 14",
      "text": "Iranian minister states 'No intention of negotiating for now' despite US claims of war goals almost met.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/...",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 170
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
