import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  IProduct  } from  '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class RequestServicesService {

  constructor(private http:HttpClient) { }

  getProduct(value: number):Observable<IProduct[]>
  {
    let url =`http://localhost:3000/autorequest?count1=${value}`;
    return this.http.get<IProduct[]>(url);
  }
  postProduct(data:any):Observable<IProduct[]>{
   let url=`http://localhost:3000/autorequest`;
   return this.http.post<IProduct[]>(url,data);
  }
  getStatus()
  {
    let url=`http://localhost:3000/status`;
    return this.http.get(url);
  }
  postRequest(data:any):Observable<IProduct[]>{
    let url=`http://localhost:3000/requests`;
    return this.http.post<IProduct[]>(url,data);
   }
}
