import { Component, OnInit } from '@angular/core';
import { CuentaBancaria } from './CuentaBancaria';

@Component({
  selector: 'app-cuenta-bancaria',
  templateUrl: './cuenta-bancaria.component.html'
})
export class CuentaBancariaComponent implements OnInit {

  ngOnInit(): void {

    const cuentaBancaria = new CuentaBancaria('Josué Hernández', 1000);
    cuentaBancaria.informacionCuenta();
    cuentaBancaria.depositar(250);
    cuentaBancaria.depositar(-330);
    cuentaBancaria.depositar(300);
    cuentaBancaria.retirar(400);
    cuentaBancaria.retirar(1300);
    cuentaBancaria.informacionCuenta();
  }

}
