export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 365,
  "lastUpdated": "2026-04-25",
  "lastSyncedAt": "2026-04-25T20:53:42.873Z",
  "warDay": 57,
  "summary": "US-Iran tensions escalate with a US blockade of the Strait of Hormuz and direct threats, while fighting continues in southern Lebanon despite an extended ceasefire.",
  "lastNarrativeUpdate": "2026-04-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "An extended ceasefire is in effect but is highly fragile, with Hezbollah declaring it 'meaningless' and Israel continuing strikes in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
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
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Apr 24",
      "text": "Trump cancels dispatching envoys for Iran peace talks, stating US holds 'all the cards'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EZkM3NURlaHh0ZGtEdDZxSGNDQjcwRUlQc0JkUG1WNDFGMzFrX1M0Z0JmR21kS25NU3JqSWJseEszMllWelMxc09lNV9oZ3k5R2VqOFBndlRHWmZ1ZVJlclJuUG9lQ0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 365
    },
    {
      "date": "Apr 24",
      "text": "US implements a blockade around the Strait of Hormuz, vowing it will last 'as long as it takes'.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 365
    },
    {
      "date": "Apr 24",
      "text": "US warns Iran that forces will 'shoot to destroy' any ships laying mines in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQOGxhSF96S0IyUU80Y3Q3Y0xIcUdKVDZBVnlLUmRReXljRmNFRW1oR21LYVdFSXBGWlJjbkRnY2FsMkFHZHZvYUFpLTZBZXBJUG81bFRCWXFEQzZHVXMxZEVFV1pZM0hlVVF1bVpJcU1pcmlHbG5jM0lpSU13X1lWUnNReGk2N0VmSWw3Q2FmMnplakVFWTFWaG5TbHhtRWhNZHlhX2Jvd9IBrAFBVV95cUxOdDk0SWc1VGpYYzZzdzRyZXE0OHlXQTV6clczSkp1MXFreWdMRjNXS1QtN1VhLXpqU2dYb1BYQnhONVNNX1RvWjh0Zm1LRVZQeDQtdncxQkxBVGIyZlVKUWxYN19nSGJ0Y0czc1VIekY2N0xwemhnblN1bVo1Sk53VXlHa0FOZDgxVldaMlJ6aDhoUUlnck1DdHUwcG94akNtc1REMzlaRm9rLTkt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 365
    },
    {
      "date": "Apr 24",
      "text": "Trump orders US military to 'shoot and kill' Iranian small boats attempting to choke the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNeXBlLTVXMlZ6UndIRnVWSmxRVWl5WVFCbXZFVndYeEh1eFcwUGFod2p6M3pFMnNBUlhfM0hPNG9sNHRSbzVaYkdqdEF3M000VmQ1bW1aQjYxYWVTYUpxdDY1TGhsTUU3clJvMWVIeV9GTXgwWHVjQWNKdzVQN081YjVuSnZ3VkVLbWxETVNieGpfZlZqM0hCVDVpUWlMeXZUc05hVnFlUFg4TWIyOVdaZ3h2c0dMSlVScGhYSzZPeGPSAcYBQVVfeXFMUEJ2NWdVcWJlclgtZGdkR0ktY0ZTWDhPb0NZN0ZfdzA1TnlUWWI5UjVWZGJTY0RyWUhXWlNLb2FXeGZNVVNxSTM2RHZiVFBJYloyWkJxTU1NRldaUUVoMDNDOVNualVXTDB6M1NfWThmMmxWeVd0SDNoQm9NdW1kMDdkQlNOSy1wTk9SYXVjWGZEVE1ocm1WZlRrU29ORk1fd2M0b2IzTVJlbWFSN3pKamlwRENGa2pDX3NxYmxhSmF6S05SaDdR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 365
    },
    {
      "date": "Apr 24",
      "text": "Israel increases attacks in Lebanon, killing four in southern Lebanon, testing the extended ceasefire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 365
    },
    {
      "date": "Apr 24",
      "text": "Hezbollah declares the extended ceasefire 'meaningless' as fighting persists in the south.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPMjIzX3ZxYjhjTURMWjlQUFlBSXhqSUJpZ280eG5VdnJxWEp5SjNKRFhzczh3VnR2RG1pQVVJQTJzUFZ0V0ZOZUNIQjV0eUNxZlAxS1BKNWRCSUpuU01WeDdLS3NmZkRmcFAtT2lIZzg2cmxXZ25Gb285a1BOTTBkNU9melFDbzd1T1ZRUURJb1pBWG1aQzhfaExLM3hKYkZHOHBsaTcySjZEU3VDX1Rr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 365
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
      "perspective": "US Military/Administration",
      "headline": "US Blockade on Hormuz to Persist, Hegseth Declares Victory While Preparing for More War",
      "summary": "The US maintains a firm stance on its blockade of the Strait of Hormuz, with Pentagon chief Hegseth declaring victory while simultaneously preparing for potential further conflict. Concerns are noted regarding the depletion of US advanced munitions supplies.",
      "tone": "defiant",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "Iran/Hezbollah",
      "headline": "Hezbollah Defiant as Fighting Continues Despite Ceasefire Extension",
      "summary": "Hezbollah dismisses the ceasefire extension as 'meaningless' and continues fighting in southern regions. Iran faces a US blockade in the Strait of Hormuz, with reports of ships being taken.",
      "tone": "defiant",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "International Law",
      "headline": "Experts Warn US Strikes on Iran May Constitute War Crimes",
      "summary": "Over 100 international law experts have issued a warning that US strikes on Iran violate the UN Charter and could be considered war crimes, raising questions about the legality of the ongoing campaign.",
      "tone": "skeptical",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "Diplomatic/Economic",
      "headline": "Ceasefire Extended Amid Peace Talks and Global Economic Strain",
      "summary": "An Israel-Lebanon ceasefire has been extended for three weeks, with new peace talks involving Witkoff and Kushner heading to Pakistan. The ongoing conflict is noted to be impacting the world economy, and US re-arming efforts highlight long-term supply concerns.",
      "tone": "strained",
      "latestSinceUpdate": 347
    }
  ]
});

export default LATEST_SNAPSHOT;
