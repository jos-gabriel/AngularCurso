import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { LibrosModule } from '../libros/libros.module';
import { PrestamosRoutingModule } from './prestamos-routing.module';



@NgModule({
  declarations: [
    PrestamosComponent,
    SolicitarComponent,
    DevolucionComponent
  ],
  imports: [
    CommonModule,
    LibrosModule,
    PrestamosRoutingModule
  ],
  exports: [
    PrestamosComponent
  ]
})
export class PrestamosModule { }
