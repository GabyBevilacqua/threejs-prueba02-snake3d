import { Component, ReactNode } from "react";

export default class Home extends Component {
  public render(): ReactNode {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main content of the home page.</p>
      </div>
    );
  }
}