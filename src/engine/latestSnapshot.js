export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2587,
  "lastUpdated": "2026-10-15",
  "lastSyncedAt": "2026-10-15T20:29:55.142Z",
  "warDay": 230,
  "summary": "The US-Iran conflict continues with intensified US sanctions impacting Iran's economy, Iran asserting control and attacking shipping in the Strait of Hormuz, and regional actors like Hezbollah and Houthis engaging in attacks, while the US considers extreme military options.",
  "lastNarrativeUpdate": "2026-10-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No ceasefire or de-escalation efforts are currently reported; conflict remains active and escalating."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 70,
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
      "date": "Oct 15",
      "text": "Trump states those leaking details of US strikes on Iran 'should be shot dead'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi5AFBVV95cUxPNElnVEU1Y1BkWHY3WlB1QmUxNWlxdzdRN3lBZXMtRXRZWW5MMFdFU2dPbEItdFI3MDhEUExwSHpfTmE0VHNFaXhxWnlDY1ZsLWhmMVc4VTg1anF1LUtfN2VyUHRjM09LWUVfYi1leWpSaUdkbk44RTNZRWpJRDB0MmRHcUFMQzc5VXExSGU3WjM2UzBHVW9RNjctMFhnNUhzWjZHQjByLWhRMlR6aXVGWTRRQy0tQUxMYlF0ZzM1TjhCSWNNLTYtWWp1T0M4Y1gyU2lWYzJIR1dhODZXU2ZGd3B4UGPSAesBQVVfeXFMT2w4MktRakk5WGN1Q1B4OEdjZXBlMzBSa3RDeXAwaHBITGd4TkVLNGxMMHBoZkt0X01YWnV1U0g0ODRzM0hzTkE4RE5xR1Q0S0RwWHhnMmM5ZU9tRUhlYng1c0EwbWxuS1RuWFp2dnhuRFFSNXJYMnFrRFVGSzZtTm82RWhUV1lvZHVtVTZLR3hFa2tsSVlKWjFEM0VZYzRDeFk4QWZ6MFNneGY1RG0yOWpYeTRTd2RreEZEZE5NTGVRTjJBVHJ4NWl5QmhhV3dIMF9HZThGNEEwQUx2LTNfaXlKb1pncHh4Qlg3VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Indian Express",
      "latestSinceUpdate": 2587
    },
    {
      "date": "Oct 15",
      "text": "US intensifies sanctions, weighing on Iran's economy.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQQmtVbEg3UlB1QzhqQTZJLTRJY1ZfZWJTZjVrVjVPWDFDT3dGd0RxTEQ3M19hVEFHcldMaEpxcncwNGxlQ1ZDMzA3T09ScHFKdjFEYVQ4Yi1BdFNHdmNuVlpmN3MtWUVOSlVVTEZoRjlxRDZQQ3VpejdGRGg4bEh1NzRyMjJuYU15c2t1V0V3ckJxeDBLdUs4WFNkeEhnSWl3dW9keE5YMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2587
    },
    {
      "date": "Oct 15",
      "text": "IRGC claims 'decisive control' over the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNeTNoQ3VwTHlvc0t4V2pneTdmcUg5QXY0YXF1Vk5LMUcyZDNJTzJTUU5UUmxUN3Z2V1NremJnMWw5STJDMlp5QTZiSHc2Y2drd080Y1ctVmdIN1ZPd2lMdjlrTklDTUJIOFRWakw1QkxjM0U1ekYyTWpzTVdGS0NtNlJ5akFLdU5IR2RWdnA1dnRoM3M5RVJ4ODA3b3BwbHdrRVU3ajdQQjFIVmx6bHNHYmVITW0xZ9IBuwFBVV95cUxNT0ZhVXc5N0MzS0E5Q1BTM0JkV0xndFFBdG4wZ19ZbDhvTDA5SG0tcThhd1hDeFFPUU81QW9ra1FlY0xyMkZIWlZGS1FmLUhPeDlkd2hzQmVBSElwQmllbmJRM3kxZlE5d2p1SkpybUp0T1JTbUpGdXNRX29VWHlHZTE2c1RpbmtiLU55bFlNODJRLUREWHc3VHRkR1Flc21PQ3pidEhuRnA0UnBIWVNBc2pQa1NFN3MyMlZr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2587
    },
    {
      "date": "Oct 15",
      "text": "Iran ramps up attacks on shipping in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiW0FVX3lxTE5GckpqcnQtelppQ09yamphUEVaVWZRM1dET3dna3dkaW5LNEFVT2pDbFIwWTBpOTFERzJsSzNoMUt4N3N2eVNUYmM2TG9TYm1sVEVTYXA0Qml2eEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox Business",
      "latestSinceUpdate": 2587
    },
    {
      "date": "Oct 15",
      "text": "Maritime monitor warns ships in Strait of Hormuz still face 'indiscriminate attacks'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxQT1N6LVU4X3R3a3ljSC1KY3BYOGI1bFVCWjA0bnM1WjE2eDRZQW43VVUxMnhFbThpcDdGSUdneU03ZFFjeFFmVWczeDVaelRBeXZGekhFdmNxeWZzUHlHNUpseS0tN09GMWtkSzB2WnJEV3ZnUXhqQnlyMEY3VVl0bA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2587
    },
    {
      "date": "Oct 15",
      "text": "Five killed, 16 wounded in Houthi attack on a palace in Aden.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxPR1JjYUZQU3NadzAtdmI5NEVMMmZBRk5Sc3pMOXdnQ1RuTElMNk50RGlLWUliVXpIRDBjT0JhRWh5eGppRUROWlRfTUc2MjdZYWFDeTAyUlh3Sk42alRmclZrdHRURzFZcUxCRVY2NEtKalo2QjdxZXZnSTF4X2dwTjhpRW9oU3I1ODRNLU5qQUQxbGRiaFhSckhFUXBvalVrZDVGcy1xUGFVX1cwMnNMUUl3MjdkOTFqYlNsN29SaEMwU2_SAcgBQVVfeXFMTzZvT0ItWnZkbVBON1lHN0VqcXA1ZWhVV25NSTVScThqM0x5bUk4OUN6cXFSN2xuVXljOE8zZGpDOE9EeTA2MmRfWlNCWE5iZGtZaE1BejB0QVh4NGZjZGxkdnhLZUF5RE1vQ0t4c1F1NjlZYk5qOVBOLTJGN2ozYnd2Yk9NQ2dqVmYwTlRXSE1mQTJPcVQycF9USlRBaXg0emFFdDZWUGV0TWdTSkR0UzNVdk9Ka0w2YVVQa3FvUEhoNlU1bVpaa1E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2587
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
      "perspective": "US Policy",
      "headline": "Trump's Iran Dilemma Amid Escalating Regional Threats",
      "summary": "President Trump faces challenges from Houthi attacks threatening energy supplies and is considering pre-election actions against Iran, while also issuing direct threats amid Tehran's escalating shipping attacks.",
      "tone": "anxious",
      "latestSinceUpdate": 2583
    },
    {
      "perspective": "Iranian Actions & Impact",
      "headline": "Iran Escalates Shipping Attacks, Faces Sanctions and Internal Strife",
      "summary": "Iran is escalating shipping attacks, leading to a container ship sinking in the Strait of Hormuz, while its economy is weighed down by intensified US sanctions and it fights rising militant attacks internally.",
      "tone": "strained",
      "latestSinceUpdate": 2583
    },
    {
      "perspective": "Israel-Lebanon Tensions",
      "headline": "Israel Intensifies Lebanon Actions Post-Ceasefire, Threatens Land Seizure",
      "summary": "Israel has intensified destruction in Southern Lebanon following a ceasefire and its Defense Minister threatens to seize Lebanese land if Hezbollah and Iran attack, while Hezbollah vows compensation for destroyed homes.",
      "tone": "defiant",
      "latestSinceUpdate": 2583
    },
    {
      "perspective": "Regional Instability",
      "headline": "Houthi Attacks on Saudi Arabia Continue, Threatening Energy Supplies",
      "summary": "Houthi allies of Iran continue deadly missile attacks on Saudi Arabia, creating a difficult dilemma for President Trump and contributing to broader regional instability and oil price hikes.",
      "tone": "anxious",
      "latestSinceUpdate": 2583
    }
  ]
});

export default LATEST_SNAPSHOT;
