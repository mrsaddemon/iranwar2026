export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2502,
  "lastUpdated": "2026-09-27",
  "lastSyncedAt": "2026-09-27T23:50:14.785Z",
  "warDay": 212,
  "summary": "The ongoing war between Iran and the US continues, marked by stalled negotiations, heightened tensions in the Strait of Hormuz including drone incidents, and reports of civilian harm from US-Israeli strikes in Tehran. Hezbollah remains active in the region, while the US military is actively securing oil transit in the Gulf.",
  "lastNarrativeUpdate": "2026-09-27",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "Negotiations between Iran and the US have stalled, with the US rejecting Iran's proposal to reopen the Strait of Hormuz."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.45,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.48,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 18,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Sep 25",
      "text": "UN ambassador Waltz states Iran was not negotiating in good faith to end the war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPSUVsMFM4WGF1c1NReGpTcWN6OXZQWFR3ZHJoR0p6MmtPYWR4N0RmSWFJcGdFMUdaemVpODhabzV0ZE5iTFlDNDVvUDAtc2IyMVVSNklTMWVXT1RqdlVTY3BMZDRuRGhjYlZybzRTQ19sT3Nld1JYQkE4Z2dTR3dDYXB3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2502
    },
    {
      "date": "Sep 27",
      "text": "Trump rejects Tehran’s proposal to reopen the Strait of Hormuz, indicating stalled peace efforts.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNWXRhMlFLVmoxcnBBWHlQNVhYNmkxTkI4WFhiSURFd2VSemEwcWYtXzVsRE4zSVkzRklWa3FTMzE2eFdIMFNCbXMxbXJtT05jc3dwcnpKTFNtbnhvTFRuODRkM281MVJ3X00zY3Y3S0JqQ0c5cW9kQ1dWZ2VxRlhDckNLR1FLeFR5Qkpja3FpT0NPVXJCbTI1OTlSUHI2WmZMSHAtZkVGX1lzS3V3Q2FqNTRndmxFY3dxMksyV9IBwgFBVV95cUxPdGx2Yk9malp6T21jY1lMR3BlR1plQXU5OXphV2dGTTdIcW1YVlBFem54WFBhT2oweDNMdWNUbW5IdVlUd0VlT2V4aVotUlllbGlpb3JneEc1UDdna0x5SFl1V01oNDRJcDAwcFNQSzNqWWpIWkdMMEg4ZE91MVY0dW5GaU91MzJSRWZlWUxoeHFGRWp1aWR6NjRDNFM5bUNVa1JrMmhMcTNKcVpEckFrUW9GTTV1WnR6bGpEakdNZDRMQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2502
    },
    {
      "date": "Sep 27",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2502
    },
    {
      "date": "Sep 27",
      "text": "Iran Guards claim seizure of a US underwater drone in the Strait of Hormuz; US refutes claim.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxNOXE2NWU4bXpTMjM3dWVDR01TaDFXUlhuRmlxQy1nOThWcWNpSGFfUTNZWnY5ekl4T3pER1lFSWNBcERxT1QwTzgyMnhmS1VrUFd1UjdxN1NHTjNmVGtRa2hCT3ZxQTFKQ1pvbTNkdFVfSTJFVm8xU3pRc0pTNnBoc3JndVZCSzZqaEl6eWNzaFBMQktwS1NIdEZYeVF5QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Arab News",
      "latestSinceUpdate": 2502
    },
    {
      "date": "Sep 27",
      "text": "Iran states it will not soften Strait of Hormuz demands, contributing to lingering tensions.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2502
    },
    {
      "date": "Sep 27",
      "text": "Hezbollah supporters mark two years since Nasrallah’s killing, with calls for revenge persisting.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE9ySlp5Z01NSW9oVFpDNGdQOHJnejV1ZjRSUUpUOUhtZjgxTER4WFM1OGEwbXdVV2xVY3FUUjIyS2VGSjI2RElfSkk4eFpabVRyTGVQOVln?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 2502
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
