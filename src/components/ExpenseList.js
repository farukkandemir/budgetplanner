import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          name={expense.name}
          cost={expense.cost}
          id={expense.id}
        />
      ))}
    </ul>
  );
}
