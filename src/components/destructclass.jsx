import React, { Component } from "react";
class PropsClass extends Component {
  render() {
    const { name, newname } = this.props;
    return (
      <h1>
        Name={name}, Now = {newname}
      </h1>
    );
  }
}
export default PropsClass;
