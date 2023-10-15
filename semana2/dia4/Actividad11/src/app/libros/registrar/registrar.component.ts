import { Component } from '@angular/core';
import { Libro } from 'src/app/modelos/libro';
import { LibrosService } from '../../servicios/libros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  nuevoLibro: Libro = {
    ISBN: '',
    titulo: '',
    autor: '',
    editorial: '',
    fechaPublicacion: '',
    numeroEjemplares: '',
    disponibles: ''
  };

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private librosService: LibrosService
  ) {}
  registrarLibro() {
    this.librosService.createLibro(this.nuevoLibro).subscribe(
      (resp: Libro) => {
        window.alert("Libro registrado correctamente:");
        console.log('Libro registrado correctamente:', resp);
        this.router.navigate(['/libros/consultar']);
      },
      (error: any) => {
        console.error('Error al registrar el libro:', error);
      }
    );
  }
}
