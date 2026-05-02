export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 469,
  "lastUpdated": "2026-05-02",
  "lastSyncedAt": "2026-05-02T12:11:01.997Z",
  "warDay": 64,
  "summary": "The US-Iran conflict remains highly volatile with President Trump rejecting peace proposals and reviewing military options to relaunch war, while a previously reported 2-week ceasefire appears to have collapsed amidst ongoing Israeli strikes in southern Lebanon and damage to US military sites.",
  "lastNarrativeUpdate": "2026-05-02",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A previously reported 2-week ceasefire between the U.S. and Iran appears to have collapsed following Trump's rejection of proposals and review of military options."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "May 02",
      "text": "Trump rejects Iran’s latest proposal as he reviews new military options to relaunch war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPcnFPUzd6XzVPeXdrLXg1Q2RtR3NreUJSWE82ZGc5YkRZYUxCOXlIVERFU2s1RDBlUzc4dkVONkU0WHV1RGRmc3QwV3hPeTBDRWRKblBJcDZlS2I0ZWJWbklPbkZQN1p3alE5dlBKX0xDR25lX1gtaFowYnRYeEJRV0U1VFhGRWwwbWhwRkJpTXpMTXA4NElybWxnWk5rTU9WdkNBdTBlRUF6RERnTWVBeFV6REhIeS1vNC1VdA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 469
    },
    {
      "date": "May 02",
      "text": "Military says conflict with US ‘likely’ to restart.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxONHl6SE8tQW1PQldFa3E2YS1xVGluSkhhQy10eERhODBRazNrX292Tzdwdk9oUnlrQi02TXhKZjBBa2VnWDZpdGFQY19idU8wc1BKUkUzcHZfejI5ZmptaGZmSk12RHhXaEtEVXB6MjlmYm4yNEljVnpaOFdkQU8wRFlVdjVkSmtmN0pWWXBRbGo0XzZtbktKekFyVUJIelRTRnZwMHpEVFh2bEM3dTdYcnlYcERsUlUyQnY40gHAAUFVX3lxTE94aS01bGVkMXdRclRFUklxMVpqbzdienNVRTVNVEU0TDZ3RXQycVBESk9YanZGWDVZaktRT3NVYUE2SHVUeGN5RW9LUkhQY29TdTZBdnpNaW1ZdDgzekpUU0xabGJJQVd4d3d2VUI0ZTFRemtpMkVBZHZiUWNmZUFoZ3NGT2dHc2xlQlRxYlN2akN4eldQRE5mYTBRR2hvMTRuVDhFQ19kTmgtTGZkRVp1amhudTFLai12eWlXbTJFdQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 469
    },
    {
      "date": "May 02",
      "text": "Majority of US military sites in Middle East damaged by Iran, CNN investigation reveals.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxPZXgyczJfZ015aVNZWVpKYmZHc29IVVowSGpEM004YjE2X3JTV1ZVNzJldWVlbjA3Vk5WTmZLNENGd2R6M3QzdklvX0FUOVdMQ1F0M1otcmNZWUpNakZ3ZE5wSTRCWkc2WDc2bng5X2tvYWFReG5IM3Q0YjFCb3Z0T0k3YXQ3SC1BMzRQeHhnQ1UwX3l3RUFN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 469
    },
    {
      "date": "May 02",
      "text": "Israel strikes in southern Lebanon kill 10 people as a Hezbollah drone wounds 2 Israeli soldiers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNbnd2a3p6WTZweThYTVY3RVlJX3dJS3RPMi1vNS0ycUN0VWJjVUZ5YlBOQkxMeEp0R2k1dWM2YTYxWnN5aEN4TlNtSU13cFZwd1hZdVVNaFgwSjVKWUJacjM1MlZDMl83UFN2RmRRM3dFS0lUUm1YckNnbk93YWswQ3JGZHdxVDh5NDIwSF9RRlE3dmIxZEEzUU5feDY1cHZSVkRkWWctSDRTUzFNTzdfZUFhc2RKMllUQVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 469
    },
    {
      "date": "May 02",
      "text": "Deadly Israeli strikes on southern Lebanon despite ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9oaEp1YmVYcmR0QUVaVUVZY0pGbE5hMkxxb0FxQzd2Ni1KTGxNUWhvaUZPZUM3R0kyUFZtV0l1NEM0Z3l0UVAzS3o4SHptbUl4MkpkNEZhMEhsdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 469
    },
    {
      "date": "May 02",
      "text": "Live Updates: Trump 'not satisfied' with new peace deal offered by Iran as standoff's costs multiply.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxOV3lZNjd6NWVNUWlvbUVLNlFyakY5YnZBNmJlMHpaeWJDX1JvNG1YY05sSjJzWVl5TTFzc0cxRDgtX3ltWWFKSDYzTTVoZ1l2elFaZ1pRZ3hoRFJybXNoNWs0UVA0ZFJ3bW1hdWp1MTVmTExnTlFKT1Bidk84T3RIaDcwQkw4NlFMQlUxeVo4ME4wT3FmWFV0MGh30gGfAUFVX3lxTFAtaE5xX242SDlkeW4yVl9Qd1hqaXAxN1RHOTVuUDZ2VThEczlHOG5KWFFwNFdtSnUwdUMzWXhFSHZYenlmci04ZzF3a1hWd3NGel9UV25QRTI2ZzhVckxLWDRCc2steVhJYUZaaGlQanp6b19jbm5iRGpmNXMzV2RGbEJXRGprZExGck1LQXlybjEyNlFUNmk2cVJjWEpmMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 469
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
      "perspective": "US Administration",
      "headline": "Trump Declares War 'Terminated' Amid Ceasefire Dissatisfaction",
      "summary": "President Trump declares the Iran war 'terminated' but expresses dissatisfaction with the new peace deal and does not rule out resuming attacks, while also withdrawing troops from Germany and seeking help with the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 462
    },
    {
      "perspective": "Iran",
      "headline": "Battered Iran Remains Defiant, Believes US Will Yield",
      "summary": "Despite a battered economy and damaged infrastructure, Iran's leaders remain defiant, presenting new proposals while believing the US will eventually yield, even as US military sites in the region have sustained damage.",
      "tone": "defiant",
      "latestSinceUpdate": 462
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Israel-Hezbollah Escalation Continues in Lebanon",
      "summary": "Tensions between Israel and Hezbollah escalate with deadly Israeli strikes in southern Lebanon and Hezbollah employing fiber-optic drones, leading to increased frustration with Hezbollah among some local populations.",
      "tone": "anxious",
      "latestSinceUpdate": 462
    },
    {
      "perspective": "Global Economic Impact",
      "headline": "Strait of Hormuz Standoff Threatens Global Shipping",
      "summary": "The standoff in the Strait of Hormuz poses a significant threat to global shipping and luxury auto industries, with the US warning against tolls, even as US economic growth shows a rebound amid the conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 462
    }
  ]
});

export default LATEST_SNAPSHOT;
