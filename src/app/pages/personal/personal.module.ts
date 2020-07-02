import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import {   HomeModule } from './home/home.module';
import {   HomeRoutingModule } from './home/home-routing.module';

import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
 

@NgModule({
  declarations: [
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
     
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    HomeModule,
    HomeRoutingModule
  ],
  exports: [
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    HomeModule
  ]
})
export class PersonalModule { }
