import { Color, GridHelper } from "three";
import { LifeCycle } from "../types/helpers";

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
