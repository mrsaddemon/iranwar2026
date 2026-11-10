export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2720,
  "lastUpdated": "2026-11-10",
  "lastSyncedAt": "2026-11-10T15:44:22.417Z",
  "warDay": 256,
  "summary": "Despite claims by former President Trump that the US war in Iran is 'effectively over' or at a 'status quo,' reports indicate ongoing US-Iran exchanges, Israeli threats of renewed strikes, and concerns over regional escalation involving Hezbollah and the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-11-10",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No formal ceasefire or de-escalation agreement is reported, despite claims of a 'status quo' by some US officials."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 70,
    "escalationLevel": 75,
    "oilDisruption": 60,
    "tradeImpact": 57,
    "sanctionsPressure": 62,
    "globalPressure": 75,
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
      "date": "Nov 08",
      "text": "Trump states the US war in Iran is 'effectively over' and plays down escalation concerns.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMib0FVX3lxTE82aVVBM1M2V2JiUGZLeXU4Xzd6YmV3RVNpVnhPM3U1bFdPYmRUcjNtc3d6YldOczdHNmN4Umx5MmU4eldmbGxSTUdBSW5DaU9xUVRqQ2E4UWZ3bzhjaXE2MFg1TEVkUGtENzllWU5XOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2720
    },
    {
      "date": "Nov 08",
      "text": "A drone hits northern Iraq, with the US blamed for strikes on Qeshm.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNZ2pabWZfN2E3YU9qRklmaHc0MzBjOTdPZHk2S1hhT01UUXNNV0tuRWx3eU5RNG5LenJsckVSRFZkM1VsM3FwQVR2dUFDMV9ZUG1tb1ZkMDcwNzFOMGp3Skt1eGV2YWplU0JuREhFdTl1OTJNUS11dHpsNEZ4VFdhS0U3UnlpVHJTamZjYlE0VUE1YWhwemlYelZKWUE0ZDJtMXV2Z2NhVDhXMm9SamYzZTRodTRSVVhuVkh3NlRR0gHDAUFVX3lxTE5OaGh3UU1EdDgzNloyMU51dWowWDhrby1kSXBpNFFPa1hwdFQ4Wi15X09VTTJNbThrTjBRWTdDUGFKeGMyM1NQdTllYm1RMUdXOVA2UVRzODdPTGhta2RvcmxyanEwbnd6c1VYWGFFcjZKemkzaE95RjlWc2lzaDZIRWdyb3ZPT0hTZnM1SVlRUmFsYmhpeXBka1BSVzJveUR3OXZQUXFPaWZuenRrRHoyNHlEN2l6UjR3V2hoMko0Y05UMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2720
    },
    {
      "date": "Nov 08",
      "text": "Israel indicates readiness to resume strikes on Iran as the regime aims to rebuild its nuclear program.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2720
    },
    {
      "date": "Nov 08",
      "text": "The U.S. and Israel reportedly draw up plans for renewed strikes on Iran after elections.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2720
    },
    {
      "date": "Nov 08",
      "text": "Houthis claim Riyadh attacks, while the US hits a vessel near Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOYm1tV0FRYTVGTGJoajQ5V2l2QmNha2E2aHFyUk1VWnJseVdKUlNwaEdDWm9JSnEtbnlhRUpjR2l1ckkyR244Q3hBeUw2ZWt4RDI4UWp2a2lxaTB5SlVLSmlocmpfV1U3a1J3akp1OVpBdm9FQ2dZNXlYMXJHdWhpZFdLRWFLaUxSQkhfemJsUjFuYlVJMHNBS2tyNjNUZ0cxdEtlSlZRcW9IbExsOGZVbUEyN1lmNUVvQWRNQ9IBwgFBVV95cUxOdnpfSENoUUlXRWp0NVJkUjJYZkFmSVNXcEVGZUhtZnRtU1VWQ2VRM1J0Yk1ZeDJVOU9wRjJRX3FLZG5GdThfOW54bkVvTWRGS0tiTFVLOWV5Q1l4NE12WEI4VkdnYnJiSkxSZ0o1S3doNVMyNjNvT29iMi1uQy01TXBKUVVXMUpvd1Qzdk1oODVBMjlwTF9MRVFKMUFSeXNRMGdKN3pweF85R2hSSURGRENvc0gxb0hob3B6NjJXQUNWUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2720
    },
    {
      "date": "Nov 08",
      "text": "The U.S. and Iran exchange strikes on islands as they fight for control of the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2720
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
      "headline": "Renewed Strikes and Pressure on Iran",
      "summary": "The US and Israel are actively planning renewed military strikes against Iran and have conducted limited operations. The US is also expanding efforts to restrict Iranian commerce, signaling continued pressure on the Iranian regime.",
      "tone": "defiant",
      "latestSinceUpdate": 2716
    },
    {
      "perspective": "Iran",
      "headline": "Downplaying US Actions Amidst Regional Tensions",
      "summary": "Iran is downplaying recent US military actions and task forces aimed at disrupting its transport routes. While facing direct strikes and increased pressure, Iran's direct response to these specific actions is not explicitly detailed.",
      "tone": "skeptical",
      "latestSinceUpdate": 2716
    },
    {
      "perspective": "Iraq",
      "headline": "Securing Oil Exports Amidst Regional Conflict",
      "summary": "Iraq has reached understandings with the US to facilitate oil exports through the Strait of Hormuz, aiming to mitigate economic losses from the ongoing conflict. This indicates a focus on economic stability despite regional instability.",
      "tone": "neutral",
      "latestSinceUpdate": 2716
    },
    {
      "perspective": "Lebanon",
      "headline": "Fears of Escalation Amidst Border Tensions",
      "summary": "Lebanese citizens are preparing for potential new Israeli escalation following reports of Hezbollah sites near UN posts and Israeli threats. This reflects a high level of anxiety regarding the potential for wider regional conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 2716
    }
  ]
});

export default LATEST_SNAPSHOT;
