import React, { useContext } from "react";
import { CountContext } from "../reducerWithUseContext";

export default function ComponentD() {
  const CountContextVar = useContext(CountContext);
  console.log({ CountContext });
  return (
    <div>
      counter A {CountContextVar.countState}
      <button
        onClick={() => {
          CountContextVar.countDispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          CountContextVar.countDispatch("decrement");
        }}
      >
        decremenr
      </button>
      <button
        onClick={() => {
          CountContextVar.countDispatch("reset");
        }}
      >
        reset
      </button>
    </div>
  );
}
