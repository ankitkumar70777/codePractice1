import React, { useState, useEffect } from "react";
import useSetTitlehook from "./setTitlehook";

function CounterOne() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  //old code
  //   useEffect(() => {
  //     document.title = `count : ${count}`;
  //   }, [count]);

  //custom hook to set title
  useSetTitlehook(count);

  return (
    <div>
      <button
        onClick={() => {
          increaseCount();
        }}
      >
        clicked {count}{" "}
      </button>
    </div>
  );
}

export default CounterOne;
