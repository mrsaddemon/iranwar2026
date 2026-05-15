export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 650,
  "lastUpdated": "2026-05-15",
  "lastSyncedAt": "2026-05-15T13:00:59.665Z",
  "warDay": 77,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 14,
    "summary": "A ceasefire in south Lebanon has reportedly failed to halt fighting between Israel and Hezbollah, with new talks commencing amidst ongoing conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 56,
    "globalPressure": 67,
    "allianceInfluence": 62
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "May 15",
      "text": "Iranians are reportedly on edge as the threat of war resumption looms.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOdlN4VUNKQURBQUk2T1owMU5kdks5ZGptdmxtcTVjeGZQWGdBMmxEOERkQ2tuQ04yeXlOTnBCTTFxZHoyblZLZ1NqVFVIWUpJaTNfSm5TMEdIallUX0E0NDNxdHpETmp5RUd0Vnlra0dEOW94aE50c3R3b2hWbmh3cg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 650
    },
    {
      "date": "May 15",
      "text": "Chinese vessels have been allowed to sail through Hormuz as Trump meets Xi.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQclJTRkViZUdYdkdWMXBMRWd6MWxqb2R0dHFHakZIYWdlTUFvNzdXd1ZDdWhoa1p1aG9yQ2JNM3dOSjZjcXd4QnJVclpqV29IWnBvNXlIQzZUc1dIdUpqTlNJMUJCcjdna1BLWERTRm5qdFlCbnowM3JrV1FyeWtpNjJFNmllTndxbUc4UWQwbTNSTW92amNiMEUxR2VYbHNQeHFXTXRoVEdPLTNzczhKcmk1SnNFSlZoQVlz0gHAAUFVX3lxTE9KTENWQkhETTNfM3BMaHBOSzVneTJPenVhQmFwSDdxNm52UGxXaTFxNGo0LXdGaWJvaHkxSTFLdUczVWhHVkJtU1VIWkYwTkpidFJJYTFVSjVDVS1od0lMMEV5UXBQbDZFTll0UTFHd05MYy00SzJ1OGJKM3NhZC1vSVBIaTR0Wm1JLXhkZkI1RWh6VmNkSUN0aEtfZkxrUGw1d3RZQmljQ0hPTmtBMnpxbmZEZXdsQmhaX096UG1GMw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 650
    },
    {
      "date": "May 13",
      "text": "An Iran Update Special Report was issued.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxNeVJDeDJxeXNhbFZYX0xEd0hsOWtNalRvbVBpRDlKNzlYS3Nmdl81Tnh3T1ZwX0Q5MzB0QWhOMGJIRndmODRDQWwtREFNYklFMXhqSEVEcS1OZjdDWlVna2NLUy1lVVJqSUZDalE3Q0FzeWFGaHM5WC0yS3hlREZOSENnVUlBX1pBa3docmFtczJmU00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 650
    },
    {
      "date": "May 15",
      "text": "The UAE reportedly launched secret strikes on Iran during the war, attacking an oil refinery.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQMGZaTHQ2QzNRV3F5M2gyMTdERzBxVC1jMzByLUtYYWN3Vl8xSXJZTFVKZ1pVNUxUTUllallITEVublhBUl9FWjFoWWU1WHlIalktR0thTk9sRTUzZnowV1Nqa0lOaS1yakNadnAzZElfWVhpWDJDaWxsRWZweTg0c1NHNVlwNVNORklnc2thci0ybUdDVlQyX1JuTGk0WlhHcUl6WDdiMNIBrAFBVV95cUxOOE1Tcm8xajVaTXp5U25RSjZ3T21jOVpldHBvOEVMemF4WnZxTF9IRGJNbVVyWnZscGlGNjRMM05NVzB6SUFMMk1Ec0ljODVXcUVFUEpPUVpXUU43b01vakVLdWdKLVAxOUxxRjRhQTVMNnFNWjdFWElxOG9HWWRaSG9EWGFpWEtQbTlsWi1URkhmTFd4SUFvdjFMcndPTlNackhWWnJoMDFBTWRH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 650
    },
    {
      "date": "May 15",
      "text": "Trump threatens more Iran strikes if a deal is not signed 'fast'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 650
    },
    {
      "date": "May 15",
      "text": "Strait of Hormuz closure causes Diet Coke shortage in India, with food brands bracing for wider impacts.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi6wFBVV95cUxNellTdmg0eDlMb3c2U25sUHVvUHJ1MGMtdjdtY2FiTGd0eFh1U2NrRnZ0WFdkNldLSlRHOGZvdFNhcy03dk4xU25JclZYUEwtZHNkOHJScGZVMjB2VmdkejJtTVJsbzZxV1VVRkNmN3NCV2V0QVRHdUY1a09ZQUZzMGxsSmUtcWx1ekFoelYwd19VT0gtMUJTejZGNEhXQnp4MWxLbXZEdElmdEJ3cGw5RTFaeF9FdzlqNjJOTGhkbFZ4YmV3Qmx3VlB6Snk4aEVJSWJTbkxBUVg0MmhnZ0RHUUhablZHX3J4SUhJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo Finance",
      "latestSinceUpdate": 650
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
