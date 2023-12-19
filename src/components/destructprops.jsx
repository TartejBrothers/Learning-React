import React from "react";
const PrintFunc = ({ name, newname, children }) => {

    // or we can do 
    // const PrintFunc=(props)=> { const {name, newname,children}= props;
//}
  return (
    <div>
      <h1>
        Print {name}, now {newname}
        and
      </h1>
      {children}
    </div>
  );
};
export default PrintFunc;


