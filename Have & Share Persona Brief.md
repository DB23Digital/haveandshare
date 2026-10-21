Developer brief · haveandshare.co.za

# Have & Share persona brief

**To:** website developer **From:** DB23 **Date:** 21/10/2026 **Status:** ready to start; some copy waits on client approval (marked)

Build the site's ideal customer profiles into the pages, so each kind of buyer finds a page that speaks to their exact situation. That is what earns rankings in Google Search, citations in AI Overviews and AI Mode, and mentions in ChatGPT or Perplexity answers.

## The one principle

Google's own guidance ([Optimizing for Generative AI Features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), updated 10/07/2026) says AI Overviews and AI Mode use the same ranking and quality systems as normal Search. SEO, AEO and GEO are one job here: **be the clearest first-hand answer to the questions each persona actually asks.**

So this brief is content and page structure. It needs no AI-specific files, no special markup and no rewriting "for AI". The site already has `llms.txt`; keep it, but it has no effect on Google.

**Already in place, so leave it:** Person schema for Claudina with a credential, Service schema with an audience field, ProfessionalService, BreadcrumbList, BlogPosting with author and dates, and page titles aimed at the right searches ("1:1 Life Coaching South Africa", "Corporate Facilitation South Africa"). The old `/about-us/` and `/blog/` URLs now redirect correctly. This brief builds on that.

## The personas

The first four come straight from the site's own words. The fifth comes from the marketing strategy and is not on the site yet, so hold its copy until the client confirms it. Search phrases are starting points to check against Search Console, not measured volumes.

| Persona | Their situation, in the site's words | What they likely search or ask | Page that should serve them | Status |
| --- | --- | --- | --- | --- |
| **The executive in a leadership transition** | "executives in leadership transitions" (/about.html) | executive coach Johannesburg · self-doubt in a new leadership role · executive imposter syndrome | 1:1 Life Coaching (new section) + "Executive Self-Doubt" article | On site |
| **The entrepreneur trapped in their business** | "entrepreneurs who feel trapped in their businesses" (/about.html) | business owner burnout · founder coach South Africa · feel trapped in my own business | 1:1 Life Coaching (new section) + a new article | On site |
| **The professional who has lost their purpose** | "professionals who have lost touch with their purpose" (/about.html) | find purpose after burnout · life coach for career change · unfulfilled despite success | 1:1 Life Coaching (new section) + "Find Purpose After Burnout" article | On site |
| **The leader of a team stuck in silos** | "unproductive meetings and siloed thinking" (/corporate-holistic-facilitation.html) | team alignment workshop · break down silos at work · corporate facilitator Johannesburg | Corporate Facilitation (sharpen) + team alignment articles | On site |
| **The HR, People or L&D lead who books it** | Not on the site. From the marketing strategy | leadership development programme South Africa · team coaching for HR · culture diagnostic | Corporate Facilitation (one short section) | Confirm first |

Every persona section must also settle the three doubts the strategy found in search behaviour: **is this coach qualified** (credentials), **what does it cost or what's the next step** (the free discovery session, no pressure), and **is the method real** (PQ®, mBIT and the Reality Check™ EcoMetric, explained plainly).

## Page by page

### Homepage

/

- Keep the headline ("The self-doubt behind your success has a pattern"). It already speaks to the main persona.
- Add a short "Who we work with" section: one line per persona in their own situation, each linking to the matching section below. Use plain links or a list, not a row of identical cards.
- Keep the existing FAQ section and its schema; no new FAQ items are needed for Google.

**Done when:** each of the four confirmed personas can get from the homepage to "their" section in one click.

### 1:1 Life Coaching

/individual-holistic-coaching.html

- One H2 section per individual persona, headed with a question they would type, for example "Struggling with self-doubt in a new leadership role?"
- Answer it directly in the first two or three sentences, then go deeper: what the pattern usually looks like, which method fits (PQ® for Saboteurs, mBIT for head-heart-gut), and how sessions work (60 to 90 minutes, fortnightly, after a free discovery session).
- Each section carries one first-hand, anonymised pattern from Claudina's coaching room. **She writes or approves these; nobody invents them.** This is the "experience" in E-E-A-T, and it is what makes the page worth citing.
- Link each section to its matching article.

**Done when:** three persona sections exist, each opening with a question and a direct answer, and each with a real example Claudina has approved.

### Corporate Facilitation

/corporate-holistic-facilitation.html

- Name who it is for: managing directors, COOs and general managers whose teams work in silos. Add a short HR and L&D section only after the client confirms that buyer.
- Lead with the pain in the site's own words (meeting overload, siloed thinking), then what an engagement looks like step by step, where it runs (Johannesburg, Pretoria, other cities, online), and how the Reality Check™ EcoMetric measures the shift.
- Describe outcomes as what clients report, never as a promise.

**Done when:** a COO could read the first screen and know the page is about their team problem.

### About

/about.html

- List the credentials consistently and with their marks: COMENSA Accredited Senior Coach, Master mBIT Coach, Certified PQ® Coach, Reality Check™ EcoMetric Practitioner. The site currently shows both "Master" and "Certified" mBIT; use whichever the client confirms.
- Add "who Claudina works with", the three individual personas plus siloed teams, so the page ties her expertise to the readers it serves.
- Keep "Diagnose Before You Fix™" with its mark.

### Blog

/blog.html and the 22 articles

- Tag each article to a persona (executive self-doubt, founder, purpose, siloed teams) and add a closing link to that persona's section on the service page.
- Fill only real gaps, one or two articles at most to start: the founder persona has no dedicated article yet. Each new piece must carry a first-hand angle from Claudina. Do not create a page per keyword variation; Google treats that as scaled content abuse.

## How persona copy is written

### Do

- Use the persona's own words for headings, taken from Search Console queries and Google's "People also ask".
- Give the direct answer first, then the depth.
- Write in second person, empathy before expertise, per the Brand Bible.
- Carry the marks every time: Reality Check™, PQ®, Positive Intelligence®, Brain Gym®, Diagnose Before You Fix™.
- Use South African English, Rand and DD/MM/YYYY.

### Don't

- Use the Brand Bible's banned words. The site has two now: "breakthroughs" (1:1 page) and "unlock their full potential" (About). Replace both.
- Promise outcomes. Soften "most clients see breakthroughs within 3 to 6 sessions" into what clients typically report.
- Invent statistics, stories or testimonials.
- Split content into tiny chunks or rewrite it "for AI". Google says neither helps.

## Structured data

Small updates only. Schema helps Google understand the page and qualifies it for rich results; it is not an AI ranking lever.

- **Service audience:** the 1:1 page's audience is the generic "Individuals seeking personal growth". Replace it with the three personas, and give the corporate Service a business audience.
- **Person:** add every credential as its own `hasCredential`, plus `knowsAbout` for the methods.
- **ProfessionalService:** `areaServed` lists Johannesburg and South Africa; add Gauteng and Pretoria. Make sure the address matches the Google Business Profile exactly.

```
{
  "@type": "Service",
  "name": "Individual Holistic Life Coaching",
  "audience": [
    { "@type": "PeopleAudience", "audienceType": "Executives in leadership transitions" },
    { "@type": "PeopleAudience", "audienceType": "Entrepreneurs who feel trapped in their businesses" },
    { "@type": "PeopleAudience", "audienceType": "Professionals who have lost touch with their purpose" }
  ]
}

{
  "@type": "Service",
  "name": "Corporate Facilitation",
  "audience": { "@type": "BusinessAudience", "audienceType": "Leadership teams working in silos" }
}

{
  "@type": "Person",
  "name": "Claudina Hafenscher",
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "COMENSA Accredited Senior Coach" },
    { "@type": "EducationalOccupationalCredential", "name": "Master mBIT Coach" },
    { "@type": "EducationalOccupationalCredential", "name": "Certified PQ Coach" },
    { "@type": "EducationalOccupationalCredential", "name": "Reality Check EcoMetric Practitioner" }
  ],
  "knowsAbout": ["Positive Intelligence", "mBIT", "Educational Kinesiology", "Team alignment"]
}
```

Do not add

- **AggregateRating or Review markup built from the site's own testimonials.** Google does not show review stars for reviews a business publishes about itself, and the markup can trigger a structured-data manual action. This replaces an earlier note in our 23/08/2026 audit that suggested it.
- **New FAQPage markup expecting rich results.** Google limits FAQ rich results to government and health sites; the existing homepage FAQ can stay.
- **HowTo markup.** It is deprecated.

## Loose ends on the site

- The old WordPress URLs `/service/…` and `/portfolio/…` still return 404. Redirect any of them that Search Console shows as indexed, or that has backlinks, to the closest live page.
- Check whether the "Project 2025" page in the navigation is still current. If it isn't, retire it with a redirect.
- Add the missing marks: "Certified PQ® Coach" and "Reality Check™ EcoMetric" on About, and "Brain Gym®" on Corporate Facilitation.

## Waiting on the client

Hold this copy until answered

- May the site's numbers (500+ individuals, 10,000+ delegates, 15 organisations) appear in the new persona sections?
- Are HR and L&D leads really a buyer? This decides whether the fifth persona gets a section.
- Which mBIT credential is current: Master or Certified?
- A first-hand, anonymised example from Claudina for each persona section.
- May the homepage testimonials be quoted inside the persona sections?

## How we'll measure it

- In Search Console, group queries by persona (self-doubt and imposter syndrome, founder and burnout, purpose, silos and team alignment) and watch impressions and clicks on the matching pages each month.
- Clicks from AI Overviews and AI Mode are counted inside the normal Search Console totals, not reported separately. A rise on persona queries is the signal to watch.
- The weekly SEO dashboard run (`haveandshare`) flags any regression after the changes go live.

## Checklist

- "Who we work with" on the homepage, linking to four persona sections
- Three persona sections on 1:1 Life Coaching, each with a question heading, a direct answer and Claudina's example
- Corporate Facilitation names its buyers and leads with the silo pain
- About lists credentials consistently, with their marks
- Every article links to its persona section; the founder article is drafted with Claudina
- Service audience, Person credentials and `areaServed` updated; validated in the Rich Results Test
- Banned words and outcome promises removed; marks added
- Indexed legacy 404s redirected; "Project 2025" checked

Sources: haveandshare.co.za pages read on 21/10/2026 (/, /about.html, /individual-holistic-coaching.html, /corporate-holistic-facilitation.html, /blog.html) and the live schema; Have & Share Marketing Strategy v1.0 (17/07/2026); Google Search Central guidance as linked above.