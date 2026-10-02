export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2521,
  "lastUpdated": "2026-10-02",
  "lastSyncedAt": "2026-10-02T01:34:12.816Z",
  "warDay": 217,
  "summary": "Tensions in the Middle East are escalating significantly with multiple US military deployments, direct US-Israeli strikes on Tehran, and attacks on oil tankers in the Strait of Hormuz, while diplomatic efforts remain unclear.",
  "lastNarrativeUpdate": "2026-10-02",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is currently in effect; tensions and military actions are escalating."
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
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
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
      "date": "Oct 02",
      "text": "US deploys a strike group to the Middle East and implements new sanctions against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxOX09XQVdqYXN0MXFCR1d5aVVqWHkxdmxfdjVKUDdaS1AtVmlKSjJ0MTMtdHU0aXVHVVMxQ29CR0R4U0dTb0piRDdkNFpKdlBRdmJUZVN4X3dkc3NzNkNiNHp6U1ZzWUxVWFl1azNpM2IzS29QcTBraGJYOW1WWGpXV3NPTUFOa1RsRU9VNGc4S1U4UzNKeFVmNjBHc3lhdFVjZHlfQThGS0NlOWNrdlZ5TWV6eEbSAboBQVVfeXFMTS1xSlkwb3lQU0hEQWgweTZ3dll0NlVYSEpQeUpoN3BVR05FWTMxN0ZwSUdTaTFVMVNWcDl1bU54alhDa0JUSHViRDNfSDVSQUdCaU1IQ1FCdTl0aGRLMF8yTGZpbjhPOUNhMjhIWUlTczRJNHpKU19ZSnBoeVlNWFIwZGI2YTRxZHZSbXB3WUlFN1Q3X2Z0QTJPdzd6QVhwajVJR2RmNzFGd1VSbFJyeml6Y3ZqSnloLTBB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2521
    },
    {
      "date": "Oct 02",
      "text": "Trump states he may 'blow up' Iran and threatens post-midterm attacks, indicating a hardline stance.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPWlkxSG8wVkZ1Q0VFS2JDNE5WblUtN3hQU0twSnVrMFNrWmxOaDVlVS1HUGZXbVFGWkJtTkNqQTdhR281Wm9DbEpOY1BqX05PMDBSTWV2eGxOSzMwMWFJNHRJWlktV0txM1pWMEF1RG10UVk0d041dW9xNXRyenljd0l1T2Rqek9jZWVKWHgzUXowdXN4SUhfZ0VtQWRsOFdIdUlZWXdNTncxb1pwb09hYUlNcGdORWFVak5v0gHAAUFVX3lxTE0tbmZweW4xTWxhNm1QTnB4ZEpoWHhMU0RiZ09XX0wxLW1wM3hYZzNkX2ppQkgwRko5M1ROU2l0eEVlQ2Z2a2d2MWtWNm5FQjhLWUY2ZDVLSVBRZlNTb0FVRHJYZDI4UE04ZzZ2YlZwUjdBMUVoLUtYdC0xX3pISV84YUFuTWlNM3ZLMndjeTYzS0tNX0Fja0VQMjlpcWtSaUdaWXJnMDBqU3dZQldqQWxFNVRlOUVyU1l5NXo2c2UxYg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2521
    },
    {
      "date": "Oct 02",
      "text": "US and Iran trade barbs as Saudi Crown Prince MBS and UAE VP meet, highlighting regional diplomatic activity amidst tensions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxOOGR3S3NmdVpaZUR1OGdBX0hBTU5TbTFDcDRVbThaY05EU1Q3Qk9Sa3AwNFlkT3RrU0ZZb19DYmlaZlFQa09DT3d1eGxuZFJnZVJpT1NSTkpVVy1pUEt4MmZVR1JqeWR0YWRLNUdfcFp2WjVMV1lMNVllaF9ELVF3bmhrUUhscEFwcDJVSE9feWtzYldxNGF2NGNEZUZVZm05Z0ZoamNsd2dZNVcxNWE4V0luaVZpd9IBuwFBVV95cUxPSUdtckw3eUdwd1UweVd6Tm1YWG55cXBIaTZrdVJtTWRKdmN3LWk5aGxtOTFtbFNQcVdfN3g2ekVUR0NGVHNXRXFQYjJrbjNiNUNwVUREUWp1M1laYkZQMng0SzJIcmN1RnR1bVpXU3FBbnRaaWxsQllnNmV1ZU1nMG1QT0RFR1JnUDZoaFpoc2VsbTFfMGpjUVotZ2dnR3hFVEl2Z0kyNl90enlOX2J4YUYxVXNpQlBMbDFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2521
    },
    {
      "date": "Aug 17",
      "text": "Deadline to reach a US-Iran deal expires, with Trump threatening Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2521
    },
    {
      "date": "Sep 28",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2521
    },
    {
      "date": "Oct 01",
      "text": "US sends a third carrier strike group and 2,000 Marines to the Middle East as Iran tensions rise.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiUkFVX3lxTE80b19WcmNuUzN2cXlabzRoSXJaYmMwelVnb194ajA5SjNjc3VOWHg5QnRKSzB4bXQ0azhEaE1xRkhKd3FwS0RGLVJ6eHlqRVMxanc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Iran International",
      "latestSinceUpdate": 2521
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
      "perspective": "US/Western Security",
      "headline": "US Bolsters Mideast Presence Amidst Iran's Aggression",
      "summary": "The United States is significantly increasing its military presence in the Middle East, deploying multiple carrier strike groups and Marines, in response to rising tensions and perceived Iranian aggression, including tanker attacks and support for proxies. Trump's rhetoric suggests a firm, uncompromising stance against Iran.",
      "tone": "defiant",
      "latestSinceUpdate": 2521
    },
    {
      "perspective": "Iranian Diplomacy/Resistance",
      "headline": "Iran Proposes Peace Amidst US Military Buildup",
      "summary": "Iran has indicated it received a US response to its 'war-ending proposal,' suggesting a diplomatic channel remains open despite the ongoing conflict and US military escalation. Concurrently, Iran continues to support regional allies like Hezbollah, which has acquired substantial weaponry.",
      "tone": "strained",
      "latestSinceUpdate": 2521
    },
    {
      "perspective": "Regional Stability",
      "headline": "Proxy Conflicts and Regional Realignment Intensify",
      "summary": "Hezbollah's continued weapon acquisition and secret talks with the Syrian government highlight persistent proxy conflicts and shifting regional alliances. The withdrawal of US forces from Iraq creates a vacuum that could further empower Iran's regional influence, challenging stability efforts in Lebanon and beyond.",
      "tone": "anxious",
      "latestSinceUpdate": 2521
    }
  ]
});

export default LATEST_SNAPSHOT;
