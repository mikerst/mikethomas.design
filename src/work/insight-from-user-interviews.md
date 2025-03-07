---
title: Surfacing actionable insight from user interviews
hero: case-study__2024__exchange.jpg
date: 2024-07-01
company: Open Utility Ltd
tags: 

- protected
theme: 
type: User Research
rt: 4 min read
---

<section class="project-tldr">
    <div class="stagger">
        <h3>Contribution</h3>
        <ul>
            <li>Planning</li>
            <li>Conducting user interviews</li> 
            <li>Analysis of findings, reporting to team</li>
        </ul>
    </div>
    <div class="stagger">
        <h3>Impact</h3>
        <p>Key user-pain identified<p>
    </div>
    <div class="stagger">
        <h3>Next steps</h3>
        <p>Something...<p>
    </div>
</section>

## Synopsis

I worked with a cross-functional product team to plan and deliver qualitative user interviews with key business partners with a view to identifying actionable insight the team could use to better plan and prioritise up-coming initiatives.

## Problem

From evidence gathered via qualitative research, we learned users were having difficulty locating and parsing all of the information they needed in order to effectively participate in flexibility markets on Piclo Flex. Typically, each market operator would host important information on their own web platforms, often with differing terminology, processes, information architecture, and experience quality.

This created additional friction and work for users, as they had to keep track of data and information that lived in several different places and was simply not consistent.

This formed part of a broader wicked problem, and was raising the barrier to entry for lots of smaller businesses that didn't have the resources to navigate this complexity. This had the overall effect of harming market liquidity.

At Piclo, we didn't have the internal resource to take on this problem entirely, but we felt as though we could begin moving the needle.

<figure>
    <img src="/_assets/img/problem-shot__dso-profiles.jpg" />
    <figcaption>The broader wicked problem....brought to you by my little friend, Proxy.</figcaption>
</figure>



## Opportunity

- Chance to begin moving the needle on a wicked problem that was aligned to our business mission.
- Chance to lower the burden for users on both sides of the marketplace
- Chance to improve participation and therefore market liquidity
- Chance to improve relationships with market operator customers


## Constraints

- Tightly time-boxed, two week end-to-end (one sprint), tackled in amongst other duties.
- No engineering or other product resources available (aside from some ad-hoc feedback).
- Limited opportunity for collaboration with internal and external stakeholders.
- We needed to work in partnership with market operators to ensure they were happy with what we were offering.


## Design artefacts and approach

The following evidences some of the design artefacts I produced during the project, with some added rationale for each.

### Early sketching

- Quick sketch in Miro, loosely considering existing design system elements.
- I did this immediately after starting the project just to start getting a sense for the shape it might take.

<figure>
    <img src="/_assets/img/case-study__2024__dso-profiles--early.jpg" />
</figure>

### Mockup iterations

- Moved on to create several mockup iterations (not all of which are shown).
- So as not to design in isolation, I was able to hi-jack some time on pre-arranged calls with external partners to get a little bit of feedback to help us zoom in what we felt their priorities might be.
- Internal colleagues were also invited to provide feedback.
- These leveraged pre-existing design language I had created as part of an earlier project.

<figure>
    <img src="/_assets/img/case-study__2024__dso-profiles--mock.jpg" />
</figure>

### Simple scenario map

- I chose to walk Piclo's customer support team through a simple scenario in order to identify important questions and sanity check that we weren't creating a problem for ourselves.
- While very simple, this exercise helped shape some service terms we'd communicate to key customers at a later date.
- This also helped to identify what we could scope in or out early on. For example, we chose early on not to host files ourselves, but link directly to those files off-platform (something we'd later change).

<figure>
    <img src="/_assets/img/case-study__2024__dso-profiles--lean-map.jpg" />
</figure>

### OOUX

- Object oriented UX techniques provide a great way to ground a project in the actual terms and mental models of users. 
- I did this short exercise so I had some structure to work from when considering future mockup iterations and when building out the CMS components in Webflow.
- I opted to orient the solution around the "Operator" concept as this is typically how end-users saw things: they were offering their services to company X and wanted to find relevant information to that company.

<figure>
    <img src="/_assets/img/case-study__2024__dso-profiles--ooux.jpg" />
</figure>

### Final implemented solution
- After several quick-fire rounds of iteration and feedback received, time was running short, and so the final version lacked a few of the ideas proposed initially, but this was OK—I wanted to ship something of value at the end of the two week block. Enhancements and updates could come later.
- The shipped solution included a directory page, sorted alphabetically initially, with room to add search or filtering later.
- Individual pages could be broken down in to customisable tabbed sections, with key stats and a post feed per market operator.
- Each tab could have complex content added, whether via HTML, Markdown, Rich Text or Image.
- You can see this live <a title="Operator Profiles on Piclo.energy" href="https://www.piclo.energy/profiles" target="_blank">here</a>.

<figure>
    <img src="/_assets/img/case-study__2024__dso-profiles--shot001.jpg" />
</figure>

<figure>
    <img src="/_assets/img/case-study__2024__dso-profiles--shot002.jpg" />
</figure>

<figure>
    <img src="/_assets/img/case-study__2024__dso-profiles--shot003.jpg" />
</figure>

<figure>
    <img src="/_assets/img/case-study__2024__dso-profiles--shot004.jpg" />
</figure>

### Onboarding guide
- Prior to shipping, I wanted to ensure alignement with all key stakeholders, so I put this brief guide together which I was able to use to walk external and internal colleagues through.

<figure>
    <img src="/_assets/img/case-study__2024__dso-profiles--onboard.jpg" />
    <figcaption>Slides produce to help onboard internal and external stakeholders.</figcaption>
</figure>

### Training guide
- Lastly, as other colleagues would need to help add and maintain content, I wrote a short tutorial detailing how to prepare and input content for use in Webflow.
- This wasn't strictly necessary, but helped reduce the need for technical input.

<figure>
    <img src="/_assets/img/case-study__2024__dso-profiles--guide.jpg" />
</figure>


## Notes for hiring managers

- Given the quick turn-around nature of this project, I moved through the gears fairly quickly and jumped in to building out a prototype fairly quickly, thus meaning there isn't a great deal of design process material to see here.
- I no longer have access to the Webflow account associated with this project and was unable to develop any visual material about the CMS implementation work.
- Validating success for this work relied very heavily on qualitative feedback gathered via customer support channels.

Thank you 🙏