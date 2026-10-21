# TASKS: Have & Share SEO/AEO follow-up

Last updated: 12/10/2026. Source of truth for resuming. Full detail: `SEO-AEO-REVIEW-haveandshare-12102026.md`.

## Where we are

- 12/10/2026 (later): worked the fix list below and built `have_and_share_cpanel_20261012.zip` (160 files, site files only, rebuilt after the speed fixes). **Not uploaded. Nothing committed.** `.htaccess` has uncommitted changes, so check it before upload.
- The Lighthouse mobile run at 12:07 (perf 62) tested the **old** live HTML (live still had no `defer` on `external-tracking.js`). It does not measure the speed fixes. One extra fetch returned a different file size (58,653 vs 58,323 bytes), unexplained, so deploy state is unconfirmed.
- Live server is `nginx` and serves HTML **uncompressed** (no `Content-Encoding` even with gzip requested). `.htaccess` rules, including the deflate block, are ignored there. Needs the host to enable gzip/brotli.

- 12/10/2026: ran `/seo-aeo-guru` (audit, strategy, schema, evaluation of prior advice). Output is the review file above. No site files were edited at that point (later edits are listed above).
- The 28/09/2026 recovery work (H1 restore on the PQ page, hub rewrite, spoke de-cannibalisation, sitemap cleanup) is in the working tree on `master` but **uncommitted**. Live state is **unverified**. The latest zip is `have_and_share_cpanel_20260928.zip`. I did not check whether it matches the working tree.
- Not checked, no access: live site, Search Console, GBP, Core Web Vitals, rankings.

## Needs from Deon

- [ ] Confirm whether the 28/09 changes are deployed to the live site.
- [ ] Decide whether `blog-coaching-cost-south-africa.html` should publish real price ranges (client-facing, pricing).
- [ ] Provide first-hand material from Claudina for the hub and spokes (anonymised client patterns, South African executive context, a session arc).
- [ ] Provide Search Console access or exports (queries, pages, positions) for the 4 target queries.

## Personal story (15/10/2026)

- [x] Added Claudina's LinkedIn article "When I Could Finally Face the Mirror" (14/10/2026) as `#my-story` section on `about.html`, with 4 images (`assets/images/story-*.webp`) and `.story-*` CSS in `styles.css` and `styles.min.css`. Not uploaded, not committed.
- [ ] Deon: confirm Claudina approves publishing the mental-health and family details on the site (already public on LinkedIn).
- [ ] Optional: add `Article` JSON-LD / sitemap `lastmod` for `about.html`; add to the cPanel zip.

## Fix list (from review, priority order)

- [ ] 1. Upload `have_and_share_cpanel_20261012.zip`, then deploy-check, then, then request re-indexing in GSC for `positive-intelligence-coaching.html` and `blog-overcome-imposter-syndrome.html`.
- [x] 2. Localise "programme" on `positive-intelligence-coaching.html`: meta description line 30, body line 489. Nav label "Programs" sitewide. Leave the PQ legal disclaimer (line 561) as is.
- [x] 3. Sync dates. Set spoke schema `dateModified` to 2026-09-28 (confirm edits first). Revisit sitemap `lastmod` for `blog-pq-coaching.html` (real edit was one sentence) and `blog.html`.
- [~] 4. Standardise internal anchors to the core offer ("Positive Intelligence coaching in South Africa"). About 13 variants now.
- [x] 5. Hub `blog-overcome-imposter-syndrome.html:187`: change `Article` to `BlogPosting`.
- [ ] 6. Hub and spokes: add first-hand expertise, visible byline and credentials. Source or soften the neuroscience and mBIT claims.
- [ ] 7. Expand the thin commercial posts: cost (581 words), choose-a-coach (602), pq-vs-mbit (522), workshop agenda (533), coaching-vs-therapy (345).
- [ ] 8. Optional: remove `FAQPage` JSON-LD from `mbit-coaching.html` and `blog-toxic-work-environment.html`. Keep the visible Q&A.
- [ ] 9. Optional: em dashes outside the cluster (`reality-check.html` has 7). Only if the rule applies sitewide.
- [ ] 10. Verify GBP category, hours, service area, and NAP against the site.

## Monitoring (weekly in GSC)

- "positive intelligence coaching south africa" (was down 3.6 positions)
- "positive intelligence programme south africa" (was down 5.3 positions)
- "how to overcome imposter syndrome" (position 59, 302 impressions per month; stretch target only)
- South African long tail: "imposter syndrome coaching south africa", "imposter syndrome coaching johannesburg", "executive self-doubt"

## Notes

- The prior audit's 84/100 score is not measured data (no CWV, and its totals disagree: 84 vs 85.1). Don't report it to the client as a result.
- `llms.txt` is harmless and doesn't affect Google Search. Don't spend ranking effort on it.
- Related files: `FULL-AUDIT-REPORT haveandshare 28092026.md`, `ACTION-PLAN-2026-09-28.md`, `GEO-ANALYSIS-haveandshare-24082026.md`, `dev-instructions-schema-fixes-2026-08-12.md`.

## Mobile performance (Lighthouse 12/10/2026, home page: perf 67, FCP 4.5s, LCP 5.6s)

- [x] `external-tracking.js` (book.haveandshare.net) made `defer` on all 35 pages. It was render-blocking in the head.
- [x] Google Fonts stylesheet made non-blocking (`media=print` swap) sitewide.
- [x] Font Awesome link tags tidied (nested `noscript` removed).
- [x] Home hero preload now matches the responsive `srcset`, so mobile no longer downloads the 77 KB original.
- [ ] Re-run Lighthouse mobile after deploy. Not measured locally.
- [ ] Next if still slow: self-host Lato/Playfair/Allura and trim Font Awesome to the icons used. GA4/gtag (73 KiB unused) is a third-party cost.

## Status of fix list (12/10/2026)

- Done: 2 (programme/Programmes, nav sitewide + 4 spots on PQ page), 3 (spoke `dateModified` to 2026-09-28; sitemap lastmod already matched), 5 (hub `BlogPosting`).
- Partly done: 4 (5 anchors standardised to "Positive Intelligence coaching in South Africa"; about 8 natural mid-sentence variants left on purpose).
- Blocked on Deon: 6 and 7 (first-hand material from Claudina; pricing call for the cost post), 10 (GBP and Search Console access).
- Open decisions: 8 (remove FAQPage JSON-LD from `mbit-coaching.html` and `blog-toxic-work-environment.html`? left in), 9 (em-dash rule sitewide?).
- Skills from the SEO tool list: seo-cluster, seo-content-brief, seo-geo done earlier; seo-schema and seo-content partly; seo-page on the PQ page awaiting deploy; seo-local not run; review-respond and seo-maps probably not applicable.

## Next session, in order

1. Confirm the zip is uploaded. Compare live HTML to local (look for `<script defer` before `external-tracking.js`).
2. Ask host for gzip/brotli on nginx for HTML, CSS, JS.
3. Hard-refresh and re-run Lighthouse mobile (was 62-67). Check the GHL tracking still registers after `defer`.
4. If still under about 90: self-host Lato, Playfair, Allura fonts and trim Font Awesome (adds files, ask first).
5. Request re-indexing in GSC for the PQ page and the hub.
6. Run `/seo-local` once GBP access is available.

## AI-readiness (20/10/2026). Plan: `AI-READINESS-PLAN-2026-10-20.md`

Baseline: adjusted readiness 79/100 (dashboard snapshot 20/10/2026). Nothing deployed or committed.

- [x] A. `robots.txt` names the search and assistant crawlers (verified in file).
- [x] B. `FAQPage` JSON-LD on `index.html`; all JSON-LD blocks parse (verified).
- [x] D1. `lang="en-ZA"` on every page except `404.html`, which has no `lang` (verified).
- [ ] C. Align `ProfessionalService` description with meta description. Waiting on Claudina or Deon (client-facing wording).
- [ ] D2. Visible "Last reviewed" date and `dateModified` on the homepage. Needs a true date.
- [ ] D3. Optional `feed.xml` for the blog. Needs a yes or no.
- [ ] Decide whether to block training-only bots (GPTBot, ClaudeBot, Google-Extended, CCBot). Currently allowed.
- [ ] Rebuild the cPanel zip (latest `have_and_share_cpanel_20261015.zip` predates these edits), upload, then re-run `geo audit` on the live site.

## Persona brief (21/10/2026). Questions: `PERSONA-QUESTIONS-claudina-2026-10-26.md`

Nothing uploaded or committed. Local only, not visually checked in a browser.

- [x] Homepage "Who we work with" (4 links), 1:1 page three persona sections (`#executive-transition`, `#trapped-in-business`, `#lost-purpose`), Corporate `#silos` section, About "Who Claudina Works With".
- [x] Schema: Service audiences (1:1, corporate), Person `knowsAbout`, `areaServed` + Pretoria, Gauteng. JSON-LD parses.
- [x] Marks: Certified PQ®, Reality Check™ EcoMetric (About), Brain Gym® (Corporate). Banned words "breakthroughs"/"unlock their full potential" replaced; outcome promise softened.
- [x] 10 articles got a closing link to their persona section.
- [ ] Waiting on Claudina (meeting 26/10): examples, founder article, HR persona, numbers, mBIT Master vs Certified, testimonials, corporate steps, Project 2025.
- [ ] Rich Results Test on the live pages after upload. Rebuild the cPanel zip.
- [ ] Legacy 404 redirects (need Search Console data).

## Action plan 24/08/2026 sweep (20/10/2026)

- Checked all 13 items against the working tree. #1 (`.htaccess` deny rule), #2 (24h reply copy), #3 (FAQPage removed), #5 (booking fallback), #6 (WhatsApp primary), #7 (COMENSA line), #11 (no TidyCal), #12 (llms.txt), #13 (BlogPosting dates) already done.
- Built `have_and_share_cpanel_20261020.zip` (161 files). Excludes `cluster-*`, the SEO drift dashboard, and the internal `.md`/`.docx` files in `assets/documents` (only the Project 2025 PDF is linked).
- Still open (need Deon): #8 GBP claim, #9 local-keyword decision, #10 commission the two posts, #4 verify cannibalisation live. Not uploaded, nothing committed.
