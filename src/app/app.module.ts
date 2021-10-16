import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HereosModule } from './heroes/hereos.module';
// import { HeroeComponent } from './heroes/heroe/hereo.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
// import { ContadorComponent } from './contador/contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HereosModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
