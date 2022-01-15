import React, { useState } from "react";

export default function Input({ setTodoList }) {
  const [input, setInput] = useState("");

  const handleAddTodos = () => {
    if (input !== "") {
      const todo = {
        id: Math.floor(Math.random() * 1000),
        name: input,
        clicked: false,
      };
      setTodoList((prev) => [...prev, todo]);
      setInput("");
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-10 m-0 p-0">
          <input
            placeholder="add details"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="form-control mt-3 mb-3 fs-5"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleAddTodos();
              }
            }}
          />
        </div>
        <button
          style={{ width: "15%" }}
          onClick={handleAddTodos}
          className="btn btn-primary mb-3 mt-3 fs-5"
        >
          Add
        </button>
      </div>
    </div>
  );
}
