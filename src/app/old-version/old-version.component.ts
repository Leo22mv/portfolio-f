import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-old-version',
  templateUrl: './old-version.component.html',
  styleUrls: ['./old-version.component.css']
})
export class OldVersionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  temaDark: boolean = false
  title = 'portfolio-f';
  actualizarTemaDark (evento: boolean){
    this.temaDark = evento;
    if (this.temaDark) {
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#f8f9fa";
      // document.getElementById("logobg")?.style.filter = "brightness(50%)"
      // document.documentElement.style.filter = "hue-rotate(180deg)"
      // document.body.style.filter = "hue-rotate(180deg)"
      // document.
      
    } else {
      document.body.style.backgroundColor = "#f8f9fa";
      document.body.style.color = "#212529";
      
    }
  }

}
