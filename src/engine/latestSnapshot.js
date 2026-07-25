export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1450,
  "lastUpdated": "2026-07-25",
  "lastSyncedAt": "2026-07-25T04:31:48.927Z",
  "warDay": 148,
  "summary": "Ongoing US strikes against Iran and Houthis continue amidst threats of further escalation, while oil prices surge due to new choke point disruptions despite a reported, but breached, ceasefire between Iran and Israel.",
  "lastNarrativeUpdate": "2026-07-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A stated pause in strikes between Iran and Israel appears to have collapsed following Israeli blasts in Lebanon and new US missile strikes on Iran."
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
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
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
      "date": "Jul 23",
      "text": "Oil prices topped $100 a barrel following a Houthi attack in the Red Sea, marking a new escalation and establishing the Red Sea as a second choke point alongside the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1450
    },
    {
      "date": "Jul 23",
      "text": "President Trump is reportedly considering a 'massive attack' on Iran and has threatened 'major military punishment' against Iran and the Houthis, while also stating Tehran is getting 'more serious' in talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOQVI2TFJjMFduMWRzZ1B6dEYtWWVTcHYyWFJ6NjVaNlpzaWxleklxUmNRMVFfMzlCNjhhU21mMmNoTk9zTjZ2NGZZbGxNR3FXYzQyM29uc3N1bkNXLURCTmwtNHF5RU5xNHVNQWlnR0hYanhOeXV1SzgyN1dVam5vZElpZ2NENktUTUFhX2RLdi15UXBZZTRWUkZNT3Q5bW9melEtN0R1Z0ZPeldvOFl5WS10czRjbVE0TXpWR2RIZ9IBxAFBVV95cUxOYTJ6dmJvYTV3RkFscUNkQVNjMEVLZUN5TGVydTVEd2VHeXp3YkU1blpTX1Vrb2Q1SVBUaTVYSm4wV2VjUWlsMmwzZWRKYkpiaEdSSEpGaUVlSEpuRzMzX09nczZ5RGVqTWgzRGpCQ09rWEpPQjduQnJkdVZOanFldk84aHZyZEc5UE5LU1dkUnpxUDlVUEtBTmtQZUVhaW9hWVp6d2xuYm55a0ZsUnU1ak5RMFFyejU2ZEdRdlVpSDh5dEh1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1450
    },
    {
      "date": "Jul 23",
      "text": "The U.S. carried out new missile strikes against Iran, with the path towards de-escalation remaining uncertain.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQNFdZY1R2bFRCTk51X1E2U2dLZUphMDA2MVlUaGRzOEJXRXc5Vl9ObDNaVE9FNnU4eTV6TXBjYjRyR2xZekJYeGY2VHNrYW9hSjhpSjQ0aVJEdXBkSk9Ja2NXRjZjQng3Rkp1eFBHMlVwQ2paZUlVRnZUN0l3OThQRlZVLTJDanZHREpMTjFNVm9odWl5alZwRUpDbUhwSWRWeHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1450
    },
    {
      "date": "Jul 23",
      "text": "Israel carried out blasts across south Lebanon despite a previously announced 'ceasefire' deal with Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNZl90QmVaeGdDMFBWV2JaNkRTV29BN2tJOTIyVTdYeGdrTXoyYS1PWWthTG4tUzlkWlBpNEtiWmFUTTRBRC1VYTlhNlhCb0EwZ1NoUV9CUVRlYWZLTmdhakcwbWNTUExtYkEtUVZzN1pEUkhZRzgwZHVGYU5Lekx0bXdNNHoyWnhkcW1WXzZmejU2Wm53YTdla3RZSk9NS1p5YnFUMjBxZE9HMFJvSVk40gG0AUFVX3lxTE9aU2dWYTlsVEdubkFVTWRoSlBqZnJaYTBzWUw1THpGeGo0eXJWMmpqcnBJYTAyZ1VmajdVZTI4TVBRNU9VdmFwOWg4WjV5bHI5c0NlNU1LSll2YUJvdERRMjBkbWtVWFY3VW95WFJyc1AtbHRBWVdGYVd5ZHFIamI4S094c1l3V2hYb0U0OU02MVlLNVc0SzhnLXpEWUUtQW5YSWJkaW1DcTF3SkFKSmUzMzBGSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1450
    },
    {
      "date": "Jul 23",
      "text": "Reports indicate discrepancies in Pentagon casualty totals, with recent deaths and injuries of U.S. troops in the Iran war appearing lower or removed from the website.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1zYTlaQTBnTTVTSGlNUVUwdWxXTWIyUHgyeWNVblhSZTBqMThsY0RfRjdMcGNIWEVuY0F4b0xucmJ3Y0FnSTNoN1liaEVQYmNpSkZzOUFfTDZ5Y3JiYnhhNVVFWHp6RzZ5QnN0cmNlNlcxaVl1NS1v?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1450
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
      "perspective": "International Focus",
      "headline": "Middle East Conflict Dominates Global Attention",
      "summary": "The protracted conflict in the Middle East continues to draw significant international attention, with observers monitoring developments closely. The ongoing situation underscores regional instability and its broader implications.",
      "tone": "neutral",
      "latestSinceUpdate": 1449
    }
  ]
});

export default LATEST_SNAPSHOT;
