import { Component, OnInit } from '@angular/core';
import { IEducacion } from 'src/app/modelos/ieducacion.interface';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  listaElementos: IEducacion[] = [
    {
      nombre: "Argentina Programa",
      descripcion: "Desarrollador fullstack junior - Angular, SpringBoot, MySQL",
      link: "https://nakama-0.web.app/inicio",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
