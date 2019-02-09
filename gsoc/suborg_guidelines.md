---
layout: default
title:  "GSoC SubOrg Guidelines"
show_main: false
---

# GSoC SubOrg Guidelines

OpenAstronomy has been accepted as an umbrella organisation since
2016. We will keep applying every year, but that doesn't mean we
will always be selected. If selected, we don't know the number of
slots we will get till the student selection process ends. However,
it's our intention to keep the process fair for the suborganisations
and students.

## I want to have to become a sub-org admin, what do I do?

First you need to be a member of the OpenAstronomy team. That process
is simple (and free!). You need to be an open-development organisation
and be related with astronomy. Then make a pull-request to [our repository][OA repository]
adding a logo, a short description, etc. 
Follow the instructions in the example at the bottom of [the `memembers.yaml` file][members PR].
The steering council will review your application and give you feedback.

Once a member you can start the path to participate on GSoC! 
First you should familiarised with the program, [Google's mentor guide] is
a wonderful resource with detailed information of every aspect of it.
You need the following:
- time! How much? a fair bit. 
- ideas! How many? One is enough. How good? more about this below.
- helpers! You need mentors, at least two mentors per idea.

Let's look into that in more detail:

### Time

The program has a few deadlines, and Google won't extend them even if
their system is down closer to the end. They always allow a fair amount
of time to submit whatever is needed. To be on the safe side of this, 
OpenAstronomy imposes a deadline of one day before Google's. You (and the students)
will receive a reminder from the OpenAstronomy admins before such deadline.
If you fail to meet these deadlines, your sub-org and students may be affected.

Besides these deadlines, as a sub-org admin, you will have to keep track of
all your students and mentors, following how they are doing with their projects
and making sure they communicate regularly.

### Ideas

Normally organisations provide a list of ideas that can be done by a student
in approximately three months (working full-time). Take a look at what [Google
says on how to define a project](https://google.github.io/gsocguides/mentor/defining-a-project-ideas-list),
then look at [other ideas OpenAstronomy's members have proposed this or previous years.](./#ideas-pages).

To add your own, you will have to create a pull-request to [our repository][OA repository]
following the [template](https://github.com/OpenAstronomy/openastronomy.github.io/blob/master/_projects/_template.md).
Take a look at [how others have done it before](https://github.com/OpenAstronomy/openastronomy.github.io/pull/182).
The admins and other members will review your ideas and provide feedback. Once
done they will be merged and displayed on our website.

It's also possible that a student comes up with their own ideas! That's OK, the
only limitation is that either the student or the admin will have to find a 
mentor for that idea who is familiar with the programming language, the repository,
and the idea in itself.

### Mentors

For each project idea you need to have two mentors that are committed to participate
in the programme. The mentors need most importantly be familiar with the repository,
normally they are real core-contributors, they need to be familiar with the idea and
have some idea on how that could be implemented.

The mentors also need to have time for this!!! a lot of time!! We expect around 
10 hours per week (not only to mentoring, but to the organisation in itself). That
time varies (a lot!) depending from project to project. But a minimum they should
have a hour per week to discuss with the student their progress. This can be done
as a 10 minutes per day, or as 1 hour video-call. Additionally, they will need
to review the student code, discuss with other core-members to tell how the project
is evolving, etc.

Why two mentors? Mentors do also need a break. They may have a conference to attend
or simply they could disappear from the project. Having two mentors will help to
keep continuity to the student project and brings more knowledge to the table.

Though we are not too strict about the availability of the mentors, we suggest
they are at least one hour per day - in a non-crazy hour for student and mentor -
at the chat room of the organisation. So the student can ask the questions needed
on the organisation room. This can also be done via e-mail, but we believe the
students need to familiarise with the rest of the community. (Plus others can 
help if the mentors are unavailable).

Oh, and yes! you as an admin can also be a mentor. And don't forget to tell 
them to read [Google's mentor guide].

## GSOC starts

If we are accepted... what happens next?
First, have you read the [mentor guide][Google's mentor guide]? If so, take a 
look at it again as a refresher!

The application period for students is open just for two weeks. However, they
will know for more than a month which organisations are participating. Even 
some students start to show interest from way before that!! The main purpose
of the programme is to bring new contributors to the organisation, so more they 
engage better for your organisation. The dream student is that one that becomes
mentor in the following years.

### Student application

Students will apply via the [GSoC portal][GSOC]. If it's not there, their
application doesn't count. OpenAstronomy offers a template for the students to
apply. Some suborgs require they post publicly their application on their wiki
(see for example [SunPy's](https://github.com/sunpy/sunpy/wiki/GSoC)), others
don't. In any case, it's good to encourage the students to share the draft of
their applications with the mentors, so they can improve it before the deadline.

OpenAstronomy has [certain rules for an application to be considered][student
guidelines]. Familiarise with them to be able to inform your mentors and
candidates.

### Applications evaluation

Each sub-org will have to evaluate the student application using a shared
document within all the mentors. The Open Astronomy administrators will 
share them with you. There you will grade the application, the engagement
of the student shown so far, the quality of the pull request to the organisation,
any notes from an interview you may do, etc.

### Slots allocation

Based on the numbers of mentors and outstanding applications your sub-org
has, you will ask for a number of slots to the Open Astronomy administrators.
They will collect these numbers from all the other sub-org and request them
to Google.

Google will then, after a few days, tell us how many slots we get. Nobody 
knows them *a priori*, and they vary considerably year after year.

If the number of slots obtained is smaller than the requested then the steering
council will decide the distribution of the slots using the following points as guidelines:

- The quality of the  student proposal. A well-structured and described project will be favored.
not simply a copy/paste from the ideas page.
- What's the likelihood of that candidate student to become a long-term
contributor? How has the student engaged till now? 
- Commitment of the mentors for the project. The mentors need to show they have committed to the sub-org and OpenAstronomy, and evidence of this will make the slot more likely to be allocated.
For example, it is best to have mentors that have contributed to the organisation's code base and are familiar with
the language and topic.
- A project that enables cooperation with other sub-organisations of OpenAstronomy will generally be favored over those that do not.

The process will be as open as possible including only the admins and mentors
involved in the selection. Remember, we cannot disclose any information on student 
selection to the students before Google announces the selected students

### Evaluations

Once the programme starts each student has to pass an evaluation per month. 
If one of them is failed (or not provided on time), the student cannot 
continue in the programme and therefore, not get paid.

OpenAstronomy has also set [a set of obligations][] for the students to do
during the programme (eg., a blog post every two weeks with their progress). If
they are not followed the administrators will fail the students.


[OA repository]: https://github.com/OpenAstronomy/openastronomy.github.io
[student guidelines]: ./student_guidelines.html
[Google's mentor guide]: https://google.github.io/gsocguides/mentor/
[GSOC]: https://summerofcode.withgoogle.com/
[members PR]: https://github.com/OpenAstronomy/openastronomy.github.io/blob/master/_data/members.yaml
