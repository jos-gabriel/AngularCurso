import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLibrosComponent } from './admin-libros/admin-libros.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path: 'libros', component: AdminLibrosComponent },
  { path: 'libros/consultar', component: ConsultarComponent },
  { path: 'libros/registrar', component: RegistrarComponent },
  { path: 'libros/editar/:id', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
