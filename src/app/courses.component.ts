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
  <img src={{imageUrl}}/>
  <img [src]="imageUrl"/>
  <table>
     <tr>
      <td>
        [colspan]="colSpan"
     </td>
    </tr>
  </table>`
})
export class CoursesComponent
{
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