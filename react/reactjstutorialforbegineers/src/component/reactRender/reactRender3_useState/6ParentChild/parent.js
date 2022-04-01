import React, { useState } from "react";
import ChildRender from "./child";

const ParentRender = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const incrementBy5 = () => {
    setCount(5);
  };
  console.log("parent rendered");

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increase</button>
      <button onClick={reset}>reset</button>
      <button onClick={incrementBy5}>incrementBy5</button>
      <ChildRender />
    </div>
  );
};

export default ParentRender;
