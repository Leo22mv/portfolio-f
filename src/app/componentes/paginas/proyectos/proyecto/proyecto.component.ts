import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { IProyecto } from 'src/app/modelos/iproyecto.interface';
import { TemaServiceService } from 'src/app/services/tema-service.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit,OnChanges {

  temaCarta: string = this.temaS.temaCarta

  tema: any = this.claseCarta()

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
  
  ngOnChanges(changes: SimpleChanges): void {
    this.claseCarta()
  }

  ngOnInit(): void {
  }

  claseCarta() {
    if (document.body.style.backgroundColor=="#212529") {
      return "card text-bg-dark";
    } else {
      return "card"
    }
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
