export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 69,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T07:29:51.868Z",
  "warDay": 43,
  "summary": "Ongoing conflict in the Middle East continues with Israel striking Beirut and rejecting a ceasefire in Lebanon, while Iran engages in peace talks with the US amidst the closure of the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2026,
    "summary": "A fragile ceasefire between Iran and the US is being tested amidst ongoing conflict in Lebanon and the closure of the Strait of Hormuz."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 90
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
      "date": "Apr 09",
      "text": "Netanyahu states there is no ceasefire in Lebanon as Israel pursues talks.",
      "severity": "info",
      "latestSinceUpdate": 69,
      "sourceUrl": "https://www.theguardian.com/world/2026/apr/09/israel-bombing-lebanon-us-iran-ceasefire-condemnation",
      "sourceName": "The Guardian"
    },
    {
      "date": "Apr 09",
      "text": "Iranian delegation arrives in Pakistan for peace talks with the US, with Vance en route.",
      "severity": "info",
      "sourceUrl": "https://apnews.com/article/86493db40bdf08ff15224c39a97b7854",
      "sourceName": "AP News",
      "latestSinceUpdate": 69
    },
    {
      "date": "Apr 10",
      "text": "Trump warns of fresh strikes if Iran talks fail.",
      "severity": "warning",
      "sourceUrl": "https://www.theguardian.com/world/live/2026/apr/10/iran-war-live-updates-trump-ceasefire-strait-hormuz-israel-lebanon-hezbollah",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 69
    },
    {
      "date": "Apr 10",
      "text": "Strait of Hormuz remains closed, with the US reporting Iran is unable to find mines it planted.",
      "severity": "critical",
      "sourceUrl": "https://www.tribuneindia.com/topic/mineclearance",
      "sourceName": "The Tribune",
      "latestSinceUpdate": 69
    },
    {
      "date": "Apr 10",
      "text": "Hezbollah rocket attack damages a 1,500-year-old Israeli church.",
      "severity": "warning",
      "sourceUrl": "https://www.aljazeera.com/amp/video/newsfeed/2026/4/10/hezbollah-rocket-attack-damages-1500-year-old-israeli-church",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 69
    },
    {
      "date": "Apr 10",
      "text": "Israel strikes central Beirut, killing at least 182, after stating the Iran truce does not apply there.",
      "severity": "critical",
      "sourceUrl": "https://apnews.com/article/9402965418687c634d4a157c966ec6ea",
      "sourceName": "AP News",
      "latestSinceUpdate": 69
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
      "perspective": "US Diplomacy & Pressure",
      "headline": "US pushes for negotiation while maintaining military readiness.",
      "summary": "The US, through envoy Vance, is actively engaged in peace talks with Iran, while President Trump warns Iran against failing negotiations and highlights US military readiness. Trump also criticizes Iran's actions regarding the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran engages in talks amidst Strait of Hormuz closure and ceasefire tests.",
      "summary": "An Iranian delegation is participating in peace talks, but the Strait of Hormuz remains closed or has low traffic, and Iran is reported to be testing the ceasefire. Iran is also reportedly unable to find mines it planted in the Strait.",
      "tone": "defiant",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Israeli-Lebanese Front",
      "headline": "Continued conflict in Lebanon despite ongoing talks.",
      "summary": "Israel and Lebanon have agreed to meet for talks, but Israel states there is no ceasefire in Lebanon, and both sides continue to trade strikes, further threatening any broader de-escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "US Military Internal",
      "headline": "Disquiet and unpreparedness claims within US military.",
      "summary": "Survivors of a deadly attack on a US military outpost in Kuwait dispute the Pentagon's account, claiming the unit was unprepared, contributing to growing disquiet within the military.",
      "tone": "skeptical",
      "latestSinceUpdate": 64
    }
  ]
});

export default LATEST_SNAPSHOT;
