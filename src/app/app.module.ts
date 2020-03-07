import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses.component';
import {CoursesService} from './courses.service';
import {SummaryPipe} from 
'./summary.pipe';

import { EmailService } from './email.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './authors/author.service';
import { CorrectcasePipe } from './correctcase.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule],
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent,
  SummaryPipe,
  CorrectcasePipe,
  PanelComponent,
  LikeComponent,
  InputFormatDirective,
  ZippyComponent,
  ContactFormComponent,
  CourseFormComponent,
  SignupFormComponent],
  bootstrap:    [ AppComponent ],
  providers:[ CoursesService, EmailService, AuthorService] 
})
export class AppModule { }
