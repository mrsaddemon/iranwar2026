export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1303,
  "lastUpdated": "2026-07-15",
  "lastSyncedAt": "2026-07-15T04:12:02.405Z",
  "warDay": 138,
  "summary": "The US has launched additional strikes and reimposed a naval blockade on Iran, leading to a significant rise in oil prices, while Iran and Israel have announced a fragile pause in their direct strikes.",
  "lastNarrativeUpdate": "2026-07-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "Iran and Israel have agreed to a temporary pause in strikes, but both sides have issued warnings of retaliation if the agreement is violated."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Jul 15",
      "text": "US launches additional rounds of strikes against targets in Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/example1",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1303
    },
    {
      "date": "Jul 15",
      "text": "US reimposes its naval blockade on Iran in the Strait of Hormuz following Tehran’s attacks on ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/example2",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1303
    },
    {
      "date": "Jul 15",
      "text": "Brent oil jumps more than 9%, marking its biggest daily gain since 2020, after the US reinstates the Iran blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/example3",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1303
    },
    {
      "date": "Jul 15",
      "text": "Iran and Israel announce a pause in strikes but warn of retaliation if the ceasefire is breached.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/example4",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1303
    },
    {
      "date": "Jul 15",
      "text": "Lebanon arrests a 'high-level agent' close to Hezbollah for allegedly spying for Israel.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/example5",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1303
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
      "perspective": "US Aggression",
      "headline": "Trump Escalates Iran Conflict with New War, Blockade, and Nuclear Site Threat",
      "summary": "The US administration under Trump has declared a new war against Iran, resuming military strikes and imposing a shipping blockade in the Strait of Hormuz. Threats to take control of the strait and consider striking a nuclear site signal a significant escalation of hostilities.",
      "tone": "defiant",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Iranian Retaliation",
      "headline": "Iran Accused of Tanker Attacks Amid US Strikes and Blockade",
      "summary": "Iran is accused by the UAE of attacking two tankers in the Strait of Hormuz, causing casualties, amidst renewed US military strikes and a declared shipping blockade. This suggests a pattern of Iranian retaliation or defiance in response to US actions.",
      "tone": "strained",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Regional Instability",
      "headline": "Mideast Tensions Soar as Hormuz Attacks and US-Iran War Threaten Oil Supply",
      "summary": "The Strait of Hormuz is a flashpoint with reported tanker attacks and a renewed US blockade, driving oil prices up due to supply worries. The broader region remains volatile with Israel and Iran trading strikes and concerns over Hezbollah's activities in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Israeli Security",
      "headline": "Israel-Lebanon Talks Hinge on Hezbollah Amid Trade Strikes with Iran",
      "summary": "Israel and Iran continue to trade strikes, further destabilizing the region. Israeli officials indicate that any withdrawal from Lebanon is contingent on the dismantling of Hezbollah, highlighting ongoing security concerns on its northern border.",
      "tone": "strained",
      "latestSinceUpdate": 1287
    }
  ]
});

export default LATEST_SNAPSHOT;
