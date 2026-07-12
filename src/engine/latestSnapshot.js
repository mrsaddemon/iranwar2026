export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1270,
  "lastUpdated": "2026-07-12",
  "lastSyncedAt": "2026-07-12T19:42:56.307Z",
  "warDay": 135,
  "summary": "Tensions between the US, Israel, and Iran have escalated significantly with multiple rounds of strikes and counter-strikes, particularly in the Strait of Hormuz, while a ceasefire in Lebanon remains active but fragile.",
  "lastNarrativeUpdate": "2026-07-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 30,
    "summary": "A ceasefire remains active in Lebanon, leading to an influx of tourists in northern Israel, though Hezbollah is reportedly regrouping and internal divisions persist over disarmament efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
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
      "date": "Jul 11",
      "text": "US unleashes biggest round of strikes on Iran in weeks following an Iranian attack on a civilian vessel in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE91YV9WLTU4cXN4cjF5RWVKc3lJUlpWQ1BjS2RqUURnTzVRN1VhTUthTjBsdjNHZ1FRam1KMHM3Tkh4ZTJBdlhYZTVXeENUWDVkWnQ2NDBHY2xoZGJSOEtmaEp3Y0M5NTMzbDB5QUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1270
    },
    {
      "date": "Jul 11",
      "text": "Iran reports explosions and new attacks on military targets on its largest island near the Strait of Hormuz, including Bandar Abbas and Qeshm island.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxPSjlZUGVZa2U0b2h4WVVFUnpiN2hpUVYtbHY3aExEamdfaEJWWDQxTUhJdXNMbko1YlpobWh4dExkWWFLX2pOMVBTRi1aaE9manlhZXUtZzhfdG5VQk9qbVhiSGhwZEdET1hGUUpNYVhfMGtPMGFpaU1UVHBsWUp5SElpWHBuYnU2d3NqQVd2ZU5aZ2lOMnZGNmVaemxBdHMwNHJXcjQ5aUtjWHliakZLUmdJRmNBTlVES3E3SmEwSXpONVV5R1E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1270
    },
    {
      "date": "Jul 11",
      "text": "Israel conducts strikes in Iran, as confirmed by the IDF.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1270
    },
    {
      "date": "Jul 11",
      "text": "President Trump states he agreed to talks with Tehran but declares a broader ceasefire 'over' amidst escalating conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxPak5sUE5NcGZ1TlY0bjF5WTI2WVI4ZmNCLXBrcHkxcmladU5idm91RGVuWTJLYkJkVW40ZUdfSUtqWGVZSVVtWlNWYTRhWEIyNE1wQld2NzJjOGQxU2YyTWFLUnI2Q1NkX3JJcWVab2FQWHNjMFdvYk5zU1ZQNV80ZjVUMlEyLVMtbDRZRkVqZ2xzRHN0RTBucDRLb2VlZ2I3Mkl1Z2ItMnF4aXZuazJrZNIBtgFBVV95cUxNcDZKVURqTm1IQlR4UGhnM3BaeEhHYUkteld2dGdZNVpXckZnZUlXZ1l1dnlld1V5SVV5UjlsWkFFS19VUFlIYWUzcFBmMG13Z1c3SVA2TF9GdjVYamRqRW5Nc2piOVlYYzhOZFFfcGVQdTAwWlFDRU1aQTJOZUNVQTVad2FFR0YtOE5qM0dFY3ptbHBNUEZEYUpPS1hSUG94aVJES1ZEOG5fWW1Jd2xla0paX3lmdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1270
    },
    {
      "date": "Jul 11",
      "text": "A report indicates survivors of an Iranian attack that killed six U.S. troops claim generals ignored warnings.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi1gFBVV95cUxQRWt5dzlReFlGS2NnSUJWX0loQm8yZUwwWkZWcTNBdWhULXg5RThSSHVaLVJCbjhna0dpU3ptLUFFRjdCR095WkFkcEFsY0VoYjBEcGVIUEh0Vk93OE9kR29WTDd1dlJGVW9xblVGSVBNTTZBZHc0RWdvSHppa0FqMkR2cEpxRUlqa2ZYMmtsVjM4Yk1HM2hxdjhVS09kbkthTkFOblp5emN2eW1nV3Z0RFN5R09WOGhFR0dSM0dURllHbXdnVzZhLThPVkF3SVMyMEtPeGxB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1270
    },
    {
      "date": "Jul 11",
      "text": "A Hezbollah lair built to attack Israel is unearthed beneath Beaufort's strategic bulwark, raising concerns about regional stability.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPMG5BNnJkck5GOS0za01lWWhsVWc5X1M1OFI3NUtXOGMyckNpakFlU3FvVzlKRnkyVTg1V2FCMmpoRHhsRDBzM1lXNnpTQTZHcTB6bURsNkRIc0VUMWQ3cTNQdG1JNGt3Q2dWekNlcGxpWno3eTdidDR1X2hUdHI0WjNSa3FRckQxbk5OTkNWTG1WUVZaakRXUFF0cnRJWmREaWpwc3hoMmxoSk45QjhIMzR5X2ZENGx4dnM4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1270
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
