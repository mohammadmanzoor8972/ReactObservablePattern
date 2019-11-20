import React from "react";
import Observable from "../services/Observerable";

class HomePage extends React.PureComponent {
  handler = () => {
    Observable.broadcast("I am from Home Page...");
  };

  render() {
    return (
      <div>
        Hello from Home Page
        <button onClick={this.handler}>Notify</button>
      </div>
    );
  }
}

export default HomePage;
