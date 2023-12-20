import React from "react";
import ListFunc from "./listkeyfunc";
function ListKey() {
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
  const namelist = newobj.map((names) => <ListFunc names={names} />);
  return <div>{namelist}</div>;
}
export default ListKey;
