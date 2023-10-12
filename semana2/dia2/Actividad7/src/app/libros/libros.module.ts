import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLibrosComponent } from './admin-libros/admin-libros.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EditarComponent } from './editar/editar.component';
import { LibrosRoutingModule } from './libros-routing.module';



@NgModule({
  declarations: [
    AdminLibrosComponent,
    ConsultarComponent,
    RegistrarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule
  ],
  exports: [
    ConsultarComponent
  ]
})
export class LibrosModule { }
