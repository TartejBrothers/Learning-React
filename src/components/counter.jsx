import React, { Component } from "react";

class counter extends Component {
  constructor() {
    super();
    this.state = {
      counternum: 1,
    };
  }
  changeNumber() {
    this.state.counternum = this.state.counternum + 1; // This changes the value on the console
    this.setState({
      counternum: this.state.counternum, // This changes value on the screen
    });
    console.log(this.state.counternum);

    // We can also use prevstate :
    this.setState((prevstate) => ({ counternum: prevstate.counternum }));
  }
  changeNumberSix() {
    this.changeNumber();
    this.changeNumber();
    this.changeNumber();
    this.changeNumber();
    this.changeNumber();
    this.changeNumber();
  }
  render() {
    return (
      <div>
        <h1>Counter = {this.state.counternum}</h1>
        <button onClick={() => this.changeNumber()}>
          Click Here to change Number
        </button>
        <br />
        <button onClick={() => this.changeNumberSix()}>
          Click Here to change Number by 6
        </button>
      </div>
    );
  }
}
export default counter;
