import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatillosComponent } from './platillos.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
[
  {path:'', component:PlatillosComponent}
]

@NgModule({
  declarations: [
    PlatillosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlatillosModule { }
