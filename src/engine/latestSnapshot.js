export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 437,
  "lastUpdated": "2026-04-30",
  "lastSyncedAt": "2026-04-30T14:26:57.691Z",
  "warDay": 62,
  "summary": "On War Day 62, a 2-week ceasefire has been reached between the U.S. and Iran, while Israel and Hezbollah continue fighting in Lebanon, and the Strait of Hormuz blockade continues to impact global oil prices.",
  "lastNarrativeUpdate": "2026-04-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A 2-week ceasefire has been reached between the U.S. and Iran, though fighting persists between Israel and Hezbollah in Lebanon despite a separate ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 90
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
    "nuclearIndex": 10,
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
      "date": "Apr 28",
      "text": "U.S. and Iran reach 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 437
    },
    {
      "date": "Apr 29",
      "text": "Iran offers to reopen Strait of Hormuz if US lifts its blockade and the war ends, officials say.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxPNUwwbkhOQXFtOVZOTFVReWo2bzNMWnhieUlSQllyaE5EUmtqVU5FX0N5QkVfaXBYY2wtRVNCMGgxTGdaR3IwOEZ3RFRqSTBmZ1NVTkppTWh6QkxtWVdEb0hxcTM4QWxZYzRwZjJiRnlWYnhvby1iRjhOZ1VfOXRydHRBVlRuQ1pUMVpYdjdld2g2ZS02S1hn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 437
    },
    {
      "date": "Apr 29",
      "text": "Israel attacks increase in Lebanon; ships taken in Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 437
    },
    {
      "date": "Apr 29",
      "text": "Israel and Hezbollah keep fighting despite Lebanon ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiV0FVX3lxTFAwVHNEUW5DaVBNYkZKU19QV2pkSlFjaUlMTXdvREZYRjR2Sk10YWgwcU9lb3FnQkFhVHVWMlNaeTA5dEtidGx6aGZ6WFBaRFVCeUFQeTNHWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 437
    },
    {
      "date": "Apr 29",
      "text": "US military equipment worth billions of dollars destroyed in Iran war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPWWhGZ0hVRjM3SU1NeDQxbVJnTndIRVI3NHp4dHV5UjVYS2hOUXRzc3R2a3MwSXIyOFhKUURuRkNSX2NraVN1U2ZJcUp3enJoMzI2WV8zNjZoVmFCQ1hrOUJyVmhCM05KMThiRTdDdm5qUVFtSkhhQ290eGQ2a0pLS3J2alhfNmxMMlN4aFhYdXluYlZCanJkRkRRNW1hSFFzb2xZYTNqMHFPaXlrbnJr0gG0AUFVX3lxTE1DQlBGX00zWTRVTXRjTThoZWViWWxFNE9LSm9IUkV0T1hmUTVIVmVNX1JRb2owYWM0ckM2LUg0aGRtbkZ5cVJRazVQTjZLZ2N0T0FWUFpjRF9XZl85RXJ2TWJoME00MEx4REJOVVBCM3hJUXl1TGJQVnp2ZmF5SDRfWUJrb1NaVFdpZGs3N1FYaWtiS1NTZ05ybG9maEhEZGhLcENuaE1nT3cxYUFOVHByZjZoSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 437
    },
    {
      "date": "Apr 30",
      "text": "U.S. military commanders to brief Trump on military options against Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi4gFBVV95cUxQbC1EV3ZfWEhuMmhGZVgxUWJsVVNOOEJsYzBFanR4bWRuai1KeUN3cUVoNEdtaTJxN2hYaUtabWt0M2l5SVlBQ01ael96WldybGxnUnZmTl93Y0hvaDMzYVRVTlcwUENvWnl1bXRQV3FXTGNIdFVvWmtXdzFvS1FqcFUxN19OcDBrN1N1OGJiVTA3dUZDVjA5ZTFTSGhtdk9rZ3gxNy03R1VsS3ZiQkVkX1NkSDU0V0tfbWFGX01meU5rV2psMGR2VHZyQTNsNlhRYjJsMkdON1RsQWl6RzlOeXlR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Detroit News",
      "latestSinceUpdate": 437
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
      "perspective": "Iran's Stance",
      "headline": "Iran offers Hormuz reopening amid battered economy",
      "summary": "Iran maintains its military posture and offers to reopen the Strait of Hormuz if the U.S. lifts its blockade and the war ends, despite its economy being battered. Iranian leaders believe the U.S. will eventually concede.",
      "tone": "defiant",
      "latestSinceUpdate": 431
    },
    {
      "perspective": "U.S. Pressure",
      "headline": "Trump warns Iran, weighs military options",
      "summary": "President Trump threatens Iran to 'get smart soon' and is weighing military options over the Strait of Hormuz. This comes as a U.S. aircraft carrier prepares to leave the region, potentially reducing immediate military might.",
      "tone": "anxious",
      "latestSinceUpdate": 431
    },
    {
      "perspective": "Hormuz Blockade Effectiveness",
      "headline": "Hormuz blockade 'working' as traffic stalls",
      "summary": "A former Navy EOD officer asserts the Hormuz blockade is an effective display of classic naval power, causing traffic stalls. The U.S. is pitching a new coalition to get ships moving again.",
      "tone": "strained",
      "latestSinceUpdate": 431
    },
    {
      "perspective": "Israel's Actions",
      "headline": "Israel increases Lebanon attacks, asserts military strength",
      "summary": "Israel continues attacks in Lebanon and asserts its military's morality and strength as essential for peace. Hezbollah's fibre optic drones are testing Israel’s sophisticated radar system.",
      "tone": "strained",
      "latestSinceUpdate": 431
    }
  ]
});

export default LATEST_SNAPSHOT;
