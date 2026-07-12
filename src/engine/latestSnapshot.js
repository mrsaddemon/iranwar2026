export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1258,
  "lastUpdated": "2026-07-12",
  "lastSyncedAt": "2026-07-12T01:07:18.707Z",
  "warDay": 135,
  "summary": "Hostilities have resumed between the US, Israel, and Iran following the collapse of a ceasefire, marked by tit-for-tat strikes and Iran's declaration of the Strait of Hormuz closure.",
  "lastNarrativeUpdate": "2026-07-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "A previously fragile ceasefire between Israel and Iran has collapsed, leading to renewed direct hostilities and tit-for-tat strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Jul 10",
      "text": "Mediators are working to de-escalate US-Iran tensions and revive talks amidst renewed hostilities.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBpaGF3XzYyR2V1VW9XRTB1NEtRRzZweFd3Snd3R3dJeEo3Ti03UHBqanAwXzN3ODBYRWhycGV6eTY2c2hHcnlwRHNxcVNfSUZuMm41a1p6NUFXbldMTG1MS2lJV0FPM0xUb2NaZW9n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1258
    },
    {
      "date": "Jul 10",
      "text": "Trump states he agreed to talks with Tehran, but declares the ceasefire 'over'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxPak5sUE5NcGZ1TlY0bjF5WTI2WVI4ZmNCLXBrcHkxcmladU5idm91RGVuWTJLYkJkVW40ZUdfSUtqWGVZSVVtWlNWYTRhWEIyNE1wQld2NzJjOGQxU2YyTWFLUnI2Q1NkX3JJcWVab2FQWHNjMFdvYk5zU1ZQNV80ZjVUMlEyLVMtbDRZRkVqZ2xzRHN0RTBucDRLb2VlZ2I3Mkl1Z2ItMnF4aXZuazJrZNIBtgFBVV95cUxNcDZKVURqTm1IQlR4UGhnM3BaeEhHYUkteld2dGdZNVpXckZnZUlXZ1l1dnlld1V5SVV5UjlsWkFFS19VUFlIYWUzcFBmMG13Z1c3SVA2TF9GdjVYamRqRW5Nc2piOVlYYzhOZFFfcGVQdTAwWlFDRU1aQTJOZUNVQTVad2FFR0YtOE5qM0dFY3ptbHBNUEZEYUpPS1hSUG94aVJES1ZEOG5fWW1Jd2xla0paX3lmdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1258
    },
    {
      "date": "Jul 10",
      "text": "US demands Iran publicly state that the Strait of Hormuz is open and ships will not be attacked.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQMkgxNzlSWHpvYWVhcGhmNkJTRzJIa2R1Z1ZfOGJYdElvenoxa2diSHR6bTFJaWx2M0VZZ0JWM2Y1VjZrYzBOWTlFTUdLNHk2YzFWZGJJazJNSHU2VUdDbnpHaURzc25SeS1PVXp5dEJVWWdhbDdwUkNCTHhlUVQyXzZYOG5ZNlNSektpNUpYbFNYOEs0ZTl4Tk96SHd6b3M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1258
    },
    {
      "date": "Jul 10",
      "text": "Hostilities resume after Iran fires on a ship in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBYMVlvZWhZemtQSGdfTzNxam9JME9jc3RlNy1rUDNIT1lzM0l6ZHlFWGQyU3FpV2JNVXlDRUlMbEVhWi13bHZTSHdfS0VvWkhmTksyY041b19tLUNHajB6RkVHaloxdnBEX0dheGln?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1258
    },
    {
      "date": "Jul 10",
      "text": "IRGC navy declares the Strait of Hormuz closed.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxQOTZxZFcwTy1SYWVwNF9fbHE1cW5FekRidTZxUE5ickx6M2cwekVTVkc2eTY5ZGh2YWJFcWJRcmYtMnNQT3g4ZjJQYjdGRVpQZGd0LWpFVEh5LU1WSUt1ZlRVaTBsbXI0cEJDWGdOWXZRYUppM0JhTFJvekY2bFJ3MG02S1l6cGtqSVBNc2VRV2FhbkdpR0pKMHFnTUl6ejRZWmVWaUd3WmNVaS04ZVBRV1V6dW81bzBpTmtaUW1SeEE5d9IBxwFBVV95cUxNRm5pVE40OFNwLXdrN0t0STd5MktaVHVzRHhvM3AtekdBVkVyY19UWWpDM2lhRV9rWTVTcklWWVcySWdabWg4QmRlVWw4ajFQeS03RGhZdFpmWkhKT3BnSXI3MEdHZENYQnJIVkhCUmNveEtWT1N4MkhDVVRLSVRZcGpHTE4tQzhaZzZFMTdlT29hdDNYclpWMkI0TFZPZUlqcFNhTjY2eDNocU9aMWU5YXI3YUpjTjJLMlE3NGtIYkpzRXhPWWFV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1258
    },
    {
      "date": "Jul 10",
      "text": "U.S. launches strikes in response to Iran's attack on a civilian vessel and strait closure.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1258
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
      "perspective": "US/Israel Stance",
      "headline": "US Demands Open Hormuz, Israel Signals Further Strikes",
      "summary": "The US is demanding Iran publicly guarantee the Strait of Hormuz remains open and free from attacks, while launching retaliatory strikes. Israel has signaled readiness for further military action against Iran with 'even greater force'.",
      "tone": "defiant",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "Iran Stance",
      "headline": "Iran Closes Hormuz, Launches Strikes on US Targets",
      "summary": "Iran's IRGC navy has declared the Strait of Hormuz closed following an attack on a ship, and Tehran has launched strikes, claiming to hit US military targets in the Gulf. This comes amidst the burial of leader Khamenei.",
      "tone": "defiant",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "International Mediation",
      "headline": "Mediators Work to De-escalate US-Iran Tensions",
      "summary": "International mediators are actively working to de-escalate the renewed tensions between the US and Iran and revive talks. Efforts are underway to prevent further escalation in the region.",
      "tone": "strained",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "Lebanon Instability",
      "headline": "Hezbollah Disarmament Fuels Lebanon Divisions",
      "summary": "Efforts to disarm Hezbollah are deepening internal divisions within Lebanon, raising fears of a potential civil war. The IDF is preparing for a prolonged presence in Lebanon as Hezbollah regroups.",
      "tone": "anxious",
      "latestSinceUpdate": 1258
    }
  ]
});

export default LATEST_SNAPSHOT;
