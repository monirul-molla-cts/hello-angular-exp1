#Basic Components and Angular Data Bindings

Used "hello-angular" project as a base, and implimented angular data binding features on top of that.  

## The following types of data binding are implemented in this project step by step.

- **Interpolation Binding**  
  1. Add ```{{ title }}``` in the app.component.html    
  (https://github.com/monirul-molla-cts/demo-images/blob/master/angular-interpolation1.png)
  2. Add ```title = 'My Angular Sandbox';``` in the app.component.ts  
  [[https://github.com/monirul-molla-cts/demo-images/blob/master/angula-interpolation2.png]]
  
- **Property Binding**  
  1. Add ```<h2 [style.color]="myColor">Here are some links to help you start: </h2>``` in the app.component.html   
  2. Add ```myColor:string = "red";``` in the app.component.ts
  
- **Event Binding**  
  1. Add ```<button (click)="changeColor()">Change Color</button>``` in the app.component.html   
  2. Add the following function in the app.component.ts
     ```
     changeColor():void {
        this.myColor = 'green';
     } 
     ```  
     Note: while defining the function, please make sure that you have defined the function inside the AppComponent class.    
     
- **Two-way Binding**  
  1. Add ```<input [(ngModel)]="myColor"/>``` in the app.component.html   
  2.  Add ```myColor:string = "red";``` in the app.component.ts
    


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
