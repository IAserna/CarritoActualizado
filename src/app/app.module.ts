import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModprimengModule } from './modprimeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componentes/plantillas/header/header.component';
import { FooterComponent } from './componentes/plantillas/footer/footer.component';
import { ProductosModule } from './modulos/productos/productos.module';
import { ProductosService } from './servicios/productos.service';
import { CartComponent } from './componentes/cart/cart.component';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModprimengModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductosModule,
    
   

  ],
  providers: [
    MessageService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private service:ProductosService){
    localStorage.setItem('cart', JSON.stringify([]))
  }
}
