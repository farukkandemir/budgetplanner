import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

export default function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}

      <div>
        <span className="badge bg-primary rounded-pill mr-3">
          ${props.cost}
        </span>
        <TiDelete
          size="1.5rem"
          onClick={() => dispatch({ type: "DEL_EXPENSE", payload: props.id })}
        />
      </div>
    </li>
  );
}
