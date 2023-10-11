import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements
  OnInit,
  OnChanges,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() parentData: string =  '';

  constructor() {

    console.log('%cEjecutando: Constructor desde componente child', 'color: grey');
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['parentData'].currentValue == "Texto enviado desde app-component" ) {
      console.log('%cEjecutando: ngOnChanges desde componente child', 'color: orange');
    } else {
      const newValue = changes['parentData'].currentValue;
      console.log(`%cparentData: ${newValue} : ngOnChanges desde componente child`, `color: orange`);
    }

  }

  ngOnInit() {
    console.log('%cEjecutando: ngOnInit desde componente child', 'color: green');
  }

  ngDoCheck() {
    console.log('%cEjecutando: ngDoCheck desde componente child', 'color: teal');
  }

  ngAfterContentInit() {
    console.log('%cEjecutando: ngAfterContentInit desde componente child', 'color: magenta');
  }

  ngAfterContentChecked() {
    console.log('%cEjecutando: ngAfterContentChecked desde componente child', 'color: silver');
  }

  ngAfterViewInit() {
    console.log('%cEjecutando: ngAfterViewInit desde componente child', 'color: turquoise');
  }

  ngAfterViewChecked() {
    console.log('%cEjecutando: ngAfterViewChecked desde componente child', 'color: red');
  }

  ngOnDestroy() {
    console.log('%cEjecutando: ngOnDestroy desde componente child', 'color: brown');
  }

}
