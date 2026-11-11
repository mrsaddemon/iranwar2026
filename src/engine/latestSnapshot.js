export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2724,
  "lastUpdated": "2026-11-11",
  "lastSyncedAt": "2026-11-11T16:16:30.771Z",
  "warDay": 257,
  "summary": "The US-Israel-Iran conflict continues with renewed threats of strikes, military pressure, and significant oil market disruptions in the Strait of Hormuz, despite some claims of the war being 'effectively over'.",
  "lastNarrativeUpdate": "2026-11-11",
  "ceasefire": {
    "active": false,
    "status": "fragile",
    "confidence": 0.55,
    "durationDays": 2,
    "summary": "No active ceasefire or truce is in effect, with hopes for de-escalation being blunted by ongoing hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.9
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
    "nuclearIndex": 70,
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
      "date": "Nov 10",
      "text": "Trump states US-Israel war on Iran is 'effectively over', contradicting other reports.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOS29zRkhhNG5BNFlmS0RkM2g4V1JrYU0xeVhNWWI2akxOdE9aTDRjSThIbUhMRmRMSjEzRDhMQzQyLTdsbVp4WTh4bEpuNXdMQjdjaGlVM0ZSZnhhSlg4WG01cU5qYkJsZTVJZUlnUHVaSEhhVXRIUzY5VVhoUXl2MlNWQnZYNlA0ZGpTMk5xR1VpbGpKdUk4ZXpFWUFlNkp5WTgtQl9LUUxJZjEwNlJ4NXRIX3hqWVBfOWJ5anhIdkLSAcYBQVVfeXFMTk5QeDgzSWFEQlV5MGt6bEhqWWFmWHVPS1doaHM4UHJsTjlIQUdiMmZiQUE4RWdPSHZ1V3J2RmtTVVRxNXlBMW9VTmtQa2dOOVZ3OXhvRGpRUHFESFdFQlZKM0xlV2VKQ1JJQ25nNS1CWGtyMjhPYlVua2JOcFdPZl92YW1JdjJKTUVVUFR5VUJQbTNhTTIybUJPOXBpaThYNTVrUEt2SkxvVjhLUWhfWGVQZWlBRTd0QzJaRUtRZUU1d2p5b3RR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2724
    },
    {
      "date": "Nov 10",
      "text": "Iran's security chief confirms no talks with the US are ongoing, as Iran stands by demands to end the war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNb1BpVEpoUXk0dVZTcEVneEYyZVJuVHUwT2E5b1VobkVINDNGeHdwcTRsSzlaMlp6WU1MUFU0N05ucXRlQk1yclZnZGM1Z0dwOEZDcTNXOTlzdzBkQ1NCNVZyRTFNYWh0Z0ZtQXJNS1NvY2tBbFpDejBFZlVhMmlkRXM1MU1WQjJrVFp0eERuUE5mWG55dVdULW9xZ3I5SzZGeXZ5ZDhfNGRnX3ZNdjZUcU9MSmhLbXI2U3fSAb8BQVVfeXFMTUNBbmhtNUIyWFg4OXQ1U25TaXVzVGxKbWloNWoyQ2NVMDFLcHJRY1VnUTVyaTB6dHVHbEs5QTFtQ1QyYXUxRFpFTHpVMGg0Zi1TS2N1TUg0UW85Q2ZOOHk4c2I1aWo0UzNsc2hOYW8yU1lObzJaYzhpVkU0a3I4VWx2aWhxMGc4dTdQamNIZEJaM0t4ZlZzQ21pMWdHN0JiZml1RG9kd25lbktCSWxFc3prd3VmT2FZdzhJMWJPVDg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2724
    },
    {
      "date": "Nov 10",
      "text": "US ramps up military pressure on Iran, while a drone hits northern Iraq and the US is blamed for Qeshm strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNZ2pabWZfN2E3YU9qRklmaHc0MzBjOTdPZHk2S1hhT01UUXNNV0tuRWx3eU5RNG5LenJsckVSRFZkM1VsM3FwQVR2dUFDMV9ZUG1tb1ZkMDcwNzFOMGp3Skt1eGV2YWplU0JuREhFdTl1OTJNUS11dHpsNEZ4VFdhS0U3UnlpVHJTamZjYlE0VUE1YWhwemlYelZKWUE0ZDJtMXV2Z2NhVDhXMm9SamYzZTRodTRSVVhuVkh3NlRR0gHDAUFVX3lxTE5OaGh3UU1EdDgzNloyMU51dWowWDhrby1kSXBpNFFPa1hwdFQ4Wi15X09VTTJNbThrTjBRWTdDUGFKeGMyM1NQdTllYm1RMUdXOVA2UVRzODdPTGhta2RvcmxyanEwbnd6c1VYWGFFcjZKemkzaE95RjlWc2lzaDZIRWdyb3ZPT0hTZnM1SVlRUmFsYmhpeXBka1BSVzJveUR3OXZQUXFPaWZuenRrRHoyNHlEN2l6UjR3V2hoMko0Y05UMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2724
    },
    {
      "date": "Nov 10",
      "text": "Israel is ready to resume strikes on Iran as the regime aims to rebuild its nuclear program.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2724
    },
    {
      "date": "Nov 10",
      "text": "U.S. and Israel draw up plans for renewed strikes on Iran following upcoming elections.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2724
    },
    {
      "date": "Nov 11",
      "text": "Oil prices rise as Hormuz shipping attacks blunt hopes for an Iran truce and cause market disruption.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPRnp2T2NvaFVwT05pV1Q0ay0tcENiWU5HTGpwckZrT0I3OVhuN2JwYm12RkViWVBFU3hoYVZScHlDdVFuNVY1WWJPbDNfY2RJRHEzNGs1aFNsZG1aR2RvVnBpcm5SQXQyV01QUnRDejV4am5odXZubzRSa01Jb2N2ak55NHNRejY3ZlNVa2JWUHFDUEE1bFltUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo Finance",
      "latestSinceUpdate": 2724
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
      "perspective": "De-escalation Hopes",
      "headline": "US-Iran War Nearing End, Talks Underway",
      "summary": "Trump and other officials suggest the US-Iran conflict may end soon, with reports of quiet negotiations aiming for a deal to de-escalate tensions. However, Iran's security chief denies ongoing talks.",
      "tone": "skeptical",
      "latestSinceUpdate": 2722
    },
    {
      "perspective": "Continued Conflict & Escalation",
      "headline": "Tanker Attacks Persist, Israel Plans Renewed Strikes",
      "summary": "Despite hopes for de-escalation, tanker attacks persist in the Gulf, and Israel is reportedly preparing for renewed strikes on Iran. This indicates ongoing hostilities and potential for further escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 2722
    },
    {
      "perspective": "Regional Instability",
      "headline": "Hezbollah Presence Raises Regional Conflict Fears",
      "summary": "Concerns grow over Hezbollah's potential involvement, with Israeli forces reporting weapons near UN posts in Lebanon. This raises fears of a wider regional conflict extending beyond the immediate US-Iran tensions.",
      "tone": "strained",
      "latestSinceUpdate": 2722
    }
  ]
});

export default LATEST_SNAPSHOT;
