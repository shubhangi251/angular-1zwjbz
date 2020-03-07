import {AbstractControl,ValidationErrors} from '@angular/forms';
export class UsernameValidators
{
  cannotContainSpace(control: AbstractControl ):ValidationErrors |null
  {
    if(control.value as string).indexOf('')>=0
  }
}