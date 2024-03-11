import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { ProductosListaComponent } from '../productos-lista/productos-lista.component';
import { CartProducto } from '../../interfaces/cart-producto';
import { Producto } from '../../interfaces/producto';

interface Colum {
  field: string;
  header: string;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  
})

export class CartComponent implements OnInit {
  carrito: any[] = [];
  producto: Producto[] = [];
  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    
    /*this.carritoService.carrito$.subscribe((nuevoCarrito) => {
      this.carrito = nuevoCarrito;
      console.log('quepaso?')
    });*/
    this.carrito = JSON.parse(localStorage.getItem('cart') as string)
  
}

  calcularTotal(): number {
    return this.carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad, 0);
  }
}
