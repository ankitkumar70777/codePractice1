import React from "react";

function PureFunctionComp1(props) {
  console.log("in functional component");
  return (
    <div>
      <h1>hello {props.name}</h1>
    </div>
  );
}

export default React.memo(PureFunctionComp1);
