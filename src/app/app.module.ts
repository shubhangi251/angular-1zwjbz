import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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




@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent,
  SummaryPipe,
  CorrectcasePipe,
  PanelComponent,
  LikeComponent,
  InputFormatDirective],
  bootstrap:    [ AppComponent ],
  providers:[ CoursesService, EmailService, AuthorService] 
})
export class AppModule { }
