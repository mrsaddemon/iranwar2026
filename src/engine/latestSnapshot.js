export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1505,
  "lastUpdated": "2026-07-28",
  "lastSyncedAt": "2026-07-28T23:43:34.174Z",
  "warDay": 151,
  "summary": "The Iran-Israel conflict continues with recent exchanges of strikes, followed by a pause agreement, while diplomatic efforts and regional tensions persist, including threats to the Strait of Hormuz and US forces.",
  "lastNarrativeUpdate": "2026-07-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "Iran and Israel have agreed to pause strikes following a recent exchange, but warn of retaliation if the pause is breached, indicating a highly fragile de-escalation."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.65
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Jul 27",
      "text": "US pauses new strikes while Iran states no current negotiations with the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1XYlk1TXQyaFgzZF92aWM1cHMxWHlIci14VTNUVEVBamN4Rl9qQzNvQVo2VmEwVjBpbEZIU1RXTk1QMFJHay0wbFloVnU5Ui0yLVFFcWdiOXg3cGN1RVo5bW1QMTZSNlR0LU1iN0t3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1505
    },
    {
      "date": "Jul 27",
      "text": "Iran vows control over the Strait of Hormuz amidst ongoing conflict.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1505
    },
    {
      "date": "Jul 27",
      "text": "Former President Trump meets with Israeli Prime Minister Netanyahu as threats to resume bombing Iran loom.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1505
    },
    {
      "date": "Jul 27",
      "text": "US launches new attacks, and Houthis announce a Saudi blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOMHF3aV9CSGJTNDE1X1NWeUNnbkxKa2lmQnQ5LUtBTHF1QUJFUVUzb3QycktuMms1Y2dvczR2MENLeDhwU19SVXZFaGY1bDNNUENZd01nQnloVkFCanVSLXZ1MUs4NzdUdHlFdG9YNEFhWHVRLVdTcWl2WHpFRkZSYy1rZTI1QzhhZms5Y29tRWFZU0dMQnRDdUs1el9TQlFkV2NVOUFLSmQ2TS1wRHMtZUhoalkzWHVrSXJJ0gHAAUFVX3lxTFAwX2wtLVpHZ1kwZ2VGTWYzbTdWSGtxZzViQUhrc2t0QUNySWVYaC1DQWJxNzRwWGh2b1c3VDB4T1ZCTXYtWjZ4dWJGcWE5YVc3U1NuUnBNbW1CLXJ2LU9fTkVDVmJEZzVIRWRXYllhMmFmMVRvdWlaRUVOY0RmMWE2dU1OUlJKRm1UZUJ3ZElGdVA4cHljNWlXRHNoUUs0TWNpelNpYm1BU0Z5dUN6SjVOS1RYenh0bUVNdWswRFJPWA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1505
    },
    {
      "date": "Jul 27",
      "text": "Iran and Israel exchange strikes for the first time since the April cease-fire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1505
    },
    {
      "date": "Jul 27",
      "text": "Iran and Israel agree to pause strikes but warn of retaliation if the cease-fire is breached again.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE0xV3g2OWxXcVhxUjZOZUpZVThPSXNkbW1lcjdqaU5KRkctWHBwRTNOSWp1dy1zSE8xNHpUU1ZpRGVKMm5qVTBJMEx2Znp3d1pUaGcwVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1505
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
      "perspective": "US Diplomacy/Threat",
      "headline": "Trump Pursues Talks Amidst War Pause, Warns of Force",
      "summary": "The Trump administration is engaged in 'very deep talks' with Iran, having paused strikes for a second night. However, Trump warns of 'strong military action' if diplomacy fails, while dismissing concerns over military stockpiles.",
      "tone": "strained",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "Iranian Conditions/Defiance",
      "headline": "Iran Threatens Expansion, Ties Peace to Lebanon, Praises Hezbollah",
      "summary": "Iran threatens to expand the war if U.S. resumes strikes, which it attributes to Israeli pressure. Supreme Leader Khamenei ties any peace deal to Israel ending attacks on Lebanon, with Mojtaba Khamenei praising Hezbollah and calling for continued jihad.",
      "tone": "defiant",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "Israeli Skepticism",
      "headline": "Israel Anticipates US Escalation Despite Pause",
      "summary": "Despite the current pause in U.S. strikes, Israel reportedly believes that the Trump administration will soon be compelled to escalate military action against Iran.",
      "tone": "skeptical",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "US Stockpile Debate",
      "headline": "US Stockpile Levels Under Scrutiny Amidst Conflict",
      "summary": "A debate persists within U.S. political circles regarding the state of military stockpiles. While some officials dismiss concerns, others attribute potential depletion to previous administrations.",
      "tone": "neutral",
      "latestSinceUpdate": 1493
    }
  ]
});

export default LATEST_SNAPSHOT;
