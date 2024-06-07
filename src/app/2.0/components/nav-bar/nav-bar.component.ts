import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private navBarPosition!: number
  private worksPosition!: number

  constructor() { }

  ngOnInit(): void {
    this.updatePositions()
    window.addEventListener('resize', this.updatePositions)
  }  

  private updatePositions() {
    this.navBarPosition = window.innerHeight / 100 * 102.5 + document.getElementsByClassName('title')[0].scrollHeight + 12 + document.getElementsByClassName('presentation')[0].scrollHeight
    this.worksPosition = this.navBarPosition + document.getElementsByClassName('navbar')[0].scrollHeight + 6 + window.innerHeight / 100 * 100
  }

  public scrollToNav() {
    scrollTo({
      behavior: 'smooth',
      top: this.navBarPosition
    })
  }

  public scrollToWorks() {
    scrollTo({
      behavior: 'smooth',
      top: this.worksPosition
    })
  }
}
