import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';
import { Order, OrderSearchCriteria } from '../../models/orders/order';
import { SearchResult, ExecutionResponse } from '../../models/base-model';
import { map } from 'rxjs/operators';
import {  Count } from '../../models/utils/count';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private endPoint;
  constructor(
    private _BaseService: BaseService
  ) {
    this.endPoint = '/shopify/orders';
    _BaseService.ChangeThirdParty("api");
    
  }

  Get(criteria?: OrderSearchCriteria): Observable<Order[]> {

    var params = criteria || {};
    return this._BaseService.Get(this.endPoint, params)
      .pipe(
        map(res => {
          var orders:Order[] =res.orders; 
          return orders;
        })
      );
  }



  GetOne(id: number): Observable<ExecutionResponse<Order>> {
    var params = { id: id };
    return this._BaseService.GetOne(this.endPoint  , params)
      .pipe(
        map(res => {

          var OrderResponse = new ExecutionResponse<any>();
          OrderResponse.Result = res.result[0];

          let orderDto = new Order();


          console.log(OrderResponse);
          return OrderResponse;
        })
      );;
  }



  GetCount(criteria?): Observable<Count> {
  
    return this._BaseService.Get(this.endPoint+"/count",criteria)
      .pipe(
        map(res => {
          return res;
        })
      );;
  }

  Delete(id: number): Observable<ExecutionResponse<boolean>> {
    return this._BaseService.Delete(this.endPoint  , { Id: id });
  }

  Create(order: Order): Observable<ExecutionResponse<Order>> {
    return this._BaseService.Delete(this.endPoint  , order);
  }

  Update(order: Order): Observable<ExecutionResponse<Order>> {
    return this._BaseService.Update(this.endPoint  , order);
  }

}
