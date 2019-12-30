import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatChipsModule
} from '@angular/material';
import { MomentModule } from 'ngx-moment';

import { IntroComponent } from './Intro/intro.component';
import { GridLinkComponent } from './GridLinkList/gridlink.component';
import { EducationComponent } from './Education/edu.component';

import { ExperienceComponent } from './Experience/experience.component';
import { LinkListComponent } from './LinkList/linklist.component';
import { ExpertiseComponent } from './Expertise/expertise.component';
import { SkillsComponent } from './Skills/skills.component';


import { sanitizeHtmlPipe } from './Common/sanitize-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    sanitizeHtmlPipe,
    GridLinkComponent,
    EducationComponent,
    ExperienceComponent,
    LinkListComponent,
    ExpertiseComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatChipsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
