import React, { Component } from "react";

class Conditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }
  changeState = () => {
    this.setState(
      {
        login: true,
      },
      () => {
        console.log(this.state.login); // This will log the updated state
      }
    );
  };
  render() {
    if (this.state.login) {
      return (
        <div>
          <h1> Hello Logged In User</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Hello Guest</h1>
          <button onClick={() => this.changeState()}>Login</button>
        </div>
      );
    }
  }
  // We can also use ?
  render() {
    return this.state.login ? (
      <div>
        <h1>Hello Logged in User</h1>
      </div>
    ) : (
      <div>
        <h1>Hello Guest</h1>
        <button onClick={() => this.changeState()}>Login</button>
      </div>
    );
  }
}
export default Conditions;
