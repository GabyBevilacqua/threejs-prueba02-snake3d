import { BoxGeometry, Color, Mesh, MeshStandardMaterial } from "three";
import { LifeCycle } from "../types/helpers";
import { SceneManager } from "../sceneManager";

export class Food implements LifeCycle 
{
  private mesh: Mesh;
  private geometry: BoxGeometry;
  private material: MeshStandardMaterial;
  private x: number = 4;
  private z: number = 4;

  constructor() 
  {
    this.start();
  }

  public start(): void 
  {
    this.geometry = new BoxGeometry(1, 1, 1);
    this.material = new MeshStandardMaterial({
      color: new Color(0, 1, 0),
      emissive: new Color(0, 1, 0),
      roughness: 0.55,
      metalness: 0.5,
    });
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, 0, this.z);
    SceneManager.scene.add(this.mesh); // Add food to the scene
  }

  public update(): void 
  {
    // Update food state here
  }

  public dispose(): void 
  {
    this.geometry.dispose();
    this.material.dispose();
    SceneManager.scene.remove(this.mesh); // Remove food from the scene
  }
}
