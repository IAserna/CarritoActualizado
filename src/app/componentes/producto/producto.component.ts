import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { CartProducto } from '../../interfaces/cart-producto';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  @Input() producto?: Producto;

cart: CartProducto[] = []
 isEncontrado: boolean = false
  constructor() {
    console.log(); 
  }

  get nombre() {
    return this.producto?.nombre
  }

  add(): void {
    this.cart = JSON.parse(localStorage.getItem("cart") as string)
    console.log("agregando")
  
 
    if (this.cart.length > 0 ) {
      this.cart.forEach(elem => {
        if (elem.id === this.producto?.id) {
          elem.cantidad += 1
          this.isEncontrado = true
        }
      })
     if(!this.isEncontrado) {
      this.cart.push({id: this.producto?.id ,
        nombre: this.producto?.nombre as string,
        direccion: this.producto?.direccion as string,
        telefono: this.producto?.telefono as string,
        precio: this.producto?.precio as number,
        imagen: this.producto?.imagen as string,
        cantidad: 1
    })
     }
     
    }else {
      this.cart.push({id: this.producto?.id ,
        nombre: this.producto?.nombre as string,
        direccion: this.producto?.direccion as string,
        telefono: this.producto?.telefono as string,
        precio: this.producto?.precio as number,
        imagen: this.producto?.imagen as string,
        cantidad: 1
    })
  }
  localStorage.setItem("cart",  JSON.stringify(this.cart));
  }  
}

