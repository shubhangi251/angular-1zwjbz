
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {DatafService} from './dataf.service';

@Injectable()
export class FollowersService extends DatafService {

constructor(http:Http) {
super('https://api.github.com/users/mosh-hamedani/followers',http);
   }


}

