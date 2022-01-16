import React from "react";

export default function ChildComponent(props) {
  console.log({ props });
  return (
    <div>
      <button
        onClick={() => {
          props.sayName("aai");
        }}
      >
        click me to hello parents{" "}
      </button>
    </div>
  );
}
