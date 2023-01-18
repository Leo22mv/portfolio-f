import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { AjustesComponent } from './componentes/botones/ajustes/ajustes.component';
import { MsjBienvenidaComponent } from './componentes/texto/msj-bienvenida/msj-bienvenida.component';
import { NavComponent } from './componentes/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AjustesComponent,
    MsjBienvenidaComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
