import { createContext, useReducer } from "react";

function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case "DEL_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    case "EDIT_BALANCE":
      return {
        ...state,
        budget: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "food", cost: 100 },
    { id: 14, name: "gas", cost: 200 },
  ],
};

export const AppContext = createContext();

export function AppProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
