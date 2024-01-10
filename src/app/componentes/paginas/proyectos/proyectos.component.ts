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
      urlImagen: "../../../../../assets/img/synth.jpeg",
      nombre: "Simulador de sintetizadores",
      descripcion: "Simulador que permite mezclar 2 sintetizadores de un oscilador cada uno, con sus respectivas envolventes. Desarrollado con Angular a través de la librería Tone.js",
      tecnologias: ["angular"],
      link: "https://daw-demo-f.web.app",
      repo: "https://github.com/Leo22mv/daw",
      estado: "En funcionamiento (En línea)"
    },
    {
      urlImagen: "../../../../../assets/img/pe.jpeg",
      nombre: "Simulador de piano",
      descripcion: "Implementación de funcionalidad y sonido con Javascript a un diseño de piano realizado en CSS por Philip Zastrow",
      tecnologias: ["javascript"],
      link: "https://leo22mv.github.io/pe/",
      repo: "https://github.com/Leo22mv/pe",
      estado: "En funcionamiento (En línea)"
    },
    {
      urlImagen: "../../../../../assets/img/e-commerce.png",
      nombre: "E-commerce 2",
      descripcion: "E-commerce complejo con múltiples funcionalidades",
      tecnologias: ["react"],
      link: "https://wonderful-tulumba-7ded23.netlify.app",
      repo: "https://github.com/Leo22mv/e-c-f-r",
      estado: "En desarrollo (En línea)"
    },
    {
      urlImagen: "../../../../../assets/img/e-commerce.png",
      nombre: "E-commerce",
      descripcion: "E-commerce complejo con múltiples funcionalidades",
      tecnologias: ["angular", "springboot", "node"],
      link: "https://e-commerce-f.web.app/inicio",
      repo: "https://github.com/Leo22mv/ml-f",
      estado: "En desarrollo (En línea)"
    },
    {
      urlImagen: "../../../../../assets/img/calculadora.jpeg",
      nombre: "Calculadora de préstamos",
      descripcion: "Aplicación web desarrollada con React",
      tecnologias: ["react"],
      link: "https://glowing-puppy-f11ebc.netlify.app",
      repo: "https://github.com/Leo22mv/calculadoraPrestamos",
      estado: "En funcionamiento (En línea)"
    },
    {
      urlImagen: "../../../../../assets/img/nakama.png",
      nombre: "Nakama store",
      descripcion: "E-commerce realizado para una tienda de disfraces",
      tecnologias: ["angular", "node"],
      link: "https://nakama-0.web.app/inicio",
      repo: "https://github.com/Leo22mv/Nakama",
      estado: "En funcionamiento (En línea)"
    },
    {
      urlImagen: "../../../../../assets/img/1.jpeg",
      nombre: "Demo Spring Boot",
      descripcion: "Aplicación que realiza un CRUD completo. Desarrollada con Spring Boot ",
      tecnologias: ["springboot"],
      link: "",
      repo: "https://github.com/Leo22mv/SpringBoot",
      estado: "En funcionamiento (Sin desplegar)"
    },
    {
      urlImagen: "../../../../../assets/img/1.jpeg",
      nombre: "Demo sockets",
      descripcion: "Aplicación desarrollada con sockets de Java que simula una conexión entre un cliente y un servidor",
      tecnologias: ["java"],
      link: "",
      repo: "https://github.com/Leo22mv/Sockets",
      estado: "En funcionamiento (Sin desplegar)"
    },
    {
      urlImagen: "../../../../../assets/img/1.jpeg",
      nombre: "Demo JSP + JPA",
      descripcion: "Aplicación desarrollada con JSP+JPA que realiza un CRUD",
      tecnologias: ["java"],
      link: "",
      repo: "https://github.com/Leo22mv/JSP-JPA",
      estado: "En funcionamiento (Sin desplegar)"
    },
    {
      urlImagen: "../../../../../assets/img/square.png",
      nombre: "Demo",
      descripcion: "Videojuego de plataformas para web, con 5 niveles y un jefe, desarrollado con CSS y Javascript",
      tecnologias: ["html", "css", "javascript"],
      link: "",
      repo: "https://github.com/Leo22mv/RPG",
      estado: "En funcionamiento (Sin desplegar)"
    },
    {
      urlImagen: "../../../../../assets/img/faze.png",
      nombre: "Laberinto",
      descripcion: "Videojuego para web de 1 nivel, desarrollado en CSS y Javascript",
      tecnologias: ["html", "css", "javascript"],
      link: "",
      repo: "https://github.com/Leo22mv/laberinto",
      estado: "En funcionamiento (Sin desplegar)"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
