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
      descripcion: "E-commerce sencillo realizado para una tienda de disfraces",
      tecnologias: ["angular", "node"],
      link: "https://nakama-0.web.app/inicio",
      repo: "https://github.com/Leo22mv/Nakama",
      estado: "En funcionamiento (En línea)"
    },
    {
      urlImagen: "../../../../../assets/img/1.jpg",
      nombre: "Demo JSP + JPA",
      descripcion: "Aplicación desarrollada con JSP+JPA que realiza un CRUD sencillo",
      tecnologias: ["java"],
      link: "https://e-commerce-f.web.app/inicio",
      repo: "https://github.com/Leo22mv/JSP-JPA",
      estado: "En funcionamiento (Sin desplegar)"
    },
    {
      urlImagen: "../../../../../assets/img/square.png",
      nombre: "Demo",
      descripcion: "Juego web estático de plataformas, acción y aventura de 5 niveles con un jefe final",
      tecnologias: ["html", "css", "javascript"],
      link: "https://e-commerce-f.web.app/inicio",
      repo: "https://github.com/Leo22mv/RPG",
      estado: "En funcionamiento (Sin desplegar)"
    },
    {
      urlImagen: "../../../../../assets/img/faze.png",
      nombre: "Laberinto",
      descripcion: "Juego web estático de 1 nivel",
      tecnologias: ["html", "css", "javascript"],
      link: "https://e-commerce-f.web.app/inicio",
      repo: "https://github.com/Leo22mv/laberinto",
      estado: "En funcionamiento (Sin desplegar)"
    },
    {
      urlImagen: "../../../../../assets/img/e-commerce.png",
      nombre: "E-commerce",
      descripcion: "E-commerce complejo con múltiples funcionalidades",
      tecnologias: ["angular", "springboot"],
      link: "https://e-commerce-f.web.app/inicio",
      repo: "https://github.com/Leo22mv/ml-f",
      estado: "En desarrollo (En línea)"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
