import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLibrosComponent } from './admin-libros/admin-libros.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EditarComponent } from './editar/editar.component';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosService } from '../servicios/libros.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminLibrosComponent,
    ConsultarComponent,
    RegistrarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule
  ],
  exports: [
    ConsultarComponent
  ],
  providers: [
    LibrosService
  ]
})
export class LibrosModule { }
