---
title: Re-imagining how we made emails at TotallyMoney
intro: Improving the quality of life for team members working on new HTML email projects by centralising email design assets and simplifying the codebase.
hero: case-study__email__hero.jpg
date: 2019-07-14
theme: 
---


## The Problem(s)

At TotallyMoney, email was a key way in which we communicated with our customers. Through a mix of monthly service updates, personalised offers or well thought out journeys, we managed to maintain a high active customer base.

However, as our efforts increased in pace and sophistication, combined with an imminent rebrand and move to a new CRM platform, the team began to feel the strain. Through taking feedback from colleagues and looking at the challenges I was having in my own workflow, some key problems became apparent that we needed to address.

1. Silo'd assets that were tricky to find and reference were making it harder than it needed to be to create new email designs leading to inconsistencies creeping in to the design language.
2. The codebase we were using to create the HTML for our emails had a high barrier to entry for newcomers, particularly designers, and was also setup to cater for our previous CRM platform leading to an over reliance on one or two people to produce all new HTML emails and bottlenecks.
3. Nothing was documented particularly well which created uncertainty for new team members, an issue that was exacerbated as we made the switch to cross-functional teams. 

## My role

Working as part of a cross-functional product team, my role focused on the design and distribution of—spoiler alert—an up to date email design library, refactoring our HTML email codebase to make it simpler and easier to use, as well as educating other members of the team regarding how to make use of all the new assets and resources through one-to-one sessions, and written documentation.

## Outcomes

Translating the problems outlined above in to some simple outcomes was an initial first step to help orient the work. If the following ring true once the work is done, we know we've made an impactful difference.

1. Design colleagues should have a set of documented, easy-to-use assets to work from.
2. Marketing colleagues should be empowered to self-serve new emails efficiently.
3. Engineering colleagues should be able to access all HTML in a way that suits engineering workflows.

## Solution #1 — Sketch Library

The team were well-travelled Sketch users, and so we took the decision right away to focus our efforts on producing a library file containing our email design language abstracted and broken down in to their various parts, based upon atomic design principles.

Nothing was added to the library unless it was to be used and re-used in other email creatives. Legacy and one-off materials were left out to avoid clutter. The end result was a fairly lean, paired back file that contained only the necessary basics.

<figure>
  <img src="/_assets/img/case-study__email__stylekit.jpg" />
  <figcaption>High-level view of the library, showing a clear cascade from core styles through to full templates.</figcaption>
</figure>

<figure>
  <img src="/_assets/img/case-study__email__styles.jpg" />
  <figcaption>Starting with colour, typography and some simple email-approproate breakpoints.</figcaption>
</figure>

### Naming things 
 
One of the key things to consider when producing any design asset or library that will be used by others is to ensure the usability of your files—the primary users for a Sketch library are going to be other designers after all. A lot of time was spent naming things in a common sense manner and ensuring a logical structure of the document.

We iterated over the naming a couple of times. We originally started out by naming things in a very front-endy fashion by using a BEM sytnax e.g. component__header--small, however this doesn't translate well to how Sketch likes to structure symbols, nested symbols and so on, and so in the end we opted for more a more common sense, human readable approach that both leveraged Sketch's naming rules and kept things simple.

<figure>
  <img src="/_assets/img/case-study__email__symbols.jpg" />
  <figcaption>Sensible, usable naming conventions begin replacing a less understandable scheme.</figcaption>
</figure>

### Speed of use

Spinning up a new email design from one of the base templates takes mere seconds, whereas previously it would need to have been located in a job folder on the company server, pasted in to a new folder and renamed. 

<video controls autoplay loop>
  <source src="/_assets/mov/case-study__email__template.mp4" type="video/mp4">
  <p>This browser does not support the video element.</p>
</video>

## Solution #2 — Cleaner, Simpler HTML

Pending...

<figure>
  <img src="/_assets/img/case-study__email__repo.jpg" />
  <figcaption>Clean, simple codebase, with installation/orientation README for newcomers.</figcaption>
</figure>

## Solution #3 — Better documentation

Writing great documentation is, in a lot of situations, a difficult task to get done. So often, it's seen as an afterthought or deprioritised in favour more critical tasks. Of course, good design documentation should be a key deliverable in any situation where you are making something that other team members will use. At TotallyMoney, we were a small team, and hadn't historically been great at making sure things were written up well. 




