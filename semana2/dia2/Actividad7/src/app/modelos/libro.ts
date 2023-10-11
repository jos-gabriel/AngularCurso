export class Libro {
  private _ISBN: string;
  private _titulo: string;
  private _autor: string;
  private _editorial: string;
  private _fechaPublicacion: string;
  private _numeroEjemplares: string;
  private _disponibles: string;

  constructor(
    ISBN: string,
    titulo: string,
    autor: string,
    editorial: string,
    fechaPublicacion: string,
    numeroEjemplares: string,
    disponibles: string
  ) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._editorial = editorial;
    this._fechaPublicacion = fechaPublicacion;
    this._numeroEjemplares = numeroEjemplares;
    this._disponibles = disponibles;
  }

  public get ISBN(): string {
    return this._ISBN;
  }

  public set ISBN(value: string) {
    this._ISBN = value;
  }

  public get titulo(): string {
    return this._titulo;
  }

  public set titulo(value: string) {
    this._titulo = value;
  }

  public get autor(): string {
    return this._autor;
  }

  public set autor(value: string) {
    this._autor = value;
  }

  public get editorial(): string {
    return this._editorial;
  }

  public set editorial(value: string) {
    this._editorial = value;
  }

  public get fechaPublicacion(): string {
    return this._fechaPublicacion;
  }

  public set fechaPublicacion(value: string) {
    this._fechaPublicacion = value;
  }

  public get numeroEjemplares(): string {
    return this._numeroEjemplares;
  }

  public set numeroEjemplares(value: string) {
    this._numeroEjemplares = value;
  }

  public get disponibles(): string {
    return this._disponibles;
  }

  public set disponibles(value: string) {
    this._disponibles = value;
  }
}
