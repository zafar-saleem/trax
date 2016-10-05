## Requirements
Below is the stack used in this project. Please follow the getting started section in order to make this project run.

## Stack
 - Requirejs.
 - jQuery
 - Underscore(templates)
 - HTML5.
 - CSS
 - Sass
 - HTML5 Video
 - JSHint.
 - [CSSlint](https://github.com/CSSLint/csslint).
 - [Bower](http://bower.io/).
 - Expressjs.
 - Sublime Text.
 - Git.
 - Bitbucket.
 - Mac OS X.
 - Google Chrome Incognito, Firefox and Safari (with screen resolution 1440x900)
 - Grunt (as build tool) with following plugin!
   - [CSSmin](https://github.com/gruntjs/grunt-contrib-cssmin)
   - [Requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)
   - [Concat](https://github.com/gruntjs/grunt-contrib-concat)
   - [JSHint](https://github.com/gruntjs/grunt-contrib-jshint)
   - [CSSLint](https://github.com/gruntjs/grunt-contrib-csslint)
   - [Clean](https://github.com/gruntjs/grunt-contrib-clean)
   - [HTMLmin](https://github.com/gruntjs/grunt-contrib-htmlmin)
   - [ProcessHTML](https://github.com/dciccale/grunt-processhtml)
   - [Copy](https://github.com/gruntjs/grunt-contrib-copy)
   - [Nodemon](https://github.com/ChrisWren/grunt-nodemon)
   - [Concurrent](https://github.com/sindresorhus/grunt-concurrent)
   - [Watch](https://github.com/gruntjs/grunt-contrib-watch)

## Getting started
In order to run this project in the browser successfully, please follow the steps below!

	1. Clone this repository.
	2. CD to the root folder of this project.
	3. Run `npm install` (if it complains then run `sudo npm install`) to install all Grunt plugins(dependencies).
	4. Run `bower install` to install all project dependencies i.e. requirejs into js/libs folder.
	5. Now run `grunt` command on your terminal in `root` folder of this project.
	6. Now go to your browser and type `localhost:8000` to view this project in action.

## Description
Above steps, in getting started section, will install all dependencies required for this project to run and make the project ready for
production by minifying all the JavaScript and files. It will place the production ready project in `dist` folder in `root`.

Moreover, I created my own MV platform to achieve this task. Models folder container `MovieModel`. `views/` folder contains views for 
`main video`, `list of movies` and `panel`. In `sandbox/` folder, I created 3 modules. First one is `EventDispatcher` which is a pub/sub desgin pattern. It allows us to bring loose coupling between modules. Second one is a `MoviesProxy` module. It is responsible for remote data in this case is `movies.json` file in the root of the project. Finally, `Store` module that stores data locally(in object) when data is retrieved from the server. This is to avoid making unnecessary expensive HTTP requests.

## Directory Structure
```
.
├── css
│   ├── bootstrap
│   ├── css
│   └── sass
├── images
├── index.html
├── js
│   ├── app.js
│   ├── config.js
│   ├── controllers
│   │   └── MoviesController.js
│   ├── libs
│   │   
│   ├── main.js
│   ├── models
│   │   └── MovieModel.js
│   ├── plugins
│   │   └── text.js
│   ├── sandbox
│   │   ├── EventDispatcher.js
│   │   ├── MoviesProxy.js
│   │   └── Store.js
│   └── views
│       ├── MoviePanel.js
│       ├── MovieView.js
│       └── MoviesListView.js
├── movies.json
└── templates
    ├── MovieView.html
    ├── MoviesList.html
    └── Panel.html
```
