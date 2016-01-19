---
layout: post
title: First Open astronomy - Software Carpentry workshop
date: 2016-01-15
---

Last week (11-15 January 2016) we ran the first Open Astronomy workshop for the UK astronomy community.
The [workshop](http://openastronomy.org/2016-01-11-Sheffield/) consisted on a 2-day basic [Software Carpentry workshop](http://software-carpentry.org/) with an additional 3-day introduction to the Python 
tools available for carrying out research in astronomy using Python.
The audience were mostly PhD students in Astrophysics from the University of Sheffield. However, there were also attendees from other fields (mathematics, medicine, ecology), from other universities 
(St. Andrews, Reading) and at different stages in their careers (post-docs).

The workshop had four instructors ([Sam](https://github.com/CyclingNinja), [Drew](https://github.com/drewleonard42), [Stuart](https://github.com/cadair) and [David](https://github.com/dpshelio)), who 
were also helped by [Tom](https://github.com/astrofrog/) (an astropy developer) for one of the days.
Though most of us have a background in Solar Physics we delivered a workshop general enough that any one from any field could benefit from it.
The responsibilities of being 'lead instructor' were distributed such that none of us were teaching for more than three hours in one go.
Since there were four of us, this allowed us to arrange the lectures so that we each alternated between a day of teaching and a day of helping.
We used the red-green post-it technique suggested by Software Carpentry as a way to guage how people were getting on during the sessions.
Also, after every session the students were asked to use these post-its to give us feedback on the session (green for something good they learned, red for something that could be improved).
This not just helps us for the next workshop we do (planned for September this year - watch this space), but it also helped the next instructor that day!

We could not get a 100% smooth class without installation problems - as usual - but we were very close! 
<-- should we put the following at the end? -->
Only one person from the whole class had troubles with the jupyter notebook - it simply was not able to execute any commands.
We didn't manage to fix the problem, but it was probably the oldest laptop (running Windows 7) in the class with a variety of Python installations (anaconda, enthought, ...).
Beside that case, we came across a couple of other problems on other Windows machines - on one of them `git log` was blocking the screen while another person's laptop could not open the text editor 
(Notepad++ in this case) when executing `commit` or `merge` with the default message.

On the first day we taught the basic use of the command line and git.
This way we could encourage everyone to use it for the rest of the week, building up the muscle memory of the basic commands to keep track of your work (`add`, `commit`, `push`).
Each day we were updating the official repository with lesson templates in jupyter notebook format, where the explanation of the class was available, and the code cells were empty for them to fill while 
following the lecture.
In this way everyone had to `fork` our repository on github, then `pull` at the start of every session from `upstream` and `push` at the end to their `origin`.
This helped everyone get used to the basics of how to work with repositories which are being updated at different times.
Thanks to the visualisations in github we can also see how all [these forks evolved](https://github.com/OpenAstronomy/2016-01-11_Sheffield_Notes/network) during the workshop.

During one of the sessions we found a bug in SunPy, and we used this as an opportunity to teach what to do in these cases: fill out an issue on github and provide the information needed for the 
developers to reproduce the error.

twitter comments

picture

Mind blows!
 - table to latex!
 - readline works very easily
 - people trying to use in their own data
 - coordinates discussions..
 
If you want a workshop... if no one else can help... and if you can find them... maybe you can hire... The SD2-Team.
 
