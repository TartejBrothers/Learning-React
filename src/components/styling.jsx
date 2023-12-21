import React from "react";
import "./styles/style.css";

function NewList(props) {
  const marginsizing = {
    margin: "40px",
  };
  let classnamefunc = props.class ? "container" : "";
  return (
    <div>
      <h3 className={`${classnamefunc} fontsize `} style={marginsizing}>
        Hello World
      </h3>
    </div>
  );
}
export default NewList;
