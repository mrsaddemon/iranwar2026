export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1744,
  "lastUpdated": "2026-08-11",
  "lastSyncedAt": "2026-08-11T21:06:58.069Z",
  "warDay": 165,
  "summary": "The ongoing Iran War sees continued US military actions, including airstrikes and a tanker blockade in the Strait of Hormuz, while President Trump demands compensation from Iran amidst fading hopes for a deal and Iran's focus on the strategic waterway.",
  "lastNarrativeUpdate": "2026-08-11",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is active, and hopes for a deal regarding the Strait of Hormuz are reportedly fading."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
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
    "nuclearIndex": 45,
    "escalationLevel": 80,
    "oilDisruption": 75,
    "tradeImpact": 68,
    "sanctionsPressure": 63,
    "globalPressure": 80,
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
      "date": "Aug 10",
      "text": "U.S. announces another troop death, followed by more airstrikes against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQOVVPQXpIUjAzU1c2TG1GcXJUU19aU2FodDRTVWV4RVdVN2stQ1NueUtIRC03M2hXNFZLRkQzUUdqMWNQOVBMbzFmc1NGejY3bXFNSnJYMXNNRTIyMlNMYjFPbXVOcXJCSkFPVHNsMkRvblBzcjc5aXJhbHlndGlrek9RbmVBTlN4SHI3N1VHLUpGVlNmTE4tSlAwSktTd1k?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1744
    },
    {
      "date": "Aug 10",
      "text": "US military disables a Panama-flagged tanker in violation of the blockade in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxObWg5eWxCeTB6SHFmcHVTZkRuQmFrdU4ycGRGOTJlMnRSN1AxQ3BILTBMa1c5MU92RzFfbUFGd3l5X2drR0JWc3Rvc0RDS2RqWEpxRUtyY2htRWJsTV9vdV9lMXk4NEZqZ0RXaXNfcVNTR0Q4R0h3Znd0MmpsTzlJY3VMcXdKS1RhempwN2d2QmJBNm9tQUpjU3hqZ9IBoAFBVV95cUxNWHpaNDRIRTFhOGNwTF9JOTVZWDlmY21PZW8xOW9Cb3RDNGtQUmRYcHZvdzhnSDJfNTRkWFFKcjJHLTUwZ3N4OEZjNkgxa2VEVTdILU9jVXpkR21SckE3Wjk4QW5ZT3NhcnF6bmUwYTRSUEV5alRNcmp2WmxhOHNfZmNyUl91Z0pMQjFfX1F2eF8wVHQ3OERZWDFNSHloNVIx?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1744
    },
    {
      "date": "Aug 10",
      "text": "President Trump demands Iran pay compensation as a condition for talks, while Iran makes its own demands for war reparations.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxQeVR5TzZOblVGaldmaERTUlk2Sk5XSEhfYWNiTWMyRVhwNXdZamp5LVhBX2JKMTdxSlFlZHQ4WFc3Vk1OakI0VFlNMThrS3ZPdzB6LUxCSThSSmtvbW5ISkJYSWN3WUNDaTFUTXl1QnFoXzlCV3UtdW9CNjJodTc2VGhWTG0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1744
    },
    {
      "date": "Aug 10",
      "text": "Pakistan's interior minister is in Tehran amid ongoing talks to reopen the Strait of Hormuz, though hopes for a deal are fading.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxPejZ0MlBWbEd5eW9UTWh6MGtQTHlNZWUxLVRzbVN4aEQzR24xRjF2RjFXckFNRUZRZkdCaDVBMHA3QkFvdjhMWVpobTZhTnRVTC1rVnh4Y0NHYkZiUjJGdWwwX3J5bHVMbFN3UFFranVTbEt3UURkdDhTRjl1Sk1EYk1HWWw0RXRUdk5VckVRZEV6NWVfdEVOMWJfeGIxSndCSjhwWVB3cGxXS2cwbndtVVEyX1R4QdIBuwFBVV95cUxObVhCZVFNSWozZmx3UmVBX2lJUnJwVmhlRzh3X3BJQXFMM2dTeXk1cjdIVlhZV0VRQWxkZVlPVXFJMUVsb0hQamlJbzFwZllGTGxSSGt6MG9SQWVvcVRlR0sxWXBDeVdjcTVwRlM4VmtqajF5bzBnd3otOXpWZUVqVWlmbFZSQmhFVEhIVUNYdVowT3QxZ2x2UXB2c1lLNzRiZ1l2UDhXYTFDY1p2QjdSeEFwNmZWekNfTWNn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1744
    },
    {
      "date": "Aug 10",
      "text": "Israel's 'pilot zones' in southern Lebanon and reconstructed Beirut strikes raise questions about Lebanese sovereignty and UNIFIL's future.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxORm0yTjAxVktJdEVpbTZBSjNfOUFpYXF2YUlLTHM1b01kbUowSDk1cGZGcjBoNjBfbVJSM0NfLV90LTJzeXlGMFhtUjlpTTZFV2ZSY1dpUW9EUE9jd1U3Vk83alVBbDZwWVRDa3VlUTNiU251LWpRQlNUWVgwdmQzLTV6SThGY3VlX2piZzBSXzVrdGZGUnhv?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Middle East Eye",
      "latestSinceUpdate": 1744
    },
    {
      "date": "Aug 10",
      "text": "U.S. assesses Iran’s priority has shifted from nuclear weapons to control of the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxQaEIwYko4Q0VxaDhpZVpVT0V0OTRhTmNuVDBtS29MNjdXVTRFQ1gxVW9kVlZMdG90dG03dHJxcU9PQzV2SlIxY0diVGUwVVlCRUc2NXgyaTVNSDI1dWl5dkJlQ3d0aUc4b0hKRnVyUEJXRmlkQWRzMjVkNmxqUVROTXptclRsNDJHdUdXa25Ib0NwejI3ekw4d0JVQnFUel9OTFVqT2xYT1BmTER2YUtFM2xCbDRzbWhVU0ZKZGQ4WVg5NEI3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1744
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
      "perspective": "US/Trump Administration",
      "headline": "Trump Demands Compensation, Shifts to Economic Pressure",
      "summary": "The US administration, led by Trump, is demanding compensation from Iran for past conflicts and is signaling a shift towards economic pressure. Negotiations with Tehran are described as only 'semi-negotiating' as military options appear limited.",
      "tone": "defiant",
      "latestSinceUpdate": 1726
    },
    {
      "perspective": "Iran",
      "headline": "Iran Conditions Hormuz Reopening on US Concessions",
      "summary": "Iran is demanding concessions from the US and states that the Strait of Hormuz will remain closed until the US 'corrects' its behavior. Tehran is also reportedly nearing a separate deal with Oman regarding the strait.",
      "tone": "defiant",
      "latestSinceUpdate": 1726
    },
    {
      "perspective": "Israel",
      "headline": "Israel Prepares for Unilateral Strikes Amidst Regional Tensions",
      "summary": "Israel is reportedly preparing for possible unilateral strikes on Iran and has warned that Tehran's attacks are coming close. The nation also defended its Beirut strikes as precise while engaging in talks with Lebanon.",
      "tone": "strained",
      "latestSinceUpdate": 1726
    }
  ]
});

export default LATEST_SNAPSHOT;
