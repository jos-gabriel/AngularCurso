import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLibrosComponent } from './admin-libros/admin-libros.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [{

  path:'',
  component: AdminLibrosComponent,

  children: [
    {path: 'consultar', component: ConsultarComponent},
    {path: 'registrar', component: RegistrarComponent},
    {path: 'editar', component: EditarComponent}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
