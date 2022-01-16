import React, { useState } from "react";

export default function UseStateHookCounter() {
  const [state, setstate] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          return setstate(state + 1);
        }}
      >
        clicked {state} times
      </button>
    </div>
  );
}
