---
title: "Google Summer of Code, open proposals and claims of plagiarism"
date: 2026-06-01
summary: "A summary of the roll out of the new system for GSoC 2026."
---

This is our 10th anniversary participating in [GSoC](https://summerofcode.withgoogle.com/) as Open Astronomy,
and a few more years for us, the org-admins, who have been taking part under the [Python Software Foundation](https://python-gsoc.org/)
umbrella before OA was formed.

This year was the first one we've enforced the open proposal system for all the sub-organisations involved under our umbrella.
We did it as a mechanism to avoid LLM slop and to make it as transparent as possible for all the participants, after all,
[SunPy had been using this approach since 2013](https://github.com/sunpy/sunpy/wiki/Google-Summer-of-Code#editions) without any problems.

This time, however, after the selections were announced we got a message from GSoC admins about a complaint involving plagiarism between proposals.
We've spent a whole week analyzing the situation involving all of the three OA organization admins, the lead mentor of the project involved,
and GSoC admins.
Below, we detail some lessons learnt about this situation to help avoid this happening in the future.

1. Inspiration or plagiarism.
   Using an open proposal approach (and mostly now in the age of LLMs),
   it's not surprising to find that people may get inspiration from others when trying to propose a solution to a problem.
   And, that's OK! What's however unethical is to not attribute where the idea comes from, whether from discussing with mentors,
   from a chat with others, or cooked up by an LLM.
   As an organisation that is based on Research Software that supports researchers, this is a serious issue.
   This will be clearly highlighted on our template for future editions.

2. Evaluation.
   The evaluation of the candidates never have been solely based on the proposals.
   In fact, the proposal document itself is the least important part of the application.
   We need that to document the work plan and your background and availability but nothing more.
   After all the details of the work, in the ideal case, is the result of a collaboration with mentors and other contributors of the hosting project.
   We've got that as [the first point of our guidelines: The better we know you, the better we can judge your application](https://openastronomy.org/gsoc/contributor_guidelines.html).
   This means that besides having a good proposal and demonstrating its understanding (through an interview),
   everything such as: How the candidates interact with the community, answer to feedback, welcome and help other candidates to get started, and much more, counts!
   GSoC is not a competition or an internship/job, GSoC is a programme to build community and develop future maintainers.
   This is already mentioned in our guidelines, but we will make sure it is more specific.

3. Gaming the system?
   This year was the first time we used github pull requests as a method to publish the proposals openly.
   And for the first time, we found multiple interpretations to the rules we set.
   From opening an empty pull-request before the deadline and not sharing the content until just after, to uploading all the proposals in a single commit.
   There were also cases of using `pdf` rather than `md` files or grouping multiple proposals in a single pull-request.
   The other purpose of open proposals, is to follow the [open development approach that is followed by our organizations (second point of our principles)](https://openastronomy.org/#principles-of-openastronomy).
   As with software, the candidates are expected to work in the open,
   show the evolution of their proposals in multiple commits and iterating on their draft as it gets to a complete status.
   Ideally, even with time enough to get feedback from the community (not just the mentors).
   This also helps to show who comes with original approaches and avoids having to find out whether some ideas were shared before on different channels.
   This time, we are going to assume that the purpose and instructions weren't made clear, but it won't be the case in future editions.
   Single commit applications will be ignored, at the deadline all the PRs will be merged and no further modifications will be considered,
   and applications that do not use the template format will be excluded.
