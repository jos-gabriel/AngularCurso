import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/modelos/libro';
import { LibrosService } from '../../servicios/libros.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent implements OnInit {
  idLibro!: number ;
  libro: Libro | undefined;

  constructor(
    private route: ActivatedRoute,
    private librosService: LibrosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idLibro = params['id'];
      this.librosService.getLibroById(this.idLibro).subscribe(
        (resp: Libro) => {
          this.libro = resp;
        },
        (error: any) => {
          console.error('Error al cargar el libro:', error);
        }
      );
    });
  }

  guardarEdicion() {
    if (this.libro) {
      const confirmacion = window.confirm('¿Desea guardar los cambios?');
      if (confirmacion) {
        this.librosService.updateLibro(this.libro).subscribe(
          (resp: Libro) => {
            console.log('Libro actualizado:', resp);
          },
          (error: any) => {
            console.error('Error al actualizar el libro:', error);
          }
        );
      }
    }
  }
}
