import { ElementRef, Injectable, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as THREE from 'three';
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { color } from 'three/examples/jsm/nodes/shadernode/ShaderNode';


@Injectable({
  providedIn: 'root'
})
export class ThreeEngineService implements OnInit, OnDestroy{
  private canvas!: HTMLCanvasElement;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private light!: THREE.Light;

  private controls!: DragControls;

  private logo!: THREE.Group<THREE.Object3DEventMap>;
  private logoDragged: boolean = false

  private torus!: THREE.Mesh;
  private torus2!: THREE.Mesh;

  private frameId!: number;

  private limit!: number;
  private limit2!: number;

  private pointer!: THREE.Vector2
  private raycaster!: THREE.Raycaster

  private distanceFromTopToBottom!: number

  private loader: GLTFLoader = new GLTFLoader();

  private boxShadow: string = ""

  constructor(private ngZone: NgZone) { }

  public ngOnInit() {
    
  }

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId)
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    this.distanceFromTopToBottom = document.body.getBoundingClientRect().bottom;


    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    })
    this.renderer.setSize(window.innerWidth , window.innerHeight);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, (window.innerWidth) / window.innerHeight, 0.1, 1000
    );
    this.camera.position.set(0, 2.3, 5)

    this.scene.add(this.camera);

    this.light = new THREE.AmbientLight(0xffffff, 0.1)
    this.light.position.z = 10;
    this.scene.add(this.light)

    const pointLight = new THREE.PointLight(0xffffff, 5, 4, 1)
    pointLight.position.set(0, 3, 2);
    this.scene.add(pointLight)

    const gridHelper = new THREE.GridHelper(50, 50)
    // gridHelper.position.z += 1
    this.scene.add(gridHelper)

    const cube = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.5, 40, 1, false), new THREE.MeshStandardMaterial({ color: 0xffffff })); // , wireframe: true }));
    cube.position.y = 0.25
    this.scene.add(cube);

    this.torus = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.03), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    this.torus2 = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.03), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    this.torus.position.y = 2
    this.torus2.position.y = 2
    this.scene.add(this.torus, this.torus2);
    
    this.loader.load('/assets/3d/logo.glb', (gltf) => {
      this.logo = gltf.scene     
      this.logo.position.y = 2
      this.logo.scale.set(1.5, 1.5, 1.5)
      this.logo.rotation.y = Math.PI
      this.scene.add(this.logo)
    }, undefined, (err) => {
      console.error(err)
    })

    this.loader.load('/assets/3d/desktop_pc/scene.gltf', (gltf) => {
      gltf.scene.position.set(-20, 0.5, 15.5)
      this.scene.add(gltf.scene)
    }, undefined, (err) => {
      console.error(err)
    })

    // const cube3 = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), new THREE.MeshStandardMaterial({ color: 0xff0000 }));
    // cube3.position.set(-15, 2, 17)
    // this.scene.add(cube3)


    // this.controls = new DragControls([this.logo], this.camera, canvas.nativeElement)
    // this.controls.mode = 'rotate'
    // this.controls.rotateSpeed = 5
    // this.controls.addEventListener('dragstart', () => {
    //   this.logoDragged = true
    // })

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
        // console.log("asd");
        
      })

      window.addEventListener('resize', () => {
        this.resize();
        // console.log("asd");
        
      })

      // window.addEventListener('mousemove', this.onMouseMove)
    })
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    // if (!this.logoDragged) {
    //   this.logo.rotation.y += 0.01;
    // }

    // this.torus.material = new THREE.MeshBasicMaterial({ color: 0x960096 })
    
    this.torus.rotation.set(this.torus.rotation.x += 0.02, this.torus.rotation.y += 0.02, 0)
    this.torus2.rotation.set(this.torus2.rotation.x -= 0.005, this.torus2.rotation.y -= 0.005, 0)
    
    // this.raycaster.setFromCamera(this.pointer, this.camera);
    // const intersects = this.raycaster.intersectObjects([this.torus]);

    // if (intersects.length > 1) {
    //   for (let i = 0; intersects.length; i++) {
    //     console.log(intersects[i])
    //   }
    // }

    this.renderer.render(this.scene, this.camera)
  }

  private resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
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
    const b = document.body.getBoundingClientRect().bottom;

    // if (this.camera.position.z >= 18) {
    //   this.camera.position.z = 18
    //   if (this.limit == null) {
    //     this.limit = t
    //   }
    // }
    
    // if (this.limit == null || t > this.limit) {
      // this.camera.position.z = 5 + t * -0.01;
      // this.camera.rotation.y = 0
    // } else {
    //   if (this.camera.rotation.y < 1.5708 || t > this.limit2) {
    //     this.camera.rotation.y = (t - this.limit) * -0.005;
    //     if (this.camera.rotation.y > 1.5708) {
    //       this.camera.rotation.y = 1.5708
    //     }
    //   } else {
    //     if (this.limit2 == null) {
    //       this.limit2 = t
    //     }
    //     this.camera.rotation.y = 1.5708
    //   }
    // }

    if (t >= -1300) {
      this.camera.position.z = 5 + t * -0.01;
      this.camera.rotation.y = 0
      this.camera.position.x = 0
      if (this.camera.position.z > 17) {
        this.camera.position.z = 17
      }
    } else if (t >= -1650) {
      this.camera.rotation.y = (t + 1300) * -0.005;
      this.camera.position.x = 0
      this.camera.position.z = 17
      if (this.camera.rotation.y > Math.PI / 2) {
        this.camera.rotation.y = Math.PI / 2
      }
    } else {
      this.camera.position.x = (t + 1650) * 0.01;
      this.camera.rotation.y = Math.PI / 2
      this.camera.position.z = 17
    }

    // console.log(t + ", " + b)
    // this.camera.position.x = t * -0.0002;
    // this.camera.rotation.y = t * -0.0002;

    if (t != 0) {
      document.getElementById("scroll")!.style.opacity = (1 + (t / 50)).toString()
    }
  }

  private onMouseMove(event: any) {
    // const pointer = new THREE.Vector2()
    // const raycaster = new THREE.Raycaster()

    event.preventDefault();

    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 - 1;

    // console.log(pointer);
  }
}
