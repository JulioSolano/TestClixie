import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrdenesComponent } from './ordenes.component';

const routes: Routes=
[
  {path:'',component:OrdenesComponent}
]

@NgModule({
  declarations: [OrdenesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdenesModule { }
