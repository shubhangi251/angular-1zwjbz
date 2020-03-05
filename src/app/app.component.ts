import { Component } from '@angular/core';
import { SelectedChangedEventArgs } from './courses.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  post={
   count:10,
    isLiked:false
  }
  courses=[1,2];

}
