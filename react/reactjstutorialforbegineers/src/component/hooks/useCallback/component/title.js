import React from "react";

function TitleOf() {
  console.log("renderig title ");
  return (
    <>
      <h2>useCallBack hook</h2>
    </>
  );
}

export default React.memo(TitleOf);
