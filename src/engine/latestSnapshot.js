export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 504,
  "lastUpdated": "2026-05-04",
  "lastSyncedAt": "2026-05-04T11:19:10.991Z",
  "warDay": 66,
  "summary": "Tensions escalate in the Strait of Hormuz as the US announces plans to escort ships, prompting Iran to threaten attacks on US forces and an alleged US warship attack, while peace talks continue amidst increased Israeli strikes in Lebanon.",
  "lastNarrativeUpdate": "2026-05-04",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 60,
    "summary": "Despite ongoing exchanges regarding peace proposals, no ceasefire or de-escalation is currently active, with military tensions remaining high."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "May 04",
      "text": "US announces plan to escort ships in Hormuz Strait.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQRjdDY1pjZndhZUhKcFFXUmZjSUJpdDlRdk5ETE1sRVNrTVRMNVA0bXdpaHc0dHBfaF9nblRLWEE0RlRWemJUNGk0RU9CVWFRcnBqLVVoRHRPelRvVWtJUHhkOXhMaEwtV01mRTF1SGlzZGU2YU1fdEZwb1RWT1hFeVFrOFZsSHZJUktRVkFmX1ZOQ0FQY0JVZWxxdDQ1OHZudGtqSzlQVzdrZG5PMlF6dllrbklZRGVvalVv0gHAAUFVX3lxTE9KQVNaMHA0YURrNlFyN1VGMFMtZGI2Vjk4bFc2czh5a0VBbEZ3NE42QzhJV3JBX3poYmttNEozaFhVUHhyRzVqdjZiY2JwcUttbzdKS05LeTltRHZjTkUwb2FZT1lqZ0NsY2E1RHFOMFZwcDM5d1pFdDZGRGc1enRHdXVVQmJNNUZCQWJjWG41M1dpWHFQVzg2dFV1YVVLb0JwSWRDR1pObDJLZ2JPaGNUUnNWNVF2OGRQbGswczVhTw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 504
    },
    {
      "date": "May 04",
      "text": "Iran warns it will attack US forces if they enter Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxOeVFMN1ZfVVIzWWVLcVdUNW5MZW13aHJyc0pNa1AwMmJnTGlQVmRiSlNxMTQwOWY1bmNPOGt4eUhSWW9KSF9sNnBnWldyQ21ma24ydVR3NGZiM1RUYVk4eHBabjgzY0VRUHgyTFlvR2MxVTQ2M2tIU1oxY053dER5bmo3SUZqaDhHRGlSNFRkX0NoS2xHcWU5OFR4S2pVTnAxWWVkVnZMa0YtQl94WVM5OGxoaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 504
    },
    {
      "date": "May 04",
      "text": "Iran submits a 14-point response to a U.S. proposal to end war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTFBLMi1mWVVxa2c3MmhYY3lTYndRdDhoQWZVaGhXVE1JVnN3ZW1jWldnUnEtSDU3ODNPa3l4emNCb2RCQWlYSERJdjBwVGtFLUQ3TllZRmZuT3hSQzYtWS1LSHpFTWp6UUJTMm4wR0FhY19BNnRueE9qUTVhMFJ3Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 504
    },
    {
      "date": "May 04",
      "text": "Iran says it has received U.S. response to its latest offer for peace talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTE9XVjB1Q0RnYWRpcGhKUEFKVXkyNUF5NVlsVkZ0TE9KZTRwUmViYjlBZmR4clliMmlwUXRoT0lTa201a0dGam1FSWhxMnhXUHFlSkJ1Y25rNWlIdXVsb1JhVUFQYkdZSE1qQkJPYUhiRU5leFBI0gF6QVVfeXFMTjNlUENZVFlKV0hYWVdpSDdfQ2Nxb0p1UmRpLXdqZ0l2dmgxbTBTWHRrckE2QThham5BMVlCc0JqZEN2SHlDNW5sUmtkMnp3SlJRNWtuZkJBcFBGNFY5S2VQMmlRTG9zWWRoeVZwWWdTTENILWluQ0FvY3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 504
    },
    {
      "date": "May 04",
      "text": "US warship attacked with missiles in Hormuz by Iran’s navy.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNanlpT3FhcW9OTGp2ekUwdDBYWjlfNWpTSUxTRFZkSnl1TUFfWE5nYkxfZ3UzQ3d3T1NVQ1VaV0g1b29KNWNoNlVHcFloZzg5N2k0ZU1UcEx2ckhqYTgtVlVIOFhHYnVSQThObVBxVlZVbXhpNjEwTzU0cEEyTjBIcl9zUzE5Mm1DbkU4VXQwRUkwWGw2V2dmQXpHRUhCV1VpcHhabXQwWnloQlFUdFJqV0JOYXdMUdIBuwFBVV95cUxNWGlSRGJ0YUsyLWJuQUt1RmdWSFROY0k4Um5sdFJfMkFKbDBPSFBvUU1aWTBYSE5COUdXbk5pUUd3ODZoWmtzeXNTU2tnb3k1aVJQY0hhXy05U3dkZWNEYUV2ZW4tc2k0YWtFZFNaYnZTeVZOaDY0U3h4T0hzTGs0MlUydGt6U0lZQUJfUi01X0JNbHdwbDhQNnFLRUpfeV9zbngzQUluQ29hVFA3Z041dHU3SU9yZllDVWtz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 504
    },
    {
      "date": "May 04",
      "text": "Israel attacks increase in Lebanon; thirteen killed in southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 504
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
      "perspective": "Iran's Defiance",
      "headline": "Tehran warns US on Hormuz, vows 'painful' response",
      "summary": "Iran has submitted a response to a US peace proposal but simultaneously warns that Trump's plan to escort ships in the Strait of Hormuz will violate any existing ceasefire. Leaders reportedly believe Trump will eventually back down despite economic pressures.",
      "tone": "defiant",
      "latestSinceUpdate": 501
    },
    {
      "perspective": "US Assertiveness",
      "headline": "Trump moves to secure Hormuz, proposes war end",
      "summary": "President Trump has announced a new initiative for the US Navy to escort ships through the Strait of Hormuz, aiming to guide stranded vessels. This move comes amidst a US proposal to end the war, to which Iran has submitted a 14-point response.",
      "tone": "strained",
      "latestSinceUpdate": 501
    },
    {
      "perspective": "Regional Conflict Escalation",
      "headline": "Hezbollah deploys new weapons as Israeli strikes continue",
      "summary": "Hezbollah has introduced a new weapon designed to evade Israeli detection, indicating an escalation in tactical capabilities. This development coincides with Israeli strikes in southern Lebanon, which have resulted in casualties, highlighting the ongoing intensity of regional conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 501
    },
    {
      "perspective": "Geopolitical Implications",
      "headline": "China, Russia gain insight as US sites damaged",
      "summary": "The ongoing conflict provides China and Russia with valuable real-time intelligence on US military operations and capabilities. This strategic advantage is underscored by reports indicating significant damage to US military sites in the Middle East from Iranian actions.",
      "tone": "neutral",
      "latestSinceUpdate": 501
    }
  ]
});

export default LATEST_SNAPSHOT;
