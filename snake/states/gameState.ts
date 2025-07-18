
import { Game } from "../classes/game";
import { MenuState } from "./menuState";
import { State } from "./state";

export class GameState extends State
{

    public static game: Game

    public enter(): void
    {
     MenuState.diorama.dispose();
        GameState.game.start();
    }

    public exit(): void
    {
      
    }
}