import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  console.log("rendered");

  return (
    <div>
      <p>{count}</p>
      <button onClick={increaseCount}>increaseCount</button>
    </div>
  );
};

export default UseState;
