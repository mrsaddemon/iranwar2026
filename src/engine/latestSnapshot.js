export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 323,
  "lastUpdated": "2026-04-23",
  "lastSyncedAt": "2026-04-23T17:49:10.040Z",
  "warDay": 55,
  "summary": "The US President has issued a 'shoot and kill' order against Iranian boats in the Strait of Hormuz amidst ship seizures and increased Israeli attacks in Lebanon, while a ceasefire between Israel and Hezbollah remains fragile.",
  "lastNarrativeUpdate": "2026-04-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 10,
    "summary": "A ceasefire between Israel and Hezbollah is under strain due to recent breaches, with talks scheduled to discuss its extension."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
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
      "date": "Apr 23",
      "text": "Trump orders US military to 'shoot and kill' Iranian small boats choking Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNeXBlLTVXMlZ6UndIRnVWSmxRVWl5WVFCbXZFVndYeEh1eFcwUGFod2p6M3pFMnNBUlhfM0hPNG9sNHRSbzVaYkdqdEF3M000VmQ1bW1aQjYxYWVTYUpxdDY1TGhsTUU3clJvMWVIeV9GTXgwWHVjQWNKdzVQN081YjVuSnZ3VkVLbWxETVNieGpfZlZqM0hCVDVpUWlMeXZUc05hVnFlUFg4TWIyOVdaZ3h2c0dMSlVScGhYSzZPeGPSAcYBQVVfeXFMUEJ2NWdVcWJlclgtZGdkR0ktY0ZTWDhPb0NZN0ZfdzA1TnlUWWI5UjVWZGJTY0RyWUhXWlNLb2FXeGZNVVNxSTM2RHZiVFBJYloyWkJxTU1NRldaUUVoMDNDOVNualVXTDB6M1NfWThmMmxWeVd0SDNoQm9NdW1kMDdkQlNOSy1wTk9SYXVjWGZEVE1ocm1WZlRrU29ORk1fd2M0b2IzTVJlbWFSN3pKamlwRENGa2pDX3NxYmxhSmF6S05SaDdR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 323
    },
    {
      "date": "Apr 23",
      "text": "Iran touts video of Strait of Hormuz cargo ship seizures.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxNTVRZSHpJQzN6WkV5Y25XdXcxMXR0Q3NMYk1zSFExT08xbkpTTTVGTzkwU08zdXF5ZTlfS3NENTRDejVRbVRNQ3pQeW5Qa0pwZWNjTE9qNlptMFpNdTNPMnlJS2l3WFVmT3NYLS1FVV9DaFNlMmIxMHJGMm42NlN2d3pmMnJkYlUyOUNKUFlEQ1BkRFZvMHFzZ1ZHWFY4aUFSdWd3QnNDRWnSAa4BQVVfeXFMT2pXc0ZJU0M0Y0VTVlRRNDVtTFhwNlpVbE53ZHVaa3VteVpBRm5RZmhZR19BNU5na2kzenkzYmN4N3BjcXRMMDBQNE5ocEJ3SWEtZTRfTjRrTGRQRW9wN2d1RzFuSXFiUmw3cmFONkdKemY1bDZsbmV6QnNrZVpqZEZNWWtVeDRfcWllLUFVQXZuM2tndnFGQm51V1EtQjRDNDdoNkFBVGVnMi1LVHdR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 323
    },
    {
      "date": "Apr 23",
      "text": "US military intercepts 3 Iranian oil tankers.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxOdWJHNHpJSXlQVTNLdnVVbE1WV2Y2TGNQSWF2S2NobnZvM2ZiVHQ5bzJDOEotcXRpZkxlRlRLdHZ3dGFuT2NFSFpDcVRZellac21IM1Jwc2pNTnpLTkxwUlBHR0NZUHc2X2ROUVMtWERITzBueFVPRVNqQktqSlcwbUtvNVp6bjBuQkhiWmEtcl9OcHfSAZgBQVVfeXFMUFRnWGZ5ZXRXazMzT0dqS0VIeUtZcHdMOGptTUdaZEl0UHFlaGlxRmNaVk9FQTRiUjI5UFV6czZQY0pDZE1mRWw1V29TM0ZhbXBHQzFwR0hnNFpocGlPYndLWDBKWUo5TXV0eUtvVHFEb0ZQZExVQnI4MF9PZ281TE5EU3BmSkFFUEpOWmhlbXRCZW15ak54bk8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 323
    },
    {
      "date": "Apr 23",
      "text": "Israel attacks increase in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 323
    },
    {
      "date": "Apr 23",
      "text": "Hezbollah fires at Israel, citing truce breaches.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxPOXM2T0JBYzk1V1E0d3VnOEIzYWwxV2hxaURxNVNUVDBIM1Z4OFZDOXlRTDRqdUpNNlloTzFKUkNxd25xR1prblVZTzR0dFAzZzRaakhNRG5laHBBaVg0QjRwUlRkYXJpVEEzUW42cDI0bDl6X2M2aVBoMGlleUo3V29UYmJlNmFtaHZlZ0lpMzA5Ynp2cHh5UUZDYkMwYkNicEc0T0NjemkxaXVOMGlib2NlNUxqS29NRDl4andjU2trdkNx?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 323
    },
    {
      "date": "Apr 23",
      "text": "Lebanon and Israel to resume direct talks in Washington to extend Israel-Hezbollah ceasefire.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTFB1NExRV0RyMjQtTndaemFWRlMwUFpkaUFKZVJZNmthZlB1cjlBMlRXSThpWWtEVF9TdlZBVWE2aHNJQVdtb2w1Q0FCLXRvZGhUdnJfOGk0eXhzTnZqNjFwTEQ5SVY3WnJxU1pJV1B5dVozcUdoQlVn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Boston Herald",
      "latestSinceUpdate": 323
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
      "perspective": "US/Israel Military",
      "headline": "New Artillery Deployed, Missile Stockpile Concerns Mount",
      "summary": "Israel has unveiled new artillery against Hezbollah amid the fragile ceasefire, while the US military faces scrutiny over its use of expensive missiles against drones and concerns about depleting its stockpiles.",
      "tone": "strained",
      "latestSinceUpdate": 314
    },
    {
      "perspective": "Iran/Hezbollah",
      "headline": "Ships Seized, Disarmament Rejected Amid Truce Breaches",
      "summary": "Iranian forces have seized ships in the Strait of Hormuz, and Hezbollah has rejected disarmament while firing at Israel, citing truce breaches. Iran's president lists obstacles to a deal with the US.",
      "tone": "defiant",
      "latestSinceUpdate": 314
    },
    {
      "perspective": "International Law",
      "headline": "US Strikes on Iran Questioned as Potential War Crimes",
      "summary": "Over 100 international law experts warn that U.S. strikes on Iran may violate the UN Charter and constitute war crimes, raising questions about the legality of ongoing military actions.",
      "tone": "skeptical",
      "latestSinceUpdate": 314
    },
    {
      "perspective": "Geopolitical Impact",
      "headline": "Middle East Crisis Weakening Europe, US Talks Stalled",
      "summary": "Erdogan suggests the ongoing war is starting to weaken Europe, while US and Iran remain in a blockade stalemate, with uncertainty surrounding talks and Trump denying midterms influence decisions.",
      "tone": "anxious",
      "latestSinceUpdate": 314
    }
  ]
});

export default LATEST_SNAPSHOT;
