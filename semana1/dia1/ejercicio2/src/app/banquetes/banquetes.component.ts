import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { Banquete } from './banquete';
import { Evento } from '../evento/evento';
import { Pago } from '../pago/pago';

@Component({
  selector: 'app-banquetes',
  templateUrl: './banquetes.component.html'
})

export class BanquetesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const cliente = new Cliente('Gabriel Hernández', true, true);
    const banquete = new Banquete('Cena', 'Informal');
    const ubicacionEvento = {
      calle: 'Siempre viva',
      numero: '123-A',
      colonia: 'Tlalnemex',
      ciudad: 'Estado de México',
      referencia: 'Cerca del tinaco de agua',
    };
    const evento = new Evento('09/10/2023', 100, ubicacionEvento);
    const pago = new Pago(250000, 30, 75000);

    cliente.mostrarInformacion();
    banquete.mostrarInformacion();
    pago.mostrarInformacion();
    evento.mostrarInformacion();

    // Función de cálculo de área de un cuadrado con notación de flecha
    const ladoDelCuadrado = 8;
    const calcularAreaCuadrado = (lado: number) => lado * lado;
    const area = calcularAreaCuadrado(ladoDelCuadrado);
    console.log(`
    El área del cuadrado con lado ${ladoDelCuadrado} es: ${area}
    `);

  }


}
