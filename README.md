# AngularBase

This project Angular base of Acaziasoft company. Our angular projects will based on this project to development.

## Table of Contents
* [Architecture overview](#architecture-overview)
* [Install](#install)
* [Common module](#common-module)
* [Development server](#development-server)
* [Build](#build)

## Architecture overview
![alt text](https://github.com/acaziasoft/angular-base/blob/master/document/Architecture_overview.PNG)

## Install
First you need to install the Angular CLI:
```sh
npm install -g @angular/cli
```
Clone or download to install dependencies:
```sh
npm install
```
The version of Angular and dependencies lib:

  /          | Version 
 ----------- | ---------
 Angular     | 6.0.3    
 Material    | 6.4.2    
 primeng     | 6.1.0    

---

## Common module

 Name                        | Description 
 --------------------------- | ---------
 AuthenticationModule        | The module post infor an account to API authentication to receive a token authen and save to local storage   
 TranslateModule             | Setting multiple language for project. Store key and value in json file    
 BaseService                 | Http base service for all HttpClient service.
 UploadService               | Service handle upload file to server for all module (multiple file, single file, dynamic config type)
 HttpErrorInterceptor        | Handle all http response error from server
 AuthenticationInterceptor   | Add token authen for all request to server if need, and refresh token when expired
 
---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Use the `build.prod` flag for a production build.
