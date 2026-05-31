export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 842,
  "lastUpdated": "2026-05-31",
  "lastSyncedAt": "2026-05-31T22:16:39.261Z",
  "warDay": 93,
  "summary": "US and Iran continue talks for a ceasefire extension amidst ongoing military actions in the Gulf and escalating conflict between Israel and Hezbollah in Lebanon and Gaza, with significant disruption to Strait of Hormuz shipping.",
  "lastNarrativeUpdate": "2026-05-31",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 60,
    "summary": "US and Iran have agreed on a 60-day ceasefire extension, but it awaits Trump's approval and faces violations from ongoing military actions."
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
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
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
      "date": "May 29-30",
      "text": "US defense secretary warns military is ready to resume combat in the Gulf if needed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTFB1QXlGRWt2N1daSW9BM01MUW1VNmJtNElYdXFxRU52UEVWaGwxQmJCZE5wb1pQTzg1SjlYTFJsYndEX29saWxjLWItUlE0WU5XOTQ3VVRMZ1dJY3VvYlVna3RIc1lEajZZT2txdk8zYkxOQnk4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 842
    },
    {
      "date": "May 29-30",
      "text": "US military 'disables' a ship with a Hellfire missile in the Gulf of Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPSVotLVFqT0lNQy15OWRUSVRNYi12b1d2ZTZTekxmaE9uYlNmNDd5YlVwVXNlaHE2RWsxTzZVZzFxTmk0M05uSjdCVlU5OGFsbUVEY3hOWUJFRTEzOWtjOURHZUZUQ0pGNlJMSl9ORHk5WUVGOG9nM1U4WnBWS2RSZzBSaTFkWC1nR0ZmNmNGTUVTVnF3TFNUN2ptYk9TLXp5Y19PMm8xSFBpWTduQl9xTDNuVHZJSEwwWTV3a2Z30gHDAUFVX3lxTE1qaGFnNzB1Q2JrYy1HUml3ZllPZTZjbU9tUGxsV25VNWp4UnpOVkNFUHV0a3NXVzRsVHk1M2pHTkNnb05KVlhqVFE3TTY5MDN0dDhyZlNnSlJ3dTVpdGNFaXNqLUNNMDFfR2VWRGxlYlV4VnJPd09OVVktNDhndXlmLXlaUkJpdXd4U2Q3ZXM1bnZac3RzcGxnQmJBWFFKT0lqaFlhcVRLd3cxb1ppREs0VVM4dnZyTlpjMmhtc2hzWlotQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 842
    },
    {
      "date": "May 29-30",
      "text": "Trump puts off 'final determination' on an Iran proposal.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 842
    },
    {
      "date": "May 29-30",
      "text": "Iran promises 'utter ruin' if war restarts.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxOTVhnUnlzdGZkbDRWR3IyUDY2R3hqUkxpSHdGSlB2X21jdzNUdW9YNV9MbWxjMmtwWG9sejlkbGJFZGxybUI1a3lvT2N0Ul9ScGt2eDZob21RM3VnbE1hd2VORnVJdVdqdjlKekZMaE1wUnVXMC1ocUdIaDZXOUdObF9HVng?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 842
    },
    {
      "date": "May 29-30",
      "text": "Iran says US talks continue, while Israel expands its invasion into Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxNY24wNkZUR1ZyOFJFdnFnZ1FJWVB5VENxaTJLSHpSUVZRcHgzMFFYdXNFRGNyNER3aG1XS0tzbXZ3VXd5WHFOb3I3cXlrRnpOX281aUo5RGRQVnliZ1JFN2tsRWZRd0JCWVUtQmtNNHJZdjdZSXZwdXRaWFhERzVUNHlneWlScnRfVkVrdzcwUXM1RXFNQ1Y5YjN4MGFsaHhqSmtkcm5kWUhsbmtlUlNFSNIBtgFBVV95cUxNX28xSk84d05HRGRQd1FqdmpqQ2Z0clNTNWdYcUc5SWxDd2xzTHlMNl9tcHNMUHJ4NkhvTzJTT0h1WmtfcWhCenF6bnQ0aVB3X0NINVFkSmM4NE5MaXVETlBKenVOTFZ3T0VoRVQtN0NFazNnUS1OZmNQN09IUEZmX1lwVGsxZ3VkRGhtRjNjRWZjZldqbHpwTXA4Y1E5ZGswS2hNYjRfZ1NhSlJDZHdaUlc3LUpaUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 842
    },
    {
      "date": "May 29-30",
      "text": "Israel strikes Lebanon and Gaza on the eve of Eid.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiaEFVX3lxTE5CY2syLXZIVUVCVFd1eGR5aTJyNUhNS0JxMTNjdlVtMTRjQWl3bFVqTFdlWEg3bEs1Rm9pSVJzUW51RVNWVmEwclNsQjN3QjNjS1ZPLUJ2MU5rUzMyMzAxbDdSUUExTmli0gFcQVVfeXFMT2xwaUF3VnV4LTNGRThkVXd1Z1A3RFAyQ01zcVpqTVRSRE9Iell6OFp5R2dZOUJPWkttSWpzWHg2QzJub3IxT0ZBbzVVSDZYTi1xckhUYk5HaWEzT2o?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Modern Ghana",
      "latestSinceUpdate": 842
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
      "headline": "Trump's Demands Shape Iran Truce",
      "summary": "President Trump has outlined demands for Iran and has yet to give final approval to a tentative 60-day truce agreement, with US officials emphasizing the military's capability to resume strikes if necessary. Negotiations are ongoing, but the administration maintains a firm stance.",
      "tone": "strained",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Iran",
      "headline": "Iran Responds to US Strikes Amid Truce Talks",
      "summary": "Iran has agreed to a tentative 60-day truce but continues to target American bases in response to fresh US strikes, including a US military hit on a commercial ship attempting to reach Iran. This indicates a volatile situation despite diplomatic efforts.",
      "tone": "defiant",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Hezbollah's Drone Threat Escalates Border Conflict",
      "summary": "Hezbollah has intensified its attacks on northern Israel using rockets and advanced fibre-optic drones, prompting Israel to shut schools near the border. This regional conflict continues to escalate, posing a significant security challenge for Israel.",
      "tone": "anxious",
      "latestSinceUpdate": 830
    }
  ]
});

export default LATEST_SNAPSHOT;
