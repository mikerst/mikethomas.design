---
title: Designing a new B2B SaaS marketplace for UK energy
intro: Prototyping to find product-market fit, build key relationships, and lay the groundwork for an MVP.
hero: case-study__2024__exchange.jpg
date: 2024-10-01
company: Open Utility Ltd
tags: 
- recent
theme: 
type: 0-1
rt: 13 min read
---

## Project summary

Over a six-month period, I worked with Piclo's innovation lead, as well as colleagues from the wider energy industry, including UK government and Ofgem, to prototype and iterate on the vision for a new B2B SaaS product, designed to enable the trading of obligations to provide service into various UK energy markets.

### My role

- Running workshops with stakeholders.
- Developing and iterating Figma prototypes.
- Desk-based research.
- Presenting to industry.
- Planning and facilitating qualitative end-user interviews.

### Audience

UK-based energy providers and aggregators.

## Problem

The UK's electricity grid is decarbonising as part of efforts to tackle climate change and move towards a more sustainable future. Companies that could provide greener power to the grid have been stymied in their efforts in part due to entrenched complexity, a fragmented ecosystem and low interoperability. This has had the effect of slowing the rate at which decarbonisation can happen.

<figure>
    <img alt="Two-panel comic. Left: a confused solar farm owner faces a tangle of energy market paths, captioned 'Navigating primary and secondary energy markets is complicated, proving to be a high barrier to entry, particularly for up and coming renewable generation businesses.' Right: a happier owner whose solar farm connects to many markets through a single open platform, captioned 'Could an open, interoperable SaaS platform lower barriers to entry, improving grid flexibility and accelerate the UK's ability to decarbonise?'" src="/_assets/img/problem-shot__exchange.jpg" />
    <figcaption>Could the potential for growth be improved as a consequence of cutting through complexity?</figcaption>
</figure>

In response to this incredibly large challenge, as part of a broader stream of innovation work, Piclo was <a title="Link to Piclo's funding award notice" href="https://www.gov.uk/government/publications/flexibility-exchange-demonstration-competition-flex-winning-projects/flex-competition-winning-projects" target="_blank">awarded funding</a> from UK Government and Innovate UK to develop an open and transparent marketplace enabling the trading of primary and secondary contracts. Our flagship SaaS product, Piclo Flex, was already tackling this head-on by enabling network operators to award primary local flexibility contracts at scale across their networks. But what about secondary trading? How could we build on our market position and expertise to tackle this space too?

### Ground-level

Through early conversations with potential end-users, we (myself and Piclo's innovation lead) learned that __a key problem impacting secondary trading was a lack of visibility__. Businesses needing to offload or wanting to procure certain types of second-hand contract had to rely on manual networking techniques such as calling or emailing peers from other organisations. This was slow and labour intensive, often leading to nothing happening at all. In addition, even if a successful trading partner was found, the process could fall down later for a variety of reasons, including:

- Lack of access to pricing data.
- Lack of contract standardisation.
- Strictness of market rules disallowing trading in some circumstances.

We chose to focus on the visibility problem initially due to prior experience solving in this space with our flagship SaaS app, Piclo Flex.

## Early discovery

This was a large and challenging project. The following represents a selection of design discovery artefacts that will show the development of the work up to the point whereby we decided to build an MVP.

<figure>
    <img alt="A tangled, looping line that gradually straightens out, representing the design process." src="/_assets/img/case-study__2024__exchange--01.png" />
    <figcaption>A mostly true representation of the project timeline.</figcaption>
</figure>

### High-level service area model

I decided to create a simple, yet powerful service area model to help the team align around some common terminology, and act as a way for us to chunk down design development. Think of this as a simple diagram that plots out the top level sections of what could become a more detailed service blueprint down the line.

Why?
- Start aligning around common terminology for consistency.
- Think holistically from the start, so we can see the bigger picture of what _could be_. Start with _some_ structure, even loosely held.
- Start lining up with service areas within our existing SaaS B2B app.
- Importantly, this also allowed us to think about the ground-level issues mentioned above in a wider context. This helped us begin mapping _where_ in a potential user journey problems were impacting, and identify where we might focus our attention initially.

<figure>
    <img alt="Miro board mapping a speculative end-to-end trading cycle as a row of service areas, from visibility and onboarding through eligibility, trading, contracts, operations, settlement and disputes, with sticky notes underneath." src="/_assets/img/case-study__2024__exchange--service.jpg" />
    <figcaption>Not entirely plucked out of the air - based on a build up of adjacent domain knowledge.</figcaption>
</figure>


### Establishing audience
Next, I spent some time with the team discussing various company archetypes that might be the most suitable customers to target for future research opportunities. We were considering the question: who might benefit most from our future secondary trading service, and why?

Within each, we also wanted to ensure we highlighted the different kinds of end users, their roles and potential concerns. __You can only solve business problems by designing solutions for humans__.

We were able to draw on experience and knowledge gained from building our current SaaS application, including prior research materials.

<figure>
    <img alt="Miro board describing a business archetype, an energy flexibility provider that manages home batteries, alongside two employee personas with their tasks and concerns." src="/_assets/img/case-study__2024__exchange--audience.jpg" />
    <figcaption>Rough Miro sketch of a business archetype, and some human roles in that business, with real world examples.</figcaption>
</figure>

In addition to the above, I also interviewed our in-house commercial team to understand, of all the energy markets available, which might be most lucrative to our audience? Something we would corroborate later via user interviews.

<figure>
    <img alt="Funnel diagram stacking energy markets from the Capacity Market at the top to DSO Flex at the bottom, with rough pound-sign ratings and notes on the size of each opportunity." src="/_assets/img/case-study__2024__exchange--stack.png" />
    <figcaption>Sketch detailing an estimated revenue stack for a specific business archetype.</figcaption>
</figure>

### Scenario mapping

Next, I led the team through some speculative scenario mapping. This was initially done in-person and then taken into Miro for further updates and feedback from the wider team.

Why?

- The challenge felt vast, and we weren't sure where to move next; this seemed like a good way to get the ball rolling.
- To align the team around a common overview of one potential customer journey.
- To surface useful knowledge the team already had and identify gaps.

<figure>
    <img alt="Large Miro scenario map for initiating a contract transfer, with rows of sticky notes covering before, during and after using the product, plus a list of high-level user tasks." src="/_assets/img/case-study__2024__exchange--scenario-map.jpg" />
</figure>

### Storyboarding

This was then adapted into a storyboard, which I was able to use as a means to walk external stakeholders through what we were thinking. This was presented in-person to National Grid ESO at their headquarters in Warwick.

Why?

- This formed part of an initial relationship building exercise. We wanted National Grid ESO to be amenable to making updates to their technology that would open up more possibilities for us.
- The main goal here was better alignment between Piclo and National Grid ESO as to the potential of our collaboration, and provided a valuable source of feedback as to how things were working from their end.
- These were a great tool for communicating just enough detail to ensure any feedback was focussed on the right things.


<figure>
    <img alt="Twelve storyboard frames of a low-fidelity transfer journey: discovering a new market, registering interest, agreeing to market rules, matching needs on a map, setting a deadline, reviewing bids and managing transfers." src="/_assets/img/case-study__2024__exchange--flow2.jpg" />
</figure>

<figure>
    <img alt="Swimlane storyboard of a transfer flow, with small screens arranged across lanes for each party involved, from the provider listing a contract to other providers bidding and the grid operator overseeing." src="/_assets/img/case-study__2024__exchange--flow1.jpg" />
</figure>

### Prototyping

Following feedback on the above, I next chose to create an interactive prototype that went through several rounds of iteration based on continued feedback.

Why?

- We wanted to create something more tangible we could use in conversations internally, and with potential end-users to start drilling down into various details.
- This also allowed us to start spinning off some early thinking about product terminology, information architecture and lining that up with patterns from our existing design system. This also served to help engineering colleagues begin planning a bit ahead of time should we proceed to build an MVP.

<figure>
    <img eleventy:ignore alt="Animation stepping through five early versions of the prototype as zoomed-out sets of Figma screens." src="/_assets/img/case-study__2024__exchange--iterations.gif" />
</figure>

Zooming in a bit, I was able to use our existing component library to produce a mix of low to mid fidelity mockups. Within each prototype iteration we could vary the fidelity depending on our objectives (different audiences could provide feedback in different ways).

<figure>
    <img alt="Low-fidelity screen for exchanging part of a contract, with date and time fields and a grid of weekday checkboxes circled and annotated 'How best to represent this?'" src="/_assets/img/case-study__2024__exchange--protodetail1.jpg" />
    <figcaption>Decidedly lower fidelity -  the goal being to focus feedback on a specific interaction.</figcaption>
</figure>

In the above, I was designing for a need to let end-users to select specific parts of a contract to sell. For this type of contract, market rules allowed for certain windows of time to be transferred to another organisation. We didn't have a pre-existing pattern for this, so it made sense to focus on a lower-fidelity view for clarity and speed.

The next screenshot shows a higher fidelity view that we intended to use internally with senior management to re-affirm buy-in, as well as something we could use in sales decks with potential investors.

<figure>
    <img alt="Higher-fidelity exchange screen with headline stats for active trades and market value, above a table of tradeable contracts showing bidding deadlines, product types and prices." src="/_assets/img/case-study__2024__exchange--protodetail2.jpg" />
    <figcaption>Higher fidelity - within the same prototype, reusing existing UI components to sell the potential.</figcaption>
</figure>



## A major learning moment

Up to this point, we had been focussed on a market called "STOR" or "Short Term Operating Reserve" - facilitated by National Grid ESO. This market was on the radar as we had some prior knowledge of it from earlier activities. 

However, mid-way through the work we attended a webinar communicating business processes governing how National Grid ESO intended the market to work, which included the following slide:

<figure>
    <img alt="National Grid ESO slide titled 'Business Rules', listing the technical parameters a transfer between two providers must meet to be accepted." src="/_assets/img/case-study__2024__exchange--rules.jpg" />
    <figcaption>Wish we'd seen this earlier.</figcaption>
</figure>

For us to productise a secondary trading solution, we realised we'd need to take into account the above market rules for transferring contracts between providers. 

Moreover, we became concerned about the impact the rules would have on liquidity potential.

In response, alongside Piclo's innovation lead, I conducted some __additional quant analysis of our existing customer base__, after which we concluded that our hunch was correct. In some instances, we could see that there may only be 1 or 2 orgs that could trade with one another. 

As a result, we decided to pause progressing design work for this specific market, and re-assess.

The key takeaway for us here was that __we needed a better way to evaluate candidate markets__ before proceeding any further. We settled on the following (loosely held) factors:

- __Potential scalability__: number of technologies allowed to participate and equivalent markets outside the UK
- __Strictness of market rules and dependencies__: how reliant would we be on third party orgs?
- __Cadence of primary contracts being awarded__: how likely is it that there could be regular recurring revenue?
- __Existing activity and competition__: is there already secondary trading happening, and is there any competition facilitating this already?
- __Alignment with broader business mission and strategy__: does it help decarbonisation?

<figure>
    <img alt="Grid of sticky notes scoring three candidate markets against scalability, strictness of rules, cadence, existing activity, competition and mission alignment, with the Capacity Market circled as a possible winner." src="/_assets/img/case-study__2024__exchange--criteria.jpg" />
    <figcaption>Not an exact science - using the above criteria to help make better decisions.</figcaption>
</figure>

After a short evaluation process we decided to change our focus to secondary trading within the UK Capacity Market for reasons as illustrated above.

## Back on track

It was important to expedite adapting our research goals to focus on the new market vertical. Thankfully, at a high level what we wanted to learn was essentially still the same:

<figure>

| Goal   | ~Rationale |
| -------- | ------- |
| Understand the true value of secondary trading in the capacity market  | Helps build commercial confidence and assess viability    |
| Understand how business as usual works end to end | Helps us get to know the status quo so we can see where we might innovate, and identify pain points     |
| Understand specific market dynamics, terms, mental models   | Helps us build a service that's actually going to work for end users   |

<figcaption>Broad goals, for which we'd design questions to help with discovery.</figcaption>

</figure>

Next, we could focus on gathering participants.

In the capacity market, participants are a matter of public record. We could look at public data and correlate this against our customer-base to select participants we already had good relationships with. We did this because we were finding feedback loops to be quite long, and getting a response from people we knew allowed us to iterate more quickly.

We could further shortlist participants by screening against some simple criteria.

- Do we have a prior relationship or an "in" with that business? 
- Is secondary trading in this market likely to be of high value to them?
- Does this org have prior experience of secondary trading? 

<figure>
    <img alt="A public Capacity Market register, a sample interview question about the market's importance, and a chart plotting companies by business value and secondary trading experience, with the top-right group circled." src="/_assets/img/case-study__2024__exchange--feedback.jpg" />
    <figcaption>Are they on the list? Are they relevant? What are the right questions to ask?</figcaption>
</figure>

The remainder of our research process at this point would consist of qualitative interviews with 1-2 staff members from the businesses we'd identified.

To aid these sessions, I wrote a conversation guide containing questions we'd like to ask all participants.

We'd spend 30 mins in Q&A and then approximately 20-30 mins focussing on gathering feedback on the latest version of our prototype.


## Prototyping the future

At this point we also had an important milestone approaching. 

As part of the innovation funding requirements, we had to attend and present updates at regular check-ins with a panel comprising people from government, Ofgem, National Grid ESO, and elsewhere. 

I was tasked with taking everything we had learned to this point and producing a prototype that could demonstrate a clear vision for the future.

<figure>
    <img alt="Zoomed-out Figma board titled 'Vision demo 1', with rows of prototype screens for the two sides of a trade." src="/_assets/img/case-study__2024__exchange--future1.jpg" />
    <figcaption>Version 1 - close, but not quite.</figcaption>
</figure>

After showing this prototype to several colleagues to gather more feedback I determined that the prototype needed to do more to tell a clear story, not just of the core value proposition, but to demonstrate what an end to end journey might look like, taking into account solving for multiple challenges. 

Not only that, but I'd made some UI choices that were also running counter to telling a clear story, and so decided to look to other platforms and services for inspiration.

<figure>
    <img alt="Exchange screen with tabs for different markets, a row of contract cards and a table of all listings with expiry times, capacity and prices." src="/_assets/img/case-study__2024__exchange--future2.jpg" />
    <figcaption>Feedback suggested this wasn't clearly expressing the value of the project.</figcaption>
</figure>

<figure>
    <img alt="Screenshots of consumer price comparison sites annotated with what works, such as product imagery, highlighted key numbers and a clear call to action, above a revised contract listing that borrows these ideas." src="/_assets/img/case-study__2024__exchange--future3.jpg" />
    <figcaption>Looking at heavily optimised pricing comparison services helped to identify how we could tell a clearer story through our prototype.</figcaption>
</figure>

<figure>
    <img alt="Journey diagram with two lanes, one for the company selling an agreement and one for the buyer, showing six numbered steps from listing an agreement through bids and counter-bids to signing off the transfer." src="/_assets/img/case-study__2024__exchange--future4.jpg" />
    <figcaption>Then, breaking down our prototype into clear and concise journey steps helped to orient viewers.</figcaption>
</figure>

<figure>
    <img alt="Zoomed-out Figma board titled 'Vision demo 2', with more detailed rows of prototype screens following the full journey step by step." src="/_assets/img/case-study__2024__exchange--future5.jpg" />
    <figcaption>The resulting prototype was more complex behind the scenes, but when presented to end-users and industry, communicated a much clearer proposition and vision.</figcaption>
</figure>

<figure>
    <img alt="Final exchange screen listing Capacity Market agreements as rows, each with a company logo, key figures, listing value and buttons to bid." src="/_assets/img/case-study__2024__exchange--future6.jpg" />
    <figcaption>The final contract listing screen.</figcaption>
</figure>

<figure>
    <img alt="First step of a 'Create new listing' flow, asking the user to choose a product type, with helpful notes alongside." src="/_assets/img/case-study__2024__exchange--future7.jpg" />
    <figcaption>I also prototyped a 'create new listing' flow to help illustrate our vision for how we could enable the creation of listings beyond just the one market.</figcaption>
</figure>

<figure>
    <img alt="Later step of the 'Create new listing' flow, with the chosen agreement summarised on the left and form sections for capacity, transfer period and guide price." src="/_assets/img/case-study__2024__exchange--future8.jpg" />
    <figcaption>This included some enhancements to our in-house form UX, which later made its way back into our main design system.</figcaption>
</figure>

## Wrapping up part 1

At this stage, myself and Piclo's innovation lead had:

1. Worked through several stages of early discovery.
2. Spent a lot of time gathering feedback internally at Piclo, from end-users and other businesses in energy using qualitative interview techniques.
3. We'd experienced the need to pivot mid-way through, and made improvements to our process and thinking as a result.
4. We'd iterated through multiple prototypes and learned a lot about what our product would need to get right in order to be successful.
5. We'd developed strong relationships with end users with deep knowledge we could draw on to improve our thinking.
6. We'd presented a cohesive vision to an industry panel to help further the project and raise Piclo's profile across the industry.

### What went well

- We successfully identified a market vertical with __potential to generate recurring revenue__.
- We successfully __cultivated key relationships__ with colleagues at National Grid ESO, Ofgem, and from within our pool of end-user partners (that would pay off significantly later).
- We were able to refine and iterate a future-vision prototype, and gather enough feedback to the point whereby we had enough __confidence to commence building an MVP__.
- In our prototypes, I was able to __borrow design patterns from common B2C platforms__ to better sell the value of what we might build.

### Reflections

- UK energy markets require deep levels of expertise to operate within successfully. Building this domain knowledge from a design perspective proved to be a significant challenge, something our broader team would wrestle with many times. Discussing this challenge with other design colleagues, we came up with the concept of __"min viable knowledge"__ i.e. what is the lowest level of expertise I need to develop in order to be able to make truly user-centric design choices? How might I approach that consistently? More granular research and learning goals?
- 0 to 1 projects can be uncertain and messy. There are lots of tools and frameworks out there that are used successfully and regularly to help expedite the process of driving success. How might I have used those to move faster and arrive at successful outcomes sooner? 


### Next steps -  validation

In line with overarching project milestones and requirements, we next wanted to take our prototype and build out an MVP that would allow us to perform some real-world end-to-end trades. The goal: validate the proposition and prove its value.

## Notes for hiring managers

- This project was part-funded with innovation money from UK government, which required we worked to a particular set of milestones overseen by a steering group. This largely dictated a slower pace than you might see happening in a more typical early stage startup. 
- User research notes, transcripts, quotes and other materials aren't shown here for privacy reasons. They're also just not that interesting to look at.
