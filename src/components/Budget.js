import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Budget() {
  const { budget, dispatch } = useContext(AppContext);
  const [editedBudget, setEditedBudget] = useState();
  const [editBudget, setEditBudget] = useState(false);

  function handleSave() {
    dispatch({ type: "EDIT_BALANCE", payload: editedBudget });
    setEditBudget(false);
  }

  if (editBudget) {
    return (
      <div className="alert alert-secondary">
        <div className="d-flex justify-content-between">
          <span>
            Budget:$
            <input
              placeholder={budget}
              onChange={(e) => setEditedBudget(e.target.value)}
            />
          </span>
          <button className="badge bg-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="alert alert-secondary">
        <span className="d-flex justify-content-between">
          Budget: ${budget}
          <button
            className="badge bg-primary"
            onClick={() => setEditBudget(true)}
          >
            Edit
          </button>
        </span>
      </div>
    );
  }
}
