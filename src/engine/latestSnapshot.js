export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1420,
  "lastUpdated": "2026-07-22",
  "lastSyncedAt": "2026-07-22T22:44:12.237Z",
  "warDay": 145,
  "summary": "US and Iranian forces continue to exchange strikes and threats, escalating tensions over key waterways and civilian infrastructure, while discussions on regional stability and war costs emerge.",
  "lastNarrativeUpdate": "2026-07-22",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect as US and Iranian forces continue to exchange strikes and threats."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.88
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.78,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.87
      }
    }
  },
  "global": {
    "nuclearIndex": 38,
    "escalationLevel": 92,
    "oilDisruption": 88,
    "tradeImpact": 80,
    "sanctionsPressure": 69,
    "globalPressure": 92,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Jul 21",
      "text": "Pete Hegseth testifies at hearing on Iran funding, stating the war has cost $37.5 billion.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1mbS1zeE9UQWs3WEN6aXZTeTNROVZveU1GLTBlUm1kRGRlTDJaNjU0cGx6QTJrcGF3bGdhVFJzUFZ6Yk9VVEpST2UzNzYxQVVBRFNwdDFhb21mV0thTW1kVFhPa0l2aHNrcDFTWUV3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1420
    },
    {
      "date": "Jul 21",
      "text": "US military reports carrying out strikes on Iran as both sides threaten civilian infrastructure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQVkxVRHNEai1jeXMzeVdPZVZqZmJvUjBqdTY5ZVZyWEp5bC0yWFJTWldhSlhlbFhoRmEwcFBnNkk0UWdDdHZMWFRXMk5acElxZEFSQ0otZzFQRElSMXdER1NlT0ptZUxVbTRPT3dFM25rOGtsb08yLUdXRll4SkhUZk9QejZ2RWZrb1hLcmhBYktXeEhrTTZIR3FTSTN6RUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1420
    },
    {
      "date": "Jul 21",
      "text": "U.S. and Iranian attacks continue as tensions mount on a key waterway in the Red Sea.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibEFVX3lxTFBmVHBOV1ItYWFfdHBVZmEyQnRtTnlvVVozMjA3UnMzbFBZWDh0YmpwTHZXM2k3SUtJcGZDSlpNWklVNzhkMkxNRnQ4emZRR2VWdm1CbXo0QkR3M2ZVeEpDM1RsTjExanBVdHJqcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1420
    },
    {
      "date": "Jul 21",
      "text": "Trump threatens ‘heavy attacks’ on Pickaxe Mountain and vows to hit an Iranian bridge or power plant for every ship Iran attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE43V0hGVGNEUGdTbU9TOUpTR29YVzM2UGtyRGMzcXlIbEdxNVNPLXlhZ003dWhtWS1ZbjNmT0t1MmFPaWdtN1QwRXlLcHVTbFoyWWNCTTBMdlBJc0pUd19mdFdPWXlhV2Y4ZWZfaXI1MzNQRGJzSmRkMVhRTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 1420
    },
    {
      "date": "Jul 21",
      "text": "U.S. announces another troop death as Israel warns Tehran's attacks are coming close.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNWnJYc0NUMEFyWXc0S0x1LVFjZXNDcV9WQm1sU0JTX05BN1hQSkxEcmYyTzdGdHpuVFJHZWo2Q25JaVptLTZEOEZKOFFJQ0pWV2tCWDNpa1NxbFNaX0x6dkF6dEw2enNEdEdDOGlFMXg1aG51dWRzN2VyaElzRnBkZkFnWkc2UWxsZmpUelNvNFFzejJMZ29pYm9vR2NUUURDNmhaRTdneGx5aXNYdmFqWnJRVWt5ODZ0bVHSAb8BQVVfeXFMTlZhWS1lMjFKSUlEOUcwVUd5RWtjRzdKamdKaTJHVlFTejZWQzdIUmd2Q203S1g3c1d2eUlxMEtkeFFpa2ZoaTNfcUtQcFJLdUF4UU9qWDJaUFlEYXNkdE51UHh2b2N6eGNaVkZ5NUpFUU1EYU9uMUc1NE9FX1lqY0I0azVpVkhhT1FnN2U0MzVmOGhkc2c1c1lxLWtKV081TGVwYmZxZkpxR05LODlONzdHMXBpQms2czM3MUo3UUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1420
    },
    {
      "date": "Jul 21",
      "text": "Rubio warns Asian leaders that Iran's demands over the Strait of Hormuz would set a dangerous precedent, stating the US won’t let Iran control it.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxOdG4tODB0aXFqWlB4d3R2bnVycm9lVTdVa01TNGl5eVNQYkhQdTVVZEtyZ0hveU9LNjRBdGhvd1FWRXhIVDNGMnZPajU2NUN1UmNqN2JmcGRTVTh5N1ItanJsNFF3bDB0R2tFMUNaUnRXQjY3d2NSTWIyamUzeXlaSmlYSkR5MncyVzZrRWhORTdUWW5RVGxEY2NUdl8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1420
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
      "perspective": "US Resolve",
      "headline": "US Intensifies Strikes, Issues Nuclear Warning to Iran",
      "summary": "The US continues its military strikes against Iran, emphasizing its commitment to action despite ongoing costs and threats. President Trump has issued strong warnings regarding potential strikes on Iran's nuclear facilities.",
      "tone": "defiant",
      "latestSinceUpdate": 1408
    },
    {
      "perspective": "Iranian Pressure",
      "headline": "Iran Faces Sustained US Pressure Amid Regional Tensions",
      "summary": "Iran faces sustained US military pressure and economic threats, while also navigating regional tensions by supporting proxies and threatening shipping. An expert suggests Iran avoids direct attacks on Israel due to fear of retaliation.",
      "tone": "strained",
      "latestSinceUpdate": 1408
    },
    {
      "perspective": "Regional De-escalation Efforts",
      "headline": "Ceasefire Push and Lebanon Security Pilot Underway",
      "summary": "Amidst escalating conflict, mediators are pushing for a 10-day ceasefire. Separately, a US-backed security pilot involving Lebanese army deployment in southern Lebanon is underway following an Israeli withdrawal, indicating some efforts towards localized stability.",
      "tone": "neutral",
      "latestSinceUpdate": 1408
    }
  ]
});

export default LATEST_SNAPSHOT;
