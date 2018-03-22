<h1 align="center">API FOR YASSINE AZZOUT</h1>



##  ⚙️ Installation 

Clone the repository or download the zip file then navigate through the API folder and install the dependencies with :

```
$ npm install
```

Congrats you are now ready to go ! :ok_hand:

<p align="center"> 
<img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif">
</p>

## 🏁 How to use

Now that you installed the dependencies,launch elasticsearch server and run:

```
$ npm start
```

Then,simply go to [localhost:9292](http://localhost:9292/) and you should see this:
<p align="center"> 
<img src="https://github.com/KingProwl/caradisiac/blob/master/apiscreen.png">
</p>

Then you have two buttons:
- POPULATE: which will import datas in elasticsearch (if it is launched). :arrow_up:
- CARS: which will return the cars models with the highest volume. :red_car:



# CARADISIAC

> Drive comfortably

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Introduction](#introduction)
- [Objective - Workshop in 1 sentence](#objective---workshop-in-1-sentence)
- [How to do that?](#how-to-do-that)
  - [Stack](#stack)
- [Just tell me what to do](#just-tell-me-what-to-do)
- [Examples of steps to do](#examples-of-steps-to-do)
  - [Populate](#populate)
  - [List of suv](#list-of-suv)
- [MVP](#mvp)
  - [Client-side (bonus)](#client-side-bonus)
- [Don't forget](#dont-forget)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

[caradisiac.com](http://www.caradisiac.com/fiches-techniques) provides a tone of technical records related to car specification.

## Objective - Workshop in 1 sentence

**Build an api that get the list of SUV with the higher rate and the higher volume (car boot)**

The api

* must listen port `9292`
* must provide endpoint `/populate` to index records to Elasticsearch
* must provide endpoint `/suv` that return list of cars with the higher car boot volume

## How to do that?

By indexing technical records from caradisiac to Elasticsearch and build an api with Node.js

### Stack

```
Node.js + ES6 + Elasticsearch
```

## Just tell me what to do

* Fork the project via `github`
* Clone your forked repository project `https://github.com/YOUR_USERNAME/caradisiac`

```sh
❯ cd /path/to/workspace
❯ git clone git@github.com:YOUR_USERNAME/caradisiac.git
```

* Follow the steps
* commit your different modifications:

```sh
❯ cd /path/to/workspace/caradisiac
❯ git add -A && git commit -m "feat(es): index in bulk all car records"
```

([why following a commit message convention?](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits))

* Don't forget to push before the end of the workshop **and** before the end of the dedicated sessions

```sh
❯ git push origin master
```

**Note**: if you catch an error about authentication, [add your ssh to your github profile](https://help.github.com/articles/connecting-to-github-with-ssh/).

1. If you need some helps on git commands, read [git - the simple guide](http://rogerdudler.github.io/git-guide/)

## Examples of steps to do

### Populate

1. use the package [node-car-api](https://github.com/92bondstreet/node-car-api) to get all records in json format
1. index - with bulk - all records to Elasticsearch

### List of suv

1. Build an api that provide endpoint `/populate`
1. Build an api that provide endpoint `/suv`
1. The `/suv` endpoint could be a ES query to fetch the right data


## MVP

1. Build an api that provide endpoint `/populate` to index records to Elasticsearch
1. Build an api that provide endpoint `/suv` that return list of cars with the higher car boot volume

### Client-side (bonus)

Display the list of the cars with React

## Don't forget

**Focus on api**

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
