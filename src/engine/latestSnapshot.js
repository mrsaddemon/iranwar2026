export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1335,
  "lastUpdated": "2026-07-17",
  "lastSyncedAt": "2026-07-17T10:26:59.508Z",
  "warDay": 140,
  "summary": "The U.S. has launched its sixth consecutive day of strikes against Iran, expanding targets and causing casualties, while Iran warns of the war's spread and hostilities threaten oil supply through the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-17",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No ceasefire is active, with hostilities escalating between the U.S. and Iran."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
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
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "text": "Qatar and Kuwait report fending off fresh attacks amidst ongoing U.S. strikes against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1RWk1Qa1dMb0Y3cjlkWWtFUFpPQzhEMnk4N0lFRmswd2t1R1F0Yi1oS1Z6TUJFQ0xpRzZPcGd3Yi1ndU5YYlk3ZjRJYkJxRVkxdmlPU2RxY052ekFOWWc5NDd3LTJLMmx5MkdmZ293?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1335
    },
    {
      "date": "Jul 16",
      "text": "The U.S. has launched its sixth consecutive day of strikes against Iran, escalating tensions over the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOU0UzM1RqVEZOZDY5Z3RMcDN4UEpaejlVUnBZOW51azFzWmNaZEVtTHJSdThpTnYwbmlzRjd2Sno0SjZKdHFyYU5JZmJyMzFoeWZLZTVGVUsydVJFZ0MxVGlMVVY0NlpVaW5TMENxSGdTZ2NLYlZtZUdXTVZYVU1zQkZuNkFLNnFFQjVGbUpOUDZremQ1SHg1UTZVclpWSVQxa2ZpNDJ1N0dnVXFMX0NqT0JvaUhGMkFoc1dv0gHAAUFVX3lxTFB1U0ZRVHh2cWdJMmN4MGlmakxadUctVXhxNFZpR05SZGtYNEhyakRKT0NYTXBhSDhmYnpZYzhscS1lRy0wTWVmR3pJenZtQXB3VkNZM0szaWxoYlY4dkwxTXJhVEpHdFdiV2dqcFVEQ3NUNWlkclZjTU5hNExJZzM4VmhFTDlMVDNJV2RySk53dlVEVmZFak1VdTYwWV9aaEFILThmdHRxc3phV1ZuZmxGUTdsQ2hOeFZZbmJGMzNqSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1335
    },
    {
      "date": "Jul 16",
      "text": "U.S. strikes expanded to hit an airport, bridges, and a communications tower in Iran, with Iran reporting seven killed.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTFB0V2lEMjl3REM1d2VhZEEyMmZyRG9LMHZOSk8wUXotakwyRDkzVkphQjBvRVF2M0NtX1pfNmZLSXF6OGpkakFnRTJ6N3VjTy1DcFdKQ1Jn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 1335
    },
    {
      "date": "Jul 16",
      "text": "Iran warns that the war 'will spread' following the latest U.S. strikes that reportedly hit civilian infrastructure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxOZGFiQkZGcXRqQjFIbDdzVEVxUGV1dWR0WnlMb0JPanluS1pqckNsZXFkQmxvRHMzLTQwUVlJZ2laRDNmMGJRZEQ1N2d1S1N1dWFMdFdnRGQwT2ZBeEExVTFtd2F3SWdRSWNDNG95bU1NZlpsX2xLWmtFRjV4T1BiZlQ4SmJRVks2bGdmMnRKbHNoN3pyOUhKV1ZBcnFmb080TGNfSTc3UWFvd0Q1Q2fSAbMBQVVfeXFMTUNQS2ZSbGg0cVFyT2VCVTN4YWJrNnEtajdiSTVMN3k5MU1rRGRubTFic1YxR3gteUlBWko3MXlJb1V5WHNSYTlSdHNOVmYtTHF5NDF3WVNud24tX3duamlfYWYzZGJ5bC13QmQ4SlYwMmc0SnBoRnpXTjdpTHlTanJWU3VGNFg5d0VBN2pMTEk0Y3FZSXdIOXQwdTdPcWptTk9kU1FTR0g4aWd2OGNHaXNNaTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1335
    },
    {
      "date": "Jul 16",
      "text": "Oil prices are rising as U.S.-Iran hostilities threaten supply through the critical Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMib0FVX3lxTFBQMXN4ZXNiODlXYWFTakk0MmFJZC1COWRISlM5azVsYVZXWHNqV242eVFPdFNVcUtxODlVSndoTHdrdFlld29hS3JlMzVqR0tFSFNGanE1dXhNakxoTmwtZnRTRmFoNVhsVzhSNnVGTdIBdEFVX3lxTE1SMFRwN01INEh6b1BrbVU3MkI0amVfT1ltdldYd205SGtsSVFyVGh3NDNYQU0tcEdxeGZkb0lLNUJ2czJ4QXpXZXkwOUZWSWotamU4dmFoanM3cC1zcy1iVEFONUQtYzNzWnFLMzc5cDAwSHRz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1335
    },
    {
      "date": "Jul 16",
      "text": "The IEA chief states that global energy security is at risk if the Strait of Hormuz does not open in weeks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxPemtCTGQ0SDdIMFRmVlNYbkRuTDZHT194eDY1MzBrYVZyTzZNUlZvWDd5ZjFZRFdUeV8xbnJIb2wtSHZ2WGZFeHR1X3o2MjUtc0h1MUNkOERBdFZCVnVaMkJwaHVnbk9IaDJiVV9RRE82U3NwTmFrMDJuaFpnOUl1Y2Y2eWNaNXhLMjlRWk5uV0ZZMnVPV18zeTZPcTFWeWM4N1JiS01DSWRzT2Q1NzZ3Yk5ubm54TDUwUldyUkpkSjVjNUQxLTY1Q3ZLMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1335
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
