export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 797,
  "lastUpdated": "2026-05-27",
  "lastSyncedAt": "2026-05-27T23:00:45.437Z",
  "warDay": 89,
  "summary": "The US has renewed strikes against Iran following perceived threats, while peace talks continue amidst Iranian threats of retaliation and escalating conflict between Israel and Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-05-27",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 15,
    "summary": "No active ceasefire is reported amidst renewed military actions and strained peace talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "date": "May 26",
      "text": "U.S. officials reported seeing threats from Iran before renewing strikes.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 797
    },
    {
      "date": "May 26",
      "text": "US launched new strikes on Iran, targeting missile sites and boats.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WaDJGdEZ0YndpVVJXUlUydGhtZnZWVUFDdnR6MUdTSmhQNVMyZmRKUGMxZC0yTUNNTGw1Q2Q1M3VsNWVacFJ2X3cwd1BiOTd4b1BSYWxBM1Bodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 797
    },
    {
      "date": "May 26",
      "text": "Iran’s IRGC threatened to retaliate after US strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTFAyUmx3c2o0WXpFWHl5T21FYnNhVzZmUXZ5WEp5cnpPc0lVQjVaUlhZYnI0eHFHbmQtaFdxSlVwZDFpbUVFZC0tdTNjdGJUbk03TF93aU9MMVM0MG1SZjdTOEhVR2JHbmxfOHEwZmRLSGlZZEQ0ekFuVnVKY19iQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 797
    },
    {
      "date": "May 26",
      "text": "Israel moved deeper into Lebanon, while Iran peace talks were strained.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPX200Zzhvc01oMWR1S3hFVnRJc2J6SU9CLS14aG1lMjY1U290ZHk4Qk94Ty1NZjd0U1FCVldpRlp5ZnM0cVlXa2R0ZWxZeV94eWp1Mkx2VlRGTkNiYWdqaFBKT1lrSXNJQTU1VjBUWXVMUndKd2hPZHIxaXdMVHFDY1pVVUZ5UkpHemR5RG5MeG9Zdjk2eWFZaFBFSnNFUWxXTW9JQ1c5Z01SVDIydE9wLWJMTmw1S083em9aWnUxRdIBxAFBVV95cUxOT1lnSWQ5SG1ld25mc3pTUTBNelpxWFYwQ0xfRDF6Wk82SHRGVWZBeGlpQmJ6dFhaVF80QTBlbmxqUnNtZkdUYjkzbHgteU1pdXBkT0MxU3d4MzhXR19kNVNMMThtNkJHNkdYN0dXUzFVUHBFdEk4OHE2QWVRbmwzS0FGZ2hYVlRVSWl3Nk5VN1R3NU43LTlTb2xSUEg3LXItSDRpYzhPRDBneXROVlJKRmJsUlJKZTU1MGxjYTM2dE9RQzRY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 797
    },
    {
      "date": "May 26",
      "text": "A soldier was killed in south Lebanon by a Hezbollah drone, with another seriously wounded.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQRVVDc05SZ1VYcjMxb3BjQzdWdVdTTEk2c3ctSm5nb1hJNnNHVlFKMFp1RjNNd2swTU93azBWQnZENENEX2RxYXljeGdQMkhLM1g4NnZzVzlJRmtlWGExSUxNSU5xRW8zUXJkZXN6WlhTRjl3cEZvNUNhOUVKY0dWX3ZTQ0dCaHNZQU1NZEhCMG4xM1dSS3dZLTVWSkUtanJKWEhzc2hwbW1fX3fSAbABQVVfeXFMTi1Ma09FTUlxUUs3RDYwVmlFRWItM3hKQzdxS3lIdUU1OUNRRkxoeHRVeGxWeUVLS2lTLUhULWZrREt0Z1JDUWFrVnFDZ3BNQ2VWNWN2SjFUcWRhQV9nSW11LTJINE5heHRWbHZCd2Z0UlFLdU1EeE4xRHFuOHFiam1Jbkdlcm84VjZFVEQweDFvRzFTbFFLWk1DV2lVYjB2OVpEX0NPcGNoaEtmbko0NEI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 797
    },
    {
      "date": "May 26",
      "text": "Multiple Hezbollah explosive drones impacted in northern Israel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5YWUZHZ3J3UFVkcEpRVkJVTVQ0VkZJNi1fYTI3a0FhWWhic3Y4T3JjeHhmTi1jZVFuY0cwRVJraHFUTmU1N2hpVWtVbzhnN21iM0VmemdyWFJUV182dHJsVzBic3BacXRSZlpHRVBn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 797
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
      "perspective": "US/Israel",
      "headline": "US and Israel Act in Self-Defense Amid Escalating Regional Threats",
      "summary": "The United States asserts its recent strikes on Iran were in self-defense, targeting missile sites and boats. Concurrently, Israel is intensifying its offensive against Hezbollah in Lebanon, with officials stating a need to combat drone threats and secure its borders.",
      "tone": "defiant",
      "latestSinceUpdate": 790
    },
    {
      "perspective": "Iran",
      "headline": "Iran Condemns US Aggression, Vows Retaliation for Ceasefire Violation",
      "summary": "Iran accuses the US of a 'gross violation' of a ceasefire through renewed strikes and warns of retaliation. Tehran reiterates its resolute support for Hezbollah, viewing Israeli actions in Lebanon as an extension of regional aggression.",
      "tone": "defiant",
      "latestSinceUpdate": 790
    },
    {
      "perspective": "Global Markets",
      "headline": "Strait of Hormuz Closure Threatens Global Oil Supply, Driving Prices Higher",
      "summary": "Analysts are warning that the Strait of Hormuz could remain closed for months due to the escalating conflict, potentially driving oil prices to new highs. Despite US Navy efforts to guide ships, the ongoing hostilities pose a significant risk to global energy stability.",
      "tone": "anxious",
      "latestSinceUpdate": 790
    }
  ]
});

export default LATEST_SNAPSHOT;
