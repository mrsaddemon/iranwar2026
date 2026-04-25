export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 364,
  "lastUpdated": "2026-04-25",
  "lastSyncedAt": "2026-04-25T20:04:47.014Z",
  "warDay": 57,
  "summary": "The Middle East conflict continues on Day 57 with a fragile ceasefire in effect, marked by ongoing hostilities in Lebanon, US-Israeli strikes on Iran, and heightened tensions around the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "A ceasefire was extended by President Trump, but it is widely perceived as fragile and is being tested by ongoing fighting in Lebanon and threats from multiple parties."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
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
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Apr 24",
      "text": "Israel attacks increased in Lebanon, and ships were reportedly taken in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 364
    },
    {
      "date": "Apr 24",
      "text": "President Trump canceled sending envoys for Iran peace talks, stating the US holds 'all the cards'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 364
    },
    {
      "date": "Apr 24",
      "text": "Satellite data revealed the scope and scale of US-Israeli strikes on Iran.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 364
    },
    {
      "date": "Apr 24",
      "text": "Hegseth warned Iran that US forces would 'shoot to destroy' any ships laying mines in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQOGxhSF96S0IyUU80Y3Q3Y0xIcUdKVDZBVnlLUmRReXljRmNFRW1oR21LYVdFSXBGWlJjbkRnY2FsMkFHZHZvYUFpLTZBZXBJUG81bFRCWXFEQzZHVXMxZEVFV1pZM0hlVVF1bVpJcU1pcmlHbG5jM0lpSU13X1lWUnNReGk2N0VmSWw3Q2FmMnplakVFWTFWaG5TbHhtRWhNZHlhX2Jvd9IBrAFBVV95cUxOdDk0SWc1VGpYYzZzdzRyZXE0OHlXQTV6clczSkp1MXFreWdMRjNXS1QtN1VhLXpqU2dYb1BYQnhONVNNX1RvWjh0Zm1LRVZQeDQtdncxQkxBVGIyZlVKUWxYN19nSGJ0Y0czc1VIekY2N0xwemhnblN1bVo1Sk53VXlHa0FOZDgxVldaMlJ6aDhoUUlnck1DdHUwcG94akNtc1REMzlaRm9rLTkt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 364
    },
    {
      "date": "Apr 24",
      "text": "Hezbollah declared the ceasefire 'meaningless' as fighting continued in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPMjIzX3ZxYjhjTURMWjlQUFlBSXhqSUJpZ280eG5VdnJxWEp5SjNKRFhzczh3VnR2RG1pQVVJQTJzUFZ0V0ZOZUNIQjV0eUNxZlAxS1BKNWRCSUpuU01WeDdLS3NmZkRmcFAtT2lIZzg2cmxXZ25Gb285a1BOTTBkNU9melFDbzd1T1ZRUURJb1pBWG1aQzhfaExLM3hKYkZHOHBsaTcySjZEU3VDX1Rr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 364
    },
    {
      "date": "Apr 24",
      "text": "Iran’s Armed Forces Command threatened a response if the U.S. blockade of Hormuz continues.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 364
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
