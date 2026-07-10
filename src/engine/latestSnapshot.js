export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1238,
  "lastUpdated": "2026-07-10",
  "lastSyncedAt": "2026-07-10T21:44:10.419Z",
  "warDay": 133,
  "summary": "The US-Iran ceasefire has collapsed, leading to intensifying tit-for-tat strikes across the Middle East, with Israel also engaging Iran and Hezbollah, and the US issuing demands regarding the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "The US-Iran ceasefire has explicitly collapsed, with both sides confirming its end and resuming intensified military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jul 09",
      "text": "US-Iran ceasefire crumbles as fresh strikes rock Middle East.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTFB4bHN4OE85Y0EtNkdsYzlGcGRzbjRJNE5DRktPMFdfUDB6cVFfQzE5eC04VDJISDVGNDVERVB2M1dERXNTOWRld2JVNDNVRVhaa3VwR1FiMGdScVZVN3QzZUZzeWpJV2RTS3VkX2ZQdHlkNDg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1237
    },
    {
      "date": "Jul 09",
      "text": "Trump reiterates that ceasefire is over, but says U.S. to continue negotiating.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikgFBVV95cUxOd2FLbExRcUwzLVpNZmVpbGdLVUttNC1uaDFnUmxZS2lleVNqZlI2WDdTOGVvSFc4M0w2dzh4RVdyRlNQWUNnVXRqZWw1WjJDUWdfWmN6TU9XbkNRYVhTX0kzem83cHprdmc4bVRWQThSZDJ3TUVQaE5raDJwMzFMM2FJOTlNQy13UlZPTEJjWVhKdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1238
    },
    {
      "date": "Jul 09",
      "text": "US renews strikes on IRGC; Iran vows retaliation as peace, ceasefire stall.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxQYWlVcGh4SkRwb2h1UGwzeXNMRklydEpSWGxUSTVqWUFjQVNRdDZyN1Bpang1ZVVoLVliczlOWGVZN3d3VGdKZVlwbHQ1MnQ2NHFWTVZVTTdnUlZpbkZydVhvR0t4eVZTc250UF8wSDNYRlc4VzFPRmUwVEJBUDFIUEtDS19vMEU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1238
    },
    {
      "date": "Jul 09",
      "text": "U.S. forces sharply ramped up their attacks against Iran, hitting over 170 military targets.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxQLWVyaFFZTUh4WVhXdVFqM21pWTV3Rnl3NHY5UU1hY3hzTEFvM09PN0h2c19wTkVQTjBMdk9Lak1ncmxPUW94OWcxT3RfODRFTUhZQXdHWnRWSGQyWU9sMnNabjg2cVdxVUpUc1ljX0JjQ2h1RktrLXNJR0pyUHZVTjdKV3JmZEhXX281RHJ2c0tuRk1Ubmk3anpZT09wQzBnX3lPY0Z4MU5SOFhDb0E4c3lPWkVxZ0VuYUpRa01vaktwaW0zSDVfamZnMDJZUHhSU3Rr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "facebook.com",
      "latestSinceUpdate": 1238
    },
    {
      "date": "Jul 09",
      "text": "Iran updates: Blasts across southern Iran after Tehran attacks Gulf states.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOazFrLXladEhrcG51TllsZHBwdDd0Y2hPTWo3eXNEYkxXX0J1cDlfUk94eURqb29qR20wMU93a3BCN3E5d21OUEVUOU5meF8yNm9uNngtUi1adEJEYVFCUksyeG1EVGtTU0dncU55NHEwQzV5bWRLSGhBUUpGOFhfZGRTemktaW1rREhpb1lDTWRKc2dPNV9jOUt0VG44ZzBhT3BEWENyMHRvOXpIcFBmT3dPcHRwN1doc3QxWtIBwgFBVV95cUxNajNoV2lYTU9GUnM5bmRJcVB1Uno1VDZMbXdsRHo2anF1Vk0taFRuVjVVUHVuSkVWYkhjS3owUFBwR1JMR2ROdEEycVlmdTNndEJ2am8tNUY2TlNEQ21lbXpNdG1SZW4wYkF0bmI2YTNYWEZrakZWV1lDUjVORFI4bTZVUTRBUjRQdDhvVVNyWE82eDdoazdKVzI1VEFPV2NzaFU0WGNGNFRpT1djbFd5NzFfZTd0VHM2Yl9MdGtvWW1zQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1238
    },
    {
      "date": "Jul 09",
      "text": "Tehran launches more strikes as Israel warns it is ready to strike Iran again ‘with even greater force’.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3AFBVV95cUxNSzZmYVBxWmdLdUp5NUhCSXZrMnpVeG5lUWJSRTFMMDBuRUpfbHBJYlU3S0R4S1FwblBZZUhuUVZiODJ6OXRkUmhhRktaVXNIdUIweWdBZ1FWckZVTWxWV1FoOGpVbldETUk0cFRONXVXazJhaEh5aHRQQVYyell0amFnNVRZZ1JLZnZZX2hOT25WYkdsUEJoLWZ4NGVaSEF5SGlCel85c21HMENZc1M3RWltRG94Zkp0a1p1Z1FaM1hWR1ZaN0hNdVdJSmQ5c21GdVRjMTA4TmtuMU54?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1238
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
      "perspective": "US/Western",
      "headline": "Ceasefire Collapse",
      "summary": "Trump suggests the ceasefire is 'over' as the US renews strikes on Iran, with Tehran firing back at Gulf Arab states. This indicates a breakdown of previous de-escalation efforts and a return to direct conflict.",
      "tone": "strained",
      "latestSinceUpdate": 1229
    },
    {
      "perspective": "Iranian",
      "headline": "Retaliation & Resilience",
      "summary": "Iran vows retaliation and claims to have hit US military targets in the Gulf, amidst reports of explosions across its southern regions. The burial of slain leader Khamenei also occurs during this period of heightened conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 1229
    },
    {
      "perspective": "Israeli",
      "headline": "Northern Border Security",
      "summary": "Israel asserts its intent to remain in the Lebanon security zone until Hezbollah is disarmed, actively destroying tunnels and hunting militants. This highlights ongoing efforts to secure its northern border against perceived threats.",
      "tone": "defiant",
      "latestSinceUpdate": 1229
    },
    {
      "perspective": "Regional Stability",
      "headline": "Escalation Concerns",
      "summary": "Reports suggest tanker attacks risk reigniting a wider war, and the Lebanese army is deemed unlikely to effectively eliminate Hezbollah. This indicates persistent regional instability and a high potential for further escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 1229
    }
  ]
});

export default LATEST_SNAPSHOT;
