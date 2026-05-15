export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 646,
  "lastUpdated": "2026-05-15",
  "lastSyncedAt": "2026-05-15T01:32:31.084Z",
  "warDay": 77,
  "summary": "The Iran-Israel conflict continues with a fragile ceasefire largely failing, marked by Israeli strikes, Iranian ship seizures, and ongoing fighting with Hezbollah, while the US and China engage diplomatically regarding the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 15,
    "summary": "The ceasefire between Israel and Lebanon has largely failed, with fighting continuing and violations reported by multiple parties, despite ongoing talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 56,
    "globalPressure": 67,
    "allianceInfluence": 57
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
      "date": "May 13",
      "text": "Iran Update Special Report released, detailing ongoing conflict developments.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxNeVJDeDJxeXNhbFZYX0xEd0hsOWtNalRvbVBpRDlKNzlYS3Nmdl81Tnh3T1ZwX0Q5MzB0QWhOMGJIRndmODRDQWwtREFNYklFMXhqSEVEcS1OZjdDWlVna2NLUy1lVVJqSUZDalE3Q0FzeWFGaHM5WC0yS3hlREZOSENnVUlBX1pBa3docmFtczJmU00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 646
    },
    {
      "date": "May 15",
      "text": "Chinese vessels permitted to sail through the Strait of Hormuz following a meeting between Trump and Xi.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQclJTRkViZUdYdkdWMXBMRWd6MWxqb2R0dHFHakZIYWdlTUFvNzdXd1ZDdWhoa1p1aG9yQ2JNM3dOSjZjcXd4QnJVclpqV29IWnBvNXlIQzZUc1dIdUpqTlNJMUJCcjdna1BLWERTRm5qdFlCbnowM3JrV1FyeWtpNjJFNmllTndxbUc4UWQwbTNSTW92amNiMEUxR2VYbHNQeHFXTXRoVEdPLTNzczhKcmk1SnNFSlZoQVlz0gHAAUFVX3lxTE9KTENWQkhETTNfM3BMaHBOSzVneTJPenVhQmFwSDdxNm52UGxXaTFxNGo0LXdGaWJvaHkxSTFLdUczVWhHVkJtU1VIWkYwTkpidFJJYTFVSjVDVS1od0lMMEV5UXBQbDZFTll0UTFHd05MYy00SzJ1OGJKM3NhZC1vSVBIaTR0Wm1JLXhkZkI1RWh6VmNkSUN0aEtfZkxrUGw1d3RZQmljQ0hPTmtBMnpxbmZEZXdsQmhaX096UG1GMw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 646
    },
    {
      "date": "May 15",
      "text": "Iranians are on edge as the threat of war resumption looms, with peace talks stalled.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOdlN4VUNKQURBQUk2T1owMU5kdks5ZGptdmxtcTVjeGZQWGdBMmxEOERkQ2tuQ04yeXlOTnBCTTFxZHoyblZLZ1NqVFVIWUpJaTNfSm5TMEdIallUX0E0NDNxdHpETmp5RUd0Vnlra0dEOW94aE50c3R3b2hWbmh3cg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 646
    },
    {
      "date": "May 15",
      "text": "Tehran claims the US violated the ceasefire by targeting Iranian ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQWmMwcHRNRzF3SVdqU3A3dFJpS0YyUFp3aFhncHVDZ0FQd0xXSWJwdTFteUEya1d0VEkxazRtbkNyMi1hVV9SdTBBdktJM29GaHlOdThaS1M5cUlwdHo2RTFiSDNZLTlJb3VTTTFYdlVjemlYX2ZaWm9ubUhLOTdTUGdnMDZpVFh3RHlvbWZLODM3ZmlDeVFMRkJ0RlZNSDIzNWVNc3Z4UlpScGZheHdteTl2YUxlYnotWDFJ0gHAAUFVX3lxTE85dVRselp4VWZ0QXpJTXJTaEs2aS1tOUdGbXJjdVhiSXZ0TkxlMFI1RUdmZFVENFhQSjRQYk45ZzR4X2lpcU5XOHZwQ0JEcUtHaDZIS0FXNmlScjhhNUdmLXAwNmpqMkRPS3RTNGR2dFpHT3doWGVyTHRGUklYMm5qcDdjRTJKREQ2YmptMVctVVRsc08wUlNDRFBwOTFORUtaVTFSY1R2NDNJX28zZ3pLYzdNcXlWOGtwNVdpZ1Zxcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 646
    },
    {
      "date": "May 15",
      "text": "President Trump threatens more strikes against Iran if a deal is not signed quickly.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 646
    },
    {
      "date": "May 15",
      "text": "Israel strikes Beirut for the first time since the Lebanon ceasefire was declared.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "dw.com",
      "latestSinceUpdate": 646
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
