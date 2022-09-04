import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { AppContext } from "../context/AppContext";

export default function AddExpense() {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    const expense = {
      id: nanoid(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            className="form-control"
            id="cost"
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
      </div>
      <div className="d-grid col-sm-4 mx-auto">
        <button className="btn btn-primary mt-4" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
