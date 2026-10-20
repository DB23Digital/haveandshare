# GEO / AI Search Readiness — haveandshare.co.za
**Date:** 24 August 2026

## Findings

| Check | Status |
|---|---|
| robots.txt | `Allow: /` for all agents — GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot all implicitly allowed. No AI crawler blocks. |
| llms.txt | Present at `/llms.txt`, but **stale** — last updated 2026-06-01, describes the site purely as "life coaching and corporate facilitation," with no mention of the imposter-syndrome/self-doubt positioning now live on the homepage since the H1/meta rewrite. Per Google's own guidance this file carries no direct citation weight, so it's low priority — but worth a quick sync next content pass so it doesn't actively contradict the live homepage. |
| Author/date signals on homepage | No `author`, `datePublished`, or `dateModified` meta/schema detected on `index.html` in a quick grep — worth confirming in the next full technical pass; author bio exists sitewide per the June audit but should carry through to schema, not just visible text. |
| Server-side rendering | Static HTML site — fully SSR by default, no JS-dependency risk for AI crawlers. |

## Assessment
No blocking issues. The site is technically accessible to every major AI crawler and has no rendering risk. The two things worth doing, in order of actual impact:

1. **Update `/llms.txt`** to reflect the new imposter-syndrome-for-high-achievers positioning and list the new blog posts (`blog-high-performer-imposter-syndrome.html`, `blog-executive-self-doubt.html`, etc.) — five-minute fix, keeps it from contradicting the live site.
2. **Verify `Person`/`Article` schema carries author + date fields** on blog posts (not just the homepage) — this is the actual authority signal AI systems weight, not the llms.txt file. Fold into the next `/seo-schema` pass rather than treating as separate work here.

No further GEO-specific action needed this cycle — the content-cluster work already underway (imposter syndrome test, burnout signs briefs) is the higher-leverage lever for AI citability, since self-contained, statistic-backed answer blocks are exactly what those two briefs are structured to produce.
