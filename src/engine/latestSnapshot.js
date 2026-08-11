export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1731,
  "lastUpdated": "2026-08-11",
  "lastSyncedAt": "2026-08-11T07:24:01.410Z",
  "warDay": 165,
  "summary": "The West Asia conflict escalates with US-Israel strikes on Iran, an attack on the US Embassy in Riyadh, and a stalemate in the Strait of Hormuz, while both the US and Iran demand compensation for war damages.",
  "lastNarrativeUpdate": "2026-08-11",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect between the primary belligerents, with negotiations stalled and demands for compensation from both sides."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.75
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
      "date": "Aug 10",
      "text": "Trump states he would require compensation from Iran as a condition for talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5xcnRIaENDM0VobHdzWGIteUx1Y1pwYU42VUlVdzhMUDRvMGV3MWZ2cEppX0NnV29nSE5ZWTFWS3dGd0ZNYjByWldRM3VERU10ZFBaUnY5X2VmTDJ6ekgxNUV4RUJ2U3ZYemZhS0NB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1731
    },
    {
      "date": "Aug 10",
      "text": "Iran demands the U.S. pay for war damage before agreeing to reopen the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxOMXVhMHlqUEtqTDctWTJpYWFoamFyZHVHWE4xUWtkMnFVN0pmYTVtdXBuSXZVUmtFMEJ1UHgtRjlSak5sUnNpM1pDZUFqc1lUYV9FYS15WGN5VDg1RzYyZ19wOVNZSUx1bENuaDJ5QWsybVBTZzZsa2RScDRmd05BWDJqcTdTRGN0X0dVU0dPRm9sOEQyZHdERmlWNk8xSmIzdndQVEl1Sk1yeXRDR21FQkJn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1731
    },
    {
      "date": "Aug 10",
      "text": "The Strait of Hormuz is reportedly hit by a missile strike amid a stalemate between Iran and the US.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOamFyOVhnZG9PZUJlenFjNUhXd0doVTNNS2dCTm5tQU5Wc3NCV1Z4UUVhVDF6ZVZjVEtiYzZVOHVVb281V2ZwS3J1TlRxVjB2eXlHYTVLYUpIZkpfMWw4OWVyVVFvYnRoRFpGamFMRFRSTFp3TVBObDJ1VHpVM3NKM3pQZFVDaEtFcWhZMnFaUWZtbVRwbElXQnQ4OFJublpJbWxEMGxaUnowbkNT?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1731
    },
    {
      "date": "Aug 10",
      "text": "Israel prepares for possible unilateral strikes on Iran, according to Israeli media.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxORnBwMDd2NXlSclA4SjZxUzNxckZMVFRHckt1X25YRnlMaWxhVEJsUU9QUU1aNkhnc3o5RmVMUXJQRmFMRWFVSHVZVzhwbWpFM3RGdlRtN3R6RUFqdF9uYVVsTjlkaEJVeHA5ZXh5bnl2V0VZYkYtOXhJVFN2Q0VWcEtYaWNiQXhTMHZoc3lXbDIxdU1wNzh1azM3S0NrdnBSLTh5ZHlScmRfazkxM0FtblVNaTE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1731
    },
    {
      "date": "Aug 10",
      "text": "US-Israel strikes hit Iran as the West Asia conflict escalates.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1731
    },
    {
      "date": "Aug 10",
      "text": "The US Embassy in Riyadh is attacked amidst escalating conflict.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 1731
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
      "perspective": "US/Trump Administration",
      "headline": "Trump Demands Compensation, Shifts to Economic Pressure",
      "summary": "The US administration, led by Trump, is demanding compensation from Iran for past conflicts and is signaling a shift towards economic pressure. Negotiations with Tehran are described as only 'semi-negotiating' as military options appear limited.",
      "tone": "defiant",
      "latestSinceUpdate": 1726
    },
    {
      "perspective": "Iran",
      "headline": "Iran Conditions Hormuz Reopening on US Concessions",
      "summary": "Iran is demanding concessions from the US and states that the Strait of Hormuz will remain closed until the US 'corrects' its behavior. Tehran is also reportedly nearing a separate deal with Oman regarding the strait.",
      "tone": "defiant",
      "latestSinceUpdate": 1726
    },
    {
      "perspective": "Israel",
      "headline": "Israel Prepares for Unilateral Strikes Amidst Regional Tensions",
      "summary": "Israel is reportedly preparing for possible unilateral strikes on Iran and has warned that Tehran's attacks are coming close. The nation also defended its Beirut strikes as precise while engaging in talks with Lebanon.",
      "tone": "strained",
      "latestSinceUpdate": 1726
    }
  ]
});

export default LATEST_SNAPSHOT;
