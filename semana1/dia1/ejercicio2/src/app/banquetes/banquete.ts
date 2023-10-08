export class Banquete {
  private _tipo: string;
  private _menu: string;

  constructor(tipo: string, menu: string) {
    this._tipo = tipo;
    this._menu = menu;
  }

  get tipo(): string {
    return this._tipo;
  }

  set tipo(value: string) {
    this._tipo = value;
  }

  get menu(): string {
    return this._menu;
  }

  set menu(value: string) {
    this._menu = value;
  }

  mostrarInformacion(): void {
    console.log (`---------- Banquete ----------`);
    console.log(`Tipo de Banquete: ${this._tipo}`);
    console.log(`Menú: ${this._menu}`);
  }
}
