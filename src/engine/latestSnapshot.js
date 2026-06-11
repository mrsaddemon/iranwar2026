export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 934,
  "lastUpdated": "2026-06-11",
  "lastSyncedAt": "2026-06-11T02:06:06.723Z",
  "warDay": 104,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 100,
    "summary": "A US-brokered truce between Israel and Hezbollah appears to have collapsed following Israeli strikes, though Iran and Israel have since pulled back from a fierce exchange."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
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
    "nuclearIndex": 60,
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
      "date": "Jun 11",
      "text": "US launches new attacks on multiple targets in Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQRzU3NkNkeDZSNkxfN0JIN2NKM1pXNUNYenBXZ1o1bTJ4T1Y1ZEUyUlprZXo0T0gyWXJWOFhsTGt0NG94N2xwa1pYTjE5RjhoTF9fOGQxRnhITjdYcUkwMTVPU25IcHd2bGtHeVRWUHU0VHhwR3d4ai1kSFJLS000VEx2UGs3QzRCVUVfMFJKRzl6RjJfZnRrZjBKY0tJcFBUTTd4QU5YUmxhSUJBd2xZWHZKQ1owYmhnanVKa09n0gHDAUFVX3lxTFA2cS1jaHJYWnFBR3paR2lkMV9qZnNWcGZLMFlUcXZqcHV1V25FQXFIeFdtTnY1U0lXZ1lTYXFNT1dqSkUzeU5VN3phWFliU0NvRWxPY0VmNVZIa193YXVHbDdfQkNOeE1Lb0k4aWJZWGF0SkxzazFUcUdXVXFOTm8wRV9wVHhvczhzaWxBOE5iaDFJc1hoemNtM3VYTUtQTlpvVVBReEJ4UFVHeEVENDBwLW9BeURFZGVqMVllbjlVa0lyRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 934
    },
    {
      "date": "Jun 11",
      "text": "Trump claims Iran shot down a helicopter and vows a response.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxPTk1sMDhuN1Y0S0dtS3hsMWdlZUp5NGVWcnhZSmEya3VLYXBOM29DTzkzTjNIWWdIMUNVWjBVWkNWQnRnYWZnRUcwSmQ3bDU3QlN5Rndub2dWNUc1dHA1Z0c1RXlPT1lhbWVpRlFnV3ZjSml2MW45ZmlDbXU5clhNQmlmZ3RwbmtqQkFFMHZLOS1LVkVpSnhsTHpoMjNTOXltMl95QXEyZ25rd9IBrwFBVV95cUxNOG1fSlNOY2JPQUF4c3hFSF9hZ25YdHp4SzNzai1oZXhHNjlIbkhhV21CMnRUVkxBbXg5WVpURUFEYVdkUDhjNEJRUXp1WmxtWFRHajRabktYbV9ab013cmcwb29nYmJ5N3hWbE93SThJclNIRzVzUEhWc3IzbEVPRkplUTlldk5yMTJPdTFFM3ZhRUU5WFhzQWxoQ09OOWNndEVVVFVGSThYY2Vndi13?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 934
    },
    {
      "date": "Jun 11",
      "text": "Iran announces the closure of the Strait of Hormuz following US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQcWotVHBuWTNSVDRJNWlaekNFWjdqZ2ZnZ0JoYU8zbzl0SUZkRWdlSXpJZWpwekExV0o0blgySGhiQWJIOXczR0V3ME56WUhjZmFNUVBTbU5iQ2lXam9JVXRjTmczaW1ZYXVSRGZfd3NaeHVFWFFCZzNRZklybGRFbGY1VUlUM2lReXlrdkk2aDNPdGVNVlRDWjRFeTlVM2FVRHl1RnloTjRoTFdfNG01WTJndFrSAboBQVVfeXFMUFdrMU1RZnNWZ3M2eWRPNGxiRXNybTYtTHp3V2dBRlVVQ1B2V1M2c3pFTGZGZDhYSGVkV2lBUXVjeThnb2RqX2tmeDhEWFZEZE9OLUtfTGNMTXJJNTM2akMwblhlejY2MzdBMXROYmdBUGNySlE3VEQ3cTdsRVpnc3M2aGhuX2ctR1hKUEkzeU5PZlI4ZmQ4SF9VeVlmV09aSXZUSzNKRW10N0Y1Z0lDMzMwSmUtM084RkRn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 934
    },
    {
      "date": "Jun 11",
      "text": "CENTCOM states the U.S. has finished attacking targets in Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE1Oc1Fzd0ZSWVdncl9DMFcwSHN2Q1V3N1pUWDNRN3NocFY3ZVJ2Y25GR09CMW5fSjRSSDBxc3RiUER0cDhWMU1yNE1oVUh6ZlpRLVJOelB1aF9vbXU0bDZiOHVscFVxWmtCc2x3VFJBUTRZUmxqbXBKR3I2VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 934
    },
    {
      "date": "Jun 11",
      "text": "Tehran claims it has targeted a US base in Bahrain.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxOYVRrbUlGa2FOQi1SSnhKZmNKNDh6NURTOFdVSjVHeEpTTVM5b0RyNDQxWnhIaXRwTVRBNEhMY2x4c1EtM1VXYkp5VWp1a1huZV84MEFVb3ZIVEZtSHBRWlVuMXJPNXc5dmdQSnctOGNRckMwNFFheUdWVE9uWmFpdU9fS0lZZmlJd2M0dWoxUlpZNVk1SnZHeVZ3MG41aDZKQ24yQkNueGNEUGN5alJNTjhjUWdFeGZkQ0k0QndwQ21heGxvNXpnTGdCRVA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 934
    },
    {
      "date": "Jun 11",
      "text": "Israel strikes a Beirut suburb days after a US-brokered truce.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE85MmJYVVJ0LTcyRno2RHYxLXN2cjFwME5MMWxBSjhCX3FRdFdNYW5uUnFZcG9CQ19jalN5N2phNTN1ejU3cmdGampqY1lCZDVZMk5LUTRoMnVOZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 934
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (15 headlines)"
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
      "headline": "US Strikes Iran, Vows Strong Response to Aggression",
      "summary": "The US military has conducted retaliatory strikes against multiple targets in Iran, with statements from officials indicating a firm stance against perceived Iranian aggression. There is a clear intent to respond forcefully if US assets are targeted.",
      "tone": "defiant",
      "latestSinceUpdate": 934
    },
    {
      "perspective": "Iran",
      "headline": "Iran Responds to US Aggression, Threatens Key Waterway",
      "summary": "Iran claims to have attacked US fleet assets and a US base in Bahrain, while also announcing the closure of the Strait of Hormuz in response to US strikes. Tehran views the US actions as an escalation requiring a strong counter-response.",
      "tone": "defiant",
      "latestSinceUpdate": 934
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Operations, Rejects End to Conflict",
      "summary": "Israel has conducted strikes in Beirut and a minister has called for aggressive tactics against Lebanese civilians to pressure Hezbollah. Despite a reported pullback, Prime Minister Netanyahu asserts that the conflict with Iran and Hezbollah is ongoing.",
      "tone": "strained",
      "latestSinceUpdate": 934
    },
    {
      "perspective": "Regional De-escalation",
      "headline": "Fierce Exchange Followed by Partial Pullback",
      "summary": "Following a period of intense military exchanges involving the US, Iran, and Israel, there are reports of a mutual pullback. This suggests a temporary de-escalation of direct hostilities, though underlying tensions remain high.",
      "tone": "neutral",
      "latestSinceUpdate": 934
    }
  ]
});

export default LATEST_SNAPSHOT;
