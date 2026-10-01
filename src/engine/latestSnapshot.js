export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2519,
  "lastUpdated": "2026-10-01",
  "lastSyncedAt": "2026-10-01T17:31:37.807Z",
  "warDay": 216,
  "summary": "Tensions remain high between the US, Israel, and Iran, marked by US threats, reported US-Israeli strikes in Tehran, and ongoing Israeli operations against Iran-backed Hezbollah, while oil exports from the Middle East have rebounded.",
  "lastNarrativeUpdate": "2026-10-01",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No durable ceasefire signal was detected across the latest source mix."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 80,
    "oilDisruption": 60,
    "tradeImpact": 58,
    "sanctionsPressure": 63,
    "globalPressure": 77,
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
      "date": "Oct 01",
      "text": "Iran war live: Pezeshkian says Tehran to continue seeking dialogue with US",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxOX09XQVdqYXN0MXFCR1d5aVVqWHkxdmxfdjVKUDdaS1AtVmlKSjJ0MTMtdHU0aXVHVVMxQ29CR0R4U0dTb0piRDdkNFpKdlBRdmJUZVN4X3dkc3NzNkNiNHp6U1ZzWUxVWFl1azNpM2IzS29QcTBraGJYOW1WWGpXV3NPTUFOa1RsRU9VNGc4S1U4UzNKeFVmNjBHc3lhdFVjZHlfQThGS0NlOWNrdlZ5TWV6eEbSAboBQVVfeXFMTS1xSlkwb3lQU0hEQWgweTZ3dll0NlVYSEpQeUpoN3BVR05FWTMxN0ZwSUdTaTFVMVNWcDl1bU54alhDa0JUSHViRDNfSDVSQUdCaU1IQ1FCdTl0aGRLMF8yTGZpbjhPOUNhMjhIWUlTczRJNHpKU19ZSnBoeVlNWFIwZGI2YTRxZHZSbXB3WUlFN1Q3X2Z0QTJPdzd6QVhwajVJR2RmNzFGd1VSbFJyeml6Y3ZqSnloLTBB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2519
    },
    {
      "date": "Oct 01",
      "text": "Iran war updates: Trump says may ‘blow up’ Iran",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPWlkxSG8wVkZ1Q0VFS2JDNE5WblUtN3hQU0twSnVrMFNrWmxOaDVlVS1HUGZXbVFGWkJtTkNqQTdhR281Wm9DbEpOY1BqX05PMDBSTWV2eGxOSzMwMWFJNHRJWlktV0txM1pWMEF1RG10UVk0d041dW9xNXRyenljd0l1T2Rqek9jZWVKWHgzUXowdXN4SUhfZ0VtQWRsOFdIdUlZWXdNTncxb1pwb09hYUlNcGdORWFVak5v0gHAAUFVX3lxTE0tbmZweW4xTWxhNm1QTnB4ZEpoWHhMU0RiZ09XX0wxLW1wM3hYZzNkX2ppQkgwRko5M1ROU2l0eEVlQ2Z2a2d2MWtWNm5FQjhLWUY2ZDVLSVBRZlNTb0FVRHJYZDI4UE04ZzZ2YlZwUjdBMUVoLUtYdC0xX3pISV84YUFuTWlNM3ZLMndjeTYzS0tNX0Fja0VQMjlpcWtSaUdaWXJnMDBqU3dZQldqQWxFNVRlOUVyU1l5NXo2c2UxYg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2519
    },
    {
      "date": "Oct 01",
      "text": "Iran war updates: US, Iran trade barbs as MBS and UAE VP meet",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxOOGR3S3NmdVpaZUR1OGdBX0hBTU5TbTFDcDRVbThaY05EU1Q3Qk9Sa3AwNFlkT3RrU0ZZb19DYmlaZlFQa09DT3d1eGxuZFJnZVJpT1NSTkpVVy1pUEt4MmZVR1JqeWR0YWRLNUdfcFp2WjVMV1lMNVllaF9ELVF3bmhrUUhscEFwcDJVSE9feWtzYldxNGF2NGNEZUZVZm05Z0ZoamNsd2dZNVcxNWE4V0luaVZpd9IBuwFBVV95cUxPSUdtckw3eUdwd1UweVd6Tm1YWG55cXBIaTZrdVJtTWRKdmN3LWk5aGxtOTFtbFNQcVdfN3g2ekVUR0NGVHNXRXFQYjJrbjNiNUNwVUREUWp1M1laYkZQMng0SzJIcmN1RnR1bVpXU3FBbnRaaWxsQllnNmV1ZU1nMG1QT0RFR1JnUDZoaFpoc2VsbTFfMGpjUVotZ2dnR3hFVEl2Z0kyNl90enlOX2J4YUYxVXNpQlBMbDFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2519
    },
    {
      "date": "Oct 01",
      "text": "Persuasion, denial and bluster: Trump ‘stuck’ on Iran war ahead of elections",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxNZGdrSnZWXzRGY09FMEcyTDAtNmllR0tuWjZTZWxkSjRKcHUta2VRbkRYQ2tWN2p1SU44TjVhdzBlTm9QVDA1TzFyMmtSVlQ5aGZ6bVVtcFNaem5pSWNrOHRGU0RjN3luNWQwWlg2UVZhLURsWjIzcWMyX2dPYWNHbXVhQzJIekZLYkQ4cm0xSlQybUh5dlh0Mjk4MA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2519
    },
    {
      "date": "Oct 01",
      "text": "USA/Israel/Iran: Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2519
    },
    {
      "date": "Oct 01",
      "text": "Iran indicates it received a US response on its war-ending proposal, with details still unclear",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxNTzF1aTM5aWNKQThpZ21SMjFCVHFBXzhoVXZSWXJVSGg4VFN4NEhWVlhVUmdJeEJ3OVJLb3BVVHduU1pPSHBJYVg0VEFsbndOTERpekJFNjlja1NwMmU2X1JKeTlfYXlOWk1PX2NjN2dxRDBldV8xTFh4MEdtWUxiN2lxc05vOVdtc3hYWWZaVGpDdzZUeGtsRjhDZWpON3c0dENpWGVubmR4SnduZ1IwV1FpRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "apnews.com",
      "latestSinceUpdate": 2519
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
      "perspective": "US/Trump Administration",
      "headline": "Trump's Hardline Stance on Iran Intensifies",
      "summary": "President Trump is signaling an aggressive posture towards Iran, threatening severe economic and potential military action, with a decision on Iran expected 'very soon'. This rhetoric suggests a move towards direct confrontation.",
      "tone": "defiant",
      "latestSinceUpdate": 2517
    },
    {
      "perspective": "Iran",
      "headline": "Iran Navigates US Threats Amidst Regional Shifts",
      "summary": "Iran is trading barbs with the US and slamming Trump's policies, particularly regarding the Strait of Hormuz and its nuclear program. Despite the tensions, Iran has received a US counterproposal for a ceasefire, indicating some diplomatic channels remain open.",
      "tone": "strained",
      "latestSinceUpdate": 2517
    },
    {
      "perspective": "Israel",
      "headline": "Israel Pursues Hezbollah Disarmament and Intelligence Operations",
      "summary": "Israel is actively targeting Hezbollah through intelligence operations, including assassinations, and is advocating for a US-led international force to disarm the group in Lebanon. This reflects a proactive approach to regional security threats.",
      "tone": "defiant",
      "latestSinceUpdate": 2517
    },
    {
      "perspective": "Regional Stability/Oil Markets",
      "headline": "Strait of Hormuz Open, Oil Exports Rebound",
      "summary": "Despite geopolitical tensions, the Strait of Hormuz remains open, leading to a rebound in Middle East oil exports. This suggests that current regional conflicts have not yet severely impacted critical energy transit routes.",
      "tone": "neutral",
      "latestSinceUpdate": 2517
    }
  ]
});

export default LATEST_SNAPSHOT;
