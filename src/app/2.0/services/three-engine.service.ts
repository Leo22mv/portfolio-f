import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

@Injectable({
  providedIn: 'root'
})
export class ThreeEngineService {
  private canvas!: HTMLCanvasElement;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private light!: THREE.Light;
  private controls!: OrbitControls;

  private cube!: THREE.Mesh;
  private cube2!: THREE.Mesh;

  private torus!: THREE.Mesh;
  private torus2!: THREE.Mesh;

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

    this.light = new THREE.AmbientLight(0xffffff, 0.03)
    this.light.position.z = 10;
    this.scene.add(this.light)

    this.light = new THREE.PointLight(0xffffff, 5, 4, 1)
    this.light.position.set(0, 2, 2);
    this.scene.add(this.light)

    const cube = new THREE.Mesh(new THREE.BoxGeometry(4, 2, 4), new THREE.MeshStandardMaterial({ color: 0x555555 }));
    cube.position.y = -2.5
    this.scene.add(cube);

    this.cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0xff0000 }));
    this.scene.add(this.cube);

    this.cube2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 }));
    this.scene.add(this.cube2);

    this.torus = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.03), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
    this.scene.add(this.torus);

    this.torus2 = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.03), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
    this.scene.add(this.torus2);
    
    const loader = new FBXLoader();
    loader.load('/assets/3d/Reload.fbx', (fbx) => {
      fbx.position.y = 2
      this.scene.add(fbx)
      console.log("das")
    }, undefined, (err) => console.error(err))


    this.controls = new OrbitControls(this.camera, canvas.nativeElement)
    this.controls.enableDamping = true
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

    this.controls.update()
    this.cube.rotation.y += 0.01;
    this.cube2.rotation.y += 0.01;
    
    this.torus.rotation.set(this.torus.rotation.x += 0.02, this.torus.rotation.y += 0.02, 0)
    this.torus2.rotation.set(this.torus2.rotation.x -= 0.005, this.torus2.rotation.y -= 0.005, 0)
    
    this.renderer.render(this.scene, this.camera)
  }
}
