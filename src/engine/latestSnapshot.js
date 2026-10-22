export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2629,
  "lastUpdated": "2026-10-22",
  "lastSyncedAt": "2026-10-22T10:00:49.267Z",
  "warDay": 237,
  "summary": "Tensions between the US, Israel, and Iran are escalating, with plans for renewed strikes against Iran and Iranian threats of regional destruction and attacks on shipping in the Persian Gulf.",
  "lastNarrativeUpdate": "2026-10-22",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is currently active, with signals indicating escalating tensions and plans for renewed conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
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
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
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
      "date": "Oct 22",
      "text": "Israel's election may change its leader, but not Iran war policy.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxOZm1ibWE2TFE3M0JlejZpUkp2aHJkY1NBTFRUR2tvaVV5dmtrbkFjbTlYMGM5WkpOTUp6MXFka3pyX1FGeUthY1NlS25oamJ6R1kzdjR2NHJIWWJDay1VWm00WmJkNjhnWlBwNFp0RDhvdnBZbjMyZHNabGZPSjFhbzJ0eU5lRGpvZXFaN0pXb1F0aWVveW93WWw2a0k1eFg0anJWQllTODdPaDkyejZVNVF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2629
    },
    {
      "date": "Oct 22",
      "text": "Iran calls for diplomacy but states readiness to ‘defend’ itself.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQUDdudll1aUxJTEdvMlBrZGRqSENudHVWUy1HQml2LUM3TVZzUl96bUZSMTFSU1dtUGdKUkxZRkFwc3U5UzF5X0kzRDVoQm4wWkpjVWNlaHZpWkZQZEdOTTl3cnVjbF90UGJMZ1pGSU5CX0pjdUZlcnpabm1YYU1CcGN4djhIdWdkUHpob1RxTTQ2Um9id0tGRER4OTZMTUFvb1dNSnlpMW1aaFR4Z2RXVmNQUjFxbE5YRTl30gHAAUFVX3lxTFA2cERpMnJnd201QmtUaWV2aGQ4R0I2RDZYYVRRUUhtMi05ZllYOXpMbXN3b081RTNGa09tOTBJaENxcUtsYkhtLXRaU1AwbUhCTjNDQW5wY2R5NmU0U2ZPZXpfU3dMUXlGcE9raGRLcWp3RHZGeVNqOER2NkpJaUk0SDlVUV9mM1hHdG9mSjBqQ0xqSVdMN2wzdWxvaFNSTHpsSU1mV3U3NjlTTGFOM2haVEJsR0J2ZU9hMkRBYkFWaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2629
    },
    {
      "date": "Oct 22",
      "text": "Iran’s commanders prepare for further war, stating 'the world will be amazed'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTFB0eUE3NlZIYURIaERvcmpRV3o0NWZRakxqY0QyYWVZU055SUJJazMybTNUVzlSSEN1TjhOc241WU9ld0NjTS10TWFCV1BNVnVnNDFQaHdPRWVXbS03RTlnOGNBdEtpR2J2OWJGTXpUMFZUNE5pSjVnbWhpSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2629
    },
    {
      "date": "Oct 22",
      "text": "Israeli experts warn a renewed Iran war is only a matter of time.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxOR3AwS1dEYnBaTk1ZamFqRU5zUk1jY0laa01MUktpREM1ZUd5b21GbnlaYzZwVGVLaGVMVDM3VnBoTFNXQWNlMTN6MEFhb201VlY0Uk15TFd5eGxpTnZaQkJKejAwVl91T1Rqa2FMX3JhU3FNRXppUWc0ZkVFYTR1M1JyUE1ZRHBzOFFqQTV0U0NmelgyZUhVOFYzRdIBoAFBVV95cUxPZG5uN1pKTkVoWF9VOThPLVZrS0xIUGFqYTg5a1hoc25adEh3UG14U2RGVzRGQ285dVZFREhCMHRrS2tDTEY5SDR1di1sZHQzWE5BZkNlWG9LamJxQzZJVkFiblNnZ1Nfa2lVdEh4OFJwWm96djlMNWlIZ0tSNW5Md3ZRQTl6RE5HRHp5cXhBMS1nMXVCcDl2UHp6ZzZOZmxw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2629
    },
    {
      "date": "Oct 22",
      "text": "U.S. and Israel draw up plans for renewed strikes on Iran after elections/midterms, focusing on short, intense attacks.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2629
    },
    {
      "date": "Oct 22",
      "text": "Iran states a US attack would mean ‘destruction’ throughout the region.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiakFVX3lxTE1wRmU1RzJvUnBDSDFoNnRnZ0ZFdUtDWDNkMGlsSHRkSHhPN1RBaFZDNG0zd3E0TDFubVRidWkxTlg3ZVNHRGF4YnNiN2t2SVZBSU1GSl9nM0VVa2RIT21jTklHLUV6ZFI1dXfSAW9BVV95cUxQa2FxRGFjdHc1Y3dzTVhIZFJ5b1huMTdVeWw2R0Q5a1B0RTZGSlFyZmR4Yl9sZmE0anY2Ukw5VDNzem9mWU96UHRtd3JOYWd2cXlKX3RDNjE5bVZVU29LOEpvLUhydjc1UTl4Y2dsZms?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2629
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
      "status": "unavailable"
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
      "perspective": "Iran's Stance",
      "headline": "Tehran Prepares for War While Seeking Diplomacy",
      "summary": "Iran's commanders are preparing for further conflict, warning of regional destruction if attacked, yet Tehran also calls for diplomatic solutions. The nation asserts its readiness to defend itself.",
      "tone": "defiant",
      "latestSinceUpdate": 2627
    },
    {
      "perspective": "US/Israel Posture",
      "headline": "Renewed Strikes on Iran Planned Amidst Election Nuance",
      "summary": "The US and Israel are reportedly planning renewed strikes on Iran post-elections, with threats of action. However, Netanyahu has stated he is not seeking to attack Iran again before the upcoming Israeli election.",
      "tone": "anxious",
      "latestSinceUpdate": 2627
    },
    {
      "perspective": "Regional Dynamics",
      "headline": "Hormuz Alternatives and Lebanon Talks Emerge",
      "summary": "Discussions are underway regarding new routes that could make the Hormuz Strait redundant in five years. Separately, Israel and Lebanon are holding US-mediated military talks amidst tensions over Hezbollah.",
      "tone": "neutral",
      "latestSinceUpdate": 2627
    },
    {
      "perspective": "US Military Assessment",
      "headline": "Mideast Troop Adjustments and Internal Critique",
      "summary": "The US military is repositioning personnel at Mideast bases and reducing its overall troop footprint in the region. This comes alongside internal assessments questioning 'Myths of Battlefield Triumph.'",
      "tone": "skeptical",
      "latestSinceUpdate": 2627
    }
  ]
});

export default LATEST_SNAPSHOT;
