import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TemaServiceService } from 'src/app/services/tema-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {

  @Output() evento = new EventEmitter<boolean>()

  temaDark: boolean = this.temaS.temaDark;

  navTema: string = this.temaS.navTema;
  offCanvasTema: string = this.temaS.offCanvasTema;
  colorTexto: string = this.temaS.colorTexto;

  constructor(private temaS: TemaServiceService, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  cambiarTema() {
    if (this.temaDark) {
      this.temaS.navTema = "navbar bg-light fixed-top";
      this.temaS.offCanvasTema = "offcanvas offcanvas-top";  
      this.temaS.colorTexto = "textoLight";
    } else {
      this.temaS.navTema = "navbar bg-dark fixed-top";
      this.temaS.offCanvasTema = "offcanvas offcanvas-top text-bg-dark";
      this.temaS.colorTexto = "textoDark";
    }
    this.temaS.temaDark = !this.temaS.temaDark

    this.temaDark = this.temaS.temaDark;
    this.navTema = this.temaS.navTema;
    this.offCanvasTema = this.temaS.offCanvasTema;
    this.colorTexto = this.temaS.colorTexto;

    this.evento.emit(this.temaDark);
  }
}
