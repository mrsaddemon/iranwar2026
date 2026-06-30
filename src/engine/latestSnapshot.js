export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1115,
  "lastUpdated": "2026-06-30",
  "lastSyncedAt": "2026-06-30T05:57:35.542Z",
  "warDay": 123,
  "summary": "A fragile US-Iran ceasefire is in effect, marked by a pause in strikes and ongoing talks, but strained by conflicting statements, recent violations, and escalating regional tensions involving Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-06-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 2,
    "summary": "A fragile ceasefire between the US and Iran is in effect, marked by a pause in strikes but strained by conflicting statements and recent violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.6
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "Jun 28",
      "text": "Fragile US-Iran ceasefire strained; Iran's IRGC claims destruction of 8 US military sites in Bahrain and Kuwait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOam5lWGFqNWVZWW5aWnBwNGlhZEhGNlZxSEJMRW53YjYwQjJ0OXVTSVhJeGI5aDBhV1BPdXg0b1B0RGg3N2dMbFh3MHRxcFp1MFljZTlsNFgtYmxsSThLRnlBWEtXTS05eXBDSTZfSE03WTRYLTM3MkxOUjhBRXRtNlVrRTVSSVQ0LWRyVWNjUUJSc0FWTGl4QWtTaEx5NGxxdXJ2ZHJuNTc5dXRUakt0TlpySWZkSy1xVW82QXJYd9IBxAFBVV95cUxQN1E3WGQ0WkNTVjFiODlwR2o1UDVobVdkSnVSbkpwQTRQZ2xweHBWZnh6NlRoZkZTOTkxM1VyU083S3pfMnVVVW5UNUc1bDZtdkoxNDNvYWFUeTc4b0MyUnJaWFFBQ3ZiYVV4QnIxODZxUi1UODBjOGphclRLR3JsWVNzRU9nV0tFQkdvSWpWRE4tcDlIXzVUQm5RVlU3UW40TnJYRkFKaHBBaE45ekNGYmxINWtRUnJBRU15OFBfQmFjMnRj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1115
    },
    {
      "date": "Jun 28",
      "text": "US and Iran engage in tit-for-tat strikes; Trump threatens to 'complete the job' in Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNSWJpN1VxTmpMb29JZjgzTnVqajU0dXJmVFFxNEF4T3MzenZXWk9FLW1YOHpGdEk0c3lrQU56akxjeFQyM3lwaTdJWHVRZ2FTSllkYk9PcmsyRkZtX3Q2TkVtWkIwb0ZWbmhxa2I2VElEWnA2YllZQm5MZ3B2R2RZenpYQ0FHazAzVkM3cXBIU093MW9TQ1FFbmdkTW5KZWxpTE5hMi13cDdUVlZNZUwtMzZ30gG3AUFVX3lxTFBlU01XakVNamNDTHFEVmphZlFVVmRJTDFPLUlyemRtXzRDNWJNZC1WZ1dXdjNRbmhqZElaeDV6OXhHRW5ZN3E2bW5OYjBjWkV4d2xIZEJfd2VOc1NwSk1QTERFczdUUlNHQ1Y0aC0yWXVlZmVzX3UtZnozbnFQSXU0S1lFUk96NDNwYUd1LUowWG9WeEc5OEdvbEpJbTNnSnZQcHByQzA3R3FMVFZlclNiLWhyanFhVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1115
    },
    {
      "date": "Jun 29",
      "text": "US and Iran agree to halt attacks and renew talks, despite conflicting statements regarding a meeting in Doha.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizwFBVV95cUxOa1VBd0lTLXNIN1ZWWnpuTUVydFpzcmdpU2ZnRFRjVlk2djhWNk1HNi1Hd1V4Q3d4czhkOHE3TzdmQ045Wkl2bUktNURLTTdNU1ZJZGhKbDd5YnY3RXZCak5OTXZNTVM1V1lpM0F1WG9tOTJOYy1zRUY4VG8wazNTU29wRFh5clkzMnFxeWdBWUdyVk1GVmhWUDRmT3E5WTJkSmlaWFJWYk5RUXQ3QnRiTWUyRE81T0d1ODhYSDJEM0FTNUxBZXFmbGtoX3F4SkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1115
    },
    {
      "date": "Jun 29",
      "text": "Iran threatens a 'complete halt' to talks after trading strikes, while a Washington official states talks will continue.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1115
    },
    {
      "date": "Jun 30",
      "text": "Israel warns war could resume 'within two days' and destroys Hezbollah underground infrastructure in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOeHpnQ2htRldyN2wyQkhMc0JqSVdwbDA5VkRCZklRS0t1QURDWHFWRUJEM1BxNnFhN0hCcnRNQ3hvQm9USV9wSkhKZXl2OXJSc2xObjFxRTdCNXVaUVNsdlVsZHd4dDNwVHZTUU5LY1BodWRrZkZHdU1NcFVGMDhfVmpJTnkwSDc4NzdBWTlVUnhKaFg2ZTZiSnNFeDdteG5TVmZDbEtFRGhLSk0yNDFabDdUTDV6SmFJejQ0akZ4OWg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1115
    },
    {
      "date": "Jun 30",
      "text": "Iran calls the Strait of Hormuz situation 'sensitive and complex' and discusses controlling the strait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxOVFNwUDZyaW5TYVZ1alBuV1FGWlcwUlZETlowb2czZ0RjdjJ1UHZ5UU5YRGszN1F3THlENG9KMkhTV2lVblU1Q2tUOVBnd0VjaUVrajZKQ3VoRzBaUnZlREZnd1hOZS1VOTVSd2JJQnBWT0x4Rm5HRjktRE9kRU5uWEx1OHR4eVRUWGxhOGpIZ1Vqa0lvR1U0dFFRUVVpUDBuRDJCTl9JQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1115
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
      "perspective": "US/Western Perspective",
      "headline": "US pushes for talks while responding to Iranian strikes",
      "summary": "The US seeks to de-escalate tensions through technical talks in Qatar, despite recent tit-for-tat strikes and Iranian claims of targeting US sites. Washington maintains that talks will continue.",
      "tone": "strained",
      "latestSinceUpdate": 1114
    },
    {
      "perspective": "Iranian Perspective",
      "headline": "Iran claims successful strikes and threatens talks amid US pressure",
      "summary": "Iran's Revolutionary Guards claim to have destroyed US military sites, while Tehran threatens to halt talks after US strikes. Iran views the Strait of Hormuz situation as sensitive and complex.",
      "tone": "defiant",
      "latestSinceUpdate": 1114
    },
    {
      "perspective": "Israeli/Hezbollah Perspective",
      "headline": "Israel acts against Hezbollah as regional tensions rise",
      "summary": "Israel has destroyed Hezbollah infrastructure and warns of potential war resumption, while Hezbollah rejects US-brokered security deals as a surrender.",
      "tone": "anxious",
      "latestSinceUpdate": 1114
    }
  ]
});

export default LATEST_SNAPSHOT;
