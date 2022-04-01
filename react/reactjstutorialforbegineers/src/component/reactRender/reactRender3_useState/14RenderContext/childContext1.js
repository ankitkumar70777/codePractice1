import React from "react";
import ChildContext2 from "./childContext2";

const ChildContext1 = () => {
  console.log("child1 rendered");
  return (
    <div>
      {/* this will not re-render */}
      child1
      <ChildContext2 />
    </div>
  );
};

export default ChildContext1;
// const MemoizedChildContext1 = React.memo(ChildContext1);
// export default MemoizedChildContext1;
