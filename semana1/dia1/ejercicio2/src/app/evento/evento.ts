export class Evento {
  private _fechaHora: string;
  private _numAsistentes: number;
  private _ubicacion: ubicacion;

  constructor(
    fechaHora: string,
    numAsistentes: number,
    ubicacion: ubicacion
  ) {
    this._fechaHora = fechaHora;
    this._numAsistentes = numAsistentes;
    this._ubicacion = ubicacion;
  }

  get fechaHora(): string {
    return this._fechaHora;
  }

  set fechaHora(value: string) {
    this._fechaHora = value;
  }

  get numAsistentes(): number {
    return this._numAsistentes;
  }

  set numAsistentes(value: number) {
    this._numAsistentes = value;
  }

  get ubicacion(): ubicacion {
    return this._ubicacion;
  }

  set ubicacion(value: ubicacion) {
    this._ubicacion = value;
  }

  mostrarInformacion(): void {
    console.log (`---------- Evento ----------`);
    console.log(`Fecha y Hora del Evento: ${this._fechaHora}`);
    console.log(`Número de Asistentes: ${this._numAsistentes}`);
    console.log (`---------- Ubicación ----------`);
    console.log(`Calle: ${this._ubicacion.calle}`);
    console.log(`Número: ${this._ubicacion.numero}`);
    console.log(`Colonia: ${this._ubicacion.colonia}`);
    console.log(`Ciudad: ${this._ubicacion.ciudad}`);
    console.log(`Referencias: ${this._ubicacion.referencia}`);
  }
}

export interface ubicacion {
  calle: string;
  numero: string;
  colonia: string;
  ciudad: string;
  referencia: string;
}
