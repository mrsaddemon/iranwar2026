export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 615,
  "lastUpdated": "2026-05-12",
  "lastSyncedAt": "2026-05-12T11:33:20.040Z",
  "warDay": 74,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-05-12",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "Ceasefire language is present across the source mix, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 38,
    "oilDisruption": 62,
    "tradeImpact": 35,
    "sanctionsPressure": 49,
    "globalPressure": 52,
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
      "date": "May 12",
      "text": "Iran Update Special Report, May 11, 2026",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxOdmNKczZWM1I3ektweTVKUXU3SGVMWEZldzh0WFFEQUdZbWpUQlh1SnRrWjZnU1FTdFRBY1F6UF9NX2xCTklvWTJOaUV1T3FyMDdHNDdQS2l3QThiUzZRdm5nc0hIRG5Dekd4d05CUFpGTXJJclRORWlqaXQtQTNTTlhYeXpjN24xR1RWaW1HT2ljRVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 615
    },
    {
      "date": "May 12",
      "text": "Trump Says Cease-Fire With Iran on 'Life Support' After Rejecting Tehran’s Response",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxPSnBhRGxZb3RaRDJBRVJRRnEwRFFubkt0VG9hc2RFVGU1S0VaUEtpUmFTTEhFeHVRWXNRZHBrMWNnUjFULUNKYWgwX0NMQ1N4S3JYbXRoYl9wSFhfazBNMDNZOEVKeTNqNFlJMmM1NGlvZUt1VnpmZjQ3blVSU2F4WTdYTElTeFdFVWlETTJzX0VPeUpo?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Time Magazine",
      "latestSinceUpdate": 615
    },
    {
      "date": "May 12",
      "text": "Iran war live: President Trump calls Iranian peace proposal ‘garbage’",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNRHV6TWptcDFha3dabVhLdUNSenVvRksyam5GYTlqSFptblBoUFJkM0hjX2x3V0h0YnFJU00yT2tFVnY3YmpGNU9JeGJtVm5xZk44RWt4VEZ2VVBBYWZBZHd3OExzX1FLZE8yZGRUeUVlRjVEVGZtWVE0MlhvZGtJdDU4V2lIakRrSUEtUXFtUUdCR2dLU1pvUjdxUmdRQ3VCVVgxSm1pTzVlRmRlSHFzUXRvYmdjWl9teWU0WnpMeW_SAcYBQVVfeXFMTXh0MUYzQ2dPUWdGSVdDcTZyaWNwb2NZTWhuNU1ySDl0SjJud2Q2VjVKRU1wcnhlMUVnMm9sY3E2WEF2TjYxQ25id3Atai1tbWsxcUVwbnJWYmJMMEJlYjBoNDY0OUl0TldNRXFtQWwwUHNDeU5zTldPZHE0QVFlTGpaS3ZSWE0yUEdaNGZuUVpMRkF2YnNVYXZkb3lzTWhEa1o2eElwZVNxbFRaU0lFQVk4SHVWUy1vb3N0RDFIQU92S1EtQlln?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 615
    },
    {
      "date": "May 12",
      "text": "Iran war: What’s happening on day 74 as Tehran says ready for ‘aggression’",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxPbDlGVmdaU2drWnFyMS1xYTd5QWh1Y3hvbTNGZ3JIb2RjbGNsUEtEZ2x4ZEd0TGR0cFp0cDRzY1EtV2hheEpFU3RieEl2Wk1OS3VvckNsLW1RX2NSSkFPU0ItYmZHR09TRUx0YzE2eXBSZ0VBSDJZQXNZanZpWnlXbkUydjNUeHZLYnlwM243WW1HbHRwN1B1S2duaEllWWQ2S3g1c0VoMU5pM1E4eVlYONIBtgFBVV95cUxOTjF5cXlhZldlU01nRGJlUlZIMldxWFdVWGtGMTlxTHI5SkhiaFpIbUV1bHVQaEw0VDFaMnQ0ZS1YNlRONDBoVXNjQzBDV3ZVN3gzS01TY2NHQXFFZkZwN0szX1ViV2RmQ3lBcndpMDl4dFhiTVc1aG9xejBvbEV4MHU3RVpibXNyZWgyRW9ON3pnZ1JfTjJXVVo1MWRKcVBVSEdPdWI0dmtMUThwSDNlNFVKaEpkZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 615
    },
    {
      "date": "May 12",
      "text": "US-Israel-Iran War News Live Updates: 380, including 22 children and 39 women, killed in Israeli strikes since truce, says Lebanon",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuAJBVV95cUxPZThnVUNsRno0UnVIZGVobzYwazFRSE9qQ0FKekxSTkZvczJHSW5TTnBiQzVQWmNwS2d6RlRZZW5QdTFaUlk4dVlwVTRQVDh3clFRUTllSFBocVExWUhHNmVvdHRrQmxKT05sellzVnNWWDREWjkxaW9wLTV2UzF6bXZPVnF5ZDl6UU9YNDJ3d3FUS01WMmxtZ2Fra0JOLWxwWWJvR1p5Wk1KVFRHNE9kS0o3eWM1RXd3Y3ZCX25IOUw5MkwyRDhlQjVqcTJXSWZtMy04M3Z6c1d4SkNPWUlHYXVlTXVGY19jU2ZuSWdNTDdoWVoxTjIwdHdWTW04d2dxQXJ5X1lOZ2tSTkZDOXZtU0g3X0ZHMjNaWUlhMzIyc0VZWjhVZjdBU2tCMXVDb0NrSllyRXpIN3XSAb4CQVVfeXFMT0dXS2JmSG5Bdk4tcE94blVBT0RzMlY1OHdDWGlJc0VvQ0xPdjVodkRJdXpxZG9zbVZRWUx1Ni1xWFIxX1oxam5LTHN1ZTJGY2dxSVF3YTZDM0syQUV1VWdYY0VXd0d1QkVHMUJrYjBXU3BEWVpNcTRhdWhwb2NHc2ZiNUZRVzJrWFBHalNCRlJycDlnYWN3NjhzOVpfZ2o4WVc5N2EzVUZYWkMwaHhkWmJ1Ri1ZR0NmcXFmLVZzQVZkeDNHM2p6b0lRUXJnQjd3VjQ0UkpGVWVhVHJ1bVQ5MWVWWlBsWGRlbUtMaGF1VVlZRGIzLU83dzBoM2xlUDJpb1NnQkk5a25zZkFmVzJtV09IajlCTUk3UzVvSklDaUk1bk12VUFjRGc2bm1vVzBzcWJCZFZrb1hQai1WU1ZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of India",
      "latestSinceUpdate": 615
    },
    {
      "date": "May 12",
      "text": "Iran war updates: Israel kills 24 in Lebanon as US awaits Tehran’s reply",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZmpsanI2RlZnQW52VjcwN2w4RXNYN1RJOGNDaFJCSmhBOExiUzJuM3RIcjh4eVd5TC0zTHAwdHhtam5wZFRGX1I4WThJYklza3hlMGFBcThXaE1mWGFWaXM3WnY1YVY4aWxzS0Y3OGVucU43ejhNTEpWU3FjUy0zVkk0Q1VqUi1IeFFDZ2h5aTZCNDRkRkJHWTlqaklVVkJVMmZuUnFwSG1PU29tcTFBMUMyYTBKei1DVVZr0gHAAUFVX3lxTE15eEZPZjVBV0M1V2dQVXJ6X0EwdUhybzNjOEhmb2tiM1hxRTlpM0dCN29DV25jQ1oxb1U0UlcwMGNya2I3ZG5ERU53RGMxZ21WampsQWRwcXJDeUpxNG9MQWx0bjB4Wlh3c3JzdXBzVmFCQ3lOVUxqNzRzQm16RXZCY1pyV3R0Y2JUWFByN2N1WGVYakcwTXRmajFKRTZDc2xZV3E1emtMS3lhdFc1NEdSbjZuRGlDaHRkWUc4UzF6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 615
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
