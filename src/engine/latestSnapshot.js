export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1307,
  "lastUpdated": "2026-07-15",
  "lastSyncedAt": "2026-07-15T12:21:31.208Z",
  "warDay": 138,
  "summary": "The US has implemented a naval blockade of Iranian ports and launched new strikes, while Iran has retaliated against Gulf states and US assets, amidst a fragile pause in strikes between Iran and Israel.",
  "lastNarrativeUpdate": "2026-07-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "Iran and Israel have agreed to a temporary pause in strikes, but both sides have warned of immediate retaliation if the agreement is violated."
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
        "militaryPower": 75
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
        "precision": 0.6,
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
      "text": "US naval blockade of Iranian ports goes into effect, with CENTCOM resuming operations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5mclRqN1M1Z0RvTWloR0xWUE5tdlJLQnNuMjVQNnlZNVpSWWgyUmtkMDVodVBzU1RKTnVPbUt6MDJ2Q1B0QS0xeWR1U0RLRW9feEdpQU1CbUw4S3VmMy1PREVGbl9KaFhaa3RFQTFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1307
    },
    {
      "date": "Jul 14",
      "text": "US launches multiple waves of strikes against Iran, described as 'additional rounds' and 'new attacks'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNZ1FmMWtLM2FxQldvem5lcHN6MlA5S2hJLXY0cHhmbi03eDhwOHZiUndwVFljaUgwcVZWRTBjUEl5MXAwZlo5X2EzLVNsdU5pTk9wcEk0dDc1bHNNS2F3MllFUktjaUVHQlJST1doektLNkp6S3pTOVNjZzUtYzdZb0hDc1RTRUZSaVVXcVdxejRZZXVWOE5fUDJTeUM2dC1obnp0bnVtU1Q3eTlYMlJMbWRYY2x2eENTalVvTNIBwgFBVV95cUxOZmtXVEFSSlhjNUZlVVR3VTRTMm4tRUNMYXNLMk93N2FDeE9zekdSQmtVZzFKS3IxTktvbEYxeXkzOElVRG1uMFZuZG1wZGdpZUtrTkdTTHFIVTVuSmZnTDFBbG1fcVlNcE5UZFB2U19MWWcwSWVzekd5SlR3NzdYUnlfSnU4UWtUbHlxZFlTWjVmcl9SUmFkWjRGc1A5SXNVOXUxUUU5UThtdndyRXYxZVBuNkZVdHBVckJNbFN4a2pTQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1307
    },
    {
      "date": "Jul 14",
      "text": "Iran claims to have targeted the US Fifth Fleet in Bahrain and hit Gulf states in retaliation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxQbjlLV08xTHJxX0JZLTJkRE1DaFV6WFRsMWwxeXRoZWROVHZJQ2hhUU9UTjhBd3Vld0h1azluWkJFM1ZzM2gtS3cyZXNqM1V6SnA2aDlPNUVNQ3dTMzVQV0JKaVNaUU9DcjRfZ3JNSWV0WkRvWWRxOE4wS1l4a1dremtzUUFoaFJlaVhVMFV2dXdNX2ZQdXpLRWdGeDJLTl8ycUhIaHowUktSTUx0ZUptcFR4clp5aWJla2UycHJHME00M3lKYVRGNVl5QnlXZmEtV013?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1307
    },
    {
      "date": "Jul 14",
      "text": "Iran and Israel announce a pause in strikes but issue warnings of retaliation if the ceasefire is breached.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE0xV3g2OWxXcVhxUjZOZUpZVThPSXNkbW1lcjdqaU5KRkctWHBwRTNOSWp1dy1zSE8xNHpUU1ZpRGVKMm5qVTBJMEx2Znp3d1pUaGcwVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1307
    },
    {
      "date": "Jul 14",
      "text": "Reports indicate Iran's cyberattackers tracked US military personnel in the Mideast via phone data roaming and ad tech.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1307
    },
    {
      "date": "Jul 14",
      "text": "Lebanon arrests a 'high-level agent' close to Hezbollah on suspicion of spying for Israel.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQNWZDOE1YeEluaWIyazhrU2JZZ19wM0F3NC1PWmpNeVVWWlZRdmFuNE1nREUxWGR6NjhTRlFwazc0V0tXWlZWLWhaV1NsMUwxbjRDTFR5OXhwbUlGY1N0V09TSWNRcmh5TGtsMTc5dnRMZVpnUFZhRmhMenZVSmRGR0xhdzFnSlM5OGREZmd0bzE5NjQ4WWo3WDFpaW53VkhVX3BJaTg4MnVNOEtYZnVjaGtrcEbSAboBQVVfeXFMT3pOM0ppYkRZNHJybkVPMlpPemJVWFVfMjdDZjdyZzBSWjQ4eTE4WnFpRk9uY3dIS3pnZmEwZnZfcVFmSFhYaHZEU3l2SjdmdndOR2hPcUZYc1MycXVPa3VXY2g5Yks2WFBHcVF1dEN4LU5TU1B1V3J5TzVkR2RpRmY3QlZ6TGN0SFIzNGV1UkZYUXFQM08zbjZ4a2YzWDlYd0tTOFlEb2FUTXZNSWE1TEsxTGtIVWs5U1lR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1307
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
