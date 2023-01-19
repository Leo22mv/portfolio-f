import { Component, Input, OnInit } from '@angular/core';
import { IProyecto } from 'src/app/modelos/iproyecto.interface';
import { TemaServiceService } from 'src/app/services/tema-service.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  tema: string = "card h-100"

  foto: string = "foto"
  descripcion: string = "descripcion"

  @Input() proyecto: IProyecto =  {
    urlImagen: "",
    nombre: "",
    descripcion: "",
    tecnologias: [""],
    link: "",
    repo: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  mouseEnter() {
    this.descripcion = "descripcion-mostrada"
    this.foto = "foto2"
  }

  mouseLeave() {
    this.descripcion = "descripcion"
    this.foto = "foto"
  }

}
