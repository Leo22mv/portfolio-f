import { Component, Input, OnInit } from '@angular/core';
import { TemaServiceService } from 'src/app/services/tema-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @Input() bg: string = "Logo-bg";

  constructor(private temaS: TemaServiceService) { }

  ngOnInit(): void {
  }

}
