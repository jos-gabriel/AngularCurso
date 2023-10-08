export class Cliente {
  private _nombre: string;
  private _esDistinguido: boolean;
  private _tieneDescuentos: boolean;

  constructor(
    nombre: string,
    esDistinguido: boolean,
    tieneDescuentos: boolean
    ) {
    this._nombre = nombre;
    this._esDistinguido = esDistinguido;
    this._tieneDescuentos = tieneDescuentos;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get esDistinguido(): boolean {
    return this._esDistinguido;
  }

  set esDistinguido(value: boolean) {
    this._esDistinguido = value;
  }

  get tieneDescuentos(): boolean {
    return this._tieneDescuentos;
  }

  set tieneDescuentos(value: boolean) {
    this._tieneDescuentos = value;
  }

  mostrarInformacion(): void {
    console.log (`---------- Cliente ----------`);
    console.log(`Nombre: ${this._nombre}`);
    console.log(`¿Es cliente distinguido?: ${this._esDistinguido ? 'Sí' : 'No'}`);
    console.log(`¿Tiene derecho a descuentos?: ${this._tieneDescuentos ? 'Sí' : 'No'}`);
  }
}
