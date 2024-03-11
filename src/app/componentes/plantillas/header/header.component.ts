
import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CartComponent } from '../../cart/cart.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
showCart() {
throw new Error('Method not implemented.');
}
  sidebarVisible: boolean = false;

  constructor(private dialogService: DialogService) {}

  openCartDialog() {
    const ref = this.dialogService.open(CartComponent, {
      header: 'Carrito de Compras',
      width: '70%',
      style: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }
}
