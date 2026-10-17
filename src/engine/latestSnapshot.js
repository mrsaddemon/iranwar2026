export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2601,
  "lastUpdated": "2026-10-17",
  "lastSyncedAt": "2026-10-17T20:52:54.126Z",
  "warDay": 232,
  "summary": "The US-Iran war continues with escalating tensions in the Strait of Hormuz, driving oil prices to $110, while Israel considers further strikes on Iran and threatens Lebanon.",
  "lastNarrativeUpdate": "2026-10-17",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No ceasefire is currently active between the involved parties."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.75,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 80,
    "oilDisruption": 85,
    "tradeImpact": 76,
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
      "date": "Oct 17",
      "text": "Reported attacks on ships in or near the Strait of Hormuz have reached a record high.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOM3NTZE9fMEQ3MjZJZW1kbXZ0OE9RUlZTRkpUaTVQYmgtRE9GU3pKdVJmVFhZSUZBM3FrNjF0Q1VPdlU0MGFfZVBsQzhtTWszTWpvOThSNkpnaUJpaDZtUFNmYURteUJGZHdtNlpyVzNmRmJ6WHliZ19vWW1kYTNENE1BX3lUWTFrSHlZZW1uSGVvNWRETURlYXdBcXVyVUdj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2601
    },
    {
      "date": "Oct 17",
      "text": "Brent oil prices touched $110 as Iran escalates Hormuz attacks and Ukraine vows to hit Russian refineries.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxOT2lpZ1dfaGpSckplSzdGU19iZVY0cTJUd01MN1dpd29hcUtKZkpWbWZFZy1jTWxNME1oRWt6dGV2aU5tbzZ5UVpRVzI3amt6VzlXQXlfVkRNU2o3LXNpcUJZV2pPOXczV0k5SENNdGU4UWcyaEN4bUZUejNtOThUbGVYbGQtN2tYQ1g1M1RKQdIBlAFBVV95cUxPN0Q4b3V0UEhjMWVzZ2RkLXJGLXNtdGRlS0hWSjNROE1HTjA4LXIwM1dtZ3o2NU5leWVBQkpEMXViX2o2SWQ1d2g3dmhScHVRN0JSRDcyV1JsYl80WVZCaFNXVjVjNFRENEx5RDQ1blBhTnUwcjZsQ0xRSmt5aFlPeGxCNF96aVJiQ2Y5UnhjWk5zZEF5?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2601
    },
    {
      "date": "Oct 17",
      "text": "The US military is weighing the use of the 'mother of all bombs' in potential future strikes on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPbkE2TjhWV0FPQU53YTl2bDFSaHNWVDBnMkFlekJxWTZ0RTFMTDRxa2czR0F4alduTnIzN2JBRkxlS1ZIb2I2Wk56WXE5OFBDQ0Z3cVNkcmpXWkNjc01JZm9hLWtqSFZHUktvUUt4S2hVTENQOXJ5Wk5mam93SjgxcW15SkttV2s0bU1TeFotalEtQXJ3M0MwSGtGd3FtdWp4eUlJSm1ubGJmT1ktai1YRk9fMGJPWmpaVDBBMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2601
    },
    {
      "date": "Oct 17",
      "text": "Israel raises alert amid Iran war fears and states readiness to resume strikes as Iran aims to rebuild its nuclear program.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTFBSV2RSLTZKYXlsNGEzYmF1YnBmMjQ4U0YwZDl2MHVIdFNnVU91LXpUZ0Y5RmpBcjl4NUhFN3N1am5yUFNDbGk3bFZSSXNpcmIwZG1nOTRn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 2601
    },
    {
      "date": "Oct 17",
      "text": "Defense Minister Katz threatens to seize Lebanese land if Hezbollah and Iran attack.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE43TFd6VmlWR3B2OGZCaXZMbVhxRmZ0YVdMTmxKaWZ0d1psWFRsVGhId3VKVVFFeXBnMzJaM0dPcnlqR3ZSSGlxZjBkV2pjTEI5MDdCU2pRU0dXSHFwMjZTdkhzVi1HcWxpd2tXUDlR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2601
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
      "perspective": "Iran",
      "headline": "Iran Prepares for Defense Amid Sanctions and Talks",
      "summary": "Iran emphasizes the economic toll of sanctions and war, while denying nuclear ambitions and expressing readiness for talks. Concurrently, it is rebuilding its missile arsenal and boosting air defenses in anticipation of potential US strikes.",
      "tone": "strained",
      "latestSinceUpdate": 2595
    },
    {
      "perspective": "United States",
      "headline": "US Weighs Military Options and Budget Strain",
      "summary": "The US is grappling with the financial strain of the conflict on its navy budget and is considering various military options, including potential strikes. It also claims to maintain a blockade in the Strait of Hormuz.",
      "tone": "anxious",
      "latestSinceUpdate": 2595
    },
    {
      "perspective": "Israel",
      "headline": "Israel on High Alert, Weighing Pre-Election Actions",
      "summary": "Israel is on high alert due to Iran war fears, with its leadership weighing the timing of potential actions against Iran amidst upcoming elections. Suspected online operations targeting Iran and Lebanon also indicate ongoing covert activity.",
      "tone": "anxious",
      "latestSinceUpdate": 2595
    },
    {
      "perspective": "Regional Proxies",
      "headline": "Proxies Prepare for Imminent War Amid Regional Instability",
      "summary": "Houthi forces have conducted attacks in Aden, while Hezbollah is reportedly preparing for imminent war, indicating a broader regional destabilization. Division within Lebanon over Hezbollah’s explosives further highlights internal tensions.",
      "tone": "defiant",
      "latestSinceUpdate": 2595
    }
  ]
});

export default LATEST_SNAPSHOT;
