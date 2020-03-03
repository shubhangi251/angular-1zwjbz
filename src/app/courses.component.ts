


import {Component,Input,Output,EventEmitter} from '@angular/core';

 
//Decorative function
@Component({
  selector: 'courses',
  
    template:`
    <span 
  class="glyphicon"
  [class.glyphicon-star]="isSelected"
  [class.glyphicon-star-empty]="!isSelected"
  (click)="onPress()"
  ></span>`,  
   styleUrls: [ './courses.component.css' ]
  })

  
  
  
export class CoursesComponent
{
  @Input('isFavorite') isSelected:boolean;
  @Output('correct') change=  new EventEmitter();
  
 
  onPress()
  {
    this.isSelected=!this.isSelected;
    this.change.emit({newValue:this.isSelected});
  }
 
 
}
export interface SelectedChangedEventArgs
{
  newValue:boolean
}