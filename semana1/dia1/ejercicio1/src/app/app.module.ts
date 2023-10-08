import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CuentaBancariaComponent } from './cuenta-bancaria/cuenta-bancaria.component';

@NgModule({
  declarations: [
    AppComponent,
    CuentaBancariaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
