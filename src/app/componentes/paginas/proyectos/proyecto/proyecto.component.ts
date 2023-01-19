import { Component, Input, OnInit } from '@angular/core';
import { IProyecto } from 'src/app/modelos/iproyecto.interface';
import { TemaServiceService } from 'src/app/services/tema-service.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  temaCarta: string = this.temaS.temaCarta

  tema: string = "card"

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

  constructor(private temaS:TemaServiceService) { }

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
