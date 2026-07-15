export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1311,
  "lastUpdated": "2026-07-15",
  "lastSyncedAt": "2026-07-15T18:40:45.666Z",
  "warDay": 138,
  "summary": "The US has implemented a naval blockade of Iranian ports and launched new airstrikes, leading to a significant disruption of oil flows through the Strait of Hormuz, while regional tensions remain high with cyberattacks and intelligence operations.",
  "lastNarrativeUpdate": "2026-07-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No ceasefire is active; conflict has escalated with new military actions and blockades."
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
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "text": "US naval blockade of Iranian ports goes into effect.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5mclRqN1M1Z0RvTWloR0xWUE5tdlJLQnNuMjVQNnlZNVpSWWgyUmtkMDVodVBzU1RKTnVPbUt6MDJ2Q1B0QS0xeWR1U0RLRW9feEdpQU1CbUw4S3VmMy1PREVGbl9KaFhaa3RFQTFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1311
    },
    {
      "date": "Jul 14",
      "text": "US launches 'additional round of strikes' and 'fresh wave of strikes' against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNZ1FmMWtLM2FxQldvem5lcHN6MlA5S2hJLXY0cHhmbi03eDhwOHZiUndwVFljaUgwcVZWRTBjUEl5MXAwZlo5X2EzLVNsdU5pTk9wcEk0dDc1bHNNS2F3MllFUktjaUVHQlJST1doektLNkp6S3pTOVNjZzUtYzdZb0hDc1RTRUZSaVVXcVdxejRZZXVWOE5fUDJTeUM2dC1obnp0bnVtU1Q3eTlYMlJMbWRYY2x2eENTalVvTNIBwgFBVV95cUxOZmtXVEFSSlhjNUZlVVR3VTRTMm4tRUNMYXNLMk93N2FDeE9zekdSQmtVZzFKS3IxTktvbEYxeXkzOElVRG1uMFZuZG1wZGdpZUtrTkdTTHFIVTVuSmZnTDFBbG1fcVlNcE5UZFB2U19MWWcwSWVzekd5SlR3NzdYUnlfSnU4UWtUbHlxZFlTWjVmcl9SUmFkWjRGc1A5SXNVOXUxUUU5UThtdndyRXYxZVBuNkZVdHBVckJNbFN4a2pTQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1311
    },
    {
      "date": "Jul 14",
      "text": "US Fifth Fleet targeted in Bahrain, says Iran, in latest exchange of strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxQbjlLV08xTHJxX0JZLTJkRE1DaFV6WFRsMWwxeXRoZWROVHZJQ2hhUU9UTjhBd3Vld0h1azluWkJFM1ZzM2gtS3cyZXNqM1V6SnA2aDlPNUVNQ3dTMzVQV0JKaVNaUU9DcjRfZ3JNSWV0WkRvWWRxOE4wS1l4a1dremtzUUFoaFJlaVhVMFV2dXdNX2ZQdXpLRWdGeDJLTl8ycUhIaHowUktSTUx0ZUptcFR4clp5aWJla2UycHJHME00M3lKYVRGNVl5QnlXZmEtV013?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1311
    },
    {
      "date": "Jul 14",
      "text": "Strait of Hormuz oil flows fall toward pre-peace deal levels as war reignites, with traders warning the market is close to running on empty.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMizwFBVV95cUxOREFMMTlsQmdQelAwcEpjQU9wM0JzSlJMRUh5azFsZVhqanpfZXVsdEpSVnE5OXloZjl4aVZWal9NUmJ0RHNMaE1saEE1Q19OYjRIMHdSOEx4alo4eDNSbUNjOHFkTVhuWGhvZ1lIWVlCcElqcWp4LWZ3WmpfM0FmbktVOTZmS0RpVkFIeWZkY0o0akM3a2k4bEdSYktmYjlSNEtjRl9PUHZiMTVoMVRBU24xWndMaXhsVkEyLW8weW1fR1hieUNBcm9nSkFwYUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo Finance",
      "latestSinceUpdate": 1311
    },
    {
      "date": "Jul 14",
      "text": "Lebanon arrests 'high-level agent' close to Hezbollah for allegedly spying for Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQNWZDOE1YeEluaWIyazhrU2JZZ19wM0F3NC1PWmpNeVVWWlZRdmFuNE1nREUxWGR6NjhTRlFwazc0V0tXWlZWLWhaV1NsMUwxbjRDTFR5OXhwbUlGY1N0V09TSWNRcmh5TGtsMTc5dnRMZVpnUFZhRmhMenZVSmRGR0xhdzFnSlM5OGREZmd0bzE5NjQ4WWo3WDFpaW53VkhVX3BJaTg4MnVNOEtYZnVjaGtrcEbSAboBQVVfeXFMT3pOM0ppYkRZNHJybkVPMlpPemJVWFVfMjdDZjdyZzBSWjQ4eTE4WnFpRk9uY3dIS3pnZmEwZnZfcVFmSFhYaHZEU3l2SjdmdndOR2hPcUZYc1MycXVPa3VXY2g5Yks2WFBHcVF1dEN4LU5TU1B1V3J5TzVkR2RpRmY3QlZ6TGN0SFIzNGV1UkZYUXFQM08zbjZ4a2YzWDlYd0tTOFlEb2FUTXZNSWE1TEsxTGtIVWs5U1lR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1311
    },
    {
      "date": "Jul 14",
      "text": "Iran’s Cyberattackers Tracked Phones of U.S. Military Personnel in the Mideast using data roaming and ad tech.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxOeEVnVmdJQ2FPLXA0OEllOS1QTFU4MDN6Q0ZJenVmaVhhVmk2OWlLOGdXVzRiUTR5ck5TX0x4WXBpM0F4eFdIc3RySkpCVWZWTkx2UUI4cjBMUHVUemU3M21YbTBqUHU3UzhFMVRYQ1I5YWtzYm4xanJ5R3ZWOGRoak15aXoyQV9lUUZ0N2RIaEIxd3lvTHhBTHNCaDgwWUt5NEFj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1311
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
