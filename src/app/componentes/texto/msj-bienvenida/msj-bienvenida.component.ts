import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TemaServiceService } from 'src/app/services/tema-service.service';

@Component({
  selector: 'app-msj-bienvenida',
  templateUrl: './msj-bienvenida.component.html',
  styleUrls: ['./msj-bienvenida.component.css']
})
export class MsjBienvenidaComponent implements OnInit, OnChanges {

  @Input() temaDark: boolean | undefined;

  desarrollador: string = "[desarrollador]"
  web: string = "<web />"
  llave: string = "{"
  llave2: string = "}"

  constructor(private temaS: TemaServiceService) { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }
  

}
