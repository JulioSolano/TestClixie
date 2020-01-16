import { Pipe, PipeTransform } from '@angular/core';
import { Platillos } from '../interfaces/platillos';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(platillos: Platillos[], categoria: string): Platillos[] {
    if(categoria === '') return platillos;
    categoria= categoria.toLowerCase();
    return platillos.filter( platillo => {
      return platillo.categoria.toLowerCase().includes(categoria);
    });
  }

}
