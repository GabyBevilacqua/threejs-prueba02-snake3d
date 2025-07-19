import { CreditState } from "./creditState";
import { DefeatState } from "./defeatState";
import { GameState } from "./gameState";
import { MenuState } from "./menuState";
import { VictoryState } from "./victoriState";

export class States 
{
    public static menu = new MenuState
    public static credit = new CreditState 
    public static game = new GameState
    public static defeat = new DefeatState
    public static victory = new VictoryState
}