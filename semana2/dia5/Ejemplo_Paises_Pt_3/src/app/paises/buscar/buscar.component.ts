import { PaisService } from './../../servicios/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from 'src/app/modelos/pais';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  paises : Pais[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPais().subscribe(
      resp => {
        this.paises = resp;
      }
    );
  }

  editar(id?: number){
    this.router.navigate(['../editar', id], {relativeTo: this.route});
  }

  eliminar(id?:number){
    this.router.navigate(['../eliminar', id], { relativeTo: this.route });
  }

}
