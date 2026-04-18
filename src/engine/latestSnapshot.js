export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 224,
  "lastUpdated": "2026-04-18",
  "lastSyncedAt": "2026-04-18T11:44:52.683Z",
  "warDay": 50,
  "summary": "The Strait of Hormuz has seen fluctuating status with Iran reimposing restrictions and firing on a tanker amidst a US blockade, while a fragile 10-day ceasefire between Israel and Lebanon is threatened by ongoing strikes and rocket launches.",
  "lastNarrativeUpdate": "2026-04-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon has been announced but is immediately threatened by Israeli strikes and Hezbollah rocket launches."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
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
    "nuclearIndex": 20,
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
      "date": "Apr 18",
      "text": "Iran reimposes restrictions on Strait of Hormuz, citing US ‘breaches of trust’ and ‘piracy’.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE84TkNEZEdiUVlZcWZMaHlwM3VacEQyX0duUmFPdG00T0ZqS3hFWDluRkVRQ0NTQjZjcmNEU3dwMkR4d0ZQVHRyZUU5VXFFRVBaU01kLXM3clRLT0xaak9ES3I1bWFBM0VSYldZeldlc0RhSlVUbFBJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 224
    },
    {
      "date": "Apr 18",
      "text": "Iranian gunboats fire on a tanker in the Strait of Hormuz as restrictions are reimposed.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOaWhWNHdua3F2cEE3RVNzZFNHV1o5N0RsOFFybkxtOThyWm5BZ2MzNXRsYTFuVnJHREp1LVotYWJidXc1T2NqM0RzM2NMQmtNdXlyQ1ViZ0RhaEJRckJIVDY2bURJZXpfMW5hZTlWT0F4VGlsdUVRYnlOYlVXNERxWG9IeUN4S2ZZUmJGUkJkUzAwY1FsQ1c3NVFRQWo5N0Rq?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 224
    },
    {
      "date": "Apr 18",
      "text": "US military warns it will target Iran-linked ships worldwide and use force if Iran does not comply with the blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxOUm9Bd0NHYnlrMTI0WEZHV1BpN3dNbkhMZGlaV0RZNTVTRC1xVXlydFprY2p3TlpseVhMbVV6RXpzNDd6ZDFrOXdHUC10NHVwcWs5ekNZZ2hCN1YxYW1CdjAxVm1FTV9mbzNuaFZfODV0b2p6Ung5eWVEZjJkWlNCd0l3VmR3TXNaLUHSAY8BQVVfeXFMT0hEWUluSElzQWtrODhfdEs3dy16cGVUc0hhWG9VVjByalk5dUpHQjh1SHhnRURmYWRDMk9BZ0tST0dDNTd1bXRLOUctNGQ2Zk96NlNaZTd4ajZIdDlwT3JtalM2ak4yZWNEeUROUzF4UWlfRE96allJSzdUbGFjeHFDX1VjSWpQYnhocE5EUlk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 224
    },
    {
      "date": "Apr 18",
      "text": "Israel strikes kill 4 Lebanese medics, threatening the recently agreed ceasefire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 224
    },
    {
      "date": "Apr 18",
      "text": "Hezbollah launches rockets at Israel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxPc3Ztakk5YnFMcXozdEdSaXRxU1RQYnZNTm5rMm1mWktkNzctVzRqQ0tNekRvb2VtTkJjYmdVTHJKeDFxRWZfQ1pSV1BiYThkaDI2cEc5d2cyek9wbVU4NEl0bGpNQUMxb2c3SEROUHAzZFhTaHBZR0REcjBQMTlpTUYyMXdRSW9KOXY5VFVRWFJfQ1o4V09ITGdyV3Q0U05nYk9qWTdNeTBwYkdCR0lycEFmekNWVUlCdFZ0dlFaY3RtMmQ2ZnFtcU5XVTRiamRIbEFr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 224
    },
    {
      "date": "Apr 17",
      "text": "Iran briefly declared the Strait of Hormuz open, raising hopes for a peace deal.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 224
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
      "perspective": "US Perspective",
      "headline": "Trump's Optimism Amidst Continued Blockade",
      "summary": "Trump expresses optimism about a peace deal and the war's progress, while the US maintains its blockade of Iranian shipping and expands its military targeting of Iran-linked vessels globally.",
      "tone": "strained",
      "latestSinceUpdate": 215
    },
    {
      "perspective": "Iran Perspective",
      "headline": "Iran's Cautious Stance on Talks and Strait Access",
      "summary": "Iran expresses caution regarding peace talks and declares the Strait of Hormuz open, warning of strong responses to Israeli attacks despite facing continued US blockade.",
      "tone": "defiant",
      "latestSinceUpdate": 215
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Fragile Israel-Lebanon Ceasefire Under Strain",
      "summary": "A ceasefire between Israel and Lebanon is in place, facilitating some returns, but has been violated by Israeli strikes and Hezbollah rocket launches, raising concerns about its durability.",
      "tone": "anxious",
      "latestSinceUpdate": 215
    }
  ]
});

export default LATEST_SNAPSHOT;
