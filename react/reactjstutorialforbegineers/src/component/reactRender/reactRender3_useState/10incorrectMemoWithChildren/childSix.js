import React from "react";

export const ChildSix = ({ name }) => {
  const date = new Date();
  console.log("child six rendered");
  return (
    //   when dealing with impure compoennt be aware of memoization
    // impure fnction mostly when jsx can be chnage even if props and state remain same like using date,ramdon in component
    <div>
      Hello {name} , time is{" "}
      {`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
    </div>
  );
};

export const MemoizedChildSix = React.memo(ChildSix);

