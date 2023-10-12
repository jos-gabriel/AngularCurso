import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then (m => m.AuthModule),
  },
  {
    path: 'libros',
    loadChildren: () => import('./libros/libros.module').then (m => m.LibrosModule),
  },
  {
    path: 'prestamos',
    loadChildren: () => import('./prestamos/prestamos.module').then (m => m.PrestamosModule)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
