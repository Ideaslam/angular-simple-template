import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';
import { City,CitySearchCriteria } from '../../models/city';
import { SearchResult ,ExecutionResponse } from '../../models/base-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private endPoint;
  constructor(
    private _BaseService: BaseService
  ) {
    this.endPoint = 'city/';
  }

   Get(criteria:CitySearchCriteria) :Observable<SearchResult<City>>{
      var body =criteria || {} ; 
      return this._BaseService.Get(this.endPoint+"Get",body)
      .pipe(
        map(res => {
         
          var CityResponse = new SearchResult<any>() ; 
          CityResponse.Result=res.result;
          CityResponse.TotalCount=res.totalCount;
         
          CityResponse.Result=  CityResponse.Result.map(city =>{
            let cityDto= new City();
            cityDto.Id=city.id;
            cityDto.Name=city.name;

            return cityDto;
           
          })
         
          return CityResponse;
        })
        );
   }

  

   GetOne(id:number) :Observable<ExecutionResponse<City>>{
    var body =  {id:id} ; 
    return this._BaseService.GetOne(this.endPoint+"Get",body)
    .pipe(
      map(res => {
       
        var CityResponse = new ExecutionResponse<any>() ; 
        CityResponse.Result=res.result[0] ;
       
          let cityDto= new City();
          cityDto.Id=CityResponse.Result.id;
          cityDto.Name=CityResponse.Result.name;
          CityResponse.Result=cityDto;

          console.log(CityResponse);
        return CityResponse;
      })
      );;
   }

   Delete(id:number) :Observable<ExecutionResponse<boolean>>{
    return this._BaseService.Delete(this.endPoint+"Delete",{Id:id});
   }

   Create(city:City) :Observable<ExecutionResponse<City>>{
    return this._BaseService.Delete(this.endPoint+"Create",city);
   }

   Update(city:City) :Observable<ExecutionResponse<City>>{
    return this._BaseService.Update(this.endPoint+"Update",city);
   }

}
