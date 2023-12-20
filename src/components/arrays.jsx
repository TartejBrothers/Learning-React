import React from "react";

export default function ArraysNew() {
  const arr = ["taranjeet", "singh", "bedi"];
  // Or we can map before return
  const arrnames = arr.map((arrnamenew) => <h2>{arrnamenew}</h2>);
  return (
    <div>
      <h1>
        Hi {arr[0]} {arr[1]}{" "}
      </h1>
      {/* To iterate we use map:  */}
      {arr.map((arrname) => (
        <h2>{arrname}</h2>
      ))}
      <h3>{arrnames}</h3>
    </div>
  );
}
