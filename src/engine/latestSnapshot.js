export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 467,
  "lastUpdated": "2026-05-02",
  "lastSyncedAt": "2026-05-02T10:29:59.378Z",
  "warDay": 64,
  "summary": "The Middle East conflict continues with a fragile US-Iran ceasefire in place, ongoing Israeli strikes in Lebanon, and a standoff over the Strait of Hormuz, while US military sites in the region are reported damaged.",
  "lastNarrativeUpdate": "2026-05-02",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A 2-week ceasefire between the U.S. and Iran is in effect, but regional conflicts involving Israel and Hezbollah continue despite separate tenuous ceasefires."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 72
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
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
      "date": "May 01",
      "text": "Iran's military states conflict with the US is 'likely' to restart.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxONHl6SE8tQW1PQldFa3E2YS1xVGluSkhhQy10eERhODBRazNrX292Tzdwdk9oUnlrQi02TXhKZjBBa2VnWDZpdGFQY19idU8wc1BKUkUzcHZfejI5ZmptaGZmSk12RHhXaEtEVXB6MjlmYm4yNEljVnpaOFdkQU8wRFlVdjVkSmtmN0pWWXBRbGo0XzZtbktKekFyVUJIelRTRnZwMHpEVFh2bEM3dTdYcnlYcERsUlUyQnY40gHAAUFVX3lxTE94aS01bGVkMXdRclRFUklxMVpqbzdienNVRTVNVEU0TDZ3RXQycVBESk9YanZGWDVZaktRT3NVYUE2SHVUeGN5RW9LUkhQY29TdTZBdnpNaW1ZdDgzekpUU0xabGJJQVd4d3d2VUI0ZTFRemtpMkVBZHZiUWNmZUFoZ3NGT2dHc2xlQlRxYlN2akN4eldQRE5mYTBRR2hvMTRuVDhFQ19kTmgtTGZkRVp1amhudTFLai12eWlXbTJFdQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 467
    },
    {
      "date": "May 01",
      "text": "Trump declares the Iran war 'terminated' but does not rule out resuming attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxOZ3VJSDBsM2FwclJ6Q0dRMXNMUE5ZMHhJRXNHREpqaS1XMDBGelJWSGpUcHBPSTBwdDJ6SlpuVXlOOTdqcHdOdWI0RU5ZakwxaEVLVG9CWllqbzVLTmxJQTA4YzVRZi1IUU5MSXlJbjBsUWx3SHZHcU5LM1YySWVtS2xBV29lRHN1ZktzaTZUWFBnbWwwX0RiNXdrSFYySjNTUGtOTV9ESEc5MnMtVUFoRHBpd25CYlAzRkHSAb8BQVVfeXFMUDFyMWl1dXZXdjBWc0JuZ1VUR3pTMVl0WThiY1dUSDNsdGlaTVQ2MWZwNVNKdWNaekI4N0QwZDBqQWFrYk9IeXRMWU1hY0w3WklEeFY5WDFaZXJJdGlXU2RqX0R5V2VKYjFfbGZkYThhZXVGcFF2M29WbTBQVnBub2ljZlVIZnU1dTA5c3JWeWpJbzZpN29kWnZVM3Z6TWRxWkVsNXlPLUs1VzdXMktrem0tNVBMZTRPWEtTRE1YT3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 467
    },
    {
      "date": "May 01",
      "text": "The U.S. and Iran agree to a 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 467
    },
    {
      "date": "May 01",
      "text": "At least 182 people are killed across Lebanon in a large wave of Israeli strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE13LWVXQzlWMFVKRUYxa1o0dElLbktVSkREQlN2SW5KUUw0dF9lWkdNTUV5b01DMGVyUDB4d1NBdTVnRGRURFhzallZT0tneEN1OG1xcUNoUTJSZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 467
    },
    {
      "date": "May 01",
      "text": "Deadly Israeli strikes continue in southern Lebanon despite an existing ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9oaEp1YmVYcmR0QUVaVUVZY0pGbE5hMkxxb0FxQzd2Ni1KTGxNUWhvaUZPZUM3R0kyUFZtV0l1NEM0Z3l0UVAzS3o4SHptbUl4MkpkNEZhMEhsdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 466
    },
    {
      "date": "May 01",
      "text": "Israel and Hezbollah trade blows, with Israeli strikes killing 10 and a Hezbollah drone wounding 2 Israeli soldiers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNbnd2a3p6WTZweThYTVY3RVlJX3dJS3RPMi1vNS0ycUN0VWJjVUZ5YlBOQkxMeEp0R2k1dWM2YTYxWnN5aEN4TlNtSU13cFZwd1hZdVVNaFgwSjVKWUJacjM1MlZDMl83UFN2RmRRM3dFS0lUUm1YckNnbk93YWswQ3JGZHdxVDh5NDIwSF9RRlE3dmIxZEEzUU5feDY1cHZSVkRkWWctSDRTUzFNTzdfZUFhc2RKMllUQVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 467
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
