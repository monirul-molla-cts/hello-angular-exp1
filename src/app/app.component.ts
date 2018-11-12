import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Angular Sandbox';
  myColor:string = "red";

  changeColor():void{
    this.myColor = 'green';
  } 
  
}
