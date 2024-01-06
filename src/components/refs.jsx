import React, { Component } from "react";

export class Refs extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.callbackRef = null;
    this.setCallbackRef = (element) => {
      this.callbackRef = element;
    };
  }
  componentDidMount() {
    this.callbackRef.focus();
    // this.inputRef.current.focus();
    console.log(this.setCallbackRef);
  }
  clickhandler = () => {
    alert(this.callbackRef.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCallbackRef} />
        <button onClick={this.clickhandler}>Click</button>
      </div>
    );
  }
}

export default Refs;
