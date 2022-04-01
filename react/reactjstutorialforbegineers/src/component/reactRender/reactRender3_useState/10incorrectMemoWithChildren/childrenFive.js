import React from "react";

const ChildFive = ({children}) => {
    // in react react child is always a new reference which will cause child component to render

  console.log("Child1 rendered");
  return <div>I am child component 2 ---------{children} </div>;
};

const MemoizedChildFive = React.memo(ChildFive);
export default MemoizedChildFive;
