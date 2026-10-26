export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2655,
  "lastUpdated": "2026-10-26",
  "lastSyncedAt": "2026-10-26T10:28:15.392Z",
  "warDay": 241,
  "summary": "Tensions in the Middle East are extremely high as the US and Israel consider strikes on Iran, which has warned against US warships approaching and reported damage to oil tankers in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-10-26",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect; tensions are escalating with threats of military action."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
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
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 70,
    "tradeImpact": 66,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "date": "Oct 25",
      "text": "Iran states it will not allow US warships to approach as President Trump considers new attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxPbnhYekZtTGYtNUxRY1l0SkNlclVxV1JhVHJ2QUNzRFhRQW96Z0FWbXBSakNhblFEYk9kNHBibExfT0xFVFhLbUEzLWZpR0VNVC0tT2NlTTRIWmlaRThSTXN5OEF6d1ZiSEhGak11ck5zclJpYkRPODdJdFNqLXJTWjZiemlRSnZuOUV1MWY3eDZYMTBjaThzRDJaU3VVQnFqbFQ3bEt2enJEeHNUcm1nZTBnT1lXNXfSAbwBQVVfeXFMTzcyR081VVdqUVNRX05XQ0NxRFFPdm81M0NEV0hPcm9FYlZmTEJ4bTBPQUtjSjZvOEx3aGFWdGNDbHkyZzdoVDlVZzZyU1NrNkt4YkhBZGxZcm1vZ0tlWTB0T3lZbDdaX3dnSkZVdUpqc19KZnpWS3Vlc2tiN1JEQUNWZEVZYmV0ZWVyYXFENDU4a2FqU3ZWZGR5dFFreHl4VzVZellsU2hwQVcyZzBBTjl6SG9WQUpBNmprOXA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2655
    },
    {
      "date": "Oct 25",
      "text": "Iranians express fear of a possible return to all-out war as US and Israeli elections approach.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxPeHQ1eTVHV0lnTUxkcHZTSmxubVl5dHBCa1VrTHNFV1hVOUxKaXlmRXc0QjVrRlJDQW5CMk4zRmV1bGxsTkZ6b19peDRaX2hlNHR4aGF1ajNoenJjMl9fSGFIdzA4LXJUbzNZaDI1bGMzdUd5eklrNjg5MVp0WHFqbE93NTU2UnB0THZ2ZERwLUlrRHRRODF1WWFCaXc2SGJZV3hZbVBCZGlRV3BHemJ2SGhHakh6cjdnLWNvellCVVVtTl9zQkdkRkdfdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Politico",
      "latestSinceUpdate": 2655
    },
    {
      "date": "Oct 25",
      "text": "President Trump states he is weighing a deal with Iran against action to 'finish them off'.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2655
    },
    {
      "date": "Oct 25",
      "text": "Iran reports 7 oil tankers damaged in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxOTUdQalhkeHV6MjBUcDhWSGNFcUpEcGI2em40Y19zcFB2aVNaMVZveXc1QmMweUx5Mm9yak9ZWUtwSDNPdkVkaWw2NzRlZTZBdkRpQnlXdDBlOVVjN0hfLW9YR3lHR2NFdEU3WktoYzk4M1NGV0RwV25tVjBUUDFjVkJ2b3pMNlc1NG43bUkwcEwxa3JmYk9zMHV3YjhSc1J4WjMtc21tMlRQLVJNT0gwY1JyUdIBuAFBVV95cUxPWHI0VlZ2NlpRSGlRNXdGUFFQZ3J4bFdEdVpBYTY4Vjl6UDZnQS13anNtci1yRGhtdkJHWklnaFc1dGZ0RWt3VGpxczlyT1FUSTBBRWFJUDhUeXdYT29jWjVRYU13NTRZeHR6b2hTOUlLek5PRS03Rl91Rm80eE55MV94TWNZSFNxTkRlQWtrdWI3ZjhfNTJrUElXMWNlREZVdnZTT01aTWJIajdla1BZczBTNXdSb2t4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 2655
    },
    {
      "date": "Oct 25",
      "text": "CENTCOM chief conducts an inspection flight over the Strait of Hormuz, affirming the waterway is clear of mines.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTFB5dll2X1ZsYkpjQzY1RHBxNVdoWjRyOGx5SmFtTF9vdFFmcm85SVN4dmprdk9hOTFBME9WRnVHWkhLSGNCRXluTUQ2U0pTUWRxcks0bjJhaC0zSnBB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2655
    },
    {
      "date": "Oct 25",
      "text": "Saudi, Pakistani, and Turkish officials are in Tehran for talks amidst rising tensions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPRHlMczN4OHlwQkRhYU9rV05TLUtVS2pjaGxWTXMxTGs3RnJNUWFJYk1KdVlPZlhpNTVKYnE1aGZ3N0U0anluNWI4RHRUcGo4c1NJRTNhM2I1UXJWa21TRUIxWmtIMXBVSjlObUxDU1hhTEdkajAyTmx1SnlUSkMxNXhzLUpaNVpFcTVxOTBBWTRBZkFUWlo0blNYRFRIWUhRbkVxc0xRZTBOTE5McXZzOUwwTHBsdm5hQTlTLWdB0gHDAUFVX3lxTE96a1VjOTJNRXBMNV9HZ3hDN3BXWkRDOTVkZ2FVazI0V3R1TmZveHo4ZzJkUS1ONGt0aTc1MW15cHVwU08zaVEtUlhDa2k1dWkwSUhCU2RWRjh2OF9ZdS1pVk9Vc185aGhEZzdCWTUyVkRzQk9ucDJqc3FRWThJRE1NN1ZaVHdqXzRIYlc1bFFURWRLdVlmWVpJUFptVmpySGhnSW1teUI4NWc4TGt1U2dGVnZCdEYtX01HYm0yczZxTlcydw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2655
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
      "perspective": "US/Israel Strategy",
      "headline": "US and Israel Plan Renewed Strikes on Iran",
      "summary": "The US and Israel are reportedly drawing up plans for renewed strikes on Iran following upcoming midterm elections, indicating a proactive stance against perceived Iranian threats and actions. This planning suggests a coordinated effort to address regional security concerns.",
      "tone": "anxious",
      "latestSinceUpdate": 2647
    },
    {
      "perspective": "Iranian Defiance",
      "headline": "Iran Warns US, Claims Tanker Attacks, Threatens Infrastructure",
      "summary": "Iran has issued strong warnings against US military presence in the Gulf and denied any deal offers, while also claiming attacks on oil tankers and detailing plans to target Gulf undersea cables if conflict escalates. These actions and statements reflect a defiant posture against external pressures.",
      "tone": "defiant",
      "latestSinceUpdate": 2647
    },
    {
      "perspective": "Regional Instability",
      "headline": "Gulf Nations Brace for All-Out War",
      "summary": "Gulf nations are bracing for a potential return to all-out war between the US and Iran, reflecting widespread regional anxiety over escalating tensions and the potential for broader conflict. The situation is viewed with significant concern regarding its impact on regional stability.",
      "tone": "anxious",
      "latestSinceUpdate": 2647
    },
    {
      "perspective": "Hezbollah Under Pressure",
      "headline": "Hezbollah Faces Internal Discontent and External Pressure",
      "summary": "Hezbollah faces internal discontent in Lebanon and external pressure, including a US request to block Starlink services, suggesting challenges to its operational capabilities and support base. This indicates a complex environment for the group amidst broader regional tensions.",
      "tone": "strained",
      "latestSinceUpdate": 2647
    }
  ]
});

export default LATEST_SNAPSHOT;
