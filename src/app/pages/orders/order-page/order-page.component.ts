import { Component, Input, OnInit } from '@angular/core';
import { OrderSearchCriteria } from 'src/app/models/orders/order';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  constructor() { }

  listCount = 0;


  ngOnInit(): void {
    console.log('order component')
  }

  setListCount(count){
    this.listCount=count;
  }

}
