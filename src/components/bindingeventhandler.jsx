import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello World",
    };
  }
  changemsg() {
    this.setState({
      msg: "Message Changed ",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changemsg.bind(this)}>Change State Msg</button>
      </div>
    );
  }
}
export default EventBind;
