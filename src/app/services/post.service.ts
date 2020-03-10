import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { AppError,NotFoundError} from './../common';

@Injectable()
export class PostService {
private url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:Http) { }
getPosts()
{
return this.http.get(this.url);
}
createPosts(post)
{
  return this.http.post(this.url, JSON.stringify(post))
}
updatePosts(post)
{
 return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
}
deletePosts(id){
return this.http.delete(this.url + '/' + id).catch((error:Response)=>
{
  if(error:status ===404)
  return Observable.throw( new NotFoundError());

  return Observable.throw(new AppError(error));
  

});
}
}