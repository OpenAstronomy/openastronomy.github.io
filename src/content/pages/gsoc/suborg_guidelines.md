---
title: "GSoC Sub-organizations Guidelines"
show_main: false
---

# GSoC Sub-organizations Guidelines

OpenAstronomy has been accepted as an umbrella organization since 2016.
We will keep applying every year, but that doesn't mean we will always be selected.
If selected, we don't know the number of slots we will get till the contributor selection process ends.
However, it's our intention to keep the process fair for the sub-organizations and contributors.

## I want to propose a new sub-org, what do I do?

First, we recommend you to carefully read [Google's notes for first year organizations][Google-notes] and [the PSF guidelines for sub orgs][PSF-sub-orgs], which provide a general idea about the goals and concepts underpinning the Google Summer of Code program.
Then, you need to be a member of the OpenAstronomy team.
That process is simple (and free!).
You need to be an open-development organization and be related with astronomy.
Then make a pull-request to [our repository][OA repository] that adds your organization to [the `members.json` file][members file] (name, website, short description, and links to your repositories, chat, and mailing lists, you can copy an existing entry as a starting point) and your logo image to [`src/assets/members/`][members logos].
The steering council will review your application and give you feedback.

Once a member, you can start the path to participate on GSoC!
First you should get familiarized with the program, [Google's mentor guide] is a wonderful resource with detailed information of every aspect of it.
You need the following:

- Time! How much? a fair bit.
- Ideas! How many? One is enough. How good? more about this below.
- Helpers! You need mentors, at least two mentors per idea.

Let's look into that in more detail:

### Time

The program has a few deadlines, and Google won't extend them even if their system is down closer to the end.
They always allow a fair amount of time to submit whatever is needed.
To be on the safe side of this, OpenAstronomy imposes a deadline of one day before Google's.
You (and the contributors) will receive a reminder from the OpenAstronomy admins before such deadline.
If you fail to meet these deadlines, your sub-org and contributors may be affected.

Besides these deadlines, as a sub-org admin, you will have to keep track of all your contributors and mentors, following how they are doing with their projects and making sure they communicate regularly.

### Ideas

Normally organizations provide a list of ideas that can be done by a contributor in approximately three months (working full-time).
Take a look at what [Google says on how to define a project](https://google.github.io/gsocguides/mentor/defining-a-project-ideas-list), then look at [other ideas OpenAstronomy's members have proposed this or previous years.](../#current-projects).

To add your own, you will have to create a pull-request to [our repository][OA repository] following the [project template].
Take a look at [how others have done it before](https://github.com/OpenAstronomy/openastronomy.github.io/pull/182).
The admins and other members will review your ideas and provide feedback.
Once done, they will be merged and displayed on our website.

It's also possible that a contributor comes up with their own ideas!
That's OK, the only limitation is that either the contributor or the admin will have to find a mentor for that idea who is familiar with the programming language, the repository, and the idea in itself.

#### What do I need for my project idea?

Everything you need is a title and description of the project idea, a set of requirements for potential contributors (_e.g._, proficiency with `astropy.tables` and `astropy.units`), and a list of potential mentors.
In addition, please link any related issues or tickets to the project idea, if any.
Lastly, make sure to indicate the level of difficulty of the project.

In case your project idea already has specific milestones, please add them so as to make contributors aware when they start writing their applications.
If the project milestones are open ended and you would like to hear input from other members of the community, that is fine too!

Please also publish an AI usage policy for your organization (or link your existing one) where applicants can find it.
Our [contributor guidelines][contributor guidelines] tell applicants to assume AI-generated contributions are **not** allowed for any sub-org that has not published a policy.

### Mentors

For each project idea you need to have at least **two** mentors that are committed to participate in the programme.
The mentors need most importantly be familiar with the repository, normally they are real core-contributors, they need to be familiar with the idea and have some idea on how that could be implemented.

The mentors also need to have time for the project.
We expect around 10 hours per week (not only to mentoring, but to the organization in itself).
That time varies depending from project to project.
But a minimum they should have a hour per week to discuss with the contributor their progress.
This can be done as a 10 minutes per day, or as 1 hour video-call.
Additionally, they will need to review the contributor code, discuss with other core-members to tell how the project is evolving, etc.

Why two mentors?
Mentors do also need a break.
They may have a conference to attend or simply they could disappear from the project.
Having two mentors will help to keep continuity to the contributor project and brings more knowledge to the table.

Though we are not too strict about the availability of the mentors, we suggest they are at least one hour per day - in a non-crazy hour for contributor and mentor - at the chat room of the organization.
So the contributor can ask the questions needed on the organization room.
This can also be done via e-mail, but we believe the contributors need to familiarize with the rest of the community.
(Plus others can help if the mentors are unavailable).

Oh, and yes, **you** as an admin can also be a mentor and don't forget to tell them to read [Google's mentor guide].

## GSoC starts

If we are accepted... what happens next?
First, have you read the [mentor guide][Google's mentor guide]?
If so, take a look at it again as a refresher!

The application period for contributors is open just for two weeks.
However, they will know for more than a month which organizations are participating.
Even some contributors start to show interest from way before that!!
The main purpose of the programme is to bring new contributors to the organization, so the more they engage the better for your organization.
The dream contributor is that one that becomes mentor in the following years.

### Contributor application

Contributors will apply via the [GSoC portal][GSOC].
If it's not there, their application doesn't count.
OpenAstronomy offers [a template for the contributors to apply][template-application-wiki].
Some sub-orgs require they post publicly their application on their wiki ([see for example SunPy's](https://github.com/sunpy/sunpy/wiki/GSoC)), others don't.
In any case, it's good to encourage the contributors to share the draft of their applications with the mentors, so they can improve it before the deadline.

OpenAstronomy has [certain rules for an application to be considered][contributor guidelines].
Familiarize with them to be able to inform your mentors and candidates.

### Applications evaluation

Each sub-org will have to evaluate the contributor application using a shared document within all the mentors.
The OpenAstronomy administrators will share them with you.
There you will grade the application, the engagement of the contributor shown so far, the quality of the pull request to the organization, any notes from an interview you may do, etc.

### Slots allocation

Based on the numbers of mentors and outstanding applications your sub-org has, you will ask for a number of slots to the Open Astronomy administrators.
They will collect these numbers from all the other sub-org and request them to Google.

Google will then, after a few days, tell us how many slots we get.
Nobody knows them _a priori_, and they vary considerably year after year.

If the number of slots obtained is smaller than the requested, then the steering council will decide the distribution of the slots using the following points as guidelines:

- The quality of the contributor proposal.
  A well-structured and described project will be favored, not simply a copy/paste from the ideas page.
- What's the likelihood of that candidate contributor to become a long-term contributor?
  How has the contributor engaged till now?
- Commitment of the mentors for the project.
  The mentors need to show they have committed to the sub-org and OpenAstronomy, and evidence of this will make the slot more likely to be allocated.
  For example, it is best to have mentors that have contributed to the organization's codebase and are familiar with the language and topic.
- A project that enables cooperation with other sub-organizations of OpenAstronomy will generally be favored over those that do not.

The process will be as open as possible including only the admins and mentors involved in the selection.
Remember, we cannot disclose any information on contributor selection to the contributors before Google announces the selected contributors

Note that OpenAstronomy usually assigns one slot for first year sub-orgs.
That may change in a case-by-case basis, e.g., the sub-organization already participated in previous editions of the GSoC (either by itself or with another umbrella organization), or has experience with similar coding outreach programmes, such as [ESA-SOCIS][ESA-SOCIS].

### Evaluations

Once the programme starts each contributor has to pass an evaluation per month.
If one of them is failed (or not provided on time), the contributor cannot continue in the programme and therefore, not get paid.

OpenAstronomy has also set a set of obligations for the contributors to do during the programme (e.g., a blog post every two weeks describing their progress, telecommuting with mentors weekly).
If they are not followed the administrators will fail the contributors.

[OA repository]: https://github.com/OpenAstronomy/openastronomy.github.io
[contributor guidelines]: ../contributor_guidelines/
[project template]: https://github.com/OpenAstronomy/openastronomy.github.io/blob/main/src/content/pages/gsoc/_project_template.md
[Google's mentor guide]: https://google.github.io/gsocguides/mentor/
[GSOC]: https://summerofcode.withgoogle.com/
[members file]: https://github.com/OpenAstronomy/openastronomy.github.io/blob/main/src/data/members.json
[members logos]: https://github.com/OpenAstronomy/openastronomy.github.io/tree/main/src/assets/members
[ESA-SOCIS]: https://www.esa.int/Enabling_Support/Space_Engineering_Technology/SOCIS_The_ESA_Summer_of_Code_in_Space
[Google-notes]: https://google.github.io/gsocguides/mentor/notes-for-first-year-organizations
[PSF-sub-orgs]: https://python-gsoc.org/mentors.html#sub-orgs
[template-application-wiki]: https://github.com/OpenAstronomy/openastronomy.github.io/wiki/Contributor-Application-template
