import React, { Component } from "react";
import Child from "./methodsasprops.jsx";

class PropClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "New Msg",
    };
    this.eventTap = this.eventTap.bind(this);
  }

  eventTap(newMsg) {
    alert(
      `Hello, your message is: ${this.state.msg} and the new message is: ${newMsg}`
    );
  }

  render() {
    return (
      <div>
        <Child eventhandler={this.eventTap} />
      </div>
    );
  }
}

export default PropClass;
