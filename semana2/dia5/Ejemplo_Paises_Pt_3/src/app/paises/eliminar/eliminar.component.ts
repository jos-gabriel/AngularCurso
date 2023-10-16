import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pais } from 'src/app/modelos/pais';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css'],
})
export class EliminarComponent implements OnInit {
  idPais?: number;
  pais: Pais = {
    nombre: '',
    bandera: '',
    capital: '',
    poblacion: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private localtion: Location,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idPais = params['id'];
      this.paisService.getPaisPorId(this.idPais).subscribe(
        resp => {
          this.pais = resp;
        }
      );
    });
  }

  regresar() {
    this.localtion.back();
  }

  eliminarPais() {
    this.paisService.deletePais(this.idPais).subscribe(
      resp => {
        console.log(">>>> Eliminar " + JSON.stringify(resp))
        this.localtion.back();
      }
    )
  }
}
