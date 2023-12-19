import React, { Component } from "react";
class HandlingClass extends Component {
  changeHandle() {
    console.log("Button Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.changeHandle}>Class Handler</button>
      </div>
    );
  }
}
export default HandlingClass;
