import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
 


const routes: Routes = [
  {
    path:'home',
    loadChildren:"./home/home.module#HomeModule"
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'resume',
    component: ResumeComponent
  },
  {
    path:'portfolio',
    component: PortfolioComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule   ]
})
export class PersonalRoutingModule { }
