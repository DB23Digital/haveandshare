# Schema fixes — developer instructions

**Site:** haveandshare.co.za
**Date:** 2026-08-12
**Source:** `/seo schema` audit
**Scope:** 2 fixes, 12 files total. No visual/content changes — JSON-LD only, inside `<head>`.

Validate every edited file at https://validator.schema.org/ before committing (paste the full `<script type="application/ld+json">` block).

---

## Fix 1 — Standardize blog post type to `BlogPosting` (4 files)

**Why:** 15 existing blog posts use `"@type": "BlogPosting"`. The 4 newest posts were shipped with `"@type": "Article"` instead. Both are valid schema.org types and both are Google-eligible, but mixing them on the same content type is inconsistent and makes future audits/automation harder. Standardize on `BlogPosting` to match the other 15.

**Files:**
- `blog-executive-self-doubt.html`
- `blog-toxic-work-environment.html`
- `blog-high-performer-imposter-syndrome.html`
- `blog-imposter-syndrome-coaching-explained.html`

**Change:** In each file's first `<script type="application/ld+json">` block, change:

```json
"@type": "Article",
```
to:
```json
"@type": "BlogPosting",
```

That's the only change. Every other property in that block (`headline`, `author`, `publisher`, `datePublished`, `dateModified`, `image`) stays exactly as-is.

---

## Fix 2 — Add missing `BreadcrumbList` schema (8 files)

**Why:** 11 of 19 blog posts (plus all 4 new ones) carry `BreadcrumbList` JSON-LD, which makes them eligible for breadcrumb rich results (sitelinks) in Google search results. These 8 posts never got it. Add a second `<script type="application/ld+json">` block to each, immediately after the existing one.

**Pattern to follow** (copied from a sibling post that already has it correctly — `blog-find-purpose-after-burnout.html`):

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://haveandshare.co.za/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://haveandshare.co.za/blog.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "REPLACE_WITH_PAGE_TITLE",
      "item": "REPLACE_WITH_PAGE_URL"
    }
  ]
}
</script>
```

**Per-file values** — insert the block above right after the closing `</script>` tag of the existing `ld+json` block (line numbers below are current, re-check if the file has changed since this doc was written):

| File | Insert after line | Breadcrumb `name` (position 3) | Breadcrumb `item` (position 3) |
|---|---|---|---|
| `blog-comensa-coaching.html` | 46 | `Why SA Leaders Choose COMENSA-Credentialed Coaches` | `https://haveandshare.co.za/blog-comensa-coaching.html` |
| `blog-corporate-ecometrics.html` | 54 | `Corporate Ecometrics for Organisational Health` | `https://haveandshare.co.za/blog-corporate-ecometrics.html` |
| `blog-educational-kinesiology.html` | 54 | `Educational Kinesiology for Corporate Teams` | `https://haveandshare.co.za/blog-educational-kinesiology.html` |
| `blog-mbit-coaching-guide.html` | 54 | `How mBIT Coaching Aligns Better Decisions` | `https://haveandshare.co.za/blog-mbit-coaching-guide.html` |
| `blog-mbit-coaching.html` | 46 | `What Is mBIT Coaching? Multi-Brain Integration Guide` | `https://haveandshare.co.za/blog-mbit-coaching.html` |
| `blog-pq-coaching.html` | 54 | `What Is PQ Coaching? Positive Intelligence Guide` | `https://haveandshare.co.za/blog-pq-coaching.html` |
| `blog-team-alignment-coaching.html` | 46 | `Team Alignment Coaching for Workplace Silos` | `https://haveandshare.co.za/blog-team-alignment-coaching.html` |
| `blog-transformational-leadership-coaching.html` | 46 | `Transformational Leadership Coaching and Saboteurs` | `https://haveandshare.co.za/blog-transformational-leadership-coaching.html` |

Names above use each page's `<title>` tag text (with the ` | Have & Share` suffix stripped, matching how the existing breadcrumb posts format position 3). Double-check against the live `<h1>` on each page before shipping — use whichever reads more naturally as a breadcrumb label if they differ.

---

## QA checklist

- [ ] All 4 `Article` → `BlogPosting` renames applied, no other JSON changed
- [ ] All 8 `BreadcrumbList` blocks added as a **second**, separate `<script type="application/ld+json">` tag (do not merge into the existing block)
- [ ] Every edited file passes https://validator.schema.org/ with zero errors
- [ ] Every edited file passes Google's Rich Results Test (https://search.google.com/test/rich-results) with zero errors
- [ ] Spot-check 2-3 pages in Search Console → Enhancements → Breadcrumbs after next crawl (allow 1-2 weeks) — valid count should rise from 11 to 19

## Out of scope (do not touch)

- `FAQPage` schema on 5 pages — flagged separately as low-priority, no action needed here
- Any HTML content, visible copy, or CSS — this is JSON-LD only
