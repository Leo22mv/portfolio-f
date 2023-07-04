import { Component, Input, OnInit } from '@angular/core';
import { IEducacion } from 'src/app/modelos/ieducacion.interface';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {

  @Input() elemento: IEducacion =  {
    nombre: "a",
    descripcion: "",
    link: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
