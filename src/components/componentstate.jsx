import React, { Component } from "react";

class StateClass extends Component {
  constructor() {
    super();
    this.state = {
      message: "State class testing",
    };
  }
  messagechange = () => {
    this.setState({ message: "State class changed " });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.messagechange()}>Click Me</button>
      </div>
    );
  }
}
export default StateClass;
