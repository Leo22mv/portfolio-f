import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bg: string = "Logo-bg";
  temaDark: boolean = false
  title = 'portfolio-f';
  actualizarTemaDark (evento: boolean){
    this.temaDark = evento;
    if (this.temaDark) {
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#f3f3f3";
      this.bg = "Logo-bg-dark"
    } else {
      document.body.style.backgroundColor = "#f3f3f3";
      document.body.style.color = "#212529";
      this.bg = "Logo-bg"
    }
  }
}
