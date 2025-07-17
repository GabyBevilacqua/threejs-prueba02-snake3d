import { BoxGeometry, Color, Mesh, MeshStandardMaterial, Scene } from "three";
import { LifeCycle } from "../types/helpers";
import { SceneManager } from "../sceneManager";

export class Snake implements LifeCycle
{
    private head: Mesh;
    private geometry: BoxGeometry;
    private material: MeshStandardMaterial;
    private x: number = 0;
    private z: number = 0;
    private tail: Array<Mesh> = [];

    constructor()
    {
        this.start();
    }

    public start(): void 
    {
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

    public update(): void 
    {
        // Update snake state here
    }

    public dispose(): void 
    {
        // Clean up snake resources here
    }
}
