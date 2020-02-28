import { Component} from '@angular/core';
import { AuthorService} from './author.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html'
  
})
export class AuthorsComponent  {
  authors
 constructor(authors: AuthorService ){
  this.authors=authors .getAuthor();
 }

}