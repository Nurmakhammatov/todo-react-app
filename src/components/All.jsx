import React from "react";

export default function All() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-10 m-0 p-0">
          <input type="text" className="form-control mt-3 mb-3" />
        </div>

        {/* <div className="col-4 text-end m-0 p-0"> */}
        <button style={{ width: "15%" }} className="btn btn-primary mb-3 mt-3">
          Add
        </button>
        {/* </div>   */}
      </div>
    </div>
  );
}
