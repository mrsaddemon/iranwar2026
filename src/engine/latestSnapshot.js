export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1100,
  "lastUpdated": "2026-06-28",
  "lastSyncedAt": "2026-06-28T18:53:11.399Z",
  "warDay": 121,
  "summary": "The US and Iran are engaged in escalating retaliatory strikes, with Iran attacking US sites in Bahrain and Kuwait, while a fragile ceasefire is severely strained and violence between Israel and Hezbollah also intensifies.",
  "lastNarrativeUpdate": "2026-06-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "A fragile ceasefire between the US and Iran is under severe strain due to ongoing retaliatory strikes from both sides."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.65
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 78,
    "tradeImpact": 57,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Jun 27",
      "text": "Iran's Supreme Leader calls for war crimes charges against the US and Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOam5lWGFqNWVZWW5aWnBwNGlhZEhGNlZxSEJMRW53YjYwQjJ0OXVTSVhJeGI5aDBhV1BPdXg0b1B0RGg3N2dMbFh3MHRxcFp1MFljZTlsNFgtYmxsSThLRnlBWEtXTS05eXBDSTZfSE03WTRYLTM3MkxOUjhBRXRtNlVrRTVSSVQ0LWRyVWNjUUJSc0FWTGl4QWtTaEx5NGxxdXJ2ZHJuNTc5dXRUakt0TlpySWZkSy1xVW82QXJYd9IBxAFBVV95cUxQN1E3WGQ0WkNTVjFiODlwR2o1UDVobVdkSnVSbkpwQTRQZ2xweHBWZnh6NlRoZkZTOTkxM1VyU083S3pfMnVVVW5UNUc1bDZtdkoxNDNvYWFUeTc4b0MyUnJaWFFBQ3ZiYVV4QnIxODZxUi1UODBjOGphclRLR3JsWVNzRU9nV0tFQkdvSWpWRE4tcDlIXzVUQm5RVlU3UW40TnJYRkFKaHBBaE45ekNGYmxINWtRUnJBRU15OFBfQmFjMnRj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1100
    },
    {
      "date": "Jun 27",
      "text": "Iran launches drone and missile attacks targeting Bahrain and Kuwait following US strikes, threatening to halt talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1100
    },
    {
      "date": "Jun 27",
      "text": "US launches more strikes on Iranian sites, marking a second night of attacks after a US ship was hit by a drone.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQajBRX044WFVIbHpWazNnNjNjV0UwekFBT0N6b0MyaHNDTjZMSC00Nm9kX1VmR1RxMEt0R3IwaUFzUUFqWmg1cVg1U1VfUE9EaVVaVU1jbkU4d2s1cjdlelMyM0ZSVFBJd0NWM3FlOHBiejVtNGNNOVZOeWZHa2VqZ3I1a1ZIQUdnUWl0QmpBS0tGSWFlMHdEQWdIRWtOaGdNTjVlaUIzcDJud2prT2pGQzNiTVJWUnPSAbwBQVVfeXFMTVA3Sm5UdjV5TnlPMEFiTi1YZDdCNEgwNW1mNTljT3Q2eGNveUZySmRLSjRLWnc0WjdmLUxBcS1Yd2NjNG56OXkwVnlHblZJeEo0MGE5ZDRvMi1hSTZGQkpKUUZybHJpRkFybXprQW5SN1phN1JkS3hhS1p3WmFBUWhWRVNpdlVWUlRDcktWd0ZnamNDdjVyWUhJUENITTZ0WDE0WGxjU3B3ektLcmZaR2FUYVVPaF92dG5QU0o?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1100
    },
    {
      "date": "Jun 27",
      "text": "Iran targets US military sites in Bahrain and Kuwait as strikes continue to strain a fragile truce.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE9JcVZwTU9wS3YxN1ZZcHgzWTRxdHpNN2Y0UlRDS1dneHhWQWdWTTNibkUwMGJGTjI1N3ROQWFjSkI3MURHTTNCVXBCS2hDYzc5em51MjNYalBRQ1M0dV9ILTNlTF9CYzFYTzVfTGkyU1RXcUR2alZUbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1100
    },
    {
      "date": "Jun 27",
      "text": "Violence escalates between Israel and Hezbollah, with Israel's military racing to counter new threats.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1100
    },
    {
      "date": "Jun 27",
      "text": "Former President Trump presses Syria to take on Hezbollah, raising alarm in Lebanon and Israel.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPLXI2YU1jOVd0UTFIQnh2MVVzeUZUZnphdUFkakU1UlFXY3ZST1RBWVU4dVJOS19NQzdQa3l0WmFUbFUxSjZjakVjY3VkRlM2LTlyTjFzZnRQekxrM0tuakgzdnc5MzdkZ2JxZVdaNDQ4RndMSXU5Q1RNQk4wcml4cGZadTduNHlzaVJ1alZMMFY2ajgyblZRWmxKbzAtSGJqRkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1100
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US",
      "headline": "US Strikes Iran Over Aggression",
      "summary": "The US states its strikes on Iran are a response to continued aggression against shipping and violations of a ceasefire agreement.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    },
    {
      "perspective": "Iran",
      "headline": "Iran Retaliates Against US Attacks",
      "summary": "Iran asserts its strikes are retaliatory actions against recent US military attacks and to defend its sovereign interests.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects US-Israel Deal",
      "summary": "Hezbollah's leadership has publicly rejected the US-brokered security deal between Israel and Lebanon, calling it a surrender.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    }
  ]
});

export default LATEST_SNAPSHOT;
