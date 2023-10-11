import { Component, Input } from '@angular/core';
import { Libro } from 'src/app/modelos/libro';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent {
  @Input() libro!: Libro;

  mostrarInformacion = false;
}
