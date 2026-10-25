export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2649,
  "lastUpdated": "2026-10-25",
  "lastSyncedAt": "2026-10-25T12:29:37.724Z",
  "warDay": 240,
  "summary": "Tensions between the US, Israel, and Iran remain high, with both sides issuing threats and preparing for potential renewed military actions, while regional proxies like the Houthis continue attacks.",
  "lastNarrativeUpdate": "2026-10-25",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are currently reported between the primary belligerents."
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
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Oct 24",
      "text": "Iran threatens to strike oil and AI facilities across Gulf if US and Israel renew attacks",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxQSkEyT2MxcnpyTV9nYUk1TXh1WlV5cUc5NWd1b1FZVjM3Q21KY1cwS1FuLWFsaGNVWTlHZzBuU2VxckxiLXdRcjZuQWliQVY5dTUwUG42RkJfZEpid2l6c3FQcmsxbi1BUU9kWUg2OEFEQlExTF9SdWRjdFYtamVfbVZ2bUZFZXhHTlRTTnRhZk0zaTdYaHZCTEdxTGVvM1RfbVFGX01vczM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2649
    },
    {
      "date": "Oct 24",
      "text": "Iran says won’t allow US warships to get close as Trump ponders new attacks",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxPbnhYekZtTGYtNUxRY1l0SkNlclVxV1JhVHJ2QUNzRFhRQW96Z0FWbXBSakNhblFEYk9kNHBibExfT0xFVFhLbUEzLWZpR0VNVC0tT2NlTTRIWmlaRThSTXN5OEF6d1ZiSEhGak11ck5zclJpYkRPODdJdFNqLXJTWjZiemlRSnZuOUV1MWY3eDZYMTBjaThzRDJaU3VVQnFqbFQ3bEt2enJEeHNUcm1nZTBnT1lXNXfSAbwBQVVfeXFMTzcyR081VVdqUVNRX05XQ0NxRFFPdm81M0NEV0hPcm9FYlZmTEJ4bTBPQUtjSjZvOEx3aGFWdGNDbHkyZzdoVDlVZzZyU1NrNkt4YkhBZGxZcm1vZ0tlWTB0T3lZbDdaX3dnSkZVdUpqc19KZnpWS3Vlc2tiN1JEQUNWZEVZYmV0ZWVyYXFENDU4a2FqU3ZWZGR5dFFreHl4VzVZellsU2hwQVcyZzBBTjl6SG9WQUpBNmprOXA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2649
    },
    {
      "date": "Oct 24",
      "text": "US and Israel drawing up plans to resume attacks on Iran post-election, sources say",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2649
    },
    {
      "date": "Oct 24",
      "text": "Houthis attack Aden, missile debris falls on Mecca",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOdEQ3dDlXS3dlUDRVbThyWHBYODlFYVI0TzZwVmlVT1NGNTUxd2hpUlFtcndING95SUFTNGVZZzhoYUNvR0ZXRVF3dkdEMWEzYnAzdDZGQVA2bld1ODZ1WGxoS0dCQ1BwVjZJS2NtVmRWZ1drb3AzUlVYVnRNYno3WEhfWXpXV2xKWWhwV0MzRktUYVQwVHBHTzRkVTR2X2pXWE80Qkl6eDJsNHgxQVo2bF9XSTBMd2lVQUtz0gHAAUFVX3lxTE9vSTZXbnZFVVAwem5GaFpCNng3VVVYU19jOXFqN1ZoNWduY19UblA4aTB6WUt5UV9ZZ1cyRGNFRGh0WXBSdWpLX3FXLUN5NlFzZ0ZhYV9maUcxZC12cVNUZVRnYUxGNTZkT2lIc1B0aWdGdF9LeXlmNW80Y3ZmMno5ZGZObHRqcFM2anB0b1NPLTUyTTJUaWpLbkNYV3ZLUVdCaHlPNlVqNzRTa0VpeTJCaGtURnFqSzR3YkVLS0RENg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2649
    },
    {
      "date": "Oct 24",
      "text": "Signs point to renewed major US military ops against Iran",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikgFBVV95cUxOa09BTzk4bHFkbGE0QWFzQ0ZlUGZUNmFhWHBwVDliZFRrcl9GSGV1S2dBUzBWUVZ4ZU95Qm1IVWgxWnZNWFBCeEF6Zk1BaWo1aHVwNnUxUTg5VlU5Z0EweEpPSzlUNlVVWmxVd0JjbFR0QmhwRVBGSFZfVzBiUkpLdjhxUHNWaTktYmx2WDl6cERVQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo",
      "latestSinceUpdate": 2649
    },
    {
      "date": "Oct 24",
      "text": "Iran has ramped up efforts to target US personnel, intelligence memo warns",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPSnBGckdpTkdaSnNZeFIyenI0MVVDMHd6R2ZDcTlUX3I4OWNNMlRjd0FTXzhCY09zakU1MWx2RzBpRW1QYTRxY2M3UWpBZHR3S1JlNjQ0WlIyRlh3ZnhNaVZ0OVcwU21YMjUyVVF0RXB0VXFLMWpGdEVtak1DUktTdUdLWmQyWGRFQ0xmb2Z3WG1nSHdfVUxlbUlsc2RJRmNmWVRHS1Qtd0RCVU92d2t1S19HbjlFVzdoREJONTRNYk1iZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2649
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
