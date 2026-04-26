export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 373,
  "lastUpdated": "2026-04-26",
  "lastSyncedAt": "2026-04-26T08:06:08.551Z",
  "warDay": 58,
  "summary": "The Middle East conflict continues on Day 58 with ongoing US-Iran tensions, a fragile US-Iran ceasefire, and escalating clashes between Israel and Hezbollah in Lebanon, while the Strait of Hormuz remains under a US blockade.",
  "lastNarrativeUpdate": "2026-04-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A 2-week ceasefire has been reached between the U.S. and Iran, but regional stability is undermined by escalating clashes between Israel and Hezbollah in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
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
        "precision": 0.7,
        "aggression": 0.8
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
      "date": "Apr 24",
      "text": "Trump cancels US envoy trip to Pakistan for Iran war negotiations, stating Iran must initiate contact.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQdFFmNlVHWmJfbE9IR21icVdKc1pmLUlId3cwWTY2S0RQc3RZVldCa1JQLUhqN2luNVczS2FDWUlOWkFsRU5GWVB0MTAxZXhrQjRITGViQWlILTNXWDFRNndGaU9XVWJ6X0xsclpxallkbThvZmEtTy1FMTZpRVRIZDhoYTZJT3JvcjVkU0JLWHdaVU1DTm5uRElTSlRxY0xnOElhYWFUTjhVemxvajl5aXdGcUl0enhDZGJ2ZTJvSdIBxAFBVV95cUxOU28wRkpoelFsTEpJcXE0ZUVHVVM3WjViZDBJYmJIRnl2d0tDSS1VenpQV3BvbXI2cW1IRXpaVWF6Zk5iOXdVWk12VTFYYlJTNlhEUnFNUkNYSkVqc2lfczlmZGhRZjNPV0gwdWRhNDF5SWI2aUtaVjA0c0ZQUEJQQ3daTmJtTXNsVlFzQm1SQW1HTUs0ajdYc2Y1bWNBREFjbUpnWHJWREJXNndudjRiMERCUmNpSm9RMXFnM3JvX3J6N2th?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 373
    },
    {
      "date": "Apr 24",
      "text": "The U.S. and Iran reportedly reach a 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 373
    },
    {
      "date": "Apr 24",
      "text": "Israel attacks increase in Lebanon, and ships are reportedly taken in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 373
    },
    {
      "date": "Apr 24",
      "text": "The U.S. blockade around the Strait of Hormuz is in effect and may last until the second half of 2026.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxQYlNYYVRkbkhyeUIzU1lTVFUtNUpzMTV2dnRHX0syRWhadmpGQUszd1daMm1DY1VOWDVaNVBFejRod1FMOW44TTdrVDFSelp3akM2STdzT0tHemszZ2F0MkxQTHlka1N1UVVaWDZIS285eV9IZlBkem0tQTdueVRHWlNHdVFURzDSAYwBQVVfeXFMT2FKaHozTUQ0b3lfdnRJd0ZOQThhNlpJV3M1cEFOaGFNdFNIckZINF9teGxiQUpCV1FEVmdLWFV5NGJwdTFsUWhVdXlOZk1QVko1Z1hHc29GQlFwR2czeGhpaS13UGNFRHpSQ25PYzd1eWd2OHRROTZyRmR5TUxGVi1HVEFLaWJiRkFrSEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 373
    },
    {
      "date": "Apr 24",
      "text": "Israel kills four in southern Lebanon, escalating ceasefire breaches with Hezbollah.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxQdzNwb1FGUDJFT25pX283ZU1NN2NSRlpTakVjSDF0VmFfbC1waENMWno2U1RDSGlxc0dDOVR3cktQZC1LMmVsRzIyYm44QXhYNThpejFLRjdHblVicnNNVzNIRlpod2MwWTRGV1otbWl5Um9xeEZMaDdsVjI1cHhSd3lmQ3Q2MjREa0MxNmlrQdIBlAFBVV95cUxQY2t5Q3ZfNHNFUlVkY2VPYURydHdqZVBxT0Q2d0VwaE9vOHBUT092VTExLU9TQl9zVGZKdVpNMG9odUtJejZOTmxyNndDOTdxRVNlOXZwZ3F4dkdiamp6a0lIWWI1Z1JSUXdHdmplUHd5TUlXVi1zZ3ZLTHBjRXpCNjAxUG45MEZFdHdaVHVVekJLZ0lW?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 373
    },
    {
      "date": "Apr 24",
      "text": "Reports reveal Iran inflicted more extensive damage to U.S. military bases than previously disclosed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPZjFHTHh6M3BTOGFlWVMxMUktYWVwMVJ6dzN3RFlWY3JIcnIwb0VXUmhDYU9reFpPV21jZWVtTlJJTVhVRlQ5bk5ITlFYS3pNaVFCZkM1UWVSYUQ5X0FyX0gwWDIxdE9SMFNuY2tVV1lWTXVLVWJzbXJQaTJsNjU3OEJ6Q0p2d3hFSkQtMC1neEQ5Y25ySFBOSkRKYmVtWUtwR2tNU29pUmNySjNXUVFhWDE4bWMycUdBVFZCR9IBwgFBVV95cUxPekZTZVp6MEFnNWV2OVNLMTlMOFFRS3hwQkVYZEdXR1JIWmVhOFJkc1k0UGd0Mi1xT3l5dHY3cngtNXY3WlhJRmhGUHlzT2NqQjdqb2RaR2NoY0ltQm8tcU85STF0d0JBOEdrdVJBTU5OWTlySWJPT3g1WjZGa2JyVE9DM0pnODBOb0FONVd1elBRTkh5dUlzUjdkcndvamRDa1l0MEJvN3Nla0g2NkFEcUFzQ1FqbzdreVRxeG9wYUx0QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Middle East Monitor",
      "latestSinceUpdate": 373
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
