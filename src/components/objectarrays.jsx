import React from "react";

function ObjectArray() {
  const newobj = [
    {
      id: 1,
      name: "taranjeet",
    },
    {
      id: 2,
      name: "singh",
    },
  ];
  const namelist = newobj.map((names) => (
    <h2>
      Id: {names.id} and Name: {names.name}
    </h2>
  ));
  return <div>{namelist}</div>;
}
export default ObjectArray;
