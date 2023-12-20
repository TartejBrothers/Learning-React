import React from "react";

function ListFunc({ names }) {
  return (
    <div>
      This is from List Function
      <h1>
        Id: {names.id} and Name : {names.name}
      </h1>
    </div>
  );
}
export default ListFunc;
