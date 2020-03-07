
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent   {
contactMethods=[
  {id: 1, name:'Email'},
  {id: 2, name:'Post'},
  {id: 3, name:'Address'}
  
];
contactMethod=[  {id: 1, name:'Email'},
  {id: 2, name:'Post'},
  {id: 3, name:'Address'}];
  log(x)
  {
    console.log(x);
  }
  submit(f)
  {
    console.log(f);
  }

}