export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 521,
  "lastUpdated": "2026-05-05",
  "lastSyncedAt": "2026-05-05T18:19:42.718Z",
  "warDay": 67,
  "summary": "Direct military exchanges between US and Iranian forces have escalated in the Strait of Hormuz, while a fragile ceasefire in Lebanon is challenged by ongoing Israeli attacks and Hezbollah's actions.",
  "lastNarrativeUpdate": "2026-05-05",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "A ceasefire is nominally active but is severely strained by direct military exchanges in the Strait of Hormuz and ongoing Israeli-Hezbollah clashes in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "text": "UAE reports missile and drone threats amidst regional tensions.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 521
    },
    {
      "date": "May 05",
      "text": "US and Iranian militaries trade shots, escalating tensions in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE9BRHBLbV80eVhCWEdzNzRVZndFU19MM3B2STl2ME9vdnNySUE4Z05pYVI3SVIzUEc5NXA2QW5NQzZSbFRQVXhJTDdoMUlQY3VfcjBvNXBhaE9XLXBjbzZ0bzNvb1hoUnRkVzA2VHNxNHMtUVkyUWtN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 521
    },
    {
      "date": "May 05",
      "text": "Iran claims US military killed five civilians in attacks on passenger boats.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxPV3FudHBoUElTRzAtS2dDWl9rbHFIbm12dTN0VkE3R1lzRllNTmxHZ0swV2w2a180SVlGNUFEWXhEaHRnVy1KemdpRi1HcjdOV2FMd2htUTdnRS1Pbnh4cUVnbDdnU0Q4Mk9zdlBfcHJndjE3MHllVkp1OFJuZXZRSEpGSlJfelFPNnl6MC15ZHZJeVgyaEJsZnU4RUljV1JVMjViWWxkSVFfejB6WHlWY1hiSdIBuAFBVV95cUxPM0d3bWhoeWNia09ORlI1TmZoa3ZIV2h0VFYzLXd5Q2U0UTQ3YVJ5cXlkN0pPNUN1dFhMN2NhZkRGWTZ1RG42bFJMVFg3Nks0a2dxSWJPVWxZRWtzN2dIWUM5Vl9TYUY3Ny1hZVpLSTZvVVUzbGNoLVBjUjZvWUx2R0pyVXhHcVl1SjBGSmJmb0hMU3NOY1NSSHZ5LUFrVTdQbFJGS2p0WjRqWmdCdlVUTDhodGRkaVR5?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 521
    },
    {
      "date": "May 05",
      "text": "Iran opened fire on US warships, resulting in 6 small boats destroyed in retaliation by Centcom.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMifEFVX3lxTE9odTcxemd2X0w1cEl5SGRMVllubzZqTmNweDVIQ2lqLTRCRnVORTYwQ2Jzd1JSZjBDdHpqRGh5NFZfLVZiUmV6V3F4Sm1xaTFHRzUyYzV2M29DYXVSaGxYRmxTX0hvWkZwSjE2eThsaTJtSExlTUMtcUpEYTjSAYIBQVVfeXFMTkVlbWF0dW1oTjNDR0x6eGhCM2Vtc3haNGp6SldOWC1pbWIyeU1WYVFpRGk1UlRYU19JeGZKUmExb05kQ0FQNWd4Z1ZieW4wc3lxLXVCemRMZGN1UkZ3T1VJaUlVQlF4MXJWaUhIbjdlNGQ4eTY3YkdhMXlXay1BNFdJdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 521
    },
    {
      "date": "May 05",
      "text": "Maersk ship transits Strait of Hormuz under U.S. military protection.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTE02N2x1VmJTa0xhcjVpeWZXQ0lpanhpLVBFc3pwZnR3XzZFYUVPYXlrVk9OX2Z6ZWlIU2VKOU1iREpDTUhWNWZ1ajFzcThpLVRJRzh6QlA3T29oT1dIdnJpQlgxelRwbE1vRmtySDJPbXFmbjRxUlFUSFdSQWFEeHfSAYQBQVVfeXFMTTRZS041MVB1REZsYzBuRkp1ZmxXNFNYTUZMcmlSbG9GSnl4WjdmV1V1S0NJY1pWb3FYZ1paUnFQMWNoR1dGQURfaU5tWWEyV3M5d0tOZFNNU2VxS3l0RmtNZnE5R1BfeE9tcTJtaHIwWDFmLVR4eWZNaWdhUHhnNGIzUmxS?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 521
    },
    {
      "date": "May 05",
      "text": "Hezbollah deploys new weapon and vows to thwart Lebanon-Israel talks as clashes persist.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxOM2Uzb2xIWWxsejBCQzJhZlYtOWN5bEs2Zi1zLWs1V1QxY3VLb1dtbjhzLUVZTkpLeUp0NUlRbGdZMGctUnczU2NmVnhQMGhSUjdUSDRyWUhHMEVENE5FQ2JWVGdOcmxCUGsyblZVZ2NKMk9YQXoycXpYOEdlQmNVVTBlUkExeTR6MDJHbDdxZlZ6T2VHY1dCYjFJa2RqY2pKUDFSZHpMVldvV3lsY05oU2VWQdIBuAFBVV95cUxNaE9hUHZTUm9sQVdSRF9TbjBCUDFNWjJBTkVOeERlOHMwUmJhampvMkprTUhOcDZhTUNnOVNxV0s0TWJGQ2Fpb1Rnb2tmcmxkX1Y2MG9qQlNTajdxZ2laU29DNHBDNXVvZVJjWi1uaHkzNVF2NFBlellNRkNKTGlkZnF0cHRhQ3ZvY0F0RG1UcW1WZ3ZxNjRPWVdNd3Rrbm0wbW45bGFPR2pYc2NwU1lFbG1XMG9CN0ox?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 521
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
