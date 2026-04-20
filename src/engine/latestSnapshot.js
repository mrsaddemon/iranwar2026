export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 275,
  "lastUpdated": "2026-04-20",
  "lastSyncedAt": "2026-04-20T19:41:56.633Z",
  "warDay": 52,
  "summary": "US-Iran talks remain uncertain amidst a US seizure of an Iran-flagged vessel in the Strait of Hormuz, prompting Iranian vows of retaliation and a jump in oil prices, while a fragile Israel-Lebanon ceasefire holds.",
  "lastNarrativeUpdate": "2026-04-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "A ceasefire between Israel and Hezbollah in Lebanon is currently in effect, though its stability is uncertain due to underlying gaps."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "date": "Apr 20",
      "text": "US military seizes an Iran-flagged ship attempting to pass through the Strait of Hormuz blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxQMmVWdTMtLTMtSWhSUFJpUExHYURyU0laMFdDaHp4UUFCZ0NtZFo1TU5aRjZ0dDJ3RU5aOGN1YU94RHQ0ZVFTb1R3OTlhaUdLVEs0STFEMnN5NmpFaTJocnQ1TlkyeGdySlFVVm1MaXpRWVdkUzU5NW1lakFmb0c2Z2Z4TEowQ0VMRnhvMUxxZE4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 275
    },
    {
      "date": "Apr 20",
      "text": "Tehran vows retaliation following the US seizure of an Iran-flagged vessel defying the blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE1YUS1EelZ3bVFnZGZwMERkRnhybVpPUk1JcVNwR3FOUEREclc4bzVDQkNZdXdseVhCY2QtSWE3TlVCUGJUUUU5Y0doOTJkZHJvaHUwTmNkOG1Zay1xeXdkcFp0R3A4dE1NWEIzQ0xHNnU3cWJhaklDdkU3MA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 275
    },
    {
      "date": "Apr 20",
      "text": "Oil prices jump after the U.S. seizes an Iranian vessel, raising concerns about the stability of a ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOanFJd19CUnZMSkRITFo3bmh0OGdPN2hKM2x0V1ZDcGpvSU0tck56YU9nZlY3aWJJdFRsNzVEeDBnLXEyV21BWnI0MUFKTjYtel96T3N1ZzczRGEydWJrWDVoZWprS09qMDJacVVqVVlZX2E4dU9ocmNyd1V6OFdEUkY5X29ORU1UZHRkZjY1aU1CRHlS?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 275
    },
    {
      "date": "Apr 20",
      "text": "U.S.-Iran talks are uncertain as a cease-fire deadline looms, with mixed messages from both sides.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 275
    },
    {
      "date": "Apr 20",
      "text": "Trump threatens Iran with military action if peace talks fail, as the US prepares for negotiations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE93MUw2NkdVczZia3R2czBIVjFHN2hxeDhFLTFWN1ZrN1VFQ2dpLS1BS0dwa0RwUnlUSEd3YUw1N1R5N0YtRWN0c3V4TkRNQ195TWVxOEtR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 275
    },
    {
      "date": "Apr 20",
      "text": "A ceasefire between Israel and Hezbollah in Lebanon is in effect, with Hezbollah expressing willingness to cooperate.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifEFVX3lxTE5Md3IwaEVnZTZpVlRhVVVtSm80MmJ1TGIzWW1RaDNsbFdoSzFDRTlpZ2k1SFRjbHJiWXFpVF9hbmNGaHFUN3VrQ2E3blRPeGg1VnJuRElWQ1pLWVgtLV9BSjJ6SzBvc3ZOZlNZeHU5QUJIUlR3Umw3cDBXWFo?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Middle East Eye",
      "latestSinceUpdate": 275
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
      "perspective": "US/Israel Stance",
      "headline": "US Enforces Maritime Order, Israel Prepares for Escalation",
      "summary": "The US asserts its right to enforce maritime order, seizing an Iranian vessel and claiming war goals are nearly met. Israel is reportedly ready to strike Iranian energy facilities if broader regional truces fail, indicating a readiness for further military action.",
      "tone": "defiant",
      "latestSinceUpdate": 264
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Vows Response, Rejects Talks Amid Hardliner Shift",
      "summary": "Iran has vowed a swift response to the US vessel seizure and has rejected peace talks, with hardliners reportedly gaining influence in Tehran. The Strait of Hormuz has seen reversals on opening, signaling a hardened stance against US actions.",
      "tone": "defiant",
      "latestSinceUpdate": 264
    },
    {
      "perspective": "Regional Stability",
      "headline": "Strait of Hormuz Disruptions Fuel Oil Price Jumps",
      "summary": "The ongoing US blockade and Iranian actions in the Strait of Hormuz are causing significant disruptions to commercial shipping and have led to a jump in global oil prices. While a fragile truce holds in Lebanon, the broader region remains highly volatile.",
      "tone": "anxious",
      "latestSinceUpdate": 264
    }
  ]
});

export default LATEST_SNAPSHOT;
