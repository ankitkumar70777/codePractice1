import React, { useState } from "react";

const Child = (props) => {
  console.log("rendered");

  return (
    <div>
      <h3>{props.title.name}</h3>
      <p>i am child component</p>
    </div>
  );
};

export default React.memo(Child);
