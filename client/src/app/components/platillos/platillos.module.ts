import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatillosComponent } from './platillos.component';
import { Routes, RouterModule } from '@angular/router';
import {PipesModule} from '../../pipes/pipes.module';

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
    PipesModule,
    RouterModule.forChild(routes)
  ]
})
export class PlatillosModule { }
