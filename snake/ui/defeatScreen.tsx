import { Component, ReactNode } from "react"
import { State } from "../states/state"
import { States } from "../states/states"

export default class DefeatScreen extends Component 
{
    public render(): ReactNode 
    {
        return (
            <div id="defeat-screen">
                <h3 className="defeat-title">Perdiste</h3>
                <button onClick={() => State.setCurrent(States.menu)} className="button">Menu</button>
            </div>
        )
    }

}
