import React from "react";

export default function Navigation() {
  return (
    <div className="row bg-warningv m-0 p-0">
      <div className="col text-center selected">All</div>
      <div className="col text-center">Active</div>
      <div className="col text-center">Completed</div>
    </div>
  );
}
