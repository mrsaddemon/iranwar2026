export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 190,
  "lastUpdated": "2026-04-16",
  "lastSyncedAt": "2026-04-16T17:58:42.469Z",
  "warDay": 48,
  "summary": "Diplomatic efforts are underway to secure a ceasefire between Israel and Lebanon, while the US maintains a blockade on Iran, leading to a gridlocked Strait of Hormuz and international debate.",
  "lastNarrativeUpdate": "2026-04-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon has been announced by the US, but its implementation is fragile due to ongoing Israeli strikes and Hezbollah's conditions regarding Israeli movement."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Apr 15",
      "text": "White House expresses optimism for an Iran deal as a key Pakistani negotiator visits Tehran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE5PRWlLT0Q4MnJ4OGlCMGk5R3JfbGlKVUo3RjE4Z3NPcWluZHdqZFVaaFB6cmJCUG9RSFhUZEx5TkdXNmdsaFVXb0RaR0I2b1N5R3VkY3pVQnBKYnY5TllVcGc4N1BzR1prTmI5UkIzQm83SFNqQWxPdUw3X2kxdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 190
    },
    {
      "date": "Apr 15",
      "text": "Trump announces a 10-day ceasefire agreement between Israel and Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxNWHRIYzlOVTFXNjhXa1BEY092anhNZ1RPUGtUd1NZT0d6OW91d0pCVkpDTUUyNWstdmxlT2ZRMXZ2Q2FIQnhhM0tmWFlRZGZqUGFJcWRGMkNFZ3pMd3N2SFQzNmE3YUE5RXJEQVZzZW5JVy1WSVdOTFJKdzJ2X3RTQWxzdkJSbkkzZjJ1ZnZOQ0ZKT0NnUXZmLXNaSHMxbjRJendVcld5UGZZblhtNm9kakhXOWprTmtTaUxEajZ5M0pmNm5PTWcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 190
    },
    {
      "date": "Apr 16",
      "text": "Iran maintains Strait of Hormuz gridlock amidst a US blockade.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 190
    },
    {
      "date": "Apr 16",
      "text": "UN General Assembly debates Strait of Hormuz closure after China and Russia veto a draft resolution.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxQOFFVekZkeUxuTEptZEJhM0pla1k4MklZV1NFNjUtaFg1NE04OWZjOExQTVFyUnFuV1ppcXMyYmF1d1M5WDJNMkJMNUtsUHcyYmtRLVNFMjdIY2N6ZzUzcmxxRTI0Zm9IbVJ4X3E4NmRJZkk1ek9kWjl2VE5qNkl3QjNDdDFzcmlTWFdTMXFndnljeFNSOUNoOGNpWDVUQThibjBvNk5NeG11SklYbjRCbjJnME01bGFheTJiVy1haUo1MGpsNWYwdnNoakY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 190
    },
    {
      "date": "Apr 16",
      "text": "Israeli strikes kill 4 Lebanese medics.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8AJBVV95cUxPZG4tS3g4YTJ2TnB2LU51V0JEZzJvYl9LTnhLS1FNRGlSRWRUUW9hOXhONFJ6WEk0S2ZteW40VUZ3UnotOHJQNldJM2IzWW1WRUgyRDVNd2hvU3FZN0RXamdER3ZqaEp3Y2V6NFZFUlZ5RHhlRS00blpybGVoSEJpTG5GX01UV1ZWV1F5Y3g0UWFpVkIxalEzdklWamhsT2Fxb3M1ZGVZNjBRWlFQeGlnRE5rZG9JMWJVMEhUanZSTVA1N1g1Q2NoMFdOOFZxa2NyRV9aRnpJZk5xaFlJVnpVYmJEdDdDSWFwSUZrRjYxbUVxa0dTRDNjYWs5VU5wVjBfOUI2ajBkeUt1Wm4wNVR6Vmp1TVNobkprSlFBWWY4T3hZemhPai05dFRiQ2NNS2dYRXUtYjgtaVhZMVBxN1NvYkhyUDZOQXEzQ3B2dGR2a1p3M3ZoTFZMVDhwMGhLVTcwMDdlZE1ja1Z5ZnBYMUJ6dg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Deccan Herald",
      "latestSinceUpdate": 190
    },
    {
      "date": "Apr 16",
      "text": "Hezbollah states it will respect the ceasefire if Israel stops attacks and does not gain freedom of movement in Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQREgzcFBWMmdvQzNDYkgtODNNbG8wWXN5T1pURUNIaDBweVBjR1V5Tkhac01haTd3WGUzRzlqc1FaQjlfcEVFb2c5YUpJbERZbFJFT2loV3NZRENpMTkxWlRzMUNRdDZNekZNbmNYZzJNdzRxamJOeGd4N0dWTkdXUkZtZTJ3alQyZmdPWlloQzF4RGdlRHdtaDdCSlpnRDU1R2pESVZrNUM4QXVWaXpxTGtiVzlBTE0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 190
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
