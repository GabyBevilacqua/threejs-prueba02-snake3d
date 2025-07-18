import { CreditState } from "./creditState";
import { GameState } from "./gameState";
import { MenuState } from "./menuState";

export class States 
{
    public static menu = new MenuState
    public static credit = new CreditState 
    public static game = new GameState
}