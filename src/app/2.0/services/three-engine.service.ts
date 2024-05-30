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

  private limit!: number;
  private limit2!: number;

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
    this.renderer.setSize(window.innerWidth , window.innerHeight);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, (window.innerWidth) / window.innerHeight, 0.1, 1000
    );
    this.camera.position.set(0, 1.8, 5)
    if (window.innerWidth > 1440) {
      this.camera.position.y = 1.3
    }
    // this.camera.rotateX(-0.3)
    this.scene.add(this.camera);

    this.light = new THREE.AmbientLight(0xffffff, 0.03)
    this.light.position.z = 10;
    this.scene.add(this.light)

    const pointLight = new THREE.PointLight(0xffffff, 5, 4, 1)
    pointLight.position.set(0, 3, 2);
    this.scene.add(pointLight)

    const lightHelper = new THREE.PointLightHelper(pointLight)
    // this.scene.add(lightHelper)

    const gridHelper = new THREE.GridHelper(50, 50)
    this.scene.add(gridHelper)

    const cube = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.5, 40, 1, false), new THREE.MeshStandardMaterial({ color: 0xffffff })); // , wireframe: true }));
    cube.position.y = 0.25
    this.scene.add(cube);

    this.cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0xff0000 }));
    this.cube2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 }));
    this.torus = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.03), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
    this.torus2 = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.03), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
    this.cube.position.y = 2
    this.cube2.position.y = 2
    this.torus.position.y = 2
    this.torus2.position.y = 2
    this.scene.add(this.cube, this.cube2, this.torus, this.torus2);
    
    const loader = new FBXLoader();
    loader.load('/assets/3d/Reload.fbx', (fbx) => {
      fbx.position.y = 2
      this.scene.add(fbx)
    }, undefined, (err) => console.error(err))


    // this.controls = new OrbitControls(this.camera, canvas.nativeElement)
    // this.controls.enableDamping = true
    // this.controls.target = new THREE.Vector3(0, 2, 0)

    for (let i = 0; i < 1500; i++) {
      this.addStar()
    }
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

      window.addEventListener('scroll', () => {
        this.moveCamera()
      })

      window.addEventListener('resize', () => {
        this.resize();
      })
    })
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    // this.controls.update()
    this.cube.rotation.y += 0.01;
    this.cube2.rotation.y += 0.01;
    
    this.torus.rotation.set(this.torus.rotation.x += 0.02, this.torus.rotation.y += 0.02, 0)
    this.torus2.rotation.set(this.torus2.rotation.x -= 0.005, this.torus2.rotation.y -= 0.005, 0)
    
    this.renderer.render(this.scene, this.camera)
  }

  private resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.camera.aspect = window.innerWidth / window.innerHeight
  }


  private addStar() {
    const geometry = new THREE.SphereGeometry(0.02, 24, 24);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    // const [x, z] = Array(2)
    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => {
        let position = 0
        // while (position < 2 && position > -2) {
          position = THREE.MathUtils.randFloatSpread(50)
        // }
        return position
      });
    
      // let y: number = 0
      // while (y < 4 && y >= 0) {
      //   y = THREE.MathUtils.randFloatSpread(10)
      // }
    
    star.position.set(x, y, z);
    this.scene.add(star);
  }
  

  private moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    if (this.camera.position.z >= 18) {
      this.camera.position.z = 18
      if (this.limit == null) {
        this.limit = t
      }
    }
    
    if (this.limit == null || t > this.limit) {
      this.camera.position.z = 5 + t * -0.01;
      this.camera.rotation.y = 0
    } else {
      if (this.camera.rotation.y < 1.5708 || t > this.limit2) {
        this.camera.rotation.y = (t - this.limit) * -0.005;
        if (this.camera.rotation.y > 1.5708) {
          this.camera.rotation.y = 1.5708
        }
      } else {
        if (this.limit2 == null) {
          this.limit2 = t
        }
        this.camera.rotation.y = 1.5708
      }
    }

    console.log(this.camera.rotation.y)
    // this.camera.position.x = t * -0.0002;
    // this.camera.rotation.y = t * -0.0002;
  }
}
