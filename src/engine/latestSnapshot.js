export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 697,
  "lastUpdated": "2026-05-18",
  "lastSyncedAt": "2026-05-18T20:04:36.000Z",
  "warDay": 80,
  "summary": "A fragile ceasefire holds between the US and Iran following Gulf intervention, while a new front emerges with UAE strikes and Iran implements a Hormuz toll mechanism, amidst ongoing deadly clashes between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-05-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 5,
    "summary": "A shaky ceasefire between the US and Iran is active, with Trump warning Tehran that the 'clock is ticking' for a deal."
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
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "May 17",
      "text": "US President Trump held off a planned attack on Iran following requests from Gulf states.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/iran-war-live-trump-says-attack-on-iran-held-off-upon-gulf-states-request",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 697
    },
    {
      "date": "May 17",
      "text": "A new front in the conflict emerged as the UAE reportedly struck back against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/iran-weekly-briefing-new-front-emerges-as-uae-strikes-back",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 697
    },
    {
      "date": "May 18",
      "text": "Iran announced plans to unveil a Hormuz toll mechanism and initiated Bitcoin-backed shipping insurance for the Strait.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/iran-starts-bitcoin-backed-shipping-insurance-for-hormuz-strait",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 697
    },
    {
      "date": "May 18",
      "text": "Fighting between Israel and Hezbollah in Lebanon resulted in a death toll reaching 3,000, with Hezbollah employing evolving drone tactics.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/lebanon-death-toll-reaches-3000-in-fighting-between-israel-and-hezbollah",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 697
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
      "perspective": "US Stance",
      "headline": "Trump Issues Ultimatum to Iran",
      "summary": "The US President has publicly stated that time is running out for Iran to reach a deal with the United States. This rhetoric suggests an impending decision on further US actions against Tehran.",
      "tone": "defiant",
      "latestSinceUpdate": 691
    },
    {
      "perspective": "Regional Security",
      "headline": "Hormuz Strait Tensions Escalate",
      "summary": "Iran is threatening to implement a new toll mechanism in the Strait of Hormuz, raising concerns about potential disruptions to global shipping. US officials view the current situation in the strait as detrimental to international interests.",
      "tone": "anxious",
      "latestSinceUpdate": 691
    },
    {
      "perspective": "Lebanon Conflict",
      "headline": "Lebanon Ceasefire Under Strain",
      "summary": "Despite an extended ceasefire, Israeli forces have launched new attacks in Lebanon, leading to casualties and eroding the fragile agreement. Hezbollah has also demonstrated evolving drone tactics, contributing to the instability.",
      "tone": "strained",
      "latestSinceUpdate": 691
    },
    {
      "perspective": "US Military Critique",
      "headline": "Concerns Over US Military Conduct",
      "summary": "Critics argue that the current US administration's policies are negatively impacting the military's effectiveness and ethical standards. Reports indicate the Pentagon has ceased a program designed to prevent civilian casualties, raising questions about operational precision.",
      "tone": "skeptical",
      "latestSinceUpdate": 691
    }
  ]
});

export default LATEST_SNAPSHOT;
