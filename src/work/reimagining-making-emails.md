---
title: Re-imagining how we made emails at TotallyMoney
worktype: 
- DesignOps
intro: Improving the quality of life for team members working on new HTML email projects by centralising email design assets and simplifying the codebase.
hero: case-study__email__hero.jpg
thumb: case-study__email__thumb.jpg
date: 2018-12-31
theme: 
---

## The Problem(s)

At TotallyMoney, email was a key way in which we communicated with our customers. Through a mix of monthly service updates, personalised offers or well thought out journeys, we managed to maintain a high active customer base.

However, as our efforts increased in pace and sophistication, combined with an imminent rebrand _and_ move to a new CRM platform, the team began to feel the strain. Through taking feedback from colleagues and looking at the challenges I was having in my own workflow, some key problems became apparent that we needed to address.

1. Silo'd assets that were tricky to find and reference were making it harder than it needed to be to create new email designs leading to inconsistencies creeping in to the design language.
2. The codebase we were using to create the HTML for our emails had a high barrier to entry for newcomers, particularly designers, and was also setup to cater for our previous CRM platform leading to an over reliance on one or two people to produce all new HTML emails.
3. Nothing was documented particularly well which created uncertainty for new team members, an issue that was exacerbated as we made the switch to cross-functional teams. Designers were distributed across the business and so the need for individual autonomy increased. 

## My role

Working as part of a cross-functional product team, my role focused on the creation and distribution of an up to date email design library, refactoring our HTML email codebase to make it simpler and easier to use, as well as educating other members of the team regarding how to make use of all the new assets and resources through one-to-one sessions, and written documentation.

Work needed to be completed over a 2-3 month period.

## Desired outcomes

Translating the problems outlined above in to some simple outcomes was an initial first step to help orient the work. If the following rang true once the work was done, we'd know that we'd made an impactful difference.

1. Design colleagues should have a set of documented, easy-to-use assets to work from.
2. Engineering colleagues should be able to access all HTML in a way that suits engineering workflows.
3. Marketing colleagues should be empowered to self-serve new emails efficiently.


## Solution #1 — Sketch Library

The team were well-travelled Sketch users, and so we took the decision to focus our efforts on producing a library file containing our email design language abstracted and broken down based upon atomic design principles.

Nothing was added to the library unless it was to be used in other email creatives. Legacy and one-off materials were left out to avoid clutter. The end result was a fairly lean, paired back file that contained only what was necessary at the time.

<figure>
  <img src="/_assets/img/case-study__email__stylekit.jpg" />
  <figcaption>High-level view of the library, showing a clear cascade from core styles through to full templates.</figcaption>
</figure>

<figure>
  <img src="/_assets/img/case-study__email__styles.jpg" />
  <figcaption>Starting with colour, typography and some simple email-approproate breakpoints.</figcaption>
</figure>

<figure>
  <img src="/_assets/img/case-study__email__components.jpg" />
  <figcaption>Building out various components.</figcaption>
</figure>

<figure>
  <img src="/_assets/img/case-study__email__templates.jpg" />
  <figcaption>Bringing everything together in template form.</figcaption>
</figure>

### A note on naming things 
 
One of the key things to consider when producing any design asset or library that will be used by others is to ensure the usability of your files. A lot of time was spent naming things in a common sense manner and ensuring a logical, human readable structure of the document. 

We didn't get it right immediately, initially opting to go for a naming convention was very front-end centric, but this was ultimately discarded in favour of something friendlier, and easy to move through at a glance.

<figure>
  <img src="/_assets/img/case-study__email__symbols.jpg" />
  <figcaption>WIP view of a sensible, usable naming convention coming to fruition.</figcaption>
</figure>


### In practice

After adding the library to sketch, starting a new email design from one of the base templates takes a very short space of time.


<figure>
  <video controls autoplay loop>
    <source src="/_assets/mov/case-study__email__template.mp4" type="video/mp4">
    <p>This browser does not support the video element.</p>
  </video>
</figure>

### Governance and distribution

The team was in the early stages of considering our approach to creating a wider design system and so no hard and fast rules or principles were defined regarding how we intended to update and maintain things like assets, pattern libraries and so on. This wasn't too much of a concern at the time as I was the only person adding to the library, and I was also working to keep the codebase in sync too. Beyond this, we agreed that good old fashioned common sense would take precedent i.e. changes would be communicated early and discussed by the team collectively so that any work required to update something happened smoothly.

The team had recently started using Dropbox for Business as a way to organise all of our shared assets and it proved to be a great place to store the library file. Changes to the file could propagate across the design team more or less instantly, and we could also leverage Dropbox's inbuilt, albeit limited, file version history should something go awry.


## Solution #2 — Cleaner, Simpler HTML

This proved to be the area where the largest majority of work needed to be done. Our email codebase was created in early 2017 using an off the shelf front-end framework, and enabled quite a lot of automation out of the box, including things like posting assets to the cloud, inlining CSS and so. Over time we tailored this to fit our current workflow as closely as possible.

These automations saved a lot of manual labour on a per email basis, however they also created additional complications of their own. We also felt as though we'd lost site of the 'real' HTML itself, as everything was being generated by a tool and therefore wasn't being written directly. Fixing errors became time consuming, and frustrating. This project provided a great opportunity to address these things.

### Some guiding principles

It was important early on in this part of the work to set out some guiding principles to act as a yard stick that could be referred to when making decisions: 

1. Write all HTML directly.
2. Keep things as simple as possible, don't over complicate!
3. If something isn't needed, ditch it.
4. Adhere to common sense best practices regarding version control. 
5. Line-up with the Sketch library as closely as possible.


<figure>
  <img src="/_assets/img/case-study__email__codeslim.jpg" />
  <figcaption>Same component, old versus new. Generated HTML is replaced by hand-authored. A massive improvement.</figcaption>
</figure>


&#9650; Because we wanted email code to be as usable by as many colleagues as possible, from engineering through to design and marketing, we needed to strip out everything but the essentials. In this case it made sense to think about our email code as something we should author *by hand* as opposed to relying on system to generate it for us. This gave us the chance to make it as approachable as possible while also helping to significantly reducing email file sizes (and therefore improve deliverability).



### Development diary

I <a href="https://paper.dropbox.com/doc/Decision-Journal-Product-Alert-Re-build--Ah_Z6qKVlOXqp6tcuxokrC~LAQ-F7WGWDmNdT1PmNekwt14A" target="_blank" title="[Decision Journal] Product Alert Re-build ">kept a diary</a> of all the issues I was facing while refactoring the email codebase, an excerpt from which can be seen below:

__Problem:__ _We use Source Sans Pro everywhere in our emails. Some email clients don’t support web fonts and so we need to fall back to system-level fonts. For UI elements such as text links or buttons, this is problematic because the fallback font can—in some cases—be a lot wider than the original, meaning precise layout and positioning can break in certain email clients when using, for example, responsive table alignment._ &#9660;

__Solution:__ _We currently default to Arial as a fallback font due to its wide availability. We can adjust this at the individual element level to fall back to Arial Narrow instead, which will reduce the risk of unwanted text wrapping, as follows:_

`font-family: 'Source Sans Pro', 'Arial Narrow', sans-serif;` 

__To Consider:__ _Should we even be using web fonts in emails?_

<figure>
  <img src="/_assets/img/case-study__email__font-issue.jpg" />
  <figcaption>Source Sans Pro, the brand font at the time, would need a fallback for certain email clients. The fallback choice was determined by the width of each character.</figcaption>
</figure>



### Technology

We used a light-weight static site generator to help us write our HTML in components, making use of a templating language called Liquid, something created by the team at Shopify. This was useful for two key reasons. Firstly, it enabled us to structure our atoms, molecules, organisms, templates in a way that mirrored how we were working in Sketch. Secondly, our new CRM platform also used Liquid as part of its core technology stack, and so by using the same language we were creating better synergy between our local development environment and the platform. 

Everything was version controlled and hosted on Github for all team members to clone or download as needed. Furthermore, all components and templates were made available in the CRM platform so designers and marketers had a more direct way to create new email creatives.


## Solution #3 — Onboarding Guides

We decided to focus our efforts here on producing 'how to' guides, as a way to start the process of creating a repository of onboarding materials for new joiners. The general premise was fairly simple: if you need to produce deliverable X, then there should be an accompanying guide that contains all the information needed to get the job done well.

Every week, we'd create and send 'product alert' emails to customers. At the time, I was the only person handling this task, and so it made sense to start the documentation process by writing an onboarding guide for this stream of work, therefore enabling others to contribute or pick up the slack, and reducing the risk of bottlenecks.

<figure>
  <img src="/_assets/img/case-study__email__guide.jpg" />
  <figcaption>Structure of an onboarding guide — from high level details, to digging deeper in to deliverable-specific things, with an appendix containing additional reading.</figcaption>
</figure>

All team documentation was written and distributed using Dropbox Paper. This allowed the live document to be shared with team members for feedback. Colleagues could leave comments and let me know where things were missing, or hard to understand. 


<figure>
  <img src="/_assets/img/case-study__email__doc.jpg" />
  <figcaption>Onboarding guide, written in Dropbox Paper.</figcaption>
</figure>

<a href="https://paper.dropbox.com/doc/GUIDE-Designing-for-Email-Product-Alerts--Ah8aMuAYq91H00s3HAmReUjuAQ-IvY14I06colCkjXx11r3r" target="_blank" title="GUIDE | Designing for Email: Product Alerts">Take a look at the full document here</a>. I no longer have access to the original, and so this one is a version I exported to my own personal Dropbox account.


## Recap

Through the creation of a usable Sketch library containing common email components, styles and assets, a significantly simplified codebase that better leveraged our new CRM platform and the beginnings of a thorough set of documentation. With these three improvements in place, designers had a stable baseline to work from, along with documentation related to key workstreams, and developer colleagues has access to a super simple repo of HTML email code that they could interact with through Github. Furthermore, because we'd made some common templates and assets available in our CRM platform, marketing colleagues were given the freedom they needed to create new emails when required.

None of the solutions presented were perfect, and there is a lot that could be improved, however each solution represented an initial starting point that could be iterated on and improved over time. 

This project was quite a large one, and I might split this page in to several smaller case studies in the future so I can describe each in a bit more detail along with a breakdown of what could have been done differently.







