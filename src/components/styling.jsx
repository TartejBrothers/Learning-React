import React from "react";
import "./styles/style.css";

function NewList(props) {
  let classnamefunc = props.class ? "container" : "";
  return (
    <div className={classnamefunc}>
      <h1>Hello World</h1>
    </div>
  );
}
export default NewList;
