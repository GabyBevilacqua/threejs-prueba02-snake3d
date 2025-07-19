import { Snake } from "../shared/snake";
import { Directions } from "../types/helpers";

class Input
{
    public up: boolean = false;
    public down: boolean = false;   
    public left: boolean = false;
    public right: boolean = true;
}

export class InputManager
{
    public input: string = Directions.right; // Default direction is right

    constructor()
    {
        this.handleKey = this.handleKey.bind(this);
        // Listen for keydown events to update input state
        document.addEventListener("keydown", this.handleKey);
    }

    private handleKey(e: KeyboardEvent): void
    {
        switch (e.key)
        {
            case "ArrowUp":
            case "w":
            case "W":
                if (Snake.direction !== Directions.down) this.input = Directions.up;
                break;
            case "ArrowDown":
            case "s":
            case "S":
                if (Snake.direction !== Directions.up) this.input = Directions.down;
                break;
            case "ArrowLeft":
            case "a":
            case "A":
                if (Snake.direction !== Directions.right) this.input = Directions.left;
                break;
            case "ArrowRight":
            case "d":
            case "D":
                if (Snake.direction !== Directions.left) this.input = Directions.right;
                break;
        }
    }

    public dispose(): void
    {
        document.removeEventListener("keydown", this.handleKey);
    }
}

/*
    este metodo permite accionar varies teclas a la vez para cuando el movimiento es diagonal
    ademas de unidireccional, juegos en donde el elemento necesita circular en cualquier direccion

    private handleKey(e: KeyboardEvent): void
    {
        switch (e.key)
        {
            case "ArrowUp":
                this.input.up = true;
                break;
            case "ArrowDown":
                this.input.down = true;
                break;
            case "ArrowLeft":
                this.input.left = true;
                break;
            case "ArrowRight":
                this.input.right = true;
                break;
            default:
                return; // Ignore other keys
        }
    }

*/