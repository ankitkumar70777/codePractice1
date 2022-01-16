import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reduceFun = (currState, action) => {
  console.log("action----", action);
  console.log("currState----", currState);
  //by using action and initioan state as object we can pass additioanl data
  switch (action.type) {
    case "increment":
      return {
        ...currState,
        firstCounter: currState.firstCounter + action.value,
      };

    case "decrement":
      return {
        ...currState,
        firstCounter: currState.firstCounter - action.value,
      };

    case "increment2ndCounter":
      return {
        ...currState,
        secondCounter: currState.secondCounter + action.value,
      };

    case "decrement2ndCounter":
      return {
        ...currState,
        secondCounter: currState.secondCounter - action.value,
      };

    case "reset":
      return initialState;

    default:
      return "unknow op";
  }
};

export default function ReduceComplexState() {
  const [newState, dispatch] = useReducer(reduceFun, initialState);

  return (
    <div>
      <p>{newState.firstCounter}</p>
      <p>{newState.secondCounter}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        decremenr
      </button>

      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        Increment by 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        decremenr by 5
      </button>

      <button
        onClick={() => {
          dispatch({ type: "increment2ndCounter", value: 1 });
        }}
      >
        Increment 2nd counter
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement2ndCounter", value: 1 });
        }}
      >
        decremenr 2nd counter
      </button>

      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </div>
  );
}
