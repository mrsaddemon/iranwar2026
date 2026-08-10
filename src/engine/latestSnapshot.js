export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1716,
  "lastUpdated": "2026-08-10",
  "lastSyncedAt": "2026-08-10T16:11:22.049Z",
  "warDay": 164,
  "summary": "US-Iran tensions remain high with ongoing military actions, US troop deaths, and a reported missile strike in the Strait of Hormuz, while diplomatic efforts for de-escalation are met with Iranian demands for concessions.",
  "lastNarrativeUpdate": "2026-08-10",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect for the broader US-Iran conflict, though a local Hezbollah ceasefire in Lebanon was reportedly violated."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Aug 08",
      "text": "Iran demands concessions from the US to reopen the Strait of Hormuz, despite nearing a deal with Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAybVA3dzRBU1hnc01FeGxSb0E3MjFhcjRteXBQUHZSVWJMRmF1QjNYM3ludGJFX1ZnVWkxYWlVdHhZY3c3ZmZOb0tadUMzMzJpZmV6QjZpc0ViS3pzbmdjMUg4YTZSdjA5bzE5akpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1716
    },
    {
      "date": "Aug 10",
      "text": "US announces another service member death amidst escalating warnings from Israel about Iranian attacks.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1716
    },
    {
      "date": "Aug 10",
      "text": "US launches additional airstrikes against Iran following the death of another US service member.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQOVVPQXpIUjAzU1c2TG1GcXJUU19aU2FodDRTVWV4RVdVN2stQ1NueUtIRC03M2hXNFZLRkQzUUdqMWNQOVBMbzFmc1NGejY3bXFNSnJYMXNNRTIyMlNMYjFPbXVOcXJCSkFPVHNsMkRvblBzcjc5aXJhbHlndGlrek9RbmVBTlN4SHI3N1VHLUpGVlNmTE4tSlAwSktTd1k?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1716
    },
    {
      "date": "Aug 10",
      "text": "Strait of Hormuz reportedly hit by a missile strike amidst calls for an 'off-ramp' from the conflict by Trump's military chief.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOamFyOVhnZG9PZUJlenFjNUhXd0doVTNNS2dCTm5tQU5Wc3NCV1Z4UUVhVDF6ZVZjVEtiYzZVOHVVb281V2ZwS3J1TlRxVjB2eXlHYTVLYUpIZkpfMWw4OWVyVVFvYnRoRFpGamFMRFRSTFp3TVBObDJ1VHpVM3NKM3pQZFVDaEtFcWhZMnFaUWZtbVRwbElXQnQ4OFJublpJbWxEMGxaUnowbkNT?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 1716
    },
    {
      "date": "Aug 10",
      "text": "IDF conducts strikes in southern Lebanon, citing a violation of a ceasefire by Hezbollah.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwJBVV95cUxOcVRQLWNxeE55TTlORE1YR3hpSWNzanBsbjJBbmhjWElnOHNNcUx0dHZVYXdEUlpGY25YQmZpakdPTFBQMjJOX0M0OG9aTjFXd0czWjhGcVNobDB1OU8zdENjTl85LWI4NGVRX09WRUxHMzRBZzgtMlQ1RXZHV1RzdHpqR0xuSjVWcFM5VDlCakRLRWppdDNVb09vVzZ5cUpxTlZBamxFRVNVRWY1QS1EVnpnZ19ieVMyYld1RTJoaG11TFNGb2VxR05aOEg1OWZaQVBlYWJCZGhJRVVkTXhKaXhYZU1lOFdZN3RyRDg0eF9nMlJDN3pwazNoSmR2cUx3QmRqUFdKNDNpdUQ4N2t5WE1XQ0h6LV9LTi1FUVBucw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Haaretz",
      "latestSinceUpdate": 1716
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
      "headline": "Iran Demands Concessions, Seeks US Exit from Gulf",
      "summary": "Tehran is demanding concessions from the US for a Strait of Hormuz deal and asserts its conditions for opening the strait. Iran also expresses a desire to remove the US presence from the Gulf region.",
      "tone": "defiant",
      "latestSinceUpdate": 1705
    },
    {
      "perspective": "United States",
      "headline": "Trump Threatens Attacks Amidst Limited Options",
      "summary": "President Trump issues threats of 'heavy' and 'massive' attacks on Iran while simultaneously engaging in 'semi-negotiations'. His top general is reportedly seeking an 'off-ramp' from the conflict due to limited military options.",
      "tone": "strained",
      "latestSinceUpdate": 1705
    },
    {
      "perspective": "Israel",
      "headline": "Israel Prepares for Strikes, Rejects Gaza Plan",
      "summary": "Israel is reportedly preparing for unilateral strikes on Iran and has rejected President Trump's Gaza plan, vowing no withdrawal until Hamas disarms. Concurrently, Israel is engaged in talks with Lebanon regarding Hezbollah disarmament verification.",
      "tone": "defiant",
      "latestSinceUpdate": 1705
    }
  ]
});

export default LATEST_SNAPSHOT;
