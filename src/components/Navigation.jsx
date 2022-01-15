import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ link, handleActive }) {
  return (
    <div className="row bg-warningv m-0 p-0">
      <Link
        onClick={() => handleActive(1)}
        className={
          link === 1
            ? "col text-center selected unlink fs-5 text-primary"
            : "col text-center unlink  fs-5"
        }
        to="/"
      >
        <div>All</div>
      </Link>
      <Link
        onClick={() => handleActive(2)}
        className={
          link === 2
            ? "col text-center selected unlink  fs-5 text-primary"
            : "col text-center unlink  fs-5"
        }
        to="/active"
      >
        <div>Active</div>
      </Link>
      <Link
        onClick={() => handleActive(3)}
        className={
          link === 3
            ? "col text-center selected unlink fs-5 text-primary"
            : "col text-center unlink  fs-5"
        }
        to="/completed"
      >
        <div>Completed</div>
      </Link>
    </div>
  );
}
