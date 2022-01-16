import React, { useState, useEffect } from "react";

export default function ReactHooksTutorial7UseEffectAfterRender() {
  const [state, setstate] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${state} times`;
  });

  return (
    <div>
      <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        clicked {state} times
      </button>
    </div>
  );
}
