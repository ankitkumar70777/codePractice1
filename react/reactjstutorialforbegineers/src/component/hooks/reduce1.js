import React, { useReducer } from "react";

const initialState = 0;
const reduceFun = (currState, action) => {
  //based on action reduceFunction run opration and return new state
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

export default function Reduce1() {
  //useReducer return state which we have called as count
  //useReducer call with reducer function and initial state
  //useReducer return two state, current value of state
  //and despatch method which is capable of specifying an action to execute code
  //specified in render function
  //we use despatch method to despatch acion based on what button use cliecked
  const [newState, dispatch] = useReducer(reduceFun, initialState);

  return (
    <div>
      <p>{newState}</p>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        decremenr
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset
      </button>
    </div>
  );
}
