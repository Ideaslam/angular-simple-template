import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/orders/order';
import { PriceSet } from 'src/app/models/orders/order-details/price-set';

@Component({
  selector: 'app-order-row',
  templateUrl: './order-row.component.html',
  styleUrls: ['./order-row.component.css']
})
export class OrderRowComponent implements OnInit {

  constructor() { }

  @Input('order') order:Order ; 

  ngOnInit(): void {
  
  }



}
