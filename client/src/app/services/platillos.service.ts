import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platillos } from '../interfaces/platillos';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  api_url = "http://localhost:3000/api/platillos";
  constructor(private http: HttpClient) { }

  getPlatillos(idRest) {
    return this.http.get<Platillos[]>(`${this.api_url}/${idRest}`);
  }

  create(platillo: Platillos) {
    return this.http.post(this.api_url, platillo);
  }

  update(platillo: Platillos) {
    return this.http.put(this.api_url, platillo);
  }

  delete(id) {
    return this.http.delete<any>(`${this.api_url}/${id}`);
  }


}
