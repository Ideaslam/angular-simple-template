import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';
import { Product, ProductSearchCriteria } from '../../models/products/product';
import { SearchResult, ExecutionResponse } from '../../models/base-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endPoint;
  constructor(
    private _BaseService: BaseService
  ) {
    this.endPoint = '/shopify/products';
    _BaseService.ChangeThirdParty("api");
    
  }

  Get(criteria: ProductSearchCriteria): Observable<Product[]> {

    var params = criteria || {};
    return this._BaseService.Get(this.endPoint, params)
      .pipe(
        map(res => {
          var products:Product[] =res.products; 
          return products;
        })
      );
  }



  GetOne(id: number): Observable<Product> {
    var params = { ids: id };
    return this._BaseService.GetOne(this.endPoint  , params)
      .pipe(
        map(res => {
          var product:Product  =res.product; 
          return product;
        })
      );;
  }

  Delete(id: number): Observable<ExecutionResponse<boolean>> {
    return this._BaseService.Delete(this.endPoint  , { Id: id });
  }

  Create(product: Product): Observable<ExecutionResponse<Product>> {
    return this._BaseService.Delete(this.endPoint  , product);
  }

  Update(product: Product): Observable<ExecutionResponse<Product>> {
    return this._BaseService.Update(this.endPoint  , product);
  }

}
