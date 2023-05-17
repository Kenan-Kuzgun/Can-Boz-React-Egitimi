import "./App.css";
import React, { useReducer } from "react";
import Calculate from "./calculate";

export const NumberContext = React.createContext();

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "descrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <NumberContext.Provider value={{ count: count, dispatch: dispatch }}>
        <Calculate />
      </NumberContext.Provider>
    </div>
  );
}

export default App;
