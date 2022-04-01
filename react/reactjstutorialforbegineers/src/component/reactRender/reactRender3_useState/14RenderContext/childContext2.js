import React from "react";
import { countContext } from "./parentContext";

const ChildContext2 = () => {
  console.log("child2 rendered");
  // this will re-render as context value updated
  const count = React.useContext(countContext);
  return <div>ChildContext2 haha {count}</div>;
};

export default ChildContext2;
