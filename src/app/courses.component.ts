


import {Component} from '@angular/core';


//Decorative function
@Component({
  selector: 'courses',
  template: `
 
  <span class="[(ngModel)]=select (click)="onPress()" "></span> 
  `


})
export class CoursesComponent
{
  select='glyphicon glyphicon-envelope-empty';
onPress()
{
this.select='glyphicon glyphicon-envelope';
}

}