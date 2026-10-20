# AI-readiness plan: haveandshare.co.za

20/10/2026. Baseline from the dashboard's 20/10/2026 snapshot (`reports/haveandshare/2026-10-20/geo-audit.json`): **adjusted readiness 79 out of 100**, unchanged for five readings. **Status 20/10/2026:** drafts A and B and the `lang="en-ZA"` part of D are applied in the working tree (uncommitted, not deployed, not yet re-audited live). C, the freshness date and the feed wait on decisions below.

**Not checked:** how many points each fix is worth (the audit tool does not publish its weights; the gains below are my estimates, not measured), and whether any of this moves citations. The latest citation check for this site was 0 of 2 questions.

**Why I have not edited the site:** the repo has 41 uncommitted modified files (the 28/09 rework and later work). Branching or stashing over that risks Deon's in-progress work, so every change below waits for a decision on where to apply it. The live homepage matches the local `index.html` byte for byte, so the local copy is what is live.

## Where the points are

| Category (points scored / available) | Gap | Honest fix | Worth chasing? |
|---|---|---|---|
| AI access, 15 / 18 | Search and user bots are allowed by `User-agent: *`, but none is named | Name the citation bots in `robots.txt` (draft A) | Yes. No behaviour change |
| Business labels, 10 / 16 | No `FAQPage` schema, although the homepage shows four FAQs | Add `FAQPage` matching the visible text (draft B) | Yes |
| Who you are, 6 / 10 | `ProfessionalService` description differs from the meta description; `sameAs` hits 1 of 4 "pillars" (Wikipedia, Wikidata, LinkedIn, Crunchbase) | Align the description (draft C). **Do not chase the pillars**: a sole-practitioner coach has no honest Wikipedia, Wikidata or Crunchbase entry. The existing `sameAs` list (LinkedIn, Facebook, Instagram, YouTube, X, Positive Intelligence profile, Google profile) is the right one | Description only |
| Freshness and language, 3 / 6 | No freshness date detected; no feed; `lang="en"` | A true `dateModified` and visible "last reviewed" date (needs Deon); `lang="en-ZA"`; optional RSS feed for the blog | Partly: needs a real date |
| Meta tags 14 / 14, Content structure 12 / 12 | None | None | No |

**Skip on purpose:** `llms.txt` (an existing one scores 9 of 18 and is excluded from the readiness figure) and the `/ai/*.json` and `/.well-known/ai.txt` files. No major engine is documented to read them.

**Content flag, not a fix:** the audit reports "coaching" at 3.4% of the homepage text as keyword stuffing. For a coaching site that is partly unavoidable, so I would not rewrite copy for it. Claudina's call.

## Drafts

### A. `robots.txt` (replace the file)

```
User-agent: *
Allow: /

# Search and assistant crawlers, named so the permission is explicit.
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: Googlebot
User-agent: Applebot
User-agent: Bingbot
Allow: /

Sitemap: https://haveandshare.co.za/sitemap.xml
```

Training-only crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot) are left as the wildcard allows them. **Whether to block them is Claudina's decision.** Blocking them does not stop search or assistant citations.

### B. `FAQPage` JSON-LD for `index.html` (add as another `<script type="application/ld+json">`)

The four questions and answers are copied from the visible section "Coaching Questions for Johannesburg and Online Clients". If that wording changes on the page, this must change with it.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What is the difference between coaching and therapy?",
     "acceptedAnswer": {"@type": "Answer", "text": "Coaching is a forward-looking partnership that helps you build awareness, clarify goals, strengthen mental fitness, and take aligned action. Therapy is clinical support for mental health diagnosis, trauma treatment, and deeper psychological healing. If therapy is the better route, I will say so."}},
    {"@type": "Question", "name": "Do you offer in-person and online coaching options?",
     "acceptedAnswer": {"@type": "Answer", "text": "Yes. Sessions are available in person in the Johannesburg and Gauteng area where practical, and online for clients across South Africa and globally. Online coaching is structured, private, and effective for both individuals and leadership teams."}},
    {"@type": "Question", "name": "Can I work with a life coach if I am based outside Johannesburg?",
     "acceptedAnswer": {"@type": "Answer", "text": "Yes. Have & Share Coaching supports clients across South Africa and internationally through online sessions. Johannesburg-based clients can discuss in-person options during the discovery conversation."}},
    {"@type": "Question", "name": "What happens in the free discovery session?",
     "acceptedAnswer": {"@type": "Answer", "text": "The discovery session is a calm, practical conversation about what you want support with, what feels stuck, and whether the coaching approach is a good fit. There is no pressure to commit."}}
  ]
}
```

Validate in Google's Rich Results Test after deploy. Google no longer shows FAQ rich results for most sites, so the value here is machine readability, not a search-result feature.

### C. Description match

Set the `ProfessionalService` `description` in the homepage JSON-LD to the homepage meta description: "COMENSA-accredited life coach in Johannesburg. Claudina Hafenscher helps high-achievers find the self-doubt pattern behind their success." The current description lists more services (mental fitness, PQ, mBIT, corporate facilitation). **That is client-facing wording, so it is Claudina's or Deon's call.** The alternative is to extend the meta description to include the services, within about 160 characters.

### D. Language and freshness

- `<html lang="en">` to `<html lang="en-ZA">` on every page (the copy already uses British spellings).
- Add a visible "Last reviewed: DD/MM/YYYY" line and a matching `dateModified` on the homepage **only with a true date**. See Needs from you.
- Optional: a `feed.xml` for the blog, linked in `<head>` with `<link rel="alternate" type="application/rss+xml" href="/feed.xml">`. It needs real post titles and dates from `blog.html`.

## Expected result (an estimate, not measured)

If A, B, C and D (language and a true date) all land, the adjusted readiness figure should move from 79 into the high 80s or low 90s. I cannot give a tighter number without the audit's point weights. The only way to know is to re-run `geo audit` on the live site after deploy.

## Needs from you

1. **Where to apply the changes.** The repo has 41 uncommitted files. Choose one: (a) I make the edits directly in the working tree, (b) I work in a separate `git worktree` from `HEAD` and you merge, or (c) you commit your current work first and I branch from that.
2. **Claudina's decisions:** training-bot blocking (A), the schema description wording (C), and whether to keep "coaching" density as it is.
3. **A true "last reviewed" date** for the homepage (the date its content was last checked by someone who knows it is accurate).
4. **Whether to add the blog feed.**
5. **Deploy:** Deon uploads. Then I re-run the audit and report before and after.

## Applied 20/10/2026 (working tree only)
- `robots.txt`: draft A.
- `index.html`: draft B, a new `FAQPage` JSON-LD block after the existing one. The four Q&As were extracted from the visible section, so the text matches the page. All JSON-LD blocks on the page parse.
- `<html lang="en">` changed to `en-ZA` in 37 pages. `404.html` has no `lang` attribute and was left alone.
- Not verified: `geo audit` refuses local addresses, so the new score needs a live run after deploy. Originals of `robots.txt` and `index.html` are backed up in the session scratchpad.
