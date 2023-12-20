import React from "react";
import ListFunc from "./listkeyfunc";
function UsingKey() {
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
    <ListFunc key={names.id} names={names} />
  ));
  return <div>{namelist}</div>;
}
export default UsingKey;
