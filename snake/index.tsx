import React, { Component, JSX, ReactNode } from "react";
import { RendererManager } from "./rendererManager";

export default class SnakeComponent extends Component 
{
  public componentDidMount(): void 
  {
    RendererManager.startGame();
  }
  
  public render(): ReactNode 
  {
    return (
      <div>
        <canvas id="game" className="fullscreen" />
      </div>
    );
  }
}