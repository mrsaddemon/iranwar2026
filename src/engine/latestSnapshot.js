export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 627,
  "lastUpdated": "2026-05-13",
  "lastSyncedAt": "2026-05-13T12:34:24.816Z",
  "warDay": 75,
  "summary": "A ceasefire between the US and Iran is reported to be on 'life support' as President Trump rejects Tehran's proposals and threatens renewed military action amidst ongoing regional strikes and energy deals.",
  "lastNarrativeUpdate": "2026-05-13",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 15,
    "summary": "The ceasefire is reported to be on 'massive life support' and collapsing, with President Trump rejecting proposals and threatening renewed military action."
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
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
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
      "date": "May 12",
      "text": "Trump states ceasefire with Tehran is on 'life support' and Iran must make a deal or face renewed attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNdl9NX19SZFZUZzlTLTA4MEtocURLY2M2T2FKUy1qbW5QVzkzY3NGMC0tQ2d3SjRxMlZpak5TNnVDOFY2S19LcENGdk96TGcyTFV0YlVsOEV1YjAzU0tNQmZPYXF6aFk3RzNmWGlxN1hUZnlFUy15TEhRSkRZbkRLelBZLUJ6aVBUcDNPUFNhX2QxOF90S3pBV3hJY3had1JjclI2WVR2RWk5SE0zVlFBZzlVY1d5MTN0YnVLQXdfd9IBxAFBVV95cUxNdDdFOUxQMG5lNDdDczhJSGxxTG15LXRMVUdQTFdHYmFOR0pYYXhYS0c3YmI5ZmVfNkJIM3hXeERmanpYUGN5VDFkTk9YNXVOc1FYczNwSTVoYnRRbnBOWWF5QzE1dVF1ejJ4X2lnTHlJVjZFd0RiejJrWUZhWGpMM05mek1UQWt4SXNGbzJSZm45THpvd0xNYUdDVllUZVVSdU82dnR2QzJoeW9sMVZ5TWtkU2Iwb2tsSlpYYjNON3NFVkt4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 627
    },
    {
      "date": "May 12",
      "text": "Report reveals UAE secretly launched strikes on Iran during the war, attacking an oil refinery.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQMGZaTHQ2QzNRV3F5M2gyMTdERzBxVC1jMzByLUtYYWN3Vl8xSXJZTFVKZ1pVNUxUTUllallITEVublhBUl9FWjFoWWU1WHlIalktR0thTk9sRTUzZnowV1Nqa0lOaS1yakNadnAzZElfWVhpWDJDaWxsRWZweTg0c1NHNVlwNVNORklnc2thci0ybUdDVlQyX1JuTGk0WlhHcUl6WDdiMNIBrAFBVV95cUxOOE1Tcm8xajVaTXp5U25RSjZ3T21jOVpldHBvOEVMemF4WnZxTF9IRGJNbVVyWnZscGlGNjRMM05NVzB6SUFMMk1Ec0ljODVXcUVFUEpPUVpXUU43b01vakVLdWdKLVAxOUxxRjRhQTVMNnFNWjdFWElxOG9HWWRaSG9EWGFpWEtQbTlsWi1URkhmTFd4SUFvdjFMcndPTlNackhWWnJoMDFBTWRH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 627
    },
    {
      "date": "May 12",
      "text": "Israel kills 24 in Lebanon, including two children, in strikes targeting Hezbollah in Beirut.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiyAJBVV95cUxNQWF0SnU1eEFqaUxkcWpIMmgzSDczRXRCQWJhZkVsRTlaZ0U0UE5DMWZWeVAyOEc0SzlLeG85dUR2djR1VWVFTDNucExsV0k0TXRnNTdfUDlJRUsxaFlELXdIbVc3cVhnd3BocnFTNmc3aEQwOUlPcGpXbWVCMHZlTzlFZkg3RmZIdGJYUkxWYmFaNjAzV1lraHZSM3FaU3lob1FPWlNBTEIzSW5RdnR6ZDN5WVRWVWlsX01NYzFRYUpQeUl3aGRDUDhsaE9HTUdheWtIVHd0eWVTdVFQUUxiZHpla0o1clFpZHhFbU9hWXpkY3o4eWMwaWM2V2dBTGdzSGRteTFoY0dNalRUSHlzWVNucU1XT0xsc2pPYWlkTWlvZXlRQzZfOHN5dXBjOGlHNmZxWWNlUHYxdlBzVV9NMjhBanJ6cG9P0gHOAkFVX3lxTFBEQ001SnhLWEVpTWJMMU9kQlFINEZreUliRHNxWkxHakZHbGowWllDMjZWeXROeks5TDAxM2g3Vy1YWm4tRjlkQ1R1YVo4Y2VQS3hYQ0ZKMElFenZJNTBXam5ZVUNhWjRyak5uaXJMUWs4dDZHR0luRjRfMmtEV0k3QkM5TFF5TVlEd2VZejVSRW5nS3k0OGczUko3TGFmRFRQcFA5MW92ejczQUk5N2p3X2ZmSXplOENhTGlITDFoZUlkVWVaZWFka0l2eDYxLXlodkdmaFBqRF91TkRGa2ctWjdNU0xSYUxzcUFuZ2V5TEYxd0VxZ3l5eEY2TFdlQldpbmlhN2ZJejBwMk5JQTNWaGp0XzJWNmRSM2hmY2ZlVXUzYkJXVElRVGJwazktUXlUYlNVa1pRMVVBUjloYnl1eUZUc283VkVHbHFfclE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of India",
      "latestSinceUpdate": 627
    },
    {
      "date": "May 12",
      "text": "Hezbollah drone successfully hits an Iron Dome battery in Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxPUDdWQnNyUmhIazZEbW1VMlFaZTdUbnhIUTJMUVFBZmxoWVg4OUU1REo0S3VKRW8wZHZxVEtOLWY4ZmFORUZPc0drbnhGbnhGNnNmbHViR0Q3b0hVZ2c4bmpSTC0ybnhJYmZQT2phcURaZFRoLUNCSXFPcVRuZTVBTHo5MTZNYWkyamxKR2Y0WTNmTFA5ZU5qMTBENUhvRF9VOVBXbjcybw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 627
    },
    {
      "date": "May 12",
      "text": "Iraq and Pakistan strike energy deals with Iran as Tehran asserts control over the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPeEV0N2V1QmJhSWFBeG9JZE5EV3I1RFpoY3hicVNfeG1BVWdwcDFXSUEwRzQ0SDJLVk5wQnhCSWc3MWJNcnFkNGRoTERUT0d4ZXJVU05iTHgtU3RwbW5SUHZRbXdUbERCclpXRDV6WHpnaERHM2cyX2ZmVlg1cDJTUHlNMmozVVVkeVcxdm5WSzNHQ0s3Nkx4dndEaUlfUHNzcVVYZDFtYWhZVWp4ajZuemQtdnMxWDVkNFRDSEo4ZHFHQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 627
    },
    {
      "date": "May 12",
      "text": "Pentagon estimates Iran war cost at $29 billion and considers renaming it 'Sledgehammer' if ceasefire collapses.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxOeXhhb0N2aGpZcW84Q0l6Wmg2QXk5RnVHLUstb1FteVFyQUZGeWtXeWdxbDRZbFhZY0xqVlVxckhhLUh3UFgydUxpQWZkY1VmazQ2aTJxRGgzb3F1SXc2ZjBoYnAyWjRXY1NuY2xYNXFDbGNCR1cyQlpzd3RPMms1aFFpZkRXV0VmUzdBamtWSkk3N3BsUnpBS1E3bm11R3dOR0FhN3hpOFNyOFN5NGhESGZacm1KSjdsWF9zNEI1RV9KZFVrODEtaEQ2N0k?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 627
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
      "perspective": "US/Trump Administration",
      "headline": "Trump Rejects Iran's Offer, Threatens More Strikes",
      "summary": "President Trump has rejected Iran's latest peace counteroffer as 'totally unacceptable', stating the ceasefire is on 'massive life support'. He threatens more strikes if a deal is not signed 'fast'.",
      "tone": "defiant",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Iran",
      "headline": "Iran Vows Defiance Amid US 'Reckless Adventure'",
      "summary": "Iran states it will 'never bow' to pressure after the US rejected its peace proposal, accusing the US of 'reckless military adventure' and highlighting its military playbook to cripple Iran.",
      "tone": "defiant",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Lebanon",
      "headline": "Lebanon Seeks External Pressure for Ceasefire",
      "summary": "Amid rising Israeli killings, Lebanon is seeking US pressure on Israel to halt attacks and operations, also turning to Saudi Arabia in pursuit of a ceasefire.",
      "tone": "anxious",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Analysts/Observers",
      "headline": "Ceasefire Pretence Over, US Retreat Predicted",
      "summary": "Observers suggest the 'pretence of a ceasefire' is over following increased Israeli strikes in Lebanon. Some predict the war on Iran will likely end in an American retreat.",
      "tone": "skeptical",
      "latestSinceUpdate": 611
    }
  ]
});

export default LATEST_SNAPSHOT;
