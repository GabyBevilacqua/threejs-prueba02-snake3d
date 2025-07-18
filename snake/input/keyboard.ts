class Input
{
    public up: boolean = false;
    public down: boolean = false;   
    public left: boolean = false;
    public right: boolean = true;
}

export class InputManager
{
    public input: Input = new Input

    constructor()
    {
        document.addEventListener("keydown", this.handleKey.bind(this));
    }

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
}