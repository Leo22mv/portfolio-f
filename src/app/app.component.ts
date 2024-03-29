import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
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
