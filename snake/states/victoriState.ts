import { GUIManager } from "../guiManager";
import { GameState } from "./gameState";
import { MenuState } from "./menuState";
import { State } from "./state";

export class VictoryState extends State {
  public enter(): void {
    GUIManager.showHtml("victory-screen", "flex");
  }

  public exit(): void {
    GUIManager.hideHtml("victory-screen");
    GameState.game.dispose();
    MenuState.diorama.start();
  }
}
