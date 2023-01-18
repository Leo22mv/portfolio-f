import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msj-bienvenida',
  templateUrl: './msj-bienvenida.component.html',
  styleUrls: ['./msj-bienvenida.component.css']
})
export class MsjBienvenidaComponent implements OnInit {

  idioma: string = "spanish";

  constructor() { }

  ngOnInit(): void {
  }

}
