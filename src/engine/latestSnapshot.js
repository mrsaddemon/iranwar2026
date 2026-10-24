export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2642,
  "lastUpdated": "2026-10-24",
  "lastSyncedAt": "2026-10-24T13:39:20.166Z",
  "warDay": 239,
  "summary": "The US-Iran conflict continues with direct military strikes by the US on Iranian oil tankers, increased attacks on shipping in the Strait of Hormuz, and ongoing planning by the US and Israel for potential renewed strikes on Iran.",
  "lastNarrativeUpdate": "2026-10-24",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is currently active between the primary belligerents."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 90,
    "oilDisruption": 99,
    "tradeImpact": 87,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "date": "Oct 22",
      "text": "An update provides an overview of the evolving US-Iran conflict landscape.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/iran-update-oct-22",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2642
    },
    {
      "date": "Oct 24",
      "text": "Ship attacks in the Strait of Hormuz have reached a record high in October.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/hormuz-attacks-record-high",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2642
    },
    {
      "date": "Oct 24",
      "text": "Iran reports 7 oil tankers were attacked in the Strait of Hormuz, raising fears of escalating conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/iran-7-tankers-attacked",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2642
    },
    {
      "date": "Oct 24",
      "text": "A vessel is on fire in the Strait of Hormuz following a sea mine blast.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/hormuz-vessel-fire-mine",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2642
    },
    {
      "date": "Oct 24",
      "text": "US military strikes three Iranian tankers in retaliation for missile attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/us-strikes-iranian-tankers",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2642
    },
    {
      "date": "Oct 24",
      "text": "US military destroyed five Iranian oil tankers after attacks on a Navy warship.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/us-destroys-iranian-tankers",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2642
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
