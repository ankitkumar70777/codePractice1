import React, { useState } from "react";


const Parent1 = ({children}) => {
  
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  console.log("parent rendered");

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increase</button>
      {children}
    </div>
  );
};

export default Parent1;
