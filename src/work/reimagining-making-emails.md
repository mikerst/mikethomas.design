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
2. The codebase we were using to create the HTML for our emails had a high barrier to entry for newcomers, particularly designers, and was also setup to cater for our previous CRM platform leading to an over reliance on one or two people to produce all new HTML emails.
3. Nothing was documented particularly well which created uncertainty for new team members, an issue that was exacerbated as we made the switch to cross-functional teams. Designers were distributed across the business and so the need for individual autonomy increased. 

## My role

Working as part of a cross-functional product team, my role focused on the design and distribution of—spoiler alert—an up to date email design library, refactoring our HTML email codebase to make it simpler and easier to use, as well as educating other members of the team regarding how to make use of all the new assets and resources through one-to-one sessions, and written documentation.

Work needed to be wrapped up over a 2-3 month period.

## Desired outcomes

Translating the problems outlined above in to some simple outcomes was an initial first step to help orient the work. If the following ring true once the work is done, we know we've made an impactful difference.

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

We didn't get it right immediately, initially opting to go for a naming convention that matches the names of things in the code, but this was ultimately discarded in favour of something friendlier, and easy to move through at a glance.

<figure>
  <img src="/_assets/img/case-study__email__symbols.jpg" />
  <figcaption>WIP view of a sensible, usable naming convention coming to fruition.</figcaption>
</figure>


### In practice

After adding the library to sketch, starting a new email design from one of the base templates takes a very short space of time.

<video controls autoplay loop>
  <source src="/_assets/mov/case-study__email__template.mp4" type="video/mp4">
  <p>This browser does not support the video element.</p>
</video>

### Governance and distribution

The team was in the early stages of considering our apporach to creating a wider design system and so no hard and fast rules or principles were defined regarding how we intended to update and maintain things like assets, pattern libraries and so on. This wasn't too much of a concern at the time as I was the only person adding to the library, and I was also working to keep the codebase in sync too. Beyond this, we agreed that good old fashioned common sense would take precedent i.e. changes would be communicated early and discussed by the team collectively so that any work required to ensure an update propogated correctly.

The team had recently started using Dropbox for Business as a way to organise all of our shared assets and it proved to be a great place to store the library file. Changes to the file could propogate across the design team more or less instantly, and we could also leverage Dropbox's inbuilt, albeit limited, file version history should something go awry.


## Solution #2 — Cleaner, Simpler HTML

This proved to be the area where the largest majority of work needed to be done. Our email codebase was created in early 2017 using an off the shelf front-end framework, and enabled quite a lot of automation out of the box, including things like posting assets to the cloud, inlining CSS and so. Over time we extended this to provide a lot of extras, including image path replacement—when the email is built out, images were posted to the cloud, and the paths to those images are automatically updated in the HTML. 

These automations seemed to save a lot of manual labour on a per email basis, however they also created additional complications of their own. We also felt as though we'd lost site of the 'real' HTML itself, as everything was being generated by a tool and therefore inaccessible. Fixing errors became quite time consuming, and frustrating. 


<figure>
  <img src="/_assets/img/case-study__email__codeslim.jpg" />
  <figcaption>Same component, old versus new. Generated HTML is replaced by hand-authored. A massive improvement.</figcaption>
</figure>


&#9650; A key change we made was a philosophical one. Because we wanted code to be as usable and as accessible as possible, we needed to strip out everything but the essentials. In this case it made sense to think about our email code as something we should author *by hand* as opposed to relying on system to generate it for us.

### Development diary

I kept a diary of all the issues I was facing throughout refactoring the email codebase, an example of which can be seen below:

__Problem:__ _We use Source Sans Pro everywhere in our emails. Some email clients don’t support web fonts and so we need to fall back to system-level fonts. For UI elements such as text links or buttons, this is problematic because the fallback font can—in some cases—be a lot wider than the original, meaning precise layout and positioning can break in certain email clients when using, for example, responsive table alignment._ &#9660;

<figure>
  <img src="/_assets/img/case-study__email__font-issue.jpg" />
  <figcaption>Source Sans Pro, the brand font at the time, would need a fallback for certain email clients. The fallback choice was determined by the width of each character.</figcaption>
</figure>

__Solution:__ _We currently default to Arial as a fallback font due to its wide availability. We can adjust this at the individual element level to fall back to Arial Narrow instead, which will reduce the risk of unwanted text wrapping, as follows:_

`font-family: 'Source Sans Pro', 'Arial Narrow', sans-serif;` 

__To Consider:__ _Should we even be using web fonts in emails?_



## Solution #3 — Onboarding Guides

We decided to focus our efforts here on producing 'how to' guides, as a way to start the process of creating a repository of onboarding materials for new joiners. The general premise was fairly simple: if you need to produce deliverable X, then there should be an accompanying guide that contains all the information needed to get the job done well.

<figure>
  <img src="/_assets/img/case-study__email__guide.jpg" />
  <figcaption>"Designing for email: Product Alerts"— structure of an onboarding guide — from high level details, to digging deeper in to deliverable-specific things, with an appendix for extra useful info.</figcaption>
</figure>


