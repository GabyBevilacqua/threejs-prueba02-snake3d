import { BoxGeometry, Color, Mesh, MeshStandardMaterial, Scene } from "three";
import { Directions, LifeCycle } from "../types/helpers";
import { SceneManager } from "../sceneManager";
import { InputManager } from "../input/keyboard";

export class Snake implements LifeCycle
{
    public head: Mesh;
    private geometry: BoxGeometry;
    private material: MeshStandardMaterial;
    public x: number = 0;
    public z: number = 0;
    public tail: Array<Mesh> = [];
    private inputManager: InputManager
    private time: number = 0;
    private cycle: number = 0.2; // Time in seconds to wait before moving again
    public static direction: Directions = Directions.right; // Static direction for the snake

    constructor()
    {
        this.start();
    }

    public start(): void 
    {
        this.inputManager = new InputManager();
        this.geometry = new BoxGeometry(1, 1, 1);
        this.material = new MeshStandardMaterial({ 
            color: new Color(0,0,1),
            emissive: new Color(0, 0, 1), 
            roughness: 0.55,
            metalness: 0.5
            
        });
        this.head = new Mesh(this.geometry, this.material);
        this.head.position.set(this.x, 0, this.z);
        SceneManager.scene.add(this.head); // Add head to the scene
    }

    public update(deltaTime): void 
    {
        this.time += deltaTime;
        if (this.time > this.cycle)
        {
            this.updatePosition();
            this.time = 0;
        }
    }

    public grow(): void 
    {
        for (let i = 0; i < 4; i++) { // Add 4 segments to the tail
            const geometry = new BoxGeometry(1, 1, 1);
            const tail = new Mesh(geometry, this.material);
            tail.position.set(100, 100, 100); // Initial position outside the ground
            SceneManager.scene.add(tail); // Add new segment to the scene
            this.tail.push(tail);
        }
    }

    private updatePosition(): void
    {
        if (this.tail.length > 0)
        {
            this.tail[0].position.set(this.x, 0, this.z)
            for (let i = this.tail.length -1; i >= 1; i--)
            {
                const prev = this.tail[i - 1];
                this.tail[i].position.set(prev.position.x, 0, prev.position.z);
            }
        }
        if(this.inputManager.input === Directions.up)
            {
                Snake.direction = Directions.up;
                this.z += 1;
            }
        if(this.inputManager.input === Directions.down)
        {
            Snake.direction = Directions.down;
            this.z -= 1;
        }
        if(this.inputManager.input === Directions.left)
        {
            Snake.direction = Directions.left;
            this.x += 1;
        }
        if(this.inputManager.input === Directions.right)
        {
            Snake.direction = Directions.right;
            this.x -= 1;
        }
        this.head.position.set(this.x, 0, this.z);
    }

    public dispose(): void 
    {
        for (const tail of this.tail)
        {
            tail.geometry.dispose();
            SceneManager.scene.remove(tail); // Remueve la snake de la escena al regresar al menu principal
        }
       this.tail = [];
       this.geometry.dispose();
       this.material.dispose();
       SceneManager.scene.remove(this.head); // Remueve la cabeza de la snake de la escena al regresar al menu principal
    }
}
