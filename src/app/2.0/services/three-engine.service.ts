import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

@Injectable({
  providedIn: 'root'
})
export class ThreeEngineService {
  private canvas!: HTMLCanvasElement;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private light!: THREE.Light;

  private cube!: THREE.Mesh;

  private frameId!: number;

  constructor(private ngZone: NgZone) { }

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId)
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // Transparent background
      antialias: true // Smooth edges
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // this.light = new THREE.AmbientLight(0x000000)
    // this.light.position.z = 10;
    // this.scene.add(this.light)

    // this.light = new THREE.PointLight(0x000000, 1, 5, 1)
    // this.light.position.y = 2;
    // this.scene.add(this.light)

    this.cube = new THREE.Mesh(new THREE.BoxGeometry(5, 2, 1), new THREE.MeshBasicMaterial({ color: 0x555555 }));
    this.cube.position.y = -2.5
    this.scene.add(this.cube);

    this.cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    this.scene.add(this.cube);


    const controls = new OrbitControls(this.camera, canvas.nativeElement)
    
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

      // window.addEventListener('resize', () => {
      //   this.resize();
      // })
    })
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera)
  }
}
