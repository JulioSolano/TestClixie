import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes:any[] =
  [
    {
      nombre:"Restaurante 1",
      descripcion:"Alguna descripcion del restaurante #1",
      direccion:"Av. Libertad #1300 Poniente",
      telefono:"8262629257",
      img:"../../../assets/restaurant1.png"
    },
    {
      nombre:"Restaurante 2",
      descripcion:"Alguna descripcion del restaurante #2",
      direccion:"Av. Libertad #1300 Poniente",
      telefono:"8262629258",
      img:"../../../assets/restaurant2.png"
    },
    {
      nombre:"Restaurante 3",
      descripcion:"Alguna descripcion del restaurante #3",
      direccion:"Av. Libertad #1300 Poniente",
      telefono:"8262629259",
      img:"../../../assets/restaurant3.png"
    },
    {
      nombre:"Restaurante 4",
      descripcion:"Alguna descripcion del restaurante #4",
      direccion:"Av. Libertad #1300 Poniente",
      telefono:"8262629260",
      img:"../../../assets/restaurant4.png"
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  prueba() {
    this.router.navigate(['/platillos']);
    console.log('prueba');

  }

}
