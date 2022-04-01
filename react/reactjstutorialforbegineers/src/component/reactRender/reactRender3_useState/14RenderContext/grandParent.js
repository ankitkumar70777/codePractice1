import React from "react";
import ParentContext from "./parentContext";
import ChildContext1 from "./childContext1";

const GrandParent = () => {
  return (
    <div>
      GrandParent
      <ParentContext>
        {/* other way to skin re-render of component who is not receiving context
      is to add main child componet as children 
       */}
        <ChildContext1 />
      </ParentContext>
    </div>
  );
};

export default GrandParent;
