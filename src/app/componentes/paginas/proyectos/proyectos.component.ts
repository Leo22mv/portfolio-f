import { Component, Input, OnInit } from '@angular/core';
import { IProyecto } from 'src/app/modelos/iproyecto.interface';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listaProyectos: IProyecto[] = [
    {
      urlImagen: "../../../../../assets/img/nakama.png",
      nombre: "Nakama store",
      descripcion: "E-commerce realizado para una tienda de disfraces",
      tecnologias: [""],
      link: "https://nakama-0.web.app/inicio",
      repo: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
