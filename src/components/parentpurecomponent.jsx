import React, { Component } from "react";
import PureComp from "./purecomponent";
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
      </div>
    );
  }
}

export default ParentPure;
