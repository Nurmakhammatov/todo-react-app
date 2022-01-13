import React from "react";
import Input from "./Input";
import Navigation from "./Navigation";

export default function Todo() {
  return (
    <div className="container">
      <div className="row">
        <div className="h1 text-center p-2">#todo</div>
      </div>
      <Navigation />
      <div className="br m-0 p-0"></div>
      <Input />
    </div>
  );
}
