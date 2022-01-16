import React, { useEffect, useState } from "react";

function useCounter2(initialCount = 0, value = 0) {
  const [count, setCount] = useState(initialCount);

  const increaseCount = () => {
    setCount((prevCount) => {
      return prevCount + value;
    });
  };

  const decrementCount = () => {
    setCount((prevCount) => {
      return prevCount - value;
    });
  };

  const reset = () => {
    setCount(initialCount);
  };

  return [count, increaseCount, decrementCount, reset];
}

export default useCounter2;
