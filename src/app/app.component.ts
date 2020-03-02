import { Component } from '@angular/core';
import {SelectedChangedEventargs} from './courses.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  post={
    title:"Title",
    isSelected:true
  }
   onSelectedChange(eventArgs:SelectedChangedEventArgs)
  {
    alert("change recognised"+" "+ eventArgs);
  }

}
