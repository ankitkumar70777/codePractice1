import React, { useState } from "react";
import MemoizedChildFive from "./childrenFive";
import { MemoizedChildSix } from "./childSix";

//always remember that react only do shallow comparision of props

const ParentFive = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increment = () => {
    setCount(count + 1);
  };
  console.log("parent rendered");

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increase</button>
      <button
        onClick={() => {
          setName("ankitkumar");
        }}
      >
        set name
      </button>
      <MemoizedChildSix name={name} />
    </div>
  );
};

export default ParentFive;
