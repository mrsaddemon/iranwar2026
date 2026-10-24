export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2646,
  "lastUpdated": "2026-10-24",
  "lastSyncedAt": "2026-10-24T23:48:02.737Z",
  "warDay": 239,
  "summary": "Tensions in the Gulf region are escalating significantly as the U.S. and Israel reportedly plan renewed strikes on Iran, while Iran issues strong warnings against U.S. military presence and claims attacks on oil tankers in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-10-24",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire or de-escalation efforts are currently reported amidst rising tensions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
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
      "date": "Oct 23",
      "text": "U.S. and Israel are reportedly planning for a possible post-midterms attack on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTFBfUFZtRXd6TnpuQzBORzRVVl9IMG1uUnExaHFFUjNwVXdLM3ZvTTVxX09zMlBZNUJuclVhNHlsUjZCVzM4WHJOM0wyNF9kelR0T2pFLVFTSFplN1A1UkdsV2dHMEZLbW1UMWhCdVZiZnI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 2646
    },
    {
      "date": "Oct 24",
      "text": "Iran warns that the U.S. military is not allowed in the Gulf 'under any circumstance'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2646
    },
    {
      "date": "Oct 24",
      "text": "Iran claims 7 oil tankers were attacked in the Strait of Hormuz amid fears of a return to war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPOVo5NGVvb09wSzBSTFVOa21PVVRNWWlEYUd1ZEU2U0tjTm55R3hYQ2Ezd1lUWUYwbFNpVUhJVDBxNlZaamJKaDJvblV1dl83LVhSX21rMkZuUXQtWFZmZmpZbXRrMkwwRzloVnA0QUs0cjN5MXNiZDBKR2MwaW9Sa1BKUGlaRUlQeG5PYnNPcTQ3YXZFc3QybjE1ZmVCYVJmY0doag?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 2646
    },
    {
      "date": "Oct 24",
      "text": "Former President Trump indicates the U.S. may conduct another military operation against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxOZjhrQTB6UmEzUzQ0N1RPV1BiZXhoaGdyWmhCTVpTTWgydnE3aEd0WHJHXzlpR09JXzh0SVpGSHkzc0JJR2g4M21MbVM1dUljQzd4UWNrSnlDWkw2SlgzOHlITmpJNHpuTTAtMmdPMXdXR0JGQlF4LUtHMTUxSWdWeVRoZVhMRlJtY0NmNHp4enJ2NzVwdE5xUm1zdVRfZ0pYdE0wRGFpU0k0eGpMZTlpNEl2bmQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2646
    },
    {
      "date": "Oct 24",
      "text": "An intelligence memo warns that Iran has ramped up efforts to target U.S. personnel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPSnBGckdpTkdaSnNZeFIyenI0MVVDMHd6R2ZDcTlUX3I4OWNNMlRjd0FTXzhCY09zakU1MWx2RzBpRW1QYTRxY2M3UWpBZHR3S1JlNjQ0WlIyRlh3ZnhNaVZ0OVcwU21YMjUyVVF0RXB0VXFLMWpGdEVtak1DUktTdUdLWmQyWGRFQ0xmb2Z3WG1nSHdfVUxlbUlsc2RJRmNmWVRHS1Qtd0RCVU92d2t1S19HbjlFVzdoREJONTRNYk1iZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2646
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
