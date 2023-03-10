import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaServiceService {

  temaCarta: string = "cartaLight"

  temaDark: boolean = false;

  navTema: string = "navbar bg-light fixed-top"
  offCanvasTema: string = "offcanvas offcanvas-top"
  colorTexto: string = "textoLight";

  constructor() { }
}
