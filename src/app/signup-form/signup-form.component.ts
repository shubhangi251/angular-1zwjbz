import { Component } from '@angular/core';
import {UsernameValidators} from './common/validators/username.validators';

import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form=new FormGroup(
    {
      username: new FormControl('',[Validators.required,
      Validators.minLength(3),UsernameValidators.cannot
     ]),
       password: new FormControl('',Validators.required)
    
    }
  );
  get username()
  {
    return this.form.get('username');
  }
}
