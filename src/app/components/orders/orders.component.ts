import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Order ,OrderSearchCriteria } from '../../models/orders/order';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService:OrderService) { }


  
  @Output()  CountEvent = new EventEmitter<number>();

  index :number[]  =[1,23,4,56]; 
  count :number;
  order :Order;  
  orders:Order[] =[]; 
  @Input()   criteria : OrderSearchCriteria ; 

  ngOnInit(): void {
    console.log('orders list') ;
    console.log(this.criteria);

    this.criteria = this.criteria ||  new OrderSearchCriteria() ;
    this.count = this.criteria.ids ==null ?  0 : 1; 

  if(this.count==0 )
    this.GetCount(this.criteria) ;

    this.setCount(this.count) ;
    this.Get(this.criteria);
  }


  Get(searchCriteria : OrderSearchCriteria){
   
    this.orderService.Get(searchCriteria).subscribe( 
       data => {
       
        
        var interval =   setInterval(() => {
            this.orders.push(data.pop());
            
            if(this.orders.length == this.count){     
              clearInterval(interval) ;
            }
            
          }, 500);


        
        
       },
       error => console.log('oops', error))
       
   }
 

   GetOne(id :number){
    this.orderService.GetOne(id).subscribe(res=>{
      this.order  =res.Result; 
    })
   }


   GetCount(criteria?){
     console.log('count')
    this.orderService.GetCount(criteria).subscribe(res=>{
      this.count  =res.count; 
      console.log(this.count);
      this.setCount(this.count) ; 
    })
   }

   setCount(count){
    this.CountEvent.emit(count) ;
   }


}
