import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { SolicitarComponent } from './solicitar/solicitar.component';

const routes: Routes = [{
  path: '',
  component: PrestamosComponent,

  children: [
    {path: 'devolucion', component: DevolucionComponent},
    {path: 'solicitar', component: SolicitarComponent}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
