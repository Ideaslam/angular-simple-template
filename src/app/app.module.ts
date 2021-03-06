import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {  PersonalModule } from './pages/personal/personal.module';
import {  OperationsModule } from './pages/operations/operations.module';
 
import { AppComponent } from './app.component';
import { CityComponent } from './pages/city/city.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RowsComponent } from './pages/rows/rows.component';



@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    RowsComponent
    
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonalModule,
    OperationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
