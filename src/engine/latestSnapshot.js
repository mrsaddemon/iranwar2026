export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2650,
  "lastUpdated": "2026-10-25",
  "lastSyncedAt": "2026-10-25T16:44:04.363Z",
  "warDay": 240,
  "summary": "Tensions between the US, Israel, and Iran remain extremely high, with threats of renewed conflict, increased attacks in the Strait of Hormuz, and discussions of potential deals or further military action.",
  "lastNarrativeUpdate": "2026-10-25",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst escalating tensions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
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
        "precision": 0.85,
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
    "nuclearIndex": 45,
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
      "text": "Iran update details evolving landscape since February",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxNSU5RUE1mMXBUSlFKam8zamJLelROVFZybXVxNkZKZTBLM2swWEZxZmJoUVJYcmhEUEVUSzZ5RW82Y1VnOTZzdzN2NzNacE1ucG5waUNXRS1mZHFVV2FTZE5zeDNobXQxNU0zLWNJd0cxSmJoYnBjNkRzb0xPZ3p5YUwyblZRTlpwUDRsLWtfOXBwbV80ZEUzNmY1eXZaSUtlQXVoaHpUcFlubHlvQUQ2YdIBtgFBVV95cUxQLUs4eDdhSGt3aUV4SUJRSG9PTlhTaDJmMDFoU281VmphR01WVVE2MDdTWld1R2VZZ09EbnM3S0JwQXlwenNwOUp5Y2hkb1pXMkk3S2dsRFRCVGRrcGJJalRKa1R4RmxYSXpwZlIxSnU2NDZKYXMzdzVVTDVnUGlGUXlrTzNTam9GYnVxNFQ2eE9sT1FkQnZPU0EtTVZkb2lqcjZ3ZWtXYjVOUUk2aVZYcXZZT0lxUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2650
    },
    {
      "date": "Oct 25",
      "text": "Iran threatens to strike Gulf undersea cables if conflict resumes",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxOc28yS2Z0aVExaE1CeEZtYURTUG5NMDBhZnVidVctdjJZak1tMk5oQy1aU0dlQzBJbEV2SWlUdUdxNC1YMngyZEhLM0l3ZmI5dEliUjRPNVdsSnV2QWV2TS1TNVhaN2RTYlpSaEFCMjFHRGs5Z29Cek10c1BfUEZROHpjd2NIRHFfNEhLUGdhbDBXQ2hfXzUtc0daeHZPRlpoTXo5TjlvTVZuWXgwVmtEbG5jemZUWDRvRDJvWVQxb3VKdzZucnBlUEhPZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2650
    },
    {
      "date": "Oct 25",
      "text": "Iran threatens to strike oil and AI facilities in Gulf if US/Israel renew attacks",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxQSkEyT2MxcnpyTV9nYUk1TXh1WlV5cUc5NWd1b1FZVjM3Q21KY1cwS1FuLWFsaGNVWTlHZzBuU2VxckxiLXdRcjZuQWliQVY5dTUwUG42RkJfZEpid2l6c3FQcmsxbi1BUU9kWUg2OEFEQlExTF9SdWRjdFYtamVfbVZ2bUZFZXhHTlRTTnRhZk0zaTdYaHZCTEdxTGVvM1RfbVFGX01vczM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2650
    },
    {
      "date": "Oct 25",
      "text": "Houthis attack Aden; missile debris reported in Mecca",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOdEQ3dDlXS3dlUDRVbThyWHBYODlFYVI0TzZwVmlVT1NGNTUxd2hpUlFtcndING95SUFTNGVZZzhoYUNvR0ZXRVF3dkdEMWEzYnAzdDZGQVA2bld1ODZ1WGxoS0dCQ1BwVjZJS2NtVmRWZ1drb3AzUlVYVnRNYno3WEhfWXpXV2xKWWhwV0MzRktUYVQwVHBHTzRkVTR2X2pXWE80Qkl6eDJsNHgxQVo2bF9XSTBMd2lVQUtz0gHAAUFVX3lxTE9vSTZXbnZFVVAwem5GaFpCNng3VVVYU19jOXFqN1ZoNWduY19UblA4aTB6WUt5UV9ZZ1cyRGNFRGh0WXBSdWpLX3FXLUN5NlFzZ0ZhYV9maUcxZC12cVNUZVRnYUxGNTZkT2lIc1B0aWdGdF9LeXlmNW80Y3ZmMno5ZGZObHRqcFM2anB0b1NPLTUyTTJUaWpLbkNYV3ZLUVdCaHlPNlVqNzRTa0VpeTJCaGtURnFqSzR3YkVLS0RENg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2650
    },
    {
      "date": "Oct 25",
      "text": "US and Israel reportedly planning renewed attacks on Iran post-election",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2650
    },
    {
      "date": "Oct 25",
      "text": "Ship attacks in Strait of Hormuz reach record high in October",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxOT0p6ZElVazFhVWJxRy15cXJ6X2VJZlBZbkp6dTFNUGNzb1pCbjYyenA2UE5ERXBYMnMya2tYNkNfcGN3U3FGZ3V2MzdaN0RWUng5VFJHVl9jVk9LLVJGOVFVRFNKR21sc0pULWQ0Vm9uQk9tODlWTGs0U3BSeFd2MC15X2RIakQ2Mkw0eFhMa1Y2UUVWYVBsZkhrZHowVnlaWUpKZA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2650
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
