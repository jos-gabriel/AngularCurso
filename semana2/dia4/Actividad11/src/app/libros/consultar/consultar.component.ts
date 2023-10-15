import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/modelos/libro';
import { LibrosService } from '../../servicios/libros.service';


@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html'
})
export class ConsultarComponent implements OnInit {
  libros: Libro[] = [];

  constructor(
    private librosService: LibrosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.librosService.getLibros().subscribe(
      resp => {
        this.libros = resp;
      }
    );
  }

  editarLibro(id?: number) {
    if (id !== undefined) {
      this.router.navigate(['/libros/editar', id]);
    }
  }
}
