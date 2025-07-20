import { Clock } from "three";
import { SceneManager } from "../sceneManager";
import { LifeCycle } from "../types/helpers";
import { Food } from "./food";
import { Snake } from "./snake";
import { Ground } from "./ground";
import { State } from "../states/state";
import { States } from "../states/states";
import { GUIManager } from "../guiManager";

export class Game implements LifeCycle 
{
  private snake: Snake;
  private food: Food;
  private ground: Ground;
  private stop: boolean = false;
  private clock: Clock = new Clock();
  private score: number = 0;

  public start(): void 
  {
    this.score = 0;
    GUIManager.showHtml("score")
    GUIManager.score.innerHTML = `score ${this.score}`;
    this.stop = false;
    this.snake = new Snake();
    this.food = new Food();
    this.ground = new Ground();
    SceneManager.camera.position.set(0, 26, -8);
    SceneManager.camera.lookAt(0, 0, 0);
    this.update();
  }
  
  public update(): void 
  {
    if (this.stop) return;
    requestAnimationFrame(this.update.bind(this));
    const delta = this.clock.getDelta();
    this.checkDefeat();
    this.handleFood();
    this.checkVictory();
    this.snake.update(delta)
  }

  public handleFood(): void
  {
    if (this.snake.x === this.food.x && this.snake.z === this.food.z)
    {
      this.score += 1;
      GUIManager.score.innerHTML = `score ${this.score}`;
      this.food.respawn(this.snake.head, this.snake.tail);
      this.snake.grow();
    }
  }
  
    public checkDefeat(): void
    {
      for (const tail of this.snake.tail)
      {
        if (tail.position.x === this.snake.x && tail.position.z === this.snake.z) this.defeat();
      }
      if (this.snake.x >= Ground.size / 2) this.defeat();
      if (this.snake.x <= -Ground.size / 2) this.defeat();
      if (this.snake.z >= Ground.size / 2) this.defeat();
      if (this.snake.z <= -Ground.size / 2) this.defeat();
    }

    public checkVictory(): void
    {
      if (this.score > 12)
      {
        this.stop = true;
        State.setCurrent(States.victory);
      }
    }
  
    public defeat(): void
    {
      this.stop = true;
      State.setCurrent(States.defeat);
    }
  
  public dispose(): void {
    GUIManager.hideHtml("score");
    this.stop = true;
    this.snake.dispose();
    this.food.dispose();
    this.ground.dispose();
  }
}
