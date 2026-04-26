export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 390,
  "lastUpdated": "2026-04-26",
  "lastSyncedAt": "2026-04-26T23:09:57.916Z",
  "warDay": 58,
  "summary": "The Iran war continues on Day 58 with an ongoing Hormuz crisis, escalating conflict between Israel and Hezbollah, and stalled US-Iran peace talks despite a recent two-week ceasefire.",
  "lastNarrativeUpdate": "2026-04-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire between the U.S. and Iran is active, but regional tensions remain high with escalating Israel-Hezbollah conflict and stalled broader peace talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Apr 26",
      "text": "Hormuz crisis rolls on as Israel and Hezbollah battle.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPUHRKVkdSQmxQT0I2eWRvX2FEOGRBLTRwSUFhcU1Idkw2azF2bzlvUlFWTDY0dDNCaUJMeU5pX0VQZkxaZ3lhUHlrUnBuTHI1bXAwRkNHb2NDenNOci02VDI1ZW9MUW1MdTY5dzZJZ1dnb0VUUkNxMzBGNlhiaVk5dGdHTzczQ25CM2JSR3I0LUdXYmZSX0xQX21naW5kWmdXLTRnbk5RaUtWQnVSOHdfd2paYXNiT2ZHNlJxVFhzQdIBxAFBVV95cUxPVmxjYnJSY2dBbnBKUDNMWmVCcmh3c3Y3Y3phSzRiX1VsYmo1dnhiU3JzbGd1cEoxZWdCbUVfVkpmdndNZFBtWnpoTTFONGJGNzU0dUcyWGN3SVdSQzI5NE40ZDJzY25hTUFtT2xCMEE3NkxrME51WW9iQTJFZnMydGNDay1mRUtHUk92TzdKWFhHUDduOHZ0c0d4VlB5dTg1TXlYei13WDB5WFdwd0hqSDdKUUdaNmhwbmZUMjIybkZYMkU3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 390
    },
    {
      "date": "Apr 26",
      "text": "Iran War Has Drained U.S. Supplies of Critical, Costly Weapons.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTE9LNlk4MTlOQm1MSkJzLXZpQXdzNXY2YWMzaEE5Qi1zdDlTbnR5VGlmSEt6VURoakREcF95cjBmTU1MZjJaR3FfYUtwNVhXSlZsNHo1elhCSmpXemhadWJCZzRtRi01ZlFlbjd2ZHBHMjM5Y1NlbFhEVFRndERhcVk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 390
    },
    {
      "date": "Apr 26",
      "text": "Trump says US team won’t visit Pakistan as uncertainty surrounds Iran peace talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxOQlVWLXluZWFWVDAwNDBGWkg2b2dYN3dDNmd3M2tERFI3cHFpdWZZR1ZfclU0elNJWTQ3VUp3WWhlYmh2MUt3dDJVZFBLcGhUUU5aWVhubXg5dmY2UUY0S1N3UVVrZFAtVWUyM0ozaEpQVTlDT1pnVkhiSDRwaVVrdkJlWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 390
    },
    {
      "date": "Apr 26",
      "text": "Israel attacks increase in Lebanon; ships taken in Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 390
    },
    {
      "date": "Apr 26",
      "text": "Trump cancels sending envoys for Iran talks and says 'we have all the cards'.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 390
    },
    {
      "date": "Apr 26",
      "text": "U.S. and Iran reach 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 390
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
