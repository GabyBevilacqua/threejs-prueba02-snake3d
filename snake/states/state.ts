export abstract class State 
{
    public static currentState: State | null = null;

    public static setCurrent(newState: State): void {
        if (State.currentState === newState) return
        if (State.currentState)  State.currentState.exit();
        State.currentState = newState;
        State.currentState.enter();
    }
    public abstract enter(): void;

    public abstract exit(): void;
}