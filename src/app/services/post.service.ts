import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { AppError} from './../common/app-error';
import { BadInput} from './../common/bad-input';
import { NotFoundError} from './../common/not-found-error';
import {DataService} from './data.service';

@Injectable()
export class PostService extends DataService{ 
//;
  constructor('https://jsonplaceholder.typicode.com/posts' , http:Http) {
super(http);
   }

}