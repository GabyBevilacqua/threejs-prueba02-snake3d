import { Component, ReactNode } from "react";
import dynamic from "next/dynamic";

const SnakeComponent = dynamic(() => import("../snake"), {
  ssr: false,
});

export default class Home extends Component {
  public render(): ReactNode 
  {
    return <SnakeComponent />;
  }
}