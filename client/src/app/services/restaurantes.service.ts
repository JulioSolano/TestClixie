import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurantes } from '../interfaces/restaurantes';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {
  api_url = "http://localhost:3000/api/restaurantes";

  constructor(private http:HttpClient) { }

  getRestaurantes() {
   return this.http.get<Restaurantes[]>(this.api_url);
  }

  getRestaurant(id) {
    return this.http.get(`${this.api_url}/${id}`);
  }

  // updateRestaurante(restaurant: Restaurantes) {
  //   return  this.http.put(this.api_url,restaurant);
  // }

}
