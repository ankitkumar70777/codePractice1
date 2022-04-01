import React, { useState } from "react";

export const countContext = React.createContext(null);

const ParentContext = ({ children }) => {
  // we have received component as child from parent component
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  console.log("parent rendered");

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increase</button>
      <countContext.Provider value={count}>
        {/* child component display here */}
        {children}
      </countContext.Provider>
    </div>
  );
};

export default ParentContext;
