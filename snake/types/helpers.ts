export interface LifeCycle
{
    start: (...args: Array<any>) => void;
    update: (...args: Array<any>) => void;
    dispose: (...args: Array<any>) => void;
}

export enum Directions
{
    up = "UP",
    down = "DOWN",
    left = "LEFT",
    right = "RIGHT"
}