import React, { useState, useEffect, useRef } from "react";

function UseRef2() {
  const [count, setCounter] = useState(0);
  const clearIntervalRef = useRef();
  useEffect(() => {
    //useRef can hold reference to dom node using ref attrbute
    //also it can be use to store any mutable value
    //it does not re-render when data chnages
    //it also remember stored data even ater other state veriable cause a re-render
    //of of this component
    clearIntervalRef.current = setInterval(() => {
      setCounter((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(clearIntervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          clearInterval(clearIntervalRef.current);
        }}
      >
        clear Interval
      </button>
    </div>
  );
}

export default UseRef2;
