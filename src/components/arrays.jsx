import React from "react";

export default function ArraysNew() {
  const arr = ["taranjeet", "singh", "bedi"];
  // Or we can map before return
  const arrnames = arr.map((arrnamenew, index) => (
    <h2 key={index}>{arrnamenew}</h2>
  ));
  return (
    <div>
      <h1>
        Hi {arr[0]} {arr[1]}{" "}
      </h1>
      {/* To iterate we use map:  */}
      {arr.map((arrname, index) => (
        <h2 key={index}>{arrname}</h2>
      ))}
      {arrnames}
    </div>
  );
}
