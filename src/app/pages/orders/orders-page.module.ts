import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  OrdersRoutingModule } from './orders-page-routing.module';
import {  ModulesModule } from '../../shared/modules/modules.module';
import {  OrderPageComponent } from './order-page/order-page.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    OrderPageComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,  
    ComponentsModule
  ]
  ,
  exports:[
    OrderPageComponent
  ]
})
export class OrdersPageModule {}
