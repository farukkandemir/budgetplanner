import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="container bg-light">
        <h1 className="mt-3 text-center">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-lg">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3 text-center">Expenses</h3>

        <div className="col-sm mt-3">
          <ExpenseList />
        </div>

        <div className="row mt-3">
          <h3 className="mt-3 text-center">Add Expenses</h3>
          <AddExpense />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
