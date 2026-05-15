export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 653,
  "lastUpdated": "2026-05-15",
  "lastSyncedAt": "2026-05-15T18:58:30.262Z",
  "warDay": 77,
  "summary": "The Iran conflict continues with reports of ceasefire violations, regional strikes, and naval incidents, while international diplomatic efforts and concerns over nuclear materials emerge.",
  "lastNarrativeUpdate": "2026-05-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A ceasefire between the US and Iran has been reported as violated by Tehran, while a separate ceasefire in the Lebanon-Israel conflict has failed to stop fighting."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 56,
    "globalPressure": 69,
    "allianceInfluence": 57
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "May 15",
      "text": "Trump says China's Xi Jinping offered to help end Iran conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxOZ2tONFhJQVoyakZsTmd1VHo4OGRtZnFmeXZJTE5lV0NaQ0FOX3hkNGh4eUpGaERCUWl6UGpVV2RFQTlIaXZrcXA1MEdmWFpIRnJGTlRCc0NYcVI3WXVCSFhWOFZhLTh3ai1NTDNXd1psYVZZN1lMUlZRNlN6c0lXOVRVSmJHUi1uWnBzUWNwU0tULTQ4dXRYYndFaWRuS05fQXNoRNIBqgFBVV95cUxQaUVBbEh2R0hQWFkycDl1VERzdVJXYV9sZlhGZU5qVnNMYUQ2ZG1EV1ZRelluRGR3R2N4RmVYUl9JVmFPdmFDcnp2aWlEOWFNeFRGcDBZR0pYLXd2NEVEZGdCYnBzQm5rcUJGZFlRNGxsanJTUUxSZTRCQ3lFT2lfTDNHM3NzQnYycVlVdDcwV1pTY1lwSXB5c0ZiOUQxekVJOUozTU1OSmh2Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 653
    },
    {
      "date": "May 15",
      "text": "Tehran says US violated ceasefire and targeted ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQWmMwcHRNRzF3SVdqU3A3dFJpS0YyUFp3aFhncHVDZ0FQd0xXSWJwdTFteUEya1d0VEkxazRtbkNyMi1hVV9SdTBBdktJM29GaHlOdThaS1M5cUlwdHo2RTFiSDNZLTlJb3VTTTFYdlVjemlYX2ZaWm9ubUhLOTdTUGdnMDZpVFh3RHlvbWZLODM3ZmlDeVFMRkJ0RlZNSDIzNWVNc3Z4UlpScGZheHdteTl2YUxlYnotWDFJ0gHAAUFVX3lxTE85dVRselp4VWZ0QXpJTXJTaEs2aS1tOUdGbXJjdVhiSXZ0TkxlMFI1RUdmZFVENFhQSjRQYk45ZzR4X2lpcU5XOHZwQ0JEcUtHaDZIS0FXNmlScjhhNUdmLXAwNmpqMkRPS3RTNGR2dFpHT3doWGVyTHRGUklYMm5qcDdjRTJKREQ2YmptMVctVVRsc08wUlNDRFBwOTFORUtaVTFSY1R2NDNJX28zZ3pLYzdNcXlWOGtwNVdpZ1Zxcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 653
    },
    {
      "date": "May 15",
      "text": "UAE secretly launched strikes on Iran during war, attacking an oil refinery.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQMGZaTHQ2QzNRV3F5M2gyMTdERzBxVC1jMzByLUtYYWN3Vl8xSXJZTFVKZ1pVNUxUTUllallITEVublhBUl9FWjFoWWU1WHlIalktR0thTk9sRTUzZnowV1Nqa0lOaS1yakNadnAzZElfWVhpWDJDaWxsRWZweTg0c1NHNVlwNVNORklnc2thci0ybUdDVlQyX1JuTGk0WlhHcUl6WDdiMNIBrAFBVV95cUxOOE1Tcm8xajVaTXp5U25RSjZ3T21jOVpldHBvOEVMemF4WnZxTF9IRGJNbVVyWnZscGlGNjRMM05NVzB6SUFMMk1Ec0ljODVXcUVFUEpPUVpXUU43b01vakVLdWdKLVAxOUxxRjRhQTVMNnFNWjdFWElxOG9HWWRaSG9EWGFpWEtQbTlsWi1URkhmTFd4SUFvdjFMcndPTlNackhWWnJoMDFBTWRH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 653
    },
    {
      "date": "May 15",
      "text": "Tensions flare near Strait of Hormuz as a ship is seized and another is sunk.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxQVVhXNE8zMGQzQzVvNlhzSUhqNmdxcEFSVkt5a0xlR1JxV05iRzZYUXFEQVJQd0tTWVUwMDJIbDRsSVdjbU1oQ0JNRFNGX244LXc2VC15cXZvam9LRlZhaE1WNGFGRjFwZDhIZXI3UGZfR0FWMHRmUHQ1MnEzb21VanU0UjFTQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 653
    },
    {
      "date": "May 15",
      "text": "Hezbollah support endures in south Lebanon as ceasefire fails to stop war with Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE90bndORFFvMndlVVdQd1BzRXdjaGVPSHI3RDZpMFhJdXBhcWxmdGdEWUtuc1MzMWZZbV9hc0FiQlJaUndTWlNpVVBPcUFrMDJyTThyR0JQcUhhQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 653
    },
    {
      "date": "May 15",
      "text": "IDF Staff Sgt. Negev Dagan killed by Hezbollah shell in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxOeTBlSHdZSnBxbmpCelJnejFnUUVHX2ozUnpNNkd5bFIyZ2JnMVJNSWwzZjdlb2FjSFJweXpJckpqbEVEVXYxaXNlVU13WGFQXzVnOGFmSUdtRURieUlaSnRIY05fZUh2V29TRWU1clpJYnd5MDFMaWE5ZDgwc0JLX2RGR2h1dHJJN2RwR3pWVkF2d1NYVDZSU1BYaFhSTFY0Y0Frci05TTBpMlRsNzFQNDh4Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 653
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
      "headline": "Tehran Vows No Retreat, Prepares for Renewed Conflict",
      "summary": "Iran maintains a defiant stance, vowing 'no retreat' and actively preparing for renewed war through IRGC drills. It has also expanded its definition of the Strait of Hormuz and deployed fast-boat swarms, signaling readiness to repel attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 634
    },
    {
      "perspective": "United States",
      "headline": "Trump Demands Deal, Threatens Renewed Strikes on Iran",
      "summary": "US President Trump has issued strong warnings, stating Iran must make a deal or face renewed attacks. US officials indicate 'making progress' in negotiations, but the Pentagon is considering renaming the war if a ceasefire collapses.",
      "tone": "strained",
      "latestSinceUpdate": 634
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Hezbollah Escalates Tensions, Threatens Beirut Occupation",
      "summary": "Hezbollah has introduced unjammable drones as a new threat to Israel and urged Lebanon to withdraw from direct talks. Reports suggest Hezbollah is planning to occupy Beirut, further complicating regional stability and normalization efforts.",
      "tone": "anxious",
      "latestSinceUpdate": 634
    },
    {
      "perspective": "Global Energy/Shipping",
      "headline": "Strait of Hormuz Tensions Threaten Oil Flow",
      "summary": "The world awaits the reopening of the Strait of Hormuz amidst Iran's expanded definition and deployment of fast-boat swarms. Despite an Eneos-linked tanker crossing, the attack on an Iranian oil refinery by the UAE highlights significant risks to global oil supply.",
      "tone": "anxious",
      "latestSinceUpdate": 634
    }
  ]
});

export default LATEST_SNAPSHOT;
