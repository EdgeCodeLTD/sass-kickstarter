# Documentation
## How To Install
1. Download the **[clean](http://edgecode.gr/sass-kickstarter/clean.zip)** or the **[example](http://edgecode.gr/sass-kickstarter/example.zip)** version
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

In **`assets/scss`** folder you can find a few files and folders. Here's how it works.
<br>
* **`main.scss`** imports the **`_variables.scss`** and **`_mixins.scss`** partials, as well as, the directories of each folder inside **`scss`** folder.
* Every **`X-name`** folder includes a **`_name-dir.scss`** file which imports all partials related to what the folder represents.<br><br> For example, inside **`2-layouts`** folder there are various partials that each contain Sass code that correspond to separate parts of your layout (e.g. header, sidebar, features etc).<br/> The **`_layouts-dir.scss`** is used to import all these partials into 1 file that is later imported into the **`main.scss`**.<br><br>
* Every time you add a new partial (e.g. **`_test.scss`**) into any **`X_name`** folder, you must then import it into the appropriate **`_name-dir.scss`** file so that it can be used later on.

**Overall, this is how the chain works:** 
<br>
**`main.scss`** imports **`_name-dir.scss`** file from every **`X-name`** folder inside **`scss`** folder.<br> Every **`_name-dir.scss`** file imports the partials that belong to **`X-name`** folder.

### Gulp
I am using Gulp for the build system. Inside **`gulpfile.js`** you can find all the base code for it.
<br>
The code is commented and it's pretty straightforward on how to use it.
<br><br>
Feel free to add your own tweaks.