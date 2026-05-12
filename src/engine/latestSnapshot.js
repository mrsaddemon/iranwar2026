export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 613,
  "lastUpdated": "2026-05-12",
  "lastSyncedAt": "2026-05-12T06:43:58.540Z",
  "warDay": 74,
  "summary": "The ceasefire between warring parties is reported to be on 'massive life support' as the US rejects Iran's latest proposal and considers military action, while Israel intensifies strikes in Lebanon and concerns rise over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "The proposed ceasefire is considered to be on 'life support' and has been rejected by the US, indicating a collapse of current peace efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.45,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 58,
    "globalPressure": 72,
    "allianceInfluence": 68
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "May 12",
      "text": "Trump states Iran ceasefire is on 'massive life support' and calls latest proposal 'garbage'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxON2RSNjhuM1Z2dzB2MmZKbTJybWI2aVFpMFJMdjBHZXk4OXc2UFdkUHdrWWM1enIyckUta1dDV0NiaEtiZnlPeW02UUlSRm5WckVVOUt0SWpHV3RkdHhRN2RVV1ZaMGw0bVdzbWc5OHM2NlhmT2NXOXd4Y1ZraUh5VEUtMGIydHZP?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 613
    },
    {
      "date": "May 12",
      "text": "Trump rejects latest Iran proposal amid shadow drone war and weighs military action against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxPMHNFVXV6MzVqT2E5Z1diZUlXRmhrSGZXaVhfdl9TR1lHYmhPVHk1eWYxeWVIQzdhWHRSQlZiNzhRMGJ0ZHNSVmhYSjZkRXRxaDBvY2Z5ZlBVZHdvUTlWR3F3QVJ6NXRrZGJDeUhvTW9aUENRdWhGSmg4TTdkRnVKMGRqV1FGdTRnc0HSAY8BQVVfeXFMUExYVlN4cWFndnlFQTdoN25MeWk1S0I4ZUMyTDFPVkdKRWtNUVRfRjkzazgwZW9Ia0FVc0lMYmUtVVhneldDeHJWd0hNNFRCNGJ0NWR3VkZ1akU1ZVZvQVFkUXBfNGd4MzlTV2QwaEg0OTlPeXgwNHhvajRJS0hWazJpX0M3WVZWa3Q0bDZGclk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 613
    },
    {
      "date": "May 12",
      "text": "Israel kills 24 in Lebanon, with reports of 39 killed in total from intensified strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBZUVl2cS1FMkQzemhqVWpFWmhySzkxUHUxTGNIWDA3OGh0ZmE0dXdqOTU4OVVtTkRjalZFUmtyVi15M0NFak5YQWJjUGJHTThGTTNHWTkyTDFPZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 613
    },
    {
      "date": "May 12",
      "text": "Iran slams US's 'reckless military adventure' in Hormuz and issues warning to the US after Trump's threats.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxNNWZhUzVmUUNudHFiYzR6WFItRllzWEJ3ejdGOTVEQ0R3TzJrY3BEYUNtY3NHV0hRb2lVTXd5SGpXSHVVVmQ1V2dkSnVCNExRaGRrbWYxUHREdmx2dk1RVlkyNE5wYUFET1BLV2pSbTI2akVESndfWTRBeU5hc3lWUlRrMUp5OWd1YlRDRU1KaG5nQXdHZGhHd3lwNThLUE83a0t5dDl3ZWViRmp6b3dCcUJVeWNreE3SAbwBQVVfeXFMUGxycEpfd3RGUHo4NzBmUkREQ2RheTZmRjJreHZXRzJZbWJFbloyZjdVRzJOY0Y3X0RiNG5vN2dndVVTSWt0NXFyd28yZkdMWUttUXdRRENQbXc2c2RibnJoaXIwQjRqNEZUWHlsRjRFWnpwajBQX0Z1MV9sMm9ERl9MNFBRb3l2TDI4WExSQzZSSUE0TjJfSEdrai1DbVdScFhHdjZJMWhQMTllSTdBdUNKS3R5Y1ZrcDBoaXA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 613
    },
    {
      "date": "May 12",
      "text": "Three crude oil tankers exit Strait of Hormuz with trackers switched off, raising concerns about closure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiyAFBVV95cUxPTzRScmctdkN4Ulc1ZC1Xc0pRRHVOYjFWSVdnNWY1RF82dFFxanh3LU91ajRMV3ZCcXMyaVlrSXh0YVk5TkdDMFdZZENka2xscERsTUZqSDhmOVVLd0pCU1hXQ3pvSU1nVGJVa1dUelZBaFJnMlhWLTZBVm9SUWl1bXlpdGI1SnE2V2Jnb1VjOUhuU0pMX1R3eExucUtfMUhvejlvWWk4dzNMcTJSbEpCZXFCM0pkTTZOT2pZTHM4dndXWWxNYzdETA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 613
    },
    {
      "date": "May 12",
      "text": "Adnoc Gas expects Strait of Hormuz closure to hit full-year profit, highlighting economic impact.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 613
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
      "perspective": "US/Trump Administration",
      "headline": "Trump Rejects Iran's Offer, Threatens More Strikes",
      "summary": "President Trump has rejected Iran's latest peace counteroffer as 'totally unacceptable', stating the ceasefire is on 'massive life support'. He threatens more strikes if a deal is not signed 'fast'.",
      "tone": "defiant",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Iran",
      "headline": "Iran Vows Defiance Amid US 'Reckless Adventure'",
      "summary": "Iran states it will 'never bow' to pressure after the US rejected its peace proposal, accusing the US of 'reckless military adventure' and highlighting its military playbook to cripple Iran.",
      "tone": "defiant",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Lebanon",
      "headline": "Lebanon Seeks External Pressure for Ceasefire",
      "summary": "Amid rising Israeli killings, Lebanon is seeking US pressure on Israel to halt attacks and operations, also turning to Saudi Arabia in pursuit of a ceasefire.",
      "tone": "anxious",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Analysts/Observers",
      "headline": "Ceasefire Pretence Over, US Retreat Predicted",
      "summary": "Observers suggest the 'pretence of a ceasefire' is over following increased Israeli strikes in Lebanon. Some predict the war on Iran will likely end in an American retreat.",
      "tone": "skeptical",
      "latestSinceUpdate": 611
    }
  ]
});

export default LATEST_SNAPSHOT;
