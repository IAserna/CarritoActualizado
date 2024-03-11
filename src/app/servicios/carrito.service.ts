// carrito.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carritoSubject = new BehaviorSubject<any[]>([]);
  carrito$: Observable<any[]> = this.carritoSubject.asObservable();

  actualizarCarrito(nuevoCarrito: any[]): void {
    this.carritoSubject.next(nuevoCarrito);
  }
}
