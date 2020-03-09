import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts:any[];

  constructor(http:Http) { 
http.get('https://jsonplaceholder.typicode.com/posts').subscribe( response=>{
this.posts=response.json();
});
  }

  createPost(input:HTMLInputElement)
  {
    let post={title:input.value};
    input.value='';
    this.http.post(this.url,JSON.stringify(post)).subscribe(response=>{
      post['id']=response.json().id;
      this.posts.splice(0,0,post);
      console.log(response.json());
    });
  }


}