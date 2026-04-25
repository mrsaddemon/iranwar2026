export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 350,
  "lastUpdated": "2026-04-25",
  "lastSyncedAt": "2026-04-25T07:42:16.706Z",
  "warDay": 57,
  "summary": "A fragile ceasefire between the US and Iran has been extended, but fighting continues in Lebanon, and tensions remain critically high in the Strait of Hormuz with explicit US threats and Iranian actions.",
  "lastNarrativeUpdate": "2026-04-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 21,
    "summary": "A two-week ceasefire was extended by three weeks, but its effectiveness is undermined by continued fighting in Lebanon and heightened tensions in the Strait of Hormuz."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.7,
        "aggression": 0.8
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
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Apr 22",
      "text": "U.S. and Iran reach 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 350
    },
    {
      "date": "Apr 25",
      "text": "Trump says Israel-Lebanon ceasefire to be extended by three weeks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE16ZjZROTdEeDNwRVhBRkNJdmp0Ync1ZjNUNjhYaS14TGNNRDJkNWxnTjBhVm9ZLTNaUU1YM1BKOXNMWndMN2hERVhuWWpYSWV4bGxZZUgtMElZQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 350
    },
    {
      "date": "Apr 25",
      "text": "Israel continues attacks on Lebanon despite extension of ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxOWjZpMGNDbGstRjhUalZDMGFaa2VXZWFyZDF3ajVwSUh3QUNhbHptUDh2ZlVBeElTU0hiR3Y5MWtZNndTYnp6bTZrQmF5WjJBQ21VMmRYWUNGWlJrQWc1SGVucGdyQjlXSm5QOEpvREluLTBXY2NIeDRLajZWc19xbkwxdFMwSnl4Vll5NldIV3FUcWk4cDMtSF9uSTFOUV9qMlMwNEhVUndkd1XSAbABQVVfeXFMUEFoNUNWaFhJazY5OXJhU3pfMGN1WjlrTEY1dklTdUNuaHlHMjRlRWk5cUc4Q1FEbHBvc3ljNWhUdGZxWmozeGplWVhrQjcxSk5uakJwNUwxUFQ1RUNhMkFvMVJuQnJ6aEUwLVhTTUpsQzVHNkVvOFJGVmxMcE4tbGp3SVdqakZmdnFFaVRqUkFZeENPZnJiczJvLTVyLXYzb3dvVGpidVZjV3I2ZUJBVDk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 350
    },
    {
      "date": "Apr 25",
      "text": "Ships taken in Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxQNmt1cUpVcUhlajNjYUFhMHFKYlNTZmllVW5TenRYM0tzeGIzeHVIQ25ZNzhkUmcyVUdicHU3dHg1V0dqa2dQM3FDbmJ5WFY5aXBOOFBaZEhZckRZQkVOVUpkSTJpNGxJOHBTR2pXbFFOcXZ5NnhDOXBBSllPWjVPanVFN1ItUV9kM1pIU3RpUzZPVkFrZnhaT29n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "dw.com",
      "latestSinceUpdate": 350
    },
    {
      "date": "Apr 25",
      "text": "U.S. Blockade Around Strait of Hormuz Will Last ‘as Long as It Takes,’ Hegseth Says.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE5XRU5GRThDaG03aFJWMURDYmN2dklmYjJwQThkdnRFTkVkMlBjUS1JcXlKNVgzcF9TZ3FQZUl5Y2VoM2hQeVN5alFBRjAzY3YweE1BWTVjTUZWUmV1U1NnQjl2MHJaT3pLTGRvRm9MSlY4emhEYkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 349
    },
    {
      "date": "Apr 25",
      "text": "Trump orders U.S. military to 'shoot and kill' Iranian boats mining Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxNd0RrbHZHZkFPZTQ2VF9WQkh6MUxjVVkyaHZzSm55WVRuM0FROEwzRnNkQV94dWk5U0RGYlM3eE92akUzaDBiZG9pdUdlUFZfcXZpWmgzMDU3YjA1c1REdlNYWXhZT2t0UDRFLW1wZzNRMEVtblprVkF0UVIzaHJXaUFPekRSYkZCZHd6QUFGYzlXTFowVXo1UWVrdDBERHgyNjNmc0dhNkp2a0RWTHNXaHl6bGtmbDdFZV82UTRqSmttRlhJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 350
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
      "perspective": "US Military/Administration",
      "headline": "US Blockade on Hormuz to Persist, Hegseth Declares Victory While Preparing for More War",
      "summary": "The US maintains a firm stance on its blockade of the Strait of Hormuz, with Pentagon chief Hegseth declaring victory while simultaneously preparing for potential further conflict. Concerns are noted regarding the depletion of US advanced munitions supplies.",
      "tone": "defiant",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "Iran/Hezbollah",
      "headline": "Hezbollah Defiant as Fighting Continues Despite Ceasefire Extension",
      "summary": "Hezbollah dismisses the ceasefire extension as 'meaningless' and continues fighting in southern regions. Iran faces a US blockade in the Strait of Hormuz, with reports of ships being taken.",
      "tone": "defiant",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "International Law",
      "headline": "Experts Warn US Strikes on Iran May Constitute War Crimes",
      "summary": "Over 100 international law experts have issued a warning that US strikes on Iran violate the UN Charter and could be considered war crimes, raising questions about the legality of the ongoing campaign.",
      "tone": "skeptical",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "Diplomatic/Economic",
      "headline": "Ceasefire Extended Amid Peace Talks and Global Economic Strain",
      "summary": "An Israel-Lebanon ceasefire has been extended for three weeks, with new peace talks involving Witkoff and Kushner heading to Pakistan. The ongoing conflict is noted to be impacting the world economy, and US re-arming efforts highlight long-term supply concerns.",
      "tone": "strained",
      "latestSinceUpdate": 347
    }
  ]
});

export default LATEST_SNAPSHOT;
