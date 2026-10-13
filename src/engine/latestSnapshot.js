export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2574,
  "lastUpdated": "2026-10-13",
  "lastSyncedAt": "2026-10-13T12:00:00.000Z",
  "warDay": 228,
  "summary": "The Iran war continues with US troop casualties, heightened tensions in the Strait of Hormuz impacting oil shipping, and ongoing conflict between Israel and Hezbollah in Southern Lebanon.",
  "lastNarrativeUpdate": "2026-10-13",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.1,
    "durationDays": 3,
    "summary": "No active ceasefire is in effect, with Iran rejecting US proposals and intensified conflict reported in Southern Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 80,
    "oilDisruption": 90,
    "tradeImpact": 79,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "date": "Oct 13",
      "text": "Pentagon quietly raises the count of U.S. troops killed in the Iran War.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2574
    },
    {
      "date": "Oct 13",
      "text": "IRGC claims 'decisive control' over the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNeTNoQ3VwTHlvc0t4V2pneTdmcUg5QXY0YXF1Vk5LMUcyZDNJTzJTUU5UUmxUN3Z2V1NremJnMWw5STJDMlp5QTZiSHc2Y2drd080Y1ctVmdIN1ZPd2lMdjlrTklDTUJIOFRWakw1QkxjM0U1ekYyTWpzTVdGS0NtNlJ5akFLdU5IR2RWdnA1dnRoM3M5RVJ4ODA3b3BwbHdrRVU3ajdQQjFIVmx6bHNHYmVITW0xZ9IBuwFBVV95cUxNT0ZhVXc5N0MzS0E5Q1BTM0JkV0xndFFBdG4wZ19ZbDhvTDA5SG0tcThhd1hDeFFPUU81QW9ra1FlY0xyMkZIWlZGS1FmLUhPeDlkd2hzQmVBSElwQmllbmJRM3kxZlE5d2p1SkpybUp0T1JTbUpGdXNRX29VWHlHZTE2c1RpbmtiLU55bFlNODJRLUREWHc3VHRkR1Flc21PQ3pidEhuRnA0UnBIWVNBc2pQa1NFN3MyMlZr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2574
    },
    {
      "date": "Oct 13",
      "text": "Iran calls the latest U.S. proposal to end the war 'insufficient'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxNLXRjcFVOT0JlLXZweVZyNTFOcy1CUUV2ck1uekRRUFRTN0JlemlmTlREc0VRT2w0QllyUnRHS1JSWUI2Yld3QzNMOVdKMFJmQ2dtcHR5QVZxb2staWdoMkJJMFo0XzhaRjZuVi02NDFJZTZOV2s2ZDN5cGN0b2RpY3pyU3JzanZLX2V2R1l3ZjVUS1ZfTHY5Um5heEU2UHRTcjhpLVgycThkMFhiYTNQOXdBaVR1VGcyTndhak1qa2JXa2pBTk5n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 2574
    },
    {
      "date": "Oct 13",
      "text": "US weighs strikes on Houthis and Iran after a deadly Saudi airport attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiUkFVX3lxTE4tTzBYU0lxSGR2OEJ1S0ZsSDRQcVZHRlFOV0dQeWsxZ3VrZFNyRU5lTGxISEhvU09GREx2WUJjeVVzYVFWVGktSFdQZC1BeHdyY0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Iran International",
      "latestSinceUpdate": 2574
    },
    {
      "date": "Oct 13",
      "text": "Iran sets crosshairs on a ‘US-UAE’ oil shuttle operating out of the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxObWp5UElEV2piTFkzc3NRUTR4NDJfM0trT2wybWw5U2pkeGdpdlg2NHVCN1lCZWN3MGIwX3F3OWtDc1lwOG1LQmhENVVPT0s1T1FGZjNwNDczSE9WczU4SkN3QlVVRTlpOFcwTGp0ZFU4ZjRLcG5HRm1tOTdjUUMyOXZDLUlFMUgzZlhzTlp1LXN2dDhycE1lS1pGYXNlaTMtLTNiOFZwcFR3ZkNwaVJEUdIBtgFBVV95cUxNLU5pTjR5VVVpNEZJYjRfVVRuZ1lTZ0Y5OWd5LXFocDdJc1YyNFc4T1ZWMVRhTWxIUXhxNG5qQUtoeWdqdWtxM2J6SGhIQkVDMk1iZ0o5U2tCZmZRcC1tRDNkRUFBcUxFRGRfWlVPTU9jVjJjQ2RDNDNrRWpvbjREYklOVnEtZlpFdlhkUjZHeVlFWmpSWnNNd1NYRXZ4NUg0bDJVN2NFeU5RTGFNLTRvT1BHV3Brdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2574
    },
    {
      "date": "Oct 13",
      "text": "A tanker was struck in the Strait of Hormuz amid fresh IRGC maritime threats.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2574
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
      "perspective": "US Internal Critique",
      "headline": "Iran War Drains US Budget, Goals Unmet",
      "summary": "Reports highlight the significant financial strain on the US Navy budget due to the ongoing war with Iran. After six months, US objectives remain unfulfilled, and the Pentagon has belatedly acknowledged US casualties.",
      "tone": "anxious",
      "latestSinceUpdate": 2573
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Rejects US Proposals, Regime Stands Firm",
      "summary": "Iran's regime asserts its continued stability despite the conflict, rejecting US proposals to end the war and reopen the Strait of Hormuz as 'insufficient'. Tehran indicates it will review and respond to US conditions.",
      "tone": "defiant",
      "latestSinceUpdate": 2573
    },
    {
      "perspective": "Regional Instability",
      "headline": "Middle East Tensions Escalate Amidst Blockade",
      "summary": "The region faces escalating tensions with Saudi Arabia intercepting Houthi missiles and intensified Israeli actions in Southern Lebanon. The US blockade of Iran in the Gulf of Oman continues, leading to high-risk shipping in the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 2573
    }
  ]
});

export default LATEST_SNAPSHOT;
