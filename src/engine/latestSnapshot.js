export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 322,
  "lastUpdated": "2026-04-23",
  "lastSyncedAt": "2026-04-23T16:11:59.042Z",
  "warDay": 55,
  "summary": "Tensions remain critically high in the Middle East with U.S. and Israeli military actions against Iran and Hezbollah, despite a fragile 2-week ceasefire between the U.S. and Iran.",
  "lastNarrativeUpdate": "2026-04-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A 2-week ceasefire has been reached between the U.S. and Iran, though its stability is undermined by ongoing U.S. threats in the Strait of Hormuz and continued conflict between Israel and Hezbollah."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 83
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 62
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
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Apr 22",
      "text": "Israel's attacks in Lebanon increase, while ships are seized in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 322
    },
    {
      "date": "Apr 22",
      "text": "U.S. President Trump orders the military to 'shoot and kill' Iranian small boats in the Strait of Hormuz if they are choking the strait or laying mines.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNeXBlLTVXMlZ6UndIRnVWSmxRVWl5WVFCbXZFVndYeEh1eFcwUGFod2p6M3pFMnNBUlhfM0hPNG9sNHRSbzVaYkdqdEF3M000VmQ1bW1aQjYxYWVTYUpxdDY1TGhsTUU3clJvMWVIeV9GTXgwWHVjQWNKdzVQN081YjVuSnZ3VkVLbWxETVNieGpfZlZqM0hCVDVpUWlMeXZUc05hVnFlUFg4TWIyOVdaZ3h2c0dMSlVScGhYSzZPeGPSAcYBQVVfeXFMUEJ2NWdVcWJlclgtZGdkR0ktY0ZTWDhPb0NZN0ZfdzA1TnlUWWI5UjVWZGJTY0RyWUhXWlNLb2FXeGZNVVNxSTM2RHZiVFBJYloyWkJxTU1NRldaUUVoMDNDOVNualVXTDB6M1NfWThmMmxWeVd0SDNoQm9NdW1kMDdkQlNOSy1wTk9SYXVjWGZEVE1ocm1WZlRrU29ORk1fd2M0b2IzTVJlbWFSN3pKamlwRENGa2pDX3NxYmxhSmF6S05SaDdR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 322
    },
    {
      "date": "Apr 22",
      "text": "The U.S. and Iran reach a 2-week ceasefire agreement.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 322
    },
    {
      "date": "Apr 22",
      "text": "U.S. forces board another Iran-linked vessel in a series of interdictions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxObGdfTm1RQ2x0YXgza3llZmJqQTNJZ3VVS3NwX3Q2SnNhc1E1aDlQNEdnY3NyeWhROVdEcTVUVExHR25zS1o2N3VCQjJKYWpEdlhwa2NqVl90cHhBQTVscGdvcUNidVgtczAxaW13ZlE3eUotdkVCYTJ0YlozbkdNa2xhVnVXblN4dzFDNVlRLXNWRHfSAZgBQVVfeXFMUF9Ld2dEQ2xINEVlU3phZXdTWXBYQUZZazAydnczR2JQSnJtcWNEdEJWaXU0X2NDUUFxb0pDMzJaWHdvVUFmekFjelEtSHRkYzNkUUxiNm9oTWZ6eWo0SW01aDltT0dFV2RYdHIzdlZZZm4zbEVvSXI2amFtYXdSMlhjT20tZ2pkeG0teXlpSk4wYjNId2UzYnI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 322
    },
    {
      "date": "Apr 22",
      "text": "Israel reveals hundreds of Hezbollah terrorists killed in 24 hours before a ceasefire and unveils new 'game-changing' artillery.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTFBYTHI0V3V2dVMyRV85OXVwbU9tb0d5VVVoUXczT3B0aGFYdXRDeWR1V2ZyYmdoNFlPQ2M0Ujhoa2x1YjYtdXhLd1R6ZldyRkJhcWFlN0o3YkRNbnN3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 322
    },
    {
      "date": "Apr 22",
      "text": "A top Hezbollah leader rejects disarmament and calls for Israeli withdrawal in a rare interview.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNdHhaNW1PdVJMVjh5S2N1eUJaUHh5aU05elpsb2ZJTVFHa0JMUTJFcUxLTWZnSThETll6RU1EMXYxWGthclFmeWowZjVvRHdzVTJnYy1NT09wYzJybWF6RjZLamRFRnR3YTVjM284N0NrQXQzejlwUlRjWklzNlREZFZhbUstcUFGNEI1YlVoc3VicnlBY0FIczZZSXZBZWhhdVl0eWZWTVdPWDFOSDF2TWpQdkRIZWw1dFB6cmR3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 322
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
