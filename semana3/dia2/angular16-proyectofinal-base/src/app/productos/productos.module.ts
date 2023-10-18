import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TagModule } from 'primeng/tag';

const productosRouting: Routes = [
  { path: '', component: AdminComponent, data: { breadcrumb: 'Administración' } },
  { path: 'admin', component: AdminComponent, data: { breadcrumb: 'Administración' } },
  { path: 'agregar', component: AgregarComponent, data: { breadcrumb: 'Agregar Producto' } },
  { path: 'detalles/:id', component: DetallesComponent, data: { breadcrumb: 'Detalles de Producto' } },
  { path: 'editar/:id', component: EditarComponent, data: { breadcrumb: 'Editar Producto' } },
  { path: 'eliminar/:id', component: EliminarComponent, data: { breadcrumb: 'Eliminar Producto' } },
];


@NgModule({
  declarations: [
    AdminComponent,
    AgregarComponent,
    DetallesComponent,
    EditarComponent,
    EliminarComponent,
  ],
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productosRouting),
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    MenuModule,
    TagModule,
  ]
})
export class ProductosModule { }
