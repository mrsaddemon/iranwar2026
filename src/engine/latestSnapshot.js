export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 510,
  "lastUpdated": "2026-05-04",
  "lastSyncedAt": "2026-05-04T21:16:48.915Z",
  "warDay": 66,
  "summary": "Direct military engagements between US/Israel and Iran/Hezbollah have escalated, involving attacks in the Strait of Hormuz, UAE, and Lebanon, with strong warnings issued by the US.",
  "lastNarrativeUpdate": "2026-05-04",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No ceasefire or de-escalation efforts are currently reported amidst ongoing military engagements."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
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
      "date": "May 04",
      "text": "UAE reports missiles and drone threats, with a drone sparking a fire at an oil site.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNanlpT3FhcW9OTGp2ekUwdDBYWjlfNWpTSUxTRFZkSnl1TUFfWE5nYkxfZ3UzQ3d3T1NVQ1VaV0g1b29KNWNoNlVHcFloZzg5N2k0ZU1UcEx2ckhqYTgtVlVIOFhHYnVSQThObVBxVlZVbXhpNjEwTzU0cEEyTjBIcl9zUzE5Mm1DbkU4VXQwRUkwWGw2V2dmQXpHRUhCV1VpcHhabXQwWnloQlFUdFJqV0JOYXdMUdIBuwFBVV95cUxNWGlSRGJ0YUsyLWJuQUt1RmdWSFROY0k4Um5sdFJfMkFKbDBPSFBvUU1aWTBYSE5COUdXbk5pUUd3ODZoWmtzeXNTU2tnb3k1aVJQY0hhXy05U3dkZWNEYUV2ZW4tc2k0YWtFZFNaYnZTeVZOaDY0U3h4T0hzTGs0MlUydGt6U0lZQUJfUi01X0JNbHdwbDhQNnFLRUpfeV9zbngzQUluQ29hVFA3Z041dHU3SU9yZllDVWtz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 510
    },
    {
      "date": "May 04",
      "text": "US and Iranian militaries trade shots, escalating tensions in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE9BRHBLbV80eVhCWEdzNzRVZndFU19MM3B2STl2ME9vdnNySUE4Z05pYVI3SVIzUEc5NXA2QW5NQzZSbFRQVXhJTDdoMUlQY3VfcjBvNXBhaE9XLXBjbzZ0bzNvb1hoUnRkVzA2VHNxNHMtUVkyUWtN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 510
    },
    {
      "date": "May 04",
      "text": "Former President Trump warns Iranian forces of severe retaliation if they target US ships.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxOeVFMN1ZfVVIzWWVLcVdUNW5MZW13aHJyc0pNa1AwMmJnTGlQVmRiSlNxMTQwOWY1bmNPOGt4eUhSWW9KSF9sNnBnWldyQ21ma24ydVR3NGZiM1RUYVk4eHBabjgzY0VRUHgyTFlvR2MxVTQ2M2tIU1oxY053dER5bmo3SUZqaDhHRGlSNFRkX0NoS2xHcWU5OFR4S2pVTnAxWWVkVnZMa0YtQl94WVM5OGxoaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 510
    },
    {
      "date": "May 04",
      "text": "Israel increases attacks in Lebanon, and ships are reportedly taken in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 510
    },
    {
      "date": "May 04",
      "text": "Hezbollah deploys a new weapon designed to evade Israeli detection.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNWm52RmRwa2xzRjZvNjF3eXpWdXdRVlJJejVqSXViVTN2aWVQSzF2Mm03VW1oQndfVzhkclo0TXFtZHBfNllrU01saW9QSi1scG1hMnZfRkNSM1kxOFcyOUZhUHFUaHE4T1ZWOWJrU2VyTktpVlhFeUtFQnJVaE0tcUFsQnVXS3Y0TjQwblM4VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 510
    },
    {
      "date": "May 04",
      "text": "Iran opened fire on US warships, leading to the US sinking 7 small Iranian boats in retaliation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMifEFVX3lxTE9odTcxemd2X0w1cEl5SGRMVllubzZqTmNweDVIQ2lqLTRCRnVORTYwQ2Jzd1JSZjBDdHpqRGh5NFZfLVZiUmV6V3F4Sm1xaTFHRzUyYzV2M29DYXVSaGxYRmxTX0hvWkZwSjE2eThsaTJtSExlTUMtcUpEYTjSAYIBQVVfeXFMTkVlbWF0dW1oTjNDR0x6eGhCM2Vtc3haNGp6SldOWC1pbWIyeU1WYVFpRGk1UlRYU19JeGZKUmExb05kQ0FQNWd4Z1ZieW4wc3lxLXVCemRMZGN1UkZ3T1VJaUlVQlF4MXJWaUhIbjdlNGQ4eTY3YkdhMXlXay1BNFdJdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 510
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (14 headlines)"
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
