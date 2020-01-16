import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurantes } from '../../interfaces/restaurantes';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurantes[];
  constructor(private router: Router, private restaurantesService: RestaurantesService) { }

  ngOnInit() {
    this.getRestaurantes();
  }

  getRestaurantes() {
    this.restaurantesService.getRestaurantes().subscribe(
      data => {
        this.restaurantes = data;
      },
      err => console.log('error al traer los datos de los restaurantes')
    );
  }


}
