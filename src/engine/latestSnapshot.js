export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1337,
  "lastUpdated": "2026-07-17",
  "lastSyncedAt": "2026-07-17T13:56:52.051Z",
  "warDay": 140,
  "summary": "The conflict between the US and Iran has intensified with continuous US strikes on Iranian infrastructure and Iranian retaliation against US bases, leading to a 'worst case scenario' for the Strait of Hormuz and warnings of broader regional conflict.",
  "lastNarrativeUpdate": "2026-07-17",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No ceasefire is active; conflict continues to escalate with no end in sight."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
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
    "nuclearIndex": 40,
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
      "date": "Jul 16",
      "text": "US launches sixth consecutive day of strikes against Iran, intensifying attacks in southern Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOU0UzM1RqVEZOZDY5Z3RMcDN4UEpaejlVUnBZOW51azFzWmNaZEVtTHJSdThpTnYwbmlzRjd2Sno0SjZKdHFyYU5JZmJyMzFoeWZLZTVGVUsydVJFZ0MxVGlMVVY0NlpVaW5TMENxSGdTZ2NLYlZtZUdXTVZYVU1zQkZuNkFLNnFFQjVGbUpOUDZremQ1SHg1UTZVclpWSVQxa2ZpNDJ1N0dnVXFMX0NqT0JvaUhGMkFoc1dv0gHAAUFVX3lxTFB1U0ZRVHh2cWdJMmN4MGlmakxadUctVXhxNFZpR05SZGtYNEhyakRKT0NYTXBhSDhmYnpZYzhscS1lRy0wTWVmR3pJenZtQXB3VkNZM0szaWxoYlY4dkwxTXJhVEpHdFdiV2dqcFVEQ3NUNWlkclZjTU5hNExJZzM4VmhFTDlMVDNJV2RySk53dlVEVmZFak1VdTYwWV9aaEFILThmdHRxc3phV1ZuZmxGUTdsQ2hOeFZZbmJGMzNqSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1337
    },
    {
      "date": "Jul 16",
      "text": "US expands Iran strikes, hitting airport, bridges, and communications tower; Iran reports seven killed.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTFB0V2lEMjl3REM1d2VhZEEyMmZyRG9LMHZOSk8wUXotakwyRDkzVkphQjBvRVF2M0NtX1pfNmZLSXF6OGpkakFnRTJ6N3VjTy1DcFdKQ1Jn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 1337
    },
    {
      "date": "Jul 16",
      "text": "Tehran targets U.S. bases in the Gulf in retaliation for US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMib0FVX3lxTE1kVloyRVRzdnA0Ulk3R1AxaTNtWDMyTHdWQXlZOU8zb2hjaXZEblFnQUptai04Y3pSUlFxSURpWS0tU1hwNFdnMndjMlotMUJQUVZ2NmdOZ0t6czZXZk1YRTU0dnhMY3lEeVhlX29aUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1337
    },
    {
      "date": "Jul 16",
      "text": "Strait of Hormuz is 'back to the worst case scenario' amid escalating attacks, raising oil disruption concerns.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxNTms5S29XQzlnbjNtVi1RXzJ6WUtBLTVIVlJZVnhMbFVfemxMdmpxNlhqV2k4dkRHemU2QnpLcFNjTWRjN2NzLW4zTk9vbmFSOUQ2ejYzRVBGbC1hN2RaQWhVaE9EalhzUl9mbFY4WVFPeDRwVkNETGtEQnl3VHNpc0steHVaT3lLdFdESi1kWlIyUHla?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1337
    },
    {
      "date": "Jul 16",
      "text": "Iran warns the war 'will spread' and tells regional allies, including Hezbollah, to prepare for broader conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiYkFVX3lxTE1xMkdDcEhqTm5Qd2VuUk5KSjV6ZHJodUZ3dWs5M29tVHZ2MjQxb2RWaVBseVVhQ1dxLTBsMWVyWmJYd211WjdNVk9ZeDZoUl9id0JJMS02aUg0bFI1Szl2V19B0gFnQVVfeXFMTUNRUnZqM0tTOW5veXJkZ0JiOGlTQTd4Z2VaaTlMZlZnWmVzVHE2amtUaFdZaEtBUVJDYXc5WHBOMzdMU1ljdEpKLTIyTy1QYUR5YmZUT3RxSlVjSGYwWmswTkpocVVSUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1337
    },
    {
      "date": "Jul 16",
      "text": "Qatar and Kuwait fend off fresh attacks amidst ongoing US-Iran conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1RWk1Qa1dMb0Y3cjlkWWtFUFpPQzhEMnk4N0lFRmswd2t1R1F0Yi1oS1Z6TUJFQ0xpRzZPcGd3Yi1ndU5YYlk3ZjRJYkJxRVkxdmlPU2RxY052ekFOWWc5NDd3LTJLMmx5MkdmZ293?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1337
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
      "perspective": "US Strategic Interests",
      "headline": "Protecting Hormuz, Expanding Strikes",
      "summary": "The US states its ongoing strikes are defensive measures aimed at protecting vessels in the Strait of Hormuz, despite expanding its campaign against Iranian targets. This reflects a strategy to secure vital shipping lanes and deter Iranian actions.",
      "tone": "defiant",
      "latestSinceUpdate": 1331
    },
    {
      "perspective": "Iranian Response",
      "headline": "Countering Aggression, Claiming Targets",
      "summary": "Iran asserts its right to respond to US aggression, claiming successful counter-strikes against US assets in the region, such as the Fifth Fleet in Bahrain. This narrative emphasizes Iran's capability and resolve to retaliate.",
      "tone": "defiant",
      "latestSinceUpdate": 1331
    },
    {
      "perspective": "Global Energy Security",
      "headline": "Bypassing Chokepoints Amid Conflict",
      "summary": "Major oil companies are actively exploring alternative pipeline routes to bypass the Strait of Hormuz, signaling significant concerns over supply chain stability amidst the escalating conflict. This highlights the economic impact and efforts to mitigate disruption.",
      "tone": "anxious",
      "latestSinceUpdate": 1331
    },
    {
      "perspective": "Regional Stability",
      "headline": "Containing Proxy Conflicts",
      "summary": "Regional actors like Syria are working to interdict arms shipments to non-state actors such as Hezbollah, indicating efforts to prevent wider destabilization. This suggests a complex interplay of state and non-state actors in the broader conflict zone.",
      "tone": "strained",
      "latestSinceUpdate": 1331
    }
  ]
});

export default LATEST_SNAPSHOT;
