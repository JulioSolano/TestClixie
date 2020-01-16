import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantesComponent } from './restaurantes.component';

const routes: Routes =
[
  {path:'',component: RestaurantesComponent }
];

@NgModule({
  declarations: [
    RestaurantesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RestaurantesModule { }
