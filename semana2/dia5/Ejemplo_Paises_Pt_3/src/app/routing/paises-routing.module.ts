import { EliminarComponent } from './../paises/eliminar/eliminar.component';
import { EditarComponent } from './../paises/editar/editar.component';
import { AgregarComponent } from './../paises/agregar/agregar.component';
import { BuscarComponent } from './../paises/buscar/buscar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const paisesRoutes: Routes = [
  { path: 'buscar', component: BuscarComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'eliminar/:id', component: EliminarComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(paisesRoutes)],
  exports: [RouterModule],
})
export class PaisesRoutingModule {}
