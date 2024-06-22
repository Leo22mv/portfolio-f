import { Component, ElementRef, OnDestroy, OnInit, ViewChild, NgZone } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit, OnDestroy {

  @ViewChild('canvas', { static: true })
  public canvas!: HTMLCanvasElement;

  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;

  private frameId!: number;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.createScene(this.canvas);
    this.animate();
    // document.body.appendChild(this.renderer.domElement)
  }

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId)
    }
  }

  public createScene(canvas: HTMLCanvasElement): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    })
    this.renderer.setSize(200, 200);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, 1, 0.1, 1000
    );
    this.camera.position.set(0, 0, 5)

    this.scene.add(this.camera);

    const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    this.scene.add(cube)
  }

  public animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== "loading") {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        })
      }

      // window.addEventListener('scroll', () => {
      //   this.moveCamera()
      // })

      // window.addEventListener('resize', () => {
      //   this.resize();
      // })
    })
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });   

    this.renderer.render(this.scene, this.camera)
  }

}