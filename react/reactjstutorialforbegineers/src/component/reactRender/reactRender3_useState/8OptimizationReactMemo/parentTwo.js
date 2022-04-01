import React, { useState } from "react";
import ChildTwo from "./childTwo";

//always remember that react only do shallow comparision of props

const ParentTwo = () => {
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
      <button onClick={()=>{setName("ankitkumar")}}>set name</button>
      <ChildTwo name={name} />
    </div>
  );
};

export default ParentTwo;
