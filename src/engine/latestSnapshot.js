export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2310,
  "lastUpdated": "2026-08-30",
  "lastSyncedAt": "2026-08-30T07:19:50.191Z",
  "warDay": 184,
  "summary": "Six months into the Iran war, a stalemate persists with Iran resisting US sanctions and maintaining Strait of Hormuz tensions, while Hezbollah rejects regional deals.",
  "lastNarrativeUpdate": "2026-08-30",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation agreement is currently in place between the warring parties."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 75,
    "oilDisruption": 80,
    "tradeImpact": 71,
    "sanctionsPressure": 62,
    "globalPressure": 79,
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
      "date": "Aug 30",
      "text": "Iran pledges to stand firm against ‘unjust’ US sanctions as war passes 6-month mark.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxOSGJTQWRjaXhjYlZqdHpCb0tKQzJod3J0dDNLOWFhMENtOUpXdmFMWUF4bmJBNGs4UDVVbW9HbFhpRHdKVlZsVzFkZ3FGejNNSExlSHMwc3ptNzBJUUpQR2x6WXFDM2hxSzBad3Z5a1V6Ti1CT3dmdTBPcC1DODlSekE5Xy1nSUV4NjQ4d1pNZEpIYmhpVDJ3OWo2THdtcVo3VlE0MnFkWUhQNm5DQnJQREJ30gG3AUFVX3lxTE50LVdSTjA4THVkSmM4UDhLaEIwSG1oSV9DZEpPT1lQd29va3RYeWVXNWNubDluYkpHcHBoRHBsYU9HYzQwSDAxYS1TWTNYZXlqMUdLUkdGN2JnNUlwdWZsbEZncDNSMGVWamhQcmJNcE95c1BoWlBydml4UHk0UWhEWGlnWkFkVHJ0U0dFMmgySkhuT3VTcVo4c2ZMV0tkR1Vkb19mZTV2cTRjRDhRRjFYY3FZNXRNUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2309
    },
    {
      "date": "Aug 30",
      "text": "Reports indicate Trump’s war on Iran is rapidly draining the US navy budget.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTE9KOFZVQ3RPcGRtYlV3enlSZGdMQ2R2V0ZENlRUc3dxWlpnMnVJMUFGemhQVmd4YzVubDRpVTJIMmpsVjViQU8xWkNFd01OMmlQSE41RFo4TWo0UnljTV80R2wxSXNGeDJKUGJwT0h4YzdQbmtoa2NhdUJEVXo5YXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2310
    },
    {
      "date": "Aug 30",
      "text": "Tehran engages in renewed diplomatic push, touting a proposal to reopen the Strait of Hormuz and preparing a list of conditions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxQUzJMQjNVM25NNWFDSVZ5MjlBRThTT1o3Q3k4QWZRemJLa2VEajBVR0l4OW0xVUNURWZraGVRcGlFWm5iZDZUektjWnlwQjdVdV94YU94Z2hlVklPbW1uc0dkYVdNQlhmeldmWG9OWjJrSHB6UkVFeEVjTXlvRkxTLXNn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2310
    },
    {
      "date": "Aug 30",
      "text": "Hezbollah Chief again rejects a Lebanon-Israel deal and refuses to withdraw from a strategic ridge in the south.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQTVJGa0JlcTJvOFZKOTJkanNETDdTZDFINkIyZEs5UGJWNjJ5LWJ4TzR2Sm0xUVR3QWdPRERWeldOR0ZBVVdMbGxuTkJBc1ZvZUc4c05IMzVSbENBckRLTi1vZEFxejBTei1nU2F3OVk5MkxfZXFLbWItSTlHVjhEd0YydEE4MmNseVVpVTdWbUJWbmVxSHRybXdqOFkwaGlnMVlCU2VLcHQtVTdING5idDFMUzgtbzjSAbwBQVVfeXFMT0FvTVdobktnV3YyaVVneGs1V0N2MllIWFFkRVJMclJZVHNCR2p4YUJEUWZJbHBFbjdxM2czbUFXdmZNVVlsYkhjRDZoQnVUekQzNnFyWWRtTkpDelFLTlFCNjdZWmYwcE9jOXV4Y2RIMDNtdzNmT1gtbWY4LThRMHRXWlY3cWdjcHdaR1UxMmFvdDlGQXZMUlE3S2p3bzNmN3ZRd2RXNWctLXdtdExaUzhyNHpjOUZOa3Y2THk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2310
    },
    {
      "date": "Aug 30",
      "text": "US-Iran war at six months sees 82 ships redirected under US blockade, with Strait of Hormuz tensions remaining high.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOUEV1S2tFLUNEVG9hdmJ3dEF5YlBmWk8xT0wwWXN3MzZGOVYzX0xITXRLbGNuTUtscXl1Sy10NHlaelVXUHMzZVNYMm42TUVmNVN6UW1pLXV3MDF4YXpaLV82VE5QdXI3R19HemNya2U5LTg1RGFTZXdvdjZ6blJwUWllYVEyaE02cmoyVmdSU3o3SzNZ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2310
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
      "perspective": "Iran",
      "headline": "Iran Defies Sanctions, Calls for Global Pushback",
      "summary": "Iran pledges to stand firm against ‘unjust’ US sanctions and calls for global pushback, stating that diplomacy 'isn't impossible' despite the ongoing conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 2309
    },
    {
      "perspective": "United States",
      "headline": "US Gains Hormuz Upper Hand Amid Budget Strain",
      "summary": "The US has gained the upper hand in the Strait of Hormuz, now a top concern, though the war is rapidly draining the US navy budget after six months of conflict.",
      "tone": "strained",
      "latestSinceUpdate": 2309
    },
    {
      "perspective": "Regional/Market",
      "headline": "Markets Accustomed to Stalemate as Region Transforms",
      "summary": "Six months into the Iran war, markets have become accustomed to a stalemate with no end in sight, transforming the region and its relationship with the U.S.",
      "tone": "anxious",
      "latestSinceUpdate": 2309
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects Regional Deal, Maintains Stance",
      "summary": "Hezbollah rejects overtures for a Lebanon-Israel deal and refuses to withdraw from strategic positions, maintaining its stance against 'surrender' in the region.",
      "tone": "defiant",
      "latestSinceUpdate": 2309
    }
  ]
});

export default LATEST_SNAPSHOT;
