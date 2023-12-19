import React from "react";
const FunctionHandler = () => {
  function changeHandle() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={changeHandle}>Click Me</button>
    </div>
  );
};
export default FunctionHandler;
