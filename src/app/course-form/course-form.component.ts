import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent  {
category=[
    {id:1, name:'Developement'},
   {
    id:2,name:'Arts'
  }, {
    id:3,name:'FineArts'
  }
];

 

}