export class CuentaBancaria {
  titular:string;
  saldoDisponible?:number;

  constructor(titular:string, saldoDisponible?: number){
    this.titular = titular;
    this.saldoDisponible = saldoDisponible || 0;
  }

  informacionCuenta():void {
    console.log(`------ INFORMACIÓN CUENTA ------`)
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo Disponible: $${this.saldoDisponible?.toLocaleString()}`);
  }

  depositar(cantidad:number):void{
    console.log (`------ DEPÓSITO ------`)
    if (cantidad < 1) {
      console.log(`El monto mínimo de depósito debe ser $1.0`)
    } else {
      this.saldoDisponible = (this.saldoDisponible || 0) + cantidad;
      console.log(`Usted depositó $${cantidad.toLocaleString()}`);
      console.log(`Nuevo saldo disponible: $${this.saldoDisponible?.toLocaleString()}`);
    }
  }

  retirar(cantidad:number){
    console.log(`------ RETIRO ------`)
    if (cantidad <= 0 ) {
      console.log(`El monto mínimo de retiro debe ser mayor que $0.`)
    } else if (this.saldoDisponible !== undefined && this.saldoDisponible < cantidad){
      console.log (`Saldo insuficiente para realizar el retiro de $${cantidad.toLocaleString()}`)
    } else {
      this.saldoDisponible = (this.saldoDisponible || 0) - cantidad;
      console.log (`Usted retiró: $${cantidad.toLocaleString()}`)
      console.log(`Saldo disponible: $${this.saldoDisponible?.toLocaleString()}`);
    }

  }

}
