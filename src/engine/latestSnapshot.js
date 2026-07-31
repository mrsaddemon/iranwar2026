export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1541,
  "lastUpdated": "2026-07-31",
  "lastSyncedAt": "2026-07-31T20:47:42.928Z",
  "warDay": 154,
  "summary": "The US-Iran conflict has intensified and widened, drawing in countries like Egypt and Iraq, with significant military exchanges, including US strikes on Iran and Iranian attacks on tankers and US bases, leading to disruptions in the Strait of Hormuz and rising oil prices.",
  "lastNarrativeUpdate": "2026-07-31",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 21,
    "summary": "No active ceasefire is reported in the primary US-Iran conflict, though a US-brokered deal with Israel regarding Lebanon is mentioned."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 90,
    "oilDisruption": 80,
    "tradeImpact": 74,
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
      "date": "Jul 30",
      "text": "Egypt struck for first time as US-Iran conflict pulls in more countries.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBDZ0dMZk1tUGZDZlItTm1MSmR2ODExY2t6VFVCeC0xTy1IVENybUZIalVuSmw1cWI0ZlN3MTNvX3ZxMy1aUlFiSkg5ejVwQzhxc3loWmRRUEFoVnZIdUd6cWpaSFZyU1hPWWpLSFFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1541
    },
    {
      "date": "Jul 30",
      "text": "U.S. Strikes Iran Again, as Trump Encounters a More Determined Adversary in Widened War.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE1nazQwZzlMcUIzRUlXTVNJbVlncDA4VUNHQ2xGc1pZbnRsWXpFSWdZSVJqbWFrVGU1OG9HbDNpTUFiN3hGaHMzaE9BekluLW1uODNieHBXZTlfM0RjMm8ya1FoZTRuamZqUVA5RDZPVXkzUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1541
    },
    {
      "date": "Jul 30",
      "text": "US hits dozens of targets in Iran overnight as peace efforts under threat.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxOSnVOeXVGanRXY1VyT01TUlVGZTNxSjlDR05vcTlHcjdRNFU5OFJIRnZSd3RsV3VtNVpCY1lua05jV0F4cnltUlZhek5iYVZTeXFOLUpqaHpjSWdhbGVRZENRR0dHT1RrSTZ6M0l5d0c0RHMwOXFnYjNFcmJ0SFdSTURlU0NPdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1541
    },
    {
      "date": "Jul 30",
      "text": "Iran War Live Updates: U.S. and Saudi Airstrikes Drag More Countries Into Fighting.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMifEFVX3lxTE9lUlNXWlBZaE01azJKdjNfb2hoM1FYYVdzdGRFZ1F0dlBQbU9PSzZLLXhEdWcxRE01VDluUEJKVFIxdU5RcU1kOHN2U2JVbE5WWFFxVjFYeHlxR19xbFpqczA5RnVpaGtWU1QyM09pS0hGb1BWRlcwcFRDVGE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1541
    },
    {
      "date": "Jul 30",
      "text": "Tehran: US to ‘pay the price’ for Qeshm civilians killed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQc2hscnktWGwtTC1yNGhEZTBmb1NLNzk0OHFRamdxRUdFdE1TSzNCemRsVHRUVDNGRnROaUlYV0lYZ3Y5ZENna0JWd1g0bkZkeDhNeFppTGQwbWhfNS1iYW84ZmhyS3lfNTFiV1EzUGVuTlFzb0VRWFdxenlPNU03QkwzX2VJSGxzdTZtc0tDcFZYUlN2V056bXdWQXAtSDAxTVdYQ1NLWkhWVl9mX1lPSC1zanQ4SWdlZVJB0gHAAUFVX3lxTE1nczg2YVppb3k2UVRva2lOTEs5aTEtSU1GMm1DbnZNNF9iZGl6TC1CdHo5dTFhUUR3dWZ6RTk2c0hwTTZuOGJ0b2VpbTR6X25jcEIzSmt0NTF5bk1oWFhkTlprQTVpUUxEM0FKQ040djNRZE1MSzBOcTBqdTdUQ1pMLUYzN2JKU29EUXhyQnY1QjlyRnlFN2lPRFRHLXZJVXJrb2pmNGUxMjU1eE9tVDdGZkxDc19fS1FiUkdNZ3Z0Rg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "aljazeera.com",
      "latestSinceUpdate": 1541
    },
    {
      "date": "Jul 30",
      "text": "Iraq says it had ‘no prior knowledge’ of US-Saudi attacks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxNUndhOUUzYVZnLTU2czFvMzduUEVsdllVRWo0SGNSWUNGNC1yV25nc1dMRU5KWVl2cmd3cW45Z3JlOHlxY0IzZkpxbzl3MFpGV3NaNTRtVTF1c2lkbnZTeGhsRDFkOGNMQXNXRDczVElxRWZGZlI5dnpnTzYxYlRhaHdRVWMxWW9CaF9nRWlaQ2VrUERyTThhdDBYVFRPc3R5VUxBRmVUdlNRc2lGLTk2WVJNQy1TRm96U0ZQLVhWaFpENEpMUVJzQ2VhM0VGbTZzV3hRNDZ5ak0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1541
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
      "perspective": "US/Allies",
      "headline": "US Responds to Attacks Amidst Regional Expansion",
      "summary": "American forces are actively responding to attacks on their troops by hitting Iranian targets, while also navigating the expansion of the conflict to new regional fronts. Concerns are being raised domestically regarding the treatment of wounded US personnel.",
      "tone": "strained",
      "latestSinceUpdate": 1532
    },
    {
      "perspective": "Iran",
      "headline": "Iran Vows Retaliation and Stands Firm Against Enemy",
      "summary": "Iran views recent US actions as requiring retaliation for civilian casualties and urges its population to remain steadfast against perceived enemies. Tehran also claims to be nearing a deal with the US, even as it tightens its control over the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 1532
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Israel Engages Hezbollah While Halting Iran Strikes",
      "summary": "Israel is conducting air strikes in Lebanon and engaging Hezbollah forces, including demolishing tunnels. Simultaneously, Israel temporarily halted strikes against Iran following US diplomatic claims, indicating a complex and multi-front security situation.",
      "tone": "anxious",
      "latestSinceUpdate": 1532
    }
  ]
});

export default LATEST_SNAPSHOT;
