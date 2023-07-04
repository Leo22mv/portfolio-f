import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/paginas/contacto/contacto/contacto.component';
import { Error404Component } from './componentes/paginas/error404/error404.component';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { ProyectosComponent } from './componentes/paginas/proyectos/proyectos.component';
import { EducacionComponent } from './componentes/paginas/educacion/educacion.component';

const routes: Routes = [
  {path: "educacion", component: EducacionComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "proyectos", component: ProyectosComponent},
  {path: "inicio", component: InicioComponent},
  {path: "", redirectTo: "/inicio", pathMatch: "full"},
  {path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
