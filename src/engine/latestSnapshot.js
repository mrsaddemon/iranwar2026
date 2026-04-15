export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 164,
  "lastUpdated": "2026-04-15",
  "lastSyncedAt": "2026-04-15T03:33:33.701Z",
  "warDay": 47,
  "summary": "The US has implemented a military blockade on Iranian ports in the Strait of Hormuz, leading to an IMF warning of a major energy crisis, while President Trump hints at resuming talks with Iran and Israel and Lebanon hold direct talks amidst ongoing conflict.",
  "lastNarrativeUpdate": "2026-04-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 2,
    "summary": "No general ceasefire is active, with conflict ongoing in Lebanon and a US blockade on Iran in effect, despite diplomatic talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 80,
    "oilDisruption": 90,
    "tradeImpact": 79,
    "sanctionsPressure": 65,
    "globalPressure": 85,
    "allianceInfluence": 57
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Apr 15",
      "text": "US military blockade on Iranian ports takes effect, turning back ships in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE4tQVFtT3lHMmxsRlhMRklHUi1YcnJ0c29mSFNrOFhOSFZlUEhLdzRGYkpiNTJVZmJFQW5YdXR6Y2xCZTdrN0czWnBmOGo4M0t4QUUxZWxzRUVtYkdZeTJTRGZvTDJDSy1LV3gtSVY0TUg0eXg1UTg3VVI4VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 164
    },
    {
      "date": "Apr 15",
      "text": "IMF warns that the Strait of Hormuz closure raises the prospect of a 'major energy crisis'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMizgFBVV95cUxPazNKcDdXWTRRb3dqWFJnRl9KcEpTOFdDYXJGbmRpc2RQNXdGS3h2dXRkOThMQ09ZWXFBOXJIUjV5VGxrVDlzVHEtb3ctaDhSa0g3VmZZRGdNZ05oem5rQXZUMldUNXVnMFM0TEhheS1LNmVDemlNTjBWbExCTFM0Ni1OR21ndVludFJNRmFRTWtHeVBwSjJaRGNxLVhIS2ozc2FBVExpeTRseFUzbDN0ZlVmSE45azVYeWNuSWxLazVnXzRpNTRVaDJNRDZvQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 164
    },
    {
      "date": "Apr 15",
      "text": "President Trump hints that US-Iran talks could resume over the next two days, seeking a 'grand bargain'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE50WXdqeGV3VW9WOUQwUFlkbjJPanBBRmRxdUp2WlpIdkVTR0ZWSEh5ekpRUXV6anpFQlc4WW1DcXVVYzc3V0N5WUE4bDNwMXhHZ2w5a1JWbWZTaG9iNVlDWk5rZHl3QlZITGpvTFlkM21Cb2tJLTQzR2oyNGk1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 164
    },
    {
      "date": "Apr 15",
      "text": "China criticizes the Trump blockade as 'dangerous' as Iran-linked ships attempt to transit the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQN1RJR1g3TDBBOE5pNDRKR0FWQnUxS2RUeXpQMlFVWERhRHIxU2doMnFEUjRHelJfeERuM0tOV0h6ZTFtMXY1cjAwUWg4bm9lU2trcTJVcjdEWmlOS2swUUV5bHJLSE14ZHBZVVphZS1aU2t4OUJQU01QUjdTNkg4T1hBVFA2emNOTUF6Y0t5eTJJSXlobjlFS3FZQWRDYW14MkVjcVdEWkRFNTlPc3ZiaGw2VEVGVUNjaXczbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 164
    },
    {
      "date": "Apr 15",
      "text": "Israel and Lebanon hold first direct talks since 1993, despite ongoing conflict in Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9aZGxOSU1uN2FqLTJmb3k1cjhmSHM0M0djdjlIdm5mMm1CWkViNHVjQXRQMFZzTll4YkFkUmsxdGFzWFV4NF84bG0tT3ZBaThnbHh2ZXgtQVBLdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 164
    },
    {
      "date": "Apr 15",
      "text": "Iranian minister states 'No intention of negotiating for now' as US insists war goals are almost met.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE56dkx0c0Z3Umx4dlBzYzdrdGV6SHM3U3hLRnpDX0tFOC1UeHBiUEJLamlEalBVZUV6d0RsVS13UU5wUldEVm9hNVZ6ekRMOWtyamJMbQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 164
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
      "headline": "War 'Close to Over,' Talks Imminent",
      "summary": "The Trump administration suggests the war is nearing its end and expresses a desire for a 'grand bargain' with Tehran, hinting at a resumption of talks within days. The US maintains its military blockade on Iranian ports, asserting its war goals are almost met.",
      "tone": "defiant",
      "latestSinceUpdate": 164
    },
    {
      "perspective": "Iran",
      "headline": "No Talks, Blockade Endangers Environment",
      "summary": "Iran's minister states there is 'no intention of negotiating for now,' despite US claims of nearing war goals. Iran also condemns Israeli oil depot strikes, citing environmental and health dangers, while facing a US-imposed blockade.",
      "tone": "defiant",
      "latestSinceUpdate": 164
    },
    {
      "perspective": "China",
      "headline": "Blockade 'Dangerous,' Transit Continues",
      "summary": "China has labeled the US military blockade on Iranian ports as 'dangerous,' indicating concern over regional stability and freedom of navigation. Iran-linked ships are reportedly attempting to transit the Strait of Hormuz despite the blockade.",
      "tone": "skeptical",
      "latestSinceUpdate": 164
    },
    {
      "perspective": "Lebanon/Hezbollah",
      "headline": "Talks Not Negotiations, Disarmament an 'Illusion'",
      "summary": "Lebanese figures, including Ghassan Salame, clarify that direct talks with Israel are 'not negotiations' and dismiss the idea of Hezbollah disarmament by force as an 'illusion.' This perspective highlights the limited scope of the talks amidst ongoing conflict.",
      "tone": "skeptical",
      "latestSinceUpdate": 164
    }
  ]
});

export default LATEST_SNAPSHOT;
