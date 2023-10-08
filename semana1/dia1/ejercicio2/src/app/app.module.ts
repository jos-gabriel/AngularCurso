import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BanquetesComponent } from './banquetes/banquetes.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EventoComponent } from './evento/evento.component';
import { PagoComponent } from './pago/pago.component';

@NgModule({
  declarations: [
    AppComponent,
    BanquetesComponent,
    ClienteComponent,
    EventoComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
