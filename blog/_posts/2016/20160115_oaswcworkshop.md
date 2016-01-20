-------------------------------------------------------------------------------
layout: post
title: First Open astronomy - Software Carpentry workshop

date: 2016-01-15
----------------

Last week (11-15th January 2016) saw the first Open Astronomy workshop held at The University of Sheffield for the UK astronomy and solar physics communities. The first two days of the [workshop](http://openastronomy.org/2016-01-11-Sheffield/) consisted of the core syllabus of [Software Carpentry](http://software-carpentry.org/), covering git, bash and an introduction to programming with Python. The last three days provided an introduction to carrying out research in astronomy using Python. The attendees were mostly PhD students in Astrophysics from the University of Sheffield, however there were also representation of other fields (mathematics, medicine, ecology), from other universities (St. Andrews, Reading) and at different stages in their careers (post-docs).

The workshop was taught by four different instructors ([Sam](https://github.com/CyclingNinja), [Drew](https://github.com/drewleonard42), [Stuart](https://github.com/cadair) and [David](https://github.com/dpshelio)) with the help of [Tom](https://github.com/astrofrog/) (an Astropy developer) on Thursday.
We all brought different expertise and shared the teaching out to keep the workshop lively over a gruelling five days none of us taught more than three hours in one go, and we alternated days between teaching and assisting.
We used the red-green post-it technique suggested by software carpentry as a way to know how people were getting on during the sessions, also, for every session the learners were asked to use these post-it notes to give us feedback on the session (green for something good you've learnt, red for something that can be improved).
This not just helped us for the next workshop, but it also helped to the next instructor that day!

<img src="./IMG_20160111_094506.jpg" alt="David teaching bash" align="right" width="40%">

As usual there were some software setup issues at the beginning of the week, however we were very close!
Only one person from the whole class has troubles with the Jupyter notebook - it simply was not able to execute any command within. We didn't manage to fix the problem, but probably it was the oldest laptop (running Windows 7) in the class.
Beside that case, we come across a couple of other problems with other windows machines, in one of them `git log` was blocking the screen and the other could not open the text editor (Notepad++ in this case) when executing `commit` (or `merge` with the default message).

Each day we updated the official repository with lesson templates in Jupyter notebook format, where an outline of the class was available, and the code cells were empty to be filled in while following the lecture. 
In this way everyone had to `fork` our repository on github, then `pull` at the start of every session from `upstream` and `push` at the end to their `origin`.
This cemented the work at the start of the week on git+GitHub, while making sure everyone had a backup of all the work they had completed during the week and learning the usual git workflow of contributing to a larger project on GitHub.
Thanks to the visualisations on GitHub we can see how all [these forks evolved](https://github.com/OpenAstronomy/2016-01-11_Sheffield_Notes/network), and see if the participants keep using GitHub!!

During one of the sessions we discovered a bug in the latest release of SunPy.We used the opportunity to demonstrate what to do in these cases: fill an issue on GitHub and provide the information needed so the developers can replicate such error.

We will be looking to repeat this workshop later in the year, probably before term starts in late September. In the mean time, feel free to use our material and contact us if you want more information.
