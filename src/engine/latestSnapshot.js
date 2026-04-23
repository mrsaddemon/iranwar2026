export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 317,
  "lastUpdated": "2026-04-23",
  "lastSyncedAt": "2026-04-23T08:22:36.202Z",
  "warDay": 55,
  "summary": "The conflict between the U.S., Israel, and Iran continues with increased Israeli attacks in Lebanon, Iranian ship seizures and attacks in the Strait of Hormuz, and a fragile, indefinitely extended ceasefire frequently breached by both sides.",
  "lastNarrativeUpdate": "2026-04-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "An indefinitely extended ceasefire is in effect, but it remains fragile with multiple reported breaches by both Iranian forces and Hezbollah."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
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
    "nuclearIndex": 10,
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
      "text": "Israel attacks increase in Lebanon; ships taken in Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 317
    },
    {
      "date": "Apr 23",
      "text": "Trump extends ceasefire in Iran, citing 'seriously fractured' Iranian government.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAxcUI4ZEx0Q1VjMXpqOVFjeFdobW43R3hIOXh1dmNwRC1HSENCTG5qTHF1WDNwcHFVTHVxa0Qwa1NTM0ExTGlUMmtXQXZOOTc2Q3ViWnh0ZHZ6VVRrMG5EcjJza2QwaEZkTWxNdFR30gFzQVVfeXFMTlduWS1aVzVjNzYxNm1jUFdFYnFmUkV5bDF4SFJEVi1lQmVCX1E3YTJfYUtxcnlhZVBpQzdqMkpDNHVKbVI0QU1HckN3SHA2NUJfajRpa0VSLWpMQ1dTUGpBaHZNS0hpSHB6dDNZeDZvazhpQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 317
    },
    {
      "date": "Apr 23",
      "text": "Iranian Forces Claim to Seize 2 Ships Near Strait of Hormuz After Trump Extends Truce.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxNZDdvSkZRUjFtSXE1QzJwUDFvQUREYXR0UHdBXzcwV0tWVzFOTFN5eDZIY2kwNnlMNW9ZY2lPWjZhQkw3bmpUdHhXcjkxY0JPcmNRa0RjLW9VQzVYUEFqNWx0QWJ6MXNibXdHMFFxM3ZVekF6aXhodlN5WHlQVUhBLXBB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 317
    },
    {
      "date": "Apr 23",
      "text": "Over 100 International Law Experts Warn: U.S. Strikes on Iran Violate UN Charter and May Be War Crimes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxPRTU3RHlxMUZlOVliQUw1ZHlXUThYdllkTkRfQnRRWnhTRHNoeE00NTF2dXJVUGt4bzhIWGsyeGZ5UGpPYnJYdzU3MC1HdmdGbnhLbzBTRkc1cVFYY0l2VjRYdVExSGdyd0xxM01qM2NNc2ZJbHhvY0lvcF9DZS11cXZUSUVuQmJy?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Just Security",
      "latestSinceUpdate": 317
    },
    {
      "date": "Apr 23",
      "text": "U.S. and Iran reach 2-week ceasefire ahead of Trump's deadline, later indefinitely extended.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 317
    },
    {
      "date": "Apr 23",
      "text": "Iran attacks 3 ships in the Strait of Hormuz as Trump indefinitely extends ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE4yUGdXbE8zSkVySHV4NTlFTFVQVU1JSHNXaU9KTmlSX2w0Qnd6cGV0eXI2dU9PUXdJZ245M3ItUl9vbGdUYm5UZG9pZTE5bXJHSGwxWkpxaVFYTGJfS3dBSkxjaG12bjg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 317
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
