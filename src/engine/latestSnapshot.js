export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2635,
  "lastUpdated": "2026-10-23",
  "lastSyncedAt": "2026-10-23T10:26:36.358Z",
  "warDay": 238,
  "summary": "Tensions in the Middle East are escalating as the U.S. and Israel reportedly plan renewed strikes on Iran, which has responded with threats of regional destruction and reported attacks on ships in the Hormuz Strait.",
  "lastNarrativeUpdate": "2026-10-23",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect, with attacks continuing and diplomatic talks failing to achieve a breakthrough."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "date": "Oct 22",
      "text": "U.S. and Israel are reportedly planning for a possible post-midterms attack on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/1",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2635
    },
    {
      "date": "Oct 22",
      "text": "Iran threatens to strike oil and AI facilities across the Gulf if the US and Israel renew attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/2",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2635
    },
    {
      "date": "Oct 22",
      "text": "Iran claims seven ships were hit in the Hormuz Strait and warns the US of a wider response.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/3",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2635
    },
    {
      "date": "Oct 22",
      "text": "Iran issues a 'serious warning' to US military forces deployed in the Middle East.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/4",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2635
    },
    {
      "date": "Oct 22",
      "text": "Hezbollah is reportedly recruiting Latin American criminals to prepare attacks against Israeli and Jewish targets.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/5",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2635
    },
    {
      "date": "Oct 22",
      "text": "Lebanon-Israel talks in the US conclude without a breakthrough as cross-border attacks persist.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/6",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2635
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (15 headlines)"
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
      "status": "unavailable"
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
      "perspective": "US/Israel",
      "headline": "Post-Midterm Strikes on Iran Planned",
      "summary": "Reports indicate the US and Israel are drafting plans for renewed military strikes on Iran following the upcoming midterm elections. This comes amidst heightened regional tensions and concerns over Iranian actions.",
      "tone": "anxious",
      "latestSinceUpdate": 2633
    },
    {
      "perspective": "Iran",
      "headline": "Iran Warns of Retaliation, Accuses US of Fabricating Attacks",
      "summary": "Iran has issued serious warnings to US forces in the Middle East, threatening to strike oil and AI facilities across the Gulf if attacked. Iranian officials also accuse Trump of fabricating Strait of Hormuz attacks to manipulate oil prices.",
      "tone": "defiant",
      "latestSinceUpdate": 2633
    },
    {
      "perspective": "Regional",
      "headline": "Gulf Nations Brace for All-Out War",
      "summary": "Gulf nations are reportedly bracing for a potential return to all-out war between the US and Iran. The increase in Strait of Hormuz attacks further fuels regional instability and economic uncertainty.",
      "tone": "anxious",
      "latestSinceUpdate": 2633
    },
    {
      "perspective": "US Military",
      "headline": "US Service Members Oppose Iran War",
      "summary": "A recent poll reveals that a plurality of active-duty US service members oppose a war with Iran. This indicates potential internal dissent regarding military engagement in the escalating conflict.",
      "tone": "strained",
      "latestSinceUpdate": 2633
    }
  ]
});

export default LATEST_SNAPSHOT;
