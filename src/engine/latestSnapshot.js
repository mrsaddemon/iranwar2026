export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2500,
  "lastUpdated": "2026-09-27",
  "lastSyncedAt": "2026-09-27T17:56:59.353Z",
  "warDay": 212,
  "summary": "The Iran war continues with Tehran proposing to reopen the Strait of Hormuz and restart nuclear talks, which the US has rejected, while US-Israeli strikes on Tehran and IDF strikes on Hezbollah persist amidst reports of US casualties and increased military presence in the Gulf.",
  "lastNarrativeUpdate": "2026-09-27",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect; Iran's proposal for talks and reopening Hormuz was rejected by the US."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 75,
    "escalationLevel": 85,
    "oilDisruption": 70,
    "tradeImpact": 66,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "date": "Sep 25",
      "text": "Iran offers to reopen Strait of Hormuz within 7 days and restart nuclear talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiakFVX3lxTE5aZ0hqeDJKZlFWZTE2eWwxei1Cd21MaFNkZFZPRWxzNllJdmUzUXVGMFZ6THlXempxQmo1NzhRV1FuNG1sd3hTSW9NT1hvSVdEMVhfVDI5bFBlYWk0T3pvTGd3ZXpjcDJIbEHSAW9BVV95cUxQbGRDUzktQ3JVU3VVcnpXSk5LN20tZEVPbEZ1d3NjSDJKa0xleWt4V054NFNtYU54WElPeWE5ZXk4VnlDVUg4TUIxaExtbGZBS2xkZEdXeVpPd0Z4VFk1cWo1QnRQSFBOUXNUUE5nbW8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "cnbc.com",
      "latestSinceUpdate": 2500
    },
    {
      "date": "Sep 25",
      "text": "US President Trump rejects Tehran’s proposal to reopen Hormuz, calling it 'not acceptable'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNWXRhMlFLVmoxcnBBWHlQNVhYNmkxTkI4WFhiSURFd2VSemEwcWYtXzVsRE4zSVkzRklWa3FTMzE2eFdIMFNCbXMxbXJtT05jc3dwcnpKTFNtbnhvTFRuODRkM281MVJ3X00zY3Y3S0JqQ0c5cW9kQ1dWZ2VxRlhDckNLR1FLeFR5Qkpja3FpT0NPVXJCbTI1OTlSUHI2WmZMSHAtZkVGX1lzS3V3Q2FqNTRndmxFY3dxMksyV9IBwgFBVV95cUxPdGx2Yk9malp6T21jY1lMR3BlR1plQXU5OXphV2dGTTdIcW1YVlBFem54WFBhT2oweDNMdWNUbW5IdVlUd0VlT2V4aVotUlllbGlpb3JneEc1UDdna0x5SFl1V01oNDRJcDAwcFNQSzNqWWpIWkdMMEg4ZE91MVY0dW5GaU91MzJSRWZlWUxoeHFGRWp1aWR6NjRDNFM5bUNVa1JrMmhMcTNKcVpEckFrUW9GTTV1WnR6bGpEakdNZDRMQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2500
    },
    {
      "date": "Recent",
      "text": "Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "amnesty.org",
      "latestSinceUpdate": 2500
    },
    {
      "date": "Recent",
      "text": "Israeli official claims renewed strikes on Iran are ‘only a matter of time’ as regime aims to rebuild nuclear program.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNbktQZW9ZMTVzeEZUNWwzMmxvZk1KNS1DNkpDWVk0NEU3YWg3UmVLcHE5ekdlRXFqUVU0TkVCczNXcV9rVVY0bnlQZ1JZN3Y4RUFOWkY4MnVxWldlOHFlUG14TU1sUkVibkFTeVdYZW1WNTBuUDJuTkV1ZjVqNjlMYUVqSGtTMDFaYnhqcDA0c1EweHhmaXpXRHYxMHI3VkJ1c2RQU1R1VW9ETXfSAbABQVVfeXFMTVpfOFFwOFRBdERtZldzWFNpd1dHdVhuRjFtQnJ2YVNneTRPdkFXcWp0TTVIb1RjdzhiSTlTMzlTeFZKMWtXSWxjVUUwRldfbE5sb2ZNYjBVamRENlNDSGVod05zdHVDYWdTeFdLOS11X1haeGNxVERSQjZtekhyM09ZSmg5OWZHbjFHbVBnV2FRNmdBS3VxMmJITFJBejZjSmV6NW8tUDN1b3NZRGQ2Vkw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2500
    },
    {
      "date": "Recent",
      "text": "Iran's IRGC claims to have seized a US autonomous underwater vehicle in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiakFVX3lxTE1FYkJjTWJfYnUybzBFSEdpelpSa0xrdUI0S1BIdTZzZXVIcmpXLXpKb3FsRUpaWXdHMzJvcHlFQjJ6VW10Y003WHRIMVVMbkNuejVUUEhyMTBfOFdJWFZhSnA4cWR0Zlh2X0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2500
    },
    {
      "date": "Recent",
      "text": "Hezbollah supporters mark 2 years since Nasrallah’s killing as calls for revenge persist.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE9ySlp5Z01NSW9oVFpDNGdQOHJnejV1ZjRSUUpUOUhtZjgxTER4WFM1OGEwbXdVV2xVY3FUUjIyS2VGSjI2RElfSkk4eFpabVRyTGVQOVln?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 2500
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
      "perspective": "Iran",
      "headline": "Iran seeks end to war, proposes roadmap and Hormuz reopening",
      "summary": "Iran has put forward a seven-day roadmap to end the ongoing conflict and reopen the vital Strait of Hormuz, emphasizing that the choice to end the war now rests with the US. This initiative aims to de-escalate tensions and restore stability in the region.",
      "tone": "strained",
      "latestSinceUpdate": 2497
    },
    {
      "perspective": "US/Israel",
      "headline": "US rejects Iran's peace proposals amid continued strikes and nuclear concerns",
      "summary": "The US has rejected Iran's proposals for peace talks and reopening the Strait of Hormuz, maintaining pressure on the regime. Israel remains ready to resume strikes, citing Iran's efforts to rebuild its nuclear program, while US-Israeli operations have reportedly caused significant civilian harm in Tehran.",
      "tone": "defiant",
      "latestSinceUpdate": 2497
    },
    {
      "perspective": "Lebanon",
      "headline": "Lebanese PM states Israel-Hezbollah conflict is 'imposed'",
      "summary": "The Lebanese prime minister has publicly stated that the ongoing conflict between Israel and Hezbollah has been 'imposed' on Lebanon. This perspective highlights the country's position as a reluctant participant caught between larger regional powers.",
      "tone": "anxious",
      "latestSinceUpdate": 2497
    }
  ]
});

export default LATEST_SNAPSHOT;
