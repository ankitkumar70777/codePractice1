// 4.) inport use context
import React, { useContext } from "react";
//5. inport context
import { CountContext } from "../reducerWithUseContext";

export default function ComponentA() {
  // 6. create varibale by context inported
  const CountContextVar = useContext(CountContext);
  console.log({ CountContext });
  return (
    <div>
      counter A {CountContextVar.countState}
      <button
        onClick={() => {
          //use context varibale to change and share state globally
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
