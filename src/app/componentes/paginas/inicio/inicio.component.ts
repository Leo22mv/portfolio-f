import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TemaServiceService } from 'src/app/services/tema-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {

  @Input() bg: string = "Logo-bg";

  constructor(private temaS: TemaServiceService) { }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    
  }

}
