# Italian Mars Society's ERAS Project #

## Sub-Org Details ##

Sub-org admin: Antonio Del Mastro - <gsoc@marssociety.it>

Main repository: <https://bitbucket.org/italianmarssociety/eras/src>

Mailing list: <https://groups.google.com/forum/#!forum/it-mars-society>


## Ideas ##

### 1 – SOLAR STORMS FORECASTING SERVER ###

DIFFICULTY LEVEL: INTERMEDIATE / HARD

MENTORS: [@aldebran](https://bitbucket.org/aldebran/) , [@OPersian](https://bitbucket.org/OPersian/)

DESCRIPTION:

Solar storms are responsible for disruption of satellite communication, and damage to space electronical equipments. The storms have to be taken into account also for EVA and habitat maintenance activities, as the higher levels of radiation brought by them have a detrimental effect on the crew member's health.

Prediction of these storms are essential to prevent said damage. A lot of astronomical data is generated on a daily basis, and this could be used in conjunction with machine learning methods to predict solar storms.

In this project, the student will be required to:

* Predict solar storms to prevent damage.
* Provide real time information about it on a web page.

To predict the solar storms, we have to leverage the use of machine learning approaches. The approach would be for a machine learning model to learn about the solar storms from the raw data, and then output the prediction as soon as possible. For the model, the model which provides the best accuracy, precision, Pearson’s correlation Coefficient, etc would be used.

Currently, a few features are being used for the prediction of solar storms, namely :

* Radio flux
* SESC spot number
* Sunspot area
* New regions
* X-Ray background flux
* C-forecast
* M-forecast
* X-forecast

More features can be incorporated into the program depending on the availability of the data and their relevance to the prediction. Previously, Artificial neural networks have been used for the same. Other machine learning approaches can also be compared and the best approach would be used for the prediction. It should also be seen as to how this server can be incorporated into the ecosystem of ERAS. ERAS uses a Tango server architecture, and thus this project will have to build upon the same architectural constraints.
