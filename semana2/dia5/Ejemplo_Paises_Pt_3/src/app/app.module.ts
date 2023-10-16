import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaisesModule } from './paises/paises.module';
import { PaisesRoutingModule } from './routing/paises-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgregarTextoPersonasPipe } from './pipes/agregar-texto-personas.pipe';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaisesModule,
    PaisesRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//BrowserModule, PaisesModule, PaisesRoutingModule, NgbModule, HttpClientModule
