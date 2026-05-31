export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 830,
  "lastUpdated": "2026-05-31",
  "lastSyncedAt": "2026-05-31T00:16:59.387Z",
  "warDay": 93,
  "summary": "The US and Iran are engaged in tentative truce negotiations, with President Trump's approval pending, while both sides continue to exchange strikes and Israel faces intensified attacks from Hezbollah.",
  "lastNarrativeUpdate": "2026-05-31",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A tentative 60-day truce agreement has been reached between the US and Iran, but it awaits President Trump's approval and is undermined by ongoing military strikes from both sides."
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
        "militaryPower": 80
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
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "May 28",
      "text": "US and Iran reach tentative agreement on a 60-day truce, pending President Trump's final determination.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 830
    },
    {
      "date": "May 28",
      "text": "Iran says it targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 830
    },
    {
      "date": "May 28",
      "text": "US military launches another strike on Iran as potential peace deal stalls.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxPZm96OTJkNENIbjhibTlaT0lpOVlhdXBVdWpYd0h0cXdxa2ZHVXMyWUV3RWswLTZsZ25MZUFwRm14NUJkbVNKLVZ2OS1tOFZkd2RyTnliZWxFT3ZKcE1JUTYwa1h1dXE2TldTT0d5RldSN2Y1TUk2RjRQSXpkSXFUY3FCYUllbHBNU21PSURzQ29aSlRwXzB6UnpudEJ0VnFEbzVjVFlNcTNFOTdGRnltbkhhd01mMTg3MmFCNnA2RFBjc3BW?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Euronews.com",
      "latestSinceUpdate": 830
    },
    {
      "date": "May 28",
      "text": "U.S. military hits a commercial ship trying to reach Iran with a Hellfire missile in the Gulf of Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPSVotLVFqT0lNQy15OWRUSVRNYi12b1d2ZTZTekxmaE9uYlNmNDd5YlVwVXNlaHE2RWsxTzZVZzFxTmk0M05uSjdCVlU5OGFsbUVEY3hOWUJFRTEzOWtjOURHZUZUQ0pGNlJMSl9ORHk5WUVGOG9nM1U4WnBWS2RSZzBSaTFkWC1nR0ZmNmNGTUVTVnF3TFNUN2ptYk9TLXp5Y19PMm8xSFBpWTduQl9xTDNuVHZJSEwwWTV3a2Z30gHDAUFVX3lxTE1qaGFnNzB1Q2JrYy1HUml3ZllPZTZjbU9tUGxsV25VNWp4UnpOVkNFUHV0a3NXVzRsVHk1M2pHTkNnb05KVlhqVFE3TTY5MDN0dDhyZlNnSlJ3dTVpdGNFaXNqLUNNMDFfR2VWRGxlYlV4VnJPd09OVVktNDhndXlmLXlaUkJpdXd4U2Q3ZXM1bnZac3RzcGxnQmJBWFFKT0lqaFlhcVRLd3cxb1ppREs0VVM4dnZyTlpjMmhtc2hzWlotQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 830
    },
    {
      "date": "May 28",
      "text": "Israel shuts schools near the Lebanon border amid repeated Hezbollah rocket and drone attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxNR1FKREl5b1paVmx2VUxORW5sdjdKMDFsb1E0dURNTTA1QmdfVkFPcU5RcFZacEZNWWlIa0xfSkpBQ3VOUm11alpBVjBqUERuVlhMYVpfZkdJY01BeUJBR04zNVVrWUwxR01VWlJyOWtrVzFnd2pZc1ZvV2RjdjA0S0c3ZExXXzcxaWF3bktwbDlRNjNwLVhTN0VJRjAzYXBlV0tpemhpVEhGMzhsTm5IOWpwZ0pnV03SAbwBQVVfeXFMTWh0cHByM1gtUWExQXg4VW1CV2l1N09mMlIxdmNiaGctVExJdk5UV2lwbEtHaVhIMTFyZVktQ3IzVjA5ajVidTJmdHJuQ2F6Qi1KMG81WGRQbnFCSE1oTGFWcHdHd05xbUlHaGYyVDdzSVRETTZ3bHM2VTlLNzJCWThtSGNmVUtJbXlDOGkyS3BIbkdKUzlrN2JOc0ZiWmRVVGVwNUNZT1RpS0hQMzFIdFZkTmRBYzFsNmFpb2s?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 830
    },
    {
      "date": "May 28",
      "text": "Hezbollah is reportedly using fibre-optic drones to hit Israel, posing a top threat.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9qdTM1SFdFWmR1OFUwdVRfUDRaVmFTVVhVYXpWRThFMjFscWtDdHltSkhBeVFKUHhsM29oMEJoalFISGtRbTBUQ3JabHp2X0F6LXRzeVlzZ0doZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 830
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
      "perspective": "US Administration",
      "headline": "Trump's Demands Shape Iran Truce",
      "summary": "President Trump has outlined demands for Iran and has yet to give final approval to a tentative 60-day truce agreement, with US officials emphasizing the military's capability to resume strikes if necessary. Negotiations are ongoing, but the administration maintains a firm stance.",
      "tone": "strained",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Iran",
      "headline": "Iran Responds to US Strikes Amid Truce Talks",
      "summary": "Iran has agreed to a tentative 60-day truce but continues to target American bases in response to fresh US strikes, including a US military hit on a commercial ship attempting to reach Iran. This indicates a volatile situation despite diplomatic efforts.",
      "tone": "defiant",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Hezbollah's Drone Threat Escalates Border Conflict",
      "summary": "Hezbollah has intensified its attacks on northern Israel using rockets and advanced fibre-optic drones, prompting Israel to shut schools near the border. This regional conflict continues to escalate, posing a significant security challenge for Israel.",
      "tone": "anxious",
      "latestSinceUpdate": 830
    }
  ]
});

export default LATEST_SNAPSHOT;
