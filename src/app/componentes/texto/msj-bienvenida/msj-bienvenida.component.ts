import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msj-bienvenida',
  templateUrl: './msj-bienvenida.component.html',
  styleUrls: ['./msj-bienvenida.component.css']
})
export class MsjBienvenidaComponent implements OnInit {

  desarrollador: string = "[desarrollador]"
  web: string = "<web />"
  llave: string = "{"
  llave2: string = "}"

  constructor() { }

  ngOnInit(): void {
  }

}
