import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { SolicitarComponent } from './solicitar/solicitar.component';

const routes: Routes = [
  { path: 'prestamos', component: PrestamosComponent },
  { path: 'prestamos/solicitar', component: SolicitarComponent },
  { path: 'prestamos/devolucion', component: DevolucionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
