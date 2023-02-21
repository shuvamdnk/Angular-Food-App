import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { city } from '../cities';
import {restaurant} from '../restaurant';
import {Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(protected http:HttpClient) { }

  getCity():Observable<city[]>{
    let url= "http://127.0.0.1:4400/api/cities";
    return this.http.get<city[]>(url);
  }

  getLoc(id:any){
    let url= "http://127.0.0.1:4400/api/city/location/"+id;
    return this.http.get(url);
  }

  getRes(id:any):Observable<restaurant>{
    let url = "http://127.0.0.1:4400/api/restaurants/"+id;
    return this.http.get<restaurant>(url);
  }

  getFood(id:any){
    let url = "http://127.0.0.1:4400/api/foods/"+id;
    return this.http.get(url);
  }

  getfoodDetails(id:any){
    let url = "http://127.0.0.1:4400/api/foods-details/"+id;
    return this.http.get(url);
  }

  register(data:any){
    let url = "http://127.0.0.1:4400/api/auth/register";
    return this.http.post(url,data);
  }
}
