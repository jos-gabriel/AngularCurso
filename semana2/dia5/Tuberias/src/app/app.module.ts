import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
