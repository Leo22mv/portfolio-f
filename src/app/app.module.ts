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
import { ContactoComponent } from './componentes/paginas/contacto/contacto/contacto.component';
import { EducacionComponent } from './componentes/paginas/educacion/educacion.component';
import { ElementoComponent } from './componentes/paginas/educacion/elemento/elemento.component';
import { OneComponent } from './componentes/paginas/educacion/detalles/one/one.component';
import { ApComponent } from './componentes/paginas/educacion/detalles/ap/ap.component';
import { ObComponent } from './componentes/paginas/educacion/detalles/ob/ob.component';
import { OldVersionComponent } from './old-version/old-version.component';
import { HomeComponent } from './2.0/components/pages/home/home.component';
import { ThreeEngineComponent } from './2.0/components/three-engine/three-engine.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AjustesComponent,
    MsjBienvenidaComponent,
    NavComponent,
    Error404Component,
    ProyectosComponent,
    ProyectoComponent,
    ContactoComponent,
    EducacionComponent,
    ElementoComponent,
    OneComponent,
    ApComponent,
    ObComponent,
    OldVersionComponent,
    HomeComponent,
    ThreeEngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
