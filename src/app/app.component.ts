import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
courses;
onLoad()
{
  this.courses=[
  {id: 1, name:"course1"},
  {id: 2, name:"course2"},
  {id: 3, name:"course3"}
]
}
trackCourse(index, course)
{
  return course?course.id: undefined;
}
}
