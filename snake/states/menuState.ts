import { Diorama } from "../shared/diorama";
import { GUIManager } from "../guiManager";
import { State } from "./state";

export class MenuState extends State
{

    public static diorama: Diorama;
    public enter(): void
    {
      GUIManager.menuButtons();
    }

    public exit(): void
    {
       GUIManager.clearButtons();
    }
}