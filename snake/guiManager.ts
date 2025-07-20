import { State } from "./states/state";
import { States } from "./states/states";

export class GUIManager
{
    public static score: HTMLParagraphElement = document.createElement("p")
  
    public static createScore(): void
    {
        GUIManager.score.style.fontSize = "2rem";
        GUIManager.score.style.color = "aqua";
        GUIManager.score.style.position = "fixed";
        GUIManager.score.style.top = "40px";
        GUIManager.score.style.right = "60px";
        GUIManager.score.style.zIndex = "10";
        GUIManager.score.id = "score";
        document.body.appendChild(GUIManager.score);
    }
    public static menuButtons(): void
    {
        const menu = document.getElementById("menu");
        const credit = document.createElement("button");
        credit.className = "button";
        credit.innerHTML = "CREDITOS";
        credit.onclick = () => State.setCurrent(States.credit)
        const game = document.createElement("button");
        game.className = "button";
        game.innerHTML = "JUGAR";
        game.onclick = () => State.setCurrent(States.game)
        menu.appendChild(credit);
        menu.appendChild(game);
    }

    public static creditButtons(): void
    {
        const menu = document.getElementById("menu");
        const back = document.createElement("button");
        back.className = "button";
        back.innerHTML = "VOLVER";
        back.onclick = () => State.setCurrent(States.menu);
        menu.appendChild(back);
    }
    public static clearButtons(): void
    {
        const menu = document.getElementById("menu");
        menu.textContent = ""; // Clear all buttons
    }

    public static showHtml(id: string, style = "block"): void
    {
        const element = document.getElementById(id);
        element.style.display = style;

    }

        public static hideHtml(id: string): void
    {
        const element = document.getElementById(id);
        element.style.display = "none";
    }
}