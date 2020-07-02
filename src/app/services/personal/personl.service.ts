import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class PersonlService {

  private endPoint;
  constructor(
    private _BaseService: BaseService
  ) {
    this.endPoint = 'Nursery/GetAllCities';
  }

   Get(){
      return this._BaseService.Get(this.endPoint);
   }
}
