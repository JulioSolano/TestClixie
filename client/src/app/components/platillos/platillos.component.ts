import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlatillosService } from '../../services/platillos.service';
import { Platillos } from 'src/app/interfaces/platillos';
import { ActivatedRoute, ɵEmptyOutletComponent } from '@angular/router';
import { Ordenes } from 'src/app/interfaces/ordenes';
import { RestaurantesService } from '../../services/restaurantes.service';
import { Restaurantes } from 'src/app/interfaces/restaurantes';
import { OrdenesService } from '../../services/ordenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {

  @ViewChild('btnClose', {static:false})btnClose:ElementRef;

  platillos: Platillos[];
  platillo: Platillos= {};
  orden:Ordenes={};

  idRest: string;
  categoria:string='';
  admin:boolean= false;

  items:any[]=[];
  qtyBg:number = 0;
  qty:number=1;
  total:number = 0;
  taxes:number;


  restaurante: Restaurantes = {};

  constructor(
    private platillosService: PlatillosService,
    private route: ActivatedRoute,
    private restauranteService: RestaurantesService,
    private ordenService: OrdenesService
  ) { }

  ngOnInit() {
    this.idRest = this.route.snapshot.params['id'];
    console.log('este id: ', this.idRest);

    this.getPlatillos();
    this.getRestaurante();
  }

  getPlatillos() {
    this.platillosService.getPlatillos(this.idRest).subscribe(
      data => {
        this.platillos = data;
        console.log(this.platillos);
      },
      err => console.log('error al traer los datos de los platillos')
    );
  }

  getRestaurante() {
    this.restauranteService.getRestaurant(this.idRest).subscribe(
      restaurante => {
        this.restaurante = restaurante[0];
      },
      err => console.log('error: ', err)
    );
  }

  create() {
    this.platillo.idRestaurante = parseInt(this.idRest);
    this.platillosService.create(this.platillo).subscribe(
      res => {
        Swal.fire('Agregado', 'Tu platillo ha sido agregado', 'success');
        this.getPlatillos();
        this.btnClose.nativeElement.click();
      },
      err => console.log('error: ', err)
    );

  }

  update() {

  }

  delete(id:any) {
    Swal.fire({
      title:'Eliminar',
      text:'¿Desea eliminar este platillo?',
      icon:'question',
      cancelButtonText:'Cancelar',
      cancelButtonColor:'#e21212',
      showCancelButton:true,
      confirmButtonText:'Aceptar',

    }).then((result) => {
      if(result.value) {
        this.platillosService.delete(id).subscribe(
          res => {
            Swal.fire('Eliminado', res.message, 'success');
            this.getPlatillos();
          },
          err => {
            console.log(err);
          }
        );
      }
    });

  }

  role() {
    this.admin = !this.admin;
  }

  filtrar(value:string) {
    this.categoria = value;
  }
  changeQty(value) {

    this.qty = parseInt(value);
    // console.log('value; ', this.qty, ' ', 5);
  }

  addCart(platillo) {
    this.orden.total = 0;
    let existe: boolean;

    this.items.forEach(element => {
      if(element.id === platillo.id) {
        element.qty = parseInt(element.qty) + (this.qty);
        element.subTotal = parseFloat(platillo.precio) * platillo.qty;
        existe = true;
      }  else existe = false;

    })
    if (!existe) {
      platillo.qty = this.qty;
      platillo.subTotal = parseFloat(platillo.precio) * platillo.qty;
      this.items.push(platillo);
    }
    this.qty = 1;

    this.calcCostos();
    console.log(this.items);
  }

  calcCostos() {
    this.orden.subtotal = 0;
    this.qtyBg =0;
    this.items.forEach(element => {
      this.orden.subtotal = this.orden.subtotal + parseFloat(element.subTotal);
      this.qtyBg = this.qtyBg + element.qty;
    });
    this.orden.iva = this.orden.subtotal * 0.16;
    this.orden.iva = parseFloat(this.orden.iva.toFixed(3));
    this.orden.total = this.orden.iva + this.orden.subtotal;
    this.orden.total = this.orden.total;
    console.log(this.orden);
  }

  payOrden() {
    this.orden.items = JSON.stringify(this.items);
    console.log(this.orden);
    this.ordenService.create(this.orden).subscribe(
      res => {
        Swal.fire('Compra realizada', 'Tu orden llegara pronto', 'success');
      },
      err => console.log('error: ', err)
    );
  }


}
