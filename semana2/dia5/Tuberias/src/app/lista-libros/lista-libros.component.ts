import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html'
})
export class ListaLibrosComponent implements OnInit {

  libros: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/assets/libros.json').subscribe(data => {
      this.libros = data;
      console.log('Datos cargados:', data);
    });
  }

}
