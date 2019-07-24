---
title: Re-imagining how we made emails at TotallyMoney
intro: Improving the quality of life for team members working on new HTML email projects by standardising the email design language and simplifying the build process.
hero: case-study__email__hero.jpg
date: 2019-07-14
theme: 
---


## Background

During my time at TotallyMoney, email was a key way in which we communicated with our customers. Through a mix of monthly service updates, personalized offers or engaging guide content, we managed to maintain a very high active customer base as well as generate significant amounts of revenue. 

The email touchpoints in our CRM programme were well thought out and effective, yet as the business grew, and our efforts increased in sophistication and pace, the team began to feel the strain. Through taking feedback from colleagues and looking at the challenges I was having in my own workflow, three key problem became apparent that we needed to address:

### Key problems

<ol>
    <li>Design assets were silo’d and undocumented, leading to inconsistencies in our email design language and uncertainty for new designers joining the team.</li>
    <li>Hard-to-handle HTML, as well as a high technical barrier to entry for designers and marketers made it hard for others to contribute as well as maintain.</li>
    <li>Very few people in the business were able to create new emails leading to bottlenecks and resource crunches.</li>
</ol>

### Wider business context

At the time the work was commencing, we were aware that a company rebrand was on the horizon, and so the project provided an opportunity to audit and slim down our email ecosystem with a view to more easily rolling out a brand refresh at a later date.

We were also transitioning to a new data-driven CRM platform, and so we needed to spend time refactoring our email codebase to better leverage the new environment. 

## Outcomes

Before diving in to the solutions, it felt important to try and express the problems in terms of desirable outcomes. In this instance, there were some fairly clear-cut things we needed, namely:

<ol>
    <li>Design colleagues should have a set of robust, easy-to-use assets to work from.</li>
    <li>Marketing colleagues should be empowered to self-serve new emails efficiently.</li>
    <li>Engineering colleagues should be able to access all email .html in a way that suits engineering workflows.</li>
</ol>

### Keeping things pragmatic

With three broad outcomes, a lot of questions arose around what sorts of solutions would work best, spawning a whole bunch of sub questions about execution, implementation, knowledge sharing and so on. It was really tempting to spend a lot of time researching and exploring lots of different options, to try them out and see what fits best, however we needed to get moving quickly, and so a few quick decisions were made to help things along. Specifically;

* The team was already using Sketch, and so we'd focus our visual work here.
* We would try to mirror the breakdown of email designs and templates consistently between our sketch documents and codebase, to make working across both design and development of email easy to understand and maintain.
* We would document the email creation process thoroughly so anyone who needed to get involved could go to a single place to find out how to do what and where.

## Easy-to-use assets

The team was already using Sketch, and so we took the decision right away to focus our efforts here on producing a library file containing all of our emails broken down in to their various elements, based loosely upon atomic design principles.

<figure>
  <img src="/_assets/img/case-study__email__stylekit.jpg" />
</figure>

One of the key things to consider when producing any design asset or library that will be used by others is to ensure the usability of your files. A lot of time was spent naming things correctly and ensuring the structure of the document, while not perfect out of the gate, made sense and was easily navigable by the team.

<figure>
  <img src="/_assets/img/case-study__email__symbols.jpg" />
  <figcaption>Clearly not perfect, by a sensible starting point.</figcaption>
</figure>

Spinning up a new email design from one of the base templates takes mere seconds, whereas previously it would need to have been located in a job folder on the company server.

<video controls autoplay loop>
  <source src="/_assets/mov/case-study__email__template.mp4" type="video/mp4">
  <p>This browser does not support the video element.</p>
</video>

## Empowering Colleagues


## More accessible codebase

XXXX XXXX

<figure>
  <img src="/_assets/img/case-study__email__repo.jpg" />
  <figcaption>Clean, simple codebase, with installation/orientation README for newcomers.</figcaption>
</figure>


