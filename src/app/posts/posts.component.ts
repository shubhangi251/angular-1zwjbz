import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];


  constructor(private service: PostService) {

  }
  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
    }, error => {
      alert('An unexpected error occured');
      console.log(error);
    });
  }

  createPosts(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPosts(post).subscribe(
      response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);

      },
      error => {
        alert('An unexpected error occured');
      });
  }
  updatePosts(post) {
    this.service.updatePosts(post).subscribe(
      response => {
        console.log(response.json());
      },
      error => {
        alert('An unexpected error occured');
      })


  }
  deletePosts(post) {
    this.service.deletePosts(845).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error:Response) => {
        if(error.status===404)
        alert('This post has already been delted');
        else{
          alert('An unexpected error occured');
          console.log(error);
        }
      });
  }


}