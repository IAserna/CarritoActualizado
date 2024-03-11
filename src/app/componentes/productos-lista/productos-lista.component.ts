import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../servicios/productos.service';
import { CarritoService } from '../../servicios/carrito.service';
import { CartProducto } from '../../interfaces/cart-producto';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.scss',
})
export class ProductosListaComponent {
 
  cart: CartProducto[] = [];
  isEncontrado: boolean = false;
  producto: Producto[] | undefined;

  constructor(private servicioProductos: ProductosService) {
    servicioProductos.getProductos().subscribe((response) => {
      this.producto = response;
    });
  }

  add(producto:Producto): void {
    this.cart = JSON.parse(localStorage.getItem('cart') as string);
    console.log('agregando <3');

    

    if (this.cart.length > 0) {
      this.cart.forEach((elem) => {
        if (elem.id === producto?.id) {
          elem.cantidad += 1;
          this.isEncontrado = true;
        }
      });
      if (!this.isEncontrado) {
        this.cart.push({
          id: producto?.id,
          nombre: producto?.nombre as string,
          direccion: producto?.direccion as string,
          telefono: producto?.telefono as string,
          precio: producto?.precio as number,
          imagen: producto?.imagen as string,
          cantidad: 1,
        });
      }
    } else {
      
      this.cart.push({
        id: producto?.id,
        nombre: producto?.nombre as string,
        direccion: producto?.direccion as string,
        telefono: producto?.telefono as string,
        precio: producto?.precio as number,
        imagen: producto?.imagen as string,
        cantidad: 1,
      });
      
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getSeverity(producto: Producto) {
    switch (producto.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
}
