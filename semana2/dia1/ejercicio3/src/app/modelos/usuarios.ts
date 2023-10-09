export class Usuario {
  private _nombreCompleto: string;
  private _usuario: string;
  private _numeroTelefonico: string;

  constructor(nombreCompleto: string, usuario: string, numeroTelefonico: string) {
    this._nombreCompleto = nombreCompleto;
    this._usuario = usuario;
    this._numeroTelefonico = numeroTelefonico;
  }

  get nombreCompleto(): string {
    return this._nombreCompleto;
  }

  set nombreCompleto(value: string) {
    this._nombreCompleto = value;
  }

  get usuario(): string {
    return this._usuario;
  }

  set usuario(value: string) {
    this._usuario = value;
  }

  get numeroTelefonico(): string {
    return this._numeroTelefonico;
  }

  set numeroTelefonico(value: string) {
    this._numeroTelefonico = value;
  }
}
