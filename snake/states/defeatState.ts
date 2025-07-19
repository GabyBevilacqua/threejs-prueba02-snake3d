import { GUIManager } from "../guiManager";
import { GameState } from "./gameState";
import { MenuState } from "./menuState";
import { State } from "./state";

export class DefeatState extends State
{


    public enter(): void
    {
        GUIManager.showHtml("defeat-screen", "flex");
    }

    public exit(): void
    {
        GUIManager.hideHtml("defeat-screen");
        GameState.game.dispose();
        MenuState.diorama.start();
    }
}