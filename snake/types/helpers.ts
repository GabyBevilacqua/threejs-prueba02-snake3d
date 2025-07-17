export interface LifeCycle
{
    start: (...args: Array<any>) => void;
    update: (...args: Array<any>) => void;
    dispose: (...args: Array<any>) => void;
}