import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  toggle = document.querySelector("form-check form-witch")

  navLight: string = "navbar bg-light fixed-top"
  offCanvasTema: string = "offcanvas offcanvas-top"

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTema() {
    this.toggle?.classList.toggle("checked");
    if (this.toggle?.classList.contains("checked")) {
      this.navLight = "navbar bg-dark fixed-top"
      this.offCanvasTema = "offcanvas offcanvas-top text-bg-dark"
    }
  }
}
