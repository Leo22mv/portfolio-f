import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { AjustesComponent } from './componentes/botones/ajustes/ajustes.component';
import { MsjBienvenidaComponent } from './componentes/texto/msj-bienvenida/msj-bienvenida.component';
import { NavComponent } from './componentes/nav/nav.component';
import { Error404Component } from './componentes/paginas/error404/error404.component';
import { ProyectosComponent } from './componentes/paginas/proyectos/proyectos.component';
import { ProyectoComponent } from './componentes/paginas/proyectos/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AjustesComponent,
    MsjBienvenidaComponent,
    NavComponent,
    Error404Component,
    ProyectosComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
