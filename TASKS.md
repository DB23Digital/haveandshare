# TASKS: Have & Share SEO/AEO follow-up

Last updated: 23/11/2026. Source of truth for resuming. Full detail: `SEO-AEO-REVIEW-haveandshare-12102026.md`, and for 31/10 the deliverables in `DB23 AI Agency/seo-aeo-geo-skills/clients/have-and-share/*-2026-10-31.*`.

## Going international (notes 09/11/2026, tasks 17/11/2026)

Source: artifact "Taking Have & Share International" (https://claude.ai/artifact/C3Eyerdiqy6ZxoieGxWxP4), now also Claudina's answer page. Her replies are stored in the page's database (`answers` collection); ask Claude to read them and turn them into changes.

Recommendation: one site, one offer ("based in South Africa, travels to the team"), backed by real engagements. No country pages, no translations, keep `.co.za` for now.

**Claudina's answers (received 23/11/2026)**
- Agrees: one site, overseas clients online or in person. Approved homepage line used verbatim.
- Countries: in person in Barcelona (Business Today International Conference, Nov 2013) and Mauritius (women's leadership retreat); private coaching clients in Austria and the US (stay anonymous).
- Travels for: executive/senior leadership team workshops, group coaching, facilitated leadership programmes. Individual coaching online. Reality Check®/EcoMetric™ and Brain Gym® confirmed per destination.
- Regions: Southern Africa, rest of Africa, UK, Europe; others case by case. Notice and currency confirmed per engagement. Travel quoted separately from fee.
- Licences: she will confirm PQ®, mBIT, Brain Gym®, EcoMetric™ terms before the site advertises them abroad. Until then, lead with executive coaching and leadership facilitation.
- COMENSA: use "COMENSA Accredited Senior Coach"; drop "highest professional standard". ICF: maybe later.
- Target: some (10% to 30%), no deadline. Privacy notice: draft for her review.
- New positioning: Diagnose Before You Fix™, speak to CEOs and executive teams, practical language, real examples.

**Needs from Claudina (still open)**
- [ ] OK to name Business Today Simulations (Barcelona) and DEBOHA (Mauritius), and the "My Future Today" simulation name. The page uses anonymised versions until she says yes.
- [ ] Review `international-leadership-facilitation.html` and the Corporate `#international` section before upload.
- [ ] One piece of participant feedback or an observed change for the Barcelona or Mauritius example.
- [ ] Answer the 7 questions at the top of `PRIVACY-NOTICE-DRAFT-2026-11-23.md`, then approve the draft.
- [ ] Mark: "Reality Check®" + "EcoMetric™" (her answer) vs "Reality Check™ EcoMetric" (site). Which is correct?
- [ ] Licence terms abroad for PQ®, mBIT, Brain Gym®, EcoMetric™.

**Needs from Deon**
- [ ] Share the answer page with Claudina by email invite as **Editor**, with no public link, or her answers won't save.
- [ ] Get professional advice on visas, tax and insurance for work abroad (not researched).
- [ ] Publishing the 21/10 persona/story build: handled by Deon, removed from Claudina's page on 17/11/2026.

**Work, in order, once answers land**
- [ ] 1. Publish the October update.
- [x] 2. Credential wording on About (23/11/2026; no "internationally accredited" found anywhere). Corporate `#international` section + FAQ answer. Homepage geo line.
- [~] 3. `international-leadership-facilitation.html` built 23/11/2026 (Diagnose Before You Fix™, what travels, regions, two anonymised examples, practical terms, email/WhatsApp enquiry asking country, team size, dates). In sitemap; linked from Corporate and Contact. No form (site has none). Waiting on Claudina review and name approvals.
- [ ] 4. Update Group, Reality Check™, PQ®, mBIT, Educational Kinesiology, About, Contact.
- [ ] 5. Broaden imposter syndrome, PQ®, mBIT and team-alignment articles; keep cost, choose-a-coach-Johannesburg and COMENSA posts local.
- [x] 6. haveandshare.net: dropped 17/11/2026. It is Claudina's funnel landing page, not part of the international plan.
- [ ] 7. Keep GBP local (Gauteng); fix the Eastern Cape pin (see GBP task below).
- [ ] 8. Get keyword data for method/problem terms (mBIT, PQ®, team alignment, on-site leadership workshops) before picking targets.
- [ ] 9. Build mentions: mBIT, PQ®, COMENSA directories, LinkedIn, conference talks, HR publications, client write-ups.
- [ ] 10. Monthly tracking: same AI-answer questions each month; Google impressions by country.
- [~] 11. Privacy notice draft: `PRIVACY-NOTICE-DRAFT-2026-11-23.md`. Waiting on Claudina answers and an adviser check of UK/EU sections. Likely needs a cookie consent banner.
- [ ] 12. After 3 months on the updated site: review the `.co.za` vs global domain decision.

- [ ] 13. Homepage repositioning towards CEOs and executive teams with Diagnose Before You Fix™ (her Q16). Changes the H1 and persona order, so needs Deon's go-ahead and wording sign-off.
- [ ] 14. Existing pages still advertise PQ®, mBIT and Educational Kinesiology as "Online / Worldwide" (schema `areaServed` and body copy). Decide whether to pull back until Claudina confirms licence terms.

Avoid: "Life coach <city>" pages, translated versions, any claim Claudina can't confirm.

## Session 23/11/2026: sitewide SEO/AEO/GEO and international pass

Scanned all 35 public pages (title, description, canonical, OG, H1, JSON-LD, sitemap, inbound links). All JSON-LD parses. Every page has one H1 and a canonical. Not checked in a browser; no live, Search Console or Lighthouse data this session.

**Done (local, not uploaded, not committed)**
- [x] International page: `Service` JSON-LD (areaServed Southern Africa, Africa, UK, Europe, online) and a visible Q&A (working abroad, time zones, travel costs, accreditation).
- [x] Homepage: new FAQ "Do you work with leadership teams outside South Africa?" in both `FAQPage` JSON-LD and the visible list. Corporate and group items in the `ItemList` now say "South Africa, Africa, the UK and Europe, in person or online". `ProfessionalService` areaServed left local on purpose (GBP).
- [x] Corporate and Group `Service` areaServed widened to the regions Claudina named. Group FAQ answers "teams outside South Africa".
- [x] About: names the countries (Barcelona, Mauritius, Austria, US; no client names) and links the international page.
- [x] Agenda post links the international page. International page now has 6 inbound links (home, about, corporate x2, group, contact, agenda).
- [x] `llms.txt`: "Working outside South Africa" section, Diagnose Before You Fix™, booking URL fixed to `book-coaching.html` (nginx ignores the `.htaccess` rewrite).
- [x] `coaching-partners.html`: OG tags added. Sitemap `lastmod` set to 2026-11-23 on the edited pages.

- [x] Built `have_and_share_cpanel_20261123.zip` (162 files, 51 MB, 37 HTML pages; same exclusions as the 20/10 zip, plus the new page). Not uploaded. Earlier 12/10 and 31/10 zips are no longer on disk.

**Needs a decision (Deon)**
- [ ] Upload `have_and_share_cpanel_20261123.zip` only after Claudina approves the international page, and the 21/10 persona build and her story (both are in the zip).
- [ ] 4 titles over 60 characters: overcome-imposter (75), improve-team-collaboration (74), choose-life-coach (67), find-purpose (66). Rewrites already drafted in the 31/10 dev brief.
- [ ] `book-coaching.html` is not in the sitemap. Intentional?
- [ ] After upload: submit the new page via IndexNow (key file exists) and request indexing in Search Console.
- [ ] Footer DB23 credit is missing on every page.

**Needs from Claudina**
- [ ] Does she coach or facilitate in any language other than English (for example German, given Austrian clients)? A language list is one of the strongest international signals and would go in `knowsLanguage` and on the page.
- [ ] Update LinkedIn headline/About and the PQ marketplace profile to say she works with leadership teams in Africa, the UK and Europe, in person and online. AI answers lean on these profiles as much as on the site.

**Still open from earlier lists:** homepage repositioning (13), licensed methods "Online / Worldwide" (14), broaden articles (5), client names and case-study feedback, privacy notice answers.

## Session 31/10/2026: eight-skill SEO sweep (seo-cluster through seo-geo)

Data: Search Console 22/09 to 17/10/2026 (147 impressions, 0 clicks), live site fetched 31/10, Google panel and Maps viewed in Chrome.

**Findings that change the plan**
- Live site = the 20/10 build. The 21/10 persona build was never uploaded.
- The GBP **exists**: "Have & Share", category Life coach, Mon to Fri 08:00 to 17:00, entity `/g/11v11xp7qc`. The June, July and August local reports said it didn't. Corrected in the agency copy; the repo copies `LOCAL-SEO-ANALYSIS-haveandshare.md` and `…-24082026-update.md` are still wrong (gitignored, local only).
- The GBP map pin sits in the **Eastern Cape** (near Makhanda), not Kempton Park. The business does not appear for "life coach Kempton Park" (16 results) or "life coach Glen Marais". Likely cause: the service area is set too wide.
- **0 Google reviews.** There is nothing for review-respond to answer.
- The imposter-syndrome cluster got 0 impressions this period. PQ and team alignment got all of them. Cluster plan v3 pivots there; imposter cluster parked.
- The dashboard's "0 in striking distance" is wrong: 6 queries sit at positions 5 to 12, on low volume. 71 of the 147 impressions are a navigational LeanUK query; ignore it.
- Schema is valid. The click lever is titles and meta descriptions; drafts are in the dev brief.

**Done in the site (approved by Deon, in `have_and_share_cpanel_20261031.zip`, not uploaded)**
- [x] Homepage `ProfessionalService`: `openingHoursSpecification` (Mon to Fri 08:00 to 17:00) and `hasMap` (GBP share link).
- [x] Visible published/updated dates on cost, choose-a-coach, PQ vs mBIT, agenda and team-alignment posts (match the JSON-LD).
- [x] Group page byline. Team-alignment post byline links to About.
- [x] Agenda page linked to and from corporate, group, team-alignment and collaboration pages.

**Needs from Deon**
- [ ] Fix the GBP service area or show the address, so the pin moves to Gauteng. Send a screenshot of service area, categories and verification.
- [ ] Upload `have_and_share_cpanel_20261031.zip`. It includes the unapproved 21/10 persona build and Claudina's story, so confirm with Claudina first.
- [ ] Approve or edit the draft wording: GBP description, 7 titles and meta descriptions, PQ-page claim rewrites, homepage "unlock" line, review reply samples, business name ("Have & Share" or "Have & Share Coaching").
- [ ] Confirm the `blog-pq-coaching.html` publish date: 06/03 (visible) or 19/03/2026 (schema)?
- [ ] Check Bing Places, Bing Webmaster Tools, Apple Business Connect and a COMENSA directory listing.
- [ ] `seo-maps` is disabled in `skillOverrides`. Decide on a paid geo-grid once the pin is fixed.

**Needs from Claudina**
- [ ] Master or Certified mBIT; "Positive Intelligence Quotient" vs "Positivity Quotient".
- [ ] Anonymised client patterns, workshop criteria and timings, a corporate testimonial and a PQ testimonial (with permission).
- [ ] Start asking every client for a Google review (plan and message in the local report).

**Next, once the above lands**
- [ ] Write the week-1 pages: workshop agenda rebuild and the new Saboteur Assessment results post (briefs in the agency folder).
- [ ] Apply the HOLD items in `DEV-BRIEF-content-schema-2026-10-31.md` (A1 to A5, B1, C2, C3, D, E).
- [ ] About two weeks after the GBP fix, repeat the Maps spot checks.

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
