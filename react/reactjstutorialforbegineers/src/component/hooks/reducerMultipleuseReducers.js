import React, { useReducer } from "react";

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

export default function ReduceMultipleUseReduce() {
  const [newState, dispatch] = useReducer(reduceFun, initialState);
  const [newState2, dispatch2] = useReducer(reduceFun, initialState);

  return (
    <div>
      <p>{newState}</p>
      <p>{newState2}</p>
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

      {/* ---- */}

      <button
        onClick={() => {
          dispatch2("increment");
        }}
      >
        Increment2
      </button>
      <button
        onClick={() => {
          dispatch2("decrement");
        }}
      >
        decrement2
      </button>

      <button
        onClick={() => {
          dispatch2("reset");
        }}
      >
        reset2
      </button>
    </div>
  );
}
