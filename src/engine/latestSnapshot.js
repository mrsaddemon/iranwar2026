export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 421,
  "lastUpdated": "2026-04-29",
  "lastSyncedAt": "2026-04-29T09:35:59.698Z",
  "warDay": 61,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-04-29",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "Ceasefire language is present across the source mix with a reported duration around 14 days, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "Apr 29",
      "text": "Iran war updates: Iranian army ‘still in war situation’; Gulf leaders meet",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxQRTI1VDUtQzgtZ3dvTzhkZnhpQ05LZGZzcHpqWi03aFZ2UHJWWXpYbGRHU2tCMmdrWFhpc01BMUNQdDFUaVFMLWI3Wjg4WE84Q3BRTWY0Q1lTZHhBN3pBcGs1X3czamRTZ29YcnF5ZmZDU0NPVGh1T2E0UnpmVVhfZFZ5STJuSGRjbUlYZ2N0Q2lJY3BfR09uRnp1Y0ZrbHdmYUdnY0xJLVExYUcwemFEZDA5RVI2VFh5V3fSAb8BQVVfeXFMTjdpWWFVWEJTczd2Y1pvV3cxajdHTENIbC11c2g0MS1ZbDFmUmNxMmFKSDNUVVBMbjhxSG5MemRUTGl5ejZFczhGeHo4VlFSVmRKWWJUU3JveXkzOVhwMm9LV3ZtTU9FdDJGYUE5QmxLTG5kOTlpa3ZocVZiOHh4Zi1GQU1LakhpSmtudnNZMDRDVlVBazZtOHdTOElOYlVzYUszbEdJRlFjaE83RllTMjBWLV9CZE1YZ3dvc3ZZczg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 420
    },
    {
      "date": "Apr 29",
      "text": "United Arab Emirates says it will exit OPEC, while US-Iran negotiations stall",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTFBYdGFWQTUyN193ZzhtMEJRMTI3NG9PNDNxTFJwVEVCbkg3bjlDZVVDdGozdmlBRS1nWVZTenRBc25xNGxfVkQtb1FNdU1TYjc0NTRST0JBU3dBbDlHVlBhSkdGOWctdGM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 420
    },
    {
      "date": "Apr 29",
      "text": "Iran War Shakes Global Economy, but the U.S. Has Mostly Been Spared",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxOcHlFaVlQZ1R1cnJ4NWJkclNsNmJVZ293eW50UEQ3bC1xTFZVU19sRjhLdlNiOV9aUER3cDZCamhpRGlTMEN4WVA5UnU3X0l3WnpncWttMmxGS0FWQ3VhYzEzejZmdkdPQk14aG1RYU5pR1daYmZfSXFFYy1NMkxCcnJxdW54UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 420
    },
    {
      "date": "Apr 29",
      "text": "Here's what to know about ceasefire negotiations between the U.S. and Iran",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNRkpnNkpRckUwYWtYRzJnbDVFd3hqNEthUVVUOHBJVlZPR0JnVzZuaDFVVWdscGxDNkR6WTJjS0x5c1JXVi00VUVTUFZERk1pbTZsT0J5MDJtYkgyUmcyanF0d0luN2piV1lydmtpeXhaZFN2NUQ2eUhPclpQdzBwS3RGODdUaVJjZVFRRE5WQnB3SDdzdVlCYU82WXBsM0U4REticUYzbkVSMDDSAbABQVVfeXFMUFkwanJuSG1BSmNwTGhZUjRhTzNQUEhucUU1R3FFWmpZMjF6X3ZxZVNVMW43UVMzV0w4U1hzYmtWczhhcFpJV2YzVk5qV1FZcHZUUXhrNXVpanlrdjZYWnRCT0wzWW9mYkpjNG1IcVNYcEpxVzRLWUhlaXRiYkZLR19fWVdGOHVaWUZHRlE1bmp0SmhqZWZ2TUFad3NvTkdtV2t5YTNfbG1mb0txZ2JmUjc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 421
    },
    {
      "date": "Apr 29",
      "text": "Iran’s economy has been battered. Its leaders still think Trump will blink first",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxQM0ozZGk1UzNFZFlhdktCWnN3MnpWMVk0cC16OTYxR1pCWnA2NmFUb2JNNjVJV2JJazdWY1I1Z3IzX0Z6UHI4VVRpZGNBUE9jZ1d6RHJNbFdha2w4bjQyYklJdTlSOUczLTZDTFpoa3E4QTg0bzI1Vjljc0F1NXk0dkJ0YXhBamRBWDd1em9FMkJwYm9INXNBV3FfSkRkU2hMT1o5YWxOaUJiNzZ5QVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 420
    },
    {
      "date": "Apr 29",
      "text": "Iran war updates: Israel attacks increase in Lebanon; ships taken in Hormuz",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 421
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
      "perspective": "Iran's Stance",
      "headline": "Iran Offers Hormuz Reopening Amidst Economic Strain",
      "summary": "Iran, facing economic pressure, proposes reopening the Strait of Hormuz if the US lifts its blockade and the war concludes, while maintaining its military readiness and 'war situation' status.",
      "tone": "strained",
      "latestSinceUpdate": 418
    },
    {
      "perspective": "US Skepticism",
      "headline": "Trump Skeptical of Iran's Proposal, Cites Collapse",
      "summary": "The US, through President Trump, expresses skepticism regarding Iran's proposal for the Strait of Hormuz and asserts that Tehran is in a state of collapse.",
      "tone": "skeptical",
      "latestSinceUpdate": 418
    },
    {
      "perspective": "Israel's Security",
      "headline": "Israel Continues Hezbollah Engagement, Emphasizes Strength",
      "summary": "Israel continues to engage Hezbollah in Lebanon, with its UN ambassador emphasizing the IDF's morality and the necessity of a strong Israel to achieve peace.",
      "tone": "defiant",
      "latestSinceUpdate": 418
    },
    {
      "perspective": "Hezbollah's Resolve",
      "headline": "Hezbollah Vows to Keep Weapons Amidst Strikes",
      "summary": "Hezbollah continues its military actions against Israel, including drone strikes, and vows to retain its weapons despite ongoing conflict and Israeli attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 418
    }
  ]
});

export default LATEST_SNAPSHOT;
