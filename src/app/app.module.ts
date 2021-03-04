import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


 
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

import { HeadComponent } from './layout/head/head.component';
import { LeftPanelComponent } from './layout/left-panel/left-panel.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';


// Page Modules 
import {  OrdersPageModule} from './pages/orders/orders-page.module';


// Components
import {   ComponentsModule } from './components/components.module';




@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LeftPanelComponent,
    FooterComponent,
    SideBarComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule ,
    OrdersPageModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
