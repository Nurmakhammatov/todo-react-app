import React, { useState } from "react";
import TodoList from "./TodoList";
import Input from "./Input";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [link, setLink] = useState(1);

  const handleActive = (e) => {
    setLink(e);
  };

  return (
    <div className="container">
      <div className="row">
        <Link className="unlink" to="/" onClick={() => handleActive(1)}>
          <div className="h1 text-center p-2">#todo</div>
        </Link>
      </div>
      <Navigation link={link} setLink={setLink} handleActive={handleActive} />
      <div className="br m-0 p-0"></div>
      {link === 3 ? null : <Input setTodoList={setTodoList} />}
      <TodoList todoList={todoList} setTodoList={setTodoList} link={link} />
    </div>
  );
}
