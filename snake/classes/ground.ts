import { Color, GridHelper } from "three";
import { LifeCycle } from "../types/helpers";
import { SceneManager } from "../sceneManager";

export class Ground implements LifeCycle
{
    private size: number = 15;
    private division: number = 15;
    public grid: GridHelper

    constructor()
    {
        this.start();
    }

    public start(): void
    {
        const color = new Color(0.1, 0.1, 0.1);
        this.grid = new GridHelper(this.size, this.division, color, color);
        this.grid.position.set(0, -0.5, 0);
        SceneManager.scene.add(this.grid);
    }

    public update(): void
    {
        // Update ground state here
    }

    public dispose(): void
    {
        // Clean up ground resources here
    }
}
