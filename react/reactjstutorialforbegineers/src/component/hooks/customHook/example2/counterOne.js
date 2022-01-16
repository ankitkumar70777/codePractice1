import React, { useState, useEffect } from "react";
import useCounter2 from "./setTitlehook";

function CounterOneEx2() {
  const [count, increaseCount, decrementCount, reset] = useCounter2(10, 5);

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

export default CounterOneEx2;
