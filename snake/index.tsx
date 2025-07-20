import React, { Component, JSX, ReactNode } from "react";
import { RendererManager } from "./rendererManager";
import { Menu } from "./ui/menu";
import Panel from "./ui/panel";
import DefeatScreen from "./ui/defeatScreen";
import VictoryScreen from "./ui/victoryScreen";

export default class SnakeComponent extends Component {
  public componentDidMount(): void {
    RendererManager.startGame();
  }

  public render(): ReactNode {
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        {/* Título fijo en la parte superior */}
        <h1 className="main-title">SNAKE 3D</h1>
        {/* Video de fondo en loop */}
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          src="https://res.cloudinary.com/dzqgni1qi/video/upload/v1752934782/3129671-hd_1280_720_30fps_jrikfm.mp4"
        />
        {/* Canvas y UI encima del fondo de video */}
        <canvas id="game" className="fullscreen" />
        <Panel />
        <Menu />
        <DefeatScreen />
        <VictoryScreen />
      </div>
    );
  }
}