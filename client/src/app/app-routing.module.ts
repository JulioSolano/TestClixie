import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =
[
  {path:'',redirectTo:'/', pathMatch:'full' },
  {path:'', loadChildren: ()=> import ('./components/restaurantes/restaurantes.module').then(m=> m.RestaurantesModule)},
  {path:'restaurantes', loadChildren: ()=> import ('./components/restaurantes/restaurantes.module').then(m=> m.RestaurantesModule)},
  {path:'platillos/:id', loadChildren: ()=> import ('./components/platillos/platillos.module').then(m=> m.PlatillosModule)},
  {path:'ordenes', loadChildren: ()=> import ('./components/ordenes/ordenes.module').then(m=> m.OrdenesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
