import React from "react";
import {
  MdDeleteOutline,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";

export default function TodoList({ link, todoList, setTodoList }) {
  const handleCheckStatus = (todo) => {
    setTodoList((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...todo, clicked: !todo.clicked } : t
      )
    );
  };

  const handleRemove = (e) => {
    const array = [...todoList]; // make a separate copy of the array
    const index = array.indexOf(e);
    if (index !== -1) {
      array.splice(index, 1);
      setTodoList([...array]);
    }
  };

  return link === 1 ? (
    todoList.map((todo) => (
      <div key={todo.id}>
        {!todo.clicked ? (
          <div
            className="todo-list my-1 fs-5"
            onClick={() => handleCheckStatus(todo)}
          >
            <MdCheckBoxOutlineBlank className="text-primary" />
            <div className="todo-name">{todo.name}</div>
          </div>
        ) : (
          <div
            className="todo-list my-1 text-success fs-5"
            onClick={() => handleCheckStatus(todo)}
          >
            <MdCheckBox />
            <div className="todo-name__clicked">{todo.name}</div>
          </div>
        )}
      </div>
    ))
  ) : link === 2 ? (
    todoList.map((todo) =>
      !todo.clicked ? (
        <div key={todo.id} className="fs-5">
          <div
            className="todo-list my-1 text-dark"
            onClick={() => handleCheckStatus(todo)}
          >
            <MdCheckBoxOutlineBlank className="text-primary" />
            <div className="todo-name">{todo.name}</div>
          </div>
        </div>
      ) : null
    )
  ) : link === 3 ? (
    <div className="mt-3">
      {todoList.map((todo) =>
        !todo.clicked ? null : (
          <div key={todo.id} className="row fs-5">
            <div className="todo-list my-1 col">
              <MdCheckBox />
              <div className="todo-name">{todo.name}</div>
            </div>
            <div className="text-end col">
              <span className="text-success border rounded pb-1 px-1 mx-2">
                Completed
              </span>
              <MdDeleteOutline
                style={{ cursor: "pointer" }}
                className="fs-3 text-danger"
                onClick={() => handleRemove(todo)}
              />
            </div>
          </div>
        )
      )}
    </div>
  ) : null;
}
