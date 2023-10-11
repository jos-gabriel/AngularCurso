import { Component, ElementRef, ViewChild } from '@angular/core';
import { SelectorColorComponent } from './selector-color/selector-color.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'ActividadViewQueries';

  @ViewChild('divPrincipal', { static: true }) divPrincipal!: ElementRef
  @ViewChild(SelectorColorComponent) selectorComponent!: SelectorColorComponent;

  ngAfterViewInit() {
    this.divPrincipal.nativeElement.style.backgroundColor = this.selectorComponent.colorPorOmision;
  }

  getColor() {
    this.divPrincipal.nativeElement.style.backgroundColor = this.selectorComponent.getValorColor();
  }
}
