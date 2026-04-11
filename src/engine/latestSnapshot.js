export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 84,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T16:39:43.229Z",
  "warDay": 43,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "Diplomatic efforts are underway with peace talks in Pakistan and planned talks between Israel and Lebanon, but active military engagements and threats continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 80
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
      "date": "Apr 11",
      "text": "Iranian delegation arrives in Pakistan for peace talks with the US, with Vance en route.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQUkJlNWk5X0x6X25UNC0xdHR1UnhQcWxwM2dqYW5uRVlSYXVEUFZzV29za0diTk1EaUtFMUFGaC14cmpjcTlmVU0tRDh1YzZvRXktNUpVVHpXZzFEOUtGcWhTa3JvalgzYnhLRUdWN1NLaTJkdk5PYmd5UkV6OUNHS3hUVmpnaXhMMEMxRXpvazlod2l0T1FXRmUzeE9wV0JoOVdaaVVrVEU2Wjk4ajFwYnlWNzZ2OHdUSjlTZm1hUWfSAcYBQVVfeXFMTzdFS2dXNW1zRS0zQU1IWm1uTjNQV0RCblc0Y3ZrLUhaNWlENjFoNXlUQ1I4YWtpREgzRWdvaXgwMjVUUzZZMElyeFEydC03U0t1YXEtQzNPTWgtMW55NHdkQjVrODFsb25zaWtVWDhhTXRLTlI5TmZKZUNiNEZFd0hQdldkbkM3bUg1T29zcG4tVXJnTVJPSkNZWmtaRzJRS0dORlpjeEdQamdocUpxWGpxNUZJTERNMlJSSHJmVkNuMlhiekZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 84
    },
    {
      "date": "Apr 11",
      "text": "Trump warns Iran of fresh strikes if peace talks fail and claims US forces have begun clearing mines in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxQRHpKdTgxUlVlakFwSXFXN2dPVkZ2dkJtS3JJQWwxT1VGcmJOVTNJeVBWUUNxcFEwTV9jX05SRFZGemJwV1lPS1QwZ0RMYzN6Sms0Z01CeXpYSHpGejdwRDNVcjJ4d1Y5UUlIeVVLdVJkUV94dy14R3hRQ1V5cExBeUd3SDB6NGVNX1BnNk9fU2MwY2lCaV83T0pPWkt2R1c3Zk1lWUZMbXZrYWhqQnhvOGxPemxaa2Q0eHo5blhfcERFUG9JMVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 84
    },
    {
      "date": "Apr 11",
      "text": "US warships cross the Strait of Hormuz for the first time since the Iran war began.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMib0FVX3lxTE9Gb3g0MW9SWE9LQ3d4eW9OWVMxeXMtVkRPeTRROUxMRmhhRy1xenhhZ0hUV09hcjdtdVNfVWFwYTNCYlNvV2YwWXJmQy1aejBMYldPWW00UkpDZlhkSVB5d0pLYVpSTUFvREVXZUNCMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 84
    },
    {
      "date": "Apr 11",
      "text": "Israel and Lebanon are gearing up for direct ceasefire talks next week, despite ongoing IDF and Hezbollah strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQRUhHalQzTUJIZW5FOEd6NjQ1Zy1zX3pkWlRuMlV2UmhLWnRnVWE1aEctUE44cldJWXlHZ09seUZXWGNyY2Z4a293WkdZX0ZvVmdIQnVRN2hSb1REclFtZUxUMmJSVTYxVUhCZk5xMHk4LVpOY2JFSkZ2bXMxYk1WSXd0YXM3QS02ck9KRDdTbGh3U1ZxdVgzWGxYTXo1aTMwUEoxUVVZaS0wUXc4S2U3ZUVGNNIBuAFBVV95cUxQNXNjb3RtWElmZUFXY0c1Ym0xbVdpb3ZHUnpHTWV2dzVjQkw5VkM4bE56VktyUmRKdkt2Mmg5SG50Zi1RMGhJV3F5Mk9Ld1VzN09sM2taRExMbHZXVTZncHE4R2xPT0hQVlV5OHFITU9vWUI1S2pkcjEwRmV6R1cxTmJSXzdtakNqT19PUXlvdE1fS1pXdmpBMmRxTU13RFdqNjMwVXJtNEczZXNnRzlLOHhPNklKMzNh?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 84
    },
    {
      "date": "Apr 11",
      "text": "Israel rejects a ceasefire with Hezbollah before the upcoming Lebanon talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxOam1YbU1iLThPVG9qTWd3RXFNWTRqakFLLXlKcUwxUjFEenh2anAyVE44MGVjTnZzX0pZSkU2SnhCbFh5ZnE5QzdGMEUyeGpkMjVHOXl2SjJ1ZE9zRWdVUnNfUVRjMEVqbkJjWmNrNDg3SHdZQnhKRExCVE5lQVVUenlnOXMyVkxjelg2MkE0Q25kQmdoZjRLMm5kczZaZlUwWVh4R3FnQ29uMHlkT1JzLWlMeDhucnFpeGRtZFJ30gHDAUFVX3lxTE5IeDV5MHhDWHBwd3pHcjZpN1BsMEZBUm93SnBqcFZ4eGF1X3FiVTg0T2I0UGNlNTlwdjhNS253R2U1NXpqSlpydlpieVdNNGl6X2Z0TUJNckQ1LXlzUVFKR090cjFGZmtOQlZvS1p0cHYxa0xMUGx2NzBKS0RCaFNZd2NNbldpWERtWHVueTBDcWNoc0EzTkY2Q2FxbXc4QTdiZHQ1dUg0cFFuSmpxeHBuMXFJYWNlb2VYYklwSmlJb2dxVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 84
    },
    {
      "date": "Apr 09",
      "text": "Analysts predict the Iran war shock will flip the oil market to a deficit in 2026.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQU19Ed2lZbkZ0QTktZDNoSjVMSWZoV0k2aWR5MTBCV0M0dFI3YTRQT21oMFlpdXM0YmxGVzJVNW5UTGhNZEhOUnpuMkpRdW9Md0hzdWhyWW1WRVFJR1U4cUU2N2dVZEY1bnpGakJtYlJfX21EX1AtS0RqUmkxeVBxcEVDTUNxV1MxQVktRjRxTUlzYl9NVDF2OVIzNFF5ZnFmeHMtTVlXRDA4TWcxREVHUGVlU3JndTZs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 84
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
      "perspective": "US Diplomacy & Pressure",
      "headline": "US pushes for negotiation while maintaining military readiness.",
      "summary": "The US, through envoy Vance, is actively engaged in peace talks with Iran, while President Trump warns Iran against failing negotiations and highlights US military readiness. Trump also criticizes Iran's actions regarding the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran engages in talks amidst Strait of Hormuz closure and ceasefire tests.",
      "summary": "An Iranian delegation is participating in peace talks, but the Strait of Hormuz remains closed or has low traffic, and Iran is reported to be testing the ceasefire. Iran is also reportedly unable to find mines it planted in the Strait.",
      "tone": "defiant",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Israeli-Lebanese Front",
      "headline": "Continued conflict in Lebanon despite ongoing talks.",
      "summary": "Israel and Lebanon have agreed to meet for talks, but Israel states there is no ceasefire in Lebanon, and both sides continue to trade strikes, further threatening any broader de-escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "US Military Internal",
      "headline": "Disquiet and unpreparedness claims within US military.",
      "summary": "Survivors of a deadly attack on a US military outpost in Kuwait dispute the Pentagon's account, claiming the unit was unprepared, contributing to growing disquiet within the military.",
      "tone": "skeptical",
      "latestSinceUpdate": 64
    }
  ]
});

export default LATEST_SNAPSHOT;
