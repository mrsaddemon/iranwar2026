export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2581,
  "lastUpdated": "2026-10-14",
  "lastSyncedAt": "2026-10-14T21:00:00.000Z",
  "warDay": 229,
  "summary": "Ongoing conflict in the Middle East involves Houthi missile attacks on Saudi Arabia, a container ship sinking in the Strait of Hormuz, and political deliberations in the US and Israel regarding potential strikes against Iran.",
  "lastNarrativeUpdate": "2026-10-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No active ceasefire or de-escalation agreement is reported amidst ongoing regional hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 75,
    "oilDisruption": 80,
    "tradeImpact": 71,
    "sanctionsPressure": 62,
    "globalPressure": 79,
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
      "date": "Oct 14",
      "text": "Houthis fire missiles at Saudi Arabia, with Saudi defenses downing some during ongoing deadly attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNdEs4LUc1VGI2Tm03R05nd09BY1dtS0JLYmdlcFc3aUdjRG5SWFZaQzNodEVUc0RZRkRtMHBKSG1fLWh6djZ1Wk9FcXdvVm9MYk5KNks3RzM5LWE2T0haMVhIUDdObldxY1RWN3FMVkx5YlFqMm5lUUtCZFR2Q1lMLVlkcnhMV2x5cTBfMlpwaUxGRmNLQnVTa2tEOG94Q000Mjh5NGVGNkZSX3p2QjZteHBBN3RXc1BkSC1YVtIBwgFBVV95cUxPSk1uX1YxaDVmUW9qQzU2TWZPSE5CY0JmRnJxT2h0dVQtV2dZWGpuS2Q0UWE4NFhfM1pjWkFzWU5IclVuaGdNZXJqTEx5Y0ZfbFN3dHNvYUVmTzMzb1FheXZHNFN3LUdWTDJoM21nOXpOX3BNQ1ZreHlXUXhlMjdHNjBVcHNpUWVLT3hVbXN4UlBOSEMxWEUtcjJJTnFrYzg3bmd0ZXNoSkFNOTNacHBXamJBNEpEX2dyNlZVNW1hNnp4UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2581
    },
    {
      "date": "Oct 14",
      "text": "A container ship sinks in the Strait of Hormuz as Iran reportedly steps up attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxQMWFKMzFFcmxqYVdxcTVUYmZBZTZHejZpWTJmZ3o3Z3lFbnA0NTV4MkFlb1ZEMmRGQmw3MjJkc2RnTFgtX19YRkZOUDR4WXhNeWg5Zy1qV3FpeVpTVUo5QVBOVmJxcXVhc0NqandfT2ltQ3BseThmbG5oQTJhYUJ4MV9nM240c3I3ZG5wai1fY3ZIYWdpbGfSAZsBQVVfeXFMUHl0VWNMbEpIOXhweHBSVTdYdHNjd1V5a2NfNkJSdFk5UUV0R2lDSUtZV1BpMEM3aWxZOXlWRTBRRTNtVkxRcDZtYVFDdnA5X3RPLW4zTm42M0hzVFJYNGtoMWJHcjVGVlJ1a2Jja1F5SnFDUHVTYVFkYXRYTFFnbDd1REZsc0haTlNibWhxdTU0aHZCcjVYQ0x1Vm8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2581
    },
    {
      "date": "Oct 14",
      "text": "A teen was killed and 24 injured by a Hezbollah munition found on a hike near the Lebanon border.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQSUtCZjhxcXBhSTFRWk5BZWo5Q2lJU3AyOC15aUd2OTNCdExKNms5dlg4Y04wMXAxd2NWV0N6NXFqV241STNDZ3VMZ1p5eDQtMXl1LVA1ZmlOdF9JdThNbnJYMllvbXBPVGN4dG45OVhMR2c3QjBCeWxjLXV4SWY0VXlRa0wzRi04TkptLUlnZnVlZXVySWNNYUdVYzJfOFgxRmNfVUxkWDNndzc2dHVzYjdCNWHSAboBQVVfeXFMUG5IazNhSFk0RUhNQ3dneFdnR3pBM0tIYktZRS1JLWg3dVF0S2ZKbURqdnd0SFV5SEJuYlR6d3FtTGQtd2VmWDFtMlBTN09nbDNrODN3UGZpUE9xMDFfWFdtb0hDZC1pdGJkYUgyS2hWcm1FbFhDLXdtdFJoS0NMOTZ3ZVlXQ1VEejcyeFBCZC1RN0hhdTNkM1JQcGV2aC0taEh0R19qZnhnNHF5SUNIaGZNYjB6SFBKSkF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2581
    },
    {
      "date": "Oct 14",
      "text": "Hezbollah announces housing assistance and aid for displaced individuals in Lebanon after receiving a $200 million transfer from Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTE42X1NNR016dmNjeDhPcDYwTmE5N3VkUlhkdmdkOHl6SXhQTi1ERkRVSlZZYXB6M2N6bVF3MTdCbGVDbW1FMFVnTExfbmo0dkExem9DcER6bWROSkNz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2581
    },
    {
      "date": "Oct 14",
      "text": "UK spy chief states Iran is stepping up targeting of military bases.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxOeUhNNF85ajlJWVEwb0ljWDU4QWoyMDl2MmVQTkEybTdPLXlWdHlXVXNkY2U1Zm9oRW9FN01ITnk0VHNydXpwWGJ2TUFrQ0ZxdjVSc1BRQXdnSlRmSHRYMkJ6c3djZVFwNVBBNzRpZE84TGs5ZXQxR2tqRG1Xdi1WRlJqSkhicDVWZHBHMmVGRlZwMlRUWk1pM0FvM0Y1UUV3cUFGRUt4bEdBMDDSAbABQVVfeXFMTW44Q3VMY3IzbHBGWXRrWFp2bExNMWFwcWdBemlUbjlWcG1MSmlOLXBBODlhemt6NjJXWnZjZTdYY1IzQzV4SEo3Q3RZUmZBSmN6YS1TYjIxUVBuRkxqM2lodkRPYWw5X3JOcXFrd1Y1UzdlMEthMW80U1BjMllNVDBQY29JVURzeWc2TXZkRW9ESktMQkZkVUt1WktjSEk1bWRFcDk1UGVRY2RuLTRwOEM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2581
    },
    {
      "date": "Oct 14",
      "text": "Documents and interviews reveal that Trump’s war on Iran is rapidly draining the US Navy budget.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTE9KOFZVQ3RPcGRtYlV3enlSZGdMQ2R2V0ZENlRUc3dxWlpnMnVJMUFGemhQVmd4YzVubDRpVTJIMmpsVjViQU8xWkNFd01OMmlQSE41RFo4TWo0UnljTV80R2wxSXNGeDJKUGJwT0h4YzdQbmtoa2NhdUJEVXo5YXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2581
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
      "perspective": "Iran's Resilience/Defiance",
      "headline": "Iran's Regime Stands Firm Amidst Conflict",
      "summary": "Six months into the conflict, Iran's regime maintains its stance, rejecting U.S. proposals as insufficient while its leadership defies external pressures. The country continues to support regional proxies and adapt its tactics.",
      "tone": "defiant",
      "latestSinceUpdate": 2577
    },
    {
      "perspective": "US/Israel Strategic Dilemma",
      "headline": "Pre-Election Strike Dilemma for US and Israel",
      "summary": "U.S. and Israeli leaders face a complex decision regarding potential strikes on Iran, weighing pre-election timing against the ongoing conflict and Iran's evolving tactics in shipping lanes. This highlights a strategic impasse.",
      "tone": "strained",
      "latestSinceUpdate": 2577
    },
    {
      "perspective": "Regional Escalation & Proxy Actions",
      "headline": "Middle East Sees Continued Escalation and Proxy Attacks",
      "summary": "The Middle East experiences continued escalation with Houthi missile strikes on Saudi Arabia, a tanker attack in the Strait of Hormuz, and increased U.S. casualties. Suspected Iranian-directed plots at U.S. bases further contribute to regional instability.",
      "tone": "anxious",
      "latestSinceUpdate": 2577
    },
    {
      "perspective": "Humanitarian Impact & Support",
      "headline": "Civilian Casualties and Proxy-Led Aid Efforts",
      "summary": "The conflict continues to result in civilian casualties, including an Israeli child, while Hezbollah initiates housing compensation programs in Lebanon. This aid is reportedly backed by Iranian funds, highlighting the humanitarian consequences and proxy support.",
      "tone": "neutral",
      "latestSinceUpdate": 2577
    }
  ]
});

export default LATEST_SNAPSHOT;
