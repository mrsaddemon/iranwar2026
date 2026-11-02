export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2688,
  "lastUpdated": "2026-11-02",
  "lastSyncedAt": "2026-11-02T08:22:07.430Z",
  "warDay": 248,
  "summary": "Tensions remain high in the Middle East as US-Iran peace talks continue amidst reports of Iranian strikes on US bases and Israeli military preparations.",
  "lastNarrativeUpdate": "2026-11-02",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 2,
    "summary": "Ongoing talks between the US and Iran aim to de-escalate tensions and reopen the Strait of Hormuz, but no formal ceasefire is in effect."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.65
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 80,
    "oilDisruption": 65,
    "tradeImpact": 61,
    "sanctionsPressure": 63,
    "globalPressure": 78,
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
      "date": "Nov 01",
      "text": "Iran and Qatari mediators hold a third day of talks aimed at ending the US-Iran conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxPdXU0aVh0RXlJYm1BOUtMU2FncFZnaDY5dVo4LXR0OFhsUzl1V2s0ZHpoeU5VX2d4cjg0RWRXRkRLLVhRRFJ6QlVKd3dEQ3ZtNVF0c0laVUtZZU1DTFB2bVVpN01abDA1RDRBWXJLRzFSVzZpQmFaWFBVaVdhNG9GdEVranBrT2M5NzlmWFVKSXo5QjJla0JLZ2x3SG9pOE9mb0xOaUNaZmxxbzQ4RlVVY04tZnRxZWNLNVBoby1WMXQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2688
    },
    {
      "date": "Nov 01",
      "text": "Tankers were reportedly hit in the Strait of Hormuz, raising concerns about maritime security.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2688
    },
    {
      "date": "Nov 01",
      "text": "Iranian strikes reportedly damaged 24 US military sites, incurring billions in war costs.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWEFVX3lxTE9iTnh1al9feTF5YmVieTFHT1BfMnVvX2N1UTdZcklfbjA5YXdOcFZNdWtKMjV6REkxd1RqQXotMEZjNWliQkszSzloalhoU0JIX2xPZUJvdTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "TRT World",
      "latestSinceUpdate": 2688
    },
    {
      "date": "Nov 01",
      "text": "US military planes arrived in Israel from Texas amid ongoing Iran war preparations.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE94RGFGQzBYYVoyM3F2NjBaaEtXWHQxQmx1WTBDZ284S18zTDFFLVVoZ3FZa2l4TmlfZkNmY1UzbWJmQ3FyOGRnUENZTnJza3dlRGFNRDRocnliaFkxTlRxMkZKbEJCbVFxVkNoRFh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2688
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
      "perspective": "US/Israel Deterrence",
      "headline": "US and Israel poised for action against Iran's nuclear ambitions",
      "summary": "The US is weighing new strikes against Iran, while Israel is ready to resume its own offensive to counter Iran's nuclear program. This stance is reinforced by US military deployments and briefings on military options, aiming to deter Iranian aggression and curb regional terrorism.",
      "tone": "defiant",
      "latestSinceUpdate": 2682
    },
    {
      "perspective": "Iran's Stance",
      "headline": "Iran warns against attacks, asserts regional influence",
      "summary": "Iran's supreme leader has issued strong warnings to the US and Israel against new attacks, while the country continues efforts to rebuild its nuclear program. Despite recent attacks on US bases and ongoing tensions in the Strait of Hormuz, Iran is also engaging in talks to manage the waterway.",
      "tone": "defiant",
      "latestSinceUpdate": 2682
    },
    {
      "perspective": "Regional Instability",
      "headline": "Middle East on edge as war fears mount",
      "summary": "Fears are mounting across the Middle East that the conflict with Iran could restart, especially after upcoming elections. The potential for a wider war is a significant concern, though Hezbollah is reportedly unlikely to join unless Iran faces an existential threat, indicating a complex web of regional alliances and red lines.",
      "tone": "anxious",
      "latestSinceUpdate": 2682
    }
  ]
});

export default LATEST_SNAPSHOT;
