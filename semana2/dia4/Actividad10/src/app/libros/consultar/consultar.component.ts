import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/modelos/libro';
import { LibrosService } from 'src/app/servicios/libros.service';


@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html'
})
export class ConsultarComponent implements OnInit {
  libros: Libro[] = [];

  constructor(
    private librosService: LibrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.libros = this.librosService.getLibros();
  }

  editarLibro(id?: number) {
    this.router.navigate(['/libros/editar', id]);
  }
}
