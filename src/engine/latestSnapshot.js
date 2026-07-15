export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1314,
  "lastUpdated": "2026-07-15",
  "lastSyncedAt": "2026-07-15T22:15:46.255Z",
  "warDay": 138,
  "summary": "The US has reimposed a naval blockade on Iranian ports and escalated strikes, prompting Iran to threaten Mideast energy export halts, while a fragile pause in strikes has been announced between Iran and Israel.",
  "lastNarrativeUpdate": "2026-07-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "Iran and Israel have announced a temporary pause in strikes, but both sides warn of retaliation if the agreement is violated."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
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
      "date": "Jul 14",
      "text": "US naval blockade of Iranian ports goes into effect following Tehran’s attacks on ships in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5mclRqN1M1Z0RvTWloR0xWUE5tdlJLQnNuMjVQNnlZNVpSWWgyUmtkMDVodVBzU1RKTnVPbUt6MDJ2Q1B0QS0xeWR1U0RLRW9feEdpQU1CbUw4S3VmMy1PREVGbl9KaFhaa3RFQTFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1314
    },
    {
      "date": "Jul 14",
      "text": "US military carries out an additional wave of strikes against Iran, stepping up its military actions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQWVlTLXZEcHJQTnhTMThIRmVQUGlPRk5vT1hNMmstLXNYXzZNWnlLUDJGQWJtUmI0cnlHLWFLZE1yMVctdW5RV0dSVmlWbVlvZFdSeTZrMG1ldmJvczFzUHRfbDlycEJWQ3M0SXlfNWtYZGZveEgzVzMxaVAxcXNxRXRRelpTelY1aXRyTUlHNlZGZk9qNnpNYVd1ZE9JY2RRMVo1eUd1ekliam_SAbABQVVfeXFMUHhaSU1rXzMyNHB2ZTJCbmR6REE5bUJXWDdWMzh6bHhHWnhlbGdlQ2JvVlFJTkVNamxheEU0TmNPR3gyT2syQ3prR0pBQkQ4eUVLcUVRd2x3RU9hb01UbTR6UGo3U3lnNTUxamNnTVRlbzcxaDh5cXBKUi1HUzRETzVjeFRfWGt2cE9RbzRRNndLYUw3VXBGeHVXZFJRLW1GMXNoSUFEQmxGSlRlLUtnRUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1314
    },
    {
      "date": "Jul 14",
      "text": "Iran threatens to halt Mideast energy exports in response to US blockade and strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxOc0ZjN3ZmUVdvbVVLMXFrejJubVRQczZPdVF0QkVwQ3B4SkdNWERtQU5Na0NFWGdrZ0pjU0w1MC05SjhpOHRRVDRZY2lDQkFnRERXWGR6QmlIcV9LaDBQcFdhTThxejdyUDFVbDNBZVlfR0I1Vmg1U19HWERQbnBqUFJJSmpoM2w5VDNacHA4RWZSalpUQ0xwTEpKazJMeGM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1314
    },
    {
      "date": "Jul 14",
      "text": "Oil producers plan new pipelines and ports to bypass the Strait of Hormuz amid Iran's threats.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE5pUlZsMnpRYm1GZnFNNVcwaHZuMFNFaDdhcUhBTllLNFd6U0o1QnVlTmd5QVRGcmhMN2pDWGRhOUlUcGNNX1pmT01wTThqNE5pT1Rpb3Fn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1314
    },
    {
      "date": "Jul 14",
      "text": "Iran and Israel announce a pause in strikes, with both sides warning of retaliation if the ceasefire is breached.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE0xV3g2OWxXcVhxUjZOZUpZVThPSXNkbW1lcjdqaU5KRkctWHBwRTNOSWp1dy1zSE8xNHpUU1ZpRGVKMm5qVTBJMEx2Znp3d1pUaGcwVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1314
    },
    {
      "date": "Jul 14",
      "text": "Lebanese security detains an alleged high-level Israeli spy close to Hezbollah.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1aRW43MTFHNmNxYzlTSHQyVllqczhzak54R3ZVU0tSN2lRVDVFaE5WeklsSGpieGp4d254OE1Pb3VVODk1VTJMM21FUGVJWC1relh0R0Q3NW5GUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Israel National News",
      "latestSinceUpdate": 1314
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
      "perspective": "US Aggression",
      "headline": "Trump Escalates Iran Conflict with New War, Blockade, and Nuclear Site Threat",
      "summary": "The US administration under Trump has declared a new war against Iran, resuming military strikes and imposing a shipping blockade in the Strait of Hormuz. Threats to take control of the strait and consider striking a nuclear site signal a significant escalation of hostilities.",
      "tone": "defiant",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Iranian Retaliation",
      "headline": "Iran Accused of Tanker Attacks Amid US Strikes and Blockade",
      "summary": "Iran is accused by the UAE of attacking two tankers in the Strait of Hormuz, causing casualties, amidst renewed US military strikes and a declared shipping blockade. This suggests a pattern of Iranian retaliation or defiance in response to US actions.",
      "tone": "strained",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Regional Instability",
      "headline": "Mideast Tensions Soar as Hormuz Attacks and US-Iran War Threaten Oil Supply",
      "summary": "The Strait of Hormuz is a flashpoint with reported tanker attacks and a renewed US blockade, driving oil prices up due to supply worries. The broader region remains volatile with Israel and Iran trading strikes and concerns over Hezbollah's activities in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Israeli Security",
      "headline": "Israel-Lebanon Talks Hinge on Hezbollah Amid Trade Strikes with Iran",
      "summary": "Israel and Iran continue to trade strikes, further destabilizing the region. Israeli officials indicate that any withdrawal from Lebanon is contingent on the dismantling of Hezbollah, highlighting ongoing security concerns on its northern border.",
      "tone": "strained",
      "latestSinceUpdate": 1287
    }
  ]
});

export default LATEST_SNAPSHOT;
