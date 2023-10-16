import { PaisService } from './../../servicios/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pais } from 'src/app/modelos/pais';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
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
      this.paisService.getPaisPorId(this.idPais).subscribe((resp) => {
        this.pais = resp;
      });
    });
  }

  regresar() {
    this.localtion.back();
  }

  editarPais() {
    this.pais.nombre = 'NUEVO NOMBRE';
    this.paisService.updatePais(this.pais).subscribe((resp) => {
      console.log('>>>> Editar ' + JSON.stringify(resp));
      this.localtion.back();
    });
  }
}
