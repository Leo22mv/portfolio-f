import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/paginas/contacto/contacto/contacto.component';
import { Error404Component } from './componentes/paginas/error404/error404.component';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { ProyectosComponent } from './componentes/paginas/proyectos/proyectos.component';
import { EducacionComponent } from './componentes/paginas/educacion/educacion.component';
import { MsjBienvenidaComponent } from './componentes/texto/msj-bienvenida/msj-bienvenida.component';
import { OneComponent } from './componentes/paginas/educacion/detalles/one/one.component';
import { ApComponent } from './componentes/paginas/educacion/detalles/ap/ap.component';
import { ObComponent } from './componentes/paginas/educacion/detalles/ob/ob.component';
import { OldVersionComponent } from './old-version/old-version.component';
import { HomeComponent } from './2.0/components/pages/home/home.component';

const routes: Routes = [
  {path: "old_version", component: OldVersionComponent, children: [
    {path: "ob", component: ObComponent},
    {path: "ap", component: ApComponent},
    {path: "one", component: OneComponent},
    {path: "educacion", component: EducacionComponent},
    {path: "contacto", component: ContactoComponent},
    {path: "proyectos", component: ProyectosComponent},
    {path: "inicio", component: InicioComponent},
    {path: "**", component: Error404Component}
  ]},

  {path: "home", component: HomeComponent},

  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", redirectTo: "/old_version/**", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
