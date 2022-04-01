import React from "react";

const ChildTwo = ({name}) => {
  console.log("Child1 rendered");
  return <div>I am child component 2 --------- {name}</div>;
};

export default React.memo(ChildTwo);
