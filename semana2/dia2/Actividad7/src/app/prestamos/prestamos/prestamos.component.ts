import { Component } from '@angular/core';
import { Libro } from 'src/app/modelos/libro';
import { Usuario } from 'src/app/modelos/usuarios';
import { Prestamo } from 'src/app/modelos/prestamo';
@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent {

  usuario: Usuario;
  libro: Libro;
  libro2: Libro;
  prestamo: Prestamo;

  constructor(){
    this.usuario = new Usuario (`Josue Gabriel Hernández`, `jos_gabriel`, `5548377411`);
    this.libro = new Libro(
      `9994543772`,
      `Cálculo`,
      `Swokowski`,
      `Iberoamericana`,
      `2000`,
      `200`,
      `20`
    );
    this.prestamo = new Prestamo (`12/12/2022`, `24/12/2022`, `jos_gabriel`);

    this.libro2 = new Libro(
      `999453772`,
      `INGENIERIA MECANICA ESTATICA 12ª ED.`,
      `Hibbeler, Russell Charles`,
      `PRENTICE-HALL`,
      `2010`,
      `20`,
      `5`
    );
  }
}
