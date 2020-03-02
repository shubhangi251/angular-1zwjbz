


import {Component} from '@angular/core';


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
  isSelected:boolean;
  
 
  onPress()
  {
    this.isSelected=!this.isSelected;
  }

}