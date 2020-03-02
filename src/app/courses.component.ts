


import {Component,Input,Output,EventEmitter} from '@angular/core';

 export interface SelectedChangedEventArgs
{
  newValue:boolean
}
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
  })
  
  
export class CoursesComponent
{
  @Input('isFavorite') isSelected:boolean;
  @Output() change=  new EventEmitter();
  
 
  onPress()
  {
    this.isSelected=!this.isSelected;
    this.change.emit({newValue:this.isSelected});
  }
 
 
}