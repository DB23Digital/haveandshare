# Imposter Syndrome Cluster: De-cannibalisation Rewrite Pack

**Client:** Have & Share (haveandshare.co.za)
**Scope:** Four live blog pages competing for the same head terms
**Prepared:** 24 August 2026
**Handoff:** Implementation brief for Claude Code. Copy is final. Apply into existing page templates.

---

## 1. What is actually wrong

I pulled all four live pages and compared them line by line. This is not a case of four pages that happen to be on a similar topic. It is one article that has been rewritten four times with different hero images.

**Duplicate answer boxes.** The hub and the coaching page open with functionally the same question and a near-identical answer:

- `blog-overcome-imposter-syndrome`: "Can coaching help with imposter syndrome?" answered with "moves beyond reassurance into repeatable practice."
- `blog-imposter-syndrome-coaching-explained`: "Does coaching actually work for imposter syndrome?" answered with "when it goes beyond reassurance into repeatable practice."

Same question, same sentence stem. Google has to pick one, and there is no signal telling it which.

**Duplicate title targeting.** `blog-overcome-imposter-syndrome` carries the title tag *Imposter Syndrome Coaching Johannesburg | Mindset Coach*. `blog-imposter-syndrome-coaching-explained` targets the same commercial phrase. Two pages chasing "imposter syndrome coaching" is the single biggest problem in the cluster, because that is the term closest to a booking.

**Duplicate explanations across all four pages:**

| Concept | Overcome | High performer | Executive | Coaching |
|---|---|---|---|---|
| Judge Saboteur | Full | Mentioned | Full | Full |
| Hyper-Achiever | Full | Full | Mentioned | Mentioned |
| mBIT head/heart/gut | Full | No | Full | Full |
| PQ Reps mechanics | Full | Partial | No | Full |
| Six to eight week timeline | Yes | Yes | No | Yes |
| Name the Saboteur tactic | Yes | Yes | Yes | Yes |
| Evidence file tactic | Yes | Yes | No | No |

Four pages teaching the same four concepts. From Google's side that reads as one topic split across four URLs, which is exactly why the cluster ranks weakly despite being your largest demand pool.

**Reciprocal link spaghetti.** Every page links to every other page with similar anchors. There is no hierarchy, so no page accumulates authority. The high performer and executive pages link to each other, which is the worst pairing to connect because they are the two closest in audience.

**Template drift.** The overcome page uses a different nav and footer to the other three. Its nav points to `/#about` while the others point to `/about.html`. Its footer omits the Privacy Policy link and the WhatsApp social entry, and its Contact Us link goes to `book-coaching.html` rather than `contact.html`. Worth fixing while the files are open.

---

## 2. The new architecture

One page per intent. One owner per concept. Hub and spoke, not a ring.

| Page | Role | Owns these head terms | Funnel position |
|---|---|---|---|
| `blog-overcome-imposter-syndrome` | **Hub** | how to overcome imposter syndrome, imposter syndrome at work, what is imposter syndrome | Top |
| `blog-high-performer-imposter-syndrome` | Mechanism spoke | high performer imposter syndrome, success doesn't cure imposter syndrome, achievement treadmill | Middle |
| `blog-executive-self-doubt` | Context spoke | executive self-doubt, leadership self-doubt, self doubt as a leader | Middle |
| `blog-imposter-syndrome-coaching-explained` | **Commercial spoke** | imposter syndrome coaching, imposter syndrome coach Johannesburg, does coaching work for imposter syndrome | Bottom |

**The key trade.** The hub gives up the commercial term "imposter syndrome coaching" and the Johannesburg geo modifier. Both move to the coaching page, which is structured to convert and whose URL slug already says so. The hub keeps the volume and passes equity down with an exact-match anchor. This is the change that unblocks the cluster.

### Concept ownership map

Each concept is explained in full on exactly one page. Everywhere else it gets one sentence and a link.

| Concept | Owner | Everyone else |
|---|---|---|
| Definition of imposter syndrome | Hub | One line, link to hub |
| The Judge Saboteur | Hub | One line, link to hub |
| The Hyper-Achiever Saboteur | High performer | One line, link to high performer |
| mBIT three brains | Hub | One line, link to hub |
| PQ Reps mechanics | Hub | One line, link to hub |
| The practical method | Hub | Do not repeat |
| Evidence file / banking a win | High performer | Do not repeat |
| Leadership behaviours | Executive | Do not repeat |
| Session structure and timeline | Coaching | Do not repeat |
| Coaching vs therapy | Coaching | Do not repeat |

### Internal linking rules

- Hub links **down** to all three spokes, once each, in a single "where to go deeper" section.
- Each spoke links **up** to the hub once, anchor: `how to overcome imposter syndrome`.
- Each spoke links **across** to the coaching page once, anchor: `imposter syndrome coaching`.
- **No spoke-to-spoke links.** Remove the existing high performer to executive links in both directions.
- Curate the "Continue Reading" module per page instead of showing the same three links everywhere.

---

## 3. Page A: `blog-overcome-imposter-syndrome.html` (HUB)

### Metadata

```
title: How to Overcome Imposter Syndrome at Work: A Practical Guide | Have & Share
meta-description: What imposter syndrome actually is, why it survives every piece of evidence that you are competent, and the practical method that shifts it. Written by a COMENSA Accredited Senior Coach.
meta-keywords: how to overcome imposter syndrome, imposter syndrome at work, what is imposter syndrome, feeling like a fraud at work, imposter syndrome help
og:title: How to Overcome Imposter Syndrome at Work: A Practical Guide | Have & Share
og:description: What imposter syndrome actually is, why it survives every piece of evidence that you are competent, and the practical method that shifts it.
twitter:title: How to Overcome Imposter Syndrome at Work | Have & Share
twitter:description: What imposter syndrome actually is, why it survives every piece of evidence that you are competent, and the practical method that shifts it.
```

Remove "Johannesburg", "coaching", "mindset coach" and "life coach Johannesburg" from all metadata on this page. They now belong to Page D.

### H1

**How to Overcome Imposter Syndrome at Work**

### Answer box

**How do you overcome imposter syndrome?**

You overcome imposter syndrome by treating it as a trained pattern rather than a fixed part of who you are. That means naming the specific internal voice driving it, separating the evidence of your competence from the fear of being found out, and practising a short daily interception habit until the new response fires faster than the old one. Understanding the pattern is not what changes it. Repetition is.

CTA buttons: `Explore individual coaching`, `Explore PQ coaching`

### Body copy

No matter how many promotions arrive, how many projects land well, or how many credentials accumulate behind your name, there is a quiet voice that keeps its position: *"They are going to work out that I do not know what I am doing."*

If that is familiar, this guide is the whole picture. What the pattern is, why it survives evidence that should have killed it years ago, and the method that actually shifts it.

#### What imposter syndrome actually is

Imposter syndrome is a persistent inability to internalise your own success, paired with a specific fear of being exposed as a fraud. The [APA Dictionary of Psychology](https://dictionary.apa.org/impostor-phenomenon) describes it as exactly that: doubt that continues despite objective evidence of competence.

Three details matter, because they are the ones people get wrong.

It is not a diagnosis. It does not appear in the DSM, and treating it as an illness misses what it actually is, which is a habit of interpretation.

It is not low self-esteem. Plenty of people who feel like frauds at work are perfectly secure in every other room of their lives. The doubt is domain-specific and it attaches itself to earned achievement, which is what makes it so strange to live with.

It is not rare. It is close to standard equipment among capable people, which is worth knowing if part of what you carry is the assumption that everyone else in the meeting is fine.

#### Why it survives the evidence

Here is the part that frustrates people most: you can build a watertight case for your own competence and still feel like a fraud twenty minutes later. That is not a failure of logic. It is a sign that the pattern does not live in the part of your mind that builds cases.

In the Positive Intelligence framework, the voice doing this has a name. The **Judge** is the internal critic that catalogues every small error and quietly discards the wins. It formed early, it runs automatically, and it fires faster than deliberate thought can intervene. That speed is the whole problem. By the time you have assembled the counter-argument, the Judge has already set the emotional temperature of the room.

The Judge rarely works alone. In high performers it usually pairs with the Hyper-Achiever, which ties your worth to your most recent result. If you recognise the specific experience of a promotion landing and changing nothing, that pairing is covered in [why success does not cure imposter syndrome](/blog-high-performer-imposter-syndrome.html).

#### What it costs you at work

Left alone, the pattern produces a predictable set of behaviours that all look like conscientiousness from the outside.

- **Over-preparation.** Working twice as hard as the task requires, because effort feels like the only defence against exposure.
- **Avoidance.** Turning down the visible opportunity, staying quiet in the meeting where your view was the one worth hearing, delaying the conversation about a raise until you feel ready, which is a date that never arrives.
- **Deflection.** Redirecting credit so quickly that nobody, including you, gets to register what you actually did.

Each of these is expensive, and each of them makes the next round worse, because avoided opportunities never generate the evidence that might have contradicted the story.

#### Self-doubt is physical, not only mental

If you have ever sat in a boardroom with a racing heart and a tight gut, you already know that this is not purely a thinking problem.

Through [mBIT coaching](/mbit-coaching.html), which stands for Multiple Brain Integration Techniques, we work with three distinct neural networks: the head, the heart, and the gut. When self-doubt fires, the heart brain registers a threat of rejection and disconnection, the gut brain registers a threat to identity and safety, and the head brain then writes a story that explains the physical sensation. The story is usually *"I do not belong here."*

That sequence matters, because it explains why arguing with the story does not work. The story is not the cause. It is the caption written after the fact. Working with all three centres restores physiological steadiness first, which is what makes the clearer thinking available at all.

#### The method: five things that actually move it

Rewiring a pattern this old takes repetition, not insight. These five run in order, and each one only works because the previous one is in place.

**1. Map the trigger precisely.**
Not "I feel like a fraud at work." Which meeting. Which person in the room. Which type of decision. Which time of day. The pattern is not constant, and the moments where it fires hardest are specific and findable. Track it for two weeks and the map draws itself.

**2. Separate the fact from the fear.**
In any triggering moment there is what happened and there is what it means about you. The Judge fuses the two instantly. Pulling them apart on paper, in two columns, is deliberately unglamorous work, and it is the step people skip.

**3. Name the voice.**
The moment the doubt arrives, label it: *"That is my Judge."* Naming it does something specific. It separates you from the automatic response, which turns an identity statement into a passing event. You cannot intercept something you have not named.

**4. Train the interception habit.**
This is the part that produces the change, and it is the part that looks too simple to work. **PQ Reps** are brief attention exercises: rub two fingers together with enough focus to feel the ridges on both fingertips, or listen for the furthest sound you can hear, for ten to fifteen seconds. Done several times a day, they quiet the threat centre and give you access to the calmer, clearer part of your mind that the Positive Intelligence framework calls the Sage. Ten seconds, repeated, beats an hour of reflection once a week. It is closer to physical training than to therapy.

**5. Get an outside mirror.**
Everything above is doable alone, and some people do it alone. What most people cannot do alone is see the blind spot, which is by definition the thing they cannot see, and hold the daily practice through the week when nothing feels like it is changing. That is the function an outside relationship serves.

#### Where to go deeper

This guide is the overview. Three specific versions of the pattern have their own articles:

- If achievement keeps arriving and changing nothing, read [why success does not cure imposter syndrome](/blog-high-performer-imposter-syndrome.html).
- If the doubt shows up mainly in how you carry senior decisions, read [executive self-doubt](/blog-executive-self-doubt.html).
- If you want to know what the work involves in practice, read what happens in [imposter syndrome coaching](/blog-imposter-syndrome-coaching-explained.html).

### CTA block

**Start With the Pattern, Not the Symptom**

Book a free discovery session with Claudina Hafenscher to identify which pattern is actually driving your self-doubt and what working on it would involve.

`Book Free Discovery Session` | `Explore Individual Coaching`

### FAQ schema (definitional only)

**What is imposter syndrome?**
Imposter syndrome is a persistent inability to internalise your own achievements, paired with a fear of being exposed as a fraud. It continues despite clear evidence of competence, which is what separates it from an accurate assessment of a genuine skills gap.

**Is imposter syndrome the same as low self-esteem?**
No. Low self-esteem is a broad, general sense of low self-worth. Imposter syndrome is specific to earned achievement and is often felt by people who are perfectly secure in other areas of their lives. It attaches to success rather than to identity in general.

**Is imposter syndrome a mental health condition?**
No. It is not a clinical diagnosis and does not appear in the DSM. It is a pattern of interpretation, which is why it responds to practice rather than to treatment. Where it sits alongside anxiety or depression, therapy and coaching work well together.

**Does imposter syndrome ever go away completely?**
For most people it becomes quiet rather than absent. The realistic outcome is that you notice the voice earlier, it holds less weight, and it stops driving decisions. Anyone promising complete elimination is overselling.

### Removed from this page

- The commercial title tag and Johannesburg geo targeting (moves to Page D)
- The full Hyper-Achiever explanation (moves to Page B)
- The six to eight week timeline claim (moves to Page D)
- The evidence file tactic (moves to Page B)
- The corporate burnout section (the leadership angle moves to Page C)
- Three of the five FAQs (redistributed to Pages B and D)
- The "life coach Johannesburg" homepage anchor
- The reciprocal link block at the foot

---

## 4. Page B: `blog-high-performer-imposter-syndrome.html` (MECHANISM SPOKE)

### Metadata

```
title: Why Success Doesn't Cure Imposter Syndrome for High Performers | Have & Share
meta-description: The promotion lands and nothing changes. Why high performers stay on the achievement treadmill, and what breaks the cycle when more success will not.
meta-keywords: high performer imposter syndrome, success does not cure imposter syndrome, hyper achiever saboteur, high achiever self doubt, achievement treadmill
og:title: Why Success Doesn't Cure Imposter Syndrome for High Performers | Have & Share
og:description: The promotion lands and nothing changes. Why high performers stay on the achievement treadmill, and what breaks the cycle when more success will not.
twitter:title: The High Performer Who Feels Like a Fraud | Have & Share
twitter:description: The promotion lands and nothing changes. What breaks the cycle when more success will not.
```

### H1

**The High Performer Who Feels Like a Fraud: Why Success Doesn't Cure Imposter Syndrome**

### Answer box

**Why doesn't success cure imposter syndrome?**

Success does not cure imposter syndrome because the Hyper-Achiever pattern behind it treats every win as temporary proof rather than permanent evidence. The moment a result lands, it becomes the new minimum instead of being banked, so the scoreboard resets to zero and the doubt survives intact. More achievement raises the bar without ever settling the question.

CTA buttons: `Explore PQ coaching`, `Read the imposter syndrome guide`

### Body copy

There is a specific disappointment that only high performers get to experience. The promotion arrives, the award is announced, the deal closes, and the feeling you were expecting does not show up. What shows up instead is a flicker that fades inside a week, followed by the next target and the same quiet suspicion that you got away with something.

If you have lived that more than twice, you already know the standard advice is wrong. *"You will feel it once you achieve X"* was untrue the last three times. There is a mechanism behind that, and it is not a character flaw.

#### The achievement treadmill, explained properly

The pattern has a name. The **Hyper-Achiever** Saboteur makes one continuous argument: your value as a person is conditional on your latest result. Not your judgement. Not your relationships. Not who you are when nobody is measuring. Your latest result.

The mechanism is simple and it is brutal. Each achievement gets consumed on arrival as evidence that the bar was not that high, or that the timing was lucky, or that anyone in your seat would have managed it. The win is never allowed to count as proof of competence. It becomes the new baseline, and the measuring restarts immediately.

This is why more success produces less security rather than more. You get a higher bar, the same underlying doubt, and more at stake if you fail to clear it.

#### Why more achievement cannot solve it

Worth stating plainly, because it is the conclusion most people resist for years.

If the scoring system discounts every result on arrival, then no result can satisfy it. Not a bigger title, not a larger deal, not the thing you have privately decided will finally settle it. The problem is not the size of the evidence. The problem is the mechanism that processes it. You can keep feeding a machine that is built to reject the input, and many capable people spend a decade doing exactly that.

#### Why this is worse for people who are genuinely good

There is an irony here that catches talented people more often than mediocre ones.

If you are skilled, you can usually trace precisely how a result was achieved: which decision, which relationship, which hour of preparation. That visibility should be reassuring. Instead it becomes fuel: *"I know exactly how I did that, and none of it required anything special."*

Less skilled people are sometimes protected from this. They cannot see the gaps in their own competence clearly enough to doubt themselves. High performers see everything, including every point where it could have gone differently, and the internal critic uses that clarity as ammunition.

There is one upside worth naming. [Harvard Business Review has reported](https://hbr.org/2022/05/impostor-syndrome-has-its-advantages) that the same self-doubt tends to make people more attentive and more effective with others, even while it works against how they see themselves. The trait is not useless. It is just badly aimed.

#### What breaks the cycle: letting a win land

Not more achievement. That has been tried, at length, by the person reading this.

What breaks the cycle is intervening at the exact moment a win gets discounted, before the discounting becomes automatic and therefore invisible. Two practices do this, and they are specific to this pattern rather than general advice.

**Catch the discount as it happens.** The Hyper-Achiever rarely announces itself. It shows up as a reasonable-sounding thought a few seconds after good news: *the team did most of it, the market was favourable, anyone would have.* The practice is to notice that specific move and label it: *"That is the discount."* Not to argue with it. Just to catch it, because a discount you can see is a discount that loses most of its power.

**Keep a record you are not permitted to relitigate.** Not a mental tally, which the Hyper-Achiever will always find a way to devalue, but a written one: what you did, what the outcome was, what it required of you. Write it within forty-eight hours of the result, while the detail is still accurate, because after a week your memory has already been edited. When the doubt arrives, you read the record. You do not reargue the case from memory, because memory is where the Saboteur wins every time.

Both of these are the specific application of a broader skill. The daily practice that makes the interception fast enough to work in real time is covered in the guide to [how to overcome imposter syndrome](/blog-overcome-imposter-syndrome.html).

#### This is not the same conversation as burnout

Worth being precise, because the two get collapsed constantly.

Burnout is what happens when capacity runs out. This is what happens when capacity is entirely intact but the internal scoring system never registers a result as sufficient. You can be nowhere near burnt out and still run this treadmill for years. That is exactly why it goes unaddressed for so long. From the outside, and often from the inside too, it looks like drive.

#### What working on it involves

If you want to know what addressing this actually looks like in practice, session by session, that is covered in [imposter syndrome coaching](/blog-imposter-syndrome-coaching-explained.html).

### CTA block

**Let a Win Actually Count as a Win**

Book a free discovery session to talk through your specific pattern and what a mental fitness practice would look like for you.

`Book Free Discovery Session` | `Explore PQ® Coaching`

### FAQ schema

**Why do high achievers get imposter syndrome more than most people?**
Because the Hyper-Achiever pattern ties self-worth to the most recent result. Every achievement is temporary by definition, so the internal scoreboard resets after each win, creating a constant need to prove competence again rather than a growing sense of having proved it.

**Can you have imposter syndrome and still be confident?**
Yes, and it is common. Many high performers present as decisive and self-assured while privately discounting every result. Confidence in behaviour and confidence in self-assessment are separate things, which is why this pattern is usually invisible to colleagues.

**Is the Hyper-Achiever the same as perfectionism?**
They overlap but are not identical. Perfectionism is about the standard applied to the work. The Hyper-Achiever is about what the work is being asked to prove. You can produce imperfect work happily and still feel that your worth resets to zero after every result.

### Removed from this page

- The link to the executive self-doubt page in both the body and Continue Reading
- The six to eight week timeline claim (owned by Page D)
- The PQ Reps mechanics (owned by Page A, now referenced with a link)
- The general "name the pattern" tactic, reframed as the discount-catching practice specific to this page

### Continue Reading module

Link only to: the hub, and the coaching page.

---

## 5. Page C: `blog-executive-self-doubt.html` (CONTEXT SPOKE)

### Metadata

```
title: Executive Self-Doubt: Why Capable Leaders Doubt Themselves Most | Have & Share
meta-description: Executive self-doubt rarely looks like doubt from the outside. Why seniority makes it worse, what it costs the organisation, and what actually shifts it.
meta-keywords: executive self-doubt, leadership self-doubt, self doubt as a leader, executive coaching south africa, leadership decision confidence
og:title: Executive Self-Doubt: Why Capable Leaders Doubt Themselves Most | Have & Share
og:description: Executive self-doubt rarely looks like doubt from the outside. Why seniority makes it worse, what it costs the organisation, and what actually shifts it.
twitter:title: Executive Self-Doubt: Why Capable Leaders Doubt Themselves Most | Have & Share
twitter:description: Why seniority makes self-doubt worse rather than better, and what actually shifts it.
```

Remove `imposter syndrome executives` from meta-keywords. This page should stop competing on that term entirely.

### H1

**Executive Self-Doubt: Why Capable Leaders Doubt Themselves Most**

### Answer box

**Why do capable executives struggle with self-doubt?**

Executive self-doubt persists because seniority removes the feedback that used to settle it. The higher you rise, the fewer people tell you the truth, the longer decisions take to prove themselves right or wrong, and the fewer people are positioned to give you an honest read. Capability does not switch it off. It grows quietly behind a track record that looks, from outside, like the opposite problem.

CTA buttons: `Explore individual coaching`, `Explore PQ coaching`

### Body copy

Nobody schedules a meeting to tell a CEO they seem unsure of themselves. That is precisely the problem.

The higher you climb, the less feedback you receive and the more of your internal state you have to read on your own. Executive self-doubt does not announce itself the way it would in a junior role, as a visible hesitation or a question asked out loud. It goes underground, and it surfaces as over-preparation, delayed decisions, and a private sense that you are one bad quarter from being found out.

This overlaps with imposter syndrome but it is not the same thing. Imposter syndrome is a specific inability to internalise achievement, covered in the guide to [how to overcome imposter syndrome](/blog-overcome-imposter-syndrome.html). Executive self-doubt is broader: the accumulated weight of making consequential calls with incomplete information, carrying other people's outcomes, and doing it with almost nobody positioned to tell you whether you are doing it well.

#### Why seniority makes it worse, not better

There is a common assumption that self-doubt fades with progression, replaced by hard-won confidence. In practice the opposite often happens, for three structural reasons.

**The feedback thins out.** Junior roles come with reviews, a manager, and peers at the same level who will say plainly when something is off. Executive roles come with a board that wants confidence rather than doubt, a team that filters what travels upward, and peers managing exactly the same performance around their own uncertainty. The honest signal that used to calibrate your self-assessment quietly disappears, and nothing replaces it.

**The decisions get harder to verify.** A junior analyst can check their work against a right answer. A chief executive deciding whether to enter a market, restructure a division, or back a struggling leader is making a judgement call with no answer key. The outcome takes months or years to arrive, which gives the doubt an unlimited runway to compound while you wait to find out whether you were right.

**The isolation is structural, not personal.** It is not that senior leaders are worse at relationships. It is that the role removes the people who could once double as a reality check. Direct reports have their own incentives. Peers are competitors as often as allies. Family can offer support but not calibration, because they cannot see the decision.

#### The behaviours it produces

Executive self-doubt rarely looks like doubt. It looks like a set of behaviours that read, from outside, as diligence.

**Decision delay dressed as thoroughness.** One more round of data, one more stakeholder view, one more model, past the point where more information could change the outcome.

**Over-control of work that does not need it.** Reviewing output a competent team has already produced well, not because it needs reviewing, but because letting go of it feels like surrendering the thing that proves your value.

**Difficulty naming what you actually think.** Deferring to consensus, hedging a strong view, or waiting to see where the room lands before committing, on precisely the occasions when your judgement is what the room needed.

None of these appear as self-doubt on a performance review. All of them are self-doubt, wearing the costume of competence.

#### What it costs the organisation

This is usually framed as a personal burden, which understates it. The behaviours above have an organisational price, and it is measurable.

**Decision velocity drops.** Every delayed call has a cost that never appears on a report, because unmade decisions do not generate line items. The opportunity that closed while the fourth model was being built simply never existed as far as the numbers are concerned.

**Delegation stalls and talent leaves.** Capable senior people who are never fully trusted with the work eventually take the trust somewhere else. The retention problem this creates is almost never diagnosed as a leadership self-doubt problem, because it does not look like one.

**Strategy gets hedged.** A leader who cannot hold a position under pressure produces strategy that is negotiated rather than chosen. It is defensible, it survives the board meeting, and it commits to nothing.

#### What actually shifts it

Standard advice, believe in yourself, focus on your wins, does not work at this level, because it treats the problem as a thinking error rather than a whole-system pattern.

The doubt is not primarily cognitive. It sits in the gut brain, the centre responsible for identity and self-preservation, and it cannot be argued out of position by the head brain alone. That is why executives who are entirely capable of building a rational case for their own competence still feel, physically, like frauds in the room. The three-centre model behind this is explained in the [main guide](/blog-overcome-imposter-syndrome.html).

The work itself is not about eliminating uncertainty. Senior decisions are genuinely uncertain and pretending otherwise is its own dishonesty. The work is building the capacity to make a clear call and hold it, without the decision being contaminated by a fear that has nothing to do with the facts on the table.

#### Why this needs a room outside the organisation

Everything structural about the role argues for one thing: a relationship with no stake in the outcome.

Your direct reports need you to be decided. Your board needs you to be confident. Your peers are managing their own version of this. A mentor inside the industry has a view on the decision. Therapy is the right room for some things, but it is not built for the specific question of whether you are calling this correctly.

Coaching exists as a separate category for exactly this gap. One relationship where the only objective is your clarity. Not managing you, not being managed by you, not diagnosing you, and with no position on which way the decision should go.

#### Whether this applies to you

It usually applies if you recognise the gap between how you are perceived and how you actually feel while making the decisions that earn the perception. If your team would call you decisive and you would call it guessing well under pressure. If congratulations land oddly, closer to relief than pride. If you have never said any of this out loud at work, because there is genuinely nobody at work it would be safe to say it to.

If you want to know what the work involves in practice, that is covered in [imposter syndrome coaching](/blog-imposter-syndrome-coaching-explained.html).

### CTA block

**A Space That Is Only for Your Clarity**

Book a free discovery session with Claudina Hafenscher to talk through what is actually driving the doubt, and whether coaching is the right next step.

`Book Free Discovery Session` | `Explore Individual Coaching`

### FAQ schema

**Is executive self-doubt the same as imposter syndrome?**
They overlap but differ. Imposter syndrome is a specific inability to internalise achievement despite evidence. Executive self-doubt is broader and partly situational: it comes from making high-consequence decisions with incomplete information and very little honest feedback. A leader can have one without the other.

**Should I tell my board or my team that I am struggling with this?**
Usually not in those terms, and not because it is shameful. Boards and teams need a decided leader, and asking them to hold your uncertainty puts them in a role they cannot fill. That is the argument for an outside relationship where the uncertainty can be examined without a cost attached.

**Is coaching or mentoring better for executive self-doubt?**
Mentoring gives you someone with a view on the decision, which is useful for the content of the choice. Coaching gives you someone with no view at all, which is what you need when the problem is the pattern behind how you make choices rather than the choice itself. Many leaders use both for different purposes.

### Removed from this page

- The link to the high performer page, in both the body and Continue Reading
- The extended imposter syndrome comparison, cut to two sentences plus a link
- The Saboteur naming paragraph, cut and pointed at the hub
- The Harvard Business Review "seven in ten" statistic (see Section 7)
- `imposter syndrome executives` from meta-keywords

### Continue Reading module

Link only to: the hub, and the coaching page.

---

## 6. Page D: `blog-imposter-syndrome-coaching-explained.html` (COMMERCIAL SPOKE)

This page now carries the commercial term and the geo signal. It also picks up three new sections that no other page has, which is what earns it the right to that term.

### Metadata

```
title: Imposter Syndrome Coaching: What Actually Happens in Sessions | Have & Share
meta-description: What imposter syndrome coaching involves session by session, how long it takes, what it asks of you, and how it differs from therapy. Johannesburg and online, with a COMENSA Accredited Senior Coach.
meta-keywords: imposter syndrome coaching, imposter syndrome coach johannesburg, does coaching work for imposter syndrome, what happens in imposter syndrome coaching, imposter syndrome coach south africa
og:title: Imposter Syndrome Coaching: What Actually Happens in Sessions | Have & Share
og:description: What imposter syndrome coaching involves session by session, how long it takes, and how it differs from therapy. Johannesburg and online.
twitter:title: Imposter Syndrome Coaching: What Actually Happens | Have & Share
twitter:description: What imposter syndrome coaching involves session by session, and how it differs from therapy.
```

### H1

**Imposter Syndrome Coaching: What Actually Happens in the Sessions**

### Answer box

**What happens in imposter syndrome coaching?**

Imposter syndrome coaching starts by identifying the specific internal pattern driving your self-doubt, then builds a daily interception habit around it, works with the physical side of the doubt as well as the thinking, and holds you accountable for the practice between sessions. It is structured skills training rather than reassurance, which is why the change holds under pressure rather than only in the session.

CTA buttons: `Book a discovery session`, `Explore individual coaching`

### Body copy

*"Does this actually work?"* is the honest question underneath most enquiries, and it deserves a specific answer rather than a testimonial. Here is what the work involves, what it asks of you, and how to tell whether a coach is the right one, so you can judge for yourself before booking anything.

One thing to establish first, briefly. Most people who enquire already understand imposter syndrome perfectly well. They have read the articles and could explain the concept to a colleague, and they still feel it every Monday. That gap, between understanding a pattern and being free of it, is the reason coaching exists as something distinct from reading. The patterns do not live in the part of the brain that reads. The full explanation of the mechanism is in the guide to [how to overcome imposter syndrome](/blog-overcome-imposter-syndrome.html).

#### The four stages of the work

**1. Mapping your specific pattern**

The first session is not a general conversation about confidence. We identify which Saboteurs are most active for you, usually the Judge paired with one or two accomplices such as the Hyper-Achiever, the Hyper-Rational, or the Controller, using a structured assessment alongside conversation. This matters because generic advice fails for a generic reason: the intervention that helps a Hyper-Achiever is not the one that helps a Pleaser, and applying the wrong one wastes weeks.

**2. Building the interception habit**

Once the pattern is named, the work turns practical: catching the voice in the moment it fires, before it has taken over the room. This is trained through short daily mental fitness exercises, PQ® Reps, that shift your nervous system out of threat response. Seconds per rep, several times a day. This is the component that produces the change, not the conversation about it, and it is the part people underestimate.

**3. Working with the body as well as the thinking**

Imposter syndrome is somatic as much as cognitive: the racing heart before the presentation, the tight gut before the difficult meeting. Through [mBIT](/mbit-coaching.html) we work with the head, heart and gut as three centres of intelligence, so the shift registers in the body as well as in your thinking. That is why it holds under real pressure rather than only in the calm of a session.

**4. Accountability between sessions**

Change happens in the week between sessions, not in the session. Each conversation reviews what was practised, what triggered the old pattern, and what worked, so the practice compounds instead of fading the way most resolutions do.

#### What changes, and roughly when

Nobody can promise a universal timeline, because the depth of the pattern varies and so does how consistently people practise.

What Positive Intelligence reports from its own programme data is that measurable shifts in mental fitness typically appear after six to eight weeks of consistent daily practice. That matches what I see in the room, with one qualification worth stating: the early change is almost never the voice disappearing. It is noticing the voice earlier, before it derails a decision. The deeper shift, where the calmer response becomes your default rather than your good day, builds over months.

Worth saying plainly: coaching does not remove the Saboteurs. It cannot, and any programme promising that is overselling. What it does is weaken their grip and strengthen your capacity to work from clarity instead of fear, consistently enough that it becomes the norm.

#### What the work asks of you

Fair to know before you book, because this is the part that determines whether it works.

**Ten minutes a day, not one hour a week.** The daily practice is short but it is not optional. Clients who do the reps and clients who only attend the sessions get visibly different results, and the difference shows up around week four.

**Willingness to be specific.** The work needs actual situations, actual meetings, actual moments where it fired. General discussion about confidence produces general results.

**Somewhere between eight and twelve sessions to see the change through.** Some people need fewer, some continue longer. One session will give you a map. It will not give you a new habit.

#### How this differs from therapy and from generic confidence coaching

Coaching is forward-facing and skills-based. It does not require excavating your childhood or dwelling in difficulty, and it is not a substitute for therapy where deeper clinical support is needed. The two work well alongside one another, and I will say so directly if I think therapy is the more appropriate room.

It also differs from generic confidence coaching, which tends to work on mindset affirmations and public-facing presence. This work goes underneath that, to the pattern generating the doubt, so what results is not a performance of confidence but an actual shift in how you read yourself.

#### How to choose an imposter syndrome coach

Whether or not you work with me, these are the things worth checking, because coaching is an unregulated field in South Africa and the quality range is wide.

**Look for accreditation with a recognised body.** COMENSA, the Coaches and Mentors of South Africa, is the local professional body. ICF is the main international equivalent. Accreditation is not a guarantee of fit, but it does mean supervised hours, an ethical code, and someone to complain to.

**Ask what framework they use and why.** A coach should be able to name their method and explain why it suits this specific pattern. "I use my own approach developed over years of experience" is not an answer.

**Ask what happens between sessions.** If the answer is nothing, the pattern will not shift, for the reasons above.

**Ask how they would know it was working.** A coach who cannot describe what progress looks like has no way to tell you when to stop.

**Use the discovery session as an assessment, in both directions.** You are checking whether you would be honest with this person under pressure. That matters more than credentials, and it is not something you can assess from a website.

#### Working with Claudina: Johannesburg and online

I am a COMENSA Accredited Senior Coach and a Certified PQ® Coach, based in Kempton Park and working with clients across Johannesburg and Gauteng in person, and across South Africa and internationally online. Most of the imposter syndrome work happens online, which suits senior schedules better and makes no difference to the outcome.

The most useful next step is usually a conversation rather than more reading. The discovery session is free and is not a sales pitch. It is a chance to describe what you are actually experiencing and hear, specifically, what the work would involve for your pattern.

### CTA block

**See What This Would Look Like for You**

Book a free discovery session with Claudina Hafenscher to map your specific pattern and what the first few weeks of practice would involve.

`Book Free Discovery Session` | `Explore Individual Coaching`

### FAQ schema

**Can coaching really help with imposter syndrome?**
Yes, when it moves past reassurance into repeatable practice. Coaching identifies which internal pattern is driving the self-doubt and builds daily habits that intercept it in the moment. Reassurance alone fades within a day, which is why understanding the concept has not resolved it for most people who enquire.

**How long does imposter syndrome coaching take?**
Measurable shifts typically appear after six to eight weeks of consistent daily practice, based on Positive Intelligence programme data. Most clients work through eight to twelve sessions to embed the change, with deeper shifts building over the months that follow.

**Do you offer imposter syndrome coaching online?**
Yes. Sessions run in person for clients in Johannesburg and Gauteng, and online for clients elsewhere in South Africa and internationally. Most of this work happens online and the outcome is the same.

**Is imposter syndrome coaching the same as therapy?**
No. Coaching is forward-facing and skills-based, focused on building new responses rather than examining the past. Therapy is the right choice where there is deeper clinical need, and the two work well together. A responsible coach will tell you when therapy is the more appropriate option.

**What happens in the free discovery session?**
It is a conversation, not an assessment or a pitch. You describe what you are experiencing, and you hear specifically what coaching would involve for your pattern. There is no obligation to book anything afterwards.

### New sections added to this page

- What the work asks of you (qualifies leads, reduces no-shows)
- How to choose an imposter syndrome coach (high commercial intent, strong E-E-A-T, currently ranked by nobody in the SA market)
- Working with Claudina, Johannesburg and online (carries the geo signal moved off Page A)

### Continue Reading module

Link only to: the hub, the high performer page, and the PQ coaching guide.

---

## 7. Two claims I would not publish as written

You have asked me before to flag rather than hedge, so both of these are flagged rather than quietly carried over.

**"Research on the Positive Intelligence programme shows measurable shifts within six to eight weeks."** This currently appears on three pages phrased as independent research. As far as I can establish, the six to eight week figure originates in Positive Intelligence's own programme materials, not in peer-reviewed independent research. I have rewritten it on Page D as "what Positive Intelligence reports from its own programme data", which is accurate and still persuasive. If you have a peer-reviewed source, send it and I will restore the stronger phrasing with a citation.

**"Harvard Business Review research puts the proportion of high achievers who experience it at close to seven in ten."** The commonly circulated 70% figure traces back to a 1985 study by Gail Matthews, frequently repeated in business press without the original methodology attached. Attributing it to "Harvard Business Review research" is not accurate, since HBR reported it rather than produced it. I have removed the statistic from Page C rather than restate it loosely. If you want a prevalence figure on that page, I would want to verify a primary source first.

---

## 8. Implementation checklist

Ordered by impact, then effort.

| # | Action | Page | Impact | Effort |
|---|---|---|---|---|
| 1 | Change title tag, drop "Coaching Johannesburg" | A | High | S |
| 2 | Change title tag to claim "imposter syndrome coaching" | D | High | S |
| 3 | Replace answer box question and answer | A, D | High | S |
| 4 | Apply new body copy | All four | High | M |
| 5 | Redistribute FAQ schema, no repeated questions | All four | High | S |
| 6 | Remove spoke-to-spoke links | B, C | Med | S |
| 7 | Rebuild internal links as hub and spoke | All four | Med | S |
| 8 | Curate Continue Reading per page | All four | Med | S |
| 9 | Update all meta descriptions and keywords | All four | Med | S |
| 10 | Fix nav and footer drift | A | Med | S |
| 11 | Update `lastmod` in sitemap.xml, resubmit | All four | Med | S |
| 12 | Request reindexing in Search Console | All four | Med | S |

**Schema note.** Keep FAQPage markup on each page, but only for questions genuinely rendered on that page. Four pages carrying identical FAQ questions is the schema-level version of the same cannibalisation problem. Schema is for rich-result eligibility, not for AI ranking, so do not expand it beyond what is on the page.

**Measurement.** Set a Search Console baseline before deploying: impressions, clicks and average position for all four URLs, plus the query set for "imposter syndrome coaching", "how to overcome imposter syndrome" and "executive self doubt". Compare at 30 and 60 days. What you want to see is one URL rising per query rather than two URLs trading places, which is the actual signal that the cannibalisation has resolved. Indexing and reranking are never guaranteed and this can take a full cycle to settle.

---

## 9. Open items for you

1. **Session pricing.** Page D would convert better with a price or a range, and nothing on the site currently states one. I have not invented a figure. If Claudina is willing to publish a range, it slots into the "What the work asks of you" section.
2. **The Kempton Park and Johannesburg question.** Page D now carries the geo signal, and it names both. That is the honest framing, but it does not resolve the Google Business Profile conflict already sitting in the backlog.
3. **Publication dates.** Three of the four are dated 11 August 2026, which reads as a bulk publish. Consider updating all four to the redeploy date, since the content is genuinely substantially rewritten.
4. **Raw HTML.** I worked from the rendered pages, so I could not see your template markup, JSON-LD blocks, or CSS classes. If you want the four finished HTML files rather than this brief, send me one raw source file and I will produce all four to match.
