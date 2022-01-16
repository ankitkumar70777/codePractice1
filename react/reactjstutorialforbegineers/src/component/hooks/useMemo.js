import React, { useState, useMemo } from "react";

//use memo is hook that only recompute the cached value
// when one of dependancies has changed
//this optimization help to avoid heavy computation on every render

function UseMemoHook() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);

  const incrementCounter1 = () => {
    setCount1(count1 + 1);
  };

  const incrementCounter2 = () => {
    setCount2(count2 + 1);
  };

  const isEven = useMemo(() => {
    let x = 0;
    while (x < 2000000000) x++;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <button onClick={incrementCounter1}>
        {/* every time state updates the component re-renders */}
        {/* not no need to call isEven as it is stored as value */}
        counter {count1} <span>{isEven ? "even" : "odd"}</span>
      </button>
      <br />
      <button onClick={incrementCounter2}>counter {count2} </button>
    </div>
  );
}

export default UseMemoHook;

//useCalback caches provided function itself and useMemo calls provided function and
//caches returned result
//if you need to cash function use callback
//if you need to cache result of invoked function use useMEomo
