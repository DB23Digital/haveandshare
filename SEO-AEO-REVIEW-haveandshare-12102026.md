# SEO and AI-Visibility Review: haveandshare.co.za

*12/10/2026. Checked against Google's June 2026 guidance on generative AI search. Covers the uncommitted working tree on `master`, as at the 28/09/2026 rework.*

**What I checked:** every `.html` file in the repo (titles, meta, canonicals, JSON-LD parse and types, word counts, internal links against disk, sitemap against disk), `robots.txt`, `llms.txt`, `.htaccess`, `sitemap.xml`, and the existing audit and GEO files.

**What I could not check:** the live site (nothing fetched, so I can't say whether the 28/09 changes are deployed), Search Console, GBP, Core Web Vitals, and any ranking data. Anything resting on those is marked *unverified*.

## Bottom line

Google's AI Overviews and AI Mode draw on the same ranking and quality systems as normal Search, so there is no separate AEO job here. The fix is the SEO work already in progress. The site is technically clean, with no broken internal links, valid JSON-LD on every page, and crawlers fully allowed. The remaining risk is that the 28/09 recovery work may not be live yet, and that the rewritten pages are still thin on first-hand expertise. That second point is what Google says matters most.

## 1. Audit

### Fix these first

1. **Confirm the 28/09 work is live, then request indexing.** Impact: High. Effort: S. The H1 restore on `positive-intelligence-coaching.html` is the fix for the only page-one rankings the site has. Git shows all of it uncommitted, and the action plan still lists deploy and re-index as open (items 11 and 12). The 14-day monitoring window that plan started ends today. *Unverified: live state.*
2. **Finish the "programme" localisation on the core offer page.** Impact: Medium. Effort: S. The 28/09 audit says this was done, but two visible instances remain:
   - Meta description, `positive-intelligence-coaching.html:30`: "mental fitness programs". Change to "programmes".
   - Body copy, `positive-intelligence-coaching.html:489`: "work through the program together". Change to "programme".
   - Leave the PQ legal disclaimer at line 561 alone. It is Positive Intelligence's wording. The nav label "Programs" is repeated sitewide and is also worth changing.
3. **Make `lastmod` and `dateModified` honest.** Impact: Medium. Effort: S. The sitemap says 28/09 for six pages, but the JSON-LD dates disagree:
   - `blog-pq-coaching.html`: schema `dateModified` 01/06/2026. The only diff is one sentence of link text, so a 28/09 `lastmod` overstates the change.
   - The three spokes: schema `dateModified` 15/08, 19/08 and 24/08, against a sitemap `lastmod` of 28/09. Their diffs are large (84 to 153 lines), so the schema dates are the stale ones. Bump them to 28/09, or put the real dates in the sitemap.
   - Google discounts `lastmod` when it proves unreliable, so keep it truthful.
4. **Add first-hand material to the hub.** Impact: High. Effort: M. See section 2.
5. **Standardise internal anchors to the core offer.** Impact: Medium. Effort: S. The audit's rule is the exact anchor "Positive Intelligence coaching in South Africa". The blog and home pages actually use about 13 different anchors, and only about 3 follow the rule. Examples are "Positive Intelligence", "Explore PQ coaching" and "mental fitness framework". Make one pass.

### Pillar scores

- **Technical foundation: 4/5.**
  - Verified: no broken `href` or `src` targets on disk. Every page has a title, meta description and canonical. `privacy-policy.html` is correctly `noindex` and out of the sitemap. `book-coaching` is in the sitemap in its extensionless form, which matches its canonical and the rewrite rule. `404.html` is correctly excluded. Static HTML, so no rendering risk. `robots.txt` allows everything.
  - Held back: performance and CWV are unmeasured (*unverified*).
- **Content quality: 3/5.**
  - The hub is now 2,723 words, and the spokes run 1,314 to 1,650.
  - Several commercially relevant posts are thin (word counts from my scan, which includes nav and footer text): `blog-coaching-cost-south-africa` 581, `blog-choose-life-coach-johannesburg` 602, `blog-pq-vs-mbit-coaching` 522, `blog-team-alignment-workshop-agenda` 533, `coaching-vs-therapy-facilitation` 345, `book-coaching` 236.
- **Local and commercial authority: unscored.** GBP, NAP and citations need account access. Earlier local reports exist in the repo, and I did not re-verify them.
- **Entity and schema: 4/5.**
  - Verified: JSON-LD parses everywhere. `@id` references to `#claudina` and `#business` resolve against the homepage graph. Author, publisher and dates are on the posts.
  - Held back by the items in the findings below.

### Findings

**Technical**
- (Low, S) The hub `blog-overcome-imposter-syndrome.html:187` is typed `Article`. The 12/08 schema instructions standardised the blog on `BlogPosting`, and the rewrite reverted it. See section 3 for the one-line fix.
- (Low, S) `FAQPage` JSON-LD is still on `mbit-coaching.html` and `blog-toxic-work-environment.html`. The 28/09 audit says FAQ rich results were removed globally on 07/05/2026. I did not independently confirm that date. If it holds, the markup does nothing, so remove it if you want the tidy-up. It does no harm. Keep the visible Q&A.

**Content**
- (High, M) The hub covers Clance and Imes, Valerie Young's five archetypes, "amygdala fires before the prefrontal cortex", and a five-step protocol. That is the well-covered version of the topic that Google calls commodity. What a generic page cannot copy is Claudina's own material:
  - Anonymised client patterns from 500+ clients.
  - What she sees in South African executives specifically.
  - A real before-and-after session arc.
  - Her mBIT practice, with a sentence of what it does in the room.
  - Put her name and credentials in visible byline text, not only in the schema.
- (Medium, S) The neuroscience and mBIT claims in the hub need a source or softer wording. I did not verify them, and the heart-brain and gut-brain claims in particular are contested in the literature. Coaching content leaves little room for error here.
- (Medium, M) The thin commercial posts listed above are where buyer-intent queries live. `blog-coaching-cost-south-africa` is the highest-value one. Whether to publish actual price ranges is **your client's call**, since it is client-facing wording and pricing.
- (Low, S) The "zero em dash" rule holds on the cluster pages. It does not hold elsewhere: `reality-check.html` has 7 (modified in this change set), `blog-coaching-cost-south-africa` has 4, and a few others have 1 to 3. Fix them only if the rule applies sitewide.

**Local and commercial**
- (Medium, S) Verify GBP category, hours, service area, and that the phone and address match the site. The site lists Glen Marais, Kempton Park. *Unverified.*

**Entity and schema**
- (Low, S) The homepage `sameAs` list is good. Add the COMENSA directory profile if one exists.

## 2. Strategy: imposter syndrome cluster and core offer

**Principle:** commercial queries first, then the informational cluster that supports them.

**Phase 1: this week (protect revenue).** Deploy, request indexing for the core offer page and the hub, and make the "programme" and anchor fixes. Hold ranking for "positive intelligence coaching south africa" and "positive intelligence programme south africa". Those are the only page-one rankings.

**Phase 2: next 30 days (depth).** Do the first-hand rewrite of the hub and the three spokes, plus the sourcing pass on the science claims. Do not add more spokes. Three spokes with distinct jobs is enough, and splitting further into one page per query variation is the scaled-content pattern Google's guidance warns against.

**Phase 3: 30 to 90 days (commercial pages).** Expand the coaching cost and "choose a coach" posts into pages that answer the buyer's actual questions. Check GBP and local citations. Add a client story or two with permission.

**Targets, with a caution.** The audit sets a goal of moving "how to overcome imposter syndrome" from position 59 to the top 30, then the top 15. That is a global head term dominated by large publishers. Treat it as a stretch goal, not a forecast. This is my inference, not checked data. The better near-term bet is the South African and executive long tail: "imposter syndrome coaching south africa", "imposter syndrome coaching johannesburg", "executive self-doubt". These match the offer and are far less crowded. Also note the audit's "84/100" header and its 85.1 total disagree with each other. The category scores were assigned without field data (the performance score of 78 had no CWV measurement behind it), so I would not report that number to the client as a measured result.

**Measurement.** In Search Console:
- Track impressions, clicks and average position for the four target queries weekly.
- Watch the Pages report for the cluster URLs, and the Performance report filtered to Johannesburg and South Africa.
- Indexing and serving are never guaranteed, even when everything is correct.
- Rankings can take weeks to move after re-indexing.

## 3. Schema (ready to paste)

Rich-result eligibility and consistency only. Schema is not an AI-ranking lever.

**Hub type fix.** In `blog-overcome-imposter-syndrome.html:187`, change `"@type": "Article"` to:

```json
"@type": "BlogPosting",
```

Nothing else in that block changes. The author, publisher and `@id` references are already correct.

**Date sync.** Set `dateModified` to `"2026-09-28"` in the three spokes, but only after confirming they were materially edited on that date. The diffs suggest they were. `blog-pq-coaching.html` stays at its real date unless you make a real content edit.

**Optional cleanup.** Remove the `FAQPage` block from `mbit-coaching.html` and `blog-toxic-work-environment.html`. Keep the visible FAQ text. Validate each edited page at validator.schema.org and in the Rich Results Test.

## 4. Evaluating the existing AEO and GEO advice

| Item | Verdict |
|---|---|
| `GEO-ANALYSIS` 24/08: AI crawlers can access the site | **Correct and verified.** `robots.txt` is `Allow: /` with a sitemap line, and the site is static HTML. |
| `GEO-ANALYSIS`: update `llms.txt` as the first-priority fix | **Reframe it.** Google Search does not use `llms.txt`. It was updated on 24/08 and does no harm, but it is not worth ranking effort. Keep it in sync only so it does not contradict the live site. |
| `GEO-ANALYSIS`: check author and date in blog schema | **Valid, and largely done.** Author, publisher and dates are present on the posts. The remaining work is keeping `dateModified` accurate (finding 3). |
| `GEO-ANALYSIS`: self-contained answer blocks help citability | **Reasonable as a writing habit.** Google says chunking for AI is not required, and the 52 and 58-word answer boxes are fine as reader-first summaries. Do not add more of them as an AI tactic. |
| 28/09 audit: H1, spelling and anchor diagnosis | **Plausible, partly done.** The spelling and anchor fixes are incomplete (findings 2 and 5). I can't confirm the ranking cause without Search Console data. |
| 28/09 audit: health score 84 or 85 out of 100 | **Don't present as measured.** See section 2. |

## What not to spend time on

`llms.txt` as a ranking tactic, rewriting pages "for AI", manufacturing brand mentions, and adding schema in the hope of AI citations. Google's June 2026 guidance says none of these help in Google Search.
