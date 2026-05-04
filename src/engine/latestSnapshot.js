export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 501,
  "lastUpdated": "2026-05-04",
  "lastSyncedAt": "2026-05-04T04:01:11.808Z",
  "warDay": 66,
  "summary": "The US announced a plan to escort ships through the Strait of Hormuz, prompting Iran to warn of ceasefire violations, while regional conflict continues with Israeli strikes in Lebanon and Hezbollah deploying new weapons.",
  "lastNarrativeUpdate": "2026-05-04",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "A ceasefire, if previously active or proposed, is now considered collapsed due to Trump's announced Hormuz mission and Iran's warning of violation, alongside ongoing regional conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 58,
    "globalPressure": 72,
    "allianceInfluence": 73
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
      "date": "May 04",
      "text": "Trump announces US Navy will escort ships out of the Strait of Hormuz starting Monday.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE1zbjFVbkRaeEx5RTk2cllaTnlQMm1NcXJ2UEU0Ump3czB5T0lBVFAzclN4RUpJMGJtWDJ5QnpIb1VBZjZ6SWdRZDlJS0xDZW94enZERV9kTjAyMW1UT3NTblh1NklmM3FNSHBBSVFDUk5sY2lJR2tkNEFPUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 501
    },
    {
      "date": "May 04",
      "text": "Iran warns Trump’s Hormuz mission will violate the ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNanlpT3FhcW9OTGp2ekUwdDBYWjlfNWpTSUxTRFZkSnl1TUFfWE5nYkxfZ3UzQ3d3T1NVQ1VaV0g1b29KNWNoNlVHcFloZzg5N2k0ZU1UcEx2ckhqYTgtVlVIOFhHYnVSQThObVBxVlZVbXhpNjEwTzU0cEEyTjBIcl9zUzE5Mm1DbkU4VXQwRUkwWGw2V2dmQXpHRUhCV1VpcHhabXQwWnloQlFUdFJqV0JOYXdMUdIBuwFBVV95cUxNWGlSRGJ0YUsyLWJuQUt1RmdWSFROY0k4Um5sdFJfMkFKbDBPSFBvUU1aWTBYSE5COUdXbk5pUUd3ODZoWmtzeXNTU2tnb3k1aVJQY0hhXy05U3dkZWNEYUV2ZW4tc2k0YWtFZFNaYnZTeVZOaDY0U3h4T0hzTGs0MlUydGt6U0lZQUJfUi01X0JNbHdwbDhQNnFLRUpfeV9zbngzQUluQ29hVFA3Z041dHU3SU9yZllDVWtz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 501
    },
    {
      "date": "May 04",
      "text": "Iran submits a 14-point response to a U.S. proposal to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTFBLMi1mWVVxa2c3MmhYY3lTYndRdDhoQWZVaGhXVE1JVnN3ZW1jWldnUnEtSDU3ODNPa3l4emNCb2RCQWlYSERJdjBwVGtFLUQ3TllZRmZuT3hSQzYtWS1LSHpFTWp6UUJTMm4wR0FhY19BNnRueE9qUTVhMFJ3Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 501
    },
    {
      "date": "May 04",
      "text": "Hezbollah deploys a potent new weapon designed to evade Israeli detection.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNWm52RmRwa2xzRjZvNjF3eXpWdXdRVlJJejVqSXViVTN2aWVQSzF2Mm03VW1oQndfVzhkclo0TXFtZHBfNllrU01saW9QSi1scG1hMnZfRkNSM1kxOFcyOUZhUHFUaHE4T1ZWOWJrU2VyTktpVlhFeUtFQnJVaE0tcUFsQnVXS3Y0TjQwblM4VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 501
    },
    {
      "date": "May 04",
      "text": "Thirteen killed in Israeli strikes on southern Lebanon, according to the health ministry.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5lQTRpZWpNcDVjOEhubUI2VjJLQ1VucXRHMjNwNzdmRTFpTzd6cG1rSk1rZW9aOFNaX2pXOTNNYmhvZUdNcFMzNm5IMkhtZmc3X1A2TnRMVzNzUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 501
    },
    {
      "date": "May 04",
      "text": "A CNN investigation reveals the majority of US military sites in the Middle East have been damaged by Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxPZXgyczJfZ015aVNZWVpKYmZHc29IVVowSGpEM004YjE2X3JTV1ZVNzJldWVlbjA3Vk5WTmZLNENGd2R6M3QzdklvX0FUOVdMQ1F0M1otcmNZWUpNakZ3ZE5wSTRCWkc2WDc2bng5X2tvYWFReG5IM3Q0YjFCb3Z0T0k3YXQ3SC1BMzRQeHhnQ1UwX3l3RUFN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 501
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
