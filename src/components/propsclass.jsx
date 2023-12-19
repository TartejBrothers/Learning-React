import React, { Component } from "react";
class PropsClass extends Component {
  render() {
    return (
      <h1>
        Name={this.props.name}, Now = {this.props.newname}
      </h1>
    );
  }
}
export default PropsClass;
