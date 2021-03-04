import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersComponent } from './orders.component';
import { OrderRowComponent } from './order-row/order-row.component';
import { ItemComponent } from './order-row/item/item.component';



@NgModule({
  declarations: [
    ItemComponent,
    OrderRowComponent,
    OrdersComponent,
   ],
  imports: [
    CommonModule
  ],
  exports:[
    OrdersComponent,
    OrderRowComponent,
    ItemComponent
  ]
  
})
export class OrdersModule { }
