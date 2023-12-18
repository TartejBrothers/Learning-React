import React from "react";

const Trialnew = () => {
  return React.createElement(
    "div",
    null,
    "New Function From React Create Element"
  );
};

// More Complex :
const TrialFunc = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "New Function From React Create Element")
  );
};
export { Trialnew, TrialFunc };
