import { Clock, Vector3 } from "three";
import { LifeCycle } from "../types/helpers";
import { Food } from "./food";
import { Ground } from "./ground";
import { Snake } from "./snake";
import { SceneManager } from "../sceneManager";

export class Diorama implements LifeCycle
{
    private snake: Snake;
    private food: Food;
    private ground: Ground;
    private stop: boolean = false;
    private clock: Clock = new Clock();
    private time: number = 0;
    private distance: number = 20;

    private handleResize = () => {
        // Ajusta la distancia de la cámara según el tamaño de la ventana
        // Puedes ajustar los factores para tu preferencia visual
        const minSide = Math.min(window.innerWidth, window.innerHeight);
        // El minSide * 2 es un factor que puedes modificar para acercar/alejar más
        this.distance = Math.max(10, minSide * 3 / 100);
    };
    
    public start(): void 
    {
        this.stop = false;
        this.snake = new Snake();
        this.food = new Food();
        this.ground = new Ground();
       // this.handleResize();
       // window.addEventListener('resize', this.handleResize);
        this.update();
    }
    
    public update(): void 
    {
        if (this.stop) return;
        requestAnimationFrame(this.update.bind(this));
        const delta = this.clock.getDelta();
        this.time += delta;
        this.rotatteCamera();
    }

    private rotatteCamera(): void
    {
        const offset = new Vector3();
        offset.x = this.distance * Math.sin(this.time * 0.1);
        offset.y = 5
        offset.z = this.distance * Math.cos(this.time * 0.1);
        SceneManager.camera.position.copy(offset);
        SceneManager.camera.lookAt(new Vector3(0, 0, 0));
    }
    
    public dispose(): void 
    {
        this.stop = true;
      //  window.removeEventListener('resize', this.handleResize);
        this.snake.dispose();
        this.food.dispose();
        this.ground.dispose();
    }
}