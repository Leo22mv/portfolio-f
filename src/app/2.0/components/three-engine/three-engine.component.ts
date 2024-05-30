import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThreeEngineService } from '../../services/three-engine.service';

@Component({
  selector: 'app-three-engine',
  templateUrl: './three-engine.component.html',
  styleUrls: ['./three-engine.component.css']
})
export class ThreeEngineComponent implements OnInit {

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private engServ: ThreeEngineService, private engServ2: ThreeEngineService) { }

  ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}
