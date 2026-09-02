export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2328,
  "lastUpdated": "2026-09-02",
  "lastSyncedAt": "2026-09-02T08:50:52.350Z",
  "warDay": 187,
  "summary": "US and Iran are engaged in reciprocal strikes, with Iran claiming attacks on US bases and the US completing new military operations, while oil tankers have been attacked in the Strait of Hormuz and Hezbollah continues drone attacks against Israel.",
  "lastNarrativeUpdate": "2026-09-02",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is currently active between the primary belligerents, with ongoing military exchanges."
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
        "precision": 0.8,
        "aggression": 0.7
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
    "nuclearIndex": 15,
    "escalationLevel": 80,
    "oilDisruption": 75,
    "tradeImpact": 68,
    "sanctionsPressure": 63,
    "globalPressure": 80,
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
      "date": "Sep 01",
      "text": "Iran claims attacks on US bases in Bahrain, Jordan, and Iraq.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQclJVZlVOS0hmbG9xRjFzR3JBc3ZzWmtUS2RKVGJnYjN0bnFBb3kwNDQxdTZaRUZpS2QzaXZwNXh1RHBjMnJRaE5MUEZsendhbzAyRnpuRGxHekUzX2hLTWFZTkU2ZHVGekR0NDBUaW8xTDRSTDhMSXBSN2NvaTIwOGI2bGRjTTF2a1V0aVdWN2ZSWTdScUV5V3ZoQnFnNUVuUGhidV9MdU53bVEwZk0yalZhOHd5Zkl3N1N1ctIBwgFBVV95cUxPQlNQQVdCYnlaT2lycU4tR0FpenhMRTM4MDR3ekZoTnVIc0V3WVFMWkRXc2VCR0laSURhR1pXaVNvSlNlcFlTUnZJbi0yNHNNQWMwUWp1ZzZTWXBZam9meEZzaGlhd0xiU2hNT0F2VzUtTUdrQXo4RGFEWDYtZmx5MXBtOGZwNHN3Mm1FWkVabUMwOEZ0dUxrbkhSTVUyRXlteGY0Y3NPRkhpNHk1NkdTTlV1OGhlUG96cUxWWGFHX1dlQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2328
    },
    {
      "date": "Sep 01",
      "text": "US military completes latest wave of strikes against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxPZEFCR3pYMFczek00TGhzVl9ram9qaUExZmVLWk05OGRzalVmc1J1dEcya2dON1I3TFRJNjZMRGxSeTVpZzVmMVdMVTFzMlFJWl9Vai01TVRFRWJ2eTlmU2ZuVW1QaHU4NzZneE5ndjRydTdRb2JrMWx6cnd4dUpwYg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al-Monitor",
      "latestSinceUpdate": 2328
    },
    {
      "date": "Sep 01",
      "text": "Two oil tankers carrying Saudi oil attacked in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxPbTdiazZLdjJmZFUzaDZwUHpSV3R0b2lubVJLcXdtNmk1WEZjbU96MjJveEl4dl9FWjl3V3kwTVQtY0N5WnhINS1PSXoyNUNtYXpub0EwWVBCZklqaTJPTXN0QmxaTWJ3b284NWx4ckg4S3NONkl4WEVnSzdaaV94cUJ0YXI3UlZHV3RwZ1B2am8xMHc2VnV1TTBjcExjSEg1R2d0RWhuUkY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2328
    },
    {
      "date": "Sep 01",
      "text": "Hezbollah launches explosive drones at Israeli troops in Southern Lebanon, prompting IDF strikes.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2328
    },
    {
      "date": "Sep 01",
      "text": "Israel is expanding its presence in Lebanon, with BBC visiting occupied areas.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQbTZSWUVZblVmMG90ckpkSGpiWktGQThRd2lMZFdZMWpEemdMV2N1eklCYmhSQy05NDlDY2xSekJNLW8yUjh2YlY5SFJTbDcyWVIzMzQ3V3poaGpMaW9KOW5QY3p5ZGZ1RHYyNFFyc1Jna2k4ZWJCcVNHa01FTlJXNzFIZlVjZy1DNGdra1NHU01DM2NWamtoeEVfM0tGMlhaZWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo",
      "latestSinceUpdate": 2328
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
      "perspective": "US Administration",
      "headline": "US Vows Strong Response to Iranian Aggression While Weighing Options",
      "summary": "The US administration, led by Trump, has responded to Iranian actions with military strikes and strong rhetoric, including threats to 'hit them hard.' However, there are also considerations for 'limited strikes' to curb attacks in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2320
    },
    {
      "perspective": "Iranian Leadership",
      "headline": "Iran Continues Retaliatory Strikes Against US Targets",
      "summary": "Iran's IRGC has attacked US bases in Jordan following US military actions, indicating a continued willingness to engage in direct conflict. Iranian actions, including mine warfare, aim to challenge US control in strategic waterways.",
      "tone": "defiant",
      "latestSinceUpdate": 2320
    },
    {
      "perspective": "US Military/Defense",
      "headline": "Pentagon Concerned About Sustaining Long-Term Conflict with Iran",
      "summary": "Leaked documents and reports indicate significant concern among American generals regarding the potential for a prolonged conflict with Iran. Questions are being raised about the US military's capacity to sustain such an engagement.",
      "tone": "anxious",
      "latestSinceUpdate": 2320
    },
    {
      "perspective": "Regional Stability (Israel/Lebanon)",
      "headline": "Hezbollah Poses Acute Challenge as Israel Expresses Discontent",
      "summary": "Hezbollah's use of FPV drones presents a significant threat to Israel, which is reportedly unhappy with the slow progress of Hezbollah disarmament efforts. Lebanon is also attempting to assert its influence against Iran's presence.",
      "tone": "strained",
      "latestSinceUpdate": 2320
    }
  ]
});

export default LATEST_SNAPSHOT;
