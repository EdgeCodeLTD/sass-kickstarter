# Documentation
## How To Install
1. Download the **[clean](http://edgecode.gr/sass-kickstarter/clean.zip)** or **[example](http://edgecode.gr/sass-kickstarter/example.zip)** version
2. Unpack the zip file and extract the contents
3. Follow the guidelines below to get started

## Project Overview
Both the clean and example version contain the following:
* **index.html**
* **gulpfile.js**
* **package.json**
* **assets** folder with **dist**, **js** and **scss** included
* **dist** includes **css**, **img** and **js** folders

## Getting Started
Inside your **.html** files, you always have to link to the appropriate files within the **dist** folder only. 
<br>
The **js** and **scss** folders inside **assets** are only used for **development**.
<br><br>
Inside **gulpfile.js** you can find the **build system** of the project that takes care of compiling and outputing **Sass** files,<br>
as well as, **minifying** and exporting **JavaScript** files.
<br><br>
The **package.json** file includes all the development dependencies that are used by the project.
<br>
After unziping the project, use `npm install` command to install all the dependencies for Gulp to work.


### Sass
This project is built around making **[Sass](http://sass-lang.com/)** adhere the **[Smacss](https://smacss.com/book/)** styling guidelines.
<br><br>
In this section you can find a quick start guide on how to work with the project.
<br>However, I still recommend you to read **[Smacss](https://smacss.com/book/)** book in order to fully understand how it works.

##### Folder and File Structure Overview

### Gulp
I am using Gulp for the build system. Inside gulpfile.js you can find all the base code for it.
<br><br>
The code is commented and it's pretty straightforward on how to use it. Feel free to add your own tweaks.
