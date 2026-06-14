export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 965,
  "lastUpdated": "2026-06-14",
  "lastSyncedAt": "2026-06-14T12:17:14.538Z",
  "warDay": 107,
  "summary": "Intense diplomatic efforts for a US-Iran peace deal are underway, with President Trump announcing an imminent signing, but these efforts are complicated by ongoing Israeli strikes in Beirut and alleged breaches of a ceasefire.",
  "lastNarrativeUpdate": "2026-06-14",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 100,
    "summary": "A ceasefire appears to have been breached by Israeli strikes in Beirut, complicating efforts for a broader US-Iran peace agreement."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.45
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.78,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 48,
    "oilDisruption": 65,
    "tradeImpact": 47,
    "sanctionsPressure": 54,
    "globalPressure": 61,
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
      "date": "Jun 12",
      "text": "US and Iran indicate a peace agreement is close, though questions persist.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 965
    },
    {
      "date": "Jun 14",
      "text": "President Trump announces a US-Iran peace deal will be signed today, aiming to end the war and reopen the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxPWTAtYmdwOFNBWk16QTlHalVyck5LZ2hCTVZibE5URlFTTGRJVklOdFVHaFI5eWwxNlVBd3p2a2trNXY3YzlGbDRjcFBaN2JJN3hUczZGbHQtNklsTzMxeWZ0c3VTd2RRM2lVS0xySGhpQ3BxNWxuZUdjU0hxZ2o3TzI1UDBKUGhSWXFacmtCaGJFd21uazNKbnQzT01jVlBfV2ZpQjVqbnZTcTRMaUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "USA Today",
      "latestSinceUpdate": 965
    },
    {
      "date": "Jun 14",
      "text": "Israel conducts military strikes against Hezbollah targets in Beirut's southern suburbs.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQM1ZSMHdVR0RXSjFrUkp3dFVfMlYzVlBjQjNVRUdNYVZhRzNBNzJtcHdmYklfaTFmYlgyZnI3MS1vSzYtcHRHdUgtSXh2aVpzUzFlQ0RJdWJIRmJnV3FmZG9FaTlUS0MyQWtVUW8zZDc4LWxWV0lkcDJ1NzNCdjhYUUR6d1dYOXZKblkwaUFRLWRiZzdsU1dKbUdDMlg3Wk5leXN0eQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 965
    },
    {
      "date": "Jun 14",
      "text": "Reports indicate Israeli strikes in Beirut constitute a breach of ceasefire, potentially jeopardizing the US-Iran peace deal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNeTFjb29FQW5uNkFDeUEyTnQwVGlaMExjT2UwS3l1RHNmWmZLX3ExWjVEMVF2TVZ4alRaWUdidk5ZdEVjb3FoTWhnYWlqLVBNNGlpc0FZRkU3QWJCVVFtYXlZZ1BEei01RUlUbktGUFA3QU5zNUhkWGFrNFhnd1hfc0gwOFYyZXB6M2Y2c29YbVlSNVNyWWQ4ZGM2Yk5YWXo0TXZQT3hwc3RYRnpSa3BmMjhZYnc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 965
    },
    {
      "date": "Jun 14",
      "text": "Two fatalities are reported in Lebanon following Israeli strikes, amidst rising prospects for Gulf calm due to a draft US-Iran agreement.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi4AFBVV95cUxPLS1IZVk3eURBVDFLeUtlOGFKTnUtTE9HQTlZVFRkS3Vyc1VjVHNoQjEwSDBnT0xPQXBsQWZoS1JoeV9Ub09XNVpTRFhmODkxYktDMVV3OUR2VFY1MDBUYWJTZFhJUWpiUTNER1EwRE9XTHJVa0ZMOWhBUmRCOFRhVnFnZjhadENaSmJvMFF3QjFUaUZreFNvQ2dqdjhFTkVTM3dNUFF2VlNVZ2RsNHctZW5XamgwYzVHZ3dFYlQwazdLMkJvWjNCbnJnREhVWGxxRkVMMHNvUU5NcVdhR2o5dNIB5gFBVV95cUxNUUplUWE5cmhEc0lfMkQtcjRzVzgtWGVkeEpWcEhlcG1xZy1Ec2djMElTM3FDb0FtcFNoY3BkQ0VpMl9GTHY2V1FmNnloTUdSU2FrSGRHZE1JMHdCUzUxZ1UtOXlyQXpVdmJaNG1Oa0NLcnVkQWZwS0hfWUloX0xRU2I2R1NRSTAxcHJRdVBNcnFJUFdkblZXbVlCOEloRXFBYl9NZVUySDBHaGRfTzc4QmdsSGx3MkRySTlkeUlmOUp3SklfZHBNZ1lRMzY2djhUZDVreWdfTWhVLUFMZlVjVXVrTUhadw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Firstpost",
      "latestSinceUpdate": 965
    },
    {
      "date": "Jun 14",
      "text": "An Iranian official states Tehran agrees not to produce or acquire nuclear weapons under the draft peace deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxPc3JyS0owTHNiOXVLejVocXd2Nl82aEtCYUxCa082QWc1MFZkUkNYcnZnbDRCM3owSWhwZ3R1Q1Z0dnptaXZDckhld3pHZUdESFppQU5FNmh2cTBENW1rTnVkenJmOTRScWF5SVB0RDhWMnpkTmhLUmlfd3ZqNWM3c3M1MWNMdlMyVXVyZ0tiQWlkSEF5SjJPazZtc1VnbzVIYmthbmItdGNIMU5faGpQRjAyTHRPUXFvSGF2MVdPVHdRT2VvTVVfWVpsWW83RjZJYzNBclpOQTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 965
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
      "headline": "US-Iran Deal Imminent, Peace Prospects Rise",
      "summary": "The US administration is optimistic about an impending peace deal with Iran, with President Trump announcing it will be signed on Sunday and that planned strikes have been called off. This agreement is expected to lead to de-escalation and the reopening of the Strait of Hormuz.",
      "tone": "neutral",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Iran",
      "headline": "Cautious Optimism on US Deal, Claims Lebanon Truce",
      "summary": "Iran acknowledges progress on a deal with the US but remains cautious on the exact timing of its signing. Concurrently, Iran claims a truce in Lebanon that includes an IDF withdrawal, despite ongoing Israeli military actions.",
      "tone": "strained",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Israel",
      "headline": "Concerns Over Iran Deal Amid Continued Lebanon Strikes",
      "summary": "Israeli officials express concern that an emerging US-Iran deal could strengthen the Iranian regime and Hezbollah, potentially undermining regional security. Israel continues to carry out air strikes in Lebanon and is preparing for a potential ground advance against Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Economic/Energy",
      "headline": "Strait of Hormuz Disruption Persists, Impacts Oil Flow",
      "summary": "Despite US efforts, the Strait of Hormuz continues to experience disruptions, with little oil flowing through the critical waterway. This ongoing turmoil is cited as a factor contributing to high gas prices, with political blame being assigned.",
      "tone": "skeptical",
      "latestSinceUpdate": 962
    }
  ]
});

export default LATEST_SNAPSHOT;
