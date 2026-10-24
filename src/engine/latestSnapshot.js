export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2643,
  "lastUpdated": "2026-10-24",
  "lastSyncedAt": "2026-10-24T17:01:58.043Z",
  "warDay": 239,
  "summary": "Tensions between the US and Iran are escalating significantly, with reports of planned strikes, an Iranian 'offensive' doctrine, and attacks on oil tankers in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-10-24",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire or de-escalation efforts are currently reported; tensions are actively escalating."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Oct 23",
      "text": "Iran reveals an 'offensive' doctrine, prompting a US alert regarding the imminence of war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/iran-offensive-doctrine",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2643
    },
    {
      "date": "Oct 24",
      "text": "Iran reports 7 oil tankers attacked in the Strait of Hormuz, raising fears of a return to war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/iran-tanker-attacks",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2643
    },
    {
      "date": "Oct 24",
      "text": "U.S. and Israel are reportedly planning for renewed strikes on Iran following upcoming elections.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/us-israel-iran-strike-plans",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2643
    },
    {
      "date": "Oct 24",
      "text": "Houthis launch a ballistic missile attack on Yemen’s Aden amidst regional instability.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/houthi-aden-attack",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2643
    },
    {
      "date": "Oct 24",
      "text": "Iran warns the U.S. military is not allowed in the Gulf 'under any circumstance' as tensions rise.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/iran-gulf-warning",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2643
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
      "perspective": "US/Israel Security",
      "headline": "US and Israel Plan Renewed Operations Against Iran",
      "summary": "US and Israeli officials are reportedly drawing up plans for renewed military operations against Iran post-election, citing ongoing regional threats. This comes as Israel implements a lockdown in the West Bank and expresses concerns over Hezbollah activities.",
      "tone": "anxious",
      "latestSinceUpdate": 2639
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran Reports Tanker Attacks, Threatens Undersea Cables",
      "summary": "Iran has reported attacks on seven oil tankers in the Strait of Hormuz, escalating fears of a return to war. Iranian officials also warn of detailed plans to target Gulf undersea cables if military conflict resumes, signaling potential retaliation.",
      "tone": "defiant",
      "latestSinceUpdate": 2639
    },
    {
      "perspective": "Regional Stability & Economy",
      "headline": "Oil Prices Rise Amidst Escalation Fears",
      "summary": "Rising tensions and threats to shipping in the Strait of Hormuz are contributing to increasing oil prices. Saudi Arabia is exploring options to reroute oil, while Lebanon faces internal challenges regarding Hezbollah and stalled diplomatic talks with Israel.",
      "tone": "strained",
      "latestSinceUpdate": 2639
    }
  ]
});

export default LATEST_SNAPSHOT;
