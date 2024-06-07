import { Component, OnInit } from '@angular/core';
import { ThreeEngineService } from '../../services/three-engine.service';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.css']
})
export class ScrollUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scrollUp() {
    scrollTo({
      behavior: 'smooth',
      top: window.innerHeight / 100 * 102.5 + document.getElementsByClassName('title')[0].scrollHeight + 12 + document.getElementsByClassName('presentation')[0].scrollHeight
    })
  }

}
