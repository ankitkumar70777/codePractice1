import React, { useState } from "react";

export default function UseStateWithPreviousState() {
  const initialCount = 0;
  const [state, setstate] = useState(initialCount);

  //if you provide array fun to setstate you can acess previous state
  const incrementByFive = () => {
    setstate((prevState) => prevState + 5);
  };

  return (
    <div>
      <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        clicked {state} times
      </button>
      <button
        onClick={() => {
          setstate(initialCount);
        }}
      >
        reset
      </button>
      //you can acces previous state and based on increment or decrement /
      //change currunt state //this is always safest way to change state
      <button onClick={() => setstate((prevState) => prevState - 1)}>
        decrement
      </button>
      <button
        onClick={() => {
          incrementByFive();
        }}
      >
        increment by 5
      </button>
    </div>
  );
}
