export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1318,
  "lastUpdated": "2026-07-16",
  "lastSyncedAt": "2026-07-16T06:05:53.520Z",
  "warDay": 139,
  "summary": "The US-Iran conflict has intensified with renewed US naval blockades and strikes in the Strait of Hormuz, prompting Iranian retaliatory actions against regional targets and US assets, following the collapse of a prior ceasefire.",
  "lastNarrativeUpdate": "2026-07-16",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.9,
    "durationDays": 1,
    "summary": "A previous ceasefire has collapsed, leading to renewed US military operations and Iranian retaliatory actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
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
        "aggression": 0.5
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
    "nuclearIndex": 35,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "date": "Jul 14",
      "text": "US naval blockade of Iranian ports goes into effect.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5mclRqN1M1Z0RvTWloR0xWUE5tdlJLQnNuMjVQNnlZNVpSWWgyUmtkMDVodVBzU1RKTnVPbUt6MDJ2Q1B0QS0xeWR1U0RLRW9feEdpQU1CbUw4S3VmMy1PREVGbl9KaFhaa3RFQTFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1318
    },
    {
      "date": "Jul 14",
      "text": "US military carries out another wave of strikes against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQWVlTLXZEcHJQTnhTMThIRmVQUGlPRk5vT1hNMmstLXNYXzZNWnlLUDJGQWJtUmI0cnlHLWFLZE1yMVctdW5RV0dSVmlWbVlvZFdSeTZrMG1ldmJvczFzUHRfbDlycEJWQ3M0SXlfNWtYZGZveEgzVzMxaVAxcXNxRXRRelpTelY1aXRyTUlHNlZGZk9qNnpNYVd1ZE9JY2RRMVo1eUd1ekliam_SAbABQVVfeXFMUHhaSU1rXzMyNHB2ZTJCbmR6REE5bUJXWDdWMzh6bHhHWnhlbGdlQ2JvVlFJTkVNamxheEU0TmNPR3gyT2syQ3prR0pBQkQ4eUVLcUVRd2x3RU9hb01UbTR6UGo3U3lnNTUxamNnTVRlbzcxaDh5cXBKUi1HUzRETzVjeFRfWGt2cE9RbzRRNndLYUw3VXBGeHVXZFJRLW1GMXNoSUFEQmxGSlRlLUtnRUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1318
    },
    {
      "date": "Jul 14",
      "text": "Iran claims US Fifth Fleet targeted in Bahrain in latest exchange of strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxQbjlLV08xTHJxX0JZLTJkRE1DaFV6WFRsMWwxeXRoZWROVHZJQ2hhUU9UTjhBd3Vld0h1azluWkJFM1ZzM2gtS3cyZXNqM1V6SnA2aDlPNUVNQ3dTMzVQV0JKaVNaUU9DcjRfZ3JNSWV0WkRvWWRxOE4wS1l4a1dremtzUUFoaFJlaVhVMFV2dXdNX2ZQdXpLRWdGeDJLTl8ycUhIaHowUktSTUx0ZUptcFR4clp5aWJla2UycHJHME00M3lKYVRGNVl5QnlXZmEtV013?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1318
    },
    {
      "date": "Jul 14",
      "text": "US hits Iranian oil tanker; Tehran attacks Kuwait and Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOU0UzM1RqVEZOZDY5Z3RMcDN4UEpaejlVUnBZOW51azFzWmNaZEVtTHJSdThpTnYwbmlzRjd2Sno0SjZKdHFyYU5JZmJyMzFoeWZLZTVGVUsydVJFZ0MxVGlMVVY0NlpVaW5TMENxSGdTZ2NLYlZtZUdXTVZYVU1zQkZuNkFLNnFFQjVGbUpOUDZremQ1SHg1UTZVclpWSVQxa2ZpNDJ1N0dnVXFMX0NqT0JvaUhGMkFoc1dv0gHAAUFVX3lxTFB1U0ZRVHh2cWdJMmN4MGlmakxadUctVXhxNFZpR05SZGtYNEhyakRKT0NYTXBhSDhmYnpZYzhscS1lRy0wTWVmR3pJenZtQXB3VkNZM0szaWxoYlY4dkwxTXJhVEpHdFdiV2dqcFVEQ3NUNWlkclZjTU5hNExJZzM4VmhFTDlMVDNJV2RySk53dlVEVmZFak1VdTYwWV9aaEFILThmdHRxc3phV1ZuZmxGUTdsQ2hOeFZZbmJGMzNqSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1318
    },
    {
      "date": "Jul 15",
      "text": "US resumes blockade on Iran and launches strikes after attacks in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxQVHY4TmVKS1hoUTY1cTVwYXNmX255SnU0R1h2SE16dDV2aUxhcUdSYklSWGVXUlduX1RHbkowT2dyUWdpOWlTM3F0RWtvYW1MRlpTZm81NS1WU1QyMVZ4aUFFRVBQMmIwb01wcDJSbC1iTEllMExxX2p4VHhyZ3NGdUFzeVlPdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1318
    },
    {
      "date": "Jul 15",
      "text": "US disables ship allegedly trying to sail to Kharg Island as feud over Strait of Hormuz escalates.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxNR1pGUHJ0UXlGRjNPZzNtdHJyUC0wbXh6UmxYUWhMQ2l6U0txd1NWT3BscU1CVk4wRTd6VkxOakx3eXBqQ3RRSWVwbWJLVGJGWGIwUFJ5QzkyTFZmVHBkVUFhc1hNUmxmdzhhWHdvOWNsMktCQzlPd1JLSl9STzluQi1oaTZIUU5VU2xuVDhnZW9JS1MtcDJYVA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1318
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
      "perspective": "US/Western",
      "headline": "US Blockade and Strikes Aim to Protect Shipping in Hormuz",
      "summary": "The United States has reimposed a naval blockade on Iranian ports and launched new strikes, citing the need to protect vessels in the Strait of Hormuz following Iranian attacks. This action aims to restore stability and deter further aggression in the critical waterway.",
      "tone": "defiant",
      "latestSinceUpdate": 1316
    },
    {
      "perspective": "Iranian",
      "headline": "Iran Responds to US Aggression, Targets US Fifth Fleet",
      "summary": "Iran has responded to US aggression, claiming to have targeted the US Fifth Fleet in Bahrain amidst escalating exchanges of strikes. Iranian cyberattackers have also reportedly tracked US military personnel, indicating a multi-faceted response to the renewed blockade.",
      "tone": "defiant",
      "latestSinceUpdate": 1316
    },
    {
      "perspective": "Israeli",
      "headline": "IDF Intensifies Operations Against Hezbollah Infrastructure",
      "summary": "The IDF is actively engaged in destroying Hezbollah infrastructure in southern Lebanon, including strongholds, as part of ongoing efforts to neutralize threats. Concurrently, Lebanese security has detained an alleged Israeli spy within Hezbollah, highlighting intelligence operations.",
      "tone": "strained",
      "latestSinceUpdate": 1316
    },
    {
      "perspective": "Global Economic",
      "headline": "Strait of Hormuz Disruption Impacts Oil Shipments",
      "summary": "The renewed conflict and US blockade in the Strait of Hormuz have led to a significant fall in oil shipments, nearing pre-peace deal levels. This disruption raises concerns about global energy supply and market stability.",
      "tone": "anxious",
      "latestSinceUpdate": 1316
    }
  ]
});

export default LATEST_SNAPSHOT;
