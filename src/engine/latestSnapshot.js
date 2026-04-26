export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 386,
  "lastUpdated": "2026-04-26",
  "lastSyncedAt": "2026-04-26T19:58:39.577Z",
  "warDay": 58,
  "summary": "The Iran-Israel conflict continues with a fragile U.S.-Iran ceasefire in place, ongoing hostilities between Israel and Hezbollah, and a critical blockade in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire between the U.S. and Iran is in effect, though diplomatic talks have been canceled and violations are reported between Israel and Hezbollah."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
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
      "date": "Apr 24",
      "text": "Special report issued on the ongoing Iran war.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 386
    },
    {
      "date": "Apr 26",
      "text": "U.S. and Iran reach a 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 386
    },
    {
      "date": "Apr 26",
      "text": "Israel and Hezbollah accuse each other of violating the Lebanon ceasefire while Iran talks remain on hold.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxNcFZCYXpIUzVpNkpHTm1nSlhrd19lWW5GdFlLOF8zV29Ybm50akdUNFE2Zk84ZUx3MHhLNDk5VGRkY2w0aWE3SnBDZUhsbUt4dXBLM1cxenJtNUJoYnVYMnEtdElwLWw5Y2RvMXZvaUdVdkpGZVBQRk5IWHdzXzdzN3Bzc2NOdlkwbno3c005d1ZzZTJBVlJNOUNhOUU0cTRRbVdDMzZmNWlBM2VoV0t2TWtlU0FRVkxrMS1Tc0lHdVF5YXpzQThrM25JcG1EeGowMmd3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 386
    },
    {
      "date": "Apr 26",
      "text": "Hegseth warns Iran that U.S. forces will 'shoot to destroy' any ships laying mines in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQOGxhSF96S0IyUU80Y3Q3Y0xIcUdKVDZBVnlLUmRReXljRmNFRW1oR21LYVdFSXBGWlJjbkRnY2FsMkFHZHZvYUFpLTZBZXBJUG81bFRCWXFEQzZHVXMxZEVFV1pZM0hlVVF1bVpJcU1pcmlHbG5jM0lpSU13X1lWUnNReGk2N0VmSWw3Q2FmMnplakVFWTFWaG5TbHhtRWhNZHlhX2Jvd9IBrAFBVV95cUxOdDk0SWc1VGpYYzZzdzRyZXE0OHlXQTV6clczSkp1MXFreWdMRjNXS1QtN1VhLXpqU2dYb1BYQnhONVNNX1RvWjh0Zm1LRVZQeDQtdncxQkxBVGIyZlVKUWxYN19nSGJ0Y0czc1VIekY2N0xwemhnblN1bVo1Sk53VXlHa0FOZDgxVldaMlJ6aDhoUUlnck1DdHUwcG94akNtc1REMzlaRm9rLTkt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 386
    },
    {
      "date": "Apr 26",
      "text": "Reports indicate Iran caused billions in damage to U.S. military bases in the Gulf region, more extensive than publicly known.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQY3A3aFAtRXVVbHhmSW9xT2RVbFBVdFJLbkktNWZUSVpPMG5IclJyYTQtYVRjTnU3QVQwYXFNNE5QbGJmNndaWER2Nk1mWXFSOFdmS1U3V2ZrLTJ2LUdpY0FzZ2Zia0Y3ZnBFUVdxOFdydEgzR3pTWkl3UkRuNjlDUmlxd1ZCalFrWUU2a09ocVhnYmFCMldYMExQTVVQLXBHYm5DYlhDRGZfcG8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 385
    },
    {
      "date": "Apr 26",
      "text": "Trump cancels sending envoys for Iran talks, stating 'we have all the cards'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 386
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
      "perspective": "US Diplomatic Stance",
      "headline": "Trump Halts Iran Talks, Citing Strong US Position",
      "summary": "President Trump has canceled plans to send envoys for peace talks with Iran, stating the U.S. holds a strong negotiating position. This move follows Tehran's refusal of direct talks, contributing to ongoing uncertainty in the Middle East conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Iranian Resistance",
      "headline": "Iran Rejects Direct Talks, Threatens Retaliation Amid Blockade",
      "summary": "Iran has refused direct talks with the U.S., maintaining a firm stance amidst the ongoing conflict and a U.S. blockade. The Iranian Armed Forces Command has threatened a strong response if the blockade persists, following reports of significant damage to U.S. bases.",
      "tone": "defiant",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Lebanon Front Escalation",
      "headline": "Israel Escalates Attacks in Lebanon, Hezbollah Remains Defiant",
      "summary": "Israel has intensified its strikes in southern Lebanon, killing four and escalating breaches of a nominal ceasefire. Hezbollah has expressed defiance, questioning the effectiveness of any ceasefire amidst continued cross-border attacks.",
      "tone": "strained",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Global Oil Market",
      "headline": "Hormuz Standoff Threatens Global Oil Supply and Demand",
      "summary": "The ongoing standoff in the Strait of Hormuz, marked by ship seizures, continues to pose a significant threat to global oil supplies. Analysts warn of a potential 'Billion-Barrel Hormuz Oil Shock' that could severely impact demand and market stability.",
      "tone": "anxious",
      "latestSinceUpdate": 370
    }
  ]
});

export default LATEST_SNAPSHOT;
