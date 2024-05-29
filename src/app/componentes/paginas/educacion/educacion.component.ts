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
      nombre: "Universidad Tecnológica Nacional",
      descripcion: "Introducción al desarrollo backend con NodeJS",
      link: "https://drive.google.com/file/d/17YuNwULRcEY68A853c_zQduM1nyHg9Jw/view?usp=sharing",
      detalles: "utn"
    },
    {
      nombre: "Oracle next education",
      descripcion: "Desarrollo web fullstack",
      link: "https://app.aluracursos.com/program/certificate/188316be-996c-45ca-b299-2bdc37cea92f",
      detalles:"one"
    },
    {
      nombre: "Argentina Programa",
      descripcion: "Desarrollo web fullstack",
      link: "https://seprogramar.inti.gob.ar/inti/certificates/verify/RTYu-gd8MAb6t7HI",
      detalles: "ap"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
