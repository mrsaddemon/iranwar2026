export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 89,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T19:07:47.214Z",
  "warDay": 43,
  "summary": "High-level peace talks are underway between the US and Iran in Pakistan, and Israel and Lebanon are preparing for ceasefire talks, amidst ongoing military actions including US mine clearing operations in the Strait of Hormuz and exchanges of fire between the IDF and Hezbollah.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "Peace talks are underway between the US and Iran, and Israel and Lebanon, but no formal ceasefire has been established for either conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.4
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
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 38,
    "oilDisruption": 80
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
      "date": "Apr 11",
      "text": "US and Iran hold direct peace talks in Pakistan, with Vance participating in high-stakes discussions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE5wTDVrcXZzejVCLUZGT2c2Z2M1SE9XYzJTWjlmbFNJa09mX2pJRndkTVU5cE84TmxQM3ZQTmpvQXBIcFBtYkNIcVg4SVJNTzZhRUdudEw3TDZ4TTZTYWljZDFCeUdnV3Q5bWtfcGsyUWs1dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 89
    },
    {
      "date": "Apr 11",
      "text": "Israel to hold ceasefire talks with Lebanon next week, despite rejecting an immediate ceasefire with Hezbollah.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQRUhHalQzTUJIZW5FOEd6NjQ1Zy1zX3pkWlRuMlV2UmhLWnRnVWE1aEctUE44cldJWXlHZ09seUZXWGNyY2Z4a293WkdZX0ZvVmdIQnVRN2hSb1REclFtZUxUMmJSVTYxVUhCZk5xMHk4LVpOY2JFSkZ2bXMxYk1WSXd0YXM3QS02ck9KRDdTbGh3U1ZxdVgzWGxYTXo1aTMwUEoxUVVZaS0wUXc4S2U3ZUVGNNIBuAFBVV95cUxQNXNjb3RtWElmZUFXY0c1Ym0xbVdpb3ZHUnpHTWV2dzVjQkw5VkM4bE56VktyUmRKdkt2Mmg5SG50Zi1RMGhJV3F5Mk9Ld1VzN09sM2taRExMbHZXVTZncHE4R2xPT0hQVlV5OHFITU9vWUI1S2pkcjEwRmV6R1cxTmJSXzdtakNqT19PUXlvdE1fS1pXdmpBMmRxTU13RFdqNjMwVXJtNEczZXNnRzlLOHhPNklKMzNh?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 89
    },
    {
      "date": "Apr 11",
      "text": "US military begins removing mines from the Strait of Hormuz, with Iran denying planting them.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxNeDI5dFhBU01HTjBGYmNCYTRmQmY4RHRwbDRCTWdGVVgxTnpxU09tVTkzY2xJOXYzLVc2VWlwYk5ZWG12QVVvQnRzeWY1WUxzMXBSYkdNSG1HSzgwZXZMQVFkODNtZTRxZG84M1FlOUxzOGVmeFRRMjRWOENDR0xKTEplVVfSAYoBQVVfeXFMT2dCOEctSmQxcXctV2laNS1VVTZFNTNWanFUWTlSQndoYU9sdThUeXBTRjc2OC12RzJKbzBNa21BaUxYSHZLQkprNDVhanV5ZXVXcjRoOU9taF9EZTFrakNKYnVMOTQ5R3ZBM28ycllPVVBMdnFHLXlWejNJcWZhdEJiNjFlazhTVHZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 89
    },
    {
      "date": "Apr 11",
      "text": "IDF and Hezbollah trade strikes and rockets as tensions remain high ahead of Lebanon talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQT09xZWprYlJOYndNUnQ4YzJwOGI5bUlaT2ZHOVl2WHlkbnZabHZkOEVYbEVQNWVRUHR3U0s3eTAxS1M3Mll0Nk1NcjZjVEhDVWNtYVVVdGgxOHJiNWliYjJVTV9CRThLbFlzR2xsTjA3dWtON3FZcGdXT2I5YVVQLU8wMF9oRXlwSEJDNUxqT0MxYVg2Qk5WNmdwQmkzTmttZ2FPa1NNd292MEY2YlA4ZXhNbXk2ZXVh0gG-AUFVX3lxTE0xTTdMTm5HaENwWWFPRmtwbElOWmtrelR6Qm5wY3NjUjl1VHBvRFZOMU5LUmtsNzZmVS01TlZnYnVXWTRsQ3B3MmMzNVphTm1McEdhUFMyMDBVRWw2NkxzSFB6SkhvWXZOazdEaFJFbGdiR3l4ZDgtZXdBSmhGb0U4LXRLaFhmMXNxQU5CQ3V6cjZKajdkS3QxWE1WaGlDaHdKU0FaMVV4QUdGWUp6a003S2NKTXhEWndvT19abWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 89
    },
    {
      "date": "Apr 11",
      "text": "Army survivors dispute Pentagon's account of a deadly attack in Kuwait, claiming the unit was unprepared.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPYllLWFlHNVFiMV85S0RPUE5SQkE4cGRvcmtEalVBb3NnRXVuZTZ6UWc3MzIwbHlsMWVycXhKMFdQRGVhUnNEYUlnMEtpaEF5YjE0OVltOWRmMHNYdjEtZW9RWFVmaC1WcXFPem9STVN6cUVhejlYYVhtQl92MU9DSERn0gGHAUFVX3lxTE41MEIwdGxrMjNCWllMY2pjSmc2Y0ZVUFRPOGZHZ2k5LVU1Q2RRa09DSXc2TzRSQ0pHYkVMc0d5bGtjXzRBc040YnJlZTdsVE1hbkY3UTJfNUhsX2VMMnVpRGdSMW5BRTd4RGhrVEkweVBiRGtsSG5sSUo1eUZwMkdJY0VmUmNQdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 89
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
      "perspective": "US Diplomacy & Pressure",
      "headline": "US pushes for negotiation while maintaining military readiness.",
      "summary": "The US, through envoy Vance, is actively engaged in peace talks with Iran, while President Trump warns Iran against failing negotiations and highlights US military readiness. Trump also criticizes Iran's actions regarding the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran engages in talks amidst Strait of Hormuz closure and ceasefire tests.",
      "summary": "An Iranian delegation is participating in peace talks, but the Strait of Hormuz remains closed or has low traffic, and Iran is reported to be testing the ceasefire. Iran is also reportedly unable to find mines it planted in the Strait.",
      "tone": "defiant",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Israeli-Lebanese Front",
      "headline": "Continued conflict in Lebanon despite ongoing talks.",
      "summary": "Israel and Lebanon have agreed to meet for talks, but Israel states there is no ceasefire in Lebanon, and both sides continue to trade strikes, further threatening any broader de-escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "US Military Internal",
      "headline": "Disquiet and unpreparedness claims within US military.",
      "summary": "Survivors of a deadly attack on a US military outpost in Kuwait dispute the Pentagon's account, claiming the unit was unprepared, contributing to growing disquiet within the military.",
      "tone": "skeptical",
      "latestSinceUpdate": 64
    }
  ]
});

export default LATEST_SNAPSHOT;
