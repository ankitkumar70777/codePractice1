import React, { useEffect, useState } from "react";

function UseEffectWithIncorrectDependancy() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    console.log("incrementing");
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect watching-------");
    const interval = setInterval(incrementCount, 1000);
    return () => {
      console.log("interval cleared");
      clearInterval(interval);
    };
  }, [count]);

  return <div>{count}</div>;
}

export default UseEffectWithIncorrectDependancy;
