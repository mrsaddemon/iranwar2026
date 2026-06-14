export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 966,
  "lastUpdated": "2026-06-14",
  "lastSyncedAt": "2026-06-14T14:32:52.576Z",
  "warDay": 107,
  "summary": "Despite US President Trump's announcement of an imminent peace deal with Iran, Israel conducted air strikes on Beirut, leading to Iranian threats of retaliation.",
  "lastNarrativeUpdate": "2026-06-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.4,
    "durationDays": 100,
    "summary": "Despite claims of an imminent peace deal, active hostilities continue between Israel and Hezbollah, and Iran has threatened retaliation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
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
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 75,
    "escalationLevel": 70,
    "oilDisruption": 65,
    "tradeImpact": 59,
    "sanctionsPressure": 61,
    "globalPressure": 75,
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
      "date": "Jun 12",
      "text": "US President Trump announced that a peace deal with Iran would be signed today or Sunday, aiming to reopen the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxPOTktdERRTXhHZVNZOXJQeHFzNHZuOFdLWW80UTJ0VGZpaGpQQTFNcHpNX3k4Z3ZiOF90TTVFeUtOTzQwMTg1QkVxNjBCTWc5VXRBbjJzM050QjZ5dnNPVl94Vk1VcUh5dWhkMWc5WHdCOFFpNi1yYk8xT3c0RW9fUGJxRWVTWkxqMWNFSllwQTlJMndiZzVUbHg4cnZUaldJ0gGmAUFVX3lxTFBXcVQ0c0R2UVU0SjE3LXBySDljY3Q4ckZtSGNPV3NzN0JYM1JxbkNxLXVmb2NMTE8wTjV1UmZzNkFxZ0xQeVJtVkRWaFVCbVNiYTNzMDlaQXdkV1RCdmZVRjRjakdhUWhQMVVMYVZsYTBnNVNXMHNxUkE5U3hhVDVLLWQtc1J4YTZWM2I1R1FtcWtzODIyejFVLVI3YkFBcU14dG1YUXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 966
    },
    {
      "date": "Jun 12",
      "text": "Israel carried out air strikes on southern Beirut, reportedly targeting Hezbollah and killing at least two people, citing Hezbollah drones.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 966
    },
    {
      "date": "Jun 12",
      "text": "An Iranian army official stated that the Beirut attack would not go 'unanswered,' while an Iranian negotiator suggested it could undermine peace talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxPc3JyS0owTHNiOXVLejVocXd2Nl82aEtCYUxCa082QWc1MFZkUkNYcnZnbDRCM3owSWhwZ3R1Q1Z0dnptaXZDckhld3pHZUdESFppQU5FNmh2cTBENW1rTnVkenJmOTRScWF5SVB0RDhWMnpkTmhLUmlfd3ZqNWM3c3M1MWNMdlMyVXVyZ0tiQWlkSEF5SjJPazZtc1VnbzVIYmthbmItdGNIMU5faGpQRjAyTHRPUXFvSGF2MVdPVHdRT2VvTVVfWVpsWW83RjZJYzNBclpOQTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 966
    },
    {
      "date": "Recent",
      "text": "The US military reportedly prepared for a ground mission to capture Iran’s uranium but Trump paused it.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxOa0V0ay1reHR2RFF3YjFjejU0YVVqSTR6TWNBVTlQb2FJNDFEeGFxeVBHTjFQMTNhQ1hURVBtSXNHZEFUTm1jN0x6YUJlY2Flajd4TGJwTzhLc0tsVllESHJ1T2JNQ0RiQS0tVnFtcUtCRldoV2h3NFByUHhhVWRqR3hZVEE0djlIQkJF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 966
    },
    {
      "date": "Recent",
      "text": "The US military reported downing Iranian attack drones.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi5gFBVV95cUxOWXZFVFVpaWpJR2d1WDM0eklhWVF4SjllZ1RkdXVvTmY4N1VySzRQd3k5TGdHdGQtQ0RnLUthcXRQakdxcUtxejFSblFLWlRQODhIaUtKN2dGcUpDX01LTVdERXJ3WnFMckRwWS1qSjdQaUxCVThCMzExOXNHcl8yM3oyX3ZmdnlITEJsUjl6RGpaZFp5NjlZdFNKcmRLUEF1MXY2ZkhrdTlvZ0lpODZaR2RyT0ozYUhRdUFJaWg5TVkxb0pmM0htTE5LLUVmM0pOcHRLWGVndmJGNGJ4UWpWc1oyaXFRUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 966
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
      "perspective": "US/Trump Administration",
      "headline": "US-Iran Deal Imminent, Peace Prospects Rise",
      "summary": "The US administration is optimistic about an impending peace deal with Iran, with President Trump announcing it will be signed on Sunday and that planned strikes have been called off. This agreement is expected to lead to de-escalation and the reopening of the Strait of Hormuz.",
      "tone": "neutral",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Iran",
      "headline": "Cautious Optimism on US Deal, Claims Lebanon Truce",
      "summary": "Iran acknowledges progress on a deal with the US but remains cautious on the exact timing of its signing. Concurrently, Iran claims a truce in Lebanon that includes an IDF withdrawal, despite ongoing Israeli military actions.",
      "tone": "strained",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Israel",
      "headline": "Concerns Over Iran Deal Amid Continued Lebanon Strikes",
      "summary": "Israeli officials express concern that an emerging US-Iran deal could strengthen the Iranian regime and Hezbollah, potentially undermining regional security. Israel continues to carry out air strikes in Lebanon and is preparing for a potential ground advance against Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Economic/Energy",
      "headline": "Strait of Hormuz Disruption Persists, Impacts Oil Flow",
      "summary": "Despite US efforts, the Strait of Hormuz continues to experience disruptions, with little oil flowing through the critical waterway. This ongoing turmoil is cited as a factor contributing to high gas prices, with political blame being assigned.",
      "tone": "skeptical",
      "latestSinceUpdate": 962
    }
  ]
});

export default LATEST_SNAPSHOT;
