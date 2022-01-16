import React, { useReducer } from "react";
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import ComponentC from "./components/componentC";

//first create context

export const CountContext = React.createContext();

//2) created initial state and reduce function

const initialState = 0;
const reduceFun = (currState, action) => {
  switch (action) {
    case "increment":
      return currState + 1;

    case "decrement":
      return currState - 1;

    case "reset":
      return initialState;

    default:
      return "unknow op";
  }
};

export default function ReducerWithUseContext() {
  const [newState, dispatch] = useReducer(reduceFun, initialState);

  // 3)wrap context with all component so it can be available across all component
  // 3) share it as value to all component

  return (
    <CountContext.Provider
      value={{ countState: newState, countDispatch: dispatch }}
    >
      <div>
        count : {newState}
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>
      </div>
    </CountContext.Provider>
  );
}
