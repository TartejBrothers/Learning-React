import React, { Component } from "react";
import PureComp from "./purecomponent";
import MemoComp from "./memo";
class ParentPure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Taranjeet",
    };
  }
  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          name: "Taranjeet",
        }),
      2000
    );
  }
  render() {
    return (
      <div>
        Parent Div
        <PureComp name={this.state.name} />
        Memo Component
        <MemoComp name={this.state.name} />:
      </div>
    );
  }
}

export default ParentPure;
