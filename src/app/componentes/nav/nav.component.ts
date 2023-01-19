import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  temaDark: boolean = false;

  navTema: string = "navbar bg-light fixed-top"
  offCanvasTema: string = "offcanvas offcanvas-top"
  colorTexto: string = "textoLight";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTema() {
    if (this.temaDark) {
      this.navTema = "navbar bg-light fixed-top";
      this.offCanvasTema = "offcanvas offcanvas-top";  
      this.colorTexto = "textoLight";
    } else {
      this.navTema = "navbar bg-dark fixed-top";
      this.offCanvasTema = "offcanvas offcanvas-top show text-bg-dark";
      this.colorTexto = "textoDark";
    }
    this.temaDark = !this.temaDark
  }
}
