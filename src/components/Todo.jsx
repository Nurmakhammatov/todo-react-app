import React from "react";
import All from "./All";

export default function Todo() {
  return (
    <div className="container">
      <div className="row">
        <div className="h1 text-center p-2">#todo</div>
      </div>
      <div className="row bg-warningv m-0 p-0">
        <div className="col text-center selected">All</div>
        <div className="col text-center">Active</div>
        <div className="col text-center">Completed</div>
      </div>
      <div className="br m-0 p-0"></div>
    </div>
  );
}
