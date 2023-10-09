export class Prestamo {
  private _fechaInicio: string;
  private _fechaDevolucion: string;
  private _usuarioPrestatario: string;

  constructor(
    fechaInicio: string,
    fechaDevolucion: string,
    usuarioPrestatario: string
  ) {
    this._fechaInicio = fechaInicio;
    this._fechaDevolucion = fechaDevolucion;
    this._usuarioPrestatario = usuarioPrestatario;
  }

  get fechaInicio(): string {
    return this._fechaInicio;
  }

  set fechaInicio(value: string) {
    this._fechaInicio = value;
  }

  get fechaDevolucion(): string {
    return this._fechaDevolucion;
  }

  set fechaDevolucion(value: string) {
    this._fechaDevolucion = value;
  }

  get usuarioPrestatario(): string {
    return this._usuarioPrestatario;
  }

  set usuarioPrestatario(value: string) {
    this._usuarioPrestatario = value;
  }
}
