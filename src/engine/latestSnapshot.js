export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2648,
  "lastUpdated": "2026-10-25",
  "lastSyncedAt": "2026-10-25T06:57:07.596Z",
  "warDay": 240,
  "summary": "Tensions are escalating in the Gulf region with reports of US and Israel planning renewed strikes on Iran post-elections, while Iran issues warnings against US military presence and reports attacks on oil tankers.",
  "lastNarrativeUpdate": "2026-10-25",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is reported amidst escalating tensions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
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
    "escalationLevel": 80,
    "oilDisruption": 85,
    "tradeImpact": 76,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "date": "Oct 23",
      "text": "U.S. and Israel are planning for a possible post-midterms attack on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTFBfUFZtRXd6TnpuQzBORzRVVl9IMG1uUnExaHFFUjNwVXdLM3ZvTTVxX09zMlBZNUJuclVhNHlsUjZCVzM4WHJOM0wyNF9kelR0T2pFLVFTSFplN1A1UkdsV2dHMEZLbW1UMWhCdVZiZnI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 2647
    },
    {
      "date": "Oct 25",
      "text": "Iran warns that U.S. military not allowed in Gulf 'under any circumstance'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2647
    },
    {
      "date": "Oct 25",
      "text": "Iran says 7 oil tankers attacked in the Strait of Hormuz as fears grow of a return to war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPOVo5NGVvb09wSzBSTFVOa21PVVRNWWlEYUd1ZEU2U0tjTm55R3hYQ2Ezd1lUWUYwbFNpVUhJVDBxNlZaamJKaDJvblV1dl83LVhSX21rMkZuUXQtWFZmZmpZbXRrMkwwRzloVnA0QUs0cjN5MXNiZDBKR2MwaW9Sa1BKUGlaRUlQeG5PYnNPcTQ3YXZFc3QybjE1ZmVCYVJmY0doag?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 2647
    },
    {
      "date": "Oct 25",
      "text": "Iran has ramped up efforts to target US personnel, intelligence memo warns.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPSnBGckdpTkdaSnNZeFIyenI0MVVDMHd6R2ZDcTlUX3I4OWNNMlRjd0FTXzhCY09zakU1MWx2RzBpRW1QYTRxY2M3UWpBZHR3S1JlNjQ0WlIyRlh3ZnhNaVZ0OVcwU21YMjUyVVF0RXB0VXFLMWpGdEVtak1DUktTdUdLWmQyWGRFQ0xmb2Z3WG1nSHdfVUxlbUlsc2RJRmNmWVRHS1Qtd0RCVU92d2t1S19HbjlFVzdoREJONTRNYk1iZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2648
    },
    {
      "date": "Oct 25",
      "text": "US had asked Musk to block Starlink for Hezbollah, Houthis amid Ukraine uproar.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPVGtaTDN3S1RhbEp0N3pmdFBTdkI5MzBsTEJCU3Itakc4Ul9HTnVJRnN1VWkwbllIR0g4SFhVOEJFaTMxZXZDaTdDSmExOXF2Z0FzTlc0TTZFbWlMWVA3Tm5nREJrNjFEejM4TC1aMndsYktoanJoekJiWFlBNlhzTWlHdkxLZ3JMeERnWnlzU3hYSVR2b2RNdFBIelBKbWprdVhMSnJFdF9rcVZucFhocW9NNmp3Q0xsd0VCdtIBwgFBVV95cUxNcDdvTTQwQjRtWW9hZ1ZfbGZKWlBHN25HdG5OWlVaZVlBLUtLZWJzQVo5MVBkZUlKdGxDWjBnVUNZanlvS0lIQ21YaGRaRXhnSTlJdzBCWmJ0WWZKX1JKZ0JyRld4VmNVcnpEbEhQQmxuVGFiZzE2UXp1bE9TODRZY3RlVGY0dzU5Q28tTWlRbDU3OFVvTy1ndVlkYUduRFk1aVU3Q2N1TUc3R2tRYVJsaFlHLWxxMm1qQlROSG1mUm80dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2648
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
