---
title: "GSoC Contributor Application Guidelines"
show_main: false
---

# GSoC Contributor Application Guidelines

## What are the requirements to be accepted for GSoC?

[These are the formal requirements from Google](https://developers.google.com/open-source/gsoc/faq#what_are_the_eligibility_requirements_for_participation).
There are OpenAstronomy requirements below which you have to also follow.

## Communication Channels

OpenAstronomy is a collaboration between open source astronomy and astrophysics projects and as such, to get help you need to find the specific project you are interested in:

1. Browse the **[Project Ideas Page](../)** to find a project that interests you.
2. Check the **[Members Page](../../members/)** to find the chat links for that specific organization.
3. Join _that_ organization's chat to talk to the mentors!

---

If you want to apply to OpenAstronomy to participate in GSoC there are many things you can do to improve your application.
Many of OpenAstronomy's admins and mentors have participated in previous editions of GSoC with their projects, so will be able to answer any questions you might have, come talk to us on the [OpenAstronomy discourse](https://community.openastronomy.org).

There are many guidelines on writing a good application and how to increase your chances, this guide covers the most important things to OpenAstronomy.
However, you should also checkout the [GSoC Contributor Guide], the [Python Software Foundation] guide, the [Astropy GSoC guidelines] and the [SymPy Guidelines] to name but a few.
It is also possible each OA member has their own guidelines, and you should ask when you interact with them.

Some general pointers to follow are:

- **The better we know you, the better we can judge your application.**
  There are many ways to get yourself known by the community, you can introduce yourself through the [OpenAstronomy discourse](https://community.openastronomy.org) and if required contact the mentors to know more about certain project.
  However, contacting mentors through email or direct messages is discouraged, and contacting them in public channels is the preferred way to provide answers to multiple people at once.
  Also, when you have a particular idea in mind, get in touch with that project and introduce yourself.
  For example, `astropy` projects, follow the contact guidance in the [Astropy GSoC guidelines] and do not send an email to the `astropy-dev` list.
  It is important that you follow the guidance for any OA member.

- **Become a user!**
  Download one or more of the OpenAstronomy projects and start experimenting with the code.
  Look at the [latest pictures of the million degree Sun] with [SunPy](http://sunpy.org/), [volume render a simulation of the galaxy] with [yt](http://yt-project.org/), or [plan some astronomical observations] with [Astropy](http://www.astropy.org)
  There are loads of things to do with all the projects involved with OpenAstronomy, get involved!

- **Set yourself up as a developer.**
  Create an account on [GitHub](http://github.com) or the code hosting platform the organization is using.
  Don't know how to use [git](http://www.git-scm.com/)?
  Don't worry, there are lots of git [tutorials](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git) [online](http://gitimmersion.com/) that will help you to get quite confident with it in a short time.
  Also both the [Astropy](http://docs.astropy.org/en/stable/index.html#developer-documentation)
  and [yt](http://yt-project.org/docs/dev/developing/developing.html) developer guides are great reads no matter what project you are thinking of working on.

<br/>

**If you get stuck ask on the forum or chat rooms for help and volunteers will support you.**

<br/>

0. **Respect the AI policies.**
   Much of the [open source ecosystem is suffering due to AI slop][ai-slop-summary].
   Do not contribute low-quality AI-generated content; doing so can lead to being banned from the organization.
   This is not to say that you cannot use AI tools to support learning.
   You can, while following each sub-org policy.
   If you do not find an AI policy for a sub-org, assume AI-generated contributions are not allowed.

1. **Start to be a developer.**
   Checkout the issue lists of the projects to see if there is something that you could do.
   **You will be expected to submit a pull request to one of the OpenAstronomy projects before you submit your application (it does not have to be accepted, but it has to be something that shows your code abilities!).**
   This requirement is to show that you know how git, github, pull requests and reviews work and allows mentors to evaluate all applications based on a real code contribution, instead of e.g., the name of a specific school.
   GSoC is a short program and we want to make sure you are ready to start immediately.
   If you have previously contributed to OpenAstronomy projects, you can point to those pull requests, too.

2. **Plan your application.**
   Think which is your favorite project from the [ideas page](../) or think of a new one that will help out one of the OpenAstronomy members.
   Prepare a plan on how you will tackle that project and the time it will take you to solve it.
   Do not worry much in providing exact dates, but plan it as best as you can (if you are planing to have some holidays during the GSoC programme, then you should mention it too).
   Use [our application template][gsoc-proposal-template] to describe how you plan to do the work during the programme.
   Add your draft to the [gsoc-proposals](https://github.com/OpenAstronomy/gsoc-proposals) repository.
   This is where to receive feedback.
   Follow the instructions in that repository to submit your proposal.
   Also, don't be afraid to ask your potential mentors for help.
   Don't be shy when describing yourself!

3. **Submit your application.**
   Besides adding your proposal to the gsoc-proposals repository, you also need to [submit your application](https://summerofcode.withgoogle.com/) before the deadline.
   **You must submit it there.**
   Do not leave it to the last minute: Google's, and Google does not extend their deadline for anyone.
   If you want a review, you need to give mentors at least 7 days notice.
   Please include the sub-org name at the start of your proposal title as `[<sub-org>] <project name>`,
   where `<suborg>` should be the name of the sub-org in lower case (e.g., `sunpy`, `stingray`, `radis`),
   or the combination of two if it's the case (e.g., `astropy|sunpy`).
   Only proposals present in both the gsoc-proposals repository and the GSoC platform will be considered.

### How are applications evaluated?

Mentors grade each application on the quality and feasibility of the proposal, your engagement with the community so far, and the pull request(s) you submitted to the organization.
The evaluation of a candidate has never been solely based on a proposal.
This means that besides having a good proposal and demonstrating its understanding (through an interview or community interactions), everything such as: How the candidates interact with the community, answer to feedback, welcome and help other candidates to get started, and much more, counts!
GSoC is not a competition or an internship/job, GSoC is a programme to build community and develop future maintainers.
So we grade things in a different manner than say a University would.

### What are my obligations as a contributor during GSoC?

We expect you to:

- Be online and active during your working hours in your sub-organization chat.
- Publish a blog post at least once every two weeks.
  Your blog's RSS feed is registered when you are accepted, and your posts are tracked on the [contributor blogs page](../../universe-oa/).
- Participate in weekly meetings with your mentors.
- Contact your mentors or OpenAstronomy admins early if any issues arise.

[SymPy Guidelines]: https://github.com/sympy/sympy/wiki/GSoC-2017-Application-Template
[Python Software Foundation]: http://python-gsoc.org/
[GSoC Contributor Guide]: https://google.github.io/gsocguides/student/
[Astropy GSoC guidelines]: https://github.com/astropy/astropy/wiki/GSoC-Guidelines
[latest pictures of the million degree Sun]: https://docs.sunpy.org/en/stable/generated/gallery/map/composite_map_AIA_HMI.html
[volume render a simulation of the galaxy]: http://yt-project.org/docs/dev/quickstart/volume_rendering.html
[plan some astronomical observations]: https://learn.astropy.org
[gsoc-proposal-template]: https://github.com/OpenAstronomy/gsoc-proposals/blob/main/template.md
[ai-slop-summary]: https://redmonk.com/kholterhoff/2026/02/03/ai-slopageddon-and-the-oss-maintainers/
