---
layout: post
title: First Open astronomy - Software Carpentry workshop
date: 2016-01-15
---

This last week (11-15 January 2016) we have offered the first Open Astronomy workshop for the UK astronomy community.
The [workshop](http://openastronomy.org/2016-01-11-Sheffield/) consisted on a 2-day basic [Software Carpentry workshop](http://software-carpentry.org/) with an additional 3-day introduction to the python tools available for carrying research in astronomy using Python. The attendees were mostly PhD students in Astrophysics from the University of Sheffield, however there were also representation of other fields (mathematics, medicine, ecology), from other universities (St. Andrews, Reading) and at different stages in their careers (post-docs).

We were four instructors ([Sam](https://github.com/CyclingNinja), [Drew](https://github.com/drewleonard42), [Stuart](https://github.com/cadair) and [David](https://github.com/dpshelio)) and counted with the help of [Tom](https://github.com/astrofrog/) (an astropy developer) for one of the days. 
Though most of us are with a background in Solar Physics we delivered a workshop general enough that any one from any field could benefit of it.
The leading responsabilities were distributed in a way that none of us were teaching more than three hours in one go.
Being four it allowed us to split the lectures alternating a day of teaching with a day of helping.
We used the red-green post-it technique suggested by software carpentry as a way to know how people were getting on during the sessions, also, for every session the students were asked to use these post-it to give us feedback on the session (green for something good you've learnt, red for something that can be improved).
This not just helps us for the next workshop we do, but it also helped to the next instructor that day!

We could not get a 100% smooth class without installation problems - as usual - however, we were very close! 
<-- should we put the following at the end? -->
Only one person from the whole class has troubles with the jupyter notebook - it simply was not able to execute any command within. We didn't manage to fix the problem, but probably it was the oldest laptop (running Windows 7) in the class with a variety of python installations (anaconda, enthough, ...).
Beside that case, we come across a couple of other problems in another windows machine, in one of them `git log` was blocking the screen *** Can you ask Ali to try again and press `q`
whereas other person's machine could not open the text editor (Notepad++ in this case) when executing `commit` (or `merge` with the default message).

The first day we teach the basic use of the command line and git, this way we could encourage everyone to use it for the rest of the week, building up the muscle memory of the basic commands to keep track of your work (`add`, `commit`, `push`). 
Each day we were updating the official repository with lesson templates in jupyter notebooks format, where the explanation of the class were available, and the code cells were empty for them to fill while following the lecture. 
In this way everyone had to `fork` our repository on github, then `pull` at the start of every session from `upstream` and `push` at the end to their `origin`.
Therefore getting the basics on how to work in a such an scenario where the repositories are updated at different times.
In the other hand, thanks to the visualisations in github we can see how all [these fork evolved](https://github.com/OpenAstronomy/2016-01-11_Sheffield_Notes/network).

We found a bug on SunPy during one of the sessions, and we use the opportunity to teach what to do in these cases: fill an issue in github and provide the information needed so the developers can replicate such error.

twitter comments

picture

Mind blows!
 - table to latex!
 - readline works very easily
 - people trying to use in their own data
 - coordinates discussions..
 
If you want a workshop... if no one else can help... and if you can find them... maybe you can hire... The SD2-Team.
 
