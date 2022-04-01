import React, { useState } from "react";
import MemoizedChildSeven from "./childSeven";

//always remember that react only do shallow comparision of props

const ParentSeven = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("haha");
  const increment = () => {
    setCount(count + 1);
  };
  console.log("parent rendered");
  const fullname = { fname: "ankitkumar", lname: "ravidas" };
  // if you have non-premative value ad still want to memozied first convert non premitive 
  //props into memoized prop using useMemo hook
  
  const memoizedFullname = React.useMemo(()=>fullname,[]);
  const sayHello = ()=>{
    <span>sayHello</span>
  }
  //if props is function use useCallback to memoized function
  const MemoizedsayHello = React.useCallback(sayHello,[])

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
      
      <MemoizedChildSeven name={name} memoizedFullname={memoizedFullname} MemoizedsayHello={MemoizedsayHello}/>
    </div>
  );
};

export default ParentSeven;
