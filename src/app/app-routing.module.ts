import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CityComponent} from '../app/pages/city/city.component';
 


const routes: Routes = [
  
  {
    path:'personal',
    loadChildren:'./pages/personal/personal.module#PersonalModule'
  },
  {
    path:'operations',
    loadChildren:'./pages/operations/operations.module#OperationsModule'
  }
  ,
  {
    path:'city',
    component:CityComponent
  }
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule  ]
})
export class AppRoutingModule { }
