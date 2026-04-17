export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 200,
  "lastUpdated": "2026-04-17",
  "lastSyncedAt": "2026-04-17T08:57:06.355Z",
  "warDay": 49,
  "summary": "A 10-day ceasefire between Israel and Lebanon is in effect, while Iran maintains a gridlock on the Strait of Hormuz, prompting a US-led coalition response and US threats of broader military action against Iran.",
  "lastNarrativeUpdate": "2026-04-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon is in effect, with Israel maintaining positions in Lebanon, while displaced Lebanese remain wary."
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
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Apr 15",
      "text": "Pakistani army chief in Tehran in bid to restart US talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNam43bTZtRlVmOGE4Rm56N3NoM1hmN0syZVJHUXVzRS1nVHZIQ1plVnBoRWxveHMyellqcE1sbXVIUWdPa1poVDVkVmItcUJvMFFWM3dRMW9VOGZEWmd4dWpUNGJJNnZJM2doWENiXzlPVlZfTTVPU1phWktJdmQ1UVRHaVBBSWhiUnlTS0dMbGwybXJMakxIbE1wVUNreTZJODNhR2cwdEVSbWdKQ2pXRy13U1FDSnlFVFllRERBWdIBxAFBVV95cUxPRlA0Q29kWHV0SE1rSXFLYXotUjVZZGZseWp1RFJpNXIxZlVnWG5ZeXJfVUFxcTJHRVVseWlSZXcxZlh3RmJoMmJySG5rc21USDluOHlRQnhxdGdBOUptLS1LXzhJYmtjRTk1ZnJ6S1lSaXJUMDA2eW5wSHczUnVsNklBNzU1b1FvcVUzZzhfTXZtQ0dGei1hTDUtSEstUzh1MVZoSnNRellhMEZJQXhSYVVfSEFwZHFiQ2tRUnBKTUVRVmxK?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 200
    },
    {
      "date": "Apr 15",
      "text": "Lebanon-Israel Cease-Fire Goes Into Effect.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE10Q0lhRXhMX2hjajFNX1BFeVFWcVhlY1FjelE0b2tnUHBmUmtwMHBHeEJGdWhVQWlKcXRrZl9HOHlQUWVFd1dHSDJCa3NldEQ2dm1HZU5oeVRKaTlyRmI2a3JVbXBta3N3VmZTQ0NRWlp4LVpVZ2tNUFRRTndDUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 200
    },
    {
      "date": "Apr 15",
      "text": "Israel to Hold Positions in Lebanon Through 10‑Day Ceasefire.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxNdWQ1alR2aGhHc05yaEw3SUNEUWFfcHdkcGxZdVlVdzRRQjZ0d1U5enhSVlAzQWxaNWY5d1dsdWk3LXkteWE4VmQteWhtNGVxX1RZNlNOSzg2Q0pvWlk3c3VFYjZkMmpESlcxdGg2WFotd3MwUVdNYmlLT1R2ZEtxY2lacVlZcVAzUUVVT2FZRWpFQWZlT1VXZ1NhanFfR2c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Newsweek",
      "latestSinceUpdate": 200
    },
    {
      "date": "Apr 15",
      "text": "Iran keeps Strait of Hormuz gridlocked as Israel-Lebanon ceasefire begins.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxQMHRMcmlCcHJaRmxTSTU3M2syUkZmZUNpWlhuNU5hMDFtV1FDbHZVaWJ6SnhVcnc2a0RxUDBaQWpBcTNQWmZHd0JEUzZnREZWYVlHdmxYWGRXWTBMRkJIby1jbXpIOVhvZFV0LTlDenNSMWZvdzdBWTZHX2Zvd180OHlCeWFyd0VDQVJKN2tkQklyM204ZFNj0gGcAUFVX3lxTFBlMkdFLUVmNXlCa3QwOVRyZHZCUWo0enpQV2RWYkxWWjd1a1A4QXdqQjFhOTJxZWJGaFNVMDgwQmdjZ21Ccy00UHhMMVluZTVtTEdHdzlZR09vdXA3OXNiNWd6ajVyUnQ1MjFQOW5WVkZGeW8ySzdFdlNhcGNXaXdlWjUxVS1qY2dFUnBqZXZ6UHpWU1BXbWtNaTNrVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 200
    },
    {
      "date": "Apr 17",
      "text": "Europe-led coalition prepares mission to reopen Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxQdi1vZzdOZmVadUJTZ0txME5WNnRMVTFYbEMtMDJlNHZNRE5IXzhHRktUVE9teFNvV1N1djlfYi1HQ2xxQUwzOGlHcUxjTUVsN0p3UldNMkdja2Z4ckxmYXdyMWRvVE1aWVlwckxYWGpVWmtDSGQ5cHdHWm43TFg0bGRtelJrb0xfN3pVSTM3SHlUN0pORFBBVDVVZnZ4WDJCODJGckVLR1BMZWNmd0FF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Euronews.com",
      "latestSinceUpdate": 200
    },
    {
      "date": "Apr 17",
      "text": "US enforces blockade of Iranian ports.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxPZDZFMlA3MXhpNnJrQi1vV2FYWGItbm5fQVRyQ1JUZW1HQ3VIaFRVOUtEb0RUVUhXQlFPSlI2anFTZHBXQUU3dlZwQ2hvamFpa3liRE5MUmRGUDNHTEtVc09jUzNnS0RocVZwUDZabEUxZUlGMWtRTldMRzBaQXlxdUVlMmhPRTIwQUJqTTVrdDY2VGRtWGp2RTk4S1hoNVpNUzJV0gGoAUFVX3lxTE5vY3VodTJmMk15ZHY0UnplTjVLZDlMaE1fNHZDdVFMandGQUtkWmtEbndyWFZnSU9pa3VOeTl5Tl9IeW1BU2ZpejZTdGlyYmQwQ1Vaelh0Sy1ZcDByNEFyTHNXamE5SDlMZVlpUmxka2tWNWt1OVpNRm9vMl8wRm8tYzNOT2QxaHlqamdDamhDb1JGVzFzT21xMWZjam8xOXZqbHI5X2xMUA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 200
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
      "headline": "US military 'locked and loaded' for Iran strikes as Israel holds positions in Lebanon ceasefire",
      "summary": "The US military has declared readiness to strike Iran's energy infrastructure and target Iran-linked ships globally. This comes as Israel maintains its positions in Lebanon during a newly implemented 10-day ceasefire with Hezbollah.",
      "tone": "defiant",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "Iran/Hezbollah",
      "headline": "Hormuz blockade persists as Hezbollah warns Israel on ceasefire terms",
      "summary": "Iran continues its gridlock of the Strait of Hormuz, raising international concerns about shipping. Concurrently, Hezbollah has accepted a ceasefire with Israel but explicitly stated it must not allow Israel freedom of movement in Lebanon.",
      "tone": "defiant",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "International/Economic",
      "headline": "Global shipping concerns rise over Hormuz blockade, potential Malacca Strait impact",
      "summary": "The ongoing blockade of the Strait of Hormuz by Iran is causing significant tension and prompting discussions about potential missions for when the conflict ends. There are growing concerns that this disruption could impact other vital shipping lanes, such as the Malacca Strait near Singapore.",
      "tone": "anxious",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "US Domestic Politics",
      "headline": "Trump seeks end to Iran war, but House rejects US troop withdrawal",
      "summary": "President Trump has expressed a desire for 'more compromises' to end the Iran war. However, efforts in the House to withdraw U.S. forces from the conflict were rejected, indicating continued congressional support for the current military posture.",
      "tone": "strained",
      "latestSinceUpdate": 197
    }
  ]
});

export default LATEST_SNAPSHOT;
