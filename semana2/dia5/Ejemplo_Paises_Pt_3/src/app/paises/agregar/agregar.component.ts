import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/modelos/pais';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  agregarPais() {
    let nuevoPais : Pais = {
      nombre: "Nuevo país",
      bandera: "mibandera.png",
      capital: "Mi capital",
      poblacion: 11111
    }

    this.paisService.createPais(nuevoPais).subscribe(
      resp => {
        console.log(">>>> Agregar " + JSON.stringify(resp))
      }
    )
  }
}
