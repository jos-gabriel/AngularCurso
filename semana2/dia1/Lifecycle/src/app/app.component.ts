import { Component, OnInit, OnChanges, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
  OnInit,
  OnChanges,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy

{
  title = 'Ejercicio 5 Lifecycle';

  data: string = 'Texto enviado desde app-component';
  parentData: string= '';

  constructor() {
    console.log('%cEjecutando: Constructor desde componente app', 'color: grey');
  }

  ngOnChanges() {
    console.log('%cEjecutando: ngOnChanges desde componente app', 'color: orange');
  }

  ngOnInit() {
    console.log('%cEjecutando: ngOnInit desde componente app', 'color: green');
  }

  ngDoCheck() {
    console.log('%cEjecutando: ngDoCheck desde componente app', 'color: teal');
  }

  ngAfterContentInit() {
    console.log('%cEjecutando: ngAfterContentInit desde componente app', 'color: magenta');
  }

  ngAfterContentChecked() {
    console.log('%cEjecutando: ngAfterContentChecked desde componente app', 'color: silver');
  }

  ngAfterViewInit() {
    console.log('%cEjecutando: ngAfterViewInit desde componente app', 'color: turquoise');
  }

  ngAfterViewChecked() {
    console.log('%cEjecutando: ngAfterViewChecked desde componente app', 'color: red');
  }

  ngOnDestroy() {
    console.log('%cEjecutando: ngOnDestroy desde componente app', 'color: brown');
  }

}
