import React, { useState, useEffect } from "react";
import useCounter2 from "./setTitlehook";

function CounterTwoEx2() {
  const [count, increaseCount, decrementCount, reset] = useCounter2(0, 10);

  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          increaseCount();
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          decrementCount();
        }}
      >
        decrement
      </button>

      <button
        onClick={() => {
          reset();
        }}
      >
        reset
      </button>
    </div>
  );
}

export default CounterTwoEx2;
