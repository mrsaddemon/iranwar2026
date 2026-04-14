export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 154,
  "lastUpdated": "2026-04-14",
  "lastSyncedAt": "2026-04-14T12:49:19.482Z",
  "warDay": 46,
  "summary": "The US has initiated a military blockade of Iranian ports in the Strait of Hormuz, leading to threats exchanged between the US and Iran, while diplomatic efforts are underway for Israel-Lebanon talks and US-Iran nuclear proposals.",
  "lastNarrativeUpdate": "2026-04-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No active ceasefire is in effect; diplomatic talks are ongoing amidst military blockade."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.68
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.45,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 88,
    "oilDisruption": 92,
    "tradeImpact": 82,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "text": "US military blockade on Iranian ports in the Strait of Hormuz takes effect.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE4tQVFtT3lHMmxsRlhMRklHUi1YcnJ0c29mSFNrOFhOSFZlUEhLdzRGYkpiNTJVZmJFQW5YdXR6Y2xCZTdrN0czWnBmOGo4M0t4QUUxZWxzRUVtYkdZeTJTRGZvTDJDSy1LV3gtSVY0TUg0eXg1UTg3VVI4VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 154
    },
    {
      "date": "Apr 14",
      "text": "Trump and Iran trade threats on the first day of the Strait of Hormuz blockade.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 154
    },
    {
      "date": "Apr 14",
      "text": "US-sanctioned ships pass through the Strait of Hormuz as the Trump blockade begins.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxPY3YtWWJnVW54ZDFoaFBUM2hBZXQzT0tsV3d2MnZEbVlSX0Zsck5hWnd5bndqYmVEckwwTW83dGpQSm0zZzZ4X1ljSmI5V1FQc2s3aVcxYW9vQzI1cGVxNFFtY19HNEhZbHo2VEtYRW03YmlDMklSc1drUFJIMTlwYllxcFd5U3VHZGE3Ny11Nk93VmFUZC1PcUVLcUJmNHRtMnBvNTRaWldWOVpCQmJqRHhCaHpHdE8xTzRTb19PUVlHajFRSzJJWThYQ0w?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 154
    },
    {
      "date": "Apr 14",
      "text": "Iran accuses Gulf states of involvement in US-Israeli strikes and demands compensation.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi1gFBVV95cUxQNlh6Z2hsSW5kVzh5QlFlckg1dE5WZlFZTUJlNVl4cGNOVXBvWG5TUVBNa3ZoUGNNczZwc1dTc2c3MjdvZkhxNnYyNWxadUNQSVJ0Z0M5VFVrcm5BbERMRlV5cC14cnNmbHFsc0ZvRExqbHZMUlB0SmFZRFV6cVNDb3RCTzVTS0hFUFVYYm56NjJ1WUE3dFdudC1MZ2MtMTRsMjlGakRPbGdLV056dTRJZFJMa29VUGV3WkZGdEplWVd3dm83X2lrcGtOR2VmMEVuVDN1WHJR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The National",
      "latestSinceUpdate": 154
    },
    {
      "date": "Apr 14",
      "text": "Iranian minister states 'No intention of negotiating for now,' despite US claims of war goals almost met.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE56dkx0c0Z3Umx4dlBzYzdrdGV6SHM3U3hLRnpDX0tFOC1UeHBiUEJLamlEalBVZUV6d0RsVS13UU5wUldEVm9hNVZ6ekRMOWtyamJMbQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 154
    },
    {
      "date": "Apr 14",
      "text": "Israel and Lebanon are set to meet for first direct talks in more than 30 years.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTE14d1poQ0V6VVIyVy1KRzlRemY4ZS1PUmRkODNRU2xpZ21jclNMQnFGb0l5NU0wOWFZWkE0Z0xzVmdYMWMwVmRRNTExRTBpVEpWb05MVWVQLUlUSm5lblFqQU90YkpuSzR6S0c3Wjh1Ti1INlk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 154
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
      "perspective": "US/Trump Administration",
      "headline": "US asserts dominance with Hormuz blockade, seeks deal with Iran.",
      "summary": "The US has initiated a blockade of the Strait of Hormuz, with President Trump claiming Iran is open to a deal despite public statements to the contrary. The US views the blockade as a necessary measure against 'economic terrorism'.",
      "tone": "defiant",
      "latestSinceUpdate": 147
    },
    {
      "perspective": "Iranian Government",
      "headline": "Iran warns of strong responses to US blockade, rejects negotiations.",
      "summary": "Iran has warned of strong responses to the US blockade of the Strait of Hormuz, with its minister stating no intention of negotiating for now. Iranian officials are trading threats with the US following the blockade's implementation.",
      "tone": "defiant",
      "latestSinceUpdate": 147
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Hezbollah rejects US-led peace talks, urges Lebanon to withdraw.",
      "summary": "Hezbollah has publicly rejected US-led peace talks with Israel and called on the Lebanese government to pull out of negotiations. This stance comes as Israel's war in Lebanon continues and IDF plans for further conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 147
    },
    {
      "perspective": "International Experts",
      "headline": "Hormuz blockade seen as major military undertaking with high stakes.",
      "summary": "Experts view the US blockade of the Strait of Hormuz as a significant military endeavor with potential for further escalation. The move is expected to have major geopolitical and economic implications.",
      "tone": "anxious",
      "latestSinceUpdate": 147
    }
  ]
});

export default LATEST_SNAPSHOT;
