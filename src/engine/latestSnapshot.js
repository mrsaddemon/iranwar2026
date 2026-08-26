export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2292,
  "lastUpdated": "2026-08-26",
  "lastSyncedAt": "2026-08-26T14:06:42.964Z",
  "warDay": 180,
  "summary": "The ongoing Iran war continues with reports of US casualties and Iranian strikes on US intelligence sites, while negotiations and disputes persist regarding the reopening of the Strait of Hormuz amidst US threats of economic sanctions and Israeli military actions in southern Lebanon.",
  "lastNarrativeUpdate": "2026-08-26",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or truce is reported between the primary belligerents."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Aug 25",
      "text": "Iran war updates indicate ongoing conflict and developments.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2292
    },
    {
      "date": "Aug 23",
      "text": "Bessent promises 'economic D-Day' ahead of expected Iran sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE10NWduUk9rVWtZSTJ4a2k3clBvRGdIQlFLaWFyM1VqR0RDZTE2QnhfUHRleWh3T2oxR2k3Y19mVi1EcURxSllxd0lEblFoNklOSS0waGpqdGM0bjdWUm1Kamt3Tm9GaTNBbWVlMnJB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2292
    },
    {
      "date": "Aug 25",
      "text": "Iran and Oman discuss the Strait of Hormuz, with Tehran dismissing US threats.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNTWZtMDBMZHMxY3Y2bFg0R0hzYlJMaUMza2ZhXzAtaG5UNlk2X1hIQVJBcWxLMzBCZ2pPY2Q1R09IWlFMYnhSbUVmRUNqSHFVZmxhY0VrUkpaVW5iZFBOT0w5c2h2UHBYZ1hja0hnb2ctRnpfRnlENFRjVmIxbEJIVGxkb0E3b0t0Y3oyZWZnMVBqeGZMdE1wMURyS2tmbkliak16NlhlLV9ieTVQTDd1VGdwWnhkQdIBuwFBVV95cUxQLS1ucTVGS2NYdm0xanM1Z1RQbTFOY1h0azNGTzJLblk1YWozaUtzWExSNHQxS1dOS0VsVldTX0dJU0hPSW9xRmJWdFdGX1p3aXBsM0hEZ3Y3QTViWmFWdG1SYXJPbEtjTEFjbnh1X2pLS0xZR3Jsekk4alY3TGZ2WnJZNVFqcGQyazZDT3Y1VU1ibEtDMDFYTW45a3FpSTNyNFA3S1BNVXZlRktuaGpkVUVxd1o2V0hneEtj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2292
    },
    {
      "date": "Aug 25",
      "text": "Report indicates Iranian strikes caused billions in damage to US intelligence sites.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxNYzlVbWhabWV4eDRJaGdCOXNlM3FrdU1RUWhkVlFzMEFocTRFQW1vTGlJZmt6Ti1DY2FXMWNuQW5KRE9yUERTZWI2c2RyaVVCVjI0NVVZQnNsaXVRVHRBZE1tZUtPODNJM2VwczdsTzdYdzZjN2t2dm9XZ2xiMzRmQkozaTJFWEoxNkNucml0Tms4cWFXSmpjUmNQTzltNlFJX3dfRm02enhSM1BMRmlkNTcxanJ0SmZ4Z0xoS1FTTjlySmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 2292
    },
    {
      "date": "Aug 25",
      "text": "Iran warns of a military ship ban in Hormuz under a potential deal with Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi3AFBVV95cUxQNURuNk0wT05tY0NDV05DTENVbXpmdEtqbmVzNGVpenRfSk1CMUJHUFVEZTlPMnVhLUdOUFZfdmgtd216RmF0SDJOWE9lNldfQlJpTmNTMTlGUjBnNmtzbkFwVjhWcjhrTVp3YVRCSjdRRXlyTTlUUThHMjd6SjR0V2RwcGV0NlBXdEJCekRtd1I3b3RNSWI0Mng3SmFsVThMcEppZjNVUjVpa0lOVVhjZU8zRGhXakJVTjNLWlRlQlh3Nkd0azdlUlNwMmhhZEpYVldWWXNHZ1dHcWNO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 2292
    },
    {
      "date": "Aug 25",
      "text": "Rubio reportedly informs allies that the US is shifting from strikes to sanctions on Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxOWi1rb2R1Q1lFYmdwNVphZE85Nmh3bnZRLVpBcUVfV2N5WWlsRGRaUllFTERhLWxvX3JKUy1qMXd6cS1LWDNZVFpnVlBtakVCMGJDQXJjck9CV0NhNGwxWlNEeEtMNFBSV0RqNUp5QnRyRGNuOXZPNzd2OU4zYXNtSXRvM21nODFuUVlmcE5XOXFCaHJTeURLVzh3OFFRcG53VXNF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Muslim Network TV",
      "latestSinceUpdate": 2292
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
      "perspective": "Iran",
      "headline": "US Sanctions: A Declaration of War",
      "summary": "Iran views US sanctions as an act of war against all nations, indicating a strong stance against economic pressure. Despite this, Iran has granted passage to Iraqi oil tankers through the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "United States",
      "headline": "Hormuz as 'American Territory', Economic Pressure on Iran",
      "summary": "President Trump asserts the Strait of Hormuz as 'American territory' and threatens Iran's trade partners, signaling a shift towards economic pressure. The US military continues to facilitate oil transit through the strait.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "Israel",
      "headline": "Retaliation Against Iran for Hezbollah",
      "summary": "Former Prime Minister Bennett advocates for Israeli strikes on Iran in response to Hezbollah attacks. This perspective suggests a direct link between Hezbollah's actions and Iran, calling for escalated military response.",
      "tone": "strained",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Force Only Way to Compel Israeli Withdrawal",
      "summary": "Hezbollah's Nawaf Moussawi states that only force can compel Israel to leave Lebanon, indicating a continued commitment to military confrontation. Efforts to tame Hezbollah within Lebanon are reportedly stalling amid the Israel War.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    }
  ]
});

export default LATEST_SNAPSHOT;
