export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 818,
  "lastUpdated": "2026-05-30",
  "lastSyncedAt": "2026-05-30T10:09:21.705Z",
  "warDay": 92,
  "summary": "The US and Iran are engaged in negotiations for a 60-day truce and the reopening of the Strait of Hormuz, while both sides continue to exchange strikes and Israel intensifies attacks on southern Lebanon against Hezbollah.",
  "lastNarrativeUpdate": "2026-05-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 60,
    "summary": "A 60-day truce MoU has been reached between the US and Iran, pending Trump's final approval amidst ongoing strikes and stalled negotiations."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "May 29",
      "text": "US and Iran exchange strikes as Israel intensifies attacks on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 818
    },
    {
      "date": "May 29",
      "text": "US military launches another strike on Iran as potential deal stalls.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxPZm96OTJkNENIbjhibTlaT0lpOVlhdXBVdWpYd0h0cXdxa2ZHVXMyWUV3RWswLTZsZ25MZUFwRm14NUJkbVNKLVZ2OS1tOFZkd2RyTnliZWxFT3ZKcE1JUTYwa1h1dXE2TldTT0d5RldSN2Y1TUk2RjRQSXpkSXFUY3FCYUllbHBNU21PSURzQ29aSlRwXzB6UnpudEJ0VnFEbzVjVFlNcTNFOTdGRnltbkhhd01mMTg3MmFCNnA2RFBjc3BW?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Euronews.com",
      "latestSinceUpdate": 818
    },
    {
      "date": "May 29",
      "text": "Iran says it targeted American base after fresh US strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 818
    },
    {
      "date": "May 29",
      "text": "Trump holds key White House meeting on Iran deal to reopen Strait of Hormuz and destroy uranium.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNZXhWUGE0ZjBSTk1fTlJYRm84Tk9saERWQVhYcUdIOFFhZjFXTGgyREVGRUNUbmhNdDRCZkFicDU3WkhDQVpxTzBMUG9uWlZoQWRTeVhlLWY0dEJKamxrVTNxM1BpWXpRTl9wcElGSnQxaExvRVhfZ3pJV3BzdzBha01INnJaVHJYYmlVY1ZfX3pYN01BeEd2LTJUSW1lbjdm?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 818
    },
    {
      "date": "May 28",
      "text": "US and Iran reach MoU on 60-day truce, pending Trump's approval.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPMjBheDJiTHNmOFdRbzJvVlBiZFYtNk9iOGl5UUxCVFMzQ2REMV9HNFZvOU1XcWVLSzUxNjdXdE5ZR3FoZWd2VkFnQzRxZ2hYanpqdkEwTmNIZVFVaklBdnV6d0dmR0hSNnlQbFY2b0FiTG96MUJwY2otYzJMcUItb1RCUUF3bXRldk91TkJkUk5BWnQxbXBzZ3BjQTllandyLXVwaDA3ck9pT1VzUW1hRzZiaFZfQ0hnN3RpMTJJVERKQdIBxwFBVV95cUxPQzBmc1RFR0xDQXFYVmw5RTVGTVBZakRhUGJ4S1lKTDVNOURsWmNSS0hMMVRmeG9OT0Y3TzF3TndBYnRtTGNYZVVOaVdEUExqOGJBdUVEem1uT3ZFYW12dWhqbmxVVFlSc3NIU0UzSE0tTjEtWGl2RHVneUtHb0hMTENadFY0SWdNWUZkdTc4NExhQW5CMV9hNkNuQlpBV21mTHQ1WWhQaDdaa3JmZERxS01BLWpNSmYwdU5kMExsTXR2c2dQT0pJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 818
    },
    {
      "date": "May 28",
      "text": "Pentagon hosts first-ever Israeli–Lebanese military talks aimed at curbing Hezbollah.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxPWHZiS1FqYU5ma3JiZG1vVTNpYVRmcl9vM1NRSmtBUzBqQzZzUEFZMUdJdTBsTE9jOXBTblkybVRCX0NXQTg0LWJnQWloQ0Zjd2FuVkE3dUg4QXFGZDdoblZkTnkyQU11QmFQd2t2U3NfcnFjcDF0Rk5LUkpqMlVMeEl1anpxaVpzSlpQdDlYTS15dXVCcmhtU19peTZVNjFvTERfeFAwbk9ZVjMtcENxatIBtgFBVV95cUxQT3NIMTA2QUJJU3BiYWV6dDdIeVhKS19ndUlyUWhQdnhQS0FOMm5Gb245djJVZU9fajNycEx0blh1TUJhZjMtWFJlaG82U2thN19KNDdzWFJvdFRDcGlURzUtNTBOSHZEa0VmaW5BZ0VSRGZCME9kUU5va3BhQWFaOWdDdjUyWG5PVmU2T0pwYVJYR055bUtGWWVaTXhyeTdYTG81Vldvd3NkS2ZxakxPYjNtb08wQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 818
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
      "perspective": "US Diplomatic Efforts",
      "headline": "Trump Weighs Iran Deal Amid Strikes",
      "summary": "The US is actively engaged in high-stakes negotiations with Iran, aiming for a deal to reopen the Strait of Hormuz and address uranium concerns, despite ongoing military actions. President Trump is reportedly making a final decision on a potential truce and broader agreement.",
      "tone": "strained",
      "latestSinceUpdate": 815
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Responds to Strikes, Warns of Escalation",
      "summary": "Iran is participating in truce negotiations while simultaneously responding to US strikes by targeting American bases and warning of severe consequences if the conflict escalates further. Iranian officials are negotiating amidst continued US military pressure.",
      "tone": "defiant",
      "latestSinceUpdate": 815
    },
    {
      "perspective": "Israel-Lebanon Front",
      "headline": "Israel Intensifies Lebanon Attacks, Talks Begin",
      "summary": "Israel is intensifying military operations in southern Lebanon against Hezbollah, pushing deeper into the territory and intercepting rockets. These actions occur concurrently with the initiation of military talks between Israeli and Lebanese officials at the Pentagon aimed at curbing Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 815
    }
  ]
});

export default LATEST_SNAPSHOT;
