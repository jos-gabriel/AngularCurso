import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html'
})
export class DemoPipeComponent implements OnInit {

  libros: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/assets/libros.json').subscribe(data => {
      this.libros = data;
      console.log('Datos cargados:', data);
    });
  }
}
