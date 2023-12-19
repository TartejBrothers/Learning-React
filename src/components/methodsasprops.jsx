import React from "react";

function MethodProp(props) {
  return (
    <div>
      {/* <button onClick={props.eventhandler}>click this Child Component</button> */}
      <button onClick={() => props.eventhandler("New Msg")}>
        click this Child Component
      </button>
    </div>
  );
}

export default MethodProp;
