export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 520,
  "lastUpdated": "2026-05-05",
  "lastSyncedAt": "2026-05-05T16:56:58.879Z",
  "warDay": 67,
  "summary": "Tensions between the US and Iran have escalated in the Strait of Hormuz with direct military engagements, despite US affirmations that a ceasefire remains in effect, while Israel continues attacks in Lebanon against Hezbollah.",
  "lastNarrativeUpdate": "2026-05-05",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 12,
    "summary": "A ceasefire between the US and Iran is officially affirmed by the US, but direct military engagements and escalating tensions in the Strait of Hormuz indicate significant violations and fragility."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "date": "May 05",
      "text": "Iran launched missiles and drones as US forces enacted 'Project Freedom'.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 520
    },
    {
      "date": "May 05",
      "text": "Iran opened fire on US warships, leading to 6 small boats being destroyed in retaliation by Centcom.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMifEFVX3lxTE9odTcxemd2X0w1cEl5SGRMVllubzZqTmNweDVIQ2lqLTRCRnVORTYwQ2Jzd1JSZjBDdHpqRGh5NFZfLVZiUmV6V3F4Sm1xaTFHRzUyYzV2M29DYXVSaGxYRmxTX0hvWkZwSjE2eThsaTJtSExlTUMtcUpEYTjSAYIBQVVfeXFMTkVlbWF0dW1oTjNDR0x6eGhCM2Vtc3haNGp6SldOWC1pbWIyeU1WYVFpRGk1UlRYU19JeGZKUmExb05kQ0FQNWd4Z1ZieW4wc3lxLXVCemRMZGN1UkZ3T1VJaUlVQlF4MXJWaUhIbjdlNGQ4eTY3YkdhMXlXay1BNFdJdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 520
    },
    {
      "date": "May 05",
      "text": "US and Iranian militaries traded shots as Strait of Hormuz tensions escalated.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE9BRHBLbV80eVhCWEdzNzRVZndFU19MM3B2STl2ME9vdnNySUE4Z05pYVI3SVIzUEc5NXA2QW5NQzZSbFRQVXhJTDdoMUlQY3VfcjBvNXBhaE9XLXBjbzZ0bzNvb1hoUnRkVzA2VHNxNHMtUVkyUWtN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 520
    },
    {
      "date": "May 05",
      "text": "Israeli attacks killed dozens within days in Lebanon despite a ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5oX2lXbGN2TXhJM3FNU01wU1lPY09RQVF0X1M5SDBvQnR2T1RZdGc1NGVudURtNG5nSVNsZjFIZFEza0RUTXdTcUpLTkFmekJpQkJlRU5sQTVqdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 520
    },
    {
      "date": "May 05",
      "text": "Iran accused the US military of killing five civilians in attacks on passenger boats.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxPV3FudHBoUElTRzAtS2dDWl9rbHFIbm12dTN0VkE3R1lzRllNTmxHZ0swV2w2a180SVlGNUFEWXhEaHRnVy1KemdpRi1HcjdOV2FMd2htUTdnRS1Pbnh4cUVnbDdnU0Q4Mk9zdlBfcHJndjE3MHllVkp1OFJuZXZRSEpGSlJfelFPNnl6MC15ZHZJeVgyaEJsZnU4RUljV1JVMjViWWxkSVFfejB6WHlWY1hiSdIBuAFBVV95cUxPM0d3bWhoeWNia09ORlI1TmZoa3ZIV2h0VFYzLXd5Q2U0UTQ3YVJ5cXlkN0pPNUN1dFhMN2NhZkRGWTZ1RG42bFJMVFg3Nks0a2dxSWJPVWxZRWtzN2dIWUM5Vl9TYUY3Ny1hZVpLSTZvVVUzbGNoLVBjUjZvWUx2R0pyVXhHcVl1SjBGSmJmb0hMU3NOY1NSSHZ5LUFrVTdQbFJGS2p0WjRqWmdCdlVUTDhodGRkaVR5?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 520
    },
    {
      "date": "May 05",
      "text": "Hezbollah deployed a potent new weapon designed to evade Israeli detection.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNWm52RmRwa2xzRjZvNjF3eXpWdXdRVlJJejVqSXViVTN2aWVQSzF2Mm03VW1oQndfVzhkclo0TXFtZHBfNllrU01saW9QSi1scG1hMnZfRkNSM1kxOFcyOUZhUHFUaHE4T1ZWOWJrU2VyTktpVlhFeUtFQnJVaE0tcUFsQnVXS3Y0TjQwblM4VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 520
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
      "perspective": "US/Trump",
      "headline": "Trump Issues Stark Warning Amid Strait of Hormuz Escalation",
      "summary": "The US, under Trump's directive, pledges to guide ships in the Strait of Hormuz and warns Iran of severe retaliation if US vessels are targeted, following direct military engagements.",
      "tone": "defiant",
      "latestSinceUpdate": 513
    },
    {
      "perspective": "Iran",
      "headline": "Iran Defiant Despite Economic Strain, Engages US and UAE Forces",
      "summary": "Despite a battered economy, Iran's leadership remains defiant, believing the US will eventually back down, while actively launching missile attacks on the UAE and engaging US warships.",
      "tone": "defiant",
      "latestSinceUpdate": 513
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Hezbollah Deploys New Weapons, Lebanon Rejects Ceasefire Talks",
      "summary": "Hezbollah has deployed a new weapon to evade Israeli detection, and Lebanon's parliament speaker, allied with Hezbollah, has rejected any ceasefire talks with Israel until the war concludes.",
      "tone": "defiant",
      "latestSinceUpdate": 513
    },
    {
      "perspective": "UAE",
      "headline": "UAE Under Attack: Missiles Intercepted, Oil Site Hit",
      "summary": "The UAE reports intercepting multiple missiles and drone threats, with one drone sparking a fire at an oil facility, indicating direct attacks on its territory.",
      "tone": "anxious",
      "latestSinceUpdate": 513
    }
  ]
});

export default LATEST_SNAPSHOT;
