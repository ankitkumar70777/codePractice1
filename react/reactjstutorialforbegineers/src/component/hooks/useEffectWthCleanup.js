import React, { useState, useEffect } from "react";
import UseStateRunOnlyOnce from "./useEffectRunOnlyOnce";
import "../../App.css";

export default function UseEffectWthCleanup() {
  const [status, setStatus] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        show/Hide h1
      </button>
      {status && <UseStateRunOnlyOnce></UseStateRunOnlyOnce>}
    </div>
  );
}
