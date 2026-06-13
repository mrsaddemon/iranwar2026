export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 950,
  "lastUpdated": "2026-06-13",
  "lastSyncedAt": "2026-06-13T01:39:12.318Z",
  "warDay": 106,
  "summary": "President Trump announced the cancellation of planned strikes against Iran, citing progress towards a deal, though Iran states no agreement has been finalized amidst ongoing regional military activities.",
  "lastNarrativeUpdate": "2026-06-13",
  "ceasefire": {
    "active": false,
    "status": "fragile",
    "confidence": 0.3,
    "durationDays": 100,
    "summary": "Talks are ongoing for a potential deal, but no ceasefire is active, and regional conflicts persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
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
    "nuclearIndex": 70,
    "escalationLevel": 75,
    "oilDisruption": 70,
    "tradeImpact": 64,
    "sanctionsPressure": 62,
    "globalPressure": 77,
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
      "date": "Jun 11",
      "text": "Trump cancels planned strikes and touts progress in talks with Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifEFVX3lxTE1QY0JRWVhUT2wwN2h5ZFRETDRoUktOYngxcTFZVXNLQlIwNTBfN1JBaE9qLXlPT096VF9leUFHOVZMUEx4WnRVT1JscW1fRnlvRU02eFhRODZZY1UyU0pYakFfbWtiWmtPSnppQW9yeE1CSFBRaXdnZElJZGs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 950
    },
    {
      "date": "Jun 11",
      "text": "Iran states no deal has been finalized despite Trump's claims of progress.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 950
    },
    {
      "date": "Jun 11",
      "text": "Pakistan’s Prime Minister says a 'final text' of a US-Iran deal has been agreed.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxPbXc3blhkTDdaaGZNWkl4cWlUUXk1TTR3X0Q3Ym93ZDlwX3FYRU1iTHl2Wl9wekhRTmJfaWVIcmduMDVOTTRYUy1fTWIwVHVqRFZnQUtTVXdJYmVQZjJUQXhkc3M5Yms2aVlBU05RUlE0Ty1UUlNuS1M5dVVWelpQRTZ5WWV3UURoa2Fudzh2Z0JoSEdJMnp1V2ZDX2lvdm5seGtoMUNNZE5jN1k1MmJSSnpVTjJjTHE20gG-AUFVX3lxTE5VXzRrd25NRzg2NGhvSk9uX0txUlUzQmxQZW1fYkMwRkN6bTM2VXFrN2Y5ZXJuOENoaUc3blVybkQ1RWMxYVY3NjJNYWFVQWZOcER6cXowRE5OeHdUNXBxMmh0VFJ5NmNscDNPQU14VGRNWmVGNHZzZ1Q5LThZZGxkcjJ0MVVWQ25XV1ZkeGE3eWlpcG43WW1FX3EzZGJHUkdGYjhMSEZ1aDNfcEoyOG5lak5Fa1YyUzU1aVBjLVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 950
    },
    {
      "date": "Jun 11",
      "text": "US says second day of strikes 'completed', indicating recent military action.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxOYVRrbUlGa2FOQi1SSnhKZmNKNDh6NURTOFdVSjVHeEpTTVM5b0RyNDQxWnhIaXRwTVRBNEhMY2x4c1EtM1VXYkp5VWp1a1huZV84MEFVb3ZIVEZtSHBRWlVuMXJPNXc5dmdQSnctOGNRckMwNFFheUdWVE9uWmFpdU9fS0lZZmlJd2M0dWoxUlpZNVk1SnZHeVZ3MG41aDZKQ24yQkNueGNEUGN5alJNTjhjUWdFeGZkQ0k0QndwQ21heGxvNXpnTGdCRVA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 950
    },
    {
      "date": "Jun 11",
      "text": "Kuwait closes airspace and Israel warns of launches from Lebanon following reported U.S. strikes in Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE5JRzk3dDJ5dEFyWGw2dGY2Z0hxUy12c29QVElKMUxxNUYzeVdMVXBiWm9vZUlxYzBzakpMOGsyMVhLZ2p1WnByX2dkVWVwNi1uNmt2UWZwdU5ZaG90Vm9DQWs5OGhUSWtfdGlYTjU2TVA3d9IBd0FVX3lxTE1MeFk0ZWNVVUM5X2xWaVRCN1IyVDFxMjcwWERtUjlXWS10UmFMdVBpMlZ4akhDSWRBR09QVjA4SjBUX0VhVnl6YTMtOFdwVEd6Q1R5S2tVSmJQZ1c4YlNCTXIxemM5Z2w1RWljYl9zQ21EWFc0bGxN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 950
    },
    {
      "date": "Jun 11",
      "text": "Iran warns its 'sword will always hang over Strait of Hormuz' and links reopening to a deal.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 950
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
      "perspective": "US Administration",
      "headline": "Trump Touts Deal Progress, Cancels Strikes",
      "summary": "President Trump claims significant progress in talks with Iran, leading to the cancellation of planned strikes and signaling a potential de-escalation of direct conflict. This narrative emphasizes diplomatic breakthroughs.",
      "tone": "neutral",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Denies Deal Finalized, Warns on Hormuz",
      "summary": "Iran acknowledges ongoing negotiations but denies a deal is finalized, maintaining a defiant posture regarding the Strait of Hormuz and leveraging Lebanon as a strategic asset. This perspective highlights caution and continued leverage.",
      "tone": "defiant",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Israel Escalates Against Hezbollah Amidst Talks",
      "summary": "Israel continues military action against Hezbollah in Lebanon, with the IDF poised for further offensives, indicating persistent regional tensions despite US-Iran diplomatic efforts. This narrative focuses on ongoing localized conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "International Mediation",
      "headline": "Pakistan Claims US-Iran Deal Text Agreed",
      "summary": "Pakistan's Prime Minister asserts that a 'final text' of a US-Iran deal has been reached, suggesting international efforts to broker an agreement are advancing. This perspective offers a more optimistic view of the diplomatic process.",
      "tone": "neutral",
      "latestSinceUpdate": 950
    }
  ]
});

export default LATEST_SNAPSHOT;
