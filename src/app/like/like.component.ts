import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
@Input() likeCount:number;
@Input() isSelected:boolean;

  onClick()
  {
    this.likeCount+=(!this.isSelected)?1:-1;
this.isSelected=!this.isSelected;
  }

}