import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { AppError} from './../common/app-error';
import { BadInput} from './../common/bad-input';
import { NotFoundError} from './../common/not-found-error';
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
  return this.http.post(this.url, JSON.stringify(post)).catch((error:Response)=>{
    if(error.status===400)
    return Observable.throw( new BadInput(error.json()) );
     return Observable.throw( new AppError(error.json()) );

  })
}
updatePosts(post)
{
 return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
}
deletePosts(id){
return this.http.delete(this.url + '/' + id)
.catch((error:Response)=>
{
  if(error.status ===404)
  return Observable.throw( new NotFoundError());

  return Observable.throw(new AppError(error));
  

});
}
}