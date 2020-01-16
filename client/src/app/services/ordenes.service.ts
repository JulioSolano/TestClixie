import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ordenes } from '../interfaces/ordenes';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  api_url = "http://localhost:3000/api/ordenes";

  constructor(private http: HttpClient) { }

  create(orden: Ordenes) {
    return this.http.post(this.api_url, orden);
  }
}
