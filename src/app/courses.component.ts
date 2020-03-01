


import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

//Decorative function
@Component({
  selector: 'courses',
  template: `<h2>{{getTitle()}}</h2> 
  <ul>
  <li *ngFor="let course of courses">
{{course}}
  </li></ul>
  <input [value]="ans" (keyup.enter)="ans=$event.target.value; onPress()"/>
   <input [(ngModel)]=ans (keyup.enter)="onPress()"/>`  //Two way binding
})
export class CoursesComponent
{
 ans="Tina";
  onPress(){
    console.log(this.ans);
  }
title="List of courses";
imageUrl="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg";
colSpan=2;
getTitle()
{
  return this.title;
}
courses;
constructor(x:CoursesService){

 this.courses= x.getcourses();
}
}