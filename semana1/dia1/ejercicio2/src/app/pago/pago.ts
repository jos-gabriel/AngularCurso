export class Pago {
  private _costoTotal: number;
  private _porcentajeAnticipoMinimo: number;
  private _anticipoRegistrado: number;

  constructor(costoTotal: number, porcentajeAnticipoMinimo: number, anticipoRegistrado: number) {
    this._costoTotal = costoTotal;
    this._porcentajeAnticipoMinimo = porcentajeAnticipoMinimo;
    this._anticipoRegistrado = anticipoRegistrado;
  }

  get costoTotal(): number {
    return this._costoTotal;
  }

  set costoTotal(value: number) {
    this._costoTotal = value;
  }

  get porcentajeAnticipoMinimo(): number {
    return this._porcentajeAnticipoMinimo;
  }

  set porcentajeAnticipoMinimo(value: number) {
    this._porcentajeAnticipoMinimo = value;
  }

  get anticipoRegistrado(): number {
    return this._anticipoRegistrado;
  }

  set anticipoRegistrado(value: number) {
    this._anticipoRegistrado = value;
  }

  mostrarInformacion(): void {
    console.log (`---------- Pago ----------`);
    console.log(`Costo Total: $${this._costoTotal.toLocaleString()}`);
    console.log(`Porcentaje de Anticipo: ${this._porcentajeAnticipoMinimo}%`);
    console.log(`Anticipo a registrar: $${this._anticipoRegistrado.toLocaleString()}`);
  }
}
