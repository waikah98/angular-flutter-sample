# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Note for scratch me implementation

1. Use the command below to pull the library from npm
- ``npm i angular-scratch-me``

2. Add the path './node_modules/public-flutter' into the asset field in angular.json. 
 Example: 
  ``  
   "assets": [
   "src/favicon.ico",
   "src/assets",
   {
   "glob": "**/*",
   "input": "./node_modules/public-flutter/",
   "output": "./public-flutter"
   }
   ],
   ``
3. Add the link code snippet below into the index.html
   ``  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   ``
