import { Color, GridHelper } from "three";
import { LifeCycle } from "../types/helpers";
import { SceneManager } from "../sceneManager";

export class Ground implements LifeCycle
{
    public static size: number = 15;
    public division: number = 15;
    public grid: GridHelper

    constructor()
    {
        this.start();
    }

    public start(): void
    {
        const color = new Color("#91caffff");
        this.grid = new GridHelper(Ground.size, this.division, color, color);
        this.grid.position.set(0, -0.5, 0);
        SceneManager.scene.add(this.grid);
    }

    public update(): void
    {
        // Update ground state here
    }

    public dispose(): void
    {
        this.grid.dispose();
        SceneManager.scene.remove(this.grid);
    }
}
