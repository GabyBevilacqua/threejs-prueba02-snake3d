import React, { Component, JSX, ReactNode } from "react";
import { RendererManager } from "./rendererManager";
import { Menu } from "./ui/menu";
import Panel from "./ui/panel";

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
        <Panel />
        <Menu />
      </div>
    );
  }
}