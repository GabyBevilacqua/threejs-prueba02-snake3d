import { Color, HemisphereLight, PerspectiveCamera, Scene } from "three";
import { Diorama } from "./classes/diorama";

export class SceneManager {
  public static scene: Scene;
  public static camera: PerspectiveCamera;
  public static light: HemisphereLight;

  public static init(): void 
  {
    SceneManager.createScene();
    SceneManager.createCamera();
    SceneManager.createLights();

    const diorama = new Diorama();
    diorama.start(); // Initialize the diorama which includes the snake and food
  }

  private static createScene(): void 
  {
    SceneManager.scene = new Scene();
    SceneManager.scene.background = new Color(0x000000); // Set background color
  }

  private static createCamera(): void 
  {
    SceneManager.camera = new PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    SceneManager.camera.position.set(10, 5, 10); // Set camera position
    SceneManager.camera.lookAt(0, 0, 0); // Look at the center of the scene
    SceneManager.scene.add(SceneManager.camera); // Add camera to the scene
  }

  private static createLights(): void 
  {
    SceneManager.light = new HemisphereLight( 0xffffff, 0.2 )
    SceneManager.light.position.set(100, 100, 100); // Set light position
  }

}
