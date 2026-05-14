export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 640,
  "lastUpdated": "2026-05-14",
  "lastSyncedAt": "2026-05-14T16:53:28.263Z",
  "warDay": 76,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-05-14",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 15,
    "summary": "Ceasefire language is present across the source mix, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
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
    "nuclearIndex": 45,
    "escalationLevel": 38,
    "oilDisruption": 62,
    "tradeImpact": 35,
    "sanctionsPressure": 49,
    "globalPressure": 52,
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
      "date": "May 14",
      "text": "Iran Update Special Report, May 13, 2026",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxNeVJDeDJxeXNhbFZYX0xEd0hsOWtNalRvbVBpRDlKNzlYS3Nmdl81Tnh3T1ZwX0Q5MzB0QWhOMGJIRndmODRDQWwtREFNYklFMXhqSEVEcS1OZjdDWlVna2NLUy1lVVJqSUZDalE3Q0FzeWFGaHM5WC0yS3hlREZOSENnVUlBX1pBa3docmFtczJmU00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 640
    },
    {
      "date": "May 14",
      "text": "Iran war live: Chinese vessels allowed to sail Hormuz as Trump meets Xi",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQclJTRkViZUdYdkdWMXBMRWd6MWxqb2R0dHFHakZIYWdlTUFvNzdXd1ZDdWhoa1p1aG9yQ2JNM3dOSjZjcXd4QnJVclpqV29IWnBvNXlIQzZUc1dIdUpqTlNJMUJCcjdna1BLWERTRm5qdFlCbnowM3JrV1FyeWtpNjJFNmllTndxbUc4UWQwbTNSTW92amNiMEUxR2VYbHNQeHFXTXRoVEdPLTNzczhKcmk1SnNFSlZoQVlz0gHAAUFVX3lxTE9KTENWQkhETTNfM3BMaHBOSzVneTJPenVhQmFwSDdxNm52UGxXaTFxNGo0LXdGaWJvaHkxSTFLdUczVWhHVkJtU1VIWkYwTkpidFJJYTFVSjVDVS1od0lMMEV5UXBQbDZFTll0UTFHd05MYy00SzJ1OGJKM3NhZC1vSVBIaTR0Wm1JLXhkZkI1RWh6VmNkSUN0aEtfZkxrUGw1d3RZQmljQ0hPTmtBMnpxbmZEZXdsQmhaX096UG1GMw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 640
    },
    {
      "date": "May 14",
      "text": "Iran War Updates: Trump Says Iran Must Make Deal or Face Renewed Attacks",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxPMXlNSERRU0xnN3FTTVppbW1ITWRjOXVROE1vNndNTXVocVdPVzljQ3Z6Y1pwRWFISm5QUVJocUtPYk5jNWRZdzBTU3pYcDVwdHBLcmV0Sm96MFo4Zm1Zd3ZQVHRiYVJWalg4TWk3a2ZUeUVMSmVfMDUyTUdLQW1GV3Zzaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 640
    },
    {
      "date": "May 14",
      "text": "Iran war updates: Tehran vows ‘no retreat’; Vance says US ‘making progress’",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNNDNTVHIzQV9CZkVFNkxuZ2YxVGRUX3VsOFFMN2JFY0VCeVNob2o3YUdBbU5DUFFjTndDSmJIcnk3UVRMODFHNk15blgwSy1tX2xvUDh6NnN4ZXVVNXQxek91dExtTlJlMFh0Z0Z3ZDhDbEdtVmtFMTFUSnBNbW4xQURuR2hyTXJ0U0czaWFrVnhYSU1CQkY1S1lNVnJoN2tzaE51X3h0ZldiVjJUYmNlVDRPMnNKbWM2dTNKN3EySdIBxAFBVV95cUxPX1ZoMG9wT0owLWdmZjRCd3J4NEdydUtNS2M4OVpGYVZ6MDZOWDRnWmxZVmZXRDB2ZmVKaWVyTC0xM2d6Y3dKV09PU21HQ2Fya0Yyb052V3YwT0RmQUM2OEZDei1jQThPdjVUY3p2MGN3YWFyTTVIWWstTDVHVGFfdXNPTEYzTG5WQ2RiMWl1eFNTclNGaXhyRzdnQ1ZPOTlndWE3d2pubnNjUEN0WTFqUWwtZUo1Ymd0aHl4QUVHSk8ycHBs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 640
    },
    {
      "date": "May 14",
      "text": "UAE secretly launched strikes on Iran during war, attacked oil refinery — report",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQMGZaTHQ2QzNRV3F5M2gyMTdERzBxVC1jMzByLUtYYWN3Vl8xSXJZTFVKZ1pVNUxUTUllallITEVublhBUl9FWjFoWWU1WHlIalktR0thTk9sRTUzZnowV1Nqa0lOaS1yakNadnAzZElfWVhpWDJDaWxsRWZweTg0c1NHNVlwNVNORklnc2thci0ybUdDVlQyX1JuTGk0WlhHcUl6WDdiMNIBrAFBVV95cUxOOE1Tcm8xajVaTXp5U25RSjZ3T21jOVpldHBvOEVMemF4WnZxTF9IRGJNbVVyWnZscGlGNjRMM05NVzB6SUFMMk1Ec0ljODVXcUVFUEpPUVpXUU43b01vakVLdWdKLVAxOUxxRjRhQTVMNnFNWjdFWElxOG9HWWRaSG9EWGFpWEtQbTlsWi1URkhmTFd4SUFvdjFMcndPTlNackhWWnJoMDFBTWRH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 640
    },
    {
      "date": "May 14",
      "text": "Iran war updates: IRGC warns conflict may resume, says it’s fully prepared",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxONHl6SE8tQW1PQldFa3E2YS1xVGluSkhhQy10eERhODBRazNrX292Tzdwdk9oUnlrQi02TXhKZjBBa2VnWDZpdGFQY19idU8wc1BKUkUzcHZfejI5ZmptaGZmSk12RHhXaEtEVXB6MjlmYm4yNEljVnpaOFdkQU8wRFlVdjVkSmtmN0pWWXBRbGo0XzZtbktKekFyVUJIelRTRnZwMHpEVFh2bEM3dTdYcnlYcERsUlUyQnY40gHAAUFVX3lxTE94aS01bGVkMXdRclRFUklxMVpqbzdienNVRTVNVEU0TDZ3RXQycVBESk9YanZGWDVZaktRT3NVYUE2SHVUeGN5RW9LUkhQY29TdTZBdnpNaW1ZdDgzekpUU0xabGJJQVd4d3d2VUI0ZTFRemtpMkVBZHZiUWNmZUFoZ3NGT2dHc2xlQlRxYlN2akN4eldQRE5mYTBRR2hvMTRuVDhFQ19kTmgtTGZkRVp1amhudTFLai12eWlXbTJFdQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 640
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
      "perspective": "Iran",
      "headline": "Tehran Vows No Retreat, Prepares for Renewed Conflict",
      "summary": "Iran maintains a defiant stance, vowing 'no retreat' and actively preparing for renewed war through IRGC drills. It has also expanded its definition of the Strait of Hormuz and deployed fast-boat swarms, signaling readiness to repel attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 634
    },
    {
      "perspective": "United States",
      "headline": "Trump Demands Deal, Threatens Renewed Strikes on Iran",
      "summary": "US President Trump has issued strong warnings, stating Iran must make a deal or face renewed attacks. US officials indicate 'making progress' in negotiations, but the Pentagon is considering renaming the war if a ceasefire collapses.",
      "tone": "strained",
      "latestSinceUpdate": 634
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Hezbollah Escalates Tensions, Threatens Beirut Occupation",
      "summary": "Hezbollah has introduced unjammable drones as a new threat to Israel and urged Lebanon to withdraw from direct talks. Reports suggest Hezbollah is planning to occupy Beirut, further complicating regional stability and normalization efforts.",
      "tone": "anxious",
      "latestSinceUpdate": 634
    },
    {
      "perspective": "Global Energy/Shipping",
      "headline": "Strait of Hormuz Tensions Threaten Oil Flow",
      "summary": "The world awaits the reopening of the Strait of Hormuz amidst Iran's expanded definition and deployment of fast-boat swarms. Despite an Eneos-linked tanker crossing, the attack on an Iranian oil refinery by the UAE highlights significant risks to global oil supply.",
      "tone": "anxious",
      "latestSinceUpdate": 634
    }
  ]
});

export default LATEST_SNAPSHOT;
