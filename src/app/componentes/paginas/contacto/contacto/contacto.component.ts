import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  user: string = "user";

  constructor() { }

  ngOnInit(): void {
  }

  mouseEnter() {
    this.user = "user-mostrado"
  }

  mouseLeave() {
    this.user = "user"
  }

}
