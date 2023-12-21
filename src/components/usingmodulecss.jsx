import React from "react";
import "./styles/appmodule.css";
import styling from "./styles/appmodule.module.css";
function ModuleCheck() {
  return (
    <div>
      <h1 className="success">Success Message</h1>
      <h1 className={styling.error}>Error Message </h1>
    </div>
  );
}
export default ModuleCheck;
