export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1479,
  "lastUpdated": "2026-07-26",
  "lastSyncedAt": "2026-07-26T21:42:33.871Z",
  "warDay": 149,
  "summary": "A 13-day exchange of strikes between the US and Iran has paused for two days, with diplomatic talks signaled, while an oil tanker exploded in the Strait of Hormuz and Israel continued strikes in Lebanon.",
  "lastNarrativeUpdate": "2026-07-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "A fragile operational pause in US-Iran strikes is in effect for two days, with diplomatic talks underway, but Iran threatens escalation and Israel continues regional actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.45
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 88,
    "tradeImpact": 64,
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
      "date": "Jul 24",
      "text": "US and Iran appear to halt mutual strikes after 13 days of conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxObFNiN0FCazRuclZfTEdFTFdKemZyU09SSGl3STJHR2otcHA5MThCTlRIaXR0UGlnUy1xZ3Jpb0NQQ2JleWNBdVh5MmNpaklQUVhsVW1SV0VDT24xZ01Ybm1XX3RRaWNMSl9RY3Q1S05UM2djWEpmcXBfR0V6Wmw1MVNPMjgzd1psLUdXX09aZmxXbTEwUE82LdIBngFBVV95cUxNV3g3THBZdXRLUzJwT2ZFQ1NGd0V0aDZVc2dzc29ONkNtanpfa2p5NHczb0ZfQUs1UmZRNXh4eHZCbWdQRm1zckVXX0FySS1LcjdSa1pzdUxGYm1hM1loR0d0S3pYSWt0UENOMkFlcnF4U3RHd3pwWnNJY0NWb1NCUzZQelFnQldfbDVMeXRIbG5qZ013bWZUTzBXWTZuUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1479
    },
    {
      "date": "Jul 24",
      "text": "U.S. pauses Iran strikes for second straight day as diplomatic talks are reported to move in a positive direction.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxPX3lNZnhiOVFueGNzd0dnbGM3V0d5emVUZTZhaXRRNmVpXzhVaVNRcVlWQ29XcGZDUnkwM0hhN1BYRmhnWEZhQlhFU1ItX0x6R3k3enA3VC00LVpKQi1xMWJPeXJ3VmQ5WDRhbzIzLWZ3MUgwS25ScHZOOXRnWmxWMzFacTlvRWNC?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1479
    },
    {
      "date": "Jul 24",
      "text": "Oil tanker explodes after hitting naval mine in Strait of Hormuz, according to IRGC-linked media claims.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQRkIwVWo1SzBsNVdoNGotejR2elAwaHpqOER5endma1kwa1Y5Tk1Mb3J4QWxZbjVKR1NTMWhqZGpiR3ctUFo4alVyMmZ5dllqczBqNW9iR01ya2R2QTNPWGVuUGFZa19RREFUU3o2ZXk3YXpfZ3NDRFRQbDNweE90b19fTUZYVXJ6NVRmXzRBR3FSNzZmNW9IQmVEVkRjcmtweHFsVjJneExMREtaa3gtXzVFeVd2ZUpDNWg2RUV6Y00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1479
    },
    {
      "date": "Jul 24",
      "text": "Iran threatens to expand the war if the US resumes strikes, which it claims Israel is pushing for.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNTEU1blJ0ZjFodmdqYXM3MzdXeU9PbXcwUlNEUWx5aktWY29NRXRHOC1XS2F3QTFpMWhKMnVhX0dUMkh4TmNYVEl0cDN6ZGtHb0dOMzk0SlE3SkdOT1JzVmZJQjFHYUYyUzZjUkFKNU5tZ3JmbDZTRXVYdUNDZXVFWjg4cG5QQmZKcFhKZnd1a2tMMENKS05LNFZMUC1henZCRERMcUVTaXRoRGYyV0Z4UmRSdmgxNUR30gG-AUFVX3lxTFA1UEhCVnJkWDRyNHRNYUItcVpsWDRfVXgyR0xUX3VyVXdacXZKMWgxSmtmWFFpVjlFVW12NHplMDFhXzZpYVFmbTdQRmFJajFGenhOdWtDZzNraEV5NEZXMkFCeElTQUVDbW9FaFUzS1lWam81NG5QMnpQRkcxclpUd2dGTTNsa05IeTRwd1BTclM2Q0RoMmtxM0FsZ2NvQWdLd2lfNWwyQ3BwcnV1d3NNanFrQVBBY3lxSXVtNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1479
    },
    {
      "date": "Jul 24",
      "text": "Israel carries out blasts across south Lebanon despite an existing 'ceasefire' deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNZl90QmVaeGdDMFBWV2JaNkRTV29BN2tJOTIyVTdYeGdrTXoyYS1PWWthTG4tUzlkWlBpNEtiWmFUTTRBRC1VYTlhNlhCb0EwZ1NoUV9CUVRlYWZLTmdhakcwbWNTUExtYkEtUVZzN1pEUkhZRzgwZHVGYU5Lekx0bXdNNHoyWnhkcW1WXzZmejU2Wm53YTdla3RZSk9NS1p5YnFUMjBxZE9HMFJvSVk40gG0AUFVX3lxTE9aU2dWYTlsVEdubkFVTWRoSlBqZnJaYTBzWUw1THpGeGo0eXJWMmpqcnBJYTAyZ1VmajdVZTI4TVBRNU9VdmFwOWg4WjV5bHI5c0NlNU1LSll2YUJvdERRMjBkbWtVWFY3VW95WFJyc1AtbHRBWVdGYVd5ZHFIamI4S094c1l3V2hYb0U0OU02MVlLNVc0SzhnLXpEWUUtQW5YSWJkaW1DcTF3SkFKSmUzMzBGSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1479
    },
    {
      "date": "Jul 24",
      "text": "Military families express outrage after the Pentagon lowers the official number of U.S. troop deaths in the Iran war.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1479
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
      "perspective": "International Focus",
      "headline": "Middle East Conflict Dominates Global Attention",
      "summary": "The protracted conflict in the Middle East continues to draw significant international attention, with observers monitoring developments closely. The ongoing situation underscores regional instability and its broader implications.",
      "tone": "neutral",
      "latestSinceUpdate": 1449
    }
  ]
});

export default LATEST_SNAPSHOT;
