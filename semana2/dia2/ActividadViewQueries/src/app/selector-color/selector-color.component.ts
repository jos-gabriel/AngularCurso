import { Component } from '@angular/core';
import { Selector } from 'src/models/selector';

@Component({
  selector: 'app-selector-color',
  templateUrl: './selector-color.component.html',
  styleUrls: ['./selector-color.component.css'],
})
export class SelectorColorComponent {
  colorPorOmision: string = '#6553C1';

  seleccion: Selector = { color: this.colorPorOmision };

  getValorColor() {
    return this.seleccion.color;
  }
}
