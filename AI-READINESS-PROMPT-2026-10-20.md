# Prompt: finish the AI-readiness update for haveandshare.co.za

Paste everything below the line into a new Claude Code session opened in `Websites/Have and Share`. Fill in the "My decisions" block first.

---

You are finishing an AI-readiness update on haveandshare.co.za. The repo is a static HTML site (no build step) deployed by uploading files. The full plan is in `AI-READINESS-PLAN-2026-10-20.md` in this folder; read it first.

## Where things stand

The dashboard's adjusted AI-readiness score for this site is **79 out of 100** (20/10/2026 snapshot). Three changes are already in the working tree, uncommitted and not deployed:

1. `robots.txt`: names the search and assistant crawlers (OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, Claude-SearchBot, Claude-User, Googlebot, Applebot, Bingbot).
2. `index.html`: a new `FAQPage` JSON-LD block, built from the four FAQs in the visible "Coaching Questions for Johannesburg and Online Clients" section.
3. `<html lang="en-ZA">` on 37 pages (`404.html` has no `lang` and was left alone).

This working tree has about 58 uncommitted files from other in-progress work. They are not yours to touch.

## My decisions (filled in by Deon)

- **Schema description (draft C):** `[ ] align it to the meta description   [ ] leave as is   [ ] I will supply wording: ______`
- **Last-reviewed date for the homepage (true, confirmed):** `__/__/____`  (leave blank to skip the freshness change)
- **Blog RSS feed:** `[ ] add   [ ] skip`
- **Training crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot):** `[ ] leave allowed   [ ] block`

## Do this, in order

1. **Review the three applied changes.** Run `git diff` on `robots.txt` and `index.html` only. Confirm the `FAQPage` questions and answers match the visible FAQ text word for word, every JSON-LD block on the page parses, and `robots.txt` still has the `Sitemap:` line. Fix anything that is off.
2. **Apply my decisions above**, and nothing else:
   - Description: set the `ProfessionalService` `description` in the homepage JSON-LD to the homepage meta description, only if I ticked "align".
   - Freshness: add a visible "Last reviewed: DD/MM/YYYY" line near the footer of the homepage and a matching `dateModified` on the `WebSite` or `ProfessionalService` node, using exactly the date I gave. If I left it blank, skip this step.
   - Feed: if I ticked "add", generate `feed.xml` (RSS 2.0) from the real titles, URLs and dates on `blog.html` and the blog posts, link it in the homepage `<head>` with `<link rel="alternate" type="application/rss+xml" title="Have & Share Coaching" href="/feed.xml">`, and add it to `sitemap.xml` only if the existing sitemap lists non-HTML files. Do not invent dates; if a post has no date, leave it out and tell me.
   - Training crawlers: change `robots.txt` only if I ticked "block".
3. **Branch and commit narrowly.** Run `git switch -c seo/ai-readiness-2026-10-20` (this keeps the working tree). Never run `git stash`, `git checkout -- <file>`, `git reset` or `git clean`. Stage **only** the files you changed for this task with explicit paths (`git add robots.txt index.html ...` and, for the `lang` change, the 37 pages by name), then commit with a plain-prose message. Do not push.
4. **Verify what you can.** Serve nothing to the audit tool (it refuses local addresses). Instead, check the output yourself: JSON-LD parses, `lang` is `en-ZA` on every page that had `lang="en"`, no duplicate `FAQPage` block, no broken links introduced.

## Rules

- Use only facts that are already on the site or that I gave you above. Do not invent dates, reviews, qualifications, prices or profile URLs. Mark anything you could not confirm.
- Structured data must match what a visitor can see on that page.
- Do not build `llms.txt`, `/.well-known/ai.txt` or `/ai/*.json`. They don't count toward the readiness score and no major engine is documented to read them.
- Do not chase the Wikipedia, Wikidata or Crunchbase "knowledge-graph pillar" check. The existing `sameAs` list is correct for a sole-practitioner coach.
- Do not rewrite page copy for keyword density. That is Claudina's call.
- Do not deploy, upload, or message anyone.
- Locale `en-ZA`, dates DD/MM/YYYY.

## Finish

Report in this order: **Needs from you** (anything blocked), then what changed (files and the commit), then what you could not verify. End with the deploy step for me: which files to upload.

After I deploy, I will ask you to re-audit the live site with `geo audit --url https://haveandshare.co.za/ --format json --no-plugins` and report the score before (79) and after, per category.
