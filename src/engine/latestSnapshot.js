export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1524,
  "lastUpdated": "2026-07-30",
  "lastSyncedAt": "2026-07-30T12:55:51.220Z",
  "warDay": 153,
  "summary": "The conflict involving the US, Iran, and regional proxies continues with US and Saudi airstrikes, Iranian retaliatory attempts, Israeli strikes on Lebanon, and heightened tensions around the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-30",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 21,
    "summary": "No active ceasefire or de-escalation agreement is currently in effect, with hostilities ongoing."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
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
      "date": "Jul 30",
      "text": "U.S. and Saudi forces launch airstrikes on Iranian targets and proxies in Iraq, following a foiled missile attack on American forces.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxPcFZvamthZTNrZ0JiSDZZMVJBNW02Y1JiQUlvUlAwN1RRODcyUWNydUtZbGxpVVdhZElfTERINDh6ZURJZll3M25weWk4UVFPczliQWZ0MkRUc09VTTQ0X1BMVDBDa0hMdzE0TjBlYmI3UkJpYl9KZDFYMTFsZ05jNnd0Zm9wUHEwTlJObUEycG1BNTVqVTVQWjl5NnJqdEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1524
    },
    {
      "date": "Jul 30",
      "text": "A worker in Kuwait dies in an attack, and a family is reportedly killed in Qeshm amidst ongoing conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQc2hscnktWGwtTC1yNGhEZTBmb1NLNzk0OHFRamdxRUdFdE1TSzNCemRsVHRUVDNGRnROaUlYV0lYZ3Y5ZENna0JWd1g0bkZkeDhNeFppTGQwbWhfNS1iYW84ZmhyS3lfNTFiV1EzUGVuTlFzb0VRWFdxenlPNU03QkwzX2VJSGxzdTZtc0tDcFZYUlN2V056bXdWQXAtSDAxTVdYQ1NLWkhWVl9mX1lPSC1zanQ4SWdlZVJB0gHAAUFVX3lxTE1nczg2YVppb3k2UVRva2lOTEs5aTEtSU1GMm1DbnZNNF9iZGl6TC1CdHo5dTFhUUR3dWZ6RTk2c0hwTTZuOGJ0b2VpbTR6X25jcEIzSmt0NTF5bk1oWFhkTlprQTVpUUxEM0FKQ040djNRZE1MSzBOcTBqdTdUQ1pMLUYzN2JKU29EUXhyQnY1QjlyRnlFN2lPRFRHLXZJVXJrb2pmNGUxMjU1eE9tVDdGZkxDc19fS1FiUkdNZ3Z0Rg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1524
    },
    {
      "date": "Jul 30",
      "text": "Israel carries out air strikes on Lebanon, while Iran claims a deal with the US is nearing.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WbDM5eldoWW54T1NESmcxenViSnhRMk1VaWh2UjB5eF9Lb194QW1IUmt1QUxLLUc5VF9Vc1RHNS1iTENwcTNMaHVJV2haaGx2UXZhN04wSFNodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1524
    },
    {
      "date": "Jul 30",
      "text": "Iran warns US allies that the Strait of Hormuz is its territory, as its oil sales continue off Malaysia despite blockades.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQQ0gxdWRPM0dDSm1jMjhiM3JJdUEwSXhmZkdobDhvYVI4ZTVIN1RWcE82Vy13X3lZNkIteVRzVHFxaklpdzNGMDFrYUdVZXJ3b0VUVUo3ZkVjWDlQZVlOc1hCM2FxZzhEckxzLXpvWjBFNTdzQmZ0ZTNOWlN2UTFfMTVMc0lRN1FMTkJ4dVpkXzJ5TVhlc1k1OEJGVmxlTEstdF9uSNIBpwFBVV95cUxObU9OZWpiZXNKcVdGbTBIaEREbnFCejg3cHdvOHY1bzRvaDQ0WDd1WnRkNmVCVHJEVG84ZHIxMmM3alhrVGFOcUlJUlA1N3k4bnh4RDJLV2hYY3d0OXl1eElYWmgwTU9ZZFdTVmZXOG5iclVkc0MzQlR4aTczLWlLdk1sMm45R3Y3bkIyOHJxQjNaWVdlM1FJd0JMSDdWNUZfOVJYaHFNYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Rediff",
      "latestSinceUpdate": 1524
    },
    {
      "date": "Jul 30",
      "text": "An IDF bulldozer is struck by a Hezbollah FPV drone, with Israel expected to retaliate.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1vdVBIb0k4YXhWeEdoQ0RfbFdiZHFCalM1Z1Bvck9VckFoZGkzRFEyZXgwd2QzbGVkdkJsZmlLSVNreENHRjdIQ08wMm1pcE40US1PNlZPWUk3bWswQS1EMmc3Z0p2cDk2M2I4VTZB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1524
    },
    {
      "date": "Jul 30",
      "text": "A drone strike near the Suez Canal in Egypt raises new security threats, indicating a widening war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxNUjlxdTM1SnYtZ3Bzei1qLUpRXzlYanVpb1MwNnRuQjY2NmkzZHNTeEl5cGljWGE5VDQ5ZHF0djVzVnV5OEprZWdlWUpPMV9fanYyN1N5cHdhbkxBZC1fZTlHWmpRMG8zdlRZV0hLSW9nTHU0S3JDZU44WWVHbnhWZVhRTVJ1Z0RaM25nR09fTFNTMUR2SVNkVXdlVHpDZHRmMXlJdDN3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1524
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
      "perspective": "Iranian Defiance",
      "headline": "Iran Vows Hormuz Control, Urges Firmness Against Enemy",
      "summary": "Iranian leadership asserts control over the Strait of Hormuz and calls on its citizens to resist external pressures. This stance comes amidst ongoing conflict and diplomatic discussions involving the US.",
      "tone": "defiant",
      "latestSinceUpdate": 1519
    },
    {
      "perspective": "US Engagement & Force",
      "headline": "US Engages Diplomatically While Employing Military Force",
      "summary": "The US is engaged in both diplomatic talks with Iran, expressing hopes for positive outcomes, while simultaneously conducting strikes against Iranian proxies and threatening strong military action in response to attacks. This dual approach aims to manage escalation while protecting US interests.",
      "tone": "strained",
      "latestSinceUpdate": 1519
    },
    {
      "perspective": "Regional Instability & Economic Strain",
      "headline": "Middle East Conflict Spreads, Impacting Shipping and Economies",
      "summary": "The conflict is expanding geographically, drawing in more countries and causing significant shipping risks in crucial oil routes like the Strait of Hormuz. This instability is leading to economic strain felt by citizens and raising environmental concerns.",
      "tone": "anxious",
      "latestSinceUpdate": 1519
    }
  ]
});

export default LATEST_SNAPSHOT;
