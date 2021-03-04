import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { map ,catchError, timeout } from 'rxjs/operators';

import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";

import { ResponseState, SearchResult, ValidationError, ExecutionResponse } from '../models/base-model';
import { environment } from 'src/environments/environment';
import { param } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  ApiUrl: string;
  ThirdParty :string; 
  constructor(private httpClient: HttpClient) {
     this.ApiUrl= environment.api.baseUrl; 
  }

  //   public getSettings(fileName: string): Observable<any> {
  //     let _staticLoader = new StaticLoader(this.httpClient)
  //     this.pending = _staticLoader.getSetting(fileName);
  //     this.pending.subscribe((res: Object) => {
  //         this.settings[fileName] = res;
  //         this.ApiUrl = res['ApiUrl'];
  //         this.GlamourApiUrl = res['GlamourApiUrl'];
  //         this.GlamourUploadApiUrl = res['GlamourUploadApiUrl'];
  //         this.ReportUrl = res['ReportUrl'];
  //         this.UrlLoaded = true;
  //         // this.ApiUrl = this.SmallApiUrl + 'api/';
  //         this.urlLoadSubject.next(true);
  //     }, (err: any) => {
  //         throw err;
  //     }, () => {
  //         this.pending = undefined;
  //     });

  //     return this.pending;
  // }


  ChangeThirdParty(base){
    this.ThirdParty= base == null ? "api" : base;
    this.ApiUrl =environment[this.ThirdParty].baseUrl ; 
  }

  getHeaders() {
    return {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')

      // .set('Authorization', "Bearer " + this.getToken())
    }
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  // handleErrorResult(response: any) {

  //   let errors = response.ValidationErrors || response.errors;
  //   errors.forEach(e => {
  //       this.notify.addNotify({ title: 'Error!', msg: e.message|| e.Message, type: 'error' });
  //   });
  // }


  

  Get(endPoint: string, params?: any): Observable<any> {
     console.log(this.ApiUrl ,endPoint) ; 
    return this.httpClient.get<any>(`${this.ApiUrl}${endPoint}`, {params:params})
    .pipe(
     
      map(res=> res),
      catchError(this.handleError)
    );

  }


  GetOne(endPoint: string, params: any): Observable<any> {
    return this.httpClient.get<any>(`${this.ApiUrl}${endPoint}`, {params:params})
    .pipe(
      map(res=>res),
      catchError(this.handleError)
    );

  }

 
 
  Delete(endPoint: string, params: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.ApiUrl}${endPoint}`,   {params:params});
  }

  Create(endPoint: string, body: any): Observable<any> {
    return this.httpClient.post<any>(`${this.ApiUrl}${endPoint}`,body);
  }

  Update(endPoint: string, params: any): Observable<any> {
    return this.httpClient.put<any>(`${this.ApiUrl}${endPoint}`, {params:params});
  }


}
